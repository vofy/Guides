## MSSQL
```bash
docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=<YourStrong!Passw0rd>' -p 1433:1433 -v <host directory>/data:/var/opt/mssql/data -v <host directory>/log:/var/opt/mssql/log -v <host directory>/secrets:/var/opt/mssql/secrets -d mcr.microsoft.com/mssql/server:2019-latest
```

```bash
docker run -d -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=<SECRET>' -p 1433:1433 --restart unless-stopped --name mssql mcr.microsoft.com/mssql/server:latest
```

## Bitwarden
```bash
docker run -d --name bitwarden --restart=unless-stopped -v /var/bitwarden/:/data/ -p 50000:80 bitwardenrs/server:latest
```

## Penpot
```bash
wget https://raw.githubusercontent.com/penpot/penpot/main/docker/images/docker-compose.yaml
sudo docker-compose -p penpot -f docker-compose.yaml up -d
```
