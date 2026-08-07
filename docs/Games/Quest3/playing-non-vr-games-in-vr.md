---
title: "Playing Non-VR Games in VR with Quest 3 Mods"
description: "A guide to community-made VR mods that let you play flat-screen games in full VR on Meta Quest 3, featuring Cyberpunk 2077 VR Port and Red Dead Redemption 2 RealVR."
tags:
  - quest 3
  - vr mods
  - cyberpunk 2077
  - red dead redemption 2
  - pcvr
sidebar_label: "Non-VR Game Mods"
last_update:
  date: 2026-08-07
---

import Accordion from '@site/src/components/Accordion/Accordion';
import AccordionGroup from '@site/src/components/Accordion/AccordionGroup';
import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';

# Playing Non-VR Games in VR with Quest 3 Mods

Community modders have found ways to inject full 6-DoF VR rendering into games that were never designed for it. These mods go far beyond simple "fake 3D" wrappers - they add real stereo rendering, motion controller support, and hand-to-holster interaction systems directly into flat-screen game engines.

With a PC and a Quest 3, you can play titles like Cyberpunk 2077 and Red Dead Redemption 2 as if they were native VR games. This article covers how it works, how to connect, and two of the most polished mods available.

## How to Connect: Streaming PCVR to Quest 3

You need a way to stream the PC-rendered VR output to your Quest 3 headset. The main options are:

| Method | Connection | Latency | Quality | Cost |
| :--- | :--- | :--- | :--- | :--- |
| **Air Link** | Wi-Fi 6/6E | Low-Medium | Good | Free (built-in) |
| **Link Cable** | USB-C | Lowest | Best | ~$20-40 for cable |
| **Virtual Desktop** | Wi-Fi or USB | Low | Excellent | ~$20 app |
| **Steam Link** | Wi-Fi 6/6E | Low-Medium | Good | Free (built-in) |
| **ALVR** | Wi-Fi | Medium-High | Variable | Free (open-source) |

- **Air Link** - Meta's built-in wireless solution. Enable under **System > Quest Link** on the headset, then pair from the Quest Link app on your PC. No extra software required.
- **Link Cable** - Any USB 3.0+ cable works. Right-angle connectors reduce strain on the headset port. Gives the lowest latency and most stable connection.
- **Virtual Desktop** - Third-party app with both wireless and wired modes. Many users prefer its encoding quality over Air Link. See the [Virtual Desktop Link Cable guide](/docs/Games/Quest3/virtual-desktop-link-cable) for wired setup.
- **Steam Link** - Valve's official wireless streaming for SteamVR. Built into the Quest 3 app store. Install it from the Meta store, launch SteamVR from your PC, and it connects automatically. Best choice if your games are all on Steam.
- **ALVR** - Open-source wireless streaming. Free and highly customizable, but setup is more technical and it is the least reliable option of the five. Use only if you want to avoid both Meta and Valve ecosystems.

:::tip
For VR mods, a **Link Cable** or **Virtual Desktop over USB** gives the most stable experience. These mods are demanding on GPU and network, so eliminating Wi-Fi variables helps troubleshooting.
:::

## Cyberpunk 2077 VR Port

The [CyberpunkVR Port](https://github.com/dariulone/cyberpunk-vr-port) by dariulone is an open-source RED4ext plugin that integrates OpenXR directly into the REDengine. Unlike older approaches that used optical-flow reprojection to fake stereo, this mod renders a **real second engine view** for each eye - a full render-to-texture camera on the player entity with its own position and projection.

### Key Features

- **Real stereo rendering** - not reprojection. The second eye is an actual engine view with its own frame graph, falling back to mono automatically during menus or loading screens.
- **Full-body VRIK** - complete shoulder-to-elbow-to-hand IK chain, arm-length calibration, leg IK, and real-life squat (the avatar lowers when you physically crouch).
- **Decoupled weapon aim** - bullets follow the real weapon muzzle direction, not the camera. Optional barrel dot that scales with scope zoom.
- **Collimated reflex sights** - the reticle stays on the bore instead of sliding across the glass when you look from the side.
- **VR motion melee** - real controller swings trigger the game's native melee attack along the blade with native damage, reaction, and stamina.
- **Hand-to-holster system** - reach a hand to a body zone and squeeze the grip to equip/unequip. Supports immersive mode (by visual holster location) or simple slot mode.
- **VR smoking** - cigarette and lighter as real props with captured finger grip, hands-free mouth anchor, and the game's own effects and audio.
- **VR HUD in both eyes** - the engine's HUD composite is ported shader-for-shader for the second eye and placed at a finite distance so icons fuse instead of doubling.

### Requirements

- Cyberpunk 2077 (PC, version 2.31)
- [RED4ext](https://www.nexusmods.com/cyberpunk2077/mods/2271)
- [Cyber Engine Tweaks](https://www.nexusmods.com/cyberpunk2077/mods/107)
- [redscript](https://www.nexusmods.com/cyberpunk2077/mods/2081)
- [ArchiveXL](https://www.nexusmods.com/cyberpunk2077/mods/7910)
- [TweakXL](https://www.nexusmods.com/cyberpunk2077/mods/9531)
- [Codeware 1.20 or newer](https://www.nexusmods.com/cyberpunk2077/mods/2081)
- [Visual Holsters (Automatic Clothes Swap)](https://www.nexusmods.com/cyberpunk2077/mods/10935)
- [Visible Bullets (Projectile Restoration)](https://www.nexusmods.com/cyberpunk2077/mods/10935)
- [Equipment-EX](https://www.nexusmods.com/cyberpunk2077/mods/10935)
- [Nova Optics](https://www.nexusmods.com/cyberpunk2077/mods/10935)

:::warning
Install RED4ext, CET, and redscript first. Learn how Visual Holsters and Equipment-EX work before installing - the hand-to-holster system reads them.
:::

### Installation

<Steps>
<Step title="Install Dependencies" interactive>

Install all required mods and **start the game once** before installing the VR port. Make sure everything works in flat-screen mode first.

</Step>
<Step title="Lower Graphics Settings" interactive>

In the game's graphics settings, set everything to **Low** and turn OFF the extras: Film Grain, Chromatic Aberration, Motion Blur, Lens Flare, Depth of Field, and Frame Generation. Set display mode to **borderless window**.

</Step>
<Step title="Clean Up Old Installs" interactive>

If you used an earlier build, **delete** `bin\x64\dxgi.dll`. It is no longer part of the mod, and leaving it means two copies of every engine hook fighting over the same addresses.

</Step>
<Step title="Extract the Release" interactive>

Download the latest release archive and extract it into your Cyberpunk 2077 game folder so files land in:

- `red4ext\plugins\CyberpunkVR_Stereo\` - the VR plugin
- `red4ext\plugins\CyberpunkVR_Hands\` - avatar, hands, weapon aim
- `bin\x64\openvr_api.dll` - for SteamVR runtime
- `bin\x64\plugins\cyber_engine_tweaks\mods\CyberpunkVRPort_*\` - CET mods
- `r6\scripts\CyberpunkVRPort_*\` - redscript modules

</Step>
<Step title="Launch" interactive>

Start your OpenXR runtime first, then run `Cyberpunk2077.exe`. Pick the render resolution and runtime in the launcher, then launch the game.

</Step>
</Steps>

**In-game controls:**
- `F10` - toggle VR menu / settings
- `F7` - recenter VR
- Stand in a **T-pose** to calibrate
- VR smoking: CET console - `Game.GetPlayer():VRSmokeToggle()`

### Known Issues

<AccordionGroup>
<Accordion title="Visual Glitches" icon="mdi:image-multiple" defaultOpen={false}>

- Grass jitter when standing in it
- Tree/grass shadow mismatches between left and right eye
- Overlay does not show in left eye
- Quest 3 screen edges may be visible at borders
- Scanner green tint disabled in both views (not visible in VRCAM)
- Cloth elements on buildings do not sway in VRCAM
- Camera/monitors do not show in VRCAM

</Accordion>
<Accordion title="Gameplay Limitations" icon="mdi:gamepad-variant" defaultOpen={false}>

- Not all weapons are projectile-based - some fire from camera instead of barrel (e.g., explosive bullets)
- Can not shoot while driving
- Cutscenes not tested
- Ironsights not recalculated for zoom
- Stereo can fall back to mono in some situations

</Accordion>
<Accordion title="Compatibility" icon="mdi:puzzle" defaultOpen={false}>

- Pimax Dream Air via SteamVR produces crosseyed/double vision - use PimaxXR instead
- UltraPlus mods that change settings can cause left/right eye mismatches
- Settings are not recommended to change from the mod's overwritten state

</Accordion>
</AccordionGroup>

### Tested On

The mod has been tested on **PICO 4** (via VDXR), **Quest 3**, and **Pimax Crystal**.

### Video Walkthrough

A video walkthrough covers the full installation and gameplay: [Cyberpunk 2077 VR Setup Guide](https://www.youtube.com/watch?v=3X4IsL6-RwA).

## Red Dead Redemption 2 VR (RealVR)

The [RDR2 VR compatibility patch](https://www.nexusmods.com/reddeadredemption2/mods/3446) combines Luke Ross's **RealVR** mod with **VRperfkit** and a compatibility patch to add full VR support to Red Dead Redemption 2. This gives you the ability to explore the open world, ride horses, and engage in gunfights entirely in VR.

:::warning
This mod is **NOT compatible with other mods**. You must remove all existing RDR2 mods before installing RealVR, or the game will break.
:::

### Requirements

- [Steam copy of Red Dead Redemption 2](https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/) (pirated copies will not work)
- [RealVR](https://www.mediafire.com/file/tsyc7o5cjz1z7un/RDR2Vr.zip/file)
- VRperfkit (included with RealVR)

### Setup Guide

<Steps>
<Step title="Extract RealVR and VRperfkit" interactive>

Extract both **RealVR** (from the requirements section on Nexus Mods) and **VRperfkit** into a working folder.

</Step>
<Step title="Lower Head Bobbing" interactive>

Open the game and go to **Settings > Video/Gameplay**. Lower **first person head bobbing** all the way to minimum to avoid motion sickness.

</Step>
<Step title="Remove Existing Mods" interactive>

Move **all** existing RDR2 mods to your desktop or a backup folder. If you leave them in, the game will break and you will have to redo every step.

</Step>
<Step title="Change Steam Update Settings" interactive>

In Steam, right-click Red Dead Redemption 2, go to **Properties > Updates**. Change from "Always keep this game updated" to **"Only update this game when I launch it"**. This prevents Steam from overwriting the mod files.

</Step>
<Step title="Install RealVR and VRperfkit" interactive>

Move all files from the RealVR folder ("move me first") and the VRperfkit folder ("move me second") into the main RDR2 game folder. If prompted to replace files when moving RealVR, click Yes - but consider deleting the old version first, as V2 has a new file that fixes a crash and graphics bug.

</Step>
<Step title="Run Realconfig" interactive>

Run **Realconfig.bat** and select your quality option.

</Step>
<Step title="Launch the Game" interactive>

Run the game. When it loads, a **Reshade popup** will appear. Press **R2 and L2 at the same time** on your gamepad, or select a hotkey with your mouse.

</Step>
<Step title="Handle the Windows Popup" interactive>

Press the Windows key - there will be another tab for RDR2 with a small box that looks like an error. Just click OK, go back into the game, and you will be at the main menu. Press Enter on your keyboard to begin loading into the game.

</Step>
</Steps>

### Reference

A video walkthrough by **Eddy'zGamingRoom** covers the full installation process: [RDR2 VR Setup Guide](https://www.youtube.com/watch?v=wcKnjkHIKZM).

:::tip DLSS Update
The video recommends using **DLSS Swapper** to update the game's DLSS DLL from v2.2.10 to the latest version with an M profile. This is a separate step from the RealVR install and helps with VR rendering quality.
:::

## General Tips for VR Mod Gaming

:::info
VR mods are community projects and can be fragile. Always back up your game saves and clean installs before modding.
:::

- **Start with vanilla** - make sure the base game runs perfectly before adding VR mods.
- **One mod at a time** - if something breaks, you will know which mod caused it.
- **Check logs** - most VR mods write diagnostic logs. Read them before asking for help.
- **GPU matters** - VR rendering at high resolution with stereo is demanding. An RTX 3070 or better is recommended.
- **Headset passthrough** - some mods let you see your keyboard through the headset. Useful for desktop games where you still need to type.

## References

- [CyberpunkVR Port - GitHub Repository](https://github.com/dariulone/cyberpunk-vr-port)
- [CyberpunkVR Port - Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/30093)
- [Cyberpunk 2077 VR Setup Guide - YouTube](https://www.youtube.com/watch?v=3X4IsL6-RwA)
- [RDR2 VR Compatibility Patch - Nexus Mods](https://www.nexusmods.com/reddeadredemption2/mods/3446)
- [RDR2 VR Setup Guide - YouTube (Eddy'zGamingRoom)](https://www.youtube.com/watch?v=wcKnjkHIKZM)
- [RealVR - MediaFire Download](https://www.mediafire.com/file/tsyc7o5cjz1z7un/RDR2Vr.zip/file)
- [Virtual Desktop Link Cable Guide](/docs/Games/Quest3/virtual-desktop-link-cable)
