# NixOS Flakes

Nix flakes define a schema with standarized inputs and output to solve the composability probem that Nix [Derivations](https://nixos.org/manual/nix/stable/language/derivations.html) have

Nix flakes introduce inning for all dependencies by having a lockfile to solve the problem that Nix [Channels](https://matthewbauer.us/blog/channel-changing.html) have.

## References

* [Why did Nix adopt Flakes](https://www.jetpack.io/blog/why-did-nix-adopt-flakes/)
* [NixOS & Flakes Book](https://nixos-and-flakes.thiscute.world/)

## Sample repos

* Hyperland
  * https://github.com/redyf/nixdots
* NVidia modules
  * https://github.com/redyf/nixdots/blob/main/modules/nixos/hardware/nvidia/default.nix (it also has a crean repo organization)
* Mac Apple Silicon
  * https://github.com/billimek/dotfiles/blob/c98a04a057dd1edcfd1ff44329e658a306a887e6/hosts/common/darwin/defaults.nix
  * https://github.com/LnL7/nix-darwin
* Dell XPS
  * https://github.com/NixOS/nixos-hardware/tree/master/dell/xps/15-9520
  * https://gist.github.com/alexVinarskis/77d55a0a0f4150576ba77e5f4241d512
* Linux Partitions
  * https://github.com/nix-community/disko
* Firefox extensions
  * https://github.com/redyf/nixdots/blob/main/modules/nixos/apps/firefox/default.nix#L20-L35
* NixOS + home manager (basic)
  * https://github.com/segator/config
* Dotfiles
  * https://github.com/konradmalik/dotfiles
* ZFS
  * https://github.com/mariaa144/dotfiles-flake/blob/openzfs-guide/hosts/exampleHost/sshUnlock.txt
* Tool auto detects dock stagins and helps Hyperland not config monitors by terminal
  * https://github.com/pjones/tilde/blob/4a5a691fbc5c8d63d1ae85a71ad9859de420d39a/devices/jekyll.nix#L68C7-L68C21


