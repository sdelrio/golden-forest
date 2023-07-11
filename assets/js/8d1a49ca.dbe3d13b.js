"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[6512],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=s.createContext({}),u=function(e){var t=s.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return s.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,y=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return a?s.createElement(y,l(l({ref:t},c),{},{components:a})):s.createElement(y,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91398:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var s=a(83117),n=(a(67294),a(3905));const r={title:"ZSysctl",date:20211106,author:"sdelrio",tags:["zfs","zsys"]},l="Zsys",o={unversionedId:"OS/GNU-Linux/ZFS/zsys",id:"OS/GNU-Linux/ZFS/zsys",title:"ZSysctl",description:"ZSys is a daemon and a client for zfs systemtargeting and enhanced ZOL experience. It was included in Ubuntu 20 and Linux Mint 20.",source:"@site/docs/OS/GNU-Linux/ZFS/zsys.md",sourceDirName:"OS/GNU-Linux/ZFS",slug:"/OS/GNU-Linux/ZFS/zsys",permalink:"/docs/OS/GNU-Linux/ZFS/zsys",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/ZFS/zsys.md",tags:[{label:"zfs",permalink:"/docs/tags/zfs"},{label:"zsys",permalink:"/docs/tags/zsys"}],version:"current",frontMatter:{title:"ZSysctl",date:20211106,author:"sdelrio",tags:["zfs","zsys"]},sidebar:"tutorialSidebar",previous:{title:"ZFS",permalink:"/docs/OS/GNU-Linux/ZFS/"},next:{title:"Automatic Upgrades",permalink:"/docs/OS/GNU-Linux/automatic-upgrades"}},i={},u=[{value:"Features",id:"features",level:2},{value:"Sample ZSys config",id:"sample-zsys-config",level:2},{value:"Garbage collector",id:"garbage-collector",level:2},{value:"Call GC",id:"call-gc",level:3},{value:"Status of the GC",id:"status-of-the-gc",level:3},{value:"GC timers",id:"gc-timers",level:3},{value:"Refresh",id:"refresh",level:2},{value:"Reload",id:"reload",level:2},{value:"Remove state",id:"remove-state",level:2},{value:"User state",id:"user-state",level:3},{value:"System state",id:"system-state",level:3},{value:"Whole system",id:"whole-system",level:3},{value:"User State without any dependency but linked to a system state",id:"user-state-without-any-dependency-but-linked-to-a-system-state",level:3},{value:"References",id:"references",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"zsys"},"Zsys"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/ubuntu/zsys"},"ZSys")," is a daemon and a client for zfs systemtargeting and enhanced ZOL experience. It was included in Ubuntu 20 and Linux Mint 20."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Every time you do an apt-get install the daemon will snapshot your OS pool.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"At OS boot time you can select a previous snapshot."))),(0,n.kt)("h2",{id:"sample-zsys-config"},"Sample ZSys config"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/etc/zsys.conf"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"history:\n  # https://didrocks.fr/2020/06/04/zfs-focus-on-ubuntu-20.04-lts-zsys-state-collection/\n  # Keep at least n history entry per unit of time if enough of them are present\n  # The order condition the bucket start and end dates (from most recent to oldest)\n  gcstartafter: 1\n  keeplast: 10 # Minimum number of recent states to keep.\n  #    - name:             Abitrary name of the bucket\n  #      buckets:          Number of buckets over the interval\n  #      bucketlength:     Length of each bucket in days\n  #      samplesperbucket: Number of datasets to keep in each bucket\n  gcrules:\n    - name: PreviousDay\n      buckets: 1\n      bucketlength: 1\n      samplesperbucket: 3\n    - name: PreviousWeek\n      buckets: 5\n      bucketlength: 1\n      samplesperbucket: 1\n    - name: PreviousMonth\n      buckets: 2\n      bucketlength: 14\n      samplesperbucket: 1\ngeneral:\n  # Minimal free space required before taking a snapshot\n  minfreepoolspace: 18\n  # Daemon timeout in seconds\n  timeout: 60\n")),(0,n.kt)("h2",{id:"garbage-collector"},"Garbage collector"),(0,n.kt)("h3",{id:"call-gc"},"Call GC"),(0,n.kt)("p",null,"Call zysysd garbage collection without waiting daily INFO output"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zsysctl service gc --all -v\n")),(0,n.kt)("p",null,"To see with extra debug info add ",(0,n.kt)("inlineCode",{parentName:"p"},"-vv")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zsysctl service gc --all -vv\n")),(0,n.kt)("h3",{id:"status-of-the-gc"},"Status of the GC"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status zsys-gc\n")),(0,n.kt)("h3",{id:"gc-timers"},"GC timers"),(0,n.kt)("p",null,"GC collecting timers"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl list-timers zsys-gc\n")),(0,n.kt)("p",null,"GC collecting timers loaded but inactive"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl list-timers zsys-gc --all\n")),(0,n.kt)("h2",{id:"refresh"},"Refresh"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Re-Scan any ZFS datasheet")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zsysctl service refresh\n")),(0,n.kt)("h2",{id:"reload"},"Reload"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reload ",(0,n.kt)("inlineCode",{parentName:"li"},"zsysd")," daemon")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zsysctl service reload\n")),(0,n.kt)("h2",{id:"remove-state"},"Remove state"),(0,n.kt)("h3",{id:"user-state"},"User state"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ zsysctl show --full |grep r48a3r\n$ zsysctl state remove r48a3r\nrpool/USERDATA/sdelrio_0y06wn@autozsys_r48a3r will be detached from system state rpool/ROOT/ubuntu_awq93l@autozsys_r48a3r\n")),(0,n.kt)("h3",{id:"system-state"},"System state"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo zsysctl state remove r48a3r\n")),(0,n.kt)("h3",{id:"whole-system"},"Whole system"),(0,n.kt)("p",null,"adding ",(0,n.kt)("inlineCode",{parentName:"p"},"--system")," (",(0,n.kt)("inlineCode",{parentName:"p"},"/boot")," included)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo zsysctl state remove r48a3r --system\n")),(0,n.kt)("h3",{id:"user-state-without-any-dependency-but-linked-to-a-system-state"},"User State without any dependency but linked to a system state"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ zsysctl state remove rpool/USERDATA/didrocks_e2jj0s@autozsys_iynia9\nrpool/USERDATA/didrocks_e2jj0s@autozsys_iynia9 will be detached from system state rpool/ROOT/ubuntu_qiq15o@autozsys_iynia9\n\nWould you like to proceed [y/N]? y\n")),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ubuntu/zsys"},"https://github.com/ubuntu/zsys")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://didrocks.fr/2020/06/04/zfs-focus-on-ubuntu-20.04-lts-zsys-state-collection/"},"https://didrocks.fr/2020/06/04/zfs-focus-on-ubuntu-20.04-lts-zsys-state-collection/"))))}p.isMDXComponent=!0}}]);