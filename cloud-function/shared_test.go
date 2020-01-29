package cloudfunction

import "github.com/gbrlsnchs/jwt/v3"

// These are shared between tests.
var (
	validTestBody []byte = []byte(`{"id":"00000008a557c301910f3624","site_id":"00000000-1111-2222-3333-444444444444","build_id":"00000008a557c301910f3625","state":"ready","name":"cultofthepartyparrot","url":"https://cultofthepartyparrot.com","ssl_url":"https://cultofthepartyparrot.com","admin_url":"https://app.netlify.com/sites/cultofthepartyparrot","deploy_url":"http://00000008a557c301910f3624.cultofthepartyparrot.netlify.com","deploy_ssl_url":"https://00000008a557c301910f3624--cultofthepartyparrot.netlify.com","created_at":"2020-01-14T21:28:24.760Z","updated_at":"2020-01-14T21:29:20.321Z","user_id":"000000011111112222222333","error_message":null,"required":[],"required_functions":[],"commit_ref":null,"review_id":null,"branch":"master","commit_url":null,"skipped":null,"locked":null,"log_access_attributes":{"type":"firebase","url":"https://netlify-builds3.firebaseio.com/builds/00000008a557c301910f3625/log","endpoint":"https://netlify-builds3.firebaseio.com","path":"/builds/00000008a557c301910f3625/log","token":"000000011111112222222333333344444445555555666666677777778888888"},"title":null,"review_url":null,"published_at":"2020-01-14T21:29:20.132Z","context":"production","deploy_time":51,"available_functions":[],"summary":{"status":"ready","messages":[{"type":"info","title":"409 new files uploaded","description":"2 generated pages and 407 assets changed.","details":"New pages include:\n- index.html\n- flags.html\n"},{"type":"info","title":"No redirect rules processed","description":"This deploy did not include any redirect rules. [Learn more about redirects](https://www.netlify.com/docs/redirects/).","details":""},{"type":"info","title":"No header rules processed","description":"This deploy did not include any header rules. [Learn more about headers](https://www.netlify.com/docs/headers-and-basic-auth/).","details":""},{"type":"info","title":"All linked resources are secure","description":"Congratulations! No insecure mixed content found in your files.","details":null}]},"screenshot_url":null,"site_capabilities":{"title":"Netlify Team Free","asset_acceleration":true,"form_processing":true,"cdn_propagation":"partial","build_gc_exchange":"buildbot-gc","build_node_pool":"buildbot-external-ssd","domain_aliases":true,"secure_site":false,"prerendering":true,"proxying":true,"ssl":"custom","rate_cents":0,"yearly_rate_cents":0,"cdn_network":"free_cdn_network","ipv6_domain":"cdn.makerloop.com","branch_deploy":true,"managed_dns":true,"geo_ip":true,"split_testing":true,"id":"nf_team_dev","cdn_tier":"reg"},"committer":null,"skipped_log":null,"manual_deploy":false,"file_tracking_optimization":null}`)
	validTestJWT  []byte = []byte(`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJuZXRsaWZ5Iiwic2hhMjU2IjoiM2Q5ZWNhMzFhN2UyMjA4ZWU0YzZmOTcxMDFlMzljNDc1M2FmNDVlNWE2YTQzNDYxMTU3N2UyZDkyOWIwNjIzNSJ9.MdlUcFNbHw2cyS_N4iWy03d3ACOSlibLFhAYf2Rj2TM`)
)

func init() {
	// prevent/divert any accidental purge attempts
	cloudflareHTTPClient = nil

	// Set up known test values
	cloudFlareZone = "test-cf-zone"
	cloudFlareAPIToken = "test-cloudflare-api-token"

	// override package level for testing
	hs = jwt.NewHS256([]byte(`partyordiepartyordiepartyordieok`))
}
