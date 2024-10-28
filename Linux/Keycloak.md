# Keycloak

## Fixes
### Error 403 Forbidden on `https://<domain>/realms/<realm>/account`
- Select realm
- Select `Client scopes`
- Select `roles`
- Select card `Mappers`
- Select `client roles`
- Enable `Add to access token`

## Diagnostics
### Analyze JWT returned for client
#### Get token
```sh
curl \
 -d "grant_type=password" \
 -d "scope=openid" \
 -d "client_id=<client_id>" \
 -d "client_secret=<client_secret>" \
 -d "username=<user_username>" \
 -d "password=<user_password>" \
 <base_url>/realms/<realm>/protocol/openid-connect/token | jq .
```
#### Analyze token
[JSON Web Tokens](https://jwt.io/)
