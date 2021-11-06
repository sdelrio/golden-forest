---
title: WSL install
author: sdelrio
date: 20211106
tags:
- powershell
- wsl
- windows
---


# Install Linux Subsystem with Powershell

## Enable WSL2

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestar
wsl --set-default-version 2
```

## Ubuntu 16.04

```powershell
Invoke-WebRequest -Uri https://aka.ms/wsl-ubuntu-1604 -OutFile ~/Ubuntu.zip -UseBasicParsing
Expand-Archive ~/Ubuntu.zip ~/Ubuntu
ubuntu.exe
```

## References

* <https://docs.microsoft.com/en-us/windows/wsl/install-on-server>
* <https://docs.microsoft.com/en-us/windows/wsl/install-manual>

