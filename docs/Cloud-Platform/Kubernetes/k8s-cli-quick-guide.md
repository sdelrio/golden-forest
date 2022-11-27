# kubectl usefull commands

## Get storage classes

```bash
kubectl get sc -o go-template=$'{{range .items}}{{.metadata.name}}\n{{end}}'
```

## List all tainted noddes

Usually the master nodes are tainted

```bash
kubectl get nodes -o json | jq .items[].spec
```

## Change default namespace

```bash
kubectl config set-context --current --namespace=mynamespace
```

## Network debug

Spin up a throw away container for debugging.

```bash
kubectl run tmp-shell --rm -i --tty --image nicolaka/netshoot -- /bin/bash
```

And if you want to spin up a container on the host's network namespace.

```bash
$ kubectl run tmp-shell --rm -i --tty --overrides='{"spec": {"hostNetwork": true}}' --image nicolaka/netshoot -- /bin/bash
```

* [GitHub](https://github.com/nicolaka/netshoot)

## Check resources when namespace keep on deleting

``` bash
$ kubectl api-resources --verbs=list --namespaced -o name \
  | xargs -n 1 kubectl get --show-kind --ignore-not-found -n <namespace>
```

## K8s Cheat Sheets

* <https://kubernetes.io/docs/reference/kubectl/cheatsheet/>
* <https://github.com/dennyzhang/cheatsheet-kubernetes-A4/blob/master/cheatsheet-kubernetes-A4.pdf>

