sudo firewall-cmd --get-zones

sudo firewall-cmd --set-default public

sudo firewall-cmd --get-active-zones

sudo firewall-cmd --get-services | grep http

sudo firewall-cmd --add-service ssh --permanent

sudo firewall-cmd --remove-service ssh --permanent

sudo firewall-cmd --add-port 1622/tcp --permanent

sudo firewall-cmd --remove-port 1622/tcp --permanent

sudo firewall-cmd --reload
