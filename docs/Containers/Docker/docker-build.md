# Docker build

`docker build` builds an image from a Dockerfile.

## Don't run containers as root

Even though containers are theoretically isolated, it is not good security practice to run processes as root inside them in the same way as you don’t run your web server as root.

Towards the end of your build you should add something like

```Dockerfile
RUN useradd app
USER app
```
## Don't use maintainer


`MAINTAINER` is deprecated. Instead of

```Dockerfile
MAINTAINER myfullname (myuser@mydomain.com)
```

Use `LABEL`s instead so they can be inspected just like any other metadata.

```Dockerfile
LABEL maintainer="myfullname (myuser@mydomain.com)"
```

## Avoid ENV where possible

`ENV` variables remain in the container at run time and pollute its own environment. Use `ARG`s instead.


## Build with cache mount

Speed up your builds by providing a cache for your package manager, ccache, git and so on. This needs to be enabled with DOCKER_CLI_EXPERIMENTAL=enabled

```Dockerfile
# syntax=docker/dockerfile:experimental
# FROM and the rest

RUN --mount=type=cache,target=/var/cache/apt --mount=type=cache,target=/var/lib/apt \
    apt-get install -y --no-install-recommends mongodb-server
```

## Use SSH agent

If you require SSH credentials for your build don’t copy ~/.ssh because it will stay in the layer even if you remove it later.
Set up SSH agent, and use the experimental feature for ssh mounts

```Dockerfile
RUN --mount=type=ssh git clone https://github.com/private_repo/repo.git
```

## Use build secrets

If you need sensitive files that should not be public for your build, use secrets. This way, those files will only be visible to that `RUN` command during its execution and its contents will disappear without a trace from all layers after that.

```Dockerfile
RUN --mount=type=secret,id=signing_key,dst=/tmp/sign.cert signing_command
```

## Articles

* [Building Docker containers in 2019](https://ownyourbits.com/2019/05/13/building-docker-containers-in-2019/)
* [Docker best practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices)

