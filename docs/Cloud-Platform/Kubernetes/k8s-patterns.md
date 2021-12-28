# Kubernetes patterns


## Python + Redis sidecar

web-app -&gt; redis -&gt; database

```yaml
apiVersion: v1
kind: Service
metadata:
  name: web
  labels:
    app: web
spec:
  ports:
  - port: 80
    name: redis
    targetPort: 5000
  selector:
    app: web
  type: LoadBalancer
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
spec:
  selector:
    matchLabels:
      app: web
  replicas: 3
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: redis
        image: redis
        ports:
          - containerPort: 6379
            name: redis
            protocol: TCP
      - name: web-app
        image: janakiramm/py-red
        env:
          - name: "REDIS_HOST"
            value: "localhost"
```

### References

* [2020: Tutorial: Apply the Sidecar Pattern to Deploy Redis in Kubernetes](https://thenewstack.io/tutorial-apply-the-sidecar-pattern-to-deploy-redis-in-kubernetes/)
* [GitHub](https://github.com/janakiramm/Kubernetes-multi-container-pod)

