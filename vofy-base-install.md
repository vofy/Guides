### Packages
```
vim fish util-linux-user git htop ncdu cockpit screen nginx certbot docker
```
```
curl -L https://get.oh-my.fish | fish
omf install bira
```

/etc/dnf/dnf.conf
```
defaultyes=True
```

/usr/lib/systemd/system/cockpit.service
```
[Install]
WantedBy=multi-user.target
```
