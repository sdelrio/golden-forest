"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[6512],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=s,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91398:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(83117),s=n(80102),r=(n(67294),n(3905)),l=["components"],o={title:"ZSysctl",date:20211106,author:"sdelrio",tags:["zfs","zsys"]},i="Zsys",u={unversionedId:"OS/GNU-Linux/ZFS/zsys",id:"OS/GNU-Linux/ZFS/zsys",title:"ZSysctl",description:"ZSys is a daemon and a client for zfs systemtargeting and enhanced ZOL experience. It was included in Ubuntu 20 and Linux Mint 20.",source:"@site/docs/OS/GNU-Linux/ZFS/zsys.md",sourceDirName:"OS/GNU-Linux/ZFS",slug:"/OS/GNU-Linux/ZFS/zsys",permalink:"/docs/OS/GNU-Linux/ZFS/zsys",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/ZFS/zsys.md",tags:[{label:"zfs",permalink:"/docs/tags/zfs"},{label:"zsys",permalink:"/docs/tags/zsys"}],version:"current",frontMatter:{title:"ZSysctl",date:20211106,author:"sdelrio",tags:["zfs","zsys"]},sidebar:"tutorialSidebar",previous:{title:"ZFS",permalink:"/docs/OS/GNU-Linux/ZFS/"},next:{title:"Radeon Drivers",permalink:"/docs/OS/GNU-Linux/Drivers/AMD/radeon"}},c=[{value:"Features",id:"features",children:[],level:2},{value:"Sample ZSys config",id:"sample-zsys-config",children:[],level:2},{value:"Garbage collector",id:"garbage-collector",children:[{value:"Call GC",id:"call-gc",children:[],level:3},{value:"Status of the GC",id:"status-of-the-gc",children:[],level:3},{value:"GC timers",id:"gc-timers",children:[],level:3}],level:2},{value:"Refresh",id:"refresh",children:[],level:2},{value:"Reload",id:"reload",children:[],level:2},{value:"Remove state",id:"remove-state",children:[{value:"User state",id:"user-state",children:[],level:3},{value:"System state",id:"system-state",children:[],level:3},{value:"Whole system",id:"whole-system",children:[],level:3},{value:"User State without any dependency but linked to a system state",id:"user-state-without-any-dependency-but-linked-to-a-system-state",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"zsys"},"Zsys"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ubuntu/zsys"},"ZSys")," is a daemon and a client for zfs systemtargeting and enhanced ZOL experience. It was included in Ubuntu 20 and Linux Mint 20."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Every time you do an apt-get install the daemon will snapshot your OS pool.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"At OS boot time you can select a previous snapshot."))),(0,r.kt)("h2",{id:"sample-zsys-config"},"Sample ZSys config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/zsys.conf"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"history:\n  # https://didrocks.fr/2020/06/04/zfs-focus-on-ubuntu-20.04-lts-zsys-state-collection/\n  # Keep at least n history entry per unit of time if enough of them are present\n  # The order condition the bucket start and end dates (from most recent to oldest)\n  gcstartafter: 1\n  keeplast: 10 # Minimum number of recent states to keep.\n  #    - name:             Abitrary name of the bucket\n  #      buckets:          Number of buckets over the interval\n  #      bucketlength:     Length of each bucket in days\n  #      samplesperbucket: Number of datasets to keep in each bucket\n  gcrules:\n    - name: PreviousDay\n      buckets: 1\n      bucketlength: 1\n      samplesperbucket: 3\n    - name: PreviousWeek\n      buckets: 5\n      bucketlength: 1\n      samplesperbucket: 1\n    - name: PreviousMonth\n      buckets: 2\n      bucketlength: 14\n      samplesperbucket: 1\ngeneral:\n  # Minimal free space required before taking a snapshot\n  minfreepoolspace: 18\n  # Daemon timeout in seconds\n  timeout: 60\n")),(0,r.kt)("h2",{id:"garbage-collector"},"Garbage collector"),(0,r.kt)("h3",{id:"call-gc"},"Call GC"),(0,r.kt)("p",null,"Call zysysd garbage collection without waiting daily INFO output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"zsysctl service gc --all -v\n")),(0,r.kt)("p",null,"To see with extra debug info add ",(0,r.kt)("inlineCode",{parentName:"p"},"-vv")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"zsysctl service gc --all -vv\n")),(0,r.kt)("h3",{id:"status-of-the-gc"},"Status of the GC"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status zsys-gc\n")),(0,r.kt)("h3",{id:"gc-timers"},"GC timers"),(0,r.kt)("p",null,"GC collecting timers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl list-timers zsys-gc\n")),(0,r.kt)("p",null,"GC collecting timers loaded but inactive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl list-timers zsys-gc --all\n")),(0,r.kt)("h2",{id:"refresh"},"Refresh"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Re-Scan any ZFS datasheet")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"zsysctl service refresh\n")),(0,r.kt)("h2",{id:"reload"},"Reload"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reload ",(0,r.kt)("inlineCode",{parentName:"li"},"zsysd")," daemon")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"zsysctl service reload\n")),(0,r.kt)("h2",{id:"remove-state"},"Remove state"),(0,r.kt)("h3",{id:"user-state"},"User state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ zsysctl show --full |grep r48a3r\n$ zsysctl state remove r48a3r\nrpool/USERDATA/sdelrio_0y06wn@autozsys_r48a3r will be detached from system state rpool/ROOT/ubuntu_awq93l@autozsys_r48a3r\n")),(0,r.kt)("h3",{id:"system-state"},"System state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo zsysctl state remove r48a3r\n")),(0,r.kt)("h3",{id:"whole-system"},"Whole system"),(0,r.kt)("p",null,"adding ",(0,r.kt)("inlineCode",{parentName:"p"},"--system")," (",(0,r.kt)("inlineCode",{parentName:"p"},"/boot")," included)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo zsysctl state remove r48a3r --system\n")),(0,r.kt)("h3",{id:"user-state-without-any-dependency-but-linked-to-a-system-state"},"User State without any dependency but linked to a system state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ zsysctl state remove rpool/USERDATA/didrocks_e2jj0s@autozsys_iynia9\nrpool/USERDATA/didrocks_e2jj0s@autozsys_iynia9 will be detached from system state rpool/ROOT/ubuntu_qiq15o@autozsys_iynia9\n\nWould you like to proceed [y/N]? y\n")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ubuntu/zsys"},"https://github.com/ubuntu/zsys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://didrocks.fr/2020/06/04/zfs-focus-on-ubuntu-20.04-lts-zsys-state-collection/"},"https://didrocks.fr/2020/06/04/zfs-focus-on-ubuntu-20.04-lts-zsys-state-collection/"))))}p.isMDXComponent=!0}}]);