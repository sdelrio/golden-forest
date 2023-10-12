"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[7902],{3685:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(7462),n=(t(7294),t(3905));t(1839);const i={title:"Robocopy",author:"sdelrio",date:20211106,tags:["robocopy","windows","rsync"]},s="Robocopy",a={unversionedId:"OS/Windows/robocopy",id:"OS/Windows/robocopy",title:"Robocopy",description:"When you need to transfer a lot of files, even over the network, use Robocopy on Windows 10 to copy files very fast. It could be the rsync equivalent on windows.",source:"@site/docs/OS/Windows/robocopy.md",sourceDirName:"OS/Windows",slug:"/OS/Windows/robocopy",permalink:"/docs/OS/Windows/robocopy",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/Windows/robocopy.md",tags:[{label:"robocopy",permalink:"/docs/tags/robocopy"},{label:"windows",permalink:"/docs/tags/windows"},{label:"rsync",permalink:"/docs/tags/rsync"}],version:"current",frontMatter:{title:"Robocopy",author:"sdelrio",date:20211106,tags:["robocopy","windows","rsync"]},sidebar:"tutorialSidebar",previous:{title:"Windows 10 generic keys",permalink:"/docs/OS/Windows/generic-keys"},next:{title:"Windows MBR repair",permalink:"/docs/OS/Windows/windows-mbr"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Samples",id:"samples",level:2},{value:"Copy from drive to drive",id:"copy-from-drive-to-drive",level:3},{value:"References",id:"references",level:2}],p={toc:d},c="wrapper";function m(e){let{components:o,...t}=e;return(0,n.kt)(c,(0,r.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"robocopy"},"Robocopy"),(0,n.kt)("p",null,"When you need to transfer a lot of files, even over the network, use Robocopy on Windows 10 to copy files very fast. It could be the ",(0,n.kt)("inlineCode",{parentName:"p"},"rsync")," equivalent on windows."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/S")," Copy subdirectories, but not empty ones."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/E")," Copy Subdirectories, including empty ones."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/Z")," Copy files in restartable mode."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/ZB")," Uses restartable mode. If access is denied, use backup mode."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/R:5")," Retry 5 times (you can specify a different number, the default is 1 million)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/W:5")," Wait 5 seconds before retrying (you can specify a different number, the default is 30 seconds)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/TBD")," Wait for share names To Be Defined (retry error 67)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/NP")," No Progress \u2013 don\u2019t display percentage copied."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/V")," Produce verbose output, showing skipped files."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/MT:16")," Do multithreaded copies with n threads (default is 8).")),(0,n.kt)("p",null,"Here's some samples on how to do it. "),(0,n.kt)("h2",{id:"samples"},"Samples"),(0,n.kt)("h3",{id:"copy-from-drive-to-drive"},"Copy from drive to drive"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bat"},'robocopy "D:\\MY-FOLDER" "E:\\BACKUP-FOLDER" /E /V /XO /NP /R:10 /W:30 /purge /MT:16\n')),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pureinfotech.com/robocopy-transfer-files-fast-network-windows-10/"},"https://pureinfotech.com/robocopy-transfer-files-fast-network-windows-10/"))))}m.isMDXComponent=!0}}]);