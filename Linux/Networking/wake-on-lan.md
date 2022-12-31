```
# /etc/systemd/network/50-wired.link
[Match]
MACAddress=2c:4d:54:50:7b:af

[Link]
NamePolicy=kernel database onboard slot path
MACAddressPolicy=persistent
```

```
sudo nmcli con show
sudo nmcli c show "Ethernet" | grep 802-3-ethernet.wake-on-lan
nmcli c modify "Ethernet" 802-3-ethernet.wake-on-lan magic
```
