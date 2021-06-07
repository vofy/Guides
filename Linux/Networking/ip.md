1. Přidání IP adresy rozhraní
```
ip address add 192.168.1.2 dev eth0
```

2. Přidání routy do místní sítě LAN
```
ip route add 192.168.1.0/24 dev eth0
```

3. Přidání výchozí routy
```
ip route add 192.168.2.0/24 via 192.168.2.254 dev eth0
```
