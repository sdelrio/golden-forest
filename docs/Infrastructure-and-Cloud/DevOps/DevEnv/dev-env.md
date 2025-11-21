---
title: Nix + devbox + direnv
date: 20230713
tags:
- visual studio code
- nix
- devbox
- direnv
---

# Dev Environment with Nix, Devbox and Direnv

## [Managing Dev Envs | S01 E20](https://community.aws/livestreams/build-on-weekly/2023-06-01)

<iframe src="https://player.twitch.tv/?video=1835498649&parent=localhost&parent=www.lorien.cloud&autoplay=false" title="Twitch video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>

Portable dev environment using 4 open source tools:

1. [`nix`](https://github.com/DeterminateSystems/nix-installer). Configuration as code, it comes from [NixOS](https://nixos.org). Focus on reproducibility 
If you switch laptops, or if you do things on different machines, it carries along your dev environment with you and make it works everywhere.
```bash
!/bin/bash

curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install
```

2. [`devbox`](https://www.jetpack.io/devbox/). Similar to pyenv, you go into a diretory install Go and you get it, you go outside that directory and Go is gone. It saves the config in a json file.
```bash
#!/bin/bash

curl -fsSL https://get.jetpack.io/devbox | bash
```

3. [`direnv`](https://direnv.net/). When you enter a directory it looks for a `.envrc` file and sources that into your shell.
```bash

#!/bin/bash

sudo apt update && sudo apt install -y direnv
```
4. `bashrc`. Source direnv to automatically hook into the shell and look for that `.envrc` file and then change my environment.
```bash
#!/bin/bash

echo 'eval "$(direnv hook bash)"' >> .bashrc
```

* [gist from the article](https://gist.github.com/bketelsen/e1646d2a4551217b4f0531fb9f0f3c9a)

## Sample app

```bash
git clone https://github.com/gohugoio/hugo
cd hugo
devbox init
devbox add go@latest
# .devbox/ directory will get the go installation
devbox generate direnv
```

* install `direnv` extention on Visual Studio Code (the one with the folder logo with a green leaf). 
Reloads all the VS stuff to find all the tools installed. For example, you try to install go rich language support in VSCode, and you will get a message *"The 'gopls' command is not available. Run 'go install -v golang.org/x/tools/gopls@latest" to install"*, but we will install lit with debox
Instead of install 

```bash
devbox add gopls@latest
which gopls
which go
direnv allow
cd ..
which go  # go not found 
cd -
which go  # go found again
```

Now the extension is reloaded and the environment is reloaded because VSCode detected a change on the devbox config file.

## Global

devbox recently added an update wich does global environments. To use as a global package manage, like Homebrew or apt in Ubuntu.

```bash
cd $HOME
wich go  # go not found
devbox global pull https://devbox.getfleek.dev/high
```

It will download a small go application wich will return a json file with a bunch of tools, in this sample case url:
* git
* htop
* github-cli
* glab
* fzf
* ripgrep
* vscode
* lazygit
* jq
* yq
* neovim (astro install with scripts, later)
* neofetch
* btop
* cheat
* tree-sitter
* nodejs
* python3Full
* exa
* bat
* atuin
* zoxide
* direnv
* starship

Also in theh devbox.json you could add, in `init_hook` scripts, a neovim config download.

```bash
$ devbox global run
Available scripts:
* install-astro
* install-hook-bash
* install-hook-zsh
* install-starship-prompt
* latest-hash
* npm-global
```

Run a pair of init hooks:

```bash
$ devbox global run install-hook-bash
$ cat ~/.bashrc | tail  # at the end an 'eval "$(devbox global shelenv --init-hook)' was added by the init_hook script

$ devbox global run install-astro
$ exit  # to create a new bash and test 
```

Now we will see a pretty big prompt, we will use another hook to make it simpler:

```bash
$ devbox global run install-starship-prompt
```

* Global config is stored in `~/devbox/global/current`

## Fleek

* [Fleek homepage](https://getfleek.dev/)

Similar to previous solution but seems designed to manage the `$HOME` directory

