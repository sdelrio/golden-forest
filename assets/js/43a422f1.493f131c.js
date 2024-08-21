"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[3912],{61252:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>o});var c=t(87462),s=(t(67294),t(3905));t(61839);const n={},l="Bcache SSD caching",r={unversionedId:"OS/GNU-Linux/HDs/ssd-cache",id:"OS/GNU-Linux/HDs/ssd-cache",title:"Bcache SSD caching",description:"Bcache Sample",source:"@site/docs/OS/GNU-Linux/HDs/ssd-cache.md",sourceDirName:"OS/GNU-Linux/HDs",slug:"/OS/GNU-Linux/HDs/ssd-cache",permalink:"/docs/OS/GNU-Linux/HDs/ssd-cache",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/HDs/ssd-cache.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spin Down HDs",permalink:"/docs/OS/GNU-Linux/HDs/spin-down"},next:{title:"7-Zip",permalink:"/docs/OS/GNU-Linux/Hardware/CPU/Benchmarks/7zip"}},i={},o=[{value:"Bcache Sample",id:"bcache-sample",level:2},{value:"Create virtual block device",id:"create-virtual-block-device",level:2},{value:"Reference",id:"reference",level:2}],d={toc:o},u="wrapper";function p(e){let{components:a,...t}=e;return(0,s.kt)(u,(0,c.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"bcache-ssd-caching"},"Bcache SSD caching"),(0,s.kt)("h2",{id:"bcache-sample"},"Bcache Sample"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Install Bcache")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pt install bcache-tools\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Cleanup device")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dd if=/dev/zero if=/dev/sda6 bs=512 count=8\nwipefs -a /dev/sda6\nsudo dd if=/dev/zero if=/dev/sdb1 bs=512 count=8\nwipefs -a /dev/sdb1\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Create and register device")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"make-bcache -B /dev/sda6\nmake-bcache -C /dev/sdb1\n")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Format drives")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mkfs.ext4 /dev/sda6\nmkfs.ext4 /dev/sdb1\n")),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"Attach device")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# ls /sys/fs/bcache/\n9b1e7bf9-a97a-4785-bacb-0b17189adc08  register  register_quiet\n# echo 9b1e7bf9-a97a-4785-bacb-0b17189adc08 > /sys/block/bcache0/bcache/attach\n")),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},"Check bcache status")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# lsblk\n")),(0,s.kt)("h2",{id:"create-virtual-block-device"},"Create virtual block device"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# create a 100M file in /opt\ndd if=/dev/zero of=/opt/dev0-backstore bs=1M count=100\n\n# create the loopback block device\n# where 7 is the major number of loop device driver, grep loop /proc/devices\nmknod /dev/fake-dev0 b 7 200\n\nlosetup /dev/fake-dev0  /opt/dev0-backstore\n")),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://cinhtau.net/2015/08/05/ssd-caching-with-bcache-for-linux/"},"https://cinhtau.net/2015/08/05/ssd-caching-with-bcache-for-linux/")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/546921/how-to-create-virtual-block-devices"},"https://askubuntu.com/questions/546921/how-to-create-virtual-block-devices"))))}p.isMDXComponent=!0}}]);