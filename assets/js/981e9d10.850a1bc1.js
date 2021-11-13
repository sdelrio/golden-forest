"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[5738],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),b=p(t),m=i,d=b["".concat(l,".").concat(m)]||b[m]||c[m]||o;return t?n.createElement(d,s(s({ref:r},u),{},{components:t})):n.createElement(d,s({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=b;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},9673:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return b}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),s=["components"],a={},l="Kubernetes on Pi",p={unversionedId:"HomeLab/Raspberry-Pi/kubernetes-pi",id:"HomeLab/Raspberry-Pi/kubernetes-pi",isDocsHomePage:!1,title:"Kubernetes on Pi",description:"Five years of Raspberry Pi clusters",source:"@site/docs/HomeLab/Raspberry-Pi/kubernetes-pi.md",sourceDirName:"HomeLab/Raspberry-Pi",slug:"/HomeLab/Raspberry-Pi/kubernetes-pi",permalink:"/docs/HomeLab/Raspberry-Pi/kubernetes-pi",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/HomeLab/Raspberry-Pi/kubernetes-pi.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UPS",permalink:"/docs/Hardware/UPS/ups"},next:{title:"Netbooting Raspberry Pi",permalink:"/docs/HomeLab/Raspberry-Pi/netboot-pi"}},u=[{value:"Five years of Raspberry Pi clusters",id:"five-years-of-raspberry-pi-clusters",children:[{value:"2020",id:"2020",children:[],level:3}],level:2},{value:"k3sup",id:"k3sup",children:[],level:2},{value:"Live walkthrough - Raspberry Pi 4 with Kubernetes (k3s)",id:"live-walkthrough---raspberry-pi-4-with-kubernetes-k3s",children:[],level:2},{value:"Cross building ARM images on Docker Desktop",id:"cross-building-arm-images-on-docker-desktop",children:[],level:2}],c={toc:u};function b(e){var r=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubernetes-on-pi"},"Kubernetes on Pi"),(0,o.kt)("h2",{id:"five-years-of-raspberry-pi-clusters"},"Five years of Raspberry Pi clusters"),(0,o.kt)("h3",{id:"2020"},"2020"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.raspberrypi.com/news/five-years-of-raspberry-pi-clusters/"},"https://www.raspberrypi.com/news/five-years-of-raspberry-pi-clusters/"))),(0,o.kt)("h2",{id:"k3sup"},"k3sup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sysadmins.co.za/provision-k3s-on-the-fly-with-k3sup/"},"https://sysadmins.co.za/provision-k3s-on-the-fly-with-k3sup/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alexellis/k3sup"},"https://github.com/alexellis/k3sup"))),(0,o.kt)("h2",{id:"live-walkthrough---raspberry-pi-4-with-kubernetes-k3s"},"Live walkthrough - Raspberry Pi 4 with Kubernetes (k3s)"),(0,o.kt)("p",null,"Live walkthrough with my brand new Raspberry Pi 4s, I show you how to install Kubernetes (k3s) to create a cluster and then how to deploy OpenFaaS."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=DjpVtNjiXSU"},"https://www.youtube.com/watch?v=DjpVtNjiXSU"))),(0,o.kt)("h2",{id:"cross-building-arm-images-on-docker-desktop"},"Cross building ARM images on Docker Desktop"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://carlosedp.medium.com/cross-building-arm64-images-on-docker-desktop-254d1e0bc1f9"},"https://carlosedp.medium.com/cross-building-arm64-images-on-docker-desktop-254d1e0bc1f9"))))}b.isMDXComponent=!0}}]);