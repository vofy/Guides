```mssql
CREATE LOGIN username WITH PASSWORD = ***;
CREATE USER username FOR LOGIN username;

DENY VIEW ANY DATABASE TO user;

CREATE DATABASE databasename;
USE databasename;
ALTER AUTHORIZATION ON DATABASE::databasename TO username;
```
