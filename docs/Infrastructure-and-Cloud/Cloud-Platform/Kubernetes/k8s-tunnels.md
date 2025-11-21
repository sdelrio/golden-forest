# Tunnels

## Inlets

### Sample install

Situation:

* 1 external node in the cloud
* 1 external domain mytunnel.mydomain.com
* 1 internal cluster in the LAN
* 1 port redirect to 1 internal LAN cluster IP, in this sample: 192.168.1.140

#### External node

For this test a k3s aruba node was used

```
export token=$(head -c 16 /dev/urandom | shasum | cut -d" " -f1)
echo $token > lasttoken.txt
inlets server --port=8800 --token="$token"
```

* Crear random token:

```
export token=$(head -c 16 /dev/urandom | shasum | cut -d" " -f1)
```

* Add token to k8s secrets:

```
kubectl create secret generic inlets --from-literal=TOKEN=$token
```

* `inlets.yaml`

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: inlets
spec:
  replicas: 1
  selector:
    matchLabels:
      app: inlets
  template:
    metadata:
      labels:
        app: inlets
    spec:
      containers:
      - name: inlets
        image: alexellis2/inlets:2.2.0
        command:
          - "inlets"
          - "server"
          - "--port=8000"
          - "--token=$(TOKEN)"
#          - "--print-token=false"
        resources:
          limits:
            cpu: 250m
            memory: 16Mi
          requests:
            cpu: 150m
            memory: 16Mi
        env:
          - name: TOKEN
            valueFrom:
              secretKeyRef:
                name: inlets
                key: TOKEN
        ports:
        - containerPort: 8000
---
apiVersion: v1
kind: Service
metadata:
  name: inlets-svc
spec:
  ports:
  - port: 80
    targetPort: 8000
    protocol: TCP
    name: http
  selector:
    app: inlets
---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: inlets-ingress
  annotations:
    kubernetes.io/ingress.class: traefik
#    ingress.kubernetes.io/ssl-redirect: "true"
#  ingress.kubernetes.io/ssl-redirect: "true"
#  annotations:
#   ingress.kubernetes.io/auth-type: "basic"
#   ingress.kubernetes.io/auth-secret: "mysecret"
spec:
#  tls:
#  - hosts:
#    - mytunnel.mydomain.com
##    secretName: inlets-secret
  rules:
  - host: mytunnel.mydomain.com
    http:
      paths:
      - path: /
        backend:
          serviceName: inlets-svc
          servicePort: 80
```

* Traefik config:

```
root@fr1elvs01:~/inlets# cat /var/lib/rancher/k3s/server/manifests/traefik.yaml
```

```

apiVersion: helm.cattle.io/v1
kind: HelmChart
metadata:
  name: traefik
  namespace: kube-system
spec:
  chart: https://%{KUBERNETES_API}%/static/charts/traefik-1.77.1.tgz
  set:
    rbac.enabled: "true"
    ssl.enabled: "true"
    acme.enabled: "true"
    acme.persistence.enabled: "true"
    acme.logging: "true"
    acme.staging: "false"
    acme.caServer: "https://acme-v02.api.letsencrypt.org/directory"
    acme.email: "daranduil@protonmail.com"
    acme.challengeType: "tls-alpn-01"
    metrics.prometheus.enabled: "true"
    kubernetes.ingressEndpoint.useDefaultPublishedService: "true"
    dashboard.enabled: "true"
    dashboard.domain: "myapp.mydomain.com"
    dashboard.auth.basic.test: "$apr1$cIbpWQ.R$0CabcdaYieEW5m123456/"
    externalTrafficPolicy: "Local"
#    acme.challengeType: "http-01"
#    acme.persistence.size:
#    acme.persistence.existingClaim:
#    forwardedHeaders.enabled: "true"
#    forwardedHeaders.trustedIPs: ["0.0.0.0/0"]
#    proxyProtocol.enabled: "false"
#    proxyProtocol.enabled: "true"
#    forwardAuth.trustForwardHeader:
```

#### Client part

In local LAN cluster

```
 $ cat inlets_client.yaml
#export REMOTE="wss://mytunnel.mydomain.com"    # for testing inlets on your laptop, replace with the public IPv4
#export TOKEN="$token"  # the client token is found on your VPS or on start-up of "inlets server"
#inlets client \
#    --remote=$REMOTE \
#    --upstream=https://192.168.1.140:443 \
#    --token $TOKEN \
#    --print-token=false

apiVersion: apps/v1
kind: Deployment
metadata:
  name: inlets
spec:
  replicas: 1
  selector:
    matchLabels:
      app: inlets
  template:
    metadata:
      labels:
        app: inlets
    spec:
      containers:
      - name: inlets
        image: alexellis2/inlets:2.2.0
        command:
          - "inlets"
          - "client"
          - "--remote=wss://mytunnel.mydomain.com"
          - "--upstream=https://192.168.1.140:443"
          - "--token=$toke"
          - "--print-token=false"
```

### References

* [Exploring NAT Traversal and Tunnels with Inlets and Inlets Pro](https://blog.heyal.co.uk/inlets-pro/)
* [How To Set Up an Nginx Ingress on DigitalOcean Kubernetes Using Helm
NginxSecurityLet's EncryptKubernetes](https://www.digitalocean.com/community/tutorials/how-to-set-up-an-nginx-ingress-on-digitalocean-kubernetes-using-helm)

