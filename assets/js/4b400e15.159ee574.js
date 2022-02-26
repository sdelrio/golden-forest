"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[2131],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20938:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={},l="containerd",s={unversionedId:"Containers/CRI/containerd",id:"Containers/CRI/containerd",title:"containerd",description:"Standar container runtime, best replacement for docker in k8s since v1.20",source:"@site/docs/Containers/CRI/containerd.md",sourceDirName:"Containers/CRI",slug:"/Containers/CRI/containerd",permalink:"/docs/Containers/CRI/containerd",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Containers/CRI/containerd.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Container Registry",permalink:"/docs/Containers/container-registry"},next:{title:"crictl",permalink:"/docs/Containers/CRI/crictl"}},u=[{value:"Basic usage",id:"basic-usage",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"containerd"},"containerd"),(0,a.kt)("p",null,"Standar container runtime, best replacement for docker in k8s since v1.20\n(docker-shim was deprecated then)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://containerd.io/"},"https://containerd.io/"))),(0,a.kt)("h1",{id:"nerdctl"},(0,a.kt)("a",{parentName:"h1",href:"https://github.com/containerd/nerdctl"},"nerdctl")),(0,a.kt)("p",null,"contaiNERD CTL - Docker-compatible CLI for containerd, with support for Compose, Rootless, eStargz, OCIcrypt, IPFS, ..."),(0,a.kt)("p",null,"Basically replace docker UX but in containerd"),(0,a.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nerdctl run -it --rm alpine \n\nnerdctl build -t foo /some-dockerfile-directory\n\nnerdctl build -o type=local,dest=. /some-dockerfile-directory\n\nnerdctl build --platform linux/arm/v7,linux/arm64,linux/amd64 -t multiarchdemo .\n\nnerdctl compose -f ./examples/compose-wordpress/docker-compose.yaml up\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containerd/nerdctl#command-reference"},"Command reference")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containerd/nerdctl#rootless-mode"},"Rootless mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pet2cattle.com/2022/02/rootless-containers-nerdctl"},"Running rootless containers with nerdctl"))))}d.isMDXComponent=!0}}]);