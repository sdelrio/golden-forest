"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[6838],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=s(n),m=l,k=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67530:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var r=n(83117),l=n(80102),o=(n(67294),n(3905)),a=["components"],u={},i="Kubectl plugins",s={unversionedId:"Cloud-Platform/Kubernetes/k8s-kubectl-plugins",id:"Cloud-Platform/Kubernetes/k8s-kubectl-plugins",title:"Kubectl plugins",description:"Rakkess",source:"@site/docs/Cloud-Platform/Kubernetes/k8s-kubectl-plugins.md",sourceDirName:"Cloud-Platform/Kubernetes",slug:"/Cloud-Platform/Kubernetes/k8s-kubectl-plugins",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-kubectl-plugins",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Cloud-Platform/Kubernetes/k8s-kubectl-plugins.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jupyter notebook",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-jupyter-notebook"},next:{title:"K8s Machine Learning",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-ml"}},c=[{value:"Rakkess",id:"rakkess",children:[],level:2},{value:"Who-can",id:"who-can",children:[{value:"Install",id:"install",children:[],level:3}],level:2},{value:"Stern",id:"stern",children:[],level:2}],p={toc:c};function f(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubectl-plugins"},"Kubectl plugins"),(0,o.kt)("h2",{id:"rakkess"},"Rakkess"),(0,o.kt)("p",null,"Review Access - kubectl plugin to show an access matrix for k8s server resources"),(0,o.kt)("p",null,"Sample command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rakkess --namepsace default\n")),(0,o.kt)("p",null,"Will give us LIST, CREATE, UPDATE, DELETE for each resource in the namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"default")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/corneliusweig/rakkess"},"HomePage"))),(0,o.kt)("h2",{id:"who-can"},"Who-can"),(0,o.kt)("p",null,"Show who has RBAC permissions to perform actions on different resources in Kubernetes."),(0,o.kt)("h3",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl krew install who-can\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/aquasecurity/kubectl-who-can"},"HomePage"))),(0,o.kt)("h2",{id:"stern"},"Stern"),(0,o.kt)("p",null,"Multi pod and container log tailing for Kubernetes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wercker/stern"},"HomePage"))))}f.isMDXComponent=!0}}]);