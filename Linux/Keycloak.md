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
##### Use curl
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
##### Use Postman GUI
![Postman](https://github.com/user-attachments/assets/7298d446-dd76-49fa-a766-4c7af612e60a)

#### Analyze token
[JSON Web Tokens](https://jwt.io/)

## Useful links
https://medium.com/@iamestelleyu/using-keycloak-in-grafana-228010ef3735
