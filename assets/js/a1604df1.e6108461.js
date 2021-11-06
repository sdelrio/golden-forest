"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[9119],{3905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return p}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return n?t.createElement(f,i(i({ref:r},d),{},{components:n})):t.createElement(f,i({ref:r},d))}));function p(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var t=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Ram speed",date:20211106,author:"sdelrio",tags:["ram","linux","speed"]},c="Check RAM speed in Linux",l={unversionedId:"OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed",id:"OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed",isDocsHomePage:!1,title:"Ram speed",description:"Linux check ram speed and type commands",source:"@site/docs/OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed.md",sourceDirName:"OS/GNU-Linux/Hardware/Memory/Checks",slug:"/OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed",permalink:"/docs/OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/Hardware/Memory/Checks/linux-ram-speed.md",tags:[{label:"ram",permalink:"/docs/tags/ram"},{label:"linux",permalink:"/docs/tags/linux"},{label:"speed",permalink:"/docs/tags/speed"}],version:"current",frontMatter:{title:"Ram speed",date:20211106,author:"sdelrio",tags:["ram","linux","speed"]},sidebar:"tutorialSidebar",previous:{title:"ROCm OpenCL",permalink:"/docs/OS/GNU-Linux/Drivers/AMD/rocm"},next:{title:"Corsair on Ryzen",permalink:"/docs/OS/GNU-Linux/Hardware/Memory/Overclock/oc-corsair"}},d=[{value:"Linux check ram speed and type commands",id:"linux-check-ram-speed-and-type-commands",children:[],level:2},{value:"lshw",id:"lshw",children:[],level:2},{value:"References",id:"references",children:[],level:2}],u={toc:d};function m(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"check-ram-speed-in-linux"},"Check RAM speed in Linux"),(0,o.kt)("h2",{id:"linux-check-ram-speed-and-type-commands"},"Linux check ram speed and type commands"),(0,o.kt)("p",null,"Explains how to find out RAM make, type and speed (in Mhz) under any Linux distro or UNIX / BSD systems using the CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dmidecode -t memory | grep -i speed\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    Speed: 2133 MT/s\n    Configured Memory Speed: 2133 MT/s\n    Speed: 2133 MT/s\n    Configured Memory Speed: 2133 MT/s\n    Speed: 2133 MT/s\n    Configured Memory Speed: 2133 MT/s\n    Speed: 2133 MT/s\n    Configured Memory Speed: 2133 MT/s\n")),(0,o.kt)("h2",{id:"lshw"},"lshw"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo lshw -short -C memory\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ruta H/W                  Dispositivo  Clase          Descripci\xf3n\n==================================================================\n/0/0                                   memory         64KiB BIOS\n/0/35                                  memory         64GiB Memoria de sistema\n/0/35/0                                memory         16GiB DIMM DDR4 S\xedncrono Unbuffered (Unregistered) 2133 MHz (0,5 ns)\n/0/35/1                                memory         16GiB DIMM DDR4 S\xedncrono Unbuffered (Unregistered) 2133 MHz (0,5 ns)\n/0/35/2                                memory         16GiB DIMM DDR4 S\xedncrono Unbuffered (Unregistered) 2133 MHz (0,5 ns)\n/0/35/3                                memory         16GiB DIMM DDR4 S\xedncrono Unbuffered (Unregistered) 2133 MHz (0,5 ns)\n/0/38                                  memory         768KiB L1 cach\xe9\n/0/39                                  memory         6MiB L2 cach\xe9\n/0/3a                                  memory         64MiB L3 cach\xe9\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cyberciti.biz/faq/check-ram-speed-linux/"},"https://www.cyberciti.biz/faq/check-ram-speed-linux/"))))}m.isMDXComponent=!0}}]);