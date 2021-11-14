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

### Install cluster

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

### References

* [Homepage](https://k3s.io/)
* [Advanced options & configuration](https://rancher.com/docs/k3s/latest/en/advanced/)

## Flatcar

* <https://thenewstack.io/flatcar-container-linux-the-ideal-os-for-running-kubernetes-at-the-edge/>

