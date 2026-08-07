---
title: "Using Virtual Desktop with a Link Cable on Quest 3"
description: "A guide to using Virtual Desktop over a wired Link Cable connection for stable, low-latency PCVR gaming on Meta Quest 3."
tags:
  - quest 3
  - virtual desktop
  - link cable
  - pcvr
sidebar_label: "Virtual Desktop Link"
last_update:
  date: 2026-08-07
---

import Accordion from '@site/src/components/Accordion/Accordion';
import AccordionGroup from '@site/src/components/Accordion/AccordionGroup';
import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';

# Using Virtual Desktop with a Link Cable on Quest 3

Virtual Desktop is widely known for wireless PCVR streaming, but it also supports a **wired Link Cable connection**. This guide covers why you might want this setup, which cable to get, and how to configure it.

:::warning Beta Feature
Virtual Desktop's Link Cable support is currently in **beta** (as of August 2026). To access it, you need to subscribe to the beta channel in the Meta Quest app:

1. Open the **Meta Quest app** on your phone.
2. Go to **Devices** and select your Quest 3.
3. Scroll to **App Library** and find **Virtual Desktop**.
4. Tap the three dots and select **Version**.
5. Enable **Beta Channel**.

:::

## Why Use Link Cable with Virtual Desktop?

A wired connection combines Virtual Desktop's excellent encoding quality with the stability of a direct USB link:

- **Zero Wi-Fi interference** - no congestion from other devices on your network
- **Lower latency** - direct USB connection eliminates network overhead
- **Stable bitrate** - no fluctuations caused by Wi-Fi signal strength
- **Simultaneous charging** - play without draining your headset battery

:::info
Virtual Desktop over Link Cable uses the same high-quality encoding pipeline as its wireless mode, which many users prefer over Meta's native Air Link.
:::

## Recommended Cable: AMVR Link Cable with Charging

The AMVR Link Cable supports both **data transfer and charging simultaneously** - something most third-party cables sacrifice.

| Feature | Details |
| :--- | :--- |
| **Length** | 5m (16.4ft) |
| **Connector** | USB-C to USB-C (with USB-A adapter included) |
| **Charging** | Yes - charges while playing |
| **Data** | USB 3.0 high-speed |
| **Build** | Braided nylon, right-angle connector |

**Where to buy:**

- [Amazon UK - AMVR Link Cable with Charging](https://www.amazon.co.uk/AMVR-Charging-Compatible-Accessories-High-Speed/dp/B0FY1PLGMK)
- [AMVR Official Shop](https://www.amvrshop.com/es/products/link-cable-with-charging-compatibl-braided-cable-with-adapter)

:::tip
The right-angle connector on the headset end reduces strain on the Quest 3's USB-C port during active gameplay.
:::

## Setup Guide

### Prerequisites

- Meta Quest 3 headset
- PC with a compatible GPU (NVIDIA GTX 1060 / AMD RX 500 or newer)
- Virtual Desktop Streamer app installed on your PC
- A USB 3.0 (or faster) port on your PC
- A Link Cable (AMVR or similar)

<Steps>
<Step title="Install Virtual Desktop Streamer" interactive>

Download and install the **Virtual Desktop Streamer** app on your PC from the [official website](https://www.vrdesktop.net/). Log in with your Meta account.

</Step>
<Step title="Connect the Link Cable" interactive>

1. Plug the **USB-C end** into your Quest 3 headset.
2. Plug the **other end** into a **USB 3.0 port** (blue port) on your PC.
3. If prompted inside the headset, **allow data access**.

</Step>
<Step title="Launch Virtual Desktop" interactive>

1. Put on your Quest 3 and open the **Virtual Desktop** app from your library.
2. The app should automatically detect your PC via the wired connection.
3. You should see your PC desktop appear in the headset.

</Step>
<Step title="Verify Connection Type" interactive>

In the Virtual Desktop overlay (press the menu button on your controller):

1. Open **Settings**.
2. Check the **Connection** indicator - it should show a **wired** or **USB** connection.
3. If it shows Wi-Fi, disconnect the cable and reconnect, then relaunch the app.

</Step>
<Step title="Optimize Settings" interactive>

For the best wired experience, adjust these settings in the Virtual Desktop overlay:

| Setting | Recommended Value |
| :--- | :--- |
| **Bitrate** | 150-200 Mbps (higher is stable on wired) |
| **Codec** | HEVC or HEVC 10-bit |
| **Frame Rate** | Match your game's target (72/80/90/120 Hz) |
| **Sharpening** | 75-100% |

:::tip
Since you're on a wired connection, you can push the bitrate higher than wireless mode without stability issues. Start at 200 Mbps and increase if your GPU handles it.
:::

</Step>
</Steps>

## Troubleshooting

<AccordionGroup>
<Accordion title="Virtual Desktop doesn't detect the wired connection" icon="usb-port">
Make sure you're using a **USB 3.0 port** (usually blue). USB 2.0 ports don't provide enough bandwidth. Also, try a different port - some motherboards have USB controller quirks.
</Accordion>

<Accordion title="Charging is very slow or not working" icon="battery-charging">
The AMVR cable charges at a reduced rate while transmitting data. This is normal - it maintains battery level rather than fast-charging. If it's losing battery, try a port with higher power output (USB-C PD ports work best).
</Accordion>

<Accordion title="Stuttering or frame drops" icon="speedometer">
Lower the bitrate to 150 Mbps and make sure your GPU drivers are up to date. Also check that no other USB devices are consuming bandwidth on the same controller.
</Accordion>
</AccordionGroup>

## References

- [Virtual Desktop Official Site](https://www.vrdesktop.net/)
- [Virtual Desktop Setup Guide - YouTube](https://youtu.be/GWBmU-AV3PE?si=qKTQNbjf1MA-g6qu)
- [Virtual Desktop Link Cable Tutorial - YouTube](https://www.youtube.com/watch?v=_I35dS07dgA)
- [AMVR Link Cable with Charging - Amazon UK](https://www.amazon.co.uk/AMVR-Charging-Compatible-Accessories-High-Speed/dp/B0FY1PLGMK)
- [AMVR Official Shop](https://www.amvrshop.com/es/products/link-cable-with-charging-compatibl-braided-cable-with-adapter)
