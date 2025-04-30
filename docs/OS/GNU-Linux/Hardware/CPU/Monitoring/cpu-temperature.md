---
title: Temperature
date: 20211106
author: sdelrio
tags:
- temperature
- benchmark
- cpu
---

# Check CPU temperature

## Requirements

* `apt install lm-sensors`
* `sudo sensors-detect`

## Sensors

```bash
> sensors
iwlwifi_1-virtual-0
Adapter: Virtual device
temp1:            N/A  

k10temp-pci-00c3
Adapter: PCI adapter
Tdie:         +45.5°C  (high = +70.0°C)
Tctl:         +45.5°C  

amdgpu-pci-0900
Adapter: PCI adapter
vddgfx:      1000.00 mV 
fan1:        1182 RPM  (min =    0 RPM, max = 2900 RPM)
edge:         +36.0°C  (crit = +94.0°C, hyst = -273.1°C)
power1:       25.04 W  (cap = 110.00 W)
```

:::warningRyzen 
Only newer kernels like [Linux 5.15](/docs/OS/GNU-Linux/Kernel/linux-5.15) will allow to get Zen 3 APU temperature.
:::

## Gnome extensions

* [Freon](https://extensions.gnome.org/extension/1180/freon/)
* [Sensors](https://extensions.gnome.org/extension/82/cpu-temperature-indicator/)

## References

* [https://www.cyberciti.biz/faq/how-to-check-cpu-temperature-on-ubuntu-linux/](https://www.cyberciti.biz/faq/how-to-check-cpu-temperature-on-ubuntu-linux/)

