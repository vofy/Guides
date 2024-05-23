# Grafana

## SSO - Keycloak
- Přidání klienta v Keycloak
  - Přidání rolí
  - Nastavení mapování rolí!
    - `Manage` - `Client scopes`
    - Položka `roles`
    - Karta `Mappers`
    - Položka `client roles`
    - Toggle `Add to ID token` => true
- Nastavení v sekci [auth.generic_oauth] konfiguračního souboru `/etc/grafana/grafana.ini`
