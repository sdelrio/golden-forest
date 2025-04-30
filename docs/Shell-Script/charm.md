# Charm.sh

* [https://charm.sh](https://charm.sh)

Terminal user interfaces, styles, and layouts. Many tools, but the one that's really useful tool for bash scripting is gum:

* https://github.com/charmbracelet/gum

<>
<iframe width="560" height="315" src="https://www.youtube.com/embed/U8zCHA-9VLA?si=KXJHRSjlUuItMTQy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</>


## Option

You can make pretty easty a select options through the CLI

```
gum choose "fix" "feat" "docs" "style" "refactor" "test" "chore" "revert"
```


## Prompt a value

* optional 
```
gum input --placeholder "scope"
```

* multiline
```
gum rite --placeholder "Details of this change (CTRL+D to finish)"
```


* Confirmation 

```
gum confirm "Commit changes?" && git commit -m "$$SUMARY" -m "$DESCRIPTION"
```


## Install 🍬

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


[Tabs](Tabs)
  [TabItem value="MacOS"](TabItem value="MacOS")

```
brew install gum
```

  [/TabItem](/TabItem)
  [TabItem value="Linux"](TabItem value="Linux")

```
brew install gum
```

  [/TabItem](/TabItem)
  [TabItem value="Nix"](TabItem value="Nix")

* Nix

```
nix-env -iA nixpkgs.gum
```

* Flakes

```
nix run "github:charmbracelet/gum" -- --help 
```

  [/TabItem](/TabItem)
  [TabItem value="Arch"](TabItem value="Arch")

```
pacman -S gum
```

  [/TabItem](/TabItem)
  [TabItem value="Debian"](TabItem value="Debian")

```
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://repo.charm.sh/apt/gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/charm.gpg
echo "deb [signed-by=/etc/apt/keyrings/charm.gpg] https://repo.charm.sh/apt/ * *" | sudo tee /etc/apt/sources.list.d/charm.list
sudo apt update && sudo apt install gum
```

  [/TabItem](/TabItem)
  [TabItem value="Fedora"](TabItem value="Fedora")

```
echo '[charm]
name=Charm
baseurl=https://repo.charm.sh/yum/
enabled=1
gpgcheck=1
gpgkey=https://repo.charm.sh/yum/gpg.key' | sudo tee /etc/yum.repos.d/charm.repo
sudo yum install gum
```

  [/TabItem](/TabItem)
  [TabItem value="Alpine"](TabItem value="Alpine")

`apk add gum`

  [/TabItem](/TabItem)
  [TabItem value="Android"](TabItem value="Android")

`pkg install gum`
  [/TabItem](/TabItem)
  [TabItem value="Windows"](TabItem value="Windows")

* via WinGet or Scoop
```
winget install charmbracelet.gum
scoop install charm-gum
```

  [/TabItem](/TabItem)
[/Tabs](/Tabs)



