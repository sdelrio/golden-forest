"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[7370],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92660:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var n=r(83117),a=(r(67294),r(3905));const o={sidebar_position:1},i="Contributing",u={unversionedId:"tutorial-intro",id:"tutorial-intro",title:"Contributing",description:"This page is done using Docusaurus. There are many articles about it and a very good officiali documentaion:",source:"@site/tutorial/tutorial-intro.md",sourceDirName:".",slug:"/tutorial-intro",permalink:"/tutorial/tutorial-intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Create a Page",permalink:"/tutorial/tutorial-basics/create-a-page"}},l={},s=[{value:"Start",id:"start",level:2},{value:"Makefile",id:"makefile",level:3},{value:"Develop server",id:"develop-server",level:3}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"This page is done using ",(0,a.kt)("strong",{parentName:"p"},"Docusaurus"),". There are many articles about it and a very good officiali documentaion:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/"},"https://docusaurus.io/docs/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.logrocket.com/easy-documentation-with-docusaurus/"},"https://blog.logrocket.com/easy-documentation-with-docusaurus/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.google.com/search?q=docusaurus+draw+svg"},"https://www.google.com/search?q=docusaurus+draw+svg"))),(0,a.kt)("h2",{id:"start"},"Start"),(0,a.kt)("p",null,"This site is already initialized with docusaurus, it should be already plug-and-play. You can"),(0,a.kt)("p",null,"If you want to create another site with this ",(0,a.kt)("strong",{parentName:"p"},"Docusaurus")," technology you can visit ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.new"},"docusaurus.new"),"."),(0,a.kt)("h3",{id:"makefile"},"Makefile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ make\nUsage: make [TARGET ...]\n\nhelp                 Show this help menu.\nstart                Docusaurus start develop server\n")),(0,a.kt)("h3",{id:"develop-server"},"Develop server"),(0,a.kt)("p",null,"Go inside your cloned directory and ",(0,a.kt)("inlineCode",{parentName:"p"},"make start")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nmake start\n")),(0,a.kt)("p",null,"A web server will start on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),". After this your default browser will open that URL."),(0,a.kt)("p",null,"Edit some file like ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," and edit some lines, then the page wih ",(0,a.kt)("strong",{parentName:"p"},"automatically reloads")," and you will see the changes in the browser."))}p.isMDXComponent=!0}}]);