"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[9119],{86:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>m});var s=n(7462),a=(n(7294),n(3905));n(1839);const i={title:"Ram speed",date:20211106,author:"sdelrio",tags:["ram","linux","speed"]},d="Check RAM speed in Linux",t={unversionedId:"OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed",id:"OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed",title:"Ram speed",description:"Linux check ram speed and type commands",source:"@site/docs/OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed.md",sourceDirName:"OS/GNU-Linux/Hardware/Memory/Checks",slug:"/OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed",permalink:"/docs/OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed.md",tags:[{label:"ram",permalink:"/docs/tags/ram"},{label:"linux",permalink:"/docs/tags/linux"},{label:"speed",permalink:"/docs/tags/speed"}],version:"current",frontMatter:{title:"Ram speed",date:20211106,author:"sdelrio",tags:["ram","linux","speed"]},sidebar:"tutorialSidebar",previous:{title:"Disable mitigations",permalink:"/docs/OS/GNU-Linux/Hardware/CPU/Tuning/disable-cpu-mitigations"},next:{title:"Corsair on Ryzen",permalink:"/docs/OS/GNU-Linux/Hardware/Memory/Overclock/oc-corsair"}},o={},m=[{value:"Linux check ram speed and type commands",id:"linux-check-ram-speed-and-type-commands",level:2},{value:"lshw",id:"lshw",level:2},{value:"References",id:"references",level:2}],l={toc:m},c="wrapper";function u(e){let{components:r,...n}=e;return(0,a.kt)(c,(0,s.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"check-ram-speed-in-linux"},"Check RAM speed in Linux"),(0,a.kt)("h2",{id:"linux-check-ram-speed-and-type-commands"},"Linux check ram speed and type commands"),(0,a.kt)("p",null,"Explains how to find out RAM make, type and speed (in Mhz) under any Linux distro or UNIX / BSD systems using the CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dmidecode -t memory | grep -i speed\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    Speed: 2133 MT/s\n    Configured Memory Speed: 2133 MT/s\n    Speed: 2133 MT/s\n    Configured Memory Speed: 2133 MT/s\n    Speed: 2133 MT/s\n    Configured Memory Speed: 2133 MT/s\n    Speed: 2133 MT/s\n    Configured Memory Speed: 2133 MT/s\n")),(0,a.kt)("h2",{id:"lshw"},"lshw"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo lshw -short -C memory\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"H/W path                  Device      Class          Description\n================================================================\n/0/0                                  memory         64KiB BIOS\n/0/35                                 memory         64GiB System Memory\n/0/35/0                               memory         16GiB DIMM DDR4 Synchronous Unbuffered (Unregistered) 2133 MHz (0.5 ns)\n/0/35/1                               memory         16GiB DIMM DDR4 Synchronous Unbuffered (Unregistered) 2133 MHz (0.5 ns)\n/0/35/2                               memory         16GiB DIMM DDR4 Synchronous Unbuffered (Unregistered) 2133 MHz (0.5 ns)\n/0/35/3                               memory         16GiB DIMM DDR4 Synchronous Unbuffered (Unregistered) 2133 MHz (0.5 ns)\n/0/38                                 memory         768KiB L1 cache\n/0/39                                 memory         6MiB L2 cache\n/0/3a                                 memory         64MiB L3 cache\n")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cyberciti.biz/faq/check-ram-speed-linux/"},"https://www.cyberciti.biz/faq/check-ram-speed-linux/"))))}u.isMDXComponent=!0}}]);