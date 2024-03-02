"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[7434],{1898:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>m});var i=a(87462),l=(a(67294),a(3905));a(61839);const n={},s="NixOS Flakes",o={unversionedId:"OS/GNU-Linux/NixOS/flakes",id:"OS/GNU-Linux/NixOS/flakes",title:"NixOS Flakes",description:"Nix flakes define a schema with standarized inputs and output to solve the composability probem that Nix Derivations have",source:"@site/docs/OS/GNU-Linux/NixOS/flakes.md",sourceDirName:"OS/GNU-Linux/NixOS",slug:"/OS/GNU-Linux/NixOS/flakes",permalink:"/docs/OS/GNU-Linux/NixOS/flakes",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/NixOS/flakes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Traceroute",permalink:"/docs/OS/GNU-Linux/Networking/traceroute"},next:{title:"Installing NixOS",permalink:"/docs/OS/GNU-Linux/NixOS/install-system"}},r={},m=[{value:"References",id:"references",level:2},{value:"Sample repos",id:"sample-repos",level:2}],p={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nixos-flakes"},"NixOS Flakes"),(0,l.kt)("p",null,"Nix flakes define a schema with standarized inputs and output to solve the composability probem that Nix ",(0,l.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/stable/language/derivations.html"},"Derivations")," have"),(0,l.kt)("p",null,"Nix flakes introduce inning for all dependencies by having a lockfile to solve the problem that Nix ",(0,l.kt)("a",{parentName:"p",href:"https://matthewbauer.us/blog/channel-changing.html"},"Channels")," have."),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.jetpack.io/blog/why-did-nix-adopt-flakes/"},"Why did Nix adopt Flakes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nixos-and-flakes.thiscute.world/"},"NixOS & Flakes Book"))),(0,l.kt)("h2",{id:"sample-repos"},"Sample repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hyperland",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/redyf/nixdots"},"https://github.com/redyf/nixdots")))),(0,l.kt)("li",{parentName:"ul"},"NVidia modules",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/redyf/nixdots/blob/main/modules/nixos/hardware/nvidia/default.nix"},"https://github.com/redyf/nixdots/blob/main/modules/nixos/hardware/nvidia/default.nix")," (it also has a crean repo organization)"))),(0,l.kt)("li",{parentName:"ul"},"Mac",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nixcademy.com/2024/01/15/nix-on-macos/"},"https://nixcademy.com/2024/01/15/nix-on-macos/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/@zmre/nix-darwin-quick-tip-activate-your-preferences-f69942a93236"},"https://medium.com/@zmre/nix-darwin-quick-tip-activate-your-preferences-f69942a93236")))),(0,l.kt)("li",{parentName:"ul"},"Mac Apple Silicon",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/billimek/dotfiles/blob/c98a04a057dd1edcfd1ff44329e658a306a887e6/hosts/common/darwin/defaults.nix"},"https://github.com/billimek/dotfiles/blob/c98a04a057dd1edcfd1ff44329e658a306a887e6/hosts/common/darwin/defaults.nix")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/LnL7/nix-darwin"},"https://github.com/LnL7/nix-darwin")))),(0,l.kt)("li",{parentName:"ul"},"Dell XPS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/NixOS/nixos-hardware/tree/master/dell/xps/15-9520"},"https://github.com/NixOS/nixos-hardware/tree/master/dell/xps/15-9520")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/alexVinarskis/77d55a0a0f4150576ba77e5f4241d512"},"https://gist.github.com/alexVinarskis/77d55a0a0f4150576ba77e5f4241d512")))),(0,l.kt)("li",{parentName:"ul"},"Linux Partitions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nix-community/disko"},"https://github.com/nix-community/disko")))),(0,l.kt)("li",{parentName:"ul"},"Firefox extensions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/redyf/nixdots/blob/main/modules/nixos/apps/firefox/default.nix#L20-L35"},"https://github.com/redyf/nixdots/blob/main/modules/nixos/apps/firefox/default.nix#L20-L35")))),(0,l.kt)("li",{parentName:"ul"},"NixOS + home manager (basic)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/segator/config"},"https://github.com/segator/config")))),(0,l.kt)("li",{parentName:"ul"},"Dotfiles",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/konradmalik/dotfiles"},"https://github.com/konradmalik/dotfiles")))),(0,l.kt)("li",{parentName:"ul"},"ZFS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mariaa144/dotfiles-flake/blob/openzfs-guide/hosts/exampleHost/sshUnlock.txt"},"https://github.com/mariaa144/dotfiles-flake/blob/openzfs-guide/hosts/exampleHost/sshUnlock.txt")))),(0,l.kt)("li",{parentName:"ul"},"Tool auto detects dock stagins and helps Hyperland not config monitors by terminal",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pjones/tilde/blob/4a5a691fbc5c8d63d1ae85a71ad9859de420d39a/devices/jekyll.nix#L68C7-L68C21"},"https://github.com/pjones/tilde/blob/4a5a691fbc5c8d63d1ae85a71ad9859de420d39a/devices/jekyll.nix#L68C7-L68C21"))))))}u.isMDXComponent=!0}}]);