"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[3173],{13237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));a(61839);const i={title:"Nix + devbox + direnv",date:20230713,tags:["visual studio code","nix","devbox","direnv"]},o="Dev Environment with Nix, Devbox and Direnv",s={unversionedId:"DevOps/DevEnv/dev-env",id:"DevOps/DevEnv/dev-env",title:"Nix + devbox + direnv",description:"Managing Dev Envs | S01 E20",source:"@site/docs/DevOps/DevEnv/dev-env.md",sourceDirName:"DevOps/DevEnv",slug:"/DevOps/DevEnv/dev-env",permalink:"/docs/DevOps/DevEnv/dev-env",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/DevOps/DevEnv/dev-env.md",tags:[{label:"visual studio code",permalink:"/docs/tags/visual-studio-code"},{label:"nix",permalink:"/docs/tags/nix"},{label:"devbox",permalink:"/docs/tags/devbox"},{label:"direnv",permalink:"/docs/tags/direnv"}],version:"current",frontMatter:{title:"Nix + devbox + direnv",date:20230713,tags:["visual studio code","nix","devbox","direnv"]},sidebar:"tutorialSidebar",previous:{title:"VM base images",permalink:"/docs/DevOps/CI/vm-images"},next:{title:"Ansible",permalink:"/docs/DevOps/Infra as Code/ansible"}},r={},d=[{value:"Managing Dev Envs | S01 E20",id:"managing-dev-envs--s01-e20",level:2},{value:"Sample app",id:"sample-app",level:2},{value:"Global",id:"global",level:2},{value:"Fleek",id:"fleek",level:2}],p={toc:d},u="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dev-environment-with-nix-devbox-and-direnv"},"Dev Environment with Nix, Devbox and Direnv"),(0,l.kt)("h2",{id:"managing-dev-envs--s01-e20"},(0,l.kt)("a",{parentName:"h2",href:"https://community.aws/livestreams/build-on-weekly/2023-06-01"},"Managing Dev Envs | S01 E20")),(0,l.kt)("iframe",{src:"https://player.twitch.tv/?video=1835498649&parent=localhost&parent=www.lorien.cloud&autoplay=false",title:"Twitch video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",scrolling:"no",height:"378",width:"620"}),(0,l.kt)("p",null,"Portable dev environment using 4 open source tools:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/DeterminateSystems/nix-installer"},(0,l.kt)("inlineCode",{parentName:"a"},"nix")),". Configuration as code, it comes from ",(0,l.kt)("a",{parentName:"li",href:"https://nixos.org"},"NixOS"),". Focus on reproducibility\nIf you switch laptops, or if you do things on different machines, it carries along your dev environment with you and make it works everywhere.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"!/bin/bash\n\ncurl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.jetpack.io/devbox/"},(0,l.kt)("inlineCode",{parentName:"a"},"devbox")),". Similar to pyenv, you go into a diretory install Go and you get it, you go outside that directory and Go is gone. It saves the config in a json file.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n\ncurl -fsSL https://get.jetpack.io/devbox | bash\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://direnv.net/"},(0,l.kt)("inlineCode",{parentName:"a"},"direnv")),". When you enter a directory it looks for a ",(0,l.kt)("inlineCode",{parentName:"li"},".envrc")," file and sources that into your shell.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n#!/bin/bash\n\nsudo apt update && sudo apt install -y direnv\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"bashrc"),". Source direnv to automatically hook into the shell and look for that ",(0,l.kt)("inlineCode",{parentName:"li"},".envrc")," file and then change my environment.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n\necho 'eval \"$(direnv hook bash)\"' >> .bashrc\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/bketelsen/e1646d2a4551217b4f0531fb9f0f3c9a"},"gist from the article"))),(0,l.kt)("h2",{id:"sample-app"},"Sample app"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/gohugoio/hugo\ncd hugo\ndevbox init\ndevbox add go@latest\n# .devbox/ directory will get the go installation\ndevbox generate direnv\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"install ",(0,l.kt)("inlineCode",{parentName:"li"},"direnv")," extention on Visual Studio Code (the one with the folder logo with a green leaf).\nReloads all the VS stuff to find all the tools installed. For example, you try to install go rich language support in VSCode, and you will get a message ",(0,l.kt)("em",{parentName:"li"},"\"The 'gopls' command is not available. Run 'go install -v golang.org/x/tools/gopls@latest\" to install\""),", but we will install lit with debox\nInstead of install ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"devbox add gopls@latest\nwhich gopls\nwhich go\ndirenv allow\ncd ..\nwhich go  # go not found \ncd -\nwhich go  # go found again\n")),(0,l.kt)("p",null,"Now the extension is reloaded and the environment is reloaded because VSCode detected a change on the devbox config file."),(0,l.kt)("h2",{id:"global"},"Global"),(0,l.kt)("p",null,"devbox recently added an update wich does global environments. To use as a global package manage, like Homebrew or apt in Ubuntu."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\nwich go  # go not found\ndevbox global pull https://devbox.getfleek.dev/high\n")),(0,l.kt)("p",null,"It will download a small go application wich will return a json file with a bunch of tools, in this sample case url:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"git"),(0,l.kt)("li",{parentName:"ul"},"htop"),(0,l.kt)("li",{parentName:"ul"},"github-cli"),(0,l.kt)("li",{parentName:"ul"},"glab"),(0,l.kt)("li",{parentName:"ul"},"fzf"),(0,l.kt)("li",{parentName:"ul"},"ripgrep"),(0,l.kt)("li",{parentName:"ul"},"vscode"),(0,l.kt)("li",{parentName:"ul"},"lazygit"),(0,l.kt)("li",{parentName:"ul"},"jq"),(0,l.kt)("li",{parentName:"ul"},"yq"),(0,l.kt)("li",{parentName:"ul"},"neovim (astro install with scripts, later)"),(0,l.kt)("li",{parentName:"ul"},"neofetch"),(0,l.kt)("li",{parentName:"ul"},"btop"),(0,l.kt)("li",{parentName:"ul"},"cheat"),(0,l.kt)("li",{parentName:"ul"},"tree-sitter"),(0,l.kt)("li",{parentName:"ul"},"nodejs"),(0,l.kt)("li",{parentName:"ul"},"python3Full"),(0,l.kt)("li",{parentName:"ul"},"exa"),(0,l.kt)("li",{parentName:"ul"},"bat"),(0,l.kt)("li",{parentName:"ul"},"atuin"),(0,l.kt)("li",{parentName:"ul"},"zoxide"),(0,l.kt)("li",{parentName:"ul"},"direnv"),(0,l.kt)("li",{parentName:"ul"},"starship")),(0,l.kt)("p",null,"Also in theh devbox.json you could add, in ",(0,l.kt)("inlineCode",{parentName:"p"},"init_hook")," scripts, a neovim config download."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ devbox global run\nAvailable scripts:\n* install-astro\n* install-hook-bash\n* install-hook-zsh\n* install-starship-prompt\n* latest-hash\n* npm-global\n")),(0,l.kt)("p",null,"Run a pair of init hooks:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ devbox global run install-hook-bash\n$ cat ~/.bashrc | tail  # at the end an 'eval \"$(devbox global shelenv --init-hook)' was added by the init_hook script\n\n$ devbox global run install-astro\n$ exit  # to create a new bash and test \n")),(0,l.kt)("p",null,"Now we will see a pretty big prompt, we will use another hook to make it simpler:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ devbox global run install-starship-prompt\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Global config is stored in ",(0,l.kt)("inlineCode",{parentName:"li"},"~/devbox/global/current"))),(0,l.kt)("h2",{id:"fleek"},"Fleek"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://getfleek.dev/"},"Fleek homepage"))),(0,l.kt)("p",null,"Similar to previous solution but seems designed to manage the ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME")," directory"))}h.isMDXComponent=!0}}]);