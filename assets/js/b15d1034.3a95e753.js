"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[6129],{69853:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var a=t(87462),i=(t(67294),t(3905));t(61839);const s={},o="K8s nginx-ingress",r={unversionedId:"Cloud-Platform/Kubernetes/k8s-nginx",id:"Cloud-Platform/Kubernetes/k8s-nginx",title:"K8s nginx-ingress",description:"External OAUTH Authentication",source:"@site/docs/Cloud-Platform/Kubernetes/k8s-nginx.md",sourceDirName:"Cloud-Platform/Kubernetes",slug:"/Cloud-Platform/Kubernetes/k8s-nginx",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-nginx",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Cloud-Platform/Kubernetes/k8s-nginx.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"K8s Machine Learning",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-ml"},next:{title:"Kubernetes patterns",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-patterns"}},l={},u=[{value:"External OAUTH Authentication",id:"external-oauth-authentication",level:2},{value:"Sticky Sessions",id:"sticky-sessions",level:2}],p={toc:u},m="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"k8s-nginx-ingress"},"K8s nginx-ingress"),(0,i.kt)("h2",{id:"external-oauth-authentication"},(0,i.kt)("a",{parentName:"h2",href:"https://kubernetes.github.io/ingress-nginx/examples/auth/oauth-external-auth/"},"External OAUTH Authentication")),(0,i.kt)("p",null,"Requires:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A domain name for the ingress rule: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://www.mydomain.com")),(0,i.kt)("li",{parentName:"ul"},"Autorization callback url, domain + ",(0,i.kt)("inlineCode",{parentName:"li"},"/oauth2/callback"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"https://www.mydomain.com/oauth/callback")),(0,i.kt)("li",{parentName:"ul"},"Register new application in the OAUTH provider, sample github: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/settings/applications/new"},"https://github.com/settings/applications/new")),(0,i.kt)("li",{parentName:"ul"},"Aplication for the authorization callback:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    k8s-app: oauth2-proxy\n  name: oauth2-proxy\n  namespace: kube-system\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      k8s-app: oauth2-proxy\n  template:\n    metadata:\n      labels:\n        k8s-app: oauth2-proxy\n    spec:\n      containers:\n      - args:\n        - --provider=github\n        - --email-domain=*\n        - --upstream=file:///dev/null\n        - --http-address=0.0.0.0:4180\n        # Register a new application\n        # https://github.com/settings/applications/new\n        env:\n        # Example: your github client id, like the login\n        - name: OAUTH2_PROXY_CLIENT_ID\n          value: <Client ID>\n        # Example: your github client secret\n        - name: OAUTH2_PROXY_CLIENT_SECRET\n          value: <Client Secret>\n        # docker run -ti --rm python:3-alpine python -c \\\n        #  'import secrets,base64; print(base64.b64encode(base64.b64encode(secrets.token_bytes(16))));'\n        - name: OAUTH2_PROXY_COOKIE_SECRET\n          value: SECRET\n        image: quay.io/oauth2-proxy/oauth2-proxy:latest\n        imagePullPolicy: Always\n        name: oauth2-proxy\n        ports:\n        - containerPort: 4180\n          protocol: TCP\n\n---\n\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    k8s-app: oauth2-proxy\n  name: oauth2-proxy\n  namespace: kube-system\nspec:\n  ports:\n  - name: http\n    port: 4180\n    protocol: TCP\n    targetPort: 4180\n  selector:\n    k8s-app: oauth2-proxy\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Annotate your ingress:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    nginx.ingress.kubernetes.io/auth-url: "https://$host/oauth2/auth"\n    nginx.ingress.kubernetes.io/auth-signin: "https://$host/oauth2/start?rd=$escaped_request_uri"\n')),(0,i.kt)("h2",{id:"sticky-sessions"},"Sticky Sessions"),(0,i.kt)("p",null,"The nginx-ingress controller already has these requirement implemented. The controller replies with a Set-Cookie header to the firest request. The value of the cookie will map to a specific pod replica. When subsequent request come back again, the client browser will attach the cookie and the ingress controller is therefore able to route the traffice to the same pod replica."),(0,i.kt)("p",null,"The configuration is achieved with annotations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: nginx-test\n  annotations:\n    nginx.ingress.kubernetes.io/affinity: "cookie"\n    nginx.ingress.kubernetes.io/session-cookie-name: "route"\n    nginx.ingress.kubernetes.io/session-cookie-expires: "172800"\n    nginx.ingress.kubernetes.io/session-cookie-max-age: "172800"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zhimin-wen.medium.com/sticky-sessions-in-kubernetes-56eb0e8f257d"},"https://zhimin-wen.medium.com/sticky-sessions-in-kubernetes-56eb0e8f257d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/examples/affinity/cookie/ingress.yaml"},"https://kubernetes.github.io/ingress-nginx/examples/affinity/cookie/ingress.yaml"))))}c.isMDXComponent=!0}}]);