# Nginx

## Upstream
```
upstream backend {
    server localhost:50001;
}
```

## Opravy

### Nginx proxy can't load web page or loads it after several reloads
Check permissions of /var/lib/nginx
