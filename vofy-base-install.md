### Packages
vim fish util-linux-user git htop ncdu cockpit

curl -L https://get.oh-my.fish | fish

/etc/dnf/dnf.conf
```
defaultyes=True
```

/usr/lib/systemd/system/cockpit.service
```
[Install]
WantedBy=multi-user.target
```
