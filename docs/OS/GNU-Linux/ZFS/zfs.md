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

:::cautionWIP: Work in progress
:::

[ZFS](https://en.wikipedia.org/wiki/ZFS) combines a file system with a volume manager.

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

## List Volumes

### With space usage
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

## List snapshots

### Standard

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

### Detailed
```bash
zfs list -t snapshot -o name,used,referenced,creation -s creation
```

```bash
NAME                                                                                                   USED     REFER  CREATION
rpool/var/lib/docker/3e29124aabd26aba9a987fa9baf73a49d20fd093693c6e1702892592c3a37df0@823949492          8K     19,1M  sáb may 22 14:24 2021
rpool/var/lib/docker/ab44a150516267a349d9ec51eba4d5a4c62402e2984d1f976f9185f82457593d@346481945          0B     5,82M  sáb may 22 14:24 2021
rpool/var/lib/docker/c67ae3e336110d75a53dc55cd0d6ac9bfc9eb10c62bfb1acda5e82cec9d4f503@974426951          8K     19,1M  sáb may 22 14:24 2021
rpool/var/lib/docker/67bf0b89ec0abf78304fff424b3a5d839356e309a4ebc900991aa05082aae4e5-init@503730378     8K     74,4M  sáb may 22 17:44 2021
rpool/var/lib/docker/b88682c070dc9cb7fa79451620d9adb3281995dd1a547701f7e0ddffb5c71864@344154902          8K     74,4M  sáb may 22 17:44 2021
rpool/var/lib/docker/8b32028a0333569ade96213ad354021f246aad5577d6191fb907b597aebf8c6f@926970671          8K     28,7M  sáb may 22 17:54 2021
rpool/var/lib/docker/bc80234cff605bb8bd3959e7c707359286692afda5de90d2f02d19032d20cefa@63021450           8K     5,83M  sáb may 22 17:54 2021
rpool/var/lib/docker/df2e8b21e07f2b5f166477c3f965649c49042cc7c05ae5b5264963cb678edb9b@769644899          8K     28,7M  sáb may 22 17:54 2021
rpool/var/lib/docker/f13856143025fcd4b664d9df7e13ae7e0f4b6d5ad2b3127bb4121a857da5c562@259540872          8K     7,26M  sáb may 22 17:54 2021
rpool/var/lib/docker/b83cf8fb8f07d0b27025c294d6ac6962b82836c441620d489cc4dad1c5d5ccf2@376293604       2,44M     35,8M  sáb may 22 17:54 2021
```


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

## Resources

### Cheatsheets

* [ZFS-Cheatsheet](https://blog.programster.org/zfs-cheatsheet)

### Ubuntu / Mint

* [Zsys](zsys)

