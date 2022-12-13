# Cryptsetup

## Commands

### Open encrypted volume
```
sudo cryptsetup open /dev/<device> <mapped_name>
```

### Mount mapped (opened) volume
```
mount -o rw /dev/mapper/<mapped_name> /mnt
```

### Dump LUKS header
```
cryptsetup luksDump /dev/<device>
```

### Disable key slot
```
cryptsetup luksKillSlot /dev/<device> -S <slot_number>
```
Slot numbers range from 0 to 7

### Remove key by passphrase
```
cryptsetup luksRemoveKey /dev/<device>
```

### Add key to slot
```
cryptsetup luksAddKey /dev/<device>
```

### Generate keyfile
```
dd bs=512 count=4 if=/dev/random of=/crypto_keyfile.bin iflag=fullblock
chmod 600 /crypto_keyfile.bin
cryptsetup luksAddKey /dev/<device> /crypto_keyfile.bin
```

### Add keyfile to slot
```
cryptsetup luksAddKey /dev/<device> /crypto_keyfile.bin
```

## Resources
- https://gock.net/blog/2020/luks-encryption-cheat-sheet/
- https://www.thegeekstuff.com/2016/03/cryptsetup-lukskey/
- https://wiki.archlinux.org/title/dm-crypt/Encrypting_an_entire_system
