# Mac Book Pro 16 intel

Install with Ubuntu T2 version

## Info

### VGAs detected

```bash

# lspci  | grep  -i " VGA"
00:02.0 VGA compatible controller: Intel Corporation CoffeeLake-H GT2 [UHD Graphics 630]
03:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Navi 14 [Radeon RX 5500/5500M / Pro 5300/5500M] (rev 43)
```

### dracut.conf

```bash
# cat /etc/dracut.conf.d/t2linux-modules.conf
force_drivers+=" apple-bce "
```

### apple-gmux.conf

```bash
$ cat /etc/modprobe.d/apple-gmux.conf
# Enable the iGPU by default if present
options apple-gmux force_igd=y
```

### Suspend systemd script

- https://gist.github.com/gbrow004/096f845c8fe8d03ef9009fbb87b781a4#suspend

```bash
$ cat  /lib/systemd/system-sleep/rmmod.sh
#!/bin/sh

case $1 in
  pre)
    rmmod thunderbolt
    rmmod hid_appletb_kbd
    rmmod hid_appletb_bl
  # rmmod apple_ib_tb
    rmmod brcmfmac_wcc brcmfmac 
  ;;
  post)
    modprobe thunderbolt
    modprobe hid_appletb_kbd
    modprobe hid_appletb_bl
  # modprobe apple_ib_tb
    modprobe brcmfmac_wcc brcmfmac 
    echo 1 > sudo tee /sys/bus/pci/devices/0000:04:00.2/rescan
    echo LID0 > /proc/acpi/wakeup 2>/dev/null || true
    echo ARPT > /proc/acpi/wakeup 2>/dev/null || true
  ;;
```

### Suspend systemd service

```bash
# cat /etc/systemd/system/suspend-fix-t2.service
[Unit]
Description=Disable and Re-Enable Apple BCE Module (and Wi-Fi)
Before=sleep.target
StopWhenUnneeded=yes

[Service]
User=root
Type=oneshot
RemainAfterExit=yes

#ExecStart=/usr/sbin/modprobe -r brcmfmac_wcc
#ExecStart=/usr/sbin/modprobe -r brcmfmac
ExecStart=/usr/sbin/rmmod -f apple-bce

ExecStop=/usr/sbin/modprobe apple-bce
#ExecStop=/usr/sbin/modprobe brcmfmac
#ExecStop=/usr/sbin/modprobe brcmfmac_wcc

[Install]
WantedBy=sleep.target
```


### Grub CMDLINE

Exeute `sudo update-grub` after editing the file.

```bash
$ grep CMDLINE_LINUX_DEFAULT /etc/default/grub
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash intel_iommu=on iommu=pt pm_async=off intel.modeset=1 amdgpu.modeset=0 i915.enable_guc=3 pcie_aspm=off acpi_mask_gpe=0x6E"
```

* intel.modeset=1
* amdgpu.modeset=0
  > Leave the internal GPU preference

* i915.enable_guc=3
* pcie_aspm=off

* `acpi_maskt_gpe=0x6E`: Find if an item has hunder ofi thousand of calls after wake up. Take care to not disable T2 chip.

  > ```bash
  > $ grep . /sys/firmware/acpi/interrupts/gpe* |grep -v "  0"
  > ```


### /proc/acpi/wakeup$ grep . /sys/firmware/acpi/interrupts/gpe* |grep -v "  0"

```bash
# cat /proc/acpi/wakeup 
Device	S-state	  Status   Sysfs node
PEG0	  S3	*enabled   pci:0000:00:01.0
GFX0	  S3	*disabled  pci:0000:03:00.0
            *disabled  auxiliary:acpi.video_bus.0
PEG1	  S3	*enabled   pci:0000:00:01.1
XHC2	  S3	*enabled   pci:0000:09:00.0
PEG2	  S3	*enabled   pci:0000:00:01.2
XHC3	  S3	*enabled   pci:0000:7f:00.0
RP01	  S3	*enabled   pci:0000:00:1c.0
ARPT	  S4	*enabled   pci:0000:05:00.0
RP17	  S3	*enabled   pci:0000:00:1b.0
EC	  S4	*disabled  platform:PNP0C09:00
GPUC	  S3	*disabled  pnp:00:00
BLTH	  S4	*disabled  serial:serial0-0
XHC1	  S3	*enabled   pci:0000:00:14.0
ADP1	  S4	*disabled  platform:ACPI0003:00
LID0	  S4	*enabled   platform:PNP0C0D:00
```

### vgswitchero

To enable Internal Graphic Device:

```bash
$ echo IGD | sudo tee /sys/kernel/debug/vgaswitcheroo/switch
```

Then check for the `+` character:

```bash
$ sudo cat /sys/kernel/debug/vgaswitcheroo/switch
0:IGD:+:Pwr:0000:00:02.0
1:DIS-Audio: :DynOff:0000:03:00.1
2:DIS: :Pwr:0000:03:00.0

```

Check active GPU:

```bash
$ glxinfo |grep "OpenGL renderer"
OpenGL renderer string: Mesa Intel(R) UHD Graphics 630 (CFL GT2)

$ DRI_PRIME=0 glxinfo |grep "OpenGL renderer"
OpenGL renderer string: AMD Radeon Graphics (radeonsi, navi14, ACO, DRM 3.64, 7.0.3-1-t2-resolute)

$ DRI_PRIME=1 glxinfo |grep "OpenGL renderer"
OpenGL renderer string: Mesa Intel(R) UHD Graphics 630 (CFL GT2)
```

### mem_sleep

To enable `s2idle` or `deep` mode, echo to the `mem_sleep`:

```bash
$ echo deep > sudo tee /sys/power/mem_sleep 
``

```bash
$ cat /sys/power/mem_sleep
s2idle [deep]
```

## Tools

### intel_gpu_top

```bash
sudo apt install intel-gpu-tools`
```

Execute `intel_gpu_top`.

### Radeon Profile

```bash
sudo add-apt-repository ppa:radeon-profile/stable
sudo apt update:
sudo apt install radeon-profile
```

Execute `radeontop`.

## References

- https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1072360
- https://t2linux.org/
- https://gist.github.com/gbrow004/096f845c8fe8d03ef9009fbb87b781a4
- https://takachin.github.io/mbp2017-linux-note/en/suspend-resume.html
- https://gist.github.com/julianlam/166823c982fd20ee4a748442cc77bbef
- https://askubuntu.com/questions/1469680/how-to-change-sys-power-mem-sleep-nothing-is-able-to-change-it-and-all-advice

