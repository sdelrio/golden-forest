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

## Version based on a file content diff


```bash
check_version_changes(){
    git diff  $(git describe --tags --abbrev=0 HEAD)..HEAD -- mymodule/__init__.py | grep --quiet +__version__;
};


if ! check_version_changes; then
    echo "Version not changed"
    exit 0
fi

VERSION=$(python -c 'import forwarder; print(mymodule.__version__)')
```

* [https://github.com/pando85/alertmanager-telegram-forwarder/blob/master/.ci/tag_version.sh](https://github.com/pando85/alertmanager-telegram-forwarder/blob/master/.ci/tag_version.sh)
* [https://github.com/pando85/aiofunctools/blob/master/.ci/tag_version.sh](https://github.com/pando85/aiofunctools/blob/master/.ci/tag_version.sh)

## ci-version

With Docker:

```bash
docker run --rm -v /path/to/my/repository:/repo:ro softonic/ci-version
#> 1.2.0
docker run --rm -v /path/to/my/repository:/repo:ro softonic/ci-version --compatible-with package.json
#> 1.2.0
docker run --rm -v /path/to/my/repository:/repo:ro softonic/ci-version --compatible-with composer.json
#> 1.2.0
```

CLI program to determine new versions in CI projects 

* [https://github.com/softonic/ci-version](https://github.com/softonic/ci-version)

## References

* [Tagging docker images the right way](https://blog.container-solutions.com/tagging-docker-images-the-right-way)
* [How to Tag Docker Images with Git Commit Information](https://blog.scottlowe.org/2017/11/08/how-tag-docker-images-git-commit-information/)
* [Generating pretty version strings (including nightly) with Git and Makefiles](https://dev.to/eugenebabichenko/generating-pretty-version-strings-including-nightly-with-git-and-makefiles-48p3)
* [Generating pretty version strings (including nightly) with Git and Makefiles](https://eugene-babichenko.github.io/blog/2019/09/28/nightly-versions-makefiles/)
