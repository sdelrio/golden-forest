---
title: ZFS
date: 20211106
author: sdelrio
tags:
 - zfs
 - zpool
 - gc
---

# ZFS

[ZFS](https://en.wikipedia.org/wiki/ZFS) combines a file system with a volume manager.

## Instal Linux Mint 20 with ZFS

Before starting installation, open a terminal and run this command:

```bash
sudo aptitude -y install libzfs2linux zfs-initramfs zfsutils-linux zfs-zed
```

Then start installation and when you get to the filesystem picker, choose advanced and select **"Experimental ZFS"**. Continue as you would normally do.

* [ZFS and Linux Mint 20 forums](https://forums.linuxmint.com/viewtopic.php?t=306210)

## Mount

### mounts external disk share

```bash
zfs mount -l -a
zfs share hddpool/imagenes
```


### Import a pool as readonly

```bash
zpool import -o readonly=on {{ pool_name }}
```

### Mount a ZFS snapshot in a directory as readonly

```bash
mount -t zfs {{ pool_name }}/{{ snapshot_name }} {{ mount_path }} -o ro
```

## Pool

### Create

:::note Note: Use `disk by-id`
Use `/dev/disk/by-id/` instead `/dev/sdX`. This way doesn't matter where you plug the hard disk in the controller.
:::

#### Command

```bash
zpool create hddpool mirror /dev/disk/by-id/... /dev/disk/by-id/...
```

#### Sample

```bash
zpool create hddpool mirror /dev/disk/by-id/ata-Hitachi_HDS5C3020ALA632_ML4220F424ERTK /dev/disk/by-id/ata-Hitachi_HDS5C3020ALA632_ML4220F31666VK
```

### List
```
zpool list 
```

```bash
NAME      SIZE  ALLOC   FREE  CKPOINT  EXPANDSZ   FRAG    CAP  DEDUP    HEALTH  ALTROOT
bpool    1,88G   531M  1,36G        -         -     1%    27%  1.00x    ONLINE  -
hddpool  1,81T   461G  1,36T        -         -     0%    24%  1.00x    ONLINE  -
rpool     460G   164G   296G        -         -    24%    35%  1.00x    ONLINE  -
```

### Cache (ZIL/ARC)

* ZFS Intent Log, or ZIL, is designed to buffer **WRITE** operations
* ARC and L2ARC are ment for **READ** operations

[Configure ZFS cache for high Speed IO](https://linuxhint.com/configuring-zfs-cache/)
[ZFS sync/async + ZIL/SLOG explained](https://jrs-s.net/2019/05/02/zfs-sync-async-zil-slog/)
[TrueNas SLOG](https://www.truenas.com/docs/references/slog/)

#### ZIL Log

[Exploring the Best ZFS ZIL SLOG SSD with Intel Optane and NAND](https://www.servethehome.com/exploring-best-zfs-zil-slog-ssd-intel-optane-nand/)

* 2020 winner: Optane 900p 28GB

##### Sample creating ZIL log

```bash
$ sudo zpool add hddpool log /dev/disk/by-id/ata-DP-CT050M4SSC2_000000001207032EBBDB

$ sudo zpool iostat hddpool -v
                                                  capacity     operations     bandwidth 
pool                                            alloc   free   read  write   read  write
----------------------------------------------  -----  -----  -----  -----  -----  -----
hddpool                                          433G  1,39T      6    111  61,5K  83,2M
  mirror                                         433G  1,39T      6    111  61,5K  83,2M
    ata-Hitachi_HDS5C3020ALA632_ML4220F312ERTK      -      -      3     55  31,8K  41,6M
    ata-Hitachi_HDS5C3020ALA632_ML4220F31538VK      -      -      3     56  29,6K  41,6M
logs                                                -      -      -      -      -      -
  ata-DP-CT050M4SSC2_000000001207032EBBDB           0  59,5G      0      0     10  1,02K
----------------------------------------------  -----  -----  -----  -----  -----  -----
```

* Force sync always to pool log, this can lower a lot the performance, even if the log is a normal SSD

```bash
sudo zfs set sync=always hddpool
```

#### Clear arz zfs cache

```bash
sudo sh -c 'echo 3 > /proc/sys/vm/drop_caches'
```

### Upgrade zpool

1. `zpool scrub pvepool1`
2. `zpool status pvepool1`
3. Pull one disk
4. Insert new  disk
5. `zpool status pvepool1`
6. `dmesg`
7. `zpool replace pvepool1 /dev/disk/by-id/...`
8. `zpool scrub pvepool1`
9. `zpool status pvepool1`

Repeat the process for other disks, and then turn on autoexpand

```bash
zpool set autoexpand=on pvepool1
zpool online -e pvepool1 /dev/disk/by-id/...id1
zpool online -e pvepool1 /dev/disk/by-id/...id2
zpool online -e pvepool1 /dev/disk/by-id/...id3
zpool online -e pvepool1 /dev/disk/by-id/...id4
```

#### References

* [56TB Zpool upgrade](https://b3n.org/56tb-zpool-upgrade/)

## ZFS Filesystem or volumes (ZVOL)

### Create

```bash
zfs create tank/home
```

### Samples

* Create with default parameters

```bash
sudo zfs create hddpool/imagenes
```

* Create with compression enabled

```bash
sudo zfs create hddpool/vms -o compress=on
```

* Create and destroy a 64GB volume, compressed without encruyption
```
sudo zfs create rpool/vm-win10 -V 64G -o compress=on -o encryption=off
sudo zfs destroy rpool/vm-win10
```

### List Volumes

#### With space usage
```bash
zfs list -o space
```

```bash
NAME                                       AVAIL   USED  USEDSNAP  USEDDS  USEDREFRESERV  USEDCHILD
bpool                                      1,23G   530M        0B     96K             0B       530M
bpool/BOOT                                 1,23G   529M        0B     96K             0B       529M
bpool/BOOT/ubuntu_awq93l                   1,23G   529M     81,8M    447M             0B         0B
bpool/BOOT/ubuntu_awq93l@autozsys_7718mv       -    80K         -       -              -          -
bpool/BOOT/ubuntu_awq93l@autozsys_sslfo1       -    80K         -       -              -          -
bpool/BOOT/ubuntu_awq93l@autozsys_4idbos       -    80K         -       -              -          -
bpool/BOOT/ubuntu_awq93l@autozsys_6x3nsz       -    72K         -       -              -          -
bpool/BOOT/ubuntu_awq93l@autozsys_6bkcck       -     0B         -       -              -          -
bpool/BOOT/ubuntu_awq93l@autozsys_wafxbe       -     0B         -       -              -          -
(...)
rpool                                       281G   164G        0B    192K             0B       164G
rpool/ROOT                                  281G  49,1G        0B    192K             0B      49,1G
rpool/ROOT/ubuntu_awq93l                    281G  49,1G     2,58G   11,2G             0B      35,3G
rpool/ROOT/ubuntu_awq93l/srv                281G   272K       80K    192K             0B         0B
(...)
```

## Snapshots

### Tools

#### Ubuntu `zfs-auto-snapshot`

```
$ apt-cache show zfs-auto-snapshot
Package: zfs-auto-snapshot
Architecture: all
Version: 1.2.4-2
Priority: extra
Section: multiverse/utils
Origin: Ubuntu
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Original-Maintainer: Jonathan Carter <jcc@debian.org>
Bugs: https://bugs.launchpad.net/ubuntu/+filebug
Installed-Size: 41
Depends: cron, zfsutils-linux
Filename: pool/multiverse/z/zfs-auto-snapshot/zfs-auto-snapshot_1.2.4-2_all.deb
Size: 8652
MD5sum: 97ae5b7f86d15c41103e5874b2348699
SHA1: e40530df79e5d4758ea19e34759c10d6f7ac2c95
SHA256: 2fb1271116627b687e85ef40cc32a772b39c5e82ca5f9a6e687e92e97b67cae7
Homepage: https://github.com/zfsonlinux/zfs-auto-snapshot
Description-en: ZFS automatic snapshot service
 Automatically create, rotate, and destroy periodic ZFS snapshots. This is
 the utility that creates the @zfs-auto-snap_frequent, @zfs-auto-snap_hourly,
 @zfs-auto-snap_daily, @zfs-auto-snap_weekly, and @zfs-auto-snap_monthly
 snapshots if it is installed.
 .
 This program is a posixly correct bourne shell script. It depends only on
 the zfs utilities and cron, and can run in the dash shell.
Description-md5: 50b5e87f01f77e852b84260e57dc2473
```

##### Install

```
apt install zfs-auto-snapshot
```

### List snapshots (standard)

```bash
zfs list -t snapshot
```

```bash
NAME                                                USED  AVAIL     REFER  MOUNTPOINT
bpool/BOOT/ubuntu_awq93l@autozsys_7718mv             80K      -      355M  -
bpool/BOOT/ubuntu_awq93l@autozsys_sslfo1             80K      -      355M  -
bpool/BOOT/ubuntu_awq93l@autozsys_4idbos             80K      -      355M  -
(...)
rpool/ROOT/ubuntu_awq93l/srv@autozsys_7718mv         80K      -      192K  -
rpool/ROOT/ubuntu_awq93l/srv@autozsys_sslfo1          0B      -      192K  -
rpool/ROOT/ubuntu_awq93l/srv@autozsys_4idbos          0B      -      192K  -
(...)
rpool/ROOT/ubuntu_awq93l/usr@autozsys_7718mv          0B      -      192K  -
rpool/ROOT/ubuntu_awq93l/usr@autozsys_sslfo1          0B      -      192K  -
rpool/ROOT/ubuntu_awq93l/usr@autozsys_4idbos                  
(...)
rpool/ROOT/ubuntu_awq93l/var/log@autozsys_wafxbe   1,12M      -      189M  -
rpool/ROOT/ubuntu_awq93l/var/mail@autozsys_7718mv     0B      -      192K  -
rpool/ROOT/ubuntu_awq93l/var/mail@autozsys_sslfo1     0B      -      192K  -
rpool/ROOT/ubuntu_awq93l/var/mail@autozsys_4idbos     0B      -      192K  -
rpool/ROOT/ubuntu_awq93l/var/mail@autozsys_6x3nsz     0B      -      192K  -
rpool/ROOT/ubuntu_awq93l/var/mail@autozsys_6bkcck     0B      -      192K  -
rpool/ROOT/ubuntu_awq93l/var/mail@autozsys_wafxbe     0B      -      192K  -
(...)
rpool/ROOT/ubuntu_awq93l/var/snap@autozsys_7718mv     0B      -      192K  -
rpool/ROOT/ubuntu_awq93l/var/snap@autozsys_sslfo1     0B      -      192K  -
rpool/ROOT/ubuntu_awq93l/var/snap@autozsys_4idbos     0B      -      192K  -
(...)
rpool/ROOT/ubuntu_awq93l/var/spool@autozsys_7718mv   92K      -      276K  -
rpool/ROOT/ubuntu_awq93l/var/spool@autozsys_sslfo1   84K      -      276K  -
rpool/ROOT/ubuntu_awq93l/var/spool@autozsys_4idbos   84K      -      276K  -
(...)
rpool/ROOT/ubuntu_awq93l/var/www@autozsys_7718mv      0B      -      192K  -
rpool/ROOT/ubuntu_awq93l/var/www@autozsys_sslfo1      0B      -      192K  -
(...)
```

### List snapshots (detailed)
```bash
zfs list -t snapshot -o name,used,referenced,creation -s creation
```

```bash
NAME                                                                                                   USED     REFER  CREATION
rpool/var/lib/docker/3e29124aabd26aba9a987fa9baf73a49d20fd093693c6e1702892592c3a37df0@823949492          8K     19,1M  s??b may 22 14:24 2021
rpool/var/lib/docker/ab44a150516267a349d9ec51eba4d5a4c62402e2984d1f976f9185f82457593d@346481945          0B     5,82M  s??b may 22 14:24 2021
rpool/var/lib/docker/c67ae3e336110d75a53dc55cd0d6ac9bfc9eb10c62bfb1acda5e82cec9d4f503@974426951          8K     19,1M  s??b may 22 14:24 2021
rpool/var/lib/docker/67bf0b89ec0abf78304fff424b3a5d839356e309a4ebc900991aa05082aae4e5-init@503730378     8K     74,4M  s??b may 22 17:44 2021
rpool/var/lib/docker/b88682c070dc9cb7fa79451620d9adb3281995dd1a547701f7e0ddffb5c71864@344154902          8K     74,4M  s??b may 22 17:44 2021
rpool/var/lib/docker/8b32028a0333569ade96213ad354021f246aad5577d6191fb907b597aebf8c6f@926970671          8K     28,7M  s??b may 22 17:54 2021
rpool/var/lib/docker/bc80234cff605bb8bd3959e7c707359286692afda5de90d2f02d19032d20cefa@63021450           8K     5,83M  s??b may 22 17:54 2021
rpool/var/lib/docker/df2e8b21e07f2b5f166477c3f965649c49042cc7c05ae5b5264963cb678edb9b@769644899          8K     28,7M  s??b may 22 17:54 2021
rpool/var/lib/docker/f13856143025fcd4b664d9df7e13ae7e0f4b6d5ad2b3127bb4121a857da5c562@259540872          8K     7,26M  s??b may 22 17:54 2021
rpool/var/lib/docker/b83cf8fb8f07d0b27025c294d6ac6962b82836c441620d489cc4dad1c5d5ccf2@376293604       2,44M     35,8M  s??b may 22 17:54 2021
```

### Delete snapshots

#### Samples

* Delete last snapshot:

```bash
zfs list -H -t snapshot -o name -S creation -r bpool | tail -5 | xargs -n 1 zfs destroy
```

#### References

* [ZFS delete oldest n snapshots](https://techblog.jeppson.org/2018/03/zfs-delete-oldest-n-snapshots/)

## List pools

### User data pool
```bash
zfs list -r -t snapshot -o name,used,referenced,creation -s creation rpool/USERDATA
```

### Boot pool
```bash
zfs list -r -t snapshot -o name,used,referenced,creation -s creation bpool/BOOT
```

### List ZFS System Root space
```bash
zfs list -ro space rpool/ROOT
```

### List ZFS bpool BOOT space                                                                                                                                      
```bash
zfs list -ro space bpool/BOOT
```

### List ZFS USERDATA space                                                                                                                                        
```bash
zfs list -ro space rpool/USERDATA
```

### List ZFS /var/lib/docker space
```bash
zfs list -ro space rpool/var/lib/docker
```

## Get read and write stats from pool

```bash
zpool iostat {{ pool_name }} {{ refresh_time_in_seconds }}
```

## States

### Remove user state


```bash
$ zsysctl show --full |grep r48a3r
$ zsysctl state remove r48a3r
rpool/USERDATA/sdelrio_0y06wn@autozsys_r48a3r will be detached from system state rpool/ROOT/ubuntu_awq93l@autozsys_r48a3r
```

### Remove system wide state

Whole system removing adding `--system` (`/boot` included)

```bash
$ sudo zsysctl state remove r48a3r --system
```

### User State without any dependency but linked to a system state
```bash
$ zsysctl state remove rpool/USERDATA/didrocks_e2jj0s@autozsys_iynia9
rpool/USERDATA/didrocks_e2jj0s@autozsys_iynia9 will be detached from system state rpool/ROOT/ubuntu_qiq15o@autozsys_iynia9

Would you like to proceed [y/N]? y
```

## Encryption

### Create and load-key

Sample, create a vol witih compression, encription, and dedup.

```
zpool create -o ashift=12 -m /mnt/zfs zfs raidz sdb sdc sde
zfs set compression=lz4 zfs
zfs set xattr=sa zfs
zfs set atime=off zfs
zfs set dedup=on zfs
zfs set recordsize=1M zfs
zfs create -o encryption=aes-256-gcm -o keyformat=passphrase -o keylocation=file:///boot/config/zfs.key zfs/homes
```

```
zfs load-key zfs/homes
```

### Key status

```
zfs get keystatus <dataset>
```

### Changing wrapping key

Change a wrapping key for a dataset as long as current wrapping key is loaded (`zfs get keystatus <dataset>`)

```bash
zfs key -c <dataset>
```

### Change actual data encryption key

```bash
zfs key -K <dataset>
```

* [Changing passphrase on encrypted zpool](https://www.reddit.com/r/zfs/comments/7mm237/changing_passphrase_on_encrypted_zpool/)

## Sharing ZFS Datasets

### NFS

1. Install `nfs-kernel-server`

```bash
sudo apt-get install -y nfs-kernel-server
```

2. Enable `sharenfs` on the dataset

```bash
zfs set sharenfs=on pool-name/dataset-name
```

3. Now you can mount in your NFS client

```bash
mount -t nfs \
zfs.host.com:/pool-name/dataset-name \
/path/to/local/mount
```

* [Sharing ZFS Dataset via NFS](https://blog.programster.org/sharing-zfs-datasets-via-nfs)

## UI

### Cockpit

```bash
apt install cockpit
```

## Backup

### Pyznap

ZFS snapshot tool written in python

`pyznap` is a ZFS snapshot management tool. It automatically takes and deletes snapshots and can send them to different backup locations. You can specify a policy for a given filesystem in the `pyznap.conf` file and then use cron to let it run regularly.

* [GitHub](https://github.com/yboetz/pyznap)

### ZFSbackup-go

Backup ZFS snapshots to cloud storage such as Google, Amazon, Azure, etc. Built with the enterprise in mind.

* [GitHub](https://github.com/someone1/zfsbackup-go)

### Zrepl

One-stop ZFS backup & replication solution

* [GitHub](https://github.com/zrepl/zrepl)
* [Doc](https://zrepl.github.io0)

## Resources

* [ZFS-Cheatsheet](https://blog.programster.org/zfs-cheatsheet)
* [Debian Wiki](https://wiki.debian.org/ZFS#Provisioning_file_systems_or_volume)
  * [Provision filesystem or volume (ZVOL)](https://wiki.debian.org/ZFS#Provisioning_file_systems_or_volume)
* [Configure ZFS on Ubuntu 20.04](https://linuxconfig.org/configuring-zfs-on-ubuntu-20-04)
* [2020: Video - Running Ubuntu 20.04 on ZFS](https://www.youtube.com/watch?v=l-iu-cutkyQ)
* [Ubuntu 20.04 Root on ZFS](https://openzfs.github.io/openzfs-docs/Getting%20Started/Ubuntu/Ubuntu%2020.04%20Root%20on%20ZFS.html)
* [Encrypting ZFS on Ubuntu 20.04](https://linsomniac.gitlab.io/post/2020-04-09-ubuntu-2004-encrypted-zfs/)
* [Zsys](zsys)
* [ZFS on linux ](http://zfsonlinux.org/)
* [FreeBSD ZFS guru](http://zfsguru.com/)
* [ZFS Plugin for Unraid](https://forums.unraid.net/topic/41333-zfs-plugin-for-unraid/)
* [NAS with ZFS on RAspberry Pi 4](https://sysops.tv/?page_id=28)

