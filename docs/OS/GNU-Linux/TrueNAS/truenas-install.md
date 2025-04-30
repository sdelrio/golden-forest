---
title: TrueNAS SCALE Install
date: 20230901
author: sdelrio
tags:
 - zfs
 - zpool
 - nas
---

# TrueNAS SCALE Install

By default Truenas will install in one (or several disk if want to mirror) using all space available on the disk, without posibility for partition.

## Using a smaller partition for the root pool

* Install on a small temporary disk (sda in this case).
* Copy partitions from temporary disk to target disk (nvme2n1 in this case):

```bash
sgdisk --backup=/root/partition_table_sda /dev/sda
sgdisk --load-backup=/root/partition_table_sda /dev/nvme2n1
```

* Then Reboot the system through the UI or by CLI

```bash
reboot
```

* Attach target disk parition to temporary install disk partition, as if you were preparing a mirror

```bash
zpool attach boot-pool sda3 nvme2n1p3
zpool status boot-pool
```

* Wait for resilver
* Copy the content of the grub and UEFI partitions

```bash
dd if=/dev/sda1 of=/dev/nvme2n1p1
dd if=/dev/sda2 of=/dev/nvme2n1p2
sync
```

* Detach temporary install disk (sda in this example)

```bash
zpool offline boot-pool sda
zpool detach boot-pool sda
```

```bash
root@truenas[~]# zpool status boot-pool

  pool: boot-pool
 state: ONLINE
status: Some supported and requested features are not enabled on the pool.
	The pool can still be used, but some features are unavailable.
action: Enable all features using 'zpool upgrade'. Once this is done,
	the pool may no longer be accessible by software that does not support
	the features. See zpool-features(7) for details.
  scan: scrub repaired 0B in 00:00:04 with 0 errors on Tue Aug 29 03:45:05 2023
config:

	NAME         STATE     READ WRITE CKSUM
	boot-pool    ONLINE       0     0     0
	  nvme2n1p3  ONLINE       0     0     0

errors: No known data errors
```
### Use the free space to create a ZVOL

* Check partition with `parted`

```bash
(parted) print free                                                       
Model: Samsung SSD 980 500GB (nvme)
Disk /dev/nvme2n1: 500GB
Sector size (logical/physical): 512B/512B
Partition Table: gpt
Disk Flags: 

Number  Start   End     Size    File system  Name  Flags
        17.4kB  2097kB  2080kB  Free Space
 1      2097kB  3146kB  1049kB                     bios_grub, legacy_boot
 2      3146kB  540MB   537MB   fat32              boot, esp
 3      540MB   40.0GB  39.5GB  zfs
        40.0GB  500GB   460GB   Free Space
```

* Make new partition. You could use 100% but I like this unit to last a little longer so I leave a 5% free space. So I end partition at 470GB insteadl 500GB.

```bash
(parted) mkpart                                                           
Partition name?  []?                                                      
File system type?  [ext2]? zfs                                            
Start? 40.0GB                                                             
End? 470GB                                                                
(parted) p                                                                
Model: Samsung SSD 980 500GB (nvme)
Disk /dev/nvme2n1: 500GB
Sector size (logical/physical): 512B/512B
Partition Table: gpt
Disk Flags: 

Number  Start   End     Size    File system  Name  Flags
 1      2097kB  3146kB  1049kB                     bios_grub, legacy_boot
 2      3146kB  540MB   537MB   fat32              boot, esp
 3      540MB   40.0GB  39.5GB  zfs
 4      40.0GB  470GB   430GB   zfs
```

* Create a zpool with extra space

```bash
zpool create boot-extra  /dev/disk/by-id/nvme-Samsung_SSD_980_500GB_S64AAA0T012345B-part4
```

* Export the poool so TrueNAS can import it

```bash
zpool export boot-extra
```

* In TrueNAS UI `Storage` -> `Import Pool` -> select pool to import pool: `boot-extra`


### References

* [https://www.truenas.com/community/threads/howto-setup-a-pair-of-larger-ssds-for-boot-pool-and-data.81409/](https://www.truenas.com/community/threads/howto-setup-a-pair-of-larger-ssds-for-boot-pool-and-data.81409/)

