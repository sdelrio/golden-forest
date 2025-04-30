# Docker Hub Rate Limits

Since 1st nov 2020  Docker Hub will apply 100 max pull limits/6h (200/6h if registered account).

## Solutions

### Local mirror

* Install a lcoal registry

### Public Docker Hub Mirror

Change images from:

```Dockerfile
FROM ubuntu:latest
```

to:

```Dockerfile
FROM mirror.gcr.io/library/ubuntu:latest
```

* [https://cloud.google.com/blog/products/containers-kubernetes/mitigating-the-impact-of-new-docker-hub-pull-request-limits](https://cloud.google.com/blog/products/containers-kubernetes/mitigating-the-impact-of-new-docker-hub-pull-request-limits)

### Publish images to another registry

Like [GitHub's container registry (ghcr.io)](https://github.com/features/packages) with offers unlimited pulls of pulibc images.

Change images from:

```Dockerfile
FROM youruser/yourapp:0.1.2
```

to:

```Dockerfile
FROM ghcr.io/youruser/yourapp:0.1.2
```

### Propagate ImagePullSecrets to all namespaces

* [https://github.com/alexellis/registry-creds](https://github.com/alexellis/registry-creds)

## References

* [https://inlets.dev/blog/2020/10/29/preparing-docker-hub-rate-limits.html](https://inlets.dev/blog/2020/10/29/preparing-docker-hub-rate-limits.html)

