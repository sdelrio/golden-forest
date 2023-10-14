# NixOS Root on ZFS


## Requirements inside VM

* Make sure the disk has some serial number so we created the `disk/by-id` device. In virt manager you can do this into VirtIO Disk -> advanced options -> Serial
* Make sure you UEFI bios enabled (you will need to download OVMF). You can add it through xml configuration if your virt manager doesn't support it:
```xml
  <os>
    <type arch="x86_64" machine="pc-q35-5.0">hvm</type>
    <loader readonly="yes" type="pflash">/usr/share/OVMF/OVMF_CODE.fd</loader>
    <nvram>/var/lib/libvirt/qemu/nvram/NixOSVM.fd</nvram>
    <bootmenu enable="no"/>
  </os>
```
* If using Wayland or want 3D acel [configure](https://www.youtube.com/watch?v=6-IpJLYjc0M):
  * Video QXL:
    * Model: virtio
    * 3D acelration: checked
  * Display Spice:
    * Type: spice server
    * Listen: none
    * OpenGL: on

### Check the disk with id

```bash
[root@nixos:~]# find /dev/disk/by-id/
/dev/disk/by-id/
/dev/disk/by-id/ata-QEMU_DVD-ROM_QM00001
/dev/disk/by-id/virtio-abcdef0123456789
```

## Sample partition schema

### Without swap:

```bash
Number  Start   End     Size    File system  Name   Flags
 4      1049kB  2097kB  1049kB               BIOS   bios_grub, legacy_boot
 1      2097kB  1074MB  1072MB  fat32        EFI    boot, esp
 2      1074MB  5369MB  4295MB               bpool
 3      5369MB  20.4GB  15.0GB               rpool
```

### With swap

```bash
Number  Start   End     Size    File system  Name   Flags
 5      1049kB  2097kB  1049kB  ext4         BIOS   bios_grub, legacy_boot
 1      2097kB  1074MB  1072MB  fat32        EFI    boot, esp
 2      1074MB  5369MB  4295MB               bpool
 3      5369MB  18.3GB  12.9GB               rpool
 4      18.3GB  20.4GB  2147MB               swap
```

* [In defense of swap](https://chrisdown.name/2018/01/02/in-defence-of-swap.html)
* [Linux Performance: Almost always add swap space](https://haydenjames.io/linux-performance-almost-always-add-swap-space/)

## Destroy partitions

In case you have a previous install with zfs labels, and IDs, is recomended to destroy everything or you will messages like that zfs is used on some machine IDs.

```bash
wipefs -a /dev/disk/by-id/virtio-abcdef0123456789-part{1,2,3,4,5}
wipefs -a /dev/disk/by-id/virtio-abcdef0123456789
zpool labelclear -f /dev/disk/by-id/virtio-abcdef0123456789
sgdisk --zap-all /dev/disk/by-id/virtio-abcdef0123456789
```

### View block IDs for zfs_members

Check no duplicated `zfs_member` with same `LABEL` or will have problems on boot with grub and zfs import.

```bash
blkid -p /dev/vda{1,2,3,4,5} | grep --color zfs_member
```

### Wipe script

import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!/docs/OS/GNU-Linux/NixOS/wipe.sh';

<CodeBlock language="bash">{MyComponentSource}</CodeBlock>

## Install

### Install script collected from [NixOS Root on ZFS](https://openzfs.github.io/openzfs-docs/Getting%20Started/NixOS/Root%20on%20ZFS.html)

import MyInstallScript from '!!raw-loader!/docs/OS/GNU-Linux/NixOS/install.sh';

<CodeBlock language="bash">{MyInstallScript}</CodeBlock>


### Check zpools

```bash
[root@nixos:~]# zfs get mounted,canmount,mountpoint rpool
NAME   PROPERTY    VALUE       SOURCE
rpool  mounted     no          -
rpool  canmount    off         local
rpool  mountpoint  /           local

[root@nixos:~]# zfs get mounted,canmount,mountpoint bpool
NAME   PROPERTY    VALUE       SOURCE
bpool  mounted     no          -
bpool  canmount    off         local
bpool  mountpoint  /boot       local
```


### Console and locale for Spanish

```haskel
  console = pkg.lib.mkforce {
    keyMap = "es";
    font = "Lat2-Terminus16";
    useXkbConfig = true;
  };

  i18n.defaultLocale = "es_ES.UTF-8";
```

* configs: <https://github.com/mcdonc/p51-thinkpad-nixos/tree/zfsvid>

## References

* Official [NixOS Root on ZFS](https://openzfs.github.io/openzfs-docs/Getting%20Started/NixOS/Root%20on%20ZFS.html).
* Install videos
  * NixOS 1: ZFS Encrypted Root on Thinkpad P51
    <iframe width="560" height="315" src="https://www.youtube.com/embed/CboOUrkIZ2k?si=9lp1FIQHCWXQPDcv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Default configuration

### Configuration.nix


```bash

# Edit this configuration file to define what should be installed on
# your system.  Help is available in the configuration.nix(5) man page
# and in the NixOS manual (accessible by running `nixos-help`).

{ config, pkgs, ... }:

{
  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix
    ];

  # Use the GRUB 2 boot loader.
  boot.loader.grub.enable = true;
  boot.kernelPackages = config.boot.zfs.package.latestCompatibleLinuxPackages;
  boot.zfs.devNodes = "/dev/disk/by-partuuid";
  boot.loader.grub.efiSupport = true;
  boot.loader.grub.efiInstallAsRemovable = true;
  boot.loader.efi.efiSysMountPoint = "/boot/efi";
  # Define on which hard drive you want to install Grub.
  # boot.loader.grub.device = "/dev/sda"; # or "nodev" for efi only
  boot.loader.grub.device = "nodev"; # or "nodev" for efi only

  boot.supportedFilesystems = [ "zfs" ];
  boot.zfs.requestEncryptionCredentials = true;

  network.hostId = "nixos-46f14301" # Define unique id, sample: head -c 8 /etc/machine-id
  # Used to determine which machien last imported the zfs device

  networking.hostName = "nixos"; # Define your hostname.
  # Pick only one of the below networking options.
  # networking.wireless.enable = true;  # Enables wireless support via wpa_supplicant.
  networking.networkmanager.enable = true;  # Easiest to use and most distros use this by default.

  # Set your time zone.
  # time.timeZone = "Europe/Amsterdam";
  time.timeZone = "Europe/Madrid";

  # Configure network proxy if necessary
  # networking.proxy.default = "http://user:password@proxy:port/";
  # networking.proxy.noProxy = "127.0.0.1,localhost,internal.domain";

  # Select internationalisation properties.
  # i18n.defaultLocale = "en_US.UTF-8";
  i18n.defaultLocale = "en_ES.UTF-8";
  console = {
    font = "Lat2-Terminus16";
    keyMap = "es";
    useXkbConfig = true; # use xkbOptions in tty.
  };

  # Enable the X11 windowing system.
  services.xserver.enable = true;

  services.zfs.autoScrub.enable = true;
  services.zfs.trim.enable = false;
  boot.kernelParams = [
    "nohibernate"
    "zfs.zfs_arc_max=12884901888"
    "mitigations=off"
  ];

  # Enable the GNOME Desktop Environment.
  services.xserver.displayManager.gdm.enable = true;
  services.xserver.desktopManager.gnome.enable = true;
  

  # Configure keymap in X11
  services.xserver.layout = "es";
  # services.xserver.xkbOptions = "eurosign:e,caps:escape";

  # Enable CUPS to print documents.
  # services.printing.enable = true;

  # Enable sound.
  # sound.enable = true;
  # hardware.pulseaudio.enable = true;

  # Enable touchpad support (enabled default in most desktopManager).
  # services.xserver.libinput.enable = true;

  # Define a user account. Don't forget to set a password with ‘passwd’.
  users.users.myuser = {
    isNormalUser = true;
    initialPassword= "myuser";
    extraGroups = [ "wheel" ]; # Enable ‘sudo’ for the user.
    packages = with pkgs; [
  #    firefox
      tree
    ];
  };

  # List packages installed in system profile. To search, run:
  # $ nix search wget
  environment.systemPackages = with pkgs; [
    vim # Do not forget to add an editor to edit configuration.nix! The Nano editor is also installed by default.
    wget
  ];

  # Some programs need SUID wrappers, can be configured further or are
  # started in user sessions.
  # programs.mtr.enable = true;
  # programs.gnupg.agent = {
  #   enable = true;
  #   enableSSHSupport = true;
  # };

  # List services that you want to enable:

  # Enable the OpenSSH daemon.
  # services.openssh.enable = true;

  # Open ports in the firewall.
  # networking.firewall.allowedTCPPorts = [ ... ];
  # networking.firewall.allowedUDPPorts = [ ... ];
  # Or disable the firewall altogether.
  networking.firewall.enable = false;

  # Copy the NixOS configuration file and link it from the resulting system
  # (/run/current-system/configuration.nix). This is useful in case you
  # accidentally delete configuration.nix.
  # system.copySystemConfiguration = true;

  # This value determines the NixOS release from which the default
  # settings for stateful data, like file locations and database versions
  # on your system were taken. It's perfectly fine and recommended to leave
  # this value at the release version of the first install of this system.
  # Before changing this value read the documentation for this option
  # (e.g. man configuration.nix or on https://nixos.org/nixos/options.html).
  system.stateVersion = "23.05"; # Did you read the comment?

}

```


### Hardware generator

```bash
[root@nixos:/mnt/sergio/etc/nixos]# cat hardware-configuration.nix 
# Do not modify this file!  It was generated by ‘nixos-generate-config’
# and may be overwritten by future invocations.  Please make changes
# to /etc/nixos/configuration.nix instead.
{ config, lib, pkgs, modulesPath, ... }:

{
  imports =
    [ (modulesPath + "/profiles/qemu-guest.nix")
    ];

  boot.initrd.availableKernelModules = [ "ahci" "xhci_pci" "virtio_pci" "sr_mod" "virtio_blk" ];
  boot.initrd.kernelModules = [ ];
  boot.kernelModules = [ "kvm-amd" ];
  boot.extraModulePackages = [ ];

  swapDevices = [ ];

  # Enables DHCP on each ethernet and wireless interface. In case of scripted networking
  # (the default) this is the recommended approach. When using systemd-networkd it's
  # still possible to use this option, but it's recommended to use it in conjunction
  # with explicit per-interface declarations with `networking.interfaces.<interface>.useDHCP`.
  networking.useDHCP = lib.mkDefault true;
  # networking.interfaces.enp1s0.useDHCP = lib.mkDefault true;

  nixpkgs.hostPlatform = lib.mkDefault "x86_64-linux";
}
```



