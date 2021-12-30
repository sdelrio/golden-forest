# Dockerfile for Java

Starting with Java 9 you could build a custom JRE with just the libraries you need using the tool `jlink`, provided with the Java 9 JDK.

The combination of a small Alpine Linux distro (5 MB) and our stripped down JRE (30 MB), could results in a total Docker image size of approximately 35 MB. By comparison, the `openjdk:8-jre-alpine` Docker image is 80 MB. A reduction of more than 50 percent! 

## Java 9

### First stage

```bash
FROM alpine:3.6 AS builder

MAINTAINER JDriven <info@jdriven.com>

ENV JAVA_HOME=/opt/jdk \
    PATH=${PATH}:/opt/jdk/bin \
    LANG=C.UTF-8

RUN set -ex && \
    apk add --no-cache bash && \
    wget http://download.java.net/java/jdk9-alpine/archive/181/binaries/jdk-9-ea+181_linux-x64-musl_bin.tar.gz -O jdk.tar.gz && \
    mkdir -p /opt/jdk && \
    tar zxvf jdk.tar.gz -C /opt/jdk --strip-components=1 && \
    rm jdk.tar.gz && \
    rm /opt/jdk/lib/src.zip

WORKDIR /app

COPY backend-module/target/backend-module-1.0-SNAPSHOT.jar .
COPY frontend-module/target/frontend-module-1.0-SNAPSHOT.jar .

RUN jlink --module-path backend-module-1.0-SNAPSHOT.jar:frontend-module-1.0-SNAPSHOT.jar:$JAVA_HOME/jmods \
        --add-modules com.jdriven.java9runtime.frontend \
        --launcher run=com.jdriven.java9runtime.frontend/com.jdriven.java9runtime.frontend.FrontendApplication \
        --output dist \
        --compress 2 \
        --strip-debug \
        --no-header-files \
        --no-man-pages
```

### Second stage

Copies the custom JRE into our image and runs it

```bash
FROM alpine:3.6

MAINTAINER JDriven <info@jdriven.com>

WORKDIR /app

COPY --from=builder /app/dist/ ./

ENTRYPOINT ["bin/run"]
```

#### bin/run

```bash
#!/bin/sh
JLINK_VM_OPTIONS=
DIR=`dirname $0`
$DIR/java $JLINK_VM_OPTIONS -m com.jdriven.java9runtime.frontend/com.jdriven.java9runtime.frontend.FrontendApplication $@
```

## References

* [2017: Slim modular Java 9 runtime Docker image with Alpine Linux](https://blog.jdriven.com/2017/11/modular-java-9-runtime-docker-alpine/)

