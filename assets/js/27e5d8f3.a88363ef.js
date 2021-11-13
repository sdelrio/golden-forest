"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[7902],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3685:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],l={title:"Robocopy",author:"sdelrio",date:20211106,tags:["robocopy","windows","rsync"]},s="Robocopy",c={unversionedId:"OS/Windows/robocopy",id:"OS/Windows/robocopy",isDocsHomePage:!1,title:"Robocopy",description:"When you need to transfer a lot of files, even over the network, use Robocopy on Windows 10 to copy files very fast. It could be the rsync equivalent on windows.",source:"@site/docs/OS/Windows/robocopy.md",sourceDirName:"OS/Windows",slug:"/OS/Windows/robocopy",permalink:"/docs/OS/Windows/robocopy",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/Windows/robocopy.md",tags:[{label:"robocopy",permalink:"/docs/tags/robocopy"},{label:"windows",permalink:"/docs/tags/windows"},{label:"rsync",permalink:"/docs/tags/rsync"}],version:"current",frontMatter:{title:"Robocopy",author:"sdelrio",date:20211106,tags:["robocopy","windows","rsync"]},sidebar:"tutorialSidebar",previous:{title:"Corsair on Ryzen",permalink:"/docs/OS/GNU-Linux/Hardware/Memory/Overclock/oc-corsair"},next:{title:"Windows SSD",permalink:"/docs/OS/Windows/windows-ssd"}},p=[{value:"Parameters",id:"parameters",children:[],level:2},{value:"Samples",id:"samples",children:[{value:"Copy from drive to drive",id:"copy-from-drive-to-drive",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],d={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"robocopy"},"Robocopy"),(0,i.kt)("p",null,"When you need to transfer a lot of files, even over the network, use Robocopy on Windows 10 to copy files very fast. It could be the ",(0,i.kt)("inlineCode",{parentName:"p"},"rsync")," equivalent on windows."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/S")," Copy subdirectories, but not empty ones."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/E")," Copy Subdirectories, including empty ones."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/Z")," Copy files in restartable mode."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/ZB")," Uses restartable mode. If access is denied, use backup mode."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/R:5")," Retry 5 times (you can specify a different number, the default is 1 million)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/W:5")," Wait 5 seconds before retrying (you can specify a different number, the default is 30 seconds)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/TBD")," Wait for share names To Be Defined (retry error 67)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/NP")," No Progress \u2013 don\u2019t display percentage copied."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/V")," Produce verbose output, showing skipped files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/MT:16")," Do multithreaded copies with n threads (default is 8).")),(0,i.kt)("p",null,"Here's some samples on how to do it. "),(0,i.kt)("h2",{id:"samples"},"Samples"),(0,i.kt)("h3",{id:"copy-from-drive-to-drive"},"Copy from drive to drive"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bat"},'robocopy "D:\\MY-FOLDER" "E:\\BACKUP-FOLDER" /E /V /XO /NP /R:10 /W:30 /purge /MT:16\n')),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pureinfotech.com/robocopy-transfer-files-fast-network-windows-10/"},"https://pureinfotech.com/robocopy-transfer-files-fast-network-windows-10/"))))}u.isMDXComponent=!0}}]);