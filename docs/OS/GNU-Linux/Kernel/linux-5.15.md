---
date: 20211106
author: sdelrio
tags:
- kernel
- linux
- linux 5
- linux 5.15
---

# Linux 5.15

Linux 5.15 is particularly exciting for AMD users, just not for CPUs and Radeon GPUs but also on the Ryzen client side and EPYC server front too. Linux 5.15 has a lot to offer with AMD improvements.

* [AMD Zen 3 APU temperature monitoring](https://www.phoronix.com/scan.php?page=news_item&px=AMD-Zen-3-APU-Temp-hwmon) support is finally in place... Unfortunately it took until months after launch and the basic patch was left up to the community this time. In any case, with Linux 5.15+ the new Zen 3 APUs can enjoy working temperature monitoring under Linux. 
* [Optimized C3 entry handling](https://www.phoronix.com/scan.php?page=news_item&px=AMD-C3-Optimize-Linux-5.15) for when AMD CPUs are entering the C3 power sleep state. The optimization is that the kernel doesn't need to flush the caches before entering C3 due to the possible performance impact for other cores that are sharing caches. Intel CPUs have long enjoyed this behavior under Linux and even Zhaoxin and Centaur CPUs have had this in place for Linux while the AMD optimization is only now in place.
* [The AMD KVM code now supports 5-level paging](https://www.phoronix.com/scan.php?page=news_item&px=Linux-5.15-KVM) for handling greater memory capacities. Thus it's looking like AMD EPYC "Genoa" processors will be supporting 5-level paging. 

## References

* <https://www.phoronix.com/scan.php?page=news_item&px=Linux-5.15-AMD>
* <https://www.pcgamer.com/linux-515-update-brings-plenty-of-improvements-for-amd-hardware-and-the-steam-deck/>
* <http://lkml.iu.edu/hypermail/linux/kernel/2109.1/05136.html>
