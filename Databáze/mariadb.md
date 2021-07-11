## Instalace
```bash
sudo dnf install mariadb-server && \
sudo mariadb-secure-installation

mariadb -u root -p
```

```mariadb
SET character_set_server = 'utf8mb4';
SET collation_server = 'latin2_czech_cs';
```

## Základní dotazy
### Vypsání databází
`SHOW DATABASES;`

### Vybrání databáze k dalším dotazům
`USE databaze;`

### Vytváření tabulek
```
CREATE TABLE author (
  id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
) ENGINE = InnoDB;
```
```
CREATE TABLE book (
  id MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  author_id SMALLINT UNSIGNED NOT NULL,
  CONSTRAINT `fk_book_author`
    FOREIGN KEY (author_id) REFERENCES author (id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
) ENGINE = InnoDB;
```

## Vytvoření databáze a uživatele se všemi oprávněními k databázi
```mariadb
CREATE DATABASE aplikace DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
GRANT ALL PRIVILEGES ON aplikace.* TO 'aplikace'@'localhost' IDENTIFIED BY 'heslo';
```
