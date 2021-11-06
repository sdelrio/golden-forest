---
title: Robocopy
author: sdelrio
date: 20211106
tags:
- robocopy
- windows
- rsync
---

# Robocopy

When you need to transfer a lot of files, even over the network, use Robocopy on Windows 10 to copy files very fast. It could be the `rsync` equivalent on windows.

## Parameters

* `/S` Copy subdirectories, but not empty ones.
* `/E` Copy Subdirectories, including empty ones.
* `/Z` Copy files in restartable mode.
* `/ZB` Uses restartable mode. If access is denied, use backup mode.
* `/R:5` Retry 5 times (you can specify a different number, the default is 1 million).
* `/W:5` Wait 5 seconds before retrying (you can specify a different number, the default is 30 seconds).
* `/TBD` Wait for share names To Be Defined (retry error 67).
* `/NP` No Progress – don’t display percentage copied.
* `/V` Produce verbose output, showing skipped files.
* `/MT:16` Do multithreaded copies with n threads (default is 8).


Here's some samples on how to do it. 

## Samples

### Copy from drive to drive

```bat
robocopy "D:\MY-FOLDER" "E:\BACKUP-FOLDER" /E /V /XO /NP /R:10 /W:30 /purge /MT:16
```

## References

* <https://pureinfotech.com/robocopy-transfer-files-fast-network-windows-10/>

