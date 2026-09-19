# Čtení z čipu
```sh
nfc-mfclassic r a u data.mfd
```

# Zápis na čip
```sh
nfc-mfclassic W a u data.mfd
```

## If read/write doesnt work
```sh
sudo systemctl stop pcscd.service pcscd.socket
sudo modprobe -r pn533_usb pn533 nfc
```
