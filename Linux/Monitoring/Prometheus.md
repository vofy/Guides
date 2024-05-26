# Working with TSDB API
## Odstranění časové stopy
### Příklad
```bash
curl -u admin -X POST -g 'http://127.0.0.1:9090/api/v1/admin/tsdb/delete_series?match[]={instance="https://vofy.tech"}&match[]={job="http-401"}
```
