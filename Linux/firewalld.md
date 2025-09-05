### List all awailable zones
`sudo firewall-cmd --get-zones`

### Set public as default zone
`sudo firewall-cmd --set-default public`

### Get all active zones
`sudo firewall-cmd --get-active-zones`

### List all rules for active zone
`sudo firewall-cmd --list-all`

### Get list of all available services
`sudo firewall-cmd --get-services | grep http`

### Add service to default zone
`sudo firewall-cmd --add-service ssh --permanent`

### Add service to private zone
`sudo firewall-cmd --add-service ssh --zone=private --permanent`

### Remove service from default zone
`sudo firewall-cmd --remove-service ssh --permanent`

### Add port to private zone
`sudo firewall-cmd --add-port 1622/tcp --permanent`

### Remove port from private zone
`sudo firewall-cmd --remove-port 1622/tcp --permanent`

### Reload firewall
`sudo firewall-cmd --reload`


### Configure custom service:

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
