# Kubectl plugins


## Rakkess

Review Access - kubectl plugin to show an access matrix for k8s server resources

Sample command:

```bash
rakkess --namepsace default
```

Will give us LIST, CREATE, UPDATE, DELETE for each resource in the namespace `default`

* [HomePage](https://github.com/corneliusweig/rakkess)

## Who-can

Show who has RBAC permissions to perform actions on different resources in Kubernetes.

### Install

```
kubectl krew install who-can
```

* [HomePage](https://github.com/aquasecurity/kubectl-who-can)

## Stern

Multi pod and container log tailing for Kubernetes.

* [HomePage](https://github.com/wercker/stern)

