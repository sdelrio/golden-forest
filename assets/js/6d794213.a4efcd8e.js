"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[2654],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?t.createElement(f,o(o({ref:r},l),{},{components:n})):t.createElement(f,o({ref:r},l))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86985:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var t=n(83117),a=(n(67294),n(3905));const i={title:"7-Zip",date:20211106,author:"sdelrio",tags:["7zip","benchmark","cpu"]},o="7-Zip benchmark",c={unversionedId:"OS/GNU-Linux/Hardware/CPU/Benchmarks/7zip",id:"OS/GNU-Linux/Hardware/CPU/Benchmarks/7zip",title:"7-Zip",description:"* 7-Zip Benchmark command:",source:"@site/docs/OS/GNU-Linux/Hardware/CPU/Benchmarks/7zip.md",sourceDirName:"OS/GNU-Linux/Hardware/CPU/Benchmarks",slug:"/OS/GNU-Linux/Hardware/CPU/Benchmarks/7zip",permalink:"/docs/OS/GNU-Linux/Hardware/CPU/Benchmarks/7zip",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/Hardware/CPU/Benchmarks/7zip.md",tags:[{label:"7zip",permalink:"/docs/tags/7-zip"},{label:"benchmark",permalink:"/docs/tags/benchmark"},{label:"cpu",permalink:"/docs/tags/cpu"}],version:"current",frontMatter:{title:"7-Zip",date:20211106,author:"sdelrio",tags:["7zip","benchmark","cpu"]},sidebar:"tutorialSidebar",previous:{title:"Bcache SSD caching",permalink:"/docs/OS/GNU-Linux/HDs/ssd-cache"},next:{title:"Linux Benchmark Apps",permalink:"/docs/OS/GNU-Linux/Hardware/CPU/Benchmarks/linux-cpu-bench"}},p={},s=[{value:"References",id:"references",level:2}],l={toc:s};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"7-zip-benchmark"},"7-Zip benchmark"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"7-Zip Benchmark command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"7z b\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Result:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"7-Zip [64] 16.02 : Copyright (c) 1999-2016 Igor Pavlov : 2016-05-21\np7zip Version 16.02 (locale=es_ES.UTF-8,Utf16=on,HugeFiles=on,64 bits,24 CPUs AMD Ryzen 9 3900 12-Core Processor              (870F10),ASM,AES-NI)\n\nAMD Ryzen 9 3900 12-Core Processor\nCPU Freq: - - - - - - - - -\n\nRAM size:   64295 MB,  # CPU hardware threads:  24\nRAM usage:   5295 MB,  # Benchmark threads:     24\n\n                       Compressing  |                  Decompressing\nDict     Speed Usage    R/U Rating  |      Speed Usage    R/U Rating\n         KiB/s     %   MIPS   MIPS  |      KiB/s     %   MIPS   MIPS\n\n22:      77906  2272   3335  75788  |     945963  2320   3477  80665\n23:      70298  2209   3242  71626  |     930741  2317   3476  80533\n24:      67073  2205   3270  72117  |     923588  2352   3447  81066\n25:      64262  2205   3327  73373  |     898848  2344   3412  79996\n----------------------------------  | ------------------------------\nAvr:            2223   3294  73226  |             2333   3453  80565\nTot:            2278   3373  76895\n")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.7-zip.org/"},"7-zip homepage"))))}u.isMDXComponent=!0}}]);