---
title: PXE boot
date: 20230722
author: sdelrio
tags:
 - pxe
 - netboot.xyz
 - iVentoy
 - MaaS
 - Ironic
---

# PXE

## DIY Manual way

Is pretty hard doing the manual way, the tests are pretty slow, when some letter is missing in the config files most of the case there is no error. So an already existing tool is usually easy.

Basically you need a:

* DHCP server with option 66.
* tftp serve to serve the PXE files.
* http server to serve the images.
* operative system configuration file depending on your OS option.

Sample with ansible:

* https://github.com/sdelrio/home-pxe

## PXE Tools

## Simple solutions

### [iVentoy](https://www.iventoy.com/en/inºdex.html)

* [Simple to use](https://www.iventoy.com/en/doc_start.html)
* Cross platform Windows and Linux. 
* Boot menu for Legacy & UEFI
* Solve the driver missing during Linux installation.


### [Netboot.xyz](https://netboot.xyz/)

* Simple to use, based on iPXE project
* [Self Host](https://netboot.xyz/docs/selfhosting)

## Enterprise grade solutions

### [MaaS](https://maas.io/)

Metal as a Service

### [OpenStack Ironic](https://ironicbaremetal.org/)

Bare Metal as a Service

  * https://clouddocs.web.cern.ch/advanced_topics/pxe_booting_vms.html

