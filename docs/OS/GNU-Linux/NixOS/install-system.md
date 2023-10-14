---
title: Installing NixOS
date: 20231014
author: sdelrio
tags:
 - nixos
 - nix
 - nixos-install
---

# Installing


The pretty basic install will need a `configuration.nix`, additionally the default installation also includes a `hardware-configuration.nix`.

* <https://nixos.org/manual/nixos/stable/#sec-installation-manual-installing>

The command `nixos-generate-config` can generate those initial configuration 
files for you. Usually we will mount the target hardisk in some directory, in 
this sample will be on `/mnt` so the tool will write the files into `/mnt/etc/nixos`.

```bash
sudo nixos-generate-config --root /mnt
writing /mnt/etc/nixos/hardware-configuration.nix...
writing /mnt/etc/nixos/configuration.nix...
For more hardware-specific settings, see https://github.com/nixOs/nixos-hardware.
```

At this point we can edit the file and take a look or even add something (`vi /mnt/etc/nixos/configuration.nix`).
`
Once we have the `configuration.nix` we can use the command `nixos-install`

```bash
sudo nixos-install
copying channel...
building the configuration in /mnt/etc/nixos/configuration.nix...
copying path '/nix/store/(...)' from 'https://cache.nix.org'...
copying path '/nix/store/(...)' to 'local'...
(..)
```

This command should include the grub install so after it finish we can reboot the system.


## NixOS switch

Once the system is started we can change the `/etc/nixos/configuration.nix`, after 
that we can apply the change siwth the `nixos-rebuild swith` or we can test it 
before applying it with the `nixos-rebuild test`.

```bash
sudo nixos-rebuild switch
sudo nixos-rebuild test
```

## Generations

Every time the system state is rebuilt using `nixos-rebuild switch`, a new generation 
is created. The previous generations are usually added to the grub menu in case you
need to go back

### Revert generation

* Roll back a user environment
```bash
nix-env --rollback
```

* Roll back a system environment
```bash
nixos-rebuild switch --rollback
```

### List generations

```bash
sudo nix-env --list-generations --profile /nix/var/nix/profiles/system
```

### Delete generations

```bash
sudo nix-env --list-generations --profile /nix/var/nix/profiles/system
```

## Upgrade NixOs packages

Will be the classic equivalent of `apt-get upgrade` or `yum check-update`. It will 
get all the packages and upgrade to the latest verions.

```bash
sudo nixos-rebuild switch --upgrade
```

## Hardware

### Show hardware configs

It can be usefull if we add or change some hardware which can be detected by the basic configurator.

```bash
nixos-generate-config --show-hardware-config 
```

```bash
nixos-generate-config --show-hardware-config --no-filesystems
```

### Hardware profiles

Some notebooks and other systems hardware configurations from the official NixOS github:

* <https://github.com/NixOS/nixos-hardware>

