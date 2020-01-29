.PHONY: test build deploy

test:
	go test -timeout 30s -tags testing -count=1 cloudfunction

build:
	go build .

deploy: test build
	gcloud functions deploy "$$FUNCTION_NAME" \
		--project "$$PROJECT_ID" \
		--runtime go111 \
		--allow-unauthenticated \
		--entry-point=PurgeCloudFlare \
		--trigger-http \
		--env-vars-file=env.yaml \
		--max-instances=5 \
		--timeout='30s' \
		--memory='128MB'