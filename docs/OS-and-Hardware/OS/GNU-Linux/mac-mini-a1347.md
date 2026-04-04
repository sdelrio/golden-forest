# Mac Mini A1347

Almost all compatible with a recent kernel. On Debian 13 all but Wifi works fine.

## Wifi

### 1. Check network devices

* `lspci -vnn | grep -i net`
```bash title="Terminal"
$ lspci -vnn | grep -i net
02:00.0 Network controller [0280]: Broadcom Inc. and subsidiaries BCM4360 802.11ac Dual Band Wireless Network Adapter [14e4:43a0] (rev 03)
03:00.0 Ethernet controller [0200]: Broadcom Inc. and subsidiaries NetXtreme BCM57766 Gigabit Ethernet PCIe [14e4:1686] (rev 01)
	Subsystem: Broadcom Inc. and subsidiaries NetXtreme BCM57766 Gigabit Ethernet PCIe [14e4:1686]
```

### 2. Install Broadcom drivers

* Add `non-free` to your `/etc/apt/sources.list`
* `apt-get install linux-headers-$(uname -r|sed 's,[^-]*-[^-]*-,,') broadcom-sta-dkms`. Sample on debian 13 installed system.

```bash title="Terminal"
Leyendo lista de paquetes... Hecho
Creando árbol de dependencias... Hecho
Leyendo la información de estado... Hecho
linux-headers-6.12.74+deb13+1-amd64 ya está en su versión más reciente (6.12.74-2).
broadcom-sta-dkms ya está en su versión más reciente (6.30.223.271-26).
0 actualizados, 0 nuevos se instalarán, 0 para eliminar y 0 no actualizados.
```

### 3. Load the driver and disable others

```bash title="Terminal"
modprobe -r b44 b43 b43legacy ssb brcmsmac
modprobe wl
echo "wl" | tee -a /etc/modules
```

### 4. Configure wifi

```bash title="Terminal"
wpa_passphrase "Your_SSID" "Your_Password" | sudo tee /etc/wpa_supplicant/wpa_supplicant.conf
```

* Check for country and ctrl_interface at the beginning.

```bash title="/etc/wpa_supplicant/wpa_supplicant.conf"
ctrl_interface=DIR=/run/wpa_supplicant GROUP=netdev
update_config=1
country=ES  # Change to your 2-letter country code

network={
  ssid="Your_SSID"
  #psk="Your_Password"
  psk=c174a8f925b06ba03ad00bfa0d91210c7f28f9071bac05c8530146eb59c1e250
}
```

* Check `/etc/network/interfaces`.

```bash title="/etc/network/interfaces"
(...)
# The wireless interface
allow-hotplug wlp2s0
iface wlp2s0 inet dhcp
    wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
```

### 5. Enable the service

```bash title="Terminal"
systemctl enable --now wpa_supplicant.service
```

### 6. Restart networking

* `systemctl restart networking.service`

### 7. Blacklist other drivers

```bash title="Terminal"
cat << EOF > /etc/modprobe.d/blacklist-broadcom.conf
blacklist b43
blacklist b43legacy
blacklist b44
blacklist bcma
blacklist brcmsmac
blacklist ssb
EOF
```

### 8. Update initramfs

If you also want to setup wifii in initramfs step, make sure the content of `/etc/wpa_supplicant/wpa_supplicant.conf` is also on `/etc/initramfs-tools/wpa_supplicant.conf` but changing `ctr_interface` to `/tmp/wpa_supplicant`.

Also create initramfs script to enable wireless and to kill after intitramfs.

Make sure hooks and scripts have `chmod +x` set.

#### /etc/initramfs-tools/modules

```conf
# Add the following line at the end of the file
wl
```

#### initramfs-tools/wpa_supplicant.conf

```conf
ctrl_interface=/tmp/wpa_supplicant
#ctrl_interface=DIR=/run/wpa_supplicant GROUP=netdev
#update_config=1
country=ES  # Change to your 2-letter country code

network={
	ssid="Your_SSID"
	#psk="Your_Password"
	psk=c174a8f925b06ba03ad00bfa0d91210c7f28f9071bac05c8530146eb59c1e250
}
```

#### scripts/init-premount/a_enable_wireless

```shell title="scripts/init-premount/a_enable_wireless"
#!/bin/sh
PREREQ=""
prereqs()
{
    echo "$PREREQ"
}

case $1 in
prereqs)
    prereqs
    exit 0
    ;;
esac

. /scripts/functions

AUTH_LIMIT=30
INTERFACE="wlp2s0"
alias WPACLI="/sbin/wpa_cli -p/tmp/wpa_supplicant -i$INTERFACE "

log_begin_msg "Starting WLAN connection"
/sbin/wpa_supplicant  -i$INTERFACE -c/etc/wpa_supplicant.conf -P/run/initram-wpa_supplicant.pid -B -f /tmp/wpa_supplicant.log

# Wait for AUTH_LIMIT seconds, then check the status
limit=${AUTH_LIMIT}

echo -n "Waiting for connection (max ${AUTH_LIMIT} seconds)"
while [ $limit -ge 0 -a `WPACLI status | grep wpa_state` != "wpa_state=COMPLETED" ]
do
    sleep 1
    echo -n "."
    limit=`expr $limit - 1`
done
echo ""

if [ `WPACLI status | grep wpa_state` != "wpa_state=COMPLETED" ]; then
  ONLINE=0
  log_failure_msg "WLAN offline after timeout"
  panic
else
  ONLINE=1
  log_success_msg "WLAN online"
fi

configure_networking
```

#### scripts/local-bottom/kill_wireless

```shell title="/etc/initramfs-tools/scripts/local-bottom/kill_wireless"
#!/bin/sh
PREREQ=""
prereqs()
{
    echo "$PREREQ"
}

case $1 in
prereqs)
    prereqs
    exit 0
    ;;
esac

echo "Killing wpa_supplicant so the system takes over later."
kill `cat /run/initram-wpa_supplicant.pid`
```

#### hooks/enable-wireless

```bash title="hooks/enable-wireless"
#!/bin/sh
set -e

PREREQ=""
prereqs()
{
    echo "${PREREQ}"
}
case "${1}" in
    prereqs)
        prereqs
        exit 0
        ;;
esac

. /usr/share/initramfs-tools/hook-functions

# CHANGE HERE for your correct modules
manual_add_modules iwlwifi iwlmvm

copy_exec /sbin/wpa_supplicant
copy_exec /sbin/wpa_cli
copy_file config /etc/initramfs-tools/wpa_supplicant.conf /etc/wpa_supplicant.conf
```

#### update initramfs

```shell title="Terminal"
update-initramfs -u
```

### 9. IBT (Indirect Branch Tracking) on kernel

Mac mini A1347 doesn't have it. Disable it on `/etc/default/grub`.

* Open your Grub configuration: `sudo vi /etc/default/grub`
* Find the line starting with `GRUB_CMDLINE_LINUX_DEFAULT`. It likely looks like this:

```bash title="Terminal"
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
```

* Add `ibt=off` inside the quotes:

```bash title="Terminal"
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash ibt=off"
```

* Save and Exit.
* Apply the changes to the bootloader: `sudo update-grub`

### 10. Reboot your Mac Mini.
