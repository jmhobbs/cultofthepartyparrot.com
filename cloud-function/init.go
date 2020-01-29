// +build !testing

package cloudfunction

import (
	"os"

	"github.com/gbrlsnchs/jwt/v3"
)

func init() {
	hs = jwt.NewHS256([]byte(os.Getenv("JWT_SECRET")))
}
