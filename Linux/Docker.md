## MSSQL
docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=<YourStrong!Passw0rd>' -p 1433:1433 -v <host directory>/data:/var/opt/mssql/data -v <host directory>/log:/var/opt/mssql/log -v <host directory>/secrets:/var/opt/mssql/secrets -d mcr.microsoft.com/mssql/server:2019-latest

To remove all images which are not used by existing containers, use the -a flag:
```bash
docker image prune -a
```

```bash
sudo -d -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=<SECRET>' -p 1433:1433 --restart unless-stopped --name mssql mcr.microsoft.com/mssql/server:latest
docker run -d --name bitwarden --restart=unless-stopped -v /var/bitwarden/:/data/ -p 50000:80 bitwardenrs/server:latest
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

docker image prune -a
