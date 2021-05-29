#### Hledání objemných souborů či adresářů
* `ncdu` - cli
* `baobab` - gui

#### Webový server
* `pm2` - node.js
* `nginx` - php, proxy, (RTMP, RTSP, HLS - je potřeba překompilovat s daným modulem)
* (`apache`)

#### HTTP proxy
* `nginx`
* `apache traffic server`

#### Terminal multiplexers
* `tmux`
* `screen`

#### Terminálové grafické editory
* `vim`
* `neovim`
* `nano`
* `visidata` - Vizualizace tabulek a grafů v cli

#### Real Time Chat
* `inspircd`
* `matrix-synapse` - federovaná šifrovaná komunikace + doporučuji doinstalovat coturn pro videohovory
* `mumble` - OpenSource alternativa TeamSpeaku

#### Konference
* `jitsi`
* `big-blue-button`

### Bezpečnost
#### Firewall
- `ufw` - Cli frontend pro nftables a iptables
- `firewalld` - Cli frontend pro nftables a iptables

#### Blokování IP na základě několika nepodařených pokusů
- `fail2ban`

#### Kontrola verzí
* `gitlab`
* `gitea` - klon githubu
* `git`

#### Password manager
* `bitwarden_rs` - light-weight implementace v rustu a umožňuje využití mysql (mariadb) nebo postgresql
* `bitwarden` - oficiální balík bitwardenu

#### Management serveru
* `mosh` - udržuje relace a podporuje roamování, odesílá celé příkazy, bohužel nepodporuje x11forwarding
* `cockpit` - moderní webové gui pro management server, možnost instalace pluginů
* `webmin` - postarší webové gui pro management server

#### \*top
* `htop` - monitorování procesů
* `powertop` - power management
* `iotop` - monitorování operací
* `iftop` - monitorování síťového provozu
* `ctop` - monitorování docker kontejnerů (grafická vizualizace)
* `ngxtop` - monitorování nginx
* `apachetop` - monitorování apache

#### Souborové systémy
* `btrfs`
* `openzfs` (`zfs`)
* `ext4`

##### Klienti souborového systému pro připojení přes síť
* `nfs`
* `sshfs`

##### RAID
* `mdadm`

##### Automount
* `fstab`

#### Záloha
* `rsync` - lze vytvořit i cron úlohu (pomocí příkazu crontab) nebo systemd/timer a díky tomu pravidelně zálohovat soubory (doporučují zálohovat /etc, /home, /var či /srv, případně oddíly připojené v /mnt)

#### Log management
* `zabbix` - jednoduchá instalace i vytváření nových šablon

#### Cloud
* `nextcloud`
* `owncloud`

#### Email
* `sendmail`
* `postfix`

#### Process-managery
* `systemd`
* `runit`
* `openRC`
