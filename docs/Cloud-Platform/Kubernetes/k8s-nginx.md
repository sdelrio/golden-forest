# K8s nginx-ingress

## [External OAUTH Authentication](https://kubernetes.github.io/ingress-nginx/examples/auth/oauth-external-auth/)

Requires:

* A domain name for the ingress rule: `https://www.mydomain.com`
* Autorization callback url, domain + `/oauth2/callback`: `https://www.mydomain.com/oauth/callback`
* Register new application in the OAUTH provider, sample github: [https://github.com/settings/applications/new](https://github.com/settings/applications/new)
* Aplication for the authorization callback:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    k8s-app: oauth2-proxy
  name: oauth2-proxy
  namespace: kube-system
spec:
  replicas: 1
  selector:
    matchLabels:
      k8s-app: oauth2-proxy
  template:
    metadata:
      labels:
        k8s-app: oauth2-proxy
    spec:
      containers:
      - args:
        - --provider=github
        - --email-domain=*
        - --upstream=file:///dev/null
        - --http-address=0.0.0.0:4180
        # Register a new application
        # https://github.com/settings/applications/new
        env:
        # Example: your github client id, like the login
        - name: OAUTH2_PROXY_CLIENT_ID
          value: [Client ID](Client ID)
        # Example: your github client secret
        - name: OAUTH2_PROXY_CLIENT_SECRET
          value: [Client Secret](Client Secret)
        # docker run -ti --rm python:3-alpine python -c \
        #  'import secrets,base64; print(base64.b64encode(base64.b64encode(secrets.token_bytes(16))));'
        - name: OAUTH2_PROXY_COOKIE_SECRET
          value: SECRET
        image: quay.io/oauth2-proxy/oauth2-proxy:latest
        imagePullPolicy: Always
        name: oauth2-proxy
        ports:
        - containerPort: 4180
          protocol: TCP

---

apiVersion: v1
kind: Service
metadata:
  labels:
    k8s-app: oauth2-proxy
  name: oauth2-proxy
  namespace: kube-system
spec:
  ports:
  - name: http
    port: 4180
    protocol: TCP
    targetPort: 4180
  selector:
    k8s-app: oauth2-proxy
```

* Annotate your ingress:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/auth-url: "https://$host/oauth2/auth"
    nginx.ingress.kubernetes.io/auth-signin: "https://$host/oauth2/start?rd=$escaped_request_uri"
```
## Sticky Sessions

The nginx-ingress controller already has these requirement implemented. The controller replies with a Set-Cookie header to the firest request. The value of the cookie will map to a specific pod replica. When subsequent request come back again, the client browser will attach the cookie and the ingress controller is therefore able to route the traffice to the same pod replica.

The configuration is achieved with annotations:
```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: nginx-test
  annotations:
    nginx.ingress.kubernetes.io/affinity: "cookie"
    nginx.ingress.kubernetes.io/session-cookie-name: "route"
    nginx.ingress.kubernetes.io/session-cookie-expires: "172800"
    nginx.ingress.kubernetes.io/session-cookie-max-age: "172800"
```

* [https://zhimin-wen.medium.com/sticky-sessions-in-kubernetes-56eb0e8f257d](https://zhimin-wen.medium.com/sticky-sessions-in-kubernetes-56eb0e8f257d)
* [https://kubernetes.github.io/ingress-nginx/examples/affinity/cookie/ingress.yaml](https://kubernetes.github.io/ingress-nginx/examples/affinity/cookie/ingress.yaml)

