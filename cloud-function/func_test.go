package cloudfunction

import (
	"bytes"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"
)

func Test_PurgeCloudFlare(t *testing.T) {
	t.Run("invalid body", func(t *testing.T) {
		buf := bytes.NewBufferString(`this is not json`)
		req := httptest.NewRequest(http.MethodPost, "/", buf)
		rec := httptest.NewRecorder()
		PurgeCloudFlare(rec, req)
		resp := rec.Result()
		if resp.StatusCode != http.StatusInternalServerError {
			t.Errorf("unexpected response code %d", resp.StatusCode)
		}
	})

	t.Run("ignores non-master branches", func(t *testing.T) {
		buf := bytes.NewBufferString(`{"branch":"some-pr-branch"}`)
		req := httptest.NewRequest(http.MethodPost, "/", buf)
		rec := httptest.NewRecorder()
		PurgeCloudFlare(rec, req)
		resp := rec.Result()
		if resp.StatusCode != http.StatusOK {
			t.Errorf("unexpected response code %d", resp.StatusCode)
		}

		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			t.Fatalf("unexpected error reading response body: %v", err)
		}
		defer resp.Body.Close()

		if string(body) != "Ok. Thanks." {
			t.Errorf("unexpected response body, %q", string(body))
		}
	})

	t.Run("rejects missing JWT", func(t *testing.T) {
		buf := bytes.NewBufferString(`{"branch":"master"}`)
		req := httptest.NewRequest(http.MethodPost, "/", buf)
		rec := httptest.NewRecorder()

		req.Header.Set("X-Webhook-Signature", "")
		PurgeCloudFlare(rec, req)
		resp := rec.Result()
		if resp.StatusCode != http.StatusForbidden {
			t.Errorf("unexpected response code %d", resp.StatusCode)
		}
	})

	t.Run("rejects incorrect JWT", func(t *testing.T) {
		buf := bytes.NewBufferString(`{"branch":"master"}`)
		req := httptest.NewRequest(http.MethodPost, "/", buf)
		rec := httptest.NewRecorder()

		req.Header.Set("X-Webhook-Signature", "not.even.close")
		PurgeCloudFlare(rec, req)
		resp := rec.Result()
		if resp.StatusCode != http.StatusForbidden {
			t.Errorf("unexpected response code %d", resp.StatusCode)
		}
	})

	t.Run("makes a purge cache request against CloudFlare API", func(t *testing.T) {
		purgeHappened := false

		cloudflareHTTPClient = NewTestClient(func(r *http.Request) *http.Response {
			purgeHappened = true

			if r.Method != http.MethodPost {
				t.Errorf("unexpected HTTP method: %q", r.Method)
			}

			if r.Host != "api.cloudflare.com" {
				t.Errorf("unexpected HTTP Host value: %q", r.Host)
			}

			if r.URL.Path != "/client/v4/zones/test-cf-zone/purge_cache" {
				t.Errorf("unexpected HTTP request path: %q", r.URL.Path)
			}

			if r.Header.Get("Authorization") != "Bearer test-cloudflare-api-token" {
				t.Errorf("incorrect authorization header: %q", r.Header.Get("Authorization"))
			}

			if r.Header.Get("Content-Type") != "application/json" {
				t.Errorf("incorrect content-type header: %q", r.Header.Get("Content-Type"))
			}

			body, err := ioutil.ReadAll(r.Body)
			if err != nil {
				t.Fatalf("unexpected error reading body: %v", err)
			}
			defer r.Body.Close()

			if string(body) != `{"purge_everything":true}` {
				t.Errorf("unexpected HTTP request body: %q", string(body))
			}

			return &http.Response{
				StatusCode: 200,
				Body:       ioutil.NopCloser(bytes.NewBufferString(`OK`)),
				Header:     make(http.Header),
			}
		})

		buf := bytes.NewBuffer(validTestBody)
		req := httptest.NewRequest(http.MethodPost, "/", buf)
		req.Header.Set("X-Webhook-Signature", string(validTestJWT))
		rec := httptest.NewRecorder()
		PurgeCloudFlare(rec, req)

		resp := rec.Result()
		if resp.StatusCode != http.StatusOK {
			t.Errorf("unexpected response code %d", resp.StatusCode)
		}

		if !purgeHappened {
			t.Errorf("purge request did not occur")
		}
	})
}

// RoundTripFunc .
type RoundTripFunc func(req *http.Request) *http.Response

// RoundTrip .
func (f RoundTripFunc) RoundTrip(req *http.Request) (*http.Response, error) {
	return f(req), nil
}

//NewTestClient returns *http.Client with Transport replaced to avoid making real calls
func NewTestClient(fn RoundTripFunc) *http.Client {
	return &http.Client{
		Transport: RoundTripFunc(fn),
	}
}
