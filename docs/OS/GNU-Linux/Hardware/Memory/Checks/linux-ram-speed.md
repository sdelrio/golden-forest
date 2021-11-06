---
title: Ram speed
date: 20211106
author: sdelrio
tags:
- ram
- linux
- speed
---

# Check RAM speed in Linux

## Linux check ram speed and type commands

Explains how to find out RAM make, type and speed (in Mhz) under any Linux distro or UNIX / BSD systems using the CLI.

```bash
sudo dmidecode -t memory | grep -i speed
```

```bash
	Speed: 2133 MT/s
	Configured Memory Speed: 2133 MT/s
	Speed: 2133 MT/s
	Configured Memory Speed: 2133 MT/s
	Speed: 2133 MT/s
	Configured Memory Speed: 2133 MT/s
	Speed: 2133 MT/s
	Configured Memory Speed: 2133 MT/s
```

## lshw

```bash
sudo lshw -short -C memory
```

```bash
ruta H/W                  Dispositivo  Clase          Descripción
==================================================================
/0/0                                   memory         64KiB BIOS
/0/35                                  memory         64GiB Memoria de sistema
/0/35/0                                memory         16GiB DIMM DDR4 Síncrono Unbuffered (Unregistered) 2133 MHz (0,5 ns)
/0/35/1                                memory         16GiB DIMM DDR4 Síncrono Unbuffered (Unregistered) 2133 MHz (0,5 ns)
/0/35/2                                memory         16GiB DIMM DDR4 Síncrono Unbuffered (Unregistered) 2133 MHz (0,5 ns)
/0/35/3                                memory         16GiB DIMM DDR4 Síncrono Unbuffered (Unregistered) 2133 MHz (0,5 ns)
/0/38                                  memory         768KiB L1 caché
/0/39                                  memory         6MiB L2 caché
/0/3a                                  memory         64MiB L3 caché
```
## References

* <https://www.cyberciti.biz/faq/check-ram-speed-linux/>
