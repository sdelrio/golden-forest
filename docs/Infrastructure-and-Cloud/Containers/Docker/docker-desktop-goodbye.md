---
sidebar_position: 1
---

# Goodbye Docker Desktop


## Unistall docker-desktop for Mac


1. Unisntal docker cli if you had it (needed if it was installed after docker-form-mac)

```bash
brew uninstall docker
```

2. Remove docker for mac from `Finder/Applications`.

## Install minikube with brew

1. Install hyperkit

```bash
brew install hyperkit
```

2. Install docker cli

```bash
brew install docker
```

3. Install kubectl

```bash
brew install kubectl
```

4. Install minikube and docker daemon

```bash
brew install minikube
```

5. Set CPU and memory for the hyperkit VM (select the cpu/medmory depending on your computer, half cpu/memory shoudl be enough)

```bash
minikube config set cpus 4
minikube config set memory 8g
```

6. Install minikube with specific k8s version and hyperkit

```bash
minikube start --kubernetes-version=1.20.7 --driver=hyperkit --container-runtime=docker
```


7. Use docker daemon for the VM

```bash
eval $(minikube docker-env)
```

8. Install docker-compose if needed

```bash
brew install docker-compose
```

## References

* https://itnext.io/goodbye-docker-desktop-hello-minikube-3649f2a1c469


