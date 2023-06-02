## Audio
* `mixxx` - mix
* `easyeffects` - equalizér, bass enhancer, balancer, ...
* `helvum` - patchbay pro pipewire

## RADIO / SDR
* `gqrx`
* `sdrpp` - SDR++

## Elektro
* `qucs` - simulátor obvodů
* `kicad` - PCB design
* `ngspice`, `ltspice` - Simulace obvodů

#### Hledání objemných souborů či adresářů
* `ncdu` - cli
* `baobab` - gui

#### Webový serG
* `pm2` - node.js
* `nginx` - php, proxy, (RTMP, RTSP, HLS - je potřeba překompilovat s daným modulem)
* (`apache`)

#### HTTP proxy
* `nginx`
* `apache traffic server`
* `traefik`

#### Terminal multiplexers
* `tmux`
* `screen`

#### Touchpad gestures
* `touche touchegg`

#### Firmware kernel modules
* `mkinitcpio-firmware`

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
- `OpenSnitch` - Application Firewall
- `Douane` - Application Firewall

#### Blokování IP na základě několika nepodařených pokusů
- `fail2ban`

#### VPN server
- `WireGuard`

#### Version controll

##### Server
* `forgejo`
* `gitea`

##### Client
* `git`
* `gittyup` - Git GUI

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
* `bacula`

#### Log management
* `zabbix` - jednoduchá instalace i vytváření nových šablon

#### Cloud
* `nextcloud`
* `owncloud`

#### Email
* `sendmail`
* `postfix`
* `ClamAV` - antivirus

#### Daemon managery
* `systemd`
* `runit`
* `openRC`

#### Informace o systému
* `hardinfo` - Informace o systému
* `smartmontools` - S.M.A.R.T (`sudo smartctl --all /dev/sda`)

#### RGB
* `OpenRGB`

#### CPU
* `i7z` - Monitoring CPU
* `cpupower` (umožňuje nastavit statickou nebo adaptivní frekvenci - `sudo cpupower frequency-set --governor powersave`)
* `undervolt` (umožňuje snížit napětí nebo limitovat teplotu na CPU a GPU - https://github.com/georgewhewell/undervolt)
* `stress` - Strestest CPU

#### RAM
* `systemd-oomd`/`earlyoom`/`oomd` - Out of memory killer (zabrání zamrznutí systému při nedostatku paměti RAM)

#### Vodní chlazení
* `liquidctl`
* `gkraken` - NZXT Kraken GUI

#### IdP
* `Shibboleth`, `Keycloak`, `ORY Hydra`, `Authelia`, `LemonLDAP::NG`
