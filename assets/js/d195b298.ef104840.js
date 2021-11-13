"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[9972],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},i),{},{components:n})):r.createElement(f,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7107:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return i},default:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],s={},c="kubectl usefull commands",u={unversionedId:"Cloud-Platform/Kubernetes/k8s-cli-quick-guide",id:"Cloud-Platform/Kubernetes/k8s-cli-quick-guide",isDocsHomePage:!1,title:"kubectl usefull commands",description:"Get storage classes",source:"@site/docs/Cloud-Platform/Kubernetes/k8s-cli-quick-guide.md",sourceDirName:"Cloud-Platform/Kubernetes",slug:"/Cloud-Platform/Kubernetes/k8s-cli-quick-guide",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-cli-quick-guide",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Cloud-Platform/Kubernetes/k8s-cli-quick-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/docs-intro"},next:{title:"Localizer",permalink:"/docs/Coding/Debug/k8s-localizer"}},i=[{value:"Get storage classes",id:"get-storage-classes",children:[],level:2},{value:"List all tainted noddes",id:"list-all-tainted-noddes",children:[],level:2},{value:"Change default namespace",id:"change-default-namespace",children:[],level:2},{value:"K8s Cheat Sheets",id:"k8s-cheat-sheets",children:[],level:2}],d={toc:i};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kubectl-usefull-commands"},"kubectl usefull commands"),(0,l.kt)("h2",{id:"get-storage-classes"},"Get storage classes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get sc -o go-template=$'{{range .items}}{{.metadata.name}}\\n{{end}}'\n")),(0,l.kt)("h2",{id:"list-all-tainted-noddes"},"List all tainted noddes"),(0,l.kt)("p",null,"Usually the master nodes are tainted"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes -o json | jq .items[].spec\n")),(0,l.kt)("h2",{id:"change-default-namespace"},"Change default namespace"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config set-context --current --namespace=mynamespace\n")),(0,l.kt)("h2",{id:"k8s-cheat-sheets"},"K8s Cheat Sheets"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/"},"https://kubernetes.io/docs/reference/kubectl/cheatsheet/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dennyzhang/cheatsheet-kubernetes-A4/blob/master/cheatsheet-kubernetes-A4.pdf"},"https://github.com/dennyzhang/cheatsheet-kubernetes-A4/blob/master/cheatsheet-kubernetes-A4.pdf"))))}p.isMDXComponent=!0}}]);