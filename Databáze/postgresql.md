## Instalace
fedora
```
dnf install postgresql-server
postgresql-setup initdb
systemctl enable --now posgresql.service
```

/var/lib/pgsql/data/pg_hba.conf
scram-sha-256

```
postgres@tyler:~$ psql 
psql (10.5 (Ubuntu 10.5-1.pgdg16.04+1))
Type "help" for help.

postgres=# show password_encryption;
 password_encryption 
---------------------
 md5
(1 row)

postgres=# SET password_encryption = 'scram-sha-256';
SET

postgres=# \password webapp
Enter new password:
Enter it again:

postgres=# ALTER USER "webapp" WITH PASSWORD 'PLAINTEXT_USER_PASSWORD_HERE';
ALTER ROLE
postgres=# select * from pg_user;
  usename   | usesysid | usecreatedb | usesuper | userepl | usebypassrls |  passwd  | valuntil | useconfig 
------------+----------+-------------+----------+---------+--------------+----------+----------+-----------
 postgres   |       10 | t           | t        | t       | t            | ******** |          | 
 webapp     |    16384 | t           | f        | f       | f            | ******** |          | 
(2 rows)

postgres=# show password_encryption;
 password_encryption 
---------------------
 scram-sha-256
(1 row)

postgres=#

Also replace occurences of "md5" with "scram-sha-256" in pg_hba.conf and restart PostgreSQL.
```
