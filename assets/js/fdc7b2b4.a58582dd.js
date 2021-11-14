"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[6339],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7430:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={},c="Duplicati",u={unversionedId:"Software/Backup/duplicati",id:"Software/Backup/duplicati",isDocsHomePage:!1,title:"Duplicati",description:"Backup solution for workstations. Store securily encrypted backups in the cloud.",source:"@site/docs/Software/Backup/duplicati.md",sourceDirName:"Software/Backup",slug:"/Software/Backup/duplicati",permalink:"/docs/Software/Backup/duplicati",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Software/Backup/duplicati.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Oh my Zsh",permalink:"/docs/Shell-Script/zsh/oh-my-zsh"},next:{title:"Syncthing",permalink:"/docs/Software/FileSync/syncthing"}},p=[{value:"OS",id:"os",children:[],level:2},{value:"Backends",id:"backends",children:[],level:2},{value:"References",id:"references",children:[],level:2}],s={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"duplicati"},"Duplicati"),(0,i.kt)("p",null,"Backup solution for workstations. Store securily encrypted backups in the cloud."),(0,i.kt)("h2",{id:"os"},"OS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows"),(0,i.kt)("li",{parentName:"ul"},"macOS"),(0,i.kt)("li",{parentName:"ul"},"Debian/Ubuntu"),(0,i.kt)("li",{parentName:"ul"},"Fedora/Redhat"),(0,i.kt)("li",{parentName:"ul"},"Synology")),(0,i.kt)("h2",{id:"backends"},(0,i.kt)("a",{parentName:"h2",href:"https://duplicati.readthedocs.io/en/latest/01-introduction/#supported-backends"},"Backends")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FTP"),(0,i.kt)("li",{parentName:"ul"},"SSH"),(0,i.kt)("li",{parentName:"ul"},"WebDav"),(0,i.kt)("li",{parentName:"ul"},"Backblaze B2"),(0,i.kt)("li",{parentName:"ul"},"Tardigrade"),(0,i.kt)("li",{parentName:"ul"},"OneDrive"),(0,i.kt)("li",{parentName:"ul"},"Amazon S3"),(0,i.kt)("li",{parentName:"ul"},"Google Drive"),(0,i.kt)("li",{parentName:"ul"},"box.com"),(0,i.kt)("li",{parentName:"ul"},"Mega"),(0,i.kt)("li",{parentName:"ul"},"hubiC")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://b3n.org/switched-to-duplicati-for-windows-backups-and-restic-for-linux-servers/"},"https://b3n.org/switched-to-duplicati-for-windows-backups-and-restic-for-linux-servers/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.duplicati.com/"},"Homepage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/duplicati/duplicati"},"GitHub"))))}d.isMDXComponent=!0}}]);