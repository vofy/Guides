# VPN přes L2TP/IPsec

Balíky: **networkmanager networkmanager-l2tp networkmanager-strongswan**/networkmanager-libreswan

## Troubleshooting

Po vypnutí služby NetworkManager pomocí příkazu: 
```bash
sudo systemctl stop NetworkManager.service
```

spustíme NetworkManager ručně: 
```bash
sudo NetworkManager --debug
```


Po pokusu o připojení k VPN se vypíše následující to indikuje problém se službou ipsec.service
```log
<info>  [1631359133.0728] audit: op="connection-activate" uuid="f56623e4-7131-492d-9168-38e1e87d9aeb" name="VPN 1" pid=1734 uid=1000 result="success"
<info>  [1631359133.0787] vpn-connection[0x5568c1d0e0f0,f56623e4-7131-492d-9168-38e1e87d9aeb,"VPN 1",0]: Started the VPN service, PID 54798
<info>  [1631359133.0842] vpn-connection[0x5568c1d0e0f0,f56623e4-7131-492d-9168-38e1e87d9aeb,"VPN 1",0]: Saw the service appear; activating connection
<info>  [1631359133.1340] vpn-connection[0x5568c1d0e0f0,f56623e4-7131-492d-9168-38e1e87d9aeb,"VPN 1",0]: VPN connection: (ConnectInteractive) reply received
** Message: 13:18:53.230: Check port 1701
whack: Pluto is not running (no "/run/pluto/pluto.ctl")
Redirecting to: systemctl restart ipsec.service
Job for ipsec.service failed because the control process exited with error code.
See "systemctl status ipsec.service" and "journalctl -xeu ipsec.service" for details.
<warn>  [1631359133.6327] vpn-connection[0x5568c1d0e0f0,f56623e4-7131-492d-9168-38e1e87d9aeb,"VPN 1",0]: VPN connection: failed to connect: 'Could not restart the ipsec service.'
<info>  [1631359133.6330] vpn-connection[0x5568c1d0e0f0,f56623e4-7131-492d-9168-38e1e87d9aeb,"VPN 1",0]: VPN plugin: state changed: stopped (6)
<info>  [1631359133.6349] vpn-connection[0x5568c1d0e0f0,f56623e4-7131-492d-9168-38e1e87d9aeb,"VPN 1",0]: VPN service disappeared
```
Proces ukončíme stisknutím `CTRL + C`

Vypíšeme si log služby ipsec ze syslogu: 
```bash
sudo journalctl -xeu ipsec.service
```


Hned na začátku si všimneme, že pravděpodobně chybí adresář `/var/lib/ipsec/nss`:
```bash
Sep 11 13:24:10 poseidon ipsec[60210]: ERROR: destination directory "/var/lib/ipsec/nss" is missing or permission denied
Sep 11 13:24:10 poseidon systemd[1]: ipsec.service: Control process exited, code=exited, status=1/FAILURE
```

Vytvoříme nový adresář pomocí příkazu `mkdir`:
```bash
sudo mkdir -p /var/lib/ipsec/nss
```

Nyní zapneme službu NetworkManager:
```bash
sudo systemctl start NetworkManager
```
