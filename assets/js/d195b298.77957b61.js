"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[9972],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,l(l({ref:t},i),{},{components:n})):r.createElement(f,l({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7107:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return i},default:function(){return p}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),l=["components"],o={},c="kubectl usefull commands",u={unversionedId:"Cloud-Platform/Kubernetes/k8s-cli-quick-guide",id:"Cloud-Platform/Kubernetes/k8s-cli-quick-guide",isDocsHomePage:!1,title:"kubectl usefull commands",description:"Get storage classes",source:"@site/docs/Cloud-Platform/Kubernetes/k8s-cli-quick-guide.md",sourceDirName:"Cloud-Platform/Kubernetes",slug:"/Cloud-Platform/Kubernetes/k8s-cli-quick-guide",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-cli-quick-guide",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Cloud-Platform/Kubernetes/k8s-cli-quick-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ceph",permalink:"/docs/Cloud-Infrastructure/Storage/Ceph/ceph"},next:{title:"K8s distributions",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-distributions"}},i=[{value:"Get storage classes",id:"get-storage-classes",children:[],level:2},{value:"List all tainted noddes",id:"list-all-tainted-noddes",children:[],level:2},{value:"Change default namespace",id:"change-default-namespace",children:[],level:2},{value:"K8s Cheat Sheets",id:"k8s-cheat-sheets",children:[],level:2}],d={toc:i};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"kubectl-usefull-commands"},"kubectl usefull commands"),(0,s.kt)("h2",{id:"get-storage-classes"},"Get storage classes"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get sc -o go-template=$'{{range .items}}{{.metadata.name}}\\n{{end}}'\n")),(0,s.kt)("h2",{id:"list-all-tainted-noddes"},"List all tainted noddes"),(0,s.kt)("p",null,"Usually the master nodes are tainted"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes -o json | jq .items[].spec\n")),(0,s.kt)("h2",{id:"change-default-namespace"},"Change default namespace"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config set-context --current --namespace=mynamespace\n")),(0,s.kt)("h2",{id:"k8s-cheat-sheets"},"K8s Cheat Sheets"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/"},"https://kubernetes.io/docs/reference/kubectl/cheatsheet/")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/dennyzhang/cheatsheet-kubernetes-A4/blob/master/cheatsheet-kubernetes-A4.pdf"},"https://github.com/dennyzhang/cheatsheet-kubernetes-A4/blob/master/cheatsheet-kubernetes-A4.pdf"))))}p.isMDXComponent=!0}}]);