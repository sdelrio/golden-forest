# GitHub Actions

## UI for making pipelines

In `.github/workflows` create a yaml file and edit through Github's UI.

## VMs used in GH Actions

* [linux](https://github.com/actions/virtual-environments/tree/main/images/linux)
  * [ubuntu 18](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu1804-README.md)
  * [ubuntu 20](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-README.md)


## Caching docker builds

* Use `docker save` and `docker load` with `actions/cache`
If the cache size is big (near 1GB or more). It turns out that `docker save` is very slow. So, uploading that tarball into the cache also takes a long time.
If the cache size is big (near 1GB or more). It turns out that `docker push` is faster than `docker save`. The same for `docker pull` vs `docker load`.

## Articles

* [2021: Build images on GitHub Actions with Docker layer caching](https://evilmartians.com/chronicles/build-images-on-github-actions-with-docker-layer-caching)

## Interesting Actions

* [Kaniko image builder](https://github.com/aevea/action-kaniko)
* [Cache samples by language](https://github.com/actions/cache/blob/master/examples.md#examples)
  * [Python PIP](https://github.com/actions/cache/blob/master/examples.md#python---pip)
  * [Node npm](https://github.com/actions/cache/blob/master/examples.md#node---npm)
* [Caching Docker builds in GitHub Actions: Which approach is the fastest? 🤔 A research.](https://dev.to/dtinth/caching-docker-builds-in-github-actions-which-approach-is-the-fastest-a-research-18ei)
* [2020: Deploy your pull requests with GitHub Actions and GitHub Deployments](https://sanderknape.com/2020/05/deploy-pull-requests-github-actions-deployments/)

