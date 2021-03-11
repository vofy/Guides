#### Hledání objemných souborů či adresářů
* ncdu - cli
* baobab - gui

#### Webový server
* pm2 - node.js
* nginx - php
* (apache)

#### HTTP proxy
* nginx
* apache traffic server

#### Real Time Chat
* inspircd
* matrix-synapse - federovaná šifrovaná komunikace + doporučuji doinstalovat coturn pro videohovory
* mumble - OpenSource alternativa TeamSpeaku

#### Konference
* jitsi
* big-blue-button

#### Firewall
- ufw - Jednoduchá konfigurace firewallu, cli frontend pro nftables a iptables

#### Kontrola verzí
* gitlab
* gitea - klon githubu
* git

#### Password manager
* bitwarden_rs - light-weight implementace v rustu a umožňuje využití mysql (mariadb) nebo postgresql
* bitwarden - oficiální balík bitwardenu

#### Management serveru
* mosh - udržuje relace a podporuje roamování, odesílá celé příkazy, bohužel nepodporuje x11forwarding
* cockpit - moderní webové gui pro management server, možnost instalace pluginů
* webmin - postarší webové gui pro management server

#### Souborové systémy
* btrfs
* freezfs (zfs)
* ext4

##### Klienti souborového systému pro připojení přes síť
* nfs
* sshfs

##### RAID
* mdadm

##### Automount
* fstab

#### Záloha
* rsync - lze vytvořit i cron úlohu (pomocí příkazu crontab) a díky tomu pravidelně zálohovat soubory (doporučují zálohovat /etc, /home, /var či /srv, případně oddíly připojené v /mnt)

#### Log management
* zabbix - jednoduchá instalace i vytváření nových šablon

