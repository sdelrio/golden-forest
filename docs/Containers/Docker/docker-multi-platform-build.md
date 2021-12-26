# Docker build multi-platform

## How it works?

The easiest way to use multi-platform functionality in Docker is to invoke it from the command line.
Using the `docker buildx`, we can tap into new beta functionalities.

By running docker ``buildx build --platform linux/arm/v7 -t arm-build`. This command builds the docker image as per the `Dockerfile` in the current directory using ARMv7 emulation. Behind the scenes, Docker runs the whole Docker build process in a QEMU virtualized environment (qemu-user-static to be precise). By doing this, the complexity of setting up a custom VM is removed. Once built, we can even use `docker run` to launch containers in ARMv7 mode automagically.

## Stages

### Stage 1: ARM

```
FROM --platform=linux/arm/v7 balenalib/rpi-raspbian:buster as builder
```

This part is running using QEMU

### Stage 2: x86

Once we installed our dependencies we can switch to native x86 arch.

```
FROM --platform=linux/amd64 debian:buster
```

After we have switched over to x86, we can copy files from the previous step. We do this in order to create a sysroot that we can use for Qt. We complete this step by running the following commands:

```
RUN mkdir -p /sysroot/usr /sysroot/opt /sysroot/lib
COPY --from=builder /lib/ /sysroot/lib/
COPY --from=builder /usr/include/ /sysroot/usr/include/
COPY --from=builder /usr/lib/ /sysroot/usr/lib/
COPY --from=builder /opt/vc/ sysroot/opt/vc/
```

* [Compiling Qt with Docker multi-stage and multi-platform](https://www.docker.com/blog/compiling-qt-with-docker-multi-stage-and-multi-platform/)
  * [Dockerfile for QT multi-stage](https://github.com/Screenly/screenly-ose/blob/master/webview/Dockerfile)
  * [build QT script](https://github.com/Screenly/screenly-ose/blob/master/webview/build_qt5.sh)
* [Build a multi-architecture docker image with Vagrant](https://daniel-dc.medium.com/build-a-multi-arch-docker-image-with-vagrant-d903355dace5)

