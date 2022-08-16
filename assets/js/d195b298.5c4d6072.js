"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[9972],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,s(s({ref:t},i),{},{components:n})):r.createElement(f,s({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67107:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var r=n(83117),a=(n(67294),n(3905));const l={},s="kubectl usefull commands",o={unversionedId:"Cloud-Platform/Kubernetes/k8s-cli-quick-guide",id:"Cloud-Platform/Kubernetes/k8s-cli-quick-guide",title:"kubectl usefull commands",description:"Get storage classes",source:"@site/docs/Cloud-Platform/Kubernetes/k8s-cli-quick-guide.md",sourceDirName:"Cloud-Platform/Kubernetes",slug:"/Cloud-Platform/Kubernetes/k8s-cli-quick-guide",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-cli-quick-guide",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Cloud-Platform/Kubernetes/k8s-cli-quick-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"K8s backup",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-backup"},next:{title:"K8s distributions",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-distributions"}},u={},c=[{value:"Get storage classes",id:"get-storage-classes",level:2},{value:"List all tainted noddes",id:"list-all-tainted-noddes",level:2},{value:"Change default namespace",id:"change-default-namespace",level:2},{value:"Network debug",id:"network-debug",level:2},{value:"K8s Cheat Sheets",id:"k8s-cheat-sheets",level:2}],i={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubectl-usefull-commands"},"kubectl usefull commands"),(0,a.kt)("h2",{id:"get-storage-classes"},"Get storage classes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get sc -o go-template=$'{{range .items}}{{.metadata.name}}\\n{{end}}'\n")),(0,a.kt)("h2",{id:"list-all-tainted-noddes"},"List all tainted noddes"),(0,a.kt)("p",null,"Usually the master nodes are tainted"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes -o json | jq .items[].spec\n")),(0,a.kt)("h2",{id:"change-default-namespace"},"Change default namespace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config set-context --current --namespace=mynamespace\n")),(0,a.kt)("h2",{id:"network-debug"},"Network debug"),(0,a.kt)("p",null,"Spin up a throw away container for debugging."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl run tmp-shell --rm -i --tty --image nicolaka/netshoot -- /bin/bash\n")),(0,a.kt)("p",null,"And if you want to spin up a container on the host's network namespace."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl run tmp-shell --rm -i --tty --overrides=\'{"spec": {"hostNetwork": true}}\' --image nicolaka/netshoot -- /bin/bash\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nicolaka/netshoot"},"GitHub"))),(0,a.kt)("h2",{id:"k8s-cheat-sheets"},"K8s Cheat Sheets"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/"},"https://kubernetes.io/docs/reference/kubectl/cheatsheet/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/dennyzhang/cheatsheet-kubernetes-A4/blob/master/cheatsheet-kubernetes-A4.pdf"},"https://github.com/dennyzhang/cheatsheet-kubernetes-A4/blob/master/cheatsheet-kubernetes-A4.pdf"))))}d.isMDXComponent=!0}}]);