"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[9119],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>u});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,y=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return n?t.createElement(y,i(i({ref:r},d),{},{components:n})):t.createElement(y,i({ref:r},d))}));function u(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80086:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(83117),a=(n(67294),n(3905));const o={title:"Ram speed",date:20211106,author:"sdelrio",tags:["ram","linux","speed"]},i="Check RAM speed in Linux",s={unversionedId:"OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed",id:"OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed",title:"Ram speed",description:"Linux check ram speed and type commands",source:"@site/docs/OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed.md",sourceDirName:"OS/GNU-Linux/Hardware/Memory/Checks",slug:"/OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed",permalink:"/docs/OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed.md",tags:[{label:"ram",permalink:"/docs/tags/ram"},{label:"linux",permalink:"/docs/tags/linux"},{label:"speed",permalink:"/docs/tags/speed"}],version:"current",frontMatter:{title:"Ram speed",date:20211106,author:"sdelrio",tags:["ram","linux","speed"]},sidebar:"tutorialSidebar",previous:{title:"Disable mitigations",permalink:"/docs/OS/GNU-Linux/Hardware/CPU/Tuning/disable-cpu-mitigations"},next:{title:"Corsair on Ryzen",permalink:"/docs/OS/GNU-Linux/Hardware/Memory/Overclock/oc-corsair"}},c={},l=[{value:"Linux check ram speed and type commands",id:"linux-check-ram-speed-and-type-commands",level:2},{value:"lshw",id:"lshw",level:2},{value:"References",id:"references",level:2}],d={toc:l};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"check-ram-speed-in-linux"},"Check RAM speed in Linux"),(0,a.kt)("h2",{id:"linux-check-ram-speed-and-type-commands"},"Linux check ram speed and type commands"),(0,a.kt)("p",null,"Explains how to find out RAM make, type and speed (in Mhz) under any Linux distro or UNIX / BSD systems using the CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dmidecode -t memory | grep -i speed\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    Speed: 2133 MT/s\n    Configured Memory Speed: 2133 MT/s\n    Speed: 2133 MT/s\n    Configured Memory Speed: 2133 MT/s\n    Speed: 2133 MT/s\n    Configured Memory Speed: 2133 MT/s\n    Speed: 2133 MT/s\n    Configured Memory Speed: 2133 MT/s\n")),(0,a.kt)("h2",{id:"lshw"},"lshw"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo lshw -short -C memory\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"H/W path                  Device      Class          Description\n================================================================\n/0/0                                  memory         64KiB BIOS\n/0/35                                 memory         64GiB System Memory\n/0/35/0                               memory         16GiB DIMM DDR4 Synchronous Unbuffered (Unregistered) 2133 MHz (0.5 ns)\n/0/35/1                               memory         16GiB DIMM DDR4 Synchronous Unbuffered (Unregistered) 2133 MHz (0.5 ns)\n/0/35/2                               memory         16GiB DIMM DDR4 Synchronous Unbuffered (Unregistered) 2133 MHz (0.5 ns)\n/0/35/3                               memory         16GiB DIMM DDR4 Synchronous Unbuffered (Unregistered) 2133 MHz (0.5 ns)\n/0/38                                 memory         768KiB L1 cache\n/0/39                                 memory         6MiB L2 cache\n/0/3a                                 memory         64MiB L3 cache\n")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cyberciti.biz/faq/check-ram-speed-linux/"},"https://www.cyberciti.biz/faq/check-ram-speed-linux/"))))}p.isMDXComponent=!0}}]);