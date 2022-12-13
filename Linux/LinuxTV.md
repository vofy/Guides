# Linux TV

## Postup zprovoznění LinuxTV na Arch Linuxu a jeho derivací
1. Instalace linux515-headers
2. Instalace firmwaru 
```sh
git clone git://linuxtv.org/media_build.git
cd media_build
./build
sudo make install
```
3. Povolení modulu `modprobe dvb-usb-rtl28xxu`
4. VDR

## Debugging
### Vypsání načtených modulů
`lsmod`

### Vypsání všech modulů:
`find /lib/modules/$(uname -r) -type f -name '*.ko'`
