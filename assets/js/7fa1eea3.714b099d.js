"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[464],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,g=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40541:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={},s="GitLab",c={unversionedId:"DevOps/CI/Platforms/gitlab",id:"DevOps/CI/Platforms/gitlab",title:"GitLab",description:"Gitlab runners access",source:"@site/docs/DevOps/CI/Platforms/gitlab.md",sourceDirName:"DevOps/CI/Platforms",slug:"/DevOps/CI/Platforms/gitlab",permalink:"/docs/DevOps/CI/Platforms/gitlab",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/DevOps/CI/Platforms/gitlab.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitHub Actions",permalink:"/docs/DevOps/CI/Platforms/gh-actions"},next:{title:"Jenkis-X",permalink:"/docs/DevOps/CI/Platforms/jenkins-x"}},u=[{value:"Gitlab runners access",id:"gitlab-runners-access",children:[{value:"How to get IPs and mask",id:"how-to-get-ips-and-mask",children:[],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gitlab"},"GitLab"),(0,o.kt)("h2",{id:"gitlab-runners-access"},"Gitlab runners access"),(0,o.kt)("p",null,"Allow access from gitlab runners SaaS to your webook located in port 6443:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ufw allow proto tcp from 67.205.128.0/18 to YOUR_PUB_IP port 6443\nufw allow proto tcp from 192.241.128.0/17 to YOUR_PUB_IP port 6443\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"gitlab-shared-runners-manager-2.gitlab.com"),(0,o.kt)("li",{parentName:"ul"},"gitlab-shared-runners-manager-1.gitlab.com"),(0,o.kt)("li",{parentName:"ul"},"shared-runners-manager-2.gitlab.com"),(0,o.kt)("li",{parentName:"ul"},"shared-runners-manager-1.gitlab.com")),(0,o.kt)("h3",{id:"how-to-get-ips-and-mask"},"How to get IPs and mask"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ dig +short gitlab-shared-runners-manager-2.gitlab.com\n67.205.141.121\n$ dig +short gitlab-shared-runners-manager-1.gitlab.com\n67.205.137.49\n$ dig +short shared-runners-manager-2.gitlab.com\n67.205.166.117\n$ whois 67.205.137.49 | grep -i ^cidr\nCIDR:           67.205.128.0/18\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://forum.gitlab.com/t/gitlab-ci-runners-public-ip-addresses-range/4301/4"},"https://forum.gitlab.com/t/gitlab-ci-runners-public-ip-addresses-range/4301/4"))))}m.isMDXComponent=!0}}]);