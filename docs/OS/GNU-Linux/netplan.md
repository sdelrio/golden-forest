
# Netplan

[Netplan](https://netplan.io/) is an utility for easily configuring networking on a linux system. You simply create a YAML description of the required network interfaces and what each should be configured to do. From this description Netplan will generate all the necessary configuration for your chosen renderer tool.

## Configure static IPs

### Ubuntu


The new interfaces configuration file now live in the /etc/netplan directory. A file called 01-netcfg.yaml is used to configured the first interface. Below is the default configuration for a interface using DHCP.

```
# This file describes the network interfaces available on your system
# For more information, see netplan(5).
network:
 version: 2
 renderer: networkd
 ethernets:
   ens33:
     dhcp4: no
     dhcp6: no
     addresses: [192.168.1.2/24]
     gateway4: 192.168.1.1
     nameservers:
       addresses: [8.8.8.8,8.8.4.4]
```

Exit and save your changes by running the commands below

```
sudo netplan apply
```


## References

* [https://websiteforstudents.com/how-to-configure-static-ip-address-on-ubuntu-linux/](https://websiteforstudents.com/how-to-configure-static-ip-address-on-ubuntu-linux/)
* [https://websiteforstudents.com/configuring-static-ips-ubuntu-17-10-servers/](https://websiteforstudents.com/configuring-static-ips-ubuntu-17-10-servers/)
