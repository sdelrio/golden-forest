# K8s distributions

## k0s

All-inclusive k8s distribution configured with all features to build a k8s cluster and packaged as a single binary for easy of use.

Can fit in any cloud environment, iOT, Edge and Bare Metal. 

Simply design, modest system requirements (1 vCPU, 1GB RAM).

* <https://k0sproject.io/>
* <https://docs.k0sproject.io/v1.22.3+k0s.0/>
* <https://medium.com/k0sproject/k0s-0-9-released-4f8530fb3530>

## k3s

Lightweight Kubernetes, certified disribution for IoT & Edge computing.

It doesn't have any cloud feature (no AWS, no GKE), so it's very small. Packaged with a single &lt;50MB binary.

### Remove k3s ingress-nginx

```
kubectl delete helmcharts ingress-nginx -n kube-system
```

and then

```
systemctl restart k3s.service
```
* [Unable tore-deploying manifest after change](https://github.com/k3s-io/k3s/issues/737)

### Master no-schedule

Master No-schedule except kube-system or other deployments

#### On install

Add `--node-taint k3s-controlplane=true:NoExecute` to k3s install

#### On already installed system

* Toleration and affinity

  * `kubectl taint nodes mynode-01 node-role.kubernetes.io/master=effect:NoSchedule`
  * On deployment tolerate `NoSchedule`and affinity to master.
  * Get tainted nodes: `kubectl get nodes -o json | jq .items[].spec.taints`

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: metrics-server
  namespace: kube-system
  labels:
    k8s-app: metrics-server
spec:
  selector:
    matchLabels:
      k8s-app: metrics-server
  template:
    metadata:
      name: metrics-server
      labels:
        k8s-app: metrics-server
    spec:
      serviceAccountName: metrics-server
      tolerations:
      - key: "node-role.kubernetes.io/master"
        operator: "Exists"
        effect: "NoSchedule"
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: "node-role.kubernetes.io/master"
                operator: In
                values:
                - "true"
      volumes:
      # mount in tmp so we can safely use from-scratch images and/or read-only containers
      - name: tmp-dir
        emptyDir: {}
      containers:
      - name: metrics-server
        image: rancher/metrics-server:v0.3.6
        volumeMounts:
        - name: tmp-dir
          mountPath: /tmp
```

* Labels
  * `node-role.kubernetes.io/master=true`
  * `node-role.kubernetes.io/worker=`

```
# kubectl get nodes --show-labels
NAME          STATUS   ROLES    AGE    VERSION         LABELS
mynode-01   Ready    master   168m   v1.16.3-k3s.2   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/instance-type=k3s,beta.kubernetes.io/os=linux,k3s.io/hostname=mynode-01,k3s.io/internal-ip=212.237.21.49,kubernetes.io/arch=amd64,kubernetes.io/hostname=mynode-01,kubernetes.io/os=linux,node-role.kubernetes.io/master=true
mynode-02   Ready    worker   168m   v1.16.3-k3s.2   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/instance-type=k3s,beta.kubernetes.io/os=linux,k3s.io/hostname=mynode-02,k3s.io/internal-ip=89.46.65.154,kubernetes.io/arch=amd64,kubernetes.io/hostname=mynode-02,kubernetes.io/os=linux,node-role.kubernetes.io/worker=
```

### flannel UFW

#### Ansible

```yaml
- name: k3s firewall between nodes masters
  hosts: k3s
  vars:
    k3s_all_ips: "{% set IP_ARR=[] %}{% for host in groups['k3s'] %}{% if IP_ARR.insert(loop.index,hostvars[host]['ansible_ssh_host']) %}{% endif %}{% endfor %}{{IP_ARR}}"
    k3s_master_ips: "{% set IP_ARR=[] %}{% for host in groups['k3smasters'] %}{% if IP_ARR.insert(loop.index,hostvars[host]['ansible_ssh_host']) %}{% endif %}{% endfor %}{{IP_ARR}}"
    k3s_workers_ips: "{% set IP_ARR=[] %}{% for host in groups['k3sworkers'] %}{% if IP_ARR.insert(loop.index,hostvars[host]['ansible_ssh_host']) %}{% endif %}{% endfor %}{{IP_ARR}}"
    k3s_all_ips_list: "{{ k3s_all_ips | join(',')}}"

  tasks:

    - name: Allow tcp ports kube api, schuduler, controller
      ufw:
        rule: allow
        port: "10250:10252"
        proto: tcp
        from_ip: "{{ item }}"
      with_items: "{{ k3s_all_ips }}"
      when: isk3s_master is defined and (isk3s_master | bool)
      tags: [ debug ]

    - name: Allow tcp ports API server
      ufw:
        rule: allow
        port: 6443
        proto: tcp
        from_ip: "{{ item }}"
      with_items: "{{ k3s_all_ips }}"
      when:  isk3s_master is defined and (isk3s_master | bool)
      tags: [ debug ]

    - name: Allow udp ports flannel overlay
      ufw:
        rule: allow
        port: 8285
        proto: udp
        from_ip: "{{ item }}"
      with_items: "{{ k3s_all_ips }}"
      tags: [ debug ]

    - name: Allow udp ports flannel overlay icmp
      ufw:
        rule: allow
        port: 8472
        proto: udp
        from_ip: "{{ item }}"
      with_items: "{{ k3s_all_ips }}"
      tags: [ debug ]

    - name: Allow tcp ports for NodePort services
      ufw:
        rule: allow
        port: "30000:32767"
        proto: tcp
        from_ip: "{{ item }}"
      with_items: "{{ k3s_all_ips }}"
      tags: [ debug ]

    - name: Allow cni0 to outside
      ufw:
        rule: allow
        interface: cni0
        direction: in
        proto: tcp
        to_ip: any
      tags: [ debug ]

    - name: debug
      debug:
        var: k3s_ips
        #        var:  "{{ groups['k3sworkers'] | map('extract', hostvars, ['ansible_host']) }}"
      tags: [ debug ]
```

* Inventory

```ini
[k3s]
mynode-01
mynode-02

[k3smasters]
mynode-01

[k3smasters:vars]
isk3s_master=true

[k3sworkers]
mynode-02

[k3sworkers:vars]
isk3s_worker=true
```

### Backup and restore

#### ETCD

* Command:
  * `k3s etcd-snapshot`
* Doc:
  * <https://rancher.com/docs/k3s/latest/en/backup-restore/>
  * <https://pet2cattle.com/2022/05/k3s-etcd-s3-backup-restore>

#### Pods

# DNS resolve issues

* Remove DNS from `/etc/systemd/resolved.conf`

* [Ubuntu 18 Temporary failure in Name Resolution to internal host](https://serverfault.com/questions/925611/temporary-failure-in-name-resolution-to-internal-host)

## kind

[kind](https://kind.sigs.k8s.io/) is a tool for running local Kubernetes clusters using Docker container “nodes”.
kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI.

### Simple command to create a kind cluster
```bash
kind create cluster
kind create cluster --loglevel=debug
```

### Issues

#### Stuck at "Starting control panel"

* <https://github.com/kubernetes-sigs/kind/issues/440>

#### Create cluster fails - kind-control-plane does not work on zfs

* <https://github.com/kubernetes-sigs/kind/issues/440>

#### ZFS workarounds

* <https://gist.github.com/sdelrio/fd628669a9cda68ebc6ca591e1e791ee>
* <https://github.com/ashald/docker-volume-loopback>

## Install cluster

* [Ansible](https://github.com/k3s-io/k3s-ansible) (Debian/Ubuntu/CentOS)(x64/arm64/armhf)
* [Tutorial: HA on the Edge (etcd)](https://thenewstack.io/tutorial-install-a-highly-available-k3s-cluster-at-the-edge/)
* [Tutorial: Bare-metal (arkade)](https://blog.alexellis.io/bare-metal-kubernetes-with-k3s/)
* [Tutorial: multi-node multipass](https://medium.com/@mattiaperi/kubernetes-cluster-with-k3s-and-multipass-7532361affa3)
* [Tutorial: K3s, Traefik, LE, local-path](https://medium.com/@mattiaperi/kubernetes-cluster-with-k3s-and-multipass-7532361affa3)
* [Terraform: Hetzner cloud](https://gitlab.com/k3s_hetzner/k3s_hetzner)
* [Kilo: secure k8s over WireGuard](https://jbhannah.net/articles/k3s-over-watchguard-with-kilo)
* [k3d: development cluster](https://medium.com/@lukejpreston/local-kubernetes-development-a14ea8be54d6)
* [cheap and local k8s playground](https://medium.com/@marcovillarreal_40011/cheap-and-local-kubernetes-playground-with-k3s-helm-5a0e2a110de9)
* [k3s + metallb](https://www.disasterproject.com/simplify-kubernetes-k3s/)
* [docker-compose](https://github.com/k3s-io/k3s/blob/master/docker-compose.yml)
* [Video: K8s master class: Speed Up your CN aplications deployment k3s+Traefik](https://www.youtube.com/watch?v=4KpVW6jpSnc&feature=share)
* [k8s system-upgrae-controller](https://pet2cattle.com/2021/05/k3s-autoupgrade)
* [k3s + calico + portworks](https://thenewstack.io/tutorial-configure-cloud-native-edge-infrastructure-with-k3s-calico-portworx/)
* [k3s on Raspberry Pi](https://medium.com/@mabrams_46032/kubernetes-on-raspberry-pi-c246c72f362f) (requires armv7 or higher, 8GB SSD)
* [k3s + traefik + sticky session](https://zhimin-wen.medium.com/sticky-sessions-in-kubernetes-56eb0e8f257d)

### Deploy clusters

* [Fleet](https://thenewstack.io/kubecon-eu-surge-of-kubernetes-edge-deployments-leads-to-cluster-sprawl/)

### Containerd logs

* `/var/lib/rancher/k3s/agent/containerd/containerd.log`

### KUBECONFIG

* `/etc/rancher/k3s/k3s.yaml`

## Kubespray

Ansible playbook to deploy a production Ready Kubernetes Cluster

* [Homepage](https://github.com/kubernetes-sigs/kubespray)
* [My Kubespray install on kvm](https://github.com/sdelrio/install-k8s-kvm)
* <https://medium.com/@jodywan/cloud-native-devops-09a-ha-kubernetes-with-kubespray-16ec8cd26040>

### References

* [Homepage](https://k3s.io/)
* [Advanced options & configuration](https://rancher.com/docs/k3s/latest/en/advanced/)

## Flatcar

* <https://thenewstack.io/flatcar-container-linux-the-ideal-os-for-running-kubernetes-at-the-edge/>

