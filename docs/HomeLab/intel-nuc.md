# Intel Nuc

The Intel NUC (Next Unit of Computing) is a small/barebone desktop computer, which you will need to supply your own RAM, sotrage, screen keybooard, and mouse to get a fully working solution

Homelabs built from Intel NUCs are sometimes referred to as Nanolabs.

## Roadmap & Announcements

* [2018-2019: Roadmap](https://www.cnx-software.com/2017/09/20/intel-nuc-roadmap-2018-2019-gemini-lake-coffee-lake-and-kaby-lake-h/)
* [2016-2020: Intel Roadmap](https://time.graphics/es/line/23974)
* [2018: Dawson Canyon](https://nucblog.net/2018/02/dawson-canyon-commercial-i7-nuc-announced/)

## CPU's Benchamrks for Low power Models

| CPU   | 1 core | multi |
| ----- | ----:| ----: |
| **J3455** |  320 |  1090 |
| **J5005** |  483 |  1525 |
| **8109U** | 1022 |  2397 |

### J3455

* [https://browser.geekbench.com/v5/cpu/search?q=j3455](https://browser.geekbench.com/v5/cpu/search?q=j3455)

### J5005

* [https://browser.geekbench.com/v5/cpu/search?utf8=%E2%9C%93&q=j5005](https://browser.geekbench.com/v5/cpu/search?utf8=%E2%9C%93&q=j5005)
* [https://www.servethehome.com/intel-pentium-silver-j5005-benchmarks-and-review/](https://www.servethehome.com/intel-pentium-silver-j5005-benchmarks-and-review/)

### i3-8109

* [https://browser.geekbench.com/v5/cpu/search?q=NUC8i3BEH](https://browser.geekbench.com/v5/cpu/search?q=NUC8i3BEH)

## 2nd Ethernet

* [https://blog.fosketts.net/2015/06/05/adding-a-second-ethernet-port-to-an-intel-nuc-via-mini-pcie/](https://blog.fosketts.net/2015/06/05/adding-a-second-ethernet-port-to-an-intel-nuc-via-mini-pcie/)
* [Syba - Tarjeta Mini PCI-E gigabit Ethernet y Placa PCI con Puerto RJ45](https://www.amazon.es/gp/product/B00B524102/)
* [VSAN Cluster Running On Three Intel NUCs](http://vmnick0.me/?p=7)
* [14 Best USB to ethernet adapter](https://www.pcsuggest.com/best-usb-ethernet-adapter/)
  * TP-Link TL-UE330
  * Anker USB 3.0 Unibody Aluminium Ethernet
  * Plugable USB3-E1000 Adapter
  * TP-Link TL-UE300
  * Amazon Basic USB 3.0 to 10/100/100M adapter

## Power Supply Specs

* [https://www.intel.com/content/www/us/en/support/articles/000007053/intel-nuc/intel-nuc-kits.html](https://www.intel.com/content/www/us/en/support/articles/000007053/intel-nuc/intel-nuc-kits.html)
* [https://www.intel.es/content/www/es/es/support/articles/000007053/intel-nuc/intel-nuc-kits.html](https://www.intel.es/content/www/es/es/support/articles/000007053/intel-nuc/intel-nuc-kits.html)

### Connectors

* [Amazon Connector 2,5mmx5,5mm](https://www.amazon.es/RUNCCI-Montaje-Conector-Hembra-Enchufe/dp/B07PXQLJL9/)
* [AliExpress molex 2,5mmx5,5mm](https://es.aliexpress.com/wholesale?SearchText=molex+CC+5%2C5mm+2%2C5mm&origin=y&d=y&catId=0&initiative_id=SB_20210919014335)
* [AliExpress molex several sizes](https://es.aliexpress.com/item/4000338970101.html?spm=a2g0o.productlist.0.0.47d5d4e8yw4i3M&algo_pvid=2d96cdd4-1126-4a5b-b025-3e182eb9c99d&aem_p4p_detail=202109180350583979321045668000000205008&algo_exp_id=2d96cdd4-1126-4a5b-b025-3e182eb9c99d-7&pdp_ext_f=%7B%22sku_id%22%3A%2210000001387971863%22%7D)

### NUC6CAYH

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

* [https://www.virten.net/2017/03/vmware-homeserver-esxi-on-7th-gen-intel-nuc-kaby-lake/](https://www.virten.net/2017/03/vmware-homeserver-esxi-on-7th-gen-intel-nuc-kaby-lake/)

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

* [https://vmexplorer.com/2017/09/23/create-iso-with-esxi-6-0u2-and-realtek-8168-drivers/](https://vmexplorer.com/2017/09/23/create-iso-with-esxi-6-0u2-and-realtek-8168-drivers/)

* [https://refactoringragnarok.com/2017/06/24/set-up-home-lab-with-esxi-6-5-on-7th-gen-nuc/](https://refactoringragnarok.com/2017/06/24/set-up-home-lab-with-esxi-6-5-on-7th-gen-nuc/)

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

### Ethernet not connecting on boot

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

* [https://askubuntu.com/questions/400929/ethernet-not-connecting-on-boot?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa](https://askubuntu.com/questions/400929/ethernet-not-connecting-on-boot?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)


### J3445 Realtek NIC for Linux not opensource

#### Ubuntu Debian

* dkms driver using Ansible:

```yaml
    - name: "Ethernet | Ensure correct Realtek driver is on system"
      apt:
        name: r8168-dkms
        state: present
      tags: [ ethernet ]

    - name: "Ethernet | Blacklist file status"
      stat:
        path: /etc/modprobe.d/blacklist
      register: stblacklist
      tags: [ ethernet ]

    - name: "Ethernet | Create blacklist file if not exists"
      file:
        path: /etc/modprobe.d/blacklist
        state: touch
        owner: root
        group: root
        mode: 0644
      when: not stblacklist.stat.exists
      tags: [ ethernet ]

    - name: "Ethernet | Blacklist bad Realtek driver"
      lineinfile:
        path: /etc/modprobe.d/blacklist
        regexp: '^blacklist r8169'
        line: 'blacklist r8169'
      tags: [ ethernet ]
```

##### Centos 7

* [https://www.unixteacher.org/blog/linux/ethernet-rtl-8168-driver-on-centos/](https://www.unixteacher.org/blog/linux/ethernet-rtl-8168-driver-on-centos/)

```bash
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm
yum update
yum install kmod-r8168
init 6 # reboot
```

## VGA

### IGDP Aperture Size

* [https://communities.intel.com/thread/106880](https://communities.intel.com/thread/106880)
* [https://www.legitreviews.com/how-to-get-more-graphics-performance-from-the-intel-nuc_136218](https://www.legitreviews.com/how-to-get-more-graphics-performance-from-the-intel-nuc_136218)

Bios Settings -> Appears on BIOS Screen ... -> Options -> Description / Purpose

* IGD Aperture Size
* Devices
  * 32MB
  * 64MB (default): Windows 10 will allocate graphics memory dynamically when it loads.
  * 128 MB
  * 256 MB
  * 512 MB (only if system has 1.5GB of memory installed)
  * 1024 MB (only if the system has 2GB memory installed)

```bash
root@nuc0:/var/lib/docker# lspci |grep -i vga
00:02.0 VGA compatible controller: Intel Corporation Device 5a85 (rev 0b)

root@nuc0:/var/lib/docker# lspci -v -s 00:02.0 |grep prefetch
	Memory at 88000000 (64-bit, non-prefetchable) [size=16M]
--->Memory at 80000000 (64-bit, prefetchable) [size=128M] <-----
```

## SSD

### High IOWait after connection SSD drive

```ini
vm.swappiness = 1
vm.vfs_cache_pressure = 45
vm.dirty_background_ratio = 10
vm.dirty_ratio = 10
vm.dirty_writeback_centisecs = 1500
kernel.nmi_watchdog = 0
```

* [https://superuser.com/questions/758270/very-high-iowait-after-connecting-ssd-drive](https://superuser.com/questions/758270/very-high-iowait-after-connecting-ssd-drive)

## Racks

* [Intel NUC mini PC rack mount](https://commons.wikimedia.org/wiki/File:8_intel_NUC_mini_pc_rack_mount_rack_shelf.jpg)
* [Amazon Intel NUC miniPC 19"](https://www.amazon.es/MiniPC-19inch-mounting-plates-included/dp/B07V6FS385)

## References

* [https://openhomelab.org/index.php?title=Intel_NUC](https://openhomelab.org/index.php?title=Intel_NUC)
* [https://www.reddit.com/r/homelab/comments/73o0m1/nuc_or_alternative_recommendations_for_openstack/](https://www.reddit.com/r/homelab/comments/73o0m1/nuc_or_alternative_recommendations_for_openstack/)

