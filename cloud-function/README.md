# Cult of the Party Parrot Cloud Function

The CotPP website is generated and hosted by Netlify.  However, it uses a
prohibitive amount of bandwidth for that platform.

To have our cake and eat it too, CloudFlare is installed in front of Netlify.

However, the aggressive caching of CloudFlare means we do not get fresh content
on new master branch deploys out of the box.

This GCF function is called by a Netlify deploy hook, and purges the CloudFlare
cache.

## Testing

The function has fair coverage. You can execute the test suite with `make test`

## Deploying

To deploy this for your own Netlify hook needs, you will need a few items.

First, copy `example_env.yaml` to `env.yaml` and set the variables inside.

Next, you will need to set two environment variables.

- `FUNCTION_NAME` is the name of the function you want in GCP
- `PROJECT_ID` is the project in GCP you will be deploying to

With all of this configured, `make deploy` will get the code up and running.