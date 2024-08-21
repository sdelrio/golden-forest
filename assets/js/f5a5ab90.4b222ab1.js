"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[2174],{48889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));n(61839);const s={},l="K8s distributions",i={unversionedId:"Cloud-Platform/Kubernetes/k8s-distributions",id:"Cloud-Platform/Kubernetes/k8s-distributions",title:"K8s distributions",description:"k0s",source:"@site/docs/Cloud-Platform/Kubernetes/k8s-distributions.md",sourceDirName:"Cloud-Platform/Kubernetes",slug:"/Cloud-Platform/Kubernetes/k8s-distributions",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-distributions",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Cloud-Platform/Kubernetes/k8s-distributions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kubectl usefull commands",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-cli-quick-guide"},next:{title:"K8s hardening",permalink:"/docs/Cloud-Platform/Kubernetes/k8s-hardening"}},o={},d=[{value:"k0s",id:"k0s",level:2},{value:"k3s",id:"k3s",level:2},{value:"Remove k3s ingress-nginx",id:"remove-k3s-ingress-nginx",level:3},{value:"Containerd disk location",id:"containerd-disk-location",level:3},{value:"Master no-schedule",id:"master-no-schedule",level:3},{value:"On install",id:"on-install",level:4},{value:"On already installed system",id:"on-already-installed-system",level:4},{value:"flannel UFW",id:"flannel-ufw",level:3},{value:"Ansible",id:"ansible",level:4},{value:"Backup and restore",id:"backup-and-restore",level:3},{value:"ETCD",id:"etcd",level:4},{value:"Pods",id:"pods",level:4},{value:"kind",id:"kind",level:2},{value:"Simple command to create a kind cluster",id:"simple-command-to-create-a-kind-cluster",level:3},{value:"Issues",id:"issues",level:3},{value:"Stuck at &quot;Starting control panel&quot;",id:"stuck-at-starting-control-panel",level:4},{value:"Create cluster fails - kind-control-plane does not work on zfs",id:"create-cluster-fails---kind-control-plane-does-not-work-on-zfs",level:4},{value:"ZFS workarounds",id:"zfs-workarounds",level:4},{value:"Install cluster",id:"install-cluster",level:2},{value:"Deploy clusters",id:"deploy-clusters",level:3},{value:"Containerd logs",id:"containerd-logs",level:3},{value:"KUBECONFIG",id:"kubeconfig",level:3},{value:"Kubespray",id:"kubespray",level:2},{value:"References",id:"references",level:3},{value:"Flatcar",id:"flatcar",level:2}],u={toc:d},k="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"k8s-distributions"},"K8s distributions"),(0,r.kt)("h2",{id:"k0s"},"k0s"),(0,r.kt)("p",null,"All-inclusive k8s distribution configured with all features to build a k8s cluster and packaged as a single binary for easy of use."),(0,r.kt)("p",null,"Can fit in any cloud environment, iOT, Edge and Bare Metal. "),(0,r.kt)("p",null,"Simply design, modest system requirements (1 vCPU, 1GB RAM)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://k0sproject.io/"},"https://k0sproject.io/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.k0sproject.io/v1.22.3+k0s.0/"},"https://docs.k0sproject.io/v1.22.3+k0s.0/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/k0sproject/k0s-0-9-released-4f8530fb3530"},"https://medium.com/k0sproject/k0s-0-9-released-4f8530fb3530"))),(0,r.kt)("h2",{id:"k3s"},"k3s"),(0,r.kt)("p",null,"Lightweight Kubernetes, certified disribution for IoT & Edge computing."),(0,r.kt)("p",null,"It doesn't have any cloud feature (no AWS, no GKE), so it's very small. Packaged with a single ","<","50MB binary."),(0,r.kt)("h3",{id:"remove-k3s-ingress-nginx"},"Remove k3s ingress-nginx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete helmcharts ingress-nginx -n kube-system\n")),(0,r.kt)("p",null,"and then"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"systemctl restart k3s.service\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/issues/737"},"Unable tore-deploying manifest after change"))),(0,r.kt)("h3",{id:"containerd-disk-location"},"Containerd disk location"),(0,r.kt)("p",null,"The normal directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/containerd")," is not the one used in k3s for the container layers. Instead is the ",(0,r.kt)("inlineCode",{parentName:"p"},"/run/k3s/containerd")," but is a ",(0,r.kt)("inlineCode",{parentName:"p"},"tmpfs")," mount."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"root@k3s-1:~# cat /proc/self/mounts | awk '{print $2}' | grep '^/run/k3s' | head -n 5\n/run/k3s/containerd/io.containerd.grpc.v1.cri/sandboxes/dab3158b11a58caedc3f485af984f033a07f94e933046a6da1a00573bc5dd9db/shm\n/run/k3s/containerd/io.containerd.runtime.v2.task/k8s.io/dab3158b11a58caedc3f485af984f033a07f94e933046a6da1a00573bc5dd9db/rootfs\n/run/k3s/containerd/io.containerd.runtime.v2.task/k8s.io/a2a3d5d172be7f269850d7f6d6ee569b51b9d1257a54823c96ce6bcfeb25bee3/rootfs\n/run/k3s/containerd/io.containerd.grpc.v1.cri/sandboxes/2e1e05c5d5503ab760dea5a01a9f1f8f3d2f7f7e16866e93e2384597330834c8/shm\n/run/k3s/containerd/io.containerd.runtime.v2.task/k8s.io/2e1e05c5d5503ab760dea5a01a9f1f8f3d2f7f7e16866e93e2384597330834c8/rootfs\n")),(0,r.kt)("p",null,"Searching in the configuration only find something pointing a plugin optional dir to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/agent/containerd"),", to use things like the snapshooter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"root@k3s-1:~# cat /var/lib/rancher/k3s/agent/etc/containerd/config.toml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[plugins.opt]\n  path = "/var/lib/rancher/k3s/agent/containerd"\n\n[plugins.cri]\n  stream_server_address = "127.0.0.1"\n  stream_server_port = "10010"\n  enable_selinux = false\n  enable_unprivileged_ports = true\n  enable_unprivileged_icmp = true\n  sandbox_image = "rancher/mirrored-pause:3.6"\n\n[plugins.cri.containerd]\n  snapshotter = "overlayfs"\n  disable_snapshot_annotations = true\n\n[plugins.cri.containerd.runtimes.runc]\n  runtime_type = "io.containerd.runc.v2"\n\n[plugins.cri.containerd.runtimes.runc.options]\n    SystemdCgroup = false\n')),(0,r.kt)("p",null,"Searching for containerd in the hard disk and looking into current usage found:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"root@k3s-1:~# for i in /var/lib/rancher/k3s/agent/containerd /var/lib/kubelet /run/k3s/containerd /var/run/k3s/containerd; do du -shc $i; df -h $i; echo; done\n12G /var/lib/rancher/k3s/agent/containerd\n12G total\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/nvme0n1p4  418G  317G   80G  80% /\n\n12M /var/lib/kubelet\n12M total\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/nvme0n1p4  418G  317G   80G  80% /\n\n5,1G    /run/k3s/containerd\n5,1G    total\nFilesystem      Size  Used Avail Use% Mounted on\ntmpfs           1,6G   61M  1,5G   4% /run\n\n5,1G    /var/run/k3s/containerd\n5,1G    total\nFilesystem      Size  Used Avail Use% Mounted on\ntmpfs           1,6G   61M  1,5G   4% /run\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Directory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mount"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Filesystem"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Content"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/var/lib/rancher/k3s/agent/containerd")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/")),(0,r.kt)("td",{parentName:"tr",align:"center"},"root disk"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/var/lib/kubelet")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/")),(0,r.kt)("td",{parentName:"tr",align:"center"},"root disk"),(0,r.kt)("td",{parentName:"tr",align:"left"},"plugins (CSI, devices,...), PODs (container webhooks, plugins like emptydir, volumes like secrets & SA tokens )")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/run/k3s/containerd")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/run")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"tmpfs")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/var/run/k3s/containerd")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/run")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"tmpfs")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"master-no-schedule"},"Master no-schedule"),(0,r.kt)("p",null,"Master No-schedule except kube-system or other deployments"),(0,r.kt)("h4",{id:"on-install"},"On install"),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-taint k3s-controlplane=true:NoExecute")," to k3s install"),(0,r.kt)("h4",{id:"on-already-installed-system"},"On already installed system"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Toleration and affinity"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl taint nodes mynode-01 node-role.kubernetes.io/master=effect:NoSchedule")),(0,r.kt)("li",{parentName:"ul"},"On deployment tolerate ",(0,r.kt)("inlineCode",{parentName:"li"},"NoSchedule"),"and affinity to master."),(0,r.kt)("li",{parentName:"ul"},"Get tainted nodes: ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get nodes -o json | jq .items[].spec.taints"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: metrics-server\n  namespace: kube-system\n  labels:\n    k8s-app: metrics-server\nspec:\n  selector:\n    matchLabels:\n      k8s-app: metrics-server\n  template:\n    metadata:\n      name: metrics-server\n      labels:\n        k8s-app: metrics-server\n    spec:\n      serviceAccountName: metrics-server\n      tolerations:\n      - key: "node-role.kubernetes.io/master"\n        operator: "Exists"\n        effect: "NoSchedule"\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n            - matchExpressions:\n              - key: "node-role.kubernetes.io/master"\n                operator: In\n                values:\n                - "true"\n      volumes:\n      # mount in tmp so we can safely use from-scratch images and/or read-only containers\n      - name: tmp-dir\n        emptyDir: {}\n      containers:\n      - name: metrics-server\n        image: rancher/metrics-server:v0.3.6\n        volumeMounts:\n        - name: tmp-dir\n          mountPath: /tmp\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Labels",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node-role.kubernetes.io/master=true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node-role.kubernetes.io/worker="))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# kubectl get nodes --show-labels\nNAME          STATUS   ROLES    AGE    VERSION         LABELS\nmynode-01   Ready    master   168m   v1.16.3-k3s.2   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/instance-type=k3s,beta.kubernetes.io/os=linux,k3s.io/hostname=mynode-01,k3s.io/internal-ip=212.237.21.49,kubernetes.io/arch=amd64,kubernetes.io/hostname=mynode-01,kubernetes.io/os=linux,node-role.kubernetes.io/master=true\nmynode-02   Ready    worker   168m   v1.16.3-k3s.2   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/instance-type=k3s,beta.kubernetes.io/os=linux,k3s.io/hostname=mynode-02,k3s.io/internal-ip=89.46.65.154,kubernetes.io/arch=amd64,kubernetes.io/hostname=mynode-02,kubernetes.io/os=linux,node-role.kubernetes.io/worker=\n")),(0,r.kt)("h3",{id:"flannel-ufw"},"flannel UFW"),(0,r.kt)("h4",{id:"ansible"},"Ansible"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: k3s firewall between nodes masters\n  hosts: k3s\n  vars:\n    k3s_all_ips: "{% set IP_ARR=[] %}{% for host in groups[\'k3s\'] %}{% if IP_ARR.insert(loop.index,hostvars[host][\'ansible_ssh_host\']) %}{% endif %}{% endfor %}{{IP_ARR}}"\n    k3s_master_ips: "{% set IP_ARR=[] %}{% for host in groups[\'k3smasters\'] %}{% if IP_ARR.insert(loop.index,hostvars[host][\'ansible_ssh_host\']) %}{% endif %}{% endfor %}{{IP_ARR}}"\n    k3s_workers_ips: "{% set IP_ARR=[] %}{% for host in groups[\'k3sworkers\'] %}{% if IP_ARR.insert(loop.index,hostvars[host][\'ansible_ssh_host\']) %}{% endif %}{% endfor %}{{IP_ARR}}"\n    k3s_all_ips_list: "{{ k3s_all_ips | join(\',\')}}"\n\n  tasks:\n\n    - name: Allow tcp ports kube api, schuduler, controller\n      ufw:\n        rule: allow\n        port: "10250:10252"\n        proto: tcp\n        from_ip: "{{ item }}"\n      with_items: "{{ k3s_all_ips }}"\n      when: isk3s_master is defined and (isk3s_master | bool)\n      tags: [ debug ]\n\n    - name: Allow tcp ports API server\n      ufw:\n        rule: allow\n        port: 6443\n        proto: tcp\n        from_ip: "{{ item }}"\n      with_items: "{{ k3s_all_ips }}"\n      when:  isk3s_master is defined and (isk3s_master | bool)\n      tags: [ debug ]\n\n    - name: Allow udp ports flannel overlay\n      ufw:\n        rule: allow\n        port: 8285\n        proto: udp\n        from_ip: "{{ item }}"\n      with_items: "{{ k3s_all_ips }}"\n      tags: [ debug ]\n\n    - name: Allow udp ports flannel overlay icmp\n      ufw:\n        rule: allow\n        port: 8472\n        proto: udp\n        from_ip: "{{ item }}"\n      with_items: "{{ k3s_all_ips }}"\n      tags: [ debug ]\n\n    - name: Allow tcp ports for NodePort services\n      ufw:\n        rule: allow\n        port: "30000:32767"\n        proto: tcp\n        from_ip: "{{ item }}"\n      with_items: "{{ k3s_all_ips }}"\n      tags: [ debug ]\n\n    - name: Allow cni0 to outside\n      ufw:\n        rule: allow\n        interface: cni0\n        direction: in\n        proto: tcp\n        to_ip: any\n      tags: [ debug ]\n\n    - name: debug\n      debug:\n        var: k3s_ips\n        #        var:  "{{ groups[\'k3sworkers\'] | map(\'extract\', hostvars, [\'ansible_host\']) }}"\n      tags: [ debug ]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inventory")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[k3s]\nmynode-01\nmynode-02\n\n[k3smasters]\nmynode-01\n\n[k3smasters:vars]\nisk3s_master=true\n\n[k3sworkers]\nmynode-02\n\n[k3sworkers:vars]\nisk3s_worker=true\n")),(0,r.kt)("h3",{id:"backup-and-restore"},"Backup and restore"),(0,r.kt)("h4",{id:"etcd"},"ETCD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Command:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k3s etcd-snapshot")))),(0,r.kt)("li",{parentName:"ul"},"Doc:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/backup-restore/"},"https://rancher.com/docs/k3s/latest/en/backup-restore/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pet2cattle.com/2022/05/k3s-etcd-s3-backup-restore"},"https://pet2cattle.com/2022/05/k3s-etcd-s3-backup-restore"))))),(0,r.kt)("h4",{id:"pods"},"Pods"),(0,r.kt)("h1",{id:"dns-resolve-issues"},"DNS resolve issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remove DNS from ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/resolved.conf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://serverfault.com/questions/925611/temporary-failure-in-name-resolution-to-internal-host"},"Ubuntu 18 Temporary failure in Name Resolution to internal host")))),(0,r.kt)("h2",{id:"kind"},"kind"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind")," is a tool for running local Kubernetes clusters using Docker container \u201cnodes\u201d.\nkind was primarily designed for testing Kubernetes itself, but may be used for local development or CI."),(0,r.kt)("h3",{id:"simple-command-to-create-a-kind-cluster"},"Simple command to create a kind cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kind create cluster\nkind create cluster --loglevel=debug\n")),(0,r.kt)("h3",{id:"issues"},"Issues"),(0,r.kt)("h4",{id:"stuck-at-starting-control-panel"},'Stuck at "Starting control panel"'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kind/issues/440"},"https://github.com/kubernetes-sigs/kind/issues/440"))),(0,r.kt)("h4",{id:"create-cluster-fails---kind-control-plane-does-not-work-on-zfs"},"Create cluster fails - kind-control-plane does not work on zfs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kind/issues/440"},"https://github.com/kubernetes-sigs/kind/issues/440"))),(0,r.kt)("h4",{id:"zfs-workarounds"},"ZFS workarounds"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/sdelrio/fd628669a9cda68ebc6ca591e1e791ee"},"https://gist.github.com/sdelrio/fd628669a9cda68ebc6ca591e1e791ee")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ashald/docker-volume-loopback"},"https://github.com/ashald/docker-volume-loopback"))),(0,r.kt)("h2",{id:"install-cluster"},"Install cluster"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s-ansible"},"Ansible")," (Debian/Ubuntu/CentOS)(x64/arm64/armhf)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://thenewstack.io/tutorial-install-a-highly-available-k3s-cluster-at-the-edge/"},"Tutorial: HA on the Edge (etcd)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.alexellis.io/bare-metal-kubernetes-with-k3s/"},"Tutorial: Bare-metal (arkade)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@mattiaperi/kubernetes-cluster-with-k3s-and-multipass-7532361affa3"},"Tutorial: multi-node multipass")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@mattiaperi/kubernetes-cluster-with-k3s-and-multipass-7532361affa3"},"Tutorial: K3s, Traefik, LE, local-path")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitlab.com/k3s_hetzner/k3s_hetzner"},"Terraform: Hetzner cloud")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jbhannah.net/articles/k3s-over-watchguard-with-kilo"},"Kilo: secure k8s over WireGuard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@lukejpreston/local-kubernetes-development-a14ea8be54d6"},"k3d: development cluster")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@marcovillarreal_40011/cheap-and-local-kubernetes-playground-with-k3s-helm-5a0e2a110de9"},"cheap and local k8s playground")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.disasterproject.com/simplify-kubernetes-k3s/"},"k3s + metallb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/blob/master/docker-compose.yml"},"docker-compose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=4KpVW6jpSnc&feature=share"},"Video: K8s master class: Speed Up your CN aplications deployment k3s+Traefik")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pet2cattle.com/2021/05/k3s-autoupgrade"},"k8s system-upgrae-controller")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://thenewstack.io/tutorial-configure-cloud-native-edge-infrastructure-with-k3s-calico-portworx/"},"k3s + calico + portworks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@mabrams_46032/kubernetes-on-raspberry-pi-c246c72f362f"},"k3s on Raspberry Pi")," (requires armv7 or higher, 8GB SSD)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhimin-wen.medium.com/sticky-sessions-in-kubernetes-56eb0e8f257d"},"k3s + traefik + sticky session"))),(0,r.kt)("h3",{id:"deploy-clusters"},"Deploy clusters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://thenewstack.io/kubecon-eu-surge-of-kubernetes-edge-deployments-leads-to-cluster-sprawl/"},"Fleet")," (fleet is no longer developed or maintained by CoreOS. After February 1, 2018)")),(0,r.kt)("h3",{id:"containerd-logs"},"Containerd logs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/agent/containerd/containerd.log"))),(0,r.kt)("h3",{id:"kubeconfig"},"KUBECONFIG"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.yaml"))),(0,r.kt)("h2",{id:"kubespray"},"Kubespray"),(0,r.kt)("p",null,"Ansible playbook to deploy a production Ready Kubernetes Cluster"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kubespray"},"Homepage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sdelrio/install-k8s-kvm"},"My Kubespray install on kvm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@jodywan/cloud-native-devops-09a-ha-kubernetes-with-kubespray-16ec8cd26040"},"https://medium.com/@jodywan/cloud-native-devops-09a-ha-kubernetes-with-kubespray-16ec8cd26040"))),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://k3s.io/"},"Homepage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/advanced/"},"Advanced options & configuration"))),(0,r.kt)("h2",{id:"flatcar"},"Flatcar"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://thenewstack.io/flatcar-container-linux-the-ideal-os-for-running-kubernetes-at-the-edge/"},"https://thenewstack.io/flatcar-container-linux-the-ideal-os-for-running-kubernetes-at-the-edge/"))))}p.isMDXComponent=!0}}]);