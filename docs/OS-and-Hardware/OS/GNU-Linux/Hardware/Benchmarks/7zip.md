---
title: 7-Zip
date: 20211106
author: sdelrio
tags:
- 7zip
- benchmark
- cpu
---

# 7-Zip benchmark

* 7-Zip Benchmark command:
```
7z b
```

* Result:
```
7-Zip [64] 16.02 : Copyright (c) 1999-2016 Igor Pavlov : 2016-05-21
p7zip Version 16.02 (locale=es_ES.UTF-8,Utf16=on,HugeFiles=on,64 bits,24 CPUs AMD Ryzen 9 3900 12-Core Processor              (870F10),ASM,AES-NI)

AMD Ryzen 9 3900 12-Core Processor
CPU Freq: - - - - - - - - -

RAM size:   64295 MB,  # CPU hardware threads:  24
RAM usage:   5295 MB,  # Benchmark threads:     24

                       Compressing  |                  Decompressing
Dict     Speed Usage    R/U Rating  |      Speed Usage    R/U Rating
         KiB/s     %   MIPS   MIPS  |      KiB/s     %   MIPS   MIPS

22:      77906  2272   3335  75788  |     945963  2320   3477  80665
23:      70298  2209   3242  71626  |     930741  2317   3476  80533
24:      67073  2205   3270  72117  |     923588  2352   3447  81066
25:      64262  2205   3327  73373  |     898848  2344   3412  79996
----------------------------------  | ------------------------------
Avr:            2223   3294  73226  |             2333   3453  80565
Tot:            2278   3373  76895
```
## References

* [7-zip homepage](https://www.7-zip.org/)

