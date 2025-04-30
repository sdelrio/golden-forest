---
date: 20231014
author: sdelrio
tags:
 - nixos
 - config
 - tutorials
 - gpu
 - passthrough
 - paranoid
---

# NixOS configs and tutorials

## NixOS Explained from zero

* Christitus [https://christitus.com/nixos-explained/](https://christitus.com/nixos-explained/)

NixOS Explained from zero Config videos with timestamps , NFS mounting, Gaming Setup wi

## GPU passtrough with VR

### astrid.tech
  * [https://astrid.tech/2022/09/22/0/nixos-gpu-vfio/](https://astrid.tech/2022/09/22/0/nixos-gpu-vfio/)
    * A GPU Passthrough Setup for NixOS (with VR passthrough too!)
    * Doing VR on Windows on QEMU on NixOS because kernel anti-cheat is poison

## NixOS deployment tool

* Masive deployments of several nodes (https://github.com/zhaofengli/colmena)
  * GitHub - zhaofengli/colmena: A simple, stateless NixOS deployment tool
  * A simple, stateless NixOS deployment tool. Contribute to zhaofengli/colmena development by creating an account on GitHub.

## Config files samples

* https://github.com/gvolpe/nix-config
  * current — and always evolving
  * NixOS configuration files, home-manager, neovim, etc.

## Nix CI

* garnix.io (https://garnix.io/)
  * garnix | the nix CI
  * Simple, fast, and green CI and caching for nix projects

* Fluidattacks [https://makes.fluidattacks.com/](https://makes.fluidattacks.com/)
  * Documentation for Makes
  * CI in Nix

* Gvolpe [https://gvolpe.com/blog/nixos-binary-cache-ci/](https://gvolpe.com/blog/nixos-binary-cache-ci/)
  * NixOS: build your system on Github actions! • gvolpe's blog
  * What if I told you that you can save plenty of time and CPU-power by pre-building your entire NixOS configuration on Github actions? Fresh installations coul...

## Paranoid mode NixOS install

* Paranoid NixOS Setup
  * [https://christine.website/blog/paranoid-nixos-2021-07-18/](https://christine.website/blog/paranoid-nixos-2021-07-18/)
  * Making the System Amnesiac. Mount / in a tmpfs.
  * Repeatable Base Image with an ISO

## Config NixOS with Flakes

* jdisaaacs.com [https://jdisaacs.com/blog/nixos-config/](https://jdisaacs.com/blog/nixos-config/)
  NixOS Configuration with Flakes. Setting up NixOS

## Sway + Wayland (2021)

* kborling [https://gist.github.com/kborling/76805ade81ac5bfdd712df294208c878](https://gist.github.com/kborling/76805ade81ac5bfdd712df294208c878)
  configuration.nix: sway + wayland, but in 2021

## Quickpassthrough

* quickpassthrough script [https://youtu.be/sDmLCBI9L4E?t=11434](https://youtu.be/sDmLCBI9L4E?t=11434)
  * Hyperland - Wayland (Arch)
  * ./vfio-setup.sh will check the IOMMU groups, then check group mumber

## Wayland + Hyperland

### NixOs with Hyprland - My setup and some thoughs
  <>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/THgo4nBJyg8?si=bVgvC8Xb-3I_iOFl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </>

  * Jake@Linux
    * [Gitlab](https://gitlab.com/jped)
    * [Github](https://github.com/jdpedersen1/nixos)

### Nixos and Hyprland - Best Match Ever
  (19/07/2023)  Nix tutorials
  <>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/61wGzIv12Ds?si=6XcSR8kRrG3S5a6R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </>

  * Some errors from video (not too bad):
    * At 2:38 alternative to "dunst" is "mako"!!!
    * pkgs.wl-clipboard, not pkgs.wl-copy

```haskell
# Enabling hyprlnd on NixOS
programs.hyprland = {
  enable = true;
  nvidiaPatches = true;
  xwayland.enable = true;
};

environment.sessionVariables = {
  # If your cursor becomes invisible
  WLR_NO_HARDWARE_CURSORS = "1";
  # Hint electron apps to use wayland
  NIXOS_OZONE_WL = "1";
};

hardware = {
    # Opengl
    opengl.enable = true;

    # Most wayland compositors need this
    nvidia.modesetting.enable = true;
};

# waybar
(pkgs.waybar.overrideAttrs (oldAttrs: {
    mesonFlags = oldAttrs.mesonFlags ++ [ "-Dexperimental=true" ];
  })
)

# XDG portal
xdg.portal.enable = true;
xdg.portal.extraPortals = [ pkgs.xdg-desktop-portal-gtk ];

# Enable sound with pipewire.
sound.enable = true;
security.rtkit.enable = true;
services.pipewire = {
  enable = true;
  alsa.enable = true;
  alsa.support32Bit = true;
  pulse.enable = true;
  jack.enable = true;
};

# rofi keybind
bind = $mainMod, S, exec, rofi -show drun -show-icons
```

### Waybar configuration

(09/2023) Setup WAYBAR, the status bar for HYPRLAND with standard and custom modules for your window manager.
<>
<iframe width="560" height="315" src="https://www.youtube.com/embed/rW3JKs1_oVI?si=1Z4-6RgQAboRlZMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</>

This video is about the configuration and customization of Waybar, probably the most used status bar for Hyprland, Sway and other and other Wayland compositors.
[https://github.com/Alexays/Waybar](https://github.com/Alexays/Waybar)

Web developers will love waybar because the styling of the bar and the modules is done using the
CSS format means Cascading Stylesheets that are also used for web design.

Refering to the Hyprland Wiki, Waybar is one of the recommended status bars for the window manager.
With special modules you can connect waybar effectively with Hyprling for workspaces, window titles, keyboard language and the submap.
[https://wiki.hyprland.org/Useful-Utilities/Status-Bars/](https://wiki.hyprland.org/Useful-Utilities/Status-Bars/)

Waybar has an excellent documentation and helped me a lot to customize it to my needs.
[https://github.com/Alexays/Waybar/wiki](https://github.com/Alexays/Waybar/wiki)

Your can find the my configuration and latest dofiles of waybar always on Gitlab:
[https://gitlab.com/stephan-raabe/dotfiles](https://gitlab.com/stephan-raabe/dotfiles)

Kudos to [https://github.com/f3l3p1n0](https://github.com/f3l3p1n0) for his great and inspiring setup.

Homepage:
[https://www.ml4w.com](https://www.ml4w.com)


## Home Manager

### Stow

* [Homepage](https://www.gnu.org/software/stow/manual/stow.html)

* [https://blog.resuelve.io/gestionando-dotfiles-con-gnu-stow-b3cb0d7d40a2](https://blog.resuelve.io/gestionando-dotfiles-con-gnu-stow-b3cb0d7d40a2)
* [https://apiumhub.com/es/tech-blog-barcelona/gestion-de-dotfiles-con-stow/](https://apiumhub.com/es/tech-blog-barcelona/gestion-de-dotfiles-con-stow/)

