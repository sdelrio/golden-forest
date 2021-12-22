---
title: ZSysctl
date: 20211106
author: sdelrio
tags:
 - zfs
 - zsys
---


# Zsys

[ZSys](https://github.com/ubuntu/zsys) is a daemon and a client for zfs systemtargeting and enhanced ZOL experience. It was included in Ubuntu 20 and Linux Mint 20.

## Features

* Every time you do an apt-get install the daemon will snapshot your OS pool.

* At OS boot time you can select a previous snapshot.

## Sample ZSys config

* `/etc/zsys.conf`

```yaml
history:
  # https://didrocks.fr/2020/06/04/zfs-focus-on-ubuntu-20.04-lts-zsys-state-collection/
  # Keep at least n history entry per unit of time if enough of them are present
  # The order condition the bucket start and end dates (from most recent to oldest)
  gcstartafter: 1
  keeplast: 10 # Minimum number of recent states to keep.
  #    - name:             Abitrary name of the bucket
  #      buckets:          Number of buckets over the interval
  #      bucketlength:     Length of each bucket in days
  #      samplesperbucket: Number of datasets to keep in each bucket
  gcrules:
    - name: PreviousDay
      buckets: 1
      bucketlength: 1
      samplesperbucket: 3
    - name: PreviousWeek
      buckets: 5
      bucketlength: 1
      samplesperbucket: 1
    - name: PreviousMonth
      buckets: 2
      bucketlength: 14
      samplesperbucket: 1
general:
  # Minimal free space required before taking a snapshot
  minfreepoolspace: 18
  # Daemon timeout in seconds
  timeout: 60
```

## Garbage collector

### Call GC

Call zysysd garbage collection without waiting daily INFO output

```bash
zsysctl service gc --all -v
```

To see with extra debug info add `-vv`

```bash
zsysctl service gc --all -vv
```

### Status of the GC

```bash
systemctl status zsys-gc
```

### GC timers

GC collecting timers

```bash
systemctl list-timers zsys-gc
```

GC collecting timers loaded but inactive

```bash
systemctl list-timers zsys-gc --all
```

## Refresh

* Re-Scan any ZFS datasheet

```bash
zsysctl service refresh
```

## Reload

* Reload `zsysd` daemon

```bash
zsysctl service reload
```

## Remove state

### User state

```bash
$ zsysctl show --full |grep r48a3r
$ zsysctl state remove r48a3r
rpool/USERDATA/sdelrio_0y06wn@autozsys_r48a3r will be detached from system state rpool/ROOT/ubuntu_awq93l@autozsys_r48a3r
```

### System state

```bash
$ sudo zsysctl state remove r48a3r
```

### Whole system 

adding `--system` (`/boot` included)

```bash
$ sudo zsysctl state remove r48a3r --system
```

### User State without any dependency but linked to a system state

```bash
$ zsysctl state remove rpool/USERDATA/didrocks_e2jj0s@autozsys_iynia9
rpool/USERDATA/didrocks_e2jj0s@autozsys_iynia9 will be detached from system state rpool/ROOT/ubuntu_qiq15o@autozsys_iynia9

Would you like to proceed [y/N]? y
```


## References

* <https://github.com/ubuntu/zsys>
* <https://didrocks.fr/2020/06/04/zfs-focus-on-ubuntu-20.04-lts-zsys-state-collection/>
 
