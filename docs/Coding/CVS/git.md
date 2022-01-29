# GIT

GIT is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different systems).

Git was created by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development. Since 2005, Junio Hamano has been the core maintainer. As with most other distributed version control systems, and unlike most client–server systems, every Git directory on every computer is a full-fledged repository with complet history and full version-tracking abilities, independent of network access or a central server. Git is free and open-source software distributed under the GPL-2.0-only license.

* [Homepage](https://git-scm.com/)
* [Wikipedia](https://en.wikipedia.org/wiki/Git) 

## Monorepo

* [Speeding up a Git monorepo at Dropbox with](https://dropbox.tech/application/speeding-up-a-git-monorepo-at-dropbox-with--200-lines-of-code)
  * [Beziel](https://dropbox.tech/infrastructure/continuous-integration-and-deployment-with-bazel)
  * [Athena: Our automated build health management system](https://dropbox.tech/infrastructure/athena-our-automated-build-health-management-system)


## Delete remote tag

```bash
git push --delete origin tagName
git tag -d tagName
```

## Git Large File Storage

Git Large File Storage (LFS) replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise.

* [An open source it extension for versioning large files](https://git-lfs.github.com/)

### Setup
```bash
git lfs install
git lfs track "*.psd"
git add .gitattributes
```

### Add large file sample

```bash
git add file.psd
git commit -m "Add design file"
git push origin main
```

## Git terminal colors

* `~/.gitconfig`

```ini
[color]
    diff = always
    ui = always
    status = auto
    branch = auto
    interactive = auto
    pager = true
[color "status"]
  added = green
  changed = red bold
  untracked = magenta bold

[color "branch"]
  remote = yellow
```


## Alias

* `~/.gitconfig`

```ini
[alias]
    review = "!f() { git push -u ${1:-origin} HEAD:`git config branch.$(git name-rev --name-only HEAD).merge | sed -e 's@refs/heads/@refs/for/@'`; }; f"
    unstage = reset --soft HEAD^
	ls = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate
	ll = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --numstat
    st = status -s
    gl = clone
    ci = commit
    co = checkout
    br = branch
    dif = diff --word-diff
    diff1 = diff HEAD^
    diff2 = diff HEAD^^
    dc = diff --cached
    r = reset
    r1 = reset HEAD^
    r2 = reset HEAD^^
    rh = reset --hard
    rh1 = reset HEAD^ --hard
    rh2 = reset HEAD^^ --hard
```

## Remove directory from cache 

Remove directory from remote repository after adding them to `.gitignore`

```bash
git rm -r --cached node_modules
git commit -m 'Remove the now ignored directory node_modules'
git push origin master
```

## Commitizen

Simple commit conventions for internet citizens.

When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time. No more waiting until later for a git commit hook to run and reject your commit. No more digging through CONTRIBUTING.md to find what the preferred format is. Get instant feedback on your commit message formatting and be prompted for required fields.

### Install

```bash
npm install -g commitizen
```

### Usage

```bash
$ git add .
$ git cz

All commit message lines will be cropped at 100 characters.
? Select the type of change that you're commiting: (Use arrow keys)
> feat:     A new feature
  fix:      A bug fix
  docs:     Documentaiton only changes
  style:    Changes that do not aaffect the meaning of the code
  refactor: A code change that neither fixes a bug or adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests
  chore:    Changes to the build process or auxiliary tools and
            libraires such as documetation generation
```

### References


* [Commitizen GitHub](https://github.com/commitizen/cz-cli)
* [Commitizen doc](http://commitizen.github.io/cz-cli/)


## pre-commit

A framework for managing and maitining multi-language pre-commit hooks

### Install


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="pip" label="pip" default>

```bash
pip install pre-commit
echo 'pre-commmit > requirements-dev.txt'
```

  </TabItem>
  <TabItem value="brew" label="brew">

```bash
brew install pre-commit
```

  </TabItem>
</Tabs>

### Configuration

* Create file `.pre-commit-config.yaml`

```yaml
repos:
-   repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v2.3.0
    hooks:
    -   id: check-yaml
    -   id: end-of-file-fixer
    -   id: trailing-whitespace
-   repo: https://github.com/psf/black
    rev: 21.12b0
    hooks:
    -   id: black
```

* Install the git hoook

```bash
$ pre-commit install
```

### References

* [pre-commit homepage](https://pre-commit.com/)

