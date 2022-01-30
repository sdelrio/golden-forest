"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[229],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30508:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={},l="Kubernetes patterns",p={unversionedId:"Cloud-Platform/Kubernetes/k8s-patterns",id:"Cloud-Platform/Kubernetes/k8s-patterns",title:"Kubernetes patterns",description:"Python + Redis sidecar",source:"@site/docs/Cloud-Platform/Kubernetes/k8s-patterns.md",sourceDirName:"Cloud-Platform/Kubernetes",slug:"/Cloud-Platform/Kubernetes/k8s-patterns",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-patterns",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Cloud-Platform/Kubernetes/k8s-patterns.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"K8s nginx-ingress",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-nginx"},next:{title:"K8s streaming",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-streaming"}},c=[{value:"Python + Redis sidecar",id:"python--redis-sidecar",children:[{value:"References",id:"references",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubernetes-patterns"},"Kubernetes patterns"),(0,o.kt)("h2",{id:"python--redis-sidecar"},"Python + Redis sidecar"),(0,o.kt)("p",null,"web-app -",">"," redis -",">"," database"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Service\nmetadata:\n  name: web\n  labels:\n    app: web\nspec:\n  ports:\n  - port: 80\n    name: redis\n    targetPort: 5000\n  selector:\n    app: web\n  type: LoadBalancer\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web\nspec:\n  selector:\n    matchLabels:\n      app: web\n  replicas: 3\n  template:\n    metadata:\n      labels:\n        app: web\n    spec:\n      containers:\n      - name: redis\n        image: redis\n        ports:\n          - containerPort: 6379\n            name: redis\n            protocol: TCP\n      - name: web-app\n        image: janakiramm/py-red\n        env:\n          - name: "REDIS_HOST"\n            value: "localhost"\n')),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://thenewstack.io/tutorial-apply-the-sidecar-pattern-to-deploy-redis-in-kubernetes/"},"2020: Tutorial: Apply the Sidecar Pattern to Deploy Redis in Kubernetes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/janakiramm/Kubernetes-multi-container-pod"},"GitHub"))))}d.isMDXComponent=!0}}]);