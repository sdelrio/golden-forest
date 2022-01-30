"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[130],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,k=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return t?r.createElement(k,s(s({ref:n},u),{},{components:t})):r.createElement(k,s({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13438:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=t(83117),a=t(80102),l=(t(67294),t(3905)),s=["components"],o={},i="Tunnels",c={unversionedId:"Cloud-Platform/Kubernetes/k8s-tunnels",id:"Cloud-Platform/Kubernetes/k8s-tunnels",title:"Tunnels",description:"Inlets",source:"@site/docs/Cloud-Platform/Kubernetes/k8s-tunnels.md",sourceDirName:"Cloud-Platform/Kubernetes",slug:"/Cloud-Platform/Kubernetes/k8s-tunnels",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-tunnels",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Cloud-Platform/Kubernetes/k8s-tunnels.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"K8s streaming",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-streaming"},next:{title:"K8s Secrets",permalink:"/docs/Cloud-Platform/Kubernetes/Concepts/k8s-secrets"}},u=[{value:"Inlets",id:"inlets",children:[{value:"Sample install",id:"sample-install",children:[{value:"External node",id:"external-node",children:[],level:4},{value:"Client part",id:"client-part",children:[],level:4}],level:3},{value:"References",id:"references",children:[],level:3}],level:2}],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tunnels"},"Tunnels"),(0,l.kt)("h2",{id:"inlets"},"Inlets"),(0,l.kt)("h3",{id:"sample-install"},"Sample install"),(0,l.kt)("p",null,"Situation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 external node in the cloud"),(0,l.kt)("li",{parentName:"ul"},"1 external domain mytunnel.mydomain.com"),(0,l.kt)("li",{parentName:"ul"},"1 internal cluster in the LAN"),(0,l.kt)("li",{parentName:"ul"},"1 port redirect to 1 internal LAN cluster IP, in this sample: 192.168.1.140")),(0,l.kt)("h4",{id:"external-node"},"External node"),(0,l.kt)("p",null,"For this test a k3s aruba node was used"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'export token=$(head -c 16 /dev/urandom | shasum | cut -d" " -f1)\necho $token > lasttoken.txt\ninlets server --port=8800 --token="$token"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Crear random token:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'export token=$(head -c 16 /dev/urandom | shasum | cut -d" " -f1)\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add token to k8s secrets:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create secret generic inlets --from-literal=TOKEN=$token\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"inlets.yaml"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: inlets\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: inlets\n  template:\n    metadata:\n      labels:\n        app: inlets\n    spec:\n      containers:\n      - name: inlets\n        image: alexellis2/inlets:2.2.0\n        command:\n          - "inlets"\n          - "server"\n          - "--port=8000"\n          - "--token=$(TOKEN)"\n#          - "--print-token=false"\n        resources:\n          limits:\n            cpu: 250m\n            memory: 16Mi\n          requests:\n            cpu: 150m\n            memory: 16Mi\n        env:\n          - name: TOKEN\n            valueFrom:\n              secretKeyRef:\n                name: inlets\n                key: TOKEN\n        ports:\n        - containerPort: 8000\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: inlets-svc\nspec:\n  ports:\n  - port: 80\n    targetPort: 8000\n    protocol: TCP\n    name: http\n  selector:\n    app: inlets\n---\napiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: inlets-ingress\n  annotations:\n    kubernetes.io/ingress.class: traefik\n#    ingress.kubernetes.io/ssl-redirect: "true"\n#  ingress.kubernetes.io/ssl-redirect: "true"\n#  annotations:\n#   ingress.kubernetes.io/auth-type: "basic"\n#   ingress.kubernetes.io/auth-secret: "mysecret"\nspec:\n#  tls:\n#  - hosts:\n#    - mytunnel.mydomain.com\n##    secretName: inlets-secret\n  rules:\n  - host: mytunnel.mydomain.com\n    http:\n      paths:\n      - path: /\n        backend:\n          serviceName: inlets-svc\n          servicePort: 80\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Traefik config:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@fr1elvs01:~/inlets# cat /var/lib/rancher/k3s/server/manifests/traefik.yaml\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\napiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: traefik\n  namespace: kube-system\nspec:\n  chart: https://%{KUBERNETES_API}%/static/charts/traefik-1.77.1.tgz\n  set:\n    rbac.enabled: "true"\n    ssl.enabled: "true"\n    acme.enabled: "true"\n    acme.persistence.enabled: "true"\n    acme.logging: "true"\n    acme.staging: "false"\n    acme.caServer: "https://acme-v02.api.letsencrypt.org/directory"\n    acme.email: "daranduil@protonmail.com"\n    acme.challengeType: "tls-alpn-01"\n    metrics.prometheus.enabled: "true"\n    kubernetes.ingressEndpoint.useDefaultPublishedService: "true"\n    dashboard.enabled: "true"\n    dashboard.domain: "myapp.mydomain.com"\n    dashboard.auth.basic.test: "$apr1$cIbpWQ.R$0CabcdaYieEW5m123456/"\n    externalTrafficPolicy: "Local"\n#    acme.challengeType: "http-01"\n#    acme.persistence.size:\n#    acme.persistence.existingClaim:\n#    forwardedHeaders.enabled: "true"\n#    forwardedHeaders.trustedIPs: ["0.0.0.0/0"]\n#    proxyProtocol.enabled: "false"\n#    proxyProtocol.enabled: "true"\n#    forwardAuth.trustForwardHeader:\n')),(0,l.kt)("h4",{id:"client-part"},"Client part"),(0,l.kt)("p",null,"In local LAN cluster"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},' $ cat inlets_client.yaml\n#export REMOTE="wss://mytunnel.mydomain.com"    # for testing inlets on your laptop, replace with the public IPv4\n#export TOKEN="$token"  # the client token is found on your VPS or on start-up of "inlets server"\n#inlets client \\\n#    --remote=$REMOTE \\\n#    --upstream=https://192.168.1.140:443 \\\n#    --token $TOKEN \\\n#    --print-token=false\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: inlets\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: inlets\n  template:\n    metadata:\n      labels:\n        app: inlets\n    spec:\n      containers:\n      - name: inlets\n        image: alexellis2/inlets:2.2.0\n        command:\n          - "inlets"\n          - "client"\n          - "--remote=wss://mytunnel.mydomain.com"\n          - "--upstream=https://192.168.1.140:443"\n          - "--token=$toke"\n          - "--print-token=false"\n')),(0,l.kt)("h3",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.heyal.co.uk/inlets-pro/"},"Exploring NAT Traversal and Tunnels with Inlets and Inlets Pro")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-an-nginx-ingress-on-digitalocean-kubernetes-using-helm"},"How To Set Up an Nginx Ingress on DigitalOcean Kubernetes Using Helm\nNginxSecurityLet's EncryptKubernetes"))))}m.isMDXComponent=!0}}]);