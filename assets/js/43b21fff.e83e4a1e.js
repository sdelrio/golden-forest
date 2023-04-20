"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[3814],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97780:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var n=r(83117),a=(r(67294),r(3905));const i={},o="VM base images",l={unversionedId:"DevOps/CI/vm-images",id:"DevOps/CI/vm-images",title:"VM base images",description:"Tools",source:"@site/docs/DevOps/CI/vm-images.md",sourceDirName:"DevOps/CI",slug:"/DevOps/CI/vm-images",permalink:"/docs/DevOps/CI/vm-images",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/DevOps/CI/vm-images.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DB Migrations",permalink:"/docs/DevOps/CI/db-migrations"},next:{title:"Ansible",permalink:"/docs/DevOps/Infra as Code/ansible"}},s={},c=[{value:"Tools",id:"tools",level:2},{value:"Packer",id:"packer",level:3},{value:"Articles",id:"articles",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vm-base-images"},"VM base images"),(0,a.kt)("h2",{id:"tools"},"Tools"),(0,a.kt)("h3",{id:"packer"},"Packer"),(0,a.kt)("p",null,"Build automated machine images."),(0,a.kt)("p",null,"Create identical machine images for multiple platforms from a single source configuration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.packer.io/"},"Packer Homepage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pet2cattle.com/2022/01/packer-shell-provisioners-verbosity"},"Packer templates: Add more verbosity to shell provisioners"))),(0,a.kt)("p",null,"We can change ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"inline")," by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"-x")," flag to enable further verbosity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'(...)\n  "provisioners": [\n  {\n    "type": "shell",\n    "inline": ["/bin/bash -x /opt/provisioners/example_script.sh"]\n  }],\n(...)\n')),(0,a.kt)("h2",{id:"articles"},"Articles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.kintoandar.com/2017/06/Baking-delicious-cloud-instances.html"},"Baking delicious cloud instances"))))}u.isMDXComponent=!0}}]);