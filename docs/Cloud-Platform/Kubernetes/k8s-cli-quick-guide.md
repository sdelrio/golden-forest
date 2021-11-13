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

## K8s Cheat Sheets

* <https://kubernetes.io/docs/reference/kubectl/cheatsheet/>
* <https://github.com/dennyzhang/cheatsheet-kubernetes-A4/blob/master/cheatsheet-kubernetes-A4.pdf>

