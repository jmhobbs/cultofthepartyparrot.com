package cloudfunction

import (
	"crypto/sha256"
	"fmt"

	"github.com/gbrlsnchs/jwt/v3"
)

var hs *jwt.HMACSHA

type netlifyPayload struct {
	ISS    string `json:"iss"`
	Sha256 string `json:"sha256"`
}

func verifyRequest(token []byte, body []byte) bool {
	var pl netlifyPayload
	_, err := jwt.Verify(token, hs, &pl, jwt.ValidateHeader)
	if err != nil {
		return false
	}

	h := sha256.New()
	h.Write(body)

	return pl.Sha256 == fmt.Sprintf("%x", h.Sum(nil))
}
