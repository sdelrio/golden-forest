"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[4116],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=c(r),m=a,f=k["".concat(u,".").concat(m)]||k[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},62:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return k}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],l={},u="OpenStack",c={unversionedId:"Cloud-Infrastructure/openstack",id:"Cloud-Infrastructure/openstack",title:"OpenStack",description:"Openstack is a cloud compute project to provide IaaS in both plublic and private cloud.",source:"@site/docs/Cloud-Infrastructure/openstack.md",sourceDirName:"Cloud-Infrastructure",slug:"/Cloud-Infrastructure/openstack",permalink:"/docs/Cloud-Infrastructure/openstack",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Cloud-Infrastructure/openstack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ganeti",permalink:"/docs/Cloud-Infrastructure/ganeti"},next:{title:"Tinkerbell",permalink:"/docs/Cloud-Infrastructure/tinkerbell"}},p=[{value:"Distributions",id:"distributions",children:[],level:2},{value:"Plugins",id:"plugins",children:[{value:"Network",id:"network",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],s={toc:p};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"openstack"},"OpenStack"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OpenStack"},"Openstack")," is a cloud compute project to provide ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cloud_computing"},"IaaS")," in both plublic and private cloud."),(0,i.kt)("p",null,"The software is a collection of open source projects, some of the basic project include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Compute:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Nova (compute service)"),(0,i.kt)("li",{parentName:"ul"},"Zun (container service)"))),(0,i.kt)("li",{parentName:"ul"},"Hardware Lifecycle:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ironic (bare metal provisioning service)"))),(0,i.kt)("li",{parentName:"ul"},"Storage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Swift (object storage)"),(0,i.kt)("li",{parentName:"ul"},"Cinder (block sotrage)"),(0,i.kt)("li",{parentName:"ul"},"Manila (shared filesystem)"))),(0,i.kt)("li",{parentName:"ul"},"Networking",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Neutron (networking)"))),(0,i.kt)("li",{parentName:"ul"},"Shared Services",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Keystone (Identity Service)"))),(0,i.kt)("li",{parentName:"ul"},"Heat",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Orchestation"))),(0,i.kt)("li",{parentName:"ul"},"Web Frontend",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Horizon")))),(0,i.kt)("h2",{id:"distributions"},"Distributions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ubuntu.com/openstack"},"Canonnical")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.mirantis.com/software/mirantis-openstack-for-kubernetes/"},"Mirantis Openstack for Kubernets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.redhat.com/es/technologies/linux-platforms/openstack-platform"},"RedHat OpensStack Platform")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.rdoproject.org/"},"RDO"))),(0,i.kt)("h2",{id:"plugins"},"Plugins"),(0,i.kt)("h3",{id:"network"},"Network"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.openstack.org/wiki/Brocade_Vyatta_L3_Plugin"},"Brocade Vyatta L3 Plugin"))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/OpenStack"},"Wikipedia")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.openstack.org/"},"Homepage"))))}k.isMDXComponent=!0}}]);