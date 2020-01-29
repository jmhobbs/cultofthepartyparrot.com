package cloudfunction

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

type netlifyWebhook struct {
	ID     string `json:"id"`
	Branch string `json:"branch"`
}

var cloudflareHTTPClient *http.Client = http.DefaultClient

var (
	cloudFlareZone     string = os.Getenv("CF_ZONE")
	cloudFlareAPIToken string = os.Getenv("CF_TOKEN")
)

// PurgeCloudFlare verifies a Netlify deploy hook and flushes an entire
// CloudFlare zone as needed.
func PurgeCloudFlare(w http.ResponseWriter, r *http.Request) {
	var bodyBuf bytes.Buffer
	tee := io.TeeReader(r.Body, &bodyBuf)
	defer r.Body.Close()

	dec := json.NewDecoder(tee)

	var wh netlifyWebhook
	err := dec.Decode(&wh)
	if err != nil {
		log.Println("error decoding webhook body:", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	if wh.Branch != "master" {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Ok. Thanks."))
		return
	}

	jwt := r.Header.Get("X-Webhook-Signature")
	if jwt == "" {
		http.Error(w, "Forbidden", http.StatusForbidden)
		return
	}

	if !verifyRequest([]byte(jwt), bodyBuf.Bytes()) {
		http.Error(w, "Forbidden", http.StatusForbidden)
		return
	}

	url := fmt.Sprintf("https://api.cloudflare.com/client/v4/zones/%s/purge_cache", cloudFlareZone)
	req, err := http.NewRequest("POST", url, bytes.NewBuffer([]byte(`{"purge_everything":true}`)))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", cloudFlareAPIToken))
	req.Header.Set("Content-Type", "application/json")

	resp, err := cloudflareHTTPClient.Do(req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(resp.StatusCode)

	if resp.StatusCode != http.StatusOK {
		body, _ := ioutil.ReadAll(resp.Body)
		log.Println(string(body))
		defer resp.Body.Close()
	}
}
