
## Řešení problémů
Zkontrolujte logy:
```bash
tail /var/www/nextcloud/data/nextcloud.log
tail /var/log/nginx/access.log
tail /var/log/nginx/error.log
```

### Login loop without any clue in access.log, error.log, nor nextcloud.log
If you just see some correct requests in access log, but no login happens, you check access rights for php session and wsdlcache directory. Try to check permissions and execute change if needed:
Jestliže se nelze přihlásit a v ani jednom z těchto logů není žádný problém, zkontrolujte vlastníka adresářů v následujících cestách `/var/lib/php/session/`, `/var/lib/php/wsdlcache/`, `/var/lib/php/opcache/`. Pokud soubory vlastní `apache`, proveďte následující příkazy:
```bash
chown root:nginx /var/lib/php/session/
chown root:nginx /var/lib/php/wsdlcache/
chown root:nginx /var/lib/php/opcache/
```

Ale práva se z nějakého důvodu mění zpět na apache (i když není nainstalovaný). Toto lze vyřešit přidáním adresářů pro nginx:
```bash
sudo mkdir -p /var/lib/php/nginx/session/ /var/lib/php/nginx/wsdlcache/ /var/lib/php/nginx/opcache/ && \
sudo chown -R root:nginx /var/lib/php/nginx/session/ /var/lib/php/nginx/wsdlcache/ /var/lib/php/nginx/opcache/ && \
sudo chmod -R 770 /var/lib/php/nginx/session/ /var/lib/php/nginx/wsdlcache/ /var/lib/php/nginx/opcache/
```

#### Další řešení (Fedora - dnf)
Dalším řešením může být instalace pluginu post-transaction-actions pro dnf `sudo dnf in python3-dnf-plugin-post-transaction-actions`.
V adresáři `/etc/dnf/plugins/post-transaction-actions.d/` vytvoříme soubor s názvem `php-repair-permissions.action` (použití přípony **.action** je nezbytné). Do souboru vložíme náseledující obsah:
```bash
*php*:in:chown root:nginx /var/lib/php/session/ && chown root:nginx /var/lib/php/wsdlcache/ && chown root:nginx /var/lib/php/opcache/ && echo "U adresářů /var/lib/php/session/, /var/lib/php/wsdlcache/, /var/lib/php/opcache/ byl nastaven owner root:nginx"
```
