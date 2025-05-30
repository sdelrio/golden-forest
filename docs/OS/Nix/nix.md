# Nix

Nix is a declarative package manager that enables users to declare desired system state in config files. It doesn't requiere to have NixOS as the base system.

## Instalaltion

It can be installed on macOS, Linux or WSL. Can even Customize (Almost) all your macOS settings via nix-darwin.

* [https://nixos-and-flakes.thiscute.world/introduction/installation](https://nixos-and-flakes.thiscute.world/introduction/installation)
* [Setting up Nix on macOS](https://www.osnews.com/story/138333/setting-up-nix-on-macos/)
    * [https://nixcademy.com/2024/01/15/nix-on-macos/](https://nixcademy.com/2024/01/15/nix-on-macos/)


Install latest version

```
sh <(curl -L https://nixos.org/nix/install) --no-daemon
```


## Home-manager

Usually install no nix-pkgs-unstable. If you want to use previous version updating channel, for example install home manager 23.11 with nix 23.11 pkgs use:

```
nix-channel --add https://channels.nixos.org/nixos-23.11 nixpkgs
nix-channel --add https://github.com/nix-community/home-manager/archive/release-23.11.tar.gz home-manager
nix-channel --update
```

Official docs:

* [Home Manager Manual](https://nix-community.github.io/home-manager/)
* [Getting stated using home manager](https://nixos-and-flakes.thiscute.world/nixos-with-flakes/start-using-home-manager)

<>
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/utoj6annRK0?si=amTXG1LkUlxbQhDV"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen></iframe>
</>

### Dotfiles mangement with Stow

* https://github.com/agilesteel/.dotfiles/tree/master/stow
* https://apiumhub.com/es/tech-blog-barcelona/gestion-de-dotfiles-con-stow/


