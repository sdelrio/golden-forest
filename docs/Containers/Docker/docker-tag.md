# Docker tag

## Based on git commit

Very useful for integration/staging environments or any automated release.

Get the latest commit of your repo and use as the tag

  * Long version
  ```bash
  $ git log -1 --pretty=%H
  a4b31e3966d51716e0a5794daed664208194c65e
  ```
  * Short version
  ```bash
  $ git log -1 --pretty=%h
  a4b31e3
  ```

### Makefile

```bash
NAME   := your_org/your_app
TAG    := $$(git log -1 --pretty=%!H)
IMG    := ${NAME}:${TAG}
LATEST := ${NAME}:latest

build:
  @docker build -t ${IMG} .
  @docker tag ${IMG} ${LATEST}

push:
  @docker push ${NAME}

login:
  @docker log -u ${DOCKER_USER} -p ${DOCKER_PASS}
```

## Version + commit + date

```bash
# version based on git tag
TAG_COMMIT := $(shell git rev-list --abbrev-commit --tags --max-count=1)
# `2>/dev/null` suppress errors and `|| true` suppress the error codes.
TAG := $(shell git describe --abbrev=0 --tags ${TAG_COMMIT} 2>/dev/null || true)
# get the latest commit hash in the short form
COMMIT := $(shell git rev-parse --short HEAD)
# get the latest commit date in the form of YYYYmmdd
DATE := $(shell git log -1 --format=%cd --date=format:"%Y%m%d")
# strip version prefix "v"
VERSION := $(TAG:v%=%)
# Deal with nightly builds that appeared after a particular
version
ifneq ($(COMMIT), $(TAG_COMMIT))
  VERSION := $(VERSION)-next-$(COMMIT)-$(DATE)
endif
# Check if the version string is empty
ifeq $(VERSION,)
  VERSION := $(COMMIT)-$(DATA)
endif
# git status --porcelain outputs a machine-readable text and the output is empty
# if the working tree is clean
ifneq ($(shell git status --porcelain),)
  VERSION := $(VERSION)-dirty
endif
```


## References

* [Tagging docker images the right way](https://blog.container-solutions.com/tagging-docker-images-the-right-way)
* [How to Tag Docker Images with Git Commit Information](https://blog.scottlowe.org/2017/11/08/how-tag-docker-images-git-commit-information/)
* [Generating pretty version strings (including nightly) with Git and Makefiles](https://dev.to/eugenebabichenko/generating-pretty-version-strings-including-nightly-with-git-and-makefiles-48p3)
* [Generating pretty version strings (including nightly) with Git and Makefiles](https://eugene-babichenko.github.io/blog/2019/09/28/nightly-versions-makefiles/)
