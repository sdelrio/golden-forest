# Intel Nuc

The Intel NUC (Next Unit of Computing) is a small/barebone desktop computer, which you will need to supply your own RAM, sotrage, screen keybooard, and mouse to get a fully working solution

Homelabs built from Intel NUCs are sometimes referred to as Nanolabs.

## 2nd Ethernet

* <https://blog.fosketts.net/2015/06/05/adding-a-second-ethernet-port-to-an-intel-nuc-via-mini-pcie/>
* [Syba - Tarjeta Mini PCI-E gigabit Ethernet y Placa PCI con Puerto RJ45](https://www.amazon.es/gp/product/B00B524102/)
* [VSAN Cluster Running On Three Intel NUCs](http://vmnick0.me/?p=7)

## Power Supply Specs

* <https://www.intel.com/content/www/us/en/support/articles/000007053/intel-nuc/intel-nuc-kits.html>
* <https://www.intel.es/content/www/es/es/support/articles/000007053/intel-nuc/intel-nuc-kits.html>

###  NUC6CAYH

* 19V 65 W
* 5,5 mm (outer)
* 2,5 mm (inner)

## Network Driver Problems

### ESXi on 7th Gen Intel NUC

```
Add-EsxSoftwareDepot https://hostupdate.vmware.com/software/VUM/PRODUCTION/main/vmw-depot-index.xml
New-EsxImageProfile -CloneProfile "ESXi-6.5.0-20180304001-standard" -name "ESXi-6.5.0-2018041701-NUC7" -Vendor "virten.net"
Remove-EsxSoftwarePackage -ImageProfile "ESXi-6.5.0-2018041701-NUC7" -SoftwarePackage "net-e1000e"
Remove-EsxSoftwarePackage -ImageProfile "ESXi-6.5.0-2018041701-NUC7" -SoftwarePackage "ne1000"
Add-EsxSoftwarePackage -ImageProfile "ESXi-6.5.0-2018041701-NUC7" -SoftwarePackage "net-e1000e 3.2.2.1-2vmw.600.3.57.5050593"
Export-ESXImageProfile -ImageProfile "ESXi-6.5.0-2018041701-NUC7" -ExportToISO -filepath ESXi-6.5.0-20170702001-NUC7.iso
Export-ESXImageProfile -ImageProfile "ESXi-6.5.0-2018041701-NUC7" -ExportToBundle -filepath ESXi-6.5.0-2018041701-NUC7.zip
```

* <https://www.virten.net/2017/03/vmware-homeserver-esxi-on-7th-gen-intel-nuc-kaby-lake/>

### ESXi 6 with Realtek Drivers

```
wget http://vibsdepot.v-front.de/depot/bundles/net55-r8168-8.045a-napi-offline_bundle.zip`

Get-EsxSoftwareDepot
Add-EsxSoftwareDepot .\net55-r8168-8.045a-napi-offline_bundle.zip
Set-EsxImageProfile -ImageProfile "ESXi-6.5.0-2018041701-NUC7" -Name RealTek
8186a -AcceptanceLevel CommunitySupported
Get-EsxSoftwarePackage | findstr -I -N realtek

Add-EsxSoftwarePackage -ImageProfile "ESXi-6.5.0-2018041701-NUC7" -SoftwarePackage "net55-r8168 8.039.01-napi"
(Get-EsxImageProfile “RealTek8186a”).viblist
```

* <https://vmexplorer.com/2017/09/23/create-iso-with-esxi-6-0u2-and-realtek-8168-drivers/>

* <https://refactoringragnarok.com/2017/06/24/set-up-home-lab-with-esxi-6-5-on-7th-gen-nuc/>

Check to make sure we have the appropriate driver for the 7th Gen NUC:

* `net-e1000e 3.2.2.1-2vmw.600.3.57.5050593`

This should show Feb 2017 for its date.

* `Get-EsxSoftwarePackage -Name net-e1000e`

```
PowerCLI C:\Users\myuser\Downloads\vmware> Get-EsxSoftwarePackage -Name net-e1000e

Name                     Version                        Vendor     Creation Date
----                     -------                        ------     -------------
net-e1000e               2.5.4-6vmw.600.0.0.2494585     VMware     06/02/2015 2:...
net-e1000e               1.1.2-4vmw.550.0.0.1331820     VMware     19/09/2013 6:...
net-e1000e               1.1.2-4vmw.550.1.15.1623387    VMware     22/02/2014 1:...
net-e1000e               1.1.2-3vmw.500.0.10.608089     VMware     03/02/2012 2:...
net-e1000e               3.2.2.1-2vmw.600.3.57.5050593  VMware     10/02/2017 7:...
net-e1000e               1.1.2-3vmw.510.1.12.1065491    VMware     23/03/2013 17...
net-e1000e               1.1.2-3vmw.500.0.0.469512      VMware     19/08/2011 1:...
net-e1000e               3.2.2.1-2vmw.650.0.0.4564106   VMW        27/10/2016 4:...
net-e1000e               3.2.2.1-2vmw.550.3.68.3029944  VMware     31/08/2015 8:...
net-e1000e               3.2.2.1-2vmw.550.3.78.3248547  VMware     18/11/2015 5:...
net-e1000e               1.1.2-3vmw.500.3.45.1489271    VMware     19/12/2013 7:...
net-e1000e               1.1.2-3vmw.500.1.11.623860     VMware     17/02/2012 21...
net-e1000e               1.1.2-3vmw.510.2.23.1483097    VMware     16/12/2013 0:...
net-e1000e               3.2.2.1-1vmw.600.1.26.3380124  VMware     28/12/2015 18...
net-e1000e               1.1.2-3vmw.510.0.0.799733      VMware     02/08/2012 3:...
net-e1000e               1.1.2-3vmw.500.0.7.515841      VMware     15/12/2011 0:...
net-e1000e               1.1.2-3vmw.500.2.26.914586     VMware     18/11/2012 1
```

## Ethernet not connecting on boot

```
sudo apt-get install --reinstall linux-headers-$(uname -r) linux-headers-generic build-essential dkms
wget http://media.cdn.ubuntu-de.org/forum/attachments/44/18/3005217-r8168- dkms-8.029.00.tar.gz
sudo tar xvf 3005217-r8168-dkms-8.029.00.tar.gz -C /usr/src
sudo dkms add -m r8168-dkms -v 8.029.00
sudo dkms build -m r8168-dkms -v 8.029.00
sudo dkms install -m r8168-dkms -v 8.029.00
echo "blacklist r8169" | sudo tee -a /etc/modprobe.d/blacklist.conf
sudo modprobe -rfv r8169
sudo modprobe -v r8168
```

* <https://askubuntu.com/questions/400929/ethernet-not-connecting-on-boot?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa>


## References

* <https://openhomelab.org/index.php?title=Intel_NUC>
* <https://www.reddit.com/r/homelab/comments/73o0m1/nuc_or_alternative_recommendations_for_openstack/>

