"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[5609],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99770:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],l={},c="Docker build multi-platform",u={unversionedId:"Containers/Docker/docker-multi-platform-build",id:"Containers/Docker/docker-multi-platform-build",title:"Docker build multi-platform",description:"How it works?",source:"@site/docs/Containers/Docker/docker-multi-platform-build.md",sourceDirName:"Containers/Docker",slug:"/Containers/Docker/docker-multi-platform-build",permalink:"/docs/Containers/Docker/docker-multi-platform-build",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Containers/Docker/docker-multi-platform-build.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker Desktop for mac",permalink:"/docs/Containers/Docker/docker-mac"},next:{title:"Docker Hub Rate Limits",permalink:"/docs/Containers/Docker/docker-rate-limit"}},s=[{value:"How it works?",id:"how-it-works",children:[],level:2},{value:"Stages",id:"stages",children:[{value:"Stage 1: ARM",id:"stage-1-arm",children:[],level:3},{value:"Stage 2: x86",id:"stage-2-x86",children:[],level:3}],level:2}],p={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"docker-build-multi-platform"},"Docker build multi-platform"),(0,i.kt)("h2",{id:"how-it-works"},"How it works?"),(0,i.kt)("p",null,"The easiest way to use multi-platform functionality in Docker is to invoke it from the command line.\nUsing the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker buildx"),", we can tap into new beta functionalities."),(0,i.kt)("p",null,"By running docker `",(0,i.kt)("inlineCode",{parentName:"p"},"buildx build --platform linux/arm/v7 -t arm-build"),". This command builds the docker image as per the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the current directory using ARMv7 emulation. Behind the scenes, Docker runs the whole Docker build process in a QEMU virtualized environment (qemu-user-static to be precise). By doing this, the complexity of setting up a custom VM is removed. Once built, we can even use ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," to launch containers in ARMv7 mode automagically."),(0,i.kt)("h2",{id:"stages"},"Stages"),(0,i.kt)("h3",{id:"stage-1-arm"},"Stage 1: ARM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FROM --platform=linux/arm/v7 balenalib/rpi-raspbian:buster as builder\n")),(0,i.kt)("p",null,"This part is running using QEMU"),(0,i.kt)("h3",{id:"stage-2-x86"},"Stage 2: x86"),(0,i.kt)("p",null,"Once we installed our dependencies we can switch to native x86 arch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FROM --platform=linux/amd64 debian:buster\n")),(0,i.kt)("p",null,"After we have switched over to x86, we can copy files from the previous step. We do this in order to create a sysroot that we can use for Qt. We complete this step by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RUN mkdir -p /sysroot/usr /sysroot/opt /sysroot/lib\nCOPY --from=builder /lib/ /sysroot/lib/\nCOPY --from=builder /usr/include/ /sysroot/usr/include/\nCOPY --from=builder /usr/lib/ /sysroot/usr/lib/\nCOPY --from=builder /opt/vc/ sysroot/opt/vc/\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com/blog/compiling-qt-with-docker-multi-stage-and-multi-platform/"},"Compiling Qt with Docker multi-stage and multi-platform"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Screenly/screenly-ose/blob/master/webview/Dockerfile"},"Dockerfile for QT multi-stage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Screenly/screenly-ose/blob/master/webview/build_qt5.sh"},"build QT script")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://daniel-dc.medium.com/build-a-multi-arch-docker-image-with-vagrant-d903355dace5"},"Build a multi-architecture docker image with Vagrant"))))}m.isMDXComponent=!0}}]);