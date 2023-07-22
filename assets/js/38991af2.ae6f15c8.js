"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[3559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(83117),o=(n(67294),n(3905));const a={title:"PXE boot",date:20230722,author:"sdelrio",tags:["pxe","netboot.xyz","iVentoy","MaaS","Ironic"]},i="PXE",l={unversionedId:"OS/GNU-Linux/PXE",id:"OS/GNU-Linux/PXE",title:"PXE boot",description:"DIY Manual way",source:"@site/docs/OS/GNU-Linux/PXE.md",sourceDirName:"OS/GNU-Linux",slug:"/OS/GNU-Linux/PXE",permalink:"/docs/OS/GNU-Linux/PXE",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/PXE.md",tags:[{label:"pxe",permalink:"/docs/tags/pxe"},{label:"netboot.xyz",permalink:"/docs/tags/netboot-xyz"},{label:"iVentoy",permalink:"/docs/tags/i-ventoy"},{label:"MaaS",permalink:"/docs/tags/maa-s"},{label:"Ironic",permalink:"/docs/tags/ironic"}],version:"current",frontMatter:{title:"PXE boot",date:20230722,author:"sdelrio",tags:["pxe","netboot.xyz","iVentoy","MaaS","Ironic"]},sidebar:"tutorialSidebar",previous:{title:"Traceroute",permalink:"/docs/OS/GNU-Linux/Networking/traceroute"},next:{title:"ZFS",permalink:"/docs/OS/GNU-Linux/ZFS/"}},s={},p=[{value:"DIY Manual way",id:"diy-manual-way",level:2},{value:"PXE Tools",id:"pxe-tools",level:2},{value:"Simple solutions",id:"simple-solutions",level:2},{value:"iVentoy",id:"iventoy",level:3},{value:"Netboot.xyz",id:"netbootxyz",level:3},{value:"Enterprise grade solutions",id:"enterprise-grade-solutions",level:2},{value:"MaaS",id:"maas",level:3},{value:"OpenStack Ironic",id:"openstack-ironic",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pxe"},"PXE"),(0,o.kt)("h2",{id:"diy-manual-way"},"DIY Manual way"),(0,o.kt)("p",null,"Is pretty hard doing the manual way, the tests are pretty slow, when some letter is missing in the config files most of the case there is no error. So an already existing tool is usually easy."),(0,o.kt)("p",null,"Basically you need a:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DHCP server with option 66."),(0,o.kt)("li",{parentName:"ul"},"tftp serve to serve the PXE files."),(0,o.kt)("li",{parentName:"ul"},"http server to serve the images."),(0,o.kt)("li",{parentName:"ul"},"operative system configuration file depending on your OS option.")),(0,o.kt)("p",null,"Sample with ansible:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sdelrio/home-pxe"},"https://github.com/sdelrio/home-pxe"))),(0,o.kt)("h2",{id:"pxe-tools"},"PXE Tools"),(0,o.kt)("h2",{id:"simple-solutions"},"Simple solutions"),(0,o.kt)("h3",{id:"iventoy"},(0,o.kt)("a",{parentName:"h3",href:"https://www.iventoy.com/en/in%C2%BAdex.html"},"iVentoy")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.iventoy.com/en/doc_start.html"},"Simple to use")),(0,o.kt)("li",{parentName:"ul"},"Cross platform Windows and Linux. "),(0,o.kt)("li",{parentName:"ul"},"Boot menu for Legacy & UEFI"),(0,o.kt)("li",{parentName:"ul"},"Solve the driver missing during Linux installation.")),(0,o.kt)("h3",{id:"netbootxyz"},(0,o.kt)("a",{parentName:"h3",href:"https://netboot.xyz/"},"Netboot.xyz")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simple to use, based on iPXE project"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://netboot.xyz/docs/selfhosting"},"Self Host"))),(0,o.kt)("h2",{id:"enterprise-grade-solutions"},"Enterprise grade solutions"),(0,o.kt)("h3",{id:"maas"},(0,o.kt)("a",{parentName:"h3",href:"https://maas.io/"},"MaaS")),(0,o.kt)("p",null,"Metal as a Service"),(0,o.kt)("h3",{id:"openstack-ironic"},(0,o.kt)("a",{parentName:"h3",href:"https://ironicbaremetal.org/"},"OpenStack Ironic")),(0,o.kt)("p",null,"Bare Metal as a Service"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://clouddocs.web.cern.ch/advanced_topics/pxe_booting_vms.html"},"https://clouddocs.web.cern.ch/advanced_topics/pxe_booting_vms.html"))))}c.isMDXComponent=!0}}]);