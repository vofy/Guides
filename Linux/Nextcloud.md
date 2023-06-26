
## Řešení problémů
Zkontrolujte logy:
```bash
tail /var/www/nextcloud/data/nextcloud.log
tail /var/log/nginx/access.log
tail /var/log/nginx/error.log
```

### Login loop without any clue in access.log, error.log, nor nextcloud.log
#### 1. Postup - nedoporučuji
If you just see some correct requests in access log, but no login happens, you check access rights for php session and wsdlcache directory. Try to check permissions and execute change if needed:
Jestliže se nelze přihlásit a v ani jednom z těchto logů není žádný problém, zkontrolujte vlastníka adresářů v následujících cestách `/var/lib/php/session/`, `/var/lib/php/wsdlcache/`, `/var/lib/php/opcache/`. Pokud soubory vlastní `apache`, proveďte následující příkazy:
```bash
sudo chown root:nginx /var/lib/php/session/
sudo chown root:nginx /var/lib/php/wsdlcache/
sudo chown root:nginx /var/lib/php/opcache/
```

#### 2. Postup (permanentní)
Ale práva se z nějakého důvodu mění zpět na apache (i když není nainstalovaný). Toto lze vyřešit přidáním adresářů pro nginx:
```bash
sudo mkdir -p /var/lib/php/nginx/session/ /var/lib/php/nginx/wsdlcache/ /var/lib/php/nginx/opcache/ && \
sudo chown -R root:nginx /var/lib/php/nginx/session/ /var/lib/php/nginx/wsdlcache/ /var/lib/php/nginx/opcache/ && \
sudo chmod -R 770 /var/lib/php/nginx/session/ /var/lib/php/nginx/wsdlcache/ /var/lib/php/nginx/opcache/
```
A upravením konfigurace `/etc/php-fpm.d/www.conf`:
```
php_value[session.save_path]    = /var/lib/php/nginx/session
php_value[soap.wsdl_cache_dir]  = /var/lib/php/nginx/wsdlcache
php_value[opcache.file_cache]   = /var/lib/php/nginx/opcache
```


#### Další řešení (Fedora - dnf) - nedoporučuji
Dalším řešením může být instalace pluginu post-transaction-actions pro dnf `sudo dnf in python3-dnf-plugin-post-transaction-actions`.
V adresáři `/etc/dnf/plugins/post-transaction-actions.d/` vytvoříme soubor s názvem `php-repair-permissions.action` (použití přípony **.action** je nezbytné). Do souboru vložíme náseledující obsah:
```bash
*php*:in:chown root:nginx /var/lib/php/session/ && chown root:nginx /var/lib/php/wsdlcache/ && chown root:nginx /var/lib/php/opcache/ && echo -e "\nU následujících adresářů byl změněn vlastník z root:apache na root:nginx:" && ls -ld /var/lib/php/session/ /var/lib/php/wsdlcache/ /var/lib/php/opcache/
```

Pokud je vše dobře nastavené, po aktualizaci, instalaci či reinstalaci by se měla zobrazit správná oprávnění u vypsaných adresářů.
