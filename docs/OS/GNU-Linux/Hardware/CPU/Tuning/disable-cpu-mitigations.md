---
title: Disable mitigations
date: 20211106
author: sdelrio
tags:
- cpu
- tuning
- mitigation
- security
---

# Disable CPU mitigations

There is anumber of kernel boot parameters available to disable or fine-tune hardware vulnerability mitigations:

## Hardware vulnerabilities

### Spectre v1 and v2

* `nospectre_v1` (x86, PowerPC), 
* `nospectre_v2` (x86, PowerPC, S/390, ARM64), 
* `spectre_v2_user=off` (x86)


### SSB

* `spec_store_bypass_disable=off` (x86, PowerPC)
* `ssbd=force-off` (ARM64)

### L1TF

* `l1tf=off` (x86)

### MDS

* `mds=off` (x86)

### TAA

* `tsx_async_abort=off`

### iTLB multihit

* `nx_huge_pages=off`

### KPTI can be disabled with 

* `nopti` (x86, PowerPC) 
* `kpti=0` (ARM64)

### TSX async abort

* `tsx_async_abort=off` (x86)

### KVM NX huge pages

* `kvm.nx_huge_pages=off` (x86)

## meta-parameter, mitigations

It was introduced in 5.2 and back-ported to 5.1.2, 5.0.16, and 4.19.43 (and perhaps others). It can be used to control all mitigations, on all architectures, as follows:

* `mitigations=off` will disable all optional CPU mitigations;
* `mitigations=auto` (the default setting) will mitigate all known CPU vulnerabilities, but leave SMT enabled (if it is already);
* `mitigations=auto,nosmt` will mitigate all known CPU vulnerabilities and disable SMT if appropriate.

## Sample Ryzen 3000 series

### Edit grub CMDLINE
```bash
$ cat /etc/default/grub|grep CMD
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash nospectre_v1 nospectre_v2 spectre_v2_user=off"
GRUB_CMDLINE_LINUX=""
```

### Update grub and restart

```bash
# update-grub
# reboot
# lscpu|grep Vul
Vulnerability Itlb multihit:         Not affected
Vulnerability L1tf:                  Not affected
Vulnerability Mds:                   Not affected
Vulnerability Meltdown:              Not affected
Vulnerability Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl and seccomp
Vulnerability Spectre v1:            Vulnerable: __user pointer sanitization and usercopy barriers only; no swapgs barriers
Vulnerability Spectre v2:            Vulnerable, IBPB: disabled, STIBP: disabled
Vulnerability Srbds:                 Not affected
Vulnerability Tsx async abort:       Not affected
```

## References

* <https://unix.stackexchange.com/questions/554908/disable-spectre-and-meltdown-mitigations>
