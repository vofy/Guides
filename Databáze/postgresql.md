## Instalace
fedora
```
dnf install postgresql-server
postgresql-setup initdb
systemctl enable --now posgresql.service
```

## Nastavení šifrování na SHA-256
* V dolní části souboru `/var/lib/pgsql/data/pg_hba.conf` (u IPv4 a IPv6, protože k databází se připojujeme přes IP nikoliv přes UNIX SOCKET) upravíme authentication na `scram-sha-256`

### 1. Spusťte PostgreSQL interactive terminal jako uživatel postgres
$ `sudo -u postgres psql`

### 2. Zkontrolujte současně nastavený algoritmus
postgres=# `show password_encryption;`
```
 password_encryption 
---------------------
 md5
(1 row)
```

### 3. Nastavte šifrovací algoritmus
postgres=# `SET password_encryption = 'scram-sha-256';`
```
SET
```

### 4. Ověřte zda je nastavent správný šifrovací algoritmus
postgres=# `show password_encryption;`
```
 password_encryption 
---------------------
 scram-sha-256
(1 row)
```

### 5. Znovu nastavte heslo s využitím nově nastaveného algoritmu
`\password webapp`
```
Enter new password:
Enter it again:
```
#### nebo 
`ALTER USER "webapp" WITH PASSWORD 'PLAINTEXT_USER_PASSWORD_HERE';`
```
ALTER ROLE
```
