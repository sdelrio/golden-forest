"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[9362],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,b=f["".concat(u,".").concat(m)]||f[m]||p[m]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(83117),a=r(67294),l=r(72389),o=r(24726),i=r(86010),u="tabItem_LplD";function s(e){var t,r,l,s=e.lazy,c=e.block,p=e.defaultValue,f=e.values,m=e.groupId,b=e.className,d=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:d.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(r=d.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(l=d[0])?void 0:l.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),g=y.tabGroupChoices,w=y.setTabGroupChoices,O=(0,a.useState)(k),K=O[0],N=O[1],T=[],P=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=g[m];null!=E&&E!==K&&v.some((function(e){return e.value===E}))&&N(E)}var x=function(e){var t=e.currentTarget,r=T.indexOf(t),n=v[r].value;n!==K&&(P(t),N(n),null!=m&&w(m,n))},C=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;r=T[n]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;r=T[a]||T[T.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},b)},v.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:K===t?0:-1,"aria-selected":K===t,key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":K===t})}),null!=r?r:t)}))),s?(0,a.cloneElement)(d.filter((function(e){return e.props.value===K}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==K})}))))}function c(e){var t=(0,l.Z)();return a.createElement(s,(0,n.Z)({key:String(t)},e))}},37958:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return f},default:function(){return b}});var n=r(83117),a=r(80102),l=(r(67294),r(3905)),o=r(9877),i=r(58215),u=["components"],s={},c="K8s Linter tools",p={unversionedId:"Cloud-Platform/Kubernetes/k8s-linter",id:"Cloud-Platform/Kubernetes/k8s-linter",title:"K8s Linter tools",description:"Kubelinter",source:"@site/docs/Cloud-Platform/Kubernetes/k8s-linter.md",sourceDirName:"Cloud-Platform/Kubernetes",slug:"/Cloud-Platform/Kubernetes/k8s-linter",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-linter",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Cloud-Platform/Kubernetes/k8s-linter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubectl plugins",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-kubectl-plugins"},next:{title:"K8s Machine Learning",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-ml"}},f=[{value:"Kubelinter",id:"kubelinter",children:[{value:"Install",id:"install",children:[],level:3},{value:"References",id:"references",children:[],level:3}],level:2}],m={toc:f};function b(e){var t=e.components,r=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"k8s-linter-tools"},"K8s Linter tools"),(0,l.kt)("h2",{id:"kubelinter"},"Kubelinter"),(0,l.kt)("p",null,"KubeLinter is a static analysis tool that checks Kubernetes YAML files and Helm charts to ensure the applications represented in them adhere to best practices. "),(0,l.kt)("p",null,"When a lint check fails, KubeLinter reports recommendations for how to resolve any potential issues and returns a non-zero exit code."),(0,l.kt)("h3",{id:"install"},"Install"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"brew",label:"brew",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kube-linter\n"))),(0,l.kt)(i.Z,{value:"binary",label:"binary",mdxType:"TabItem"},(0,l.kt)("p",null,"Download the latest binary from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/stackrox/kube-linter/releases"},"Releases")," and add it to your PATH. "))),(0,l.kt)("h3",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/stackrox/kube-linter"},"Kubelinter GitHub")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://thenewstack.io/stackrox-kubelinter-brings-security-linting-to-kubernetes/"},"2020: StackRox KubeLinter Brings Security Linting to Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.civo.com/learn/yaml-best-practices-using-kubelinter"},"Ensuring YAML best practices using KubeLinter")," at civo.com by Saiyam Pathak."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://opensource.com/article/21/1/kubelinter"},"Analyze Kubernetes files for errors with KubeLinter")," at opensource.com by Jessica Cherry."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.psaggu.com/upstream-contribution/2021/08/17/notes.html"},"How to add a new check in KubeLinter?")," by Priyanka Saggu.")))}b.isMDXComponent=!0}}]);