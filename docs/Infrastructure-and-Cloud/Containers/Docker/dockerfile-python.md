# Python Dockerfiles

Since version 17.05, Docker has supported [multi-stage builds](https://docs.docker.com/develop/develop-images/multistage-build), which allow for the separation of build-time dependencies from the final runtime image. This approach optimizes image size and enhances security by excluding unnecessary tools from the production environment.

## Log Buffering

By default, Python buffers its output, which can cause delays in log visibility when running within a container. To ensure that logs are emitted in real-time and managed correctly by the container runtime, you should disable output buffering.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="env" label="Using ENV" default>

```bash
export PYTHONUNBUFFERED=1
```
  </TabItem>
  <TabItem value="cli" label="Command line option">

```bash
CMD ["python","-u","main.py"]
```
  </TabItem>
</Tabs>

* [https://stackoverflow.com/questions/29663459/python-app-does-not-print-anything-when-running-detached-in-docker](https://stackoverflow.com/questions/29663459/python-app-does-not-print-anything-when-running-detached-in-docker)
* [https://stackoverflow.com/questions/107705/disable-output-buffering](https://stackoverflow.com/questions/107705/disable-output-buffering)

## Alpine Base Image

While Alpine-based images offer a smaller footprint, they introduce several trade-offs:

* **Library Compatibility**: Alpine uses [musl](https://en.wikipedia.org/wiki/Musl) instead of `glibc`. This can lead to subtle bugs or performance degradation in applications expecting standard C libraries.
* **Extended Build Times**: Pre-compiled [wheels](https://pythonwheels.com/) are often unavailable for Alpine. This requires compiling packages from source during the build process, which significantly increases build duration.
* **Stability**: Official Debian or Ubuntu-based images are generally recommended for production environments to ensure faster builds, standard library compatibility, and consistent security maintenance.

For more information, see: [The best Docker base image for your Python application](https://pythonspeed.com/articles/base-image-python-docker-images/)

#### Multistage build

- Build stage with dependeencies
- Production stage with only required runtime file dependencies

```dockerfile
FROM python:3.7-alpine as base

FROM base as builder

RUN mkdir /install
WORKDIR /install

COPY requirements.txt /requirements.txt

RUN pip install --install-option="--prefix=/install" -r /requirements.txt

FROM base

COPY --from=builder /install /usr/local
COPY src /app

WORKDIR /app

CMD ["gunicorn", "-w 4", "main:app"]
```

### Smallest size python base image

```dockerfile
FROM alpine:3.14

# This hack is widely applied to avoid python printing issues in docker containers.
# See: https://github.com/Docker-Hub-frolvlad/docker-alpine-python3/pull/13
ENV PYTHONUNBUFFERED=1

RUN echo "**** install Python ****" && \
    apk add --no-cache python3 && \
    if [ ! -e /usr/bin/python ]; then ln -sf python3 /usr/bin/python ; fi && \
    \
    echo "**** install pip ****" && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --no-cache --upgrade pip setuptools wheel && \
    if [ ! -e /usr/bin/pip ]; then ln -s pip3 /usr/bin/pip ; fi
```

* [https://github.com/Docker-Hub-frolvlad/docker-alpine-python3](https://github.com/Docker-Hub-frolvlad/docker-alpine-python3)

## Small size with wheel usage

Using `pip wheel`, and a few more best practices sprinkled in, here’s a sample of multi-stage `Dockerfile` looks like:

```dockerfile
# build stage
# ========================
FROM python:3.8.0 as build
ENV DOCKER_STAGE=build PYTHONUNBUFFERED=1

RUN \
  DEBIAN_FRONTEND=noninteractive apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get -y install \
      --no-install-recommends \
      build-deps=1.7.* \
      build-tools=2.*

WORKDIR /build

RUN \
  pip --no-cache-dir install \
    --upgrade \
    pip \
    setuptools \
    wheel

COPY src/requirements.txt .

RUN \
  pip wheel \
    --wheel-dir /wheels \
    --find-links /wheels \
    -r requirements.txt

COPY src/ .

RUN \
  pip wheel \
    --wheel-dir /wheels \
    --find-links /wheels \
    --no-index \
    .

# run stage
# ===========================
FROM python:3.8.0-slim as run
ENV DOCKER_STAGE=run PYTHONUNBUFFERED=1

RUN \
  DEBIAN_FRONTEND=noninteractive apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get -y install \
    --no-install-recommends \
    runtime-deps=8.3.* \
    runtime-tools=5.*

COPY --from=build /wheels /wheels

RUN \
  pip --no-cache-dir install \
    --find-links /wheels \
    --no-index \
    my.app

CMD ["python", "-m", "my.app.run"]
```
## Nuitka

Minimal docker image containing a compiled python program and it's dependent libs


```dockerfile
FROM transactcharlie/docker-nuitka:latest as builder

## copy code and scripts
COPY examples/hello_world /app
COPY build_scripts /build_scripts

## Install requirements
RUN pip3 install -r app/requirements.txt

## Execute nuitka
RUN nuitka3 --standalone --show-progress --python-flag=no_site app/app.py

## run build scripts
RUN build_scripts/ldd_cp.sh "app.dist/app.exe" "app.dist"
RUN ls -lhR app.dist

## runtime stage
FROM scratch
LABEL org.label-schema.name="Hello World Example" \
      org.label-schema.vcs-url="https://github.com/TransactCharlie/nuitka-docker-example" \
      org.label-schema.description="Full example App compiled with nuitka in a scratch docker container"
COPY --from=builder /app.dist/ /
CMD ["/app.exe"]
```

* [Nuitka Docker Example](https://github.com/TransactCharlie/nuitka-docker-example/blob/master/build_scripts/ldd_cp.sh)
* [Build script](https://github.com/TransactCharlie/nuitka-docker-example/blob/master/build_scripts/ldd_cp.shkkk)

## The .dockerignore file

A `.dockerignore` file optimizes the Docker build process by excluding unnecessary files from the build context:

- **Exclude artifacts**: Remove virtual environments (`venv`), Python cache (`__pycache__`), and temporary files.
- **Reduce build context**: Minimizing the data sent to the Docker daemon improves build performance and security.

## References

* [2019: Building Tiny Python Docker Images](https://medium.com/@ethan.edwards/building-tiny-python-docker-images-b029b194171d)
* [2018: Building Minimal Docker Containers for Python Applications](https://blog.realkinetic.com/building-minimal-docker-containers-for-python-applications-37d0272c52f3?gi=33012cf6d374)
* [2018: How to Write Dockerfiles for Python Web Apps](https://blog.hasura.io/how-to-write-dockerfiles-for-python-web-apps-6d173842ae1d/)
* [2018: Building smaller Python Docker images](https://simonwillison.net/2018/Nov/19/smaller-python-docker-images/)

