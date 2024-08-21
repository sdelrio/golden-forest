"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[8344],{94751:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var l=t(87462),s=(t(67294),t(3905));t(61839);const o={title:"ZFS",date:20211106,author:"sdelrio",tags:["zfs","zpool","gc"]},n="ZFS",r={unversionedId:"OS/GNU-Linux/ZFS/zfs",id:"OS/GNU-Linux/ZFS/zfs",title:"ZFS",description:"ZFS combines a file system with a volume manager.",source:"@site/docs/OS/GNU-Linux/ZFS/zfs.md",sourceDirName:"OS/GNU-Linux/ZFS",slug:"/OS/GNU-Linux/ZFS/",permalink:"/docs/OS/GNU-Linux/ZFS/",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/ZFS/zfs.md",tags:[{label:"zfs",permalink:"/docs/tags/zfs"},{label:"zpool",permalink:"/docs/tags/zpool"},{label:"gc",permalink:"/docs/tags/gc"}],version:"current",frontMatter:{title:"ZFS",date:20211106,author:"sdelrio",tags:["zfs","zpool","gc"]},sidebar:"tutorialSidebar",previous:{title:"TrueNAS SCALE scripts",permalink:"/docs/OS/GNU-Linux/TrueNAS/truenas-scripts"},next:{title:"ZSysctl",permalink:"/docs/OS/GNU-Linux/ZFS/zsys"}},i={},p=[{value:"Instal Linux Mint 20 with ZFS",id:"instal-linux-mint-20-with-zfs",level:2},{value:"Mount",id:"mount",level:2},{value:"mounts external disk share",id:"mounts-external-disk-share",level:3},{value:"Import a pool as readonly",id:"import-a-pool-as-readonly",level:3},{value:"Mount a ZFS snapshot in a directory as readonly",id:"mount-a-zfs-snapshot-in-a-directory-as-readonly",level:3},{value:"Pool",id:"pool",level:2},{value:"Create",id:"create",level:3},{value:"Command",id:"command",level:4},{value:"Sample",id:"sample",level:4},{value:"List",id:"list",level:3},{value:"Cache (ZIL/ARC)",id:"cache-zilarc",level:3},{value:"ZIL Log",id:"zil-log",level:4},{value:"Sample creating ZIL log",id:"sample-creating-zil-log",level:5},{value:"Clear arz zfs cache",id:"clear-arz-zfs-cache",level:4},{value:"Upgrade zpool",id:"upgrade-zpool",level:3},{value:"References",id:"references",level:4},{value:"ZFS Filesystem or volumes (ZVOL)",id:"zfs-filesystem-or-volumes-zvol",level:2},{value:"Create",id:"create-1",level:3},{value:"Samples",id:"samples",level:3},{value:"List Volumes",id:"list-volumes",level:3},{value:"With space usage",id:"with-space-usage",level:4},{value:"Snapshots",id:"snapshots",level:2},{value:"Tools",id:"tools",level:3},{value:"Ubuntu <code>zfs-auto-snapshot</code>",id:"ubuntu-zfs-auto-snapshot",level:4},{value:"Install",id:"install",level:5},{value:"List snapshots (standard)",id:"list-snapshots-standard",level:3},{value:"List snapshots (detailed)",id:"list-snapshots-detailed",level:3},{value:"Delete snapshots",id:"delete-snapshots",level:3},{value:"Samples",id:"samples-1",level:4},{value:"References",id:"references-1",level:4},{value:"List pools",id:"list-pools",level:2},{value:"User data pool",id:"user-data-pool",level:3},{value:"Boot pool",id:"boot-pool",level:3},{value:"List ZFS System Root space",id:"list-zfs-system-root-space",level:3},{value:"List ZFS bpool BOOT space",id:"list-zfs-bpool-boot-space",level:3},{value:"List ZFS USERDATA space",id:"list-zfs-userdata-space",level:3},{value:"List ZFS /var/lib/docker space",id:"list-zfs-varlibdocker-space",level:3},{value:"Get read and write stats from pool",id:"get-read-and-write-stats-from-pool",level:2},{value:"States",id:"states",level:2},{value:"Remove user state",id:"remove-user-state",level:3},{value:"Remove system wide state",id:"remove-system-wide-state",level:3},{value:"User State without any dependency but linked to a system state",id:"user-state-without-any-dependency-but-linked-to-a-system-state",level:3},{value:"Encryption",id:"encryption",level:2},{value:"Create and load-key",id:"create-and-load-key",level:3},{value:"Key status",id:"key-status",level:3},{value:"Changing wrapping key",id:"changing-wrapping-key",level:3},{value:"Change actual data encryption key",id:"change-actual-data-encryption-key",level:3},{value:"Change key location",id:"change-key-location",level:3},{value:"Encrypted Root",id:"encrypted-root",level:3},{value:"Sharing ZFS Datasets",id:"sharing-zfs-datasets",level:2},{value:"NFS",id:"nfs",level:3},{value:"Comression",id:"comression",level:2},{value:"Speed benchmarks",id:"speed-benchmarks",level:3},{value:"UI",id:"ui",level:2},{value:"Cockpit",id:"cockpit",level:3},{value:"Backup",id:"backup",level:2},{value:"Pyznap",id:"pyznap",level:3},{value:"ZFSbackup-go",id:"zfsbackup-go",level:3},{value:"Zrepl",id:"zrepl",level:3},{value:"Docker",id:"docker",level:3},{value:"Resources",id:"resources",level:2}],u={toc:p},d="wrapper";function c(e){let{components:a,...t}=e;return(0,s.kt)(d,(0,l.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"zfs"},"ZFS"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ZFS"},"ZFS")," combines a file system with a volume manager."),(0,s.kt)("h2",{id:"instal-linux-mint-20-with-zfs"},"Instal Linux Mint 20 with ZFS"),(0,s.kt)("p",null,"Before starting installation, open a terminal and run this command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo aptitude -y install libzfs2linux zfs-initramfs zfsutils-linux zfs-zed\n")),(0,s.kt)("p",null,"Then start installation and when you get to the filesystem picker, choose advanced and select ",(0,s.kt)("strong",{parentName:"p"},'"Experimental ZFS"'),". Continue as you would normally do."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://forums.linuxmint.com/viewtopic.php?t=306210"},"ZFS and Linux Mint 20 forums"))),(0,s.kt)("h2",{id:"mount"},"Mount"),(0,s.kt)("h3",{id:"mounts-external-disk-share"},"mounts external disk share"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs mount -l -a\nzfs share hddpool/imagenes\n")),(0,s.kt)("h3",{id:"import-a-pool-as-readonly"},"Import a pool as readonly"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zpool import -o readonly=on {{ pool_name }}\n")),(0,s.kt)("h3",{id:"mount-a-zfs-snapshot-in-a-directory-as-readonly"},"Mount a ZFS snapshot in a directory as readonly"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mount -t zfs {{ pool_name }}/{{ snapshot_name }} {{ mount_path }} -o ro\n")),(0,s.kt)("h2",{id:"pool"},"Pool"),(0,s.kt)("h3",{id:"create"},"Create"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Note: Use ",(0,s.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"disk by-id")),(0,s.kt)("p",{parentName:"admonition"},"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"/dev/disk/by-id/")," instead ",(0,s.kt)("inlineCode",{parentName:"p"},"/dev/sdX"),". This way doesn't matter where you plug the hard disk in the controller.")),(0,s.kt)("h4",{id:"command"},"Command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zpool create hddpool mirror /dev/disk/by-id/... /dev/disk/by-id/...\n")),(0,s.kt)("h4",{id:"sample"},"Sample"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zpool create hddpool mirror /dev/disk/by-id/ata-Hitachi_HDS5C3020ALA632_ML4220F424ERTK /dev/disk/by-id/ata-Hitachi_HDS5C3020ALA632_ML4220F31666VK\n")),(0,s.kt)("h3",{id:"list"},"List"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"zpool list \n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"NAME      SIZE  ALLOC   FREE  CKPOINT  EXPANDSZ   FRAG    CAP  DEDUP    HEALTH  ALTROOT\nbpool    1,88G   531M  1,36G        -         -     1%    27%  1.00x    ONLINE  -\nhddpool  1,81T   461G  1,36T        -         -     0%    24%  1.00x    ONLINE  -\nrpool     460G   164G   296G        -         -    24%    35%  1.00x    ONLINE  -\n")),(0,s.kt)("h3",{id:"cache-zilarc"},"Cache (ZIL/ARC)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"ZFS Intent Log, or ZIL, is designed to buffer ",(0,s.kt)("strong",{parentName:"p"},"WRITE")," operations")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"ARC and L2ARC are ment for ",(0,s.kt)("strong",{parentName:"p"},"READ")," operations")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://linuxhint.com/configuring-zfs-cache/"},"Configure ZFS cache for high Speed IO"),"\n",(0,s.kt)("a",{parentName:"p",href:"https://jrs-s.net/2019/05/02/zfs-sync-async-zil-slog/"},"ZFS sync/async + ZIL/SLOG explained"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://www.truenas.com/docs/references/slog/"},"TrueNas SLOG"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"L2ARC is AWESOME on ZFS - Why does EVERYONE say it's NOT?"),(0,s.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/JY_-I6lQTtI?si=Pn4vPRk2BA0vH2vL",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Best Practices for OpenZFS L2ARC in the Era of NVMe (SDC 2019)"),(0,s.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/yHgSU6iqrlE?si=6t3xnNhrnJ0XhEap",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))),(0,s.kt)("h4",{id:"zil-log"},"ZIL Log"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.servethehome.com/exploring-best-zfs-zil-slog-ssd-intel-optane-nand/"},"Exploring the Best ZFS ZIL SLOG SSD with Intel Optane and NAND")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"2020 winner: Optane 900p 28GB")),(0,s.kt)("h5",{id:"sample-creating-zil-log"},"Sample creating ZIL log"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo zpool add hddpool log /dev/disk/by-id/ata-DP-CT050M4SSC2_000000001207032EBBDB\n\n$ sudo zpool iostat hddpool -v\n                                                  capacity     operations     bandwidth \npool                                            alloc   free   read  write   read  write\n----------------------------------------------  -----  -----  -----  -----  -----  -----\nhddpool                                          433G  1,39T      6    111  61,5K  83,2M\n  mirror                                         433G  1,39T      6    111  61,5K  83,2M\n    ata-Hitachi_HDS5C3020ALA632_ML4220F312ERTK      -      -      3     55  31,8K  41,6M\n    ata-Hitachi_HDS5C3020ALA632_ML4220F31538VK      -      -      3     56  29,6K  41,6M\nlogs                                                -      -      -      -      -      -\n  ata-DP-CT050M4SSC2_000000001207032EBBDB           0  59,5G      0      0     10  1,02K\n----------------------------------------------  -----  -----  -----  -----  -----  -----\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Force sync always to pool log, this can lower a lot the performance, even if the log is a normal SSD")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo zfs set sync=always hddpool\n")),(0,s.kt)("h4",{id:"clear-arz-zfs-cache"},"Clear arz zfs cache"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sh -c 'echo 3 > /proc/sys/vm/drop_caches'\n")),(0,s.kt)("h3",{id:"upgrade-zpool"},"Upgrade zpool"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"zpool scrub pvepool1")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"zpool status pvepool1")),(0,s.kt)("li",{parentName:"ol"},"Pull one disk"),(0,s.kt)("li",{parentName:"ol"},"Insert new  disk"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"zpool status pvepool1")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"dmesg")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"zpool replace pvepool1 /dev/disk/by-id/...")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"zpool scrub pvepool1")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"zpool status pvepool1"))),(0,s.kt)("p",null,"Repeat the process for other disks, and then turn on autoexpand"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zpool set autoexpand=on pvepool1\nzpool online -e pvepool1 /dev/disk/by-id/...id1\nzpool online -e pvepool1 /dev/disk/by-id/...id2\nzpool online -e pvepool1 /dev/disk/by-id/...id3\nzpool online -e pvepool1 /dev/disk/by-id/...id4\n")),(0,s.kt)("h4",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://b3n.org/56tb-zpool-upgrade/"},"56TB Zpool upgrade"))),(0,s.kt)("h2",{id:"zfs-filesystem-or-volumes-zvol"},"ZFS Filesystem or volumes (ZVOL)"),(0,s.kt)("h3",{id:"create-1"},"Create"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs create tank/home\n")),(0,s.kt)("h3",{id:"samples"},"Samples"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create with default parameters")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo zfs create hddpool/imagenes\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create with compression enabled")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo zfs create hddpool/vms -o compress=on\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create and destroy a 64GB volume, compressed without encruyption")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo zfs create rpool/vm-win10 -V 64G -o compress=on -o encryption=off\nsudo zfs destroy rpool/vm-win10\n")),(0,s.kt)("h3",{id:"list-volumes"},"List Volumes"),(0,s.kt)("h4",{id:"with-space-usage"},"With space usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -o space\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                       AVAIL   USED  USEDSNAP  USEDDS  USEDREFRESERV  USEDCHILD\nbpool                                      1,23G   530M        0B     96K             0B       530M\nbpool/BOOT                                 1,23G   529M        0B     96K             0B       529M\nbpool/BOOT/ubuntu_awq93l                   1,23G   529M     81,8M    447M             0B         0B\nbpool/BOOT/ubuntu_awq93l@autozsys_7718mv       -    80K         -       -              -          -\nbpool/BOOT/ubuntu_awq93l@autozsys_sslfo1       -    80K         -       -              -          -\nbpool/BOOT/ubuntu_awq93l@autozsys_4idbos       -    80K         -       -              -          -\nbpool/BOOT/ubuntu_awq93l@autozsys_6x3nsz       -    72K         -       -              -          -\nbpool/BOOT/ubuntu_awq93l@autozsys_6bkcck       -     0B         -       -              -          -\nbpool/BOOT/ubuntu_awq93l@autozsys_wafxbe       -     0B         -       -              -          -\n(...)\nrpool                                       281G   164G        0B    192K             0B       164G\nrpool/ROOT                                  281G  49,1G        0B    192K             0B      49,1G\nrpool/ROOT/ubuntu_awq93l                    281G  49,1G     2,58G   11,2G             0B      35,3G\nrpool/ROOT/ubuntu_awq93l/srv                281G   272K       80K    192K             0B         0B\n(...)\n")),(0,s.kt)("h2",{id:"snapshots"},"Snapshots"),(0,s.kt)("h3",{id:"tools"},"Tools"),(0,s.kt)("h4",{id:"ubuntu-zfs-auto-snapshot"},"Ubuntu ",(0,s.kt)("inlineCode",{parentName:"h4"},"zfs-auto-snapshot")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ apt-cache show zfs-auto-snapshot\nPackage: zfs-auto-snapshot\nArchitecture: all\nVersion: 1.2.4-2\nPriority: extra\nSection: multiverse/utils\nOrigin: Ubuntu\nMaintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>\nOriginal-Maintainer: Jonathan Carter <jcc@debian.org>\nBugs: https://bugs.launchpad.net/ubuntu/+filebug\nInstalled-Size: 41\nDepends: cron, zfsutils-linux\nFilename: pool/multiverse/z/zfs-auto-snapshot/zfs-auto-snapshot_1.2.4-2_all.deb\nSize: 8652\nMD5sum: 97ae5b7f86d15c41103e5874b2348699\nSHA1: e40530df79e5d4758ea19e34759c10d6f7ac2c95\nSHA256: 2fb1271116627b687e85ef40cc32a772b39c5e82ca5f9a6e687e92e97b67cae7\nHomepage: https://github.com/zfsonlinux/zfs-auto-snapshot\nDescription-en: ZFS automatic snapshot service\n Automatically create, rotate, and destroy periodic ZFS snapshots. This is\n the utility that creates the @zfs-auto-snap_frequent, @zfs-auto-snap_hourly,\n @zfs-auto-snap_daily, @zfs-auto-snap_weekly, and @zfs-auto-snap_monthly\n snapshots if it is installed.\n .\n This program is a posixly correct bourne shell script. It depends only on\n the zfs utilities and cron, and can run in the dash shell.\nDescription-md5: 50b5e87f01f77e852b84260e57dc2473\n")),(0,s.kt)("h5",{id:"install"},"Install"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"apt install zfs-auto-snapshot\n")),(0,s.kt)("h3",{id:"list-snapshots-standard"},"List snapshots (standard)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -t snapshot\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                USED  AVAIL     REFER  MOUNTPOINT\nbpool/BOOT/ubuntu_awq93l@autozsys_7718mv             80K      -      355M  -\nbpool/BOOT/ubuntu_awq93l@autozsys_sslfo1             80K      -      355M  -\nbpool/BOOT/ubuntu_awq93l@autozsys_4idbos             80K      -      355M  -\n(...)\nrpool/ROOT/ubuntu_awq93l/srv@autozsys_7718mv         80K      -      192K  -\nrpool/ROOT/ubuntu_awq93l/srv@autozsys_sslfo1          0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/srv@autozsys_4idbos          0B      -      192K  -\n(...)\nrpool/ROOT/ubuntu_awq93l/usr@autozsys_7718mv          0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/usr@autozsys_sslfo1          0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/usr@autozsys_4idbos                  \n(...)\nrpool/ROOT/ubuntu_awq93l/var/log@autozsys_wafxbe   1,12M      -      189M  -\nrpool/ROOT/ubuntu_awq93l/var/mail@autozsys_7718mv     0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/mail@autozsys_sslfo1     0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/mail@autozsys_4idbos     0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/mail@autozsys_6x3nsz     0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/mail@autozsys_6bkcck     0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/mail@autozsys_wafxbe     0B      -      192K  -\n(...)\nrpool/ROOT/ubuntu_awq93l/var/snap@autozsys_7718mv     0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/snap@autozsys_sslfo1     0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/snap@autozsys_4idbos     0B      -      192K  -\n(...)\nrpool/ROOT/ubuntu_awq93l/var/spool@autozsys_7718mv   92K      -      276K  -\nrpool/ROOT/ubuntu_awq93l/var/spool@autozsys_sslfo1   84K      -      276K  -\nrpool/ROOT/ubuntu_awq93l/var/spool@autozsys_4idbos   84K      -      276K  -\n(...)\nrpool/ROOT/ubuntu_awq93l/var/www@autozsys_7718mv      0B      -      192K  -\nrpool/ROOT/ubuntu_awq93l/var/www@autozsys_sslfo1      0B      -      192K  -\n(...)\n")),(0,s.kt)("h3",{id:"list-snapshots-detailed"},"List snapshots (detailed)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -t snapshot -o name,used,referenced,creation -s creation\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                                                                   USED     REFER  CREATION\nrpool/var/lib/docker/3e29124aabd26aba9a987fa9baf73a49d20fd093693c6e1702892592c3a37df0@823949492          8K     19,1M  s\xe1b may 22 14:24 2021\nrpool/var/lib/docker/ab44a150516267a349d9ec51eba4d5a4c62402e2984d1f976f9185f82457593d@346481945          0B     5,82M  s\xe1b may 22 14:24 2021\nrpool/var/lib/docker/c67ae3e336110d75a53dc55cd0d6ac9bfc9eb10c62bfb1acda5e82cec9d4f503@974426951          8K     19,1M  s\xe1b may 22 14:24 2021\nrpool/var/lib/docker/67bf0b89ec0abf78304fff424b3a5d839356e309a4ebc900991aa05082aae4e5-init@503730378     8K     74,4M  s\xe1b may 22 17:44 2021\nrpool/var/lib/docker/b88682c070dc9cb7fa79451620d9adb3281995dd1a547701f7e0ddffb5c71864@344154902          8K     74,4M  s\xe1b may 22 17:44 2021\nrpool/var/lib/docker/8b32028a0333569ade96213ad354021f246aad5577d6191fb907b597aebf8c6f@926970671          8K     28,7M  s\xe1b may 22 17:54 2021\nrpool/var/lib/docker/bc80234cff605bb8bd3959e7c707359286692afda5de90d2f02d19032d20cefa@63021450           8K     5,83M  s\xe1b may 22 17:54 2021\nrpool/var/lib/docker/df2e8b21e07f2b5f166477c3f965649c49042cc7c05ae5b5264963cb678edb9b@769644899          8K     28,7M  s\xe1b may 22 17:54 2021\nrpool/var/lib/docker/f13856143025fcd4b664d9df7e13ae7e0f4b6d5ad2b3127bb4121a857da5c562@259540872          8K     7,26M  s\xe1b may 22 17:54 2021\nrpool/var/lib/docker/b83cf8fb8f07d0b27025c294d6ac6962b82836c441620d489cc4dad1c5d5ccf2@376293604       2,44M     35,8M  s\xe1b may 22 17:54 2021\n")),(0,s.kt)("h3",{id:"delete-snapshots"},"Delete snapshots"),(0,s.kt)("h4",{id:"samples-1"},"Samples"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Delete last snapshot:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -H -t snapshot -o name -S creation -r bpool | tail -5 | xargs -n 1 zfs destroy\n")),(0,s.kt)("h4",{id:"references-1"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://techblog.jeppson.org/2018/03/zfs-delete-oldest-n-snapshots/"},"ZFS delete oldest n snapshots"))),(0,s.kt)("h2",{id:"list-pools"},"List pools"),(0,s.kt)("h3",{id:"user-data-pool"},"User data pool"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -r -t snapshot -o name,used,referenced,creation -s creation rpool/USERDATA\n")),(0,s.kt)("h3",{id:"boot-pool"},"Boot pool"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -r -t snapshot -o name,used,referenced,creation -s creation bpool/BOOT\n")),(0,s.kt)("h3",{id:"list-zfs-system-root-space"},"List ZFS System Root space"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -ro space rpool/ROOT\n")),(0,s.kt)("h3",{id:"list-zfs-bpool-boot-space"},"List ZFS bpool BOOT space"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -ro space bpool/BOOT\n")),(0,s.kt)("h3",{id:"list-zfs-userdata-space"},"List ZFS USERDATA space"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -ro space rpool/USERDATA\n")),(0,s.kt)("h3",{id:"list-zfs-varlibdocker-space"},"List ZFS /var/lib/docker space"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs list -ro space rpool/var/lib/docker\n")),(0,s.kt)("h2",{id:"get-read-and-write-stats-from-pool"},"Get read and write stats from pool"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zpool iostat {{ pool_name }} {{ refresh_time_in_seconds }}\n")),(0,s.kt)("h2",{id:"states"},"States"),(0,s.kt)("h3",{id:"remove-user-state"},"Remove user state"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ zsysctl show --full |grep r48a3r\n$ zsysctl state remove r48a3r\nrpool/USERDATA/sdelrio_0y06wn@autozsys_r48a3r will be detached from system state rpool/ROOT/ubuntu_awq93l@autozsys_r48a3r\n")),(0,s.kt)("h3",{id:"remove-system-wide-state"},"Remove system wide state"),(0,s.kt)("p",null,"Whole system removing adding ",(0,s.kt)("inlineCode",{parentName:"p"},"--system")," (",(0,s.kt)("inlineCode",{parentName:"p"},"/boot")," included)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo zsysctl state remove r48a3r --system\n")),(0,s.kt)("h3",{id:"user-state-without-any-dependency-but-linked-to-a-system-state"},"User State without any dependency but linked to a system state"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ zsysctl state remove rpool/USERDATA/didrocks_e2jj0s@autozsys_iynia9\nrpool/USERDATA/didrocks_e2jj0s@autozsys_iynia9 will be detached from system state rpool/ROOT/ubuntu_qiq15o@autozsys_iynia9\n\nWould you like to proceed [y/N]? y\n")),(0,s.kt)("h2",{id:"encryption"},"Encryption"),(0,s.kt)("h3",{id:"create-and-load-key"},"Create and load-key"),(0,s.kt)("p",null,"Sample, create a vol with compression, encryption, and dedup."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"zpool create -o ashift=12 -m /mnt/zfs zfs raidz sdb sdc sde\nzfs set compression=lz4 zfs\nzfs set xattr=sa zfs\nzfs set atime=off zfs\nzfs set dedup=on zfs\nzfs set recordsize=1M zfs\nzfs create -o encryption=aes-256-gcm -o keyformat=passphrase -o keylocation=file:///boot/config/zfs.key zfs/homes\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"zfs load-key zfs/homes\n")),(0,s.kt)("h3",{id:"key-status"},"Key status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"zfs get keystatus <dataset>\n")),(0,s.kt)("h3",{id:"changing-wrapping-key"},"Changing wrapping key"),(0,s.kt)("p",null,"Change a wrapping key for a dataset as long as current wrapping key is loaded (",(0,s.kt)("inlineCode",{parentName:"p"},"zfs get keystatus <dataset>"),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs key -c <dataset>\n")),(0,s.kt)("h3",{id:"change-actual-data-encryption-key"},"Change actual data encryption key"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs key -K <dataset>\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/zfs/comments/7mm237/changing_passphrase_on_encrypted_zpool/"},"Changing passphrase on encrypted zpool"))),(0,s.kt)("h3",{id:"change-key-location"},"Change key location"),(0,s.kt)("p",null,"You can use password prompt as the encryption key unlocking method.\nAnd it can be godo good. But if want to automate this, you can put the key to be read from USB drive."),(0,s.kt)("p",null,"To do that one can simply prepare a new key and point the pool toward it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"dd if=/dev/urandom of=/usb/key.dat bs=32 count=1\n\nzfs change-key -o keylocation=file:///usb/key.dat -o keyformat=raw pool-name\n")),(0,s.kt)("p",null,"To rollback to password prompt:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs change-key -o keylocation=prompt -o keyformat=passphrase pool-name\n")),(0,s.kt)("h3",{id:"encrypted-root"},"Encrypted Root"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.medo64.com/2020/07/encrypted-zfs-root-on-ubuntu-server-20-04-via-usb-unlock/"},"Encypted ZFS Root with USB Unlock"))),(0,s.kt)("h2",{id:"sharing-zfs-datasets"},"Sharing ZFS Datasets"),(0,s.kt)("h3",{id:"nfs"},"NFS"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Install ",(0,s.kt)("inlineCode",{parentName:"li"},"nfs-kernel-server"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y nfs-kernel-server\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Enable ",(0,s.kt)("inlineCode",{parentName:"li"},"sharenfs")," on the dataset")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zfs set sharenfs=on pool-name/dataset-name\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Now you can mount in your NFS client")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mount -t nfs \\\nzfs.host.com:/pool-name/dataset-name \\\n/path/to/local/mount\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://blog.programster.org/sharing-zfs-datasets-via-nfs"},"Sharing ZFS Dataset via NFS"))),(0,s.kt)("h2",{id:"comression"},"Comression"),(0,s.kt)("h3",{id:"speed-benchmarks"},"Speed benchmarks"),(0,s.kt)("p",null,"Since LZ4 is the fastest decompression depending on the usage we may be internested in another other method or compression level:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Zstd and LZ4: ",(0,s.kt)("a",{parentName:"li",href:"https://indico.fnal.gov/event/16264/contributions/36466/attachments/22610/28037/Zstd__LZ4.pdf"},"https://indico.fnal.gov/event/16264/contributions/36466/attachments/22610/28037/Zstd__LZ4.pdf"))),(0,s.kt)("h2",{id:"ui"},"UI"),(0,s.kt)("h3",{id:"cockpit"},"Cockpit"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"apt install cockpit\n")),(0,s.kt)("h2",{id:"backup"},"Backup"),(0,s.kt)("h3",{id:"pyznap"},"Pyznap"),(0,s.kt)("p",null,"ZFS snapshot tool written in python"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"pyznap")," is a ZFS snapshot management tool. It automatically takes and deletes snapshots and can send them to different backup locations. You can specify a policy for a given filesystem in the ",(0,s.kt)("inlineCode",{parentName:"p"},"pyznap.conf")," file and then use cron to let it run regularly."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/yboetz/pyznap"},"GitHub"))),(0,s.kt)("h3",{id:"zfsbackup-go"},"ZFSbackup-go"),(0,s.kt)("p",null,"Backup ZFS snapshots to cloud storage such as Google, Amazon, Azure, etc. Built with the enterprise in mind."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/someone1/zfsbackup-go"},"GitHub"))),(0,s.kt)("h3",{id:"zrepl"},"Zrepl"),(0,s.kt)("p",null,"One-stop ZFS backup & replication solution"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/zrepl/zrepl"},"GitHub")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://zrepl.github.io0"},"Doc"))),(0,s.kt)("h3",{id:"docker"},"Docker"),(0,s.kt)("p",null,"Docker sometimes have overlay fs issues when using ZFS as volume storage, for example in k3s or k3d, you can override the docker volume to use zfs mounting a volume in ext4:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ zfs create -s -V 50GB rpool/ROOT/docker\n$ mkfs.ext4 /dev/zvol/rpool/ROOT/docker \n$ echo "/dev/zvol/rpool/ROOT/docker /var/lib/docker ext4 defaults 0 0" >> /etc/fstab\n')),(0,s.kt)("p",null,"References:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/issues/1688#issuecomment-619570374"},"https://github.com/k3s-io/k3s/issues/1688#issuecomment-619570374")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.enricobassetti.it/2022/02/k3s-zfs-cgroups-v2/"},"https://www.enricobassetti.it/2022/02/k3s-zfs-cgroups-v2/"))),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://blog.programster.org/zfs-cheatsheet"},"ZFS-Cheatsheet")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://wiki.debian.org/ZFS#Provisioning_file_systems_or_volume"},"Debian Wiki"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://wiki.debian.org/ZFS#Provisioning_file_systems_or_volume"},"Provision filesystem or volume (ZVOL)")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://linuxconfig.org/configuring-zfs-on-ubuntu-20-04"},"Configure ZFS on Ubuntu 20.04")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=l-iu-cutkyQ"},"2020: Video - Running Ubuntu 20.04 on ZFS")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://openzfs.github.io/openzfs-docs/Getting%20Started/Ubuntu/Ubuntu%2020.04%20Root%20on%20ZFS.html"},"Ubuntu 20.04 Root on ZFS")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://linsomniac.gitlab.io/post/2020-04-09-ubuntu-2004-encrypted-zfs/"},"Encrypting ZFS on Ubuntu 20.04")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"zsys"},"Zsys")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://zfsonlinux.org/"},"ZFS on linux ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://zfsguru.com/"},"FreeBSD ZFS guru")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://forums.unraid.net/topic/41333-zfs-plugin-for-unraid/"},"ZFS Plugin for Unraid")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://sysops.tv/?page_id=28"},"NAS with ZFS on RAspberry Pi 4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://rudd-o.com/linux-and-free-software/tip-letting-your-zfs-pool-sleep"},"Letting your ZFS pool sleep")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.medo64.com/2020/12/changing-zfs-key-location/"},"Changing ZFS Key Location"))))}c.isMDXComponent=!0}}]);