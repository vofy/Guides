`sudo firewall-cmd --get-zones`

`sudo firewall-cmd --set-default public`

`sudo firewall-cmd --get-active-zones`

`sudo firewall-cmd --list-all`

`sudo firewall-cmd --get-services | grep http`

`sudo firewall-cmd --add-service ssh --permanent`

`sudo firewall-cmd --remove-service ssh --permanent`

`sudo firewall-cmd --add-port 1622/tcp --permanent`

`sudo firewall-cmd --remove-port 1622/tcp --permanent`

`sudo firewall-cmd --reload`


With firewall-cmd

To add a new and empty service, use the --new-service altogether with the --permanent option:

`firewall-cmd --permanent --new-service=myservice`

Configure the service:

```
firewall-cmd --permanent --service=myservice --set-description=description
firewall-cmd --permanent --service=myservice --set-short=description
firewall-cmd --permanent --service=myservice --add-port=portid[-portid]/protocol
firewall-cmd --permanent --service=myservice --add-protocol=protocol
firewall-cmd --permanent --service=myservice --add-source-port=portid[-portid]/protocol
firewall-cmd --permanent --service=myservice --add-module=module
firewall-cmd --permanent --service=myservice --set-destination=ipv:address[/mask]
```

Alternatively, you can add a new service using an existing file:

`firewall-cmd --permanent --new-service-from-file=myservice.xml`

This adds a new service using all the settings from the file including the service name.

`firewall-cmd --permanent --new-service-from-file=myservice.xml --name=mynewservice`

This adds a new service using the service settings from the file. The new service will have the name mynewservice.
With firewall-offline-cmd

To add a new and empty service, use the --new-service option:

`firewall-offline-cmd --new-service=myservice`

Configure the service:

`firewall-offline-cmd --service=myservice --set-description=description`
`firewall-offline-cmd --service=myservice --set-short=description`
`firewall-offline-cmd --service=myservice --add-port=portid[-portid]/protocol`
`firewall-offline-cmd --service=myservice --add-protocol=protocol`
`firewall-offline-cmd --service=myservice --add-source-port=portid[-portid]/protocol`
`firewall-offline-cmd --service=myservice --add-module=module`
`firewall-offline-cmd --service=myservice --set-destination=ipv:address[/mask]`

Alternatively, you can add a new service using an existing file:

`firewall-offline-cmd --new-service-from-file=myservice.xml`

This adds a new service using all settings from the file including the service name.

`firewall-offline-cmd --new-service-from-file=myservice.xml --name=mynewservice`

This adds a new service using the service settings from the file. But the new service will have the name mynewservice.
