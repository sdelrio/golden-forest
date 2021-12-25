# K8s backup

## Control Plane

### Relevant Certificates

#### Backup certificates

```bash
sudo cp -r /etc/kubernetes/pki backup/
```

#### Restore certificates

```bash
sudo cp -r backup/pki /etc/kubernetes/
```

### ETCD

#### Make etcd snapshot

```bash
sudo docker run --rm -v $(pwd)/backup:/backup \
    --network host \
    -v /etc/kubernetes/pki/etcd:/etc/kubernetes/pki/etcd \
    --env ETCDCTL_API=3 \
    k8s.gcr.io/etcd:3.4.3-0 \
    etcdctl --endpoints=https://127.0.0.1:2379 \
    --cacert=/etc/kubernetes/pki/etcd/ca.crt \
    --cert=/etc/kubernetes/pki/etcd/healthcheck-client.crt \
    --key=/etc/kubernetes/pki/etcd/healthcheck-client.key \
    snapshot save /backup/etcd-snapshot-latest.db
```

#### Restore etcd

```
sudo mkdir -p /var/lib/etcd
sudo docker run --rm \
    -v $(pwd)/backup:/backup \
    -v /var/lib/etcd:/var/lib/etcd \
    --env ETCDCTL_API=3 \
    k8s.gcr.io/etcd:3.4.3-0 \
    /bin/sh -c "etcdctl snapshot restore '/backup/etcd-snapshot-latest.db' ; mv /default.etcd/member/ /var/lib/etcd/"
```

### kubeadm-config


#### Backup kuebadm-config

```bash
sudo cp /etc/kubeadm/kubeadm-config.yaml backup/
```

#### Restore kuebadm-config

```bash
sudo mkdir /etc/kubeadm
sudo cp backup/kubeadm-config.yaml /etc/kubeadm/
```

#### Initialize the master with the backup

```bash
sudo kubeadm init --ignore-preflight-errors=DirAvailable--var-lib-etcd \
    --config /etc/kubeadm/kubeadm-config.yaml
```

## References

* <https://elastisys.com/backup-kubernetes-how-and-why/>

