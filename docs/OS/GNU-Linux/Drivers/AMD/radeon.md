---
date: 20211106
author: sdelrio
tags:
- amd
- radeon
- driver
---

# Radeon Drivers

It wont have the openCL support (Some programs like DarkTable, or some ML apps will use that for hardware acceleration).

## Check hardware video

```bash
$ sudo lshw -c video
  *-display                 
       descripción: VGA compatible controller
       producto: Ellesmere [Radeon RX 470/480/570/570X/580/580X/590]
       fabricante: Advanced Micro Devices, Inc. [AMD/ATI]
       id físico: 0
       información del bus: pci@0000:09:00.0
       versión: cf
       anchura: 64 bits
       reloj: 33MHz
       capacidades: pm pciexpress msi vga_controller bus_master cap_list rom
       configuración: driver=amdgpu latency=0
       recursos: irq:97 memoria:d0000000-dfffffff memoria:e0000000-e01fffff ioport:f000(size=256) memoria:fcf00000-fcf3ffff memoria:fcf40000-fcf5ffff
```
### Check loaded modules

```bash
$ lsmod |grep amdgpu
amdgpu               5787648  34
amd_iommu_v2           20480  1 amdgpu
amd_sched              32768  1 amdgpu
amdttm                102400  1 amdgpu
amdkcl                 24576  2 amdttm,amdgpu
drm_kms_helper        184320  1 amdgpu
drm                   491520  16 drm_kms_helper,amd_sched,amdttm,amdgpu,amdkcl
i2c_algo_bit           16384  2 igb,amdgpu
```

### Boot information

```bash
> dmesg | grep -i amdgpu
[    1.807303] [drm] amdgpu kernel modesetting enabled.
[    1.807304] [drm] amdgpu version: 5.6.12
[    1.807356] amdgpu: Ignoring ACPI CRAT on non-APU system
[    1.807359] amdgpu: Virtual CRAT table created for CPU
[    1.807366] amdgpu: Topology: Add CPU node
[    1.808784] amdgpu 0000:09:00.0: remove_conflicting_pci_framebuffers: bar 0: 0xd0000000 -> 0xdfffffff
[    1.808784] amdgpu 0000:09:00.0: remove_conflicting_pci_framebuffers: bar 2: 0xe0000000 -> 0xe01fffff
[    1.808785] amdgpu 0000:09:00.0: remove_conflicting_pci_framebuffers: bar 5: 0xfcf00000 -> 0xfcf3ffff
[    1.808786] amdgpu 0000:09:00.0: vgaarb: deactivate vga console
[    1.808807] amdgpu 0000:09:00.0: enabling device (0006 -> 0007)
[    1.808882] amdgpu 0000:09:00.0: amdgpu: Trusted Memory Zone (TMZ) feature not supported
[    1.808910] amdgpu: ATOM BIOS: 113-V34111-F4
[    1.808963] amdgpu 0000:09:00.0: amdgpu: VRAM: 4096M 0x000000F400000000 - 0x000000F4FFFFFFFF (4096M used)
[    1.808963] amdgpu 0000:09:00.0: amdgpu: GART: 256M 0x000000FF00000000 - 0x000000FF0FFFFFFF
[    1.809012] [drm] amdgpu: 4096M of VRAM memory ready
[    1.809013] [drm] amdgpu: 64297M of GTT memory ready.
[    1.812114] amdgpu: [powerplay] hwmgr_sw_init smu backed is polaris10_smu
[    2.098953] kfd kfd: amdgpu: Allocated 3969056 bytes on gart
[    2.099524] amdgpu: Virtual CRAT table created for GPU
[    2.099570] amdgpu: Topology: Add dGPU node [0x67df:0x1002]
[    2.099571] kfd kfd: amdgpu: added device 1002:67df
[    2.099573] amdgpu 0000:09:00.0: amdgpu: SE 4, SH per SE 1, CU per SH 9, active_cu_number 32
[    2.102238] fbcon: amdgpudrmfb (fb0) is primary device
[    2.102241] amdgpu 0000:09:00.0: fb0: amdgpudrmfb frame buffer device
[    2.122623] [drm] Initialized amdgpu 3.39.0 20150101 for 0000:09:00.0 on minor 0
```


* <https://linuxconfig.org/amd-radeon-ubuntu-20-04-driver-installation>

## Open Source AMD Radeon Ubuntu Driver

Usually installed by default on your system 

You wont have the latestsAMD Radeon version


## PPA third-party repository

It usually has the latest AMD Radeon driver version.

### Install

```bash
$ sudo add-apt-repository ppa:oibaf/graphics-drivers
$ sudo apt update && apt -y upgrade
```

### Uninstall

```bash
$ sudo apt install ppa-purge
$ sudo ppa-purge ppa:oibaf/graphics-drivers
```

## Propiertary AMDGPU-PRO dirvers

### Install

[AMD Download Page](https://support.amd.com/en-us/download/linux)

```bash
$ tar -xf amdgpu-pro_*.tar.xz
$ cd amdgpu-pro-XX.XX-XXXXXX
$ ./amdgpu-pro-install -y
```

### Uninstall

```bash
$ amdgpu-pro-uninstall
```
## Issues

### Files missing in `/lib/firmare/amdgpu`

* <https://www.linux.org/threads/files-missing-in-lib-firmware-amdgpu-solved.30836/>

## References
