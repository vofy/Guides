## Důležitá úmístění
```
/var/lib/docker/
└── containers - Obsahuje konfiguraci kontejneru
    └── <id_kontejneru>
        ├── config.v2.json
        └── hostconfig.json
```

Odstranění všech obrazů (images), které nejsou využívané existujcími kontejnery
```bash
docker image prune -a
```
## Nejčastější příkazy

### Nový kontejner
- Slouží k vytvoření instance (kontejneru) na základě obrazu (musí být vždy na konci příkazu)
```bash
docker run --name <název_kontejneru> -p <host_port>:<internal_port> - e '<JMÉNO PROMĚNNÉ>=<HODNOTA>' -v [<CESTA>:]/data/[:OPTIONS] --restart always bitwardenrs/server:latest
```

### Výpis kontejnerů
(-a vypíše všechny, defaultně vypíše pouze běžící)
```bash
docker container ls -a
```

### Start/stop/odstranění kontejneru
```bash
docker container start/stop/rm <id/nazev>
```
