# containerd

Standar container runtime, best replacement for docker in k8s since v1.20 
(docker-shim was deprecated then).

* [https://containerd.io/](https://containerd.io/)


# [nerdctl](https://github.com/containerd/nerdctl)

contaiNERD CTL - Docker-compatible CLI for containerd, with support for Compose, Rootless, eStargz, OCIcrypt, IPFS, ...

Basically replace docker UX but in containerd

## Basic usage

```bash
nerdctl run -it --rm alpine 

nerdctl build -t foo /some-dockerfile-directory

nerdctl build -o type=local,dest=. /some-dockerfile-directory

nerdctl build --platform linux/arm/v7,linux/arm64,linux/amd64 -t multiarchdemo .

nerdctl compose -f ./examples/compose-wordpress/docker-compose.yaml up

```

* [Command reference](https://github.com/containerd/nerdctl#command-reference)
* [Rootless mode](https://github.com/containerd/nerdctl#rootless-mode)
* [Running rootless containers with nerdctl](https://pet2cattle.com/2022/02/rootless-containers-nerdctl)

