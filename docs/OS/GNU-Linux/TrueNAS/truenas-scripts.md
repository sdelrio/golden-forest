---
title: TrueNAS SCALE Install
date: 20230901
author: sdelrio
tags:
 - nas
---

# TrueNAS SCALE scripts

## Weekly trim Cron for nvme/ssd

Use it on a "quiet" period (3am Sunday, first sunday of month, ...), when deleting large data. Usually takes less than a minute, and is most of the time is just a couple of seconds.

```
zpool trim ssdpool
```

### References

* <https://www.truenas.com/community/threads/auto-trim-for-nvme-pool.99162/>

## UTF-8 Encode on CLI

```
export LC_ALL=C.UTF-8
```

* <https://www.truenas.com/community/threads/utf-8-encode.81351/page-2>


## export InfluxDB with credentials

Install an app with `carbon-relay-ng` image.

* <https://github.com/grafana/carbon-relay-ng/tree/master>

Reports Config, put remoe graphite server hostname to the `carbon-relay-ng` URL.

