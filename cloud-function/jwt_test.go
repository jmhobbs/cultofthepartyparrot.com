package cloudfunction

import (
	"testing"
)

func Test_VerifyRequest(t *testing.T) {
	if !verifyRequest(validTestJWT, validTestBody) {
		t.Error("request did not verify, though it was expected to")
	}
}
