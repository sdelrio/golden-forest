# GitHub

## Keep fork updated

### 1. Clone your fork:

```bash
git clone git@github.com:YOUR-USERNAME/YOUR-FORKED-REPO.git
```

### 2. Add remote from original repository in your forked repository:

```bash
cd into/cloned/fork-repo
git remote add upstream git://github.com/ORIGINAL-DEV-USERNAME/REPO-YOU-FORKED-FROM.git
git fetch upstream
```

### 3. Updating your fork from original repo to keep up with their changes:

```bash
git pull upstream master
```

## References

* [Keep fork updated](https://gist.github.com/CristinaSolana/1885435)
* [Keeping Local Repos in Sync With Open Source GitHub Repos](https://victorops.com/blog/keeping-local-repos-in-sync-with-open-source-github-repos)
* [Pull Request Tutorial](https://yangsu.github.io/pull-request-tutorial/)

