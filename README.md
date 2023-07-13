# radix-app-with-reverse-proxy

## Example with nginx proxy

URLs:
* `https://your-domain/` - web-application, calling API
* `https://your-domain/api` - API
* `https://your-domain/api/hello` - submethod of the API
* `https://your-domain/api/admin` - another web-application

web-proxy is configured to use OAuth2 authentication, so you need to login to access the web-application and the API.