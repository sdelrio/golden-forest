"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[7777],{32032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));n(61839);const l={},o="K8s tools",r={unversionedId:"Cloud-Platform/Kubernetes/k8s-tools",id:"Cloud-Platform/Kubernetes/k8s-tools",title:"K8s tools",description:"k9s",source:"@site/docs/Cloud-Platform/Kubernetes/k8s-tools.md",sourceDirName:"Cloud-Platform/Kubernetes",slug:"/Cloud-Platform/Kubernetes/k8s-tools",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-tools",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Cloud-Platform/Kubernetes/k8s-tools.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"K8s streaming",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-streaming"},next:{title:"Tunnels",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-tunnels"}},i={},c=[{value:"k9s",id:"k9s",level:2},{value:"Telepresence",id:"telepresence",level:2},{value:"K8s yaml validation",id:"k8s-yaml-validation",level:2},{value:"kubeval",id:"kubeval",level:3},{value:"datree.io",id:"datreeio",level:3},{value:"kube-score",id:"kube-score",level:3},{value:"Kustomize",id:"kustomize",level:3},{value:"YAMLs",id:"yamls",level:4},{value:"Example with an existing cluster",id:"example-with-an-existing-cluster",level:4}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"k8s-tools"},"K8s tools"),(0,s.kt)("h2",{id:"k9s"},"k9s"),(0,s.kt)("p",null,"K9s is a terminal based UI to interact with your Kubernetes clusters. Easy to navigate, observe and manage your deployed applications in the wild. K9s continually watches Kubernetes for changes and offers subsequent commands to interact with your observed resources. It uses common keys used in the editor vim."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://k9scli.io/"},"k9s homepage"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," Context: mycluser.local                           <c>      Cordon     <u> Uncordon        ____  __.________        \n Cluster: mycluster.local                          <ctrl-d> Delete     <y> YAML           |    |/ _/   __   \\______ \n User:    kube-admin-mycluster.local               <d>      Describe                      |      < \\____    /  ___/ \n K9s Rev: v0.25.18                                 <r>      Drain                         |    |  \\   /    /\\___ \\  \n K8s Rev: v1.20.14                                 <e>      Edit                          |____|__ \\ /____//____  > \n CPU:     26%                                      <?>      Help                                  \\/            \\/  \n MEM:     44%                                                                                                       \n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Nodes(all)[3] \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 NAME\u2191   STATUS  ROLE                       VERSION     PODS   CPU   MEM   %CPU   %MEM   CPU/A   MEM/A AGE        \u2502\n\u2502 node0   Ready   etcd,worker                v1.20.14      45   656  4198     16     53    4000    7818 2y153d     \u2502\n\u2502 node1   Ready   controlplane,etcd,worker   v1.20.14      30  1066  3710     26     37    4000    9770 2y351d     \u2502\n\u2502 node2   Ready   controlplane,etcd,worker   v1.20.14      38  1482  4384     37     44    4000    9838 2y351d     \u2502\n\u2502                                                                                                                  \u2502\n\u2502                                                                                                                  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n<node>\n")),(0,s.kt)("h2",{id:"telepresence"},"Telepresence"),(0,s.kt)("p",null,"Telepresence is an open source tool that lets you run a single service locally, while connecting that service to a remote Kubernetes cluster."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.telepresence.io/"},"Telepresence Homepage")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.telepresence.io/docs/latest/quick-start/"},"Telepresence docs")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://thenewstack.io/evolving-cncfs-telepresence-adopting-a-tun-device-to-deliver-stability-and-portability/"},"2022 Evolving CNCF\u2019s Telepresence: Adopting a TUN Device to Deliver Stability and Portability"))),(0,s.kt)("h2",{id:"k8s-yaml-validation"},"K8s yaml validation"),(0,s.kt)("h3",{id:"kubeval"},(0,s.kt)("a",{parentName:"h3",href:"https://www.kubeval.com/"},"kubeval")),(0,s.kt)("p",null,"Validate one or more Kubernetes configuration files, and is often used locally as part of a development workflow as well as in CI pipelines."),(0,s.kt)("p",null,"At the most basic level, Kubeval is used like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubeval my-invalid-rc.yaml\nWARN - my-invalid-rc.yaml contains an invalid ReplicationController - spec.replicas: Invalid type. Expected: integer, given: string\n$ echo $?\n1\n")),(0,s.kt)("h3",{id:"datreeio"},(0,s.kt)("a",{parentName:"h3",href:"https://hub.datree.io/"},"datree.io")),(0,s.kt)("p",null,"Datree prevents Kubernetes misconfigurations from reaching production."),(0,s.kt)("p",null,"As your organization's infrastructure owner, the product\u2019s stability is your primary concern. Toolchain engineering and architecture gets pushed to the wayside because you must constantly put out fires configured in the development stage."),(0,s.kt)("p",null,"It has a free Community and a paid Enterprise version."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ datree test ./k8s-demo.yaml\n>>  File: k8s-demo.yaml\n\n[V] YAML validation\n[V] Kubernetes schema validation\n\n[X] Policy check\n\n\u274c  Ensure each container image has a pinned (tag) version  [1 occurrence]\n    \u2014 metadata.name: rss-site (kind: Deployment)\n\ud83d\udca1  Incorrect value for key `image` - specify an image version to avoid unpleasant "version surprises" in the future\n\n\u274c  Ensure each container has a configured memory limit  [1 occurrence]\n    \u2014 metadata.name: rss-site (kind: Deployment)\n\ud83d\udca1  Missing property object `limits.memory` - value should be within the accepted boundaries recommended by the organization\n\n\u274c  Ensure workload has valid label values  [1 occurrence]\n    \u2014 metadata.name: rss-site (kind: Deployment)\n\ud83d\udca1  Incorrect value for key(s) under `labels` - the vales syntax is not valid so the Kubernetes engine will not accept it\n\n\u274c  Ensure each container has a configured liveness probe  [1 occurrence]\n    \u2014 metadata.name: rss-site (kind: Deployment)\n\ud83d\udca1  Missing property object `livenessProbe` - add a properly configured livenessProbe to catch possible deadlocks\n\n\n(Summary)\n\n- Passing YAML validation: 1/1\n\n- Passing Kubernetes (1.19.0) schema validation: 1/1\n\n- Passing policy check: 0/1\n\n+-----------------------------------+----------------------------------------------------------+\n| Enabled rules in policy \u201cDefault\u201d | 21                                                       |\n| Configs tested against policy     | 1                                                        |\n| Total rules evaluated             | 21                                                       |\n| Total rules failed                | 4                                                        |\n| Total rules passed                | 17                                                       |\n| See all rules in policy           | https://app.datree.io/login?cliId=C2JWeCNE5G7cybebjhszFR |\n+-----------------------------------+----------------------------------------------------------+\n')),(0,s.kt)("h3",{id:"kube-score"},(0,s.kt)("a",{parentName:"h3",href:"https://kube-score.com/"},"kube-score")),(0,s.kt)("p",null,"Kubernetes object analysis with recommendations for improved reliability and security."),(0,s.kt)("p",null,"kube-score is a tool that does static code analysis of your Kubernetes object definitions. The output is a list of recommendations of what you can improve to make your application more secure and resilient."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"kube-score")," can run in your CI/CD environment and will exit with exit code 1 if a critical error has been found. The trigger level can be changed to warning with the ",(0,s.kt)("inlineCode",{parentName:"p"},"--exit-one-on-warning argument"),"."),(0,s.kt)("p",null,"The input to kube-score should be all applications that you deploy to the same namespace for the best result.\nExample with Helm"),(0,s.kt)("p",null,"helm template my-app | kube-score score -"),(0,s.kt)("h3",{id:"kustomize"},"Kustomize"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kustomize build . | kube-score score -\n")),(0,s.kt)("h4",{id:"yamls"},"YAMLs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kube-score score my-app/*.yaml\n\nkube-score score my-app/deployment.yaml my-app/service.yaml\n")),(0,s.kt)("h4",{id:"example-with-an-existing-cluster"},"Example with an existing cluster"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl api-resources --verbs=list --namespaced -o name \\\n  | xargs -n1 -I{} bash -c "kubectl get {} --all-namespaces -oyaml && echo ---" \\\n  | kube-score score -\n')))}p.isMDXComponent=!0}}]);