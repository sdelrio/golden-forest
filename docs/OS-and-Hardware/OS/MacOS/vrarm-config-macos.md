---
title: "VRAM Config"
description: "Configure GPU VRAM allocation limits on Apple Silicon Macs"
tags:
  - macOS
  - GPU
  - VRAM
  - performance
---

# 🛠 macOS VRAM Configuration Guide

## ⚠️ Important Warnings

:::warning
- **System Stability:** Setting the VRAM limit too high (near 100%) can cause system lag, crashes, or "Red" memory pressure.
- **Unified Memory:** This does not "add" RAM; it simply changes how much of your existing RAM the GPU is allowed to "wire" (lock) for its own use.
- **Restart Required:** You must restart your application (e.g., LM Studio) after running these commands to see the changes.
:::

## 1. Check Current VRAM Limit

Open your **Terminal** and run this command to see the current limit (a result of `0` means the system is using the default ~75% allocation).

```bash title="Terminal"
sysctl iogpu.wired_limit_mb
```

## 2. Set New VRAM Limit

Use the following command to set a custom limit. You must enter your admin password. The value is in **Megabytes (MB)**.

### Command Template

```bash title="Terminal"
sudo sysctl -w iogpu.wired_limit_mb=VALUE
```

### Recommended Values (Powers of 2)

|Total Mac RAM|Recommended "Safe" Limit|Value to Type|
|---|---|---|
|**8 GB**|~6 GB|`6144`|
|**16 GB**|~14 GB (Leaves 2GB for OS)|`14336`|
|**16 GB**|~12 GB (More stable)|`12288`|
|**32 GB+**|Custom (Total RAM - 4096)|_(Calculation)_|

### Example for 16GB Mac (Setting to 14GB)

```bash title="Terminal"
sudo sysctl -w iogpu.wired_limit_mb=14336
```

### Example for 64GB Mac (Setting to 61GB)

```bash title="Terminal"
sudo sysctl -w iogpu.wired_limit_mb=$(echo "64*1024-4096" | bc -l)
```

## 3. Verify the Change

Run the check command again to ensure the value was accepted:

```bash title="Terminal"
sysctl iogpu.wired_limit_mb
```

## 4. Reset to Default

If your system becomes unstable, reset the limit to the system default by setting it back to `0`:

```bash title="Terminal"
sudo sysctl -w iogpu.wired_limit_mb=0
```

## 📈 How to Monitor Results

1. **Activity Monitor:** Open the **Memory** tab. Watch the "Memory Pressure" graph. If it turns **Red**, your limit is too high for the current workload.

2. **LM Studio:** Go to **Settings > Hardware**. You will see the "VRAM" value update to reflect your new manual limit (after a restart of the app).

## Resources

**Video Source:** [Your Mac Has Hidden VRAM… Here's How to Unlock It](https://www.youtube.com/watch?v=nxCtScEImew)
