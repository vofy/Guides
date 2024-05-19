# Oprava fontů ve Firefoxu
Firefox z nějakého důvodu nezobrazoval správně fonty `Helvetica` a `Nimbus Sans` (diakritika velkých písmen byla shora ořízlá). Nejspíše se tomu dělo proto, že font přesahoval akcentovou dotažnici.

## Řešení
Do `$HOME/.config/fontconfig/fonts.conf` nebo `/etc/fonts/local.conf` přidat následující nastavení, které bude nahrazovat Helveticu Arialem:
```
<!-- Replace Helvetica with Arial -->
<match target="pattern">
    <test qual="any" name="family">
        <string>Helvetica</string>
    </test>
    <edit name="family" mode="assign" binding="strong">
        <string>Arial</string>
    </edit>
</match>
```
