"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[7130],{44103:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=o(87462),i=(o(67294),o(3905));o(61839);const r={},s="Windows MBR repair",d={unversionedId:"OS/Windows/windows-mbr",id:"OS/Windows/windows-mbr",title:"Windows MBR repair",description:"F8 on boot menu or if it doesn't even boot use Windows USB boot install and on install windows click Repair on the bottom left of the dialog. You will get a menu with three options:",source:"@site/docs/OS/Windows/windows-mbr.md",sourceDirName:"OS/Windows",slug:"/OS/Windows/windows-mbr",permalink:"/docs/OS/Windows/windows-mbr",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/Windows/windows-mbr.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Robocopy",permalink:"/docs/OS/Windows/robocopy"},next:{title:"NFS mount on Windows",permalink:"/docs/OS/Windows/windows-nfs"}},a={},l=[{value:"UEFI repair",id:"uefi-repair",level:2},{value:"Convert MBR to GPT",id:"convert-mbr-to-gpt",level:2}],p={toc:l},w="wrapper";function m(t){let{components:e,...r}=t;return(0,i.kt)(w,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"windows-mbr-repair"},"Windows MBR repair"),(0,i.kt)("p",null,"F8 on boot menu or if it doesn't even boot use Windows USB boot install and on install windows click ",(0,i.kt)("em",{parentName:"p"},"Repair")," on the bottom left of the dialog. You will get a menu with three options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Continue"),(0,i.kt)("li",{parentName:"ul"},"Solve problems (press here)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Advanced options (press here)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"System symbol (press here)"))))),(0,i.kt)("li",{parentName:"ul"},"Shutdown")),(0,i.kt)("p",null,"Now we have a terminal, execute this commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bootrec /fixmbr\nbootrec /fixboot\nbcdedit /export c:\\bcdbackup\nattrib c:\\boot\\bcd -h -r -s\nren c:\\boot\\bcd bcd.old\nbootrec /rebuildbcd\nexit\n")),(0,i.kt)("p",null,"Write yes when you get question on ",(0,i.kt)("inlineCode",{parentName:"p"},"bootrec")," command."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Windows terminal",src:o(79524).Z,width:"630",height:"480"})),(0,i.kt)("p",null,"Press ",(0,i.kt)("inlineCode",{parentName:"p"},"continue")," option after exit from the terminal."),(0,i.kt)("h2",{id:"uefi-repair"},"UEFI repair"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bcdboot D:\\windows /s C: /f UEFI\n")),(0,i.kt)("h2",{id:"convert-mbr-to-gpt"},"Convert MBR to GPT"),(0,i.kt)("p",null,"Here we will show you how to convert MBR to GPT without data loss in Windows 10, 8, 7. Three different ways will be shared."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bcdboot G:\\Windows /s G: /f BIOS\n\nbcdboot G:\\Windows /s G: /f UEFI\n\nbcdboot G:\\Windows /s G: /f ALL\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.diskpart.com/gpt-mbr/convert-mbr-to-gpt-without-data-loss.html"},"How to Convert MBR to GPT without Data Loss in Windows 10, 8, 7?")))}m.isMDXComponent=!0},79524:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/windows-mbr-0b43aca61f489005c1c3987357d51747.png"}}]);