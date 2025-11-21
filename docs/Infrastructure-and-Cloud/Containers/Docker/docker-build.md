# Docker build best practices

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

## Use `ONBUILD` Commands in Images

 What this does is it specifies commands which are to be run when a new image is being built from the image with the `ONBUILD` commands.

One way to think of it is as a form of inheritance for images and it can be very useful in reducing code duplication up your Dockerfiles. In fact, oftentimes Dockerfiles in your individual projects can be just a single `FROM` command using your onbuild image. The one caveat to this is that you must have a standard set of build and run commands for all projects of that type.

* Sample:

```Dockerfile
FROM node:8-alpine

ONBUILD CMD ["node", "/app/index.js"]
ONBUILD COPY package.json /appONBUILD
RUN npm set progress=false && \
    npm install --silent
ONBUILD RUN npm test && \
    npm coverage
ONBUILD COPY . /app
```

Now, say we build an image from the above Dockerfile and tag it as `theimage/node:8-onbuild` and publish this image.

Then we can use this image for any Node.js project so long as it has the npm scripts for test and coverage and can be run from the file `index.js` in the root of the project. The Dockerfile for our projects will be one line:

```Dockerfile
FROM theimage/node:8-onbluild
```

And all of the logic will live in the shared image.

It is very beneficial for you and your organization to create and maintain common base images for all types of applications you plan to support and even create onbuild images off of these bases. This provides a good place to make sweeping changes, reduce the amount of code, and simplify your CI pipelines.

## Articles

* [Building Docker containers in 2019](https://ownyourbits.com/2019/05/13/building-docker-containers-in-2019/)
* [2017: Docker for CD: Advanced Topics and Patters](https://tech.cars.com/docker-for-continuous-delivery-advanced-topics-and-patterns-7532235998af)
* [Docker best practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices)
