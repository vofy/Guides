## Instalace
fedora
```
dnf install postgresql-server
postgresql-setup initdb
systemctl enable --now posgresql.service
```

## Vytvoření jednoduché databáze s uživatelem
(`USER <jmeno>` = `ROLE <jmeno> LOGIN`)
```psql
CREATE USER <jmeno> WITH ENCRYPTED PASSWORD '<heslo>';
CREATE DATABASE <nazev> OWNER <jmeno>;
```

## Nastavení šifrování na SHA-256

### 1. Nastavíme širfovací algoritmus pro autentifikaci
V dolní části souboru `/var/lib/pgsql/data/pg_hba.conf` (u IPv4 a IPv6, protože k databází se připojujeme přes IP nikoliv přes UNIX SOCKET) upravíme authentication na `scram-sha-256`

### 2. Spusťte PostgreSQL interactive terminal jako uživatel postgres
$ `sudo -u postgres psql`

### 3. Zkontrolujte současně nastavený algoritmus
postgres=# `show password_encryption;`
```
 password_encryption 
---------------------
 md5
(1 row)
```

### 4. Nastavte šifrovací algoritmus
postgres=# `ALTER SYSTEM SET password_encryption = 'scram-sha-256';`
```
SET
```

### 5. Ověřte zda je nastavent správný šifrovací algoritmus
postgres=# `show password_encryption;`
```
 password_encryption 
---------------------
 scram-sha-256
(1 row)
```

### 6. Znovu nastavte heslo s využitím nově nastavené šifry
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
