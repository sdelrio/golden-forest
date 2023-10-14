"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[229],{30508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));n(61839);const s={},o="Kubernetes patterns",l={unversionedId:"Cloud-Platform/Kubernetes/k8s-patterns",id:"Cloud-Platform/Kubernetes/k8s-patterns",title:"Kubernetes patterns",description:"Python + Redis sidecar",source:"@site/docs/Cloud-Platform/Kubernetes/k8s-patterns.md",sourceDirName:"Cloud-Platform/Kubernetes",slug:"/Cloud-Platform/Kubernetes/k8s-patterns",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-patterns",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Cloud-Platform/Kubernetes/k8s-patterns.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"K8s nginx-ingress",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-nginx"},next:{title:"K8s platforms",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-platforms"}},i={},p=[{value:"Python + Redis sidecar",id:"python--redis-sidecar",level:2},{value:"References",id:"references",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kubernetes-patterns"},"Kubernetes patterns"),(0,r.kt)("h2",{id:"python--redis-sidecar"},"Python + Redis sidecar"),(0,r.kt)("p",null,"web-app -",">"," redis -",">"," database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Service\nmetadata:\n  name: web\n  labels:\n    app: web\nspec:\n  ports:\n  - port: 80\n    name: redis\n    targetPort: 5000\n  selector:\n    app: web\n  type: LoadBalancer\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web\nspec:\n  selector:\n    matchLabels:\n      app: web\n  replicas: 3\n  template:\n    metadata:\n      labels:\n        app: web\n    spec:\n      containers:\n      - name: redis\n        image: redis\n        ports:\n          - containerPort: 6379\n            name: redis\n            protocol: TCP\n      - name: web-app\n        image: janakiramm/py-red\n        env:\n          - name: "REDIS_HOST"\n            value: "localhost"\n')),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://thenewstack.io/tutorial-apply-the-sidecar-pattern-to-deploy-redis-in-kubernetes/"},"2020: Tutorial: Apply the Sidecar Pattern to Deploy Redis in Kubernetes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/janakiramm/Kubernetes-multi-container-pod"},"GitHub"))))}m.isMDXComponent=!0}}]);