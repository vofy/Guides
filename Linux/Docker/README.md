Odstranění všech obrazů (images), které nejsou využívané existujcími kontejnery
```bash
docker image prune -a
```

### Docker run
- Slouží k vytvoření instance (kontejneru) na základě obrazu (musí být vždy na konci příkazu)
```bash
docker run bitwardenrs/server:latest
```
#### Parametry
##### Bindování portů
```bash
- p <PORT>:<PORT KONTEJNERU>
```
##### Nastavení proměnnou prostředí
```bash
- e '<JMÉNO PROMĚNNÉ>=<HODNOTA>'
```
##### Sdílený souborový systém
```bash
-v [<CESTA>:]/data/[:OPTIONS]
```
