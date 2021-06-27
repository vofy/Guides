## Povolení a spuštění timeru
```bash
sudo systemctl enable --now certbot-renew.timer
```

## Jak zjistit kdy a za jak dlouho je plánované další spuštění, kdy proběhlo poslední spuštění
```bash
sudo systemctl list-timers --all
```
