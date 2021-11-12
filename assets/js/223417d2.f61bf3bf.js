"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[8344],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,o,s=function(e,a){if(null==e)return{};var t,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=o.createContext({}),i=function(e){var a=o.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=i(e.components);return o.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},c=o.forwardRef((function(e,a){var t=e.components,s=e.mdxType,n=e.originalType,u=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=i(t),m=s,b=c["".concat(u,".").concat(m)]||c[m]||p[m]||n;return t?o.createElement(b,l(l({ref:a},d),{},{components:t})):o.createElement(b,l({ref:a},d))}));function m(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var n=t.length,l=new Array(n);l[0]=c;var r={};for(var u in a)hasOwnProperty.call(a,u)&&(r[u]=a[u]);r.originalType=e,r.mdxType="string"==typeof e?e:s,l[1]=r;for(var i=2;i<n;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4751:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return r},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return d},default:function(){return c}});var o=t(7462),s=t(3366),n=(t(7294),t(3905)),l=["components"],r={title:"ZFS",date:20211106,author:"sdelrio",tags:["zfs","zpool","gc"]},u="ZFS",i={unversionedId:"OS/GNU-Linux/ZFS/zfs",id:"OS/GNU-Linux/ZFS/zfs",isDocsHomePage:!1,title:"ZFS",description:"ZFS combines a file system with a volume manager.",source:"@site/docs/OS/GNU-Linux/ZFS/zfs.md",sourceDirName:"OS/GNU-Linux/ZFS",slug:"/OS/GNU-Linux/ZFS/zfs",permalink:"/docs/OS/GNU-Linux/ZFS/zfs",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/ZFS/zfs.md",tags:[{label:"zfs",permalink:"/docs/tags/zfs"},{label:"zpool",permalink:"/docs/tags/zpool"},{label:"gc",permalink:"/docs/tags/gc"}],version:"current",frontMatter:{title:"ZFS",date:20211106,author:"sdelrio",tags:["zfs","zpool","gc"]},sidebar:"tutorialSidebar",previous:{title:"Linux 5.15",permalink:"/docs/OS/GNU-Linux/Kernel/linux-5.15"},next:{title:"ZSysctl",permalink:"/docs/OS/GNU-Linux/ZFS/zsys"}},d=[{value:"Mount",id:"mount",children:[{value:"mounts external disk share",id:"mounts-external-disk-share",children:[],level:3},{value:"Import a pool as readonly",id:"import-a-pool-as-readonly",children:[],level:3},{value:"Mount a ZFS snapshot in a directory as readonly",id:"mount-a-zfs-snapshot-in-a-directory-as-readonly",children:[],level:3}],level:2},{value:"Pool",id:"pool",children:[{value:"List",id:"list",children:[],level:3}],level:2},{value:"List Volumes",id:"list-volumes",children:[{value:"With space usage",id:"with-space-usage",children:[],level:3}],level:2},{value:"List snapshots",id:"list-snapshots",children:[{value:"Standard",id:"standard",children:[],level:3},{value:"Detailed",id:"detailed",children:[],level:3}],level:2},{value:"List pools",id:"list-pools",children:[{value:"User data pool",id:"user-data-pool",children:[],level:3},{value:"Boot pool",id:"boot-pool",children:[],level:3},{value:"List ZFS System Root space",id:"list-zfs-system-root-space",children:[],level:3},{value:"List ZFS bpool BOOT space",id:"list-zfs-bpool-boot-space",children:[],level:3},{value:"List ZFS USERDATA space",id:"list-zfs-userdata-space",children:[],level:3},{value:"List ZFS /var/lib/docker space",id:"list-zfs-varlibdocker-space",children:[],level:3}],level:2},{value:"Get read and write stats from pool",id:"get-read-and-write-stats-from-pool",children:[],level:2},{value:"States",id:"states",children:[{value:"Remove user state",id:"remove-user-state",children:[],level:3},{value:"Remove system wide state",id:"remove-system-wide-state",children:[],level:3},{value:"User State without any dependency but linked to a system state",id:"user-state-without-any-dependency-but-linked-to-a-system-state",children:[],level:3}],level:2},{value:"Resources",id:"resources",children:[{value:"Cheatsheets",id:"cheatsheets",children:[],level:3},{value:"Ubuntu / Mint",id:"ubuntu--mint",children:[],level:3}],level:2}],p={toc:d};function c(e){var a=e.components,t=(0,s.Z)(e,l);return(0,n.kt)("wrapper",(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"zfs"},"ZFS"),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP: Work in progress")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ZFS"},"ZFS")," combines a file system with a volume manager."),(0,n.kt)("h2",{id:"mount"},"Mount"),(0,n.kt)("h3",{id:"mounts-external-disk-share"},"mounts external disk share"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zfs mount -l -a\nzfs share hddpool/imagenes\n")),(0,n.kt)("h3",{id:"import-a-pool-as-readonly"},"Import a pool as readonly"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zpool import -o readonly=on {{ pool_name }}\n")),(0,n.kt)("h3",{id:"mount-a-zfs-snapshot-in-a-directory-as-readonly"},"Mount a ZFS snapshot in a directory as readonly"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mount -t zfs {{ pool_name }}/{{ snapshot_name }} {{ mount_path }} -o ro\n")),(0,n.kt)("h2",{id:"pool"},"Pool"),(0,n.kt)("h3",{id:"list"},"List"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"zpool list \n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"NAME      SIZE  ALLOC   FREE  CKPOINT  EXPANDSZ   FRAG    CAP  DEDUP    HEALTH  ALTROOT\nbpool    1,88G   531M  1,36G        -         -     1%    27%  1.00x    ONLINE  -\nhddpool  1,81T   461G  1,36T        -         -     0%    24%  1.00x    ONLINE  -\nrpool     460G   164G   296G        -         -    24%    35%  1.00x    ONLINE  -\n")),(0,n.kt)("h2",{id:"list-volumes"},"List Volumes"),(0,n.kt)("h3",{id:"with-space-usage"},"With space usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -o space\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                       AVAIL   USED  USEDSNAP  USEDDS  USEDREFRESERV  USEDCHILD\nbpool                                      1,23G   530M        0B     96K             0B       530M\nbpool/BOOT                                 1,23G   529M        0B     96K             0B       529M\nbpool/BOOT/ubuntu_awq93l                   1,23G   529M     81,8M    447M             0B         0B\nbpool/BOOT/ubuntu_awq93l@autozsys_7718mv       -    80K         -       -              -          -\nbpool/BOOT/ubuntu_awq93l@autozsys_sslfo1       -    80K         -       -              -          -\nbpool/BOOT/ubuntu_awq93l@autozsys_4idbos       -    80K         -       -              -          -\nbpool/BOOT/ubuntu_awq93l@autozsys_6x3nsz       -    72K         -       -              -          -\nbpool/BOOT/ubuntu_awq93l@autozsys_6bkcck       -     0B         -       -              -          -\nbpool/BOOT/ubuntu_awq93l@autozsys_wafxbe       -     0B         -       -              -          -\n(...)\nrpool                                       281G   164G        0B    192K             0B       164G\nrpool/ROOT                                  281G  49,1G        0B    192K             0B      49,1G\nrpool/ROOT/ubuntu_awq93l                    281G  49,1G     2,58G   11,2G             0B      35,3G\nrpool/ROOT/ubuntu_awq93l/srv                281G   272K       80K    192K             0B         0B\n(...)\n")),(0,n.kt)("h2",{id:"list-snapshots"},"List snapshots"),(0,n.kt)("h3",{id:"standard"},"Standard"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -t snapshot\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                USED  AVAIL     REFER  MOUNTPOINT\nbpool/BOOT/ubuntu_awq93l@autozsys_7718mv             80K      -      355M  -\nbpool/BOOT/ubuntu_awq93l@autozsys_sslfo1             80K      -      355M  -\nbpool/BOOT/ubuntu_awq93l@autozsys_4idbos             80K      -      355M  -\n(...)\nrpool/ROOT/ubuntu_awq93l/srv@autozsys_7718mv         80K      -      192K  -\nrpool/ROOT/ubuntu_awq93l/srv@autozsys_sslfo1          0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/srv@autozsys_4idbos          0B      -      192K  -\n(...)\nrpool/ROOT/ubuntu_awq93l/usr@autozsys_7718mv          0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/usr@autozsys_sslfo1          0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/usr@autozsys_4idbos                  \n(...)\nrpool/ROOT/ubuntu_awq93l/var/log@autozsys_wafxbe   1,12M      -      189M  -\nrpool/ROOT/ubuntu_awq93l/var/mail@autozsys_7718mv     0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/mail@autozsys_sslfo1     0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/mail@autozsys_4idbos     0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/mail@autozsys_6x3nsz     0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/mail@autozsys_6bkcck     0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/mail@autozsys_wafxbe     0B      -      192K  -\n(...)\nrpool/ROOT/ubuntu_awq93l/var/snap@autozsys_7718mv     0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/snap@autozsys_sslfo1     0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/snap@autozsys_4idbos     0B      -      192K  -\n(...)\nrpool/ROOT/ubuntu_awq93l/var/spool@autozsys_7718mv   92K      -      276K  -\nrpool/ROOT/ubuntu_awq93l/var/spool@autozsys_sslfo1   84K      -      276K  -\nrpool/ROOT/ubuntu_awq93l/var/spool@autozsys_4idbos   84K      -      276K  -\n(...)\nrpool/ROOT/ubuntu_awq93l/var/www@autozsys_7718mv      0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/www@autozsys_sslfo1      0B      -      192K  -\n(...)\n")),(0,n.kt)("h3",{id:"detailed"},"Detailed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -t snapshot -o name,used,referenced,creation -s creation\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                                                                   USED     REFER  CREATION\nrpool/var/lib/docker/3e29124aabd26aba9a987fa9baf73a49d20fd093693c6e1702892592c3a37df0@823949492          8K     19,1M  s\xe1b may 22 14:24 2021\nrpool/var/lib/docker/ab44a150516267a349d9ec51eba4d5a4c62402e2984d1f976f9185f82457593d@346481945          0B     5,82M  s\xe1b may 22 14:24 2021\nrpool/var/lib/docker/c67ae3e336110d75a53dc55cd0d6ac9bfc9eb10c62bfb1acda5e82cec9d4f503@974426951          8K     19,1M  s\xe1b may 22 14:24 2021\nrpool/var/lib/docker/67bf0b89ec0abf78304fff424b3a5d839356e309a4ebc900991aa05082aae4e5-init@503730378     8K     74,4M  s\xe1b may 22 17:44 2021\nrpool/var/lib/docker/b88682c070dc9cb7fa79451620d9adb3281995dd1a547701f7e0ddffb5c71864@344154902          8K     74,4M  s\xe1b may 22 17:44 2021\nrpool/var/lib/docker/8b32028a0333569ade96213ad354021f246aad5577d6191fb907b597aebf8c6f@926970671          8K     28,7M  s\xe1b may 22 17:54 2021\nrpool/var/lib/docker/bc80234cff605bb8bd3959e7c707359286692afda5de90d2f02d19032d20cefa@63021450           8K     5,83M  s\xe1b may 22 17:54 2021\nrpool/var/lib/docker/df2e8b21e07f2b5f166477c3f965649c49042cc7c05ae5b5264963cb678edb9b@769644899          8K     28,7M  s\xe1b may 22 17:54 2021\nrpool/var/lib/docker/f13856143025fcd4b664d9df7e13ae7e0f4b6d5ad2b3127bb4121a857da5c562@259540872          8K     7,26M  s\xe1b may 22 17:54 2021\nrpool/var/lib/docker/b83cf8fb8f07d0b27025c294d6ac6962b82836c441620d489cc4dad1c5d5ccf2@376293604       2,44M     35,8M  s\xe1b may 22 17:54 2021\n")),(0,n.kt)("h2",{id:"list-pools"},"List pools"),(0,n.kt)("h3",{id:"user-data-pool"},"User data pool"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -r -t snapshot -o name,used,referenced,creation -s creation rpool/USERDATA\n")),(0,n.kt)("h3",{id:"boot-pool"},"Boot pool"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -r -t snapshot -o name,used,referenced,creation -s creation bpool/BOOT\n")),(0,n.kt)("h3",{id:"list-zfs-system-root-space"},"List ZFS System Root space"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -ro space rpool/ROOT\n")),(0,n.kt)("h3",{id:"list-zfs-bpool-boot-space"},"List ZFS bpool BOOT space"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -ro space bpool/BOOT\n")),(0,n.kt)("h3",{id:"list-zfs-userdata-space"},"List ZFS USERDATA space"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -ro space rpool/USERDATA\n")),(0,n.kt)("h3",{id:"list-zfs-varlibdocker-space"},"List ZFS /var/lib/docker space"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -ro space rpool/var/lib/docker\n")),(0,n.kt)("h2",{id:"get-read-and-write-stats-from-pool"},"Get read and write stats from pool"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zpool iostat {{ pool_name }} {{ refresh_time_in_seconds }}\n")),(0,n.kt)("h2",{id:"states"},"States"),(0,n.kt)("h3",{id:"remove-user-state"},"Remove user state"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ zsysctl show --full |grep r48a3r\n$ zsysctl state remove r48a3r\nrpool/USERDATA/sdelrio_0y06wn@autozsys_r48a3r will be detached from system state rpool/ROOT/ubuntu_awq93l@autozsys_r48a3r\n")),(0,n.kt)("h3",{id:"remove-system-wide-state"},"Remove system wide state"),(0,n.kt)("p",null,"Whole system removing adding ",(0,n.kt)("inlineCode",{parentName:"p"},"--system")," (",(0,n.kt)("inlineCode",{parentName:"p"},"/boot")," included)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo zsysctl state remove r48a3r --system\n")),(0,n.kt)("h3",{id:"user-state-without-any-dependency-but-linked-to-a-system-state"},"User State without any dependency but linked to a system state"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ zsysctl state remove rpool/USERDATA/didrocks_e2jj0s@autozsys_iynia9\nrpool/USERDATA/didrocks_e2jj0s@autozsys_iynia9 will be detached from system state rpool/ROOT/ubuntu_qiq15o@autozsys_iynia9\n\nWould you like to proceed [y/N]? y\n")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("h3",{id:"cheatsheets"},"Cheatsheets"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.programster.org/zfs-cheatsheet"},"ZFS-Cheatsheet"))),(0,n.kt)("h3",{id:"ubuntu--mint"},"Ubuntu / Mint"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"zsys"},"Zsys"))))}c.isMDXComponent=!0}}]);