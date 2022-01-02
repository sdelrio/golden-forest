"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[4379],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=o,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},76334:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],l={},s="K8s Homelab",u={unversionedId:"HomeLab/k8s-homelab",id:"HomeLab/k8s-homelab",title:"K8s Homelab",description:"k8s-at-home",source:"@site/docs/HomeLab/k8s-homelab.md",sourceDirName:"HomeLab",slug:"/HomeLab/k8s-homelab",permalink:"/docs/HomeLab/k8s-homelab",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/HomeLab/k8s-homelab.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intel Nuc",permalink:"/docs/HomeLab/intel-nuc"},next:{title:"OpenStack Homelab",permalink:"/docs/HomeLab/openstack-homelab"}},c=[{value:"k8s-at-home",id:"k8s-at-home",children:[],level:2},{value:"gitops homelab",id:"gitops-homelab",children:[],level:2},{value:"argocd based homelab",id:"argocd-based-homelab",children:[],level:2}],m={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"k8s-homelab"},"K8s Homelab"),(0,a.kt)("h2",{id:"k8s-at-home"},"k8s-at-home"),(0,a.kt)("p",null,"Awesome projects involving running Kubernetes at home"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/k8s-at-home/awesome-home-kubernetes"},"Awesome home kubernetes"))),(0,a.kt)("h2",{id:"gitops-homelab"},"gitops homelab"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/billimek/k8s-gitops"},"billimek/k8s-gitops"))),(0,a.kt)("p",null,"GitOps principles to define kubernetes cluster state via code.  Community around k8s@home is on discord: ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/7PbmHRK"},"https://discord.gg/7PbmHRK")," - billimek/k8s-gitops"),(0,a.kt)("p",null,"Intersesting things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Renovate (Receive automated Pull Requests whenever dependencies need updating)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/renovatebot/renovate"},"https://github.com/renovatebot/renovate")))),(0,a.kt)("li",{parentName:"ul"},"Kured (Kured automatically drains & reboots nodes when OS patches are applied requiring a reboot)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/kured"},"https://github.com/weaveworks/kured"))))),(0,a.kt)("h2",{id:"argocd-based-homelab"},"argocd based homelab"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kasuboski/k8s-gitops"},"kasuboski/k8s-gitops"))))}p.isMDXComponent=!0}}]);