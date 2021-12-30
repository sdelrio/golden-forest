"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[1907],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),k=a,b=p["".concat(l,".").concat(k)]||p[k]||d[k]||c;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9365:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=r(3117),a=r(102),c=(r(7294),r(3905)),i=["components"],o={},l="K8s backup",u={unversionedId:"Cloud-Platform/Kubernetes/k8s-backup",id:"Cloud-Platform/Kubernetes/k8s-backup",title:"K8s backup",description:"Control Plane",source:"@site/docs/Cloud-Platform/Kubernetes/k8s-backup.md",sourceDirName:"Cloud-Platform/Kubernetes",slug:"/Cloud-Platform/Kubernetes/k8s-backup",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-backup",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Cloud-Platform/Kubernetes/k8s-backup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"K8s autoscalers",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-autoscalers"},next:{title:"kubectl usefull commands",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-cli-quick-guide"}},s=[{value:"Control Plane",id:"control-plane",children:[{value:"Relevant Certificates",id:"relevant-certificates",children:[{value:"Backup certificates",id:"backup-certificates",children:[],level:4},{value:"Restore certificates",id:"restore-certificates",children:[],level:4}],level:3},{value:"ETCD",id:"etcd",children:[{value:"Make etcd snapshot",id:"make-etcd-snapshot",children:[],level:4},{value:"Restore etcd",id:"restore-etcd",children:[],level:4}],level:3},{value:"kubeadm-config",id:"kubeadm-config",children:[{value:"Backup kuebadm-config",id:"backup-kuebadm-config",children:[],level:4},{value:"Restore kuebadm-config",id:"restore-kuebadm-config",children:[],level:4},{value:"Initialize the master with the backup",id:"initialize-the-master-with-the-backup",children:[],level:4}],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],d={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"k8s-backup"},"K8s backup"),(0,c.kt)("h2",{id:"control-plane"},"Control Plane"),(0,c.kt)("h3",{id:"relevant-certificates"},"Relevant Certificates"),(0,c.kt)("h4",{id:"backup-certificates"},"Backup certificates"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp -r /etc/kubernetes/pki backup/\n")),(0,c.kt)("h4",{id:"restore-certificates"},"Restore certificates"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp -r backup/pki /etc/kubernetes/\n")),(0,c.kt)("h3",{id:"etcd"},"ETCD"),(0,c.kt)("h4",{id:"make-etcd-snapshot"},"Make etcd snapshot"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run --rm -v $(pwd)/backup:/backup \\\n    --network host \\\n    -v /etc/kubernetes/pki/etcd:/etc/kubernetes/pki/etcd \\\n    --env ETCDCTL_API=3 \\\n    k8s.gcr.io/etcd:3.4.3-0 \\\n    etcdctl --endpoints=https://127.0.0.1:2379 \\\n    --cacert=/etc/kubernetes/pki/etcd/ca.crt \\\n    --cert=/etc/kubernetes/pki/etcd/healthcheck-client.crt \\\n    --key=/etc/kubernetes/pki/etcd/healthcheck-client.key \\\n    snapshot save /backup/etcd-snapshot-latest.db\n")),(0,c.kt)("h4",{id:"restore-etcd"},"Restore etcd"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"sudo mkdir -p /var/lib/etcd\nsudo docker run --rm \\\n    -v $(pwd)/backup:/backup \\\n    -v /var/lib/etcd:/var/lib/etcd \\\n    --env ETCDCTL_API=3 \\\n    k8s.gcr.io/etcd:3.4.3-0 \\\n    /bin/sh -c \"etcdctl snapshot restore '/backup/etcd-snapshot-latest.db' ; mv /default.etcd/member/ /var/lib/etcd/\"\n")),(0,c.kt)("h3",{id:"kubeadm-config"},"kubeadm-config"),(0,c.kt)("h4",{id:"backup-kuebadm-config"},"Backup kuebadm-config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp /etc/kubeadm/kubeadm-config.yaml backup/\n")),(0,c.kt)("h4",{id:"restore-kuebadm-config"},"Restore kuebadm-config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /etc/kubeadm\nsudo cp backup/kubeadm-config.yaml /etc/kubeadm/\n")),(0,c.kt)("h4",{id:"initialize-the-master-with-the-backup"},"Initialize the master with the backup"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"sudo kubeadm init --ignore-preflight-errors=DirAvailable--var-lib-etcd \\\n    --config /etc/kubeadm/kubeadm-config.yaml\n")),(0,c.kt)("h2",{id:"references"},"References"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://elastisys.com/backup-kubernetes-how-and-why/"},"https://elastisys.com/backup-kubernetes-how-and-why/"))))}p.isMDXComponent=!0}}]);