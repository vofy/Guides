### Packages
```bash
vim fish util-linux-user git htop ncdu cockpit screen nginx certbot docker
```
```bash
function fish_greeting; end && funcsave fish_greeting
```
```bash
curl -L https://get.oh-my.fish | fish
omf install bira
```

/etc/dnf/dnf.conf
```bash
defaultyes=True
```

/usr/lib/systemd/system/cockpit.service
```bash
[Install]
WantedBy=multi-user.target
```
