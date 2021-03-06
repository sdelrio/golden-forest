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

## Rolling back changes

* `git reset`: Can't use when you have already commited the change. Is useful for wiping out uncommited change. Reset will unstage anytihng y'ave added in preparation to commit. But does nothing for anything thaat has been commited
* `git revert`: Create a commit with the reverse patch to cancel it out. This way you don’t rewrite any history. But the original “whoops” commit(s) and the patch are always going to be part of the version history.


### Sample

Check last commits
```bash
$ git log --oneline --all --graph --decorate
* c78f1e0c (HEAD -> master, origin/master, origin/HEAD) k8s: linter tools
* e3ba41b2 git: update content and adding tools
* c90c2e85 CI: update db-migrations
* 6b48bef0 CI: Update Jenkins & gitlab content
* 6af4eea3 QA: update inspec content

$ git revert c78f1e0c

$ git log --oneline --all --graph --decorate
* 3f67984 (HEAD -> master, origin/master, origin/HEAD) Revert "k8s: linter tools" will revert this commit c78f1e0c
* e3ba41b2 git: update content and adding tools
* c90c2e85 CI: update db-migrations
* 6b48bef0 CI: Update Jenkins & gitlab content
* 6af4eea3 QA: update inspec content
```

* [Getting Legit with Git and GitHub: Rolling Back Changes with Revert and Reset](https://thenewstack.io/getting-legit-with-git-and-github-rolling-back-changes-with-revert-and-reset/)
## Git blame

Don't blame people for changing whitespaces or moving code.

`git blame` will show the author of the last commit that modified the particular line. If whitespaces were removed or that piece of code was moved around, blame will show that commit and you might blame the wrong person.

```bash
git blame -w -M
```

* `-w` will ignore whitespaces 
* `-M` will detect moved or copied lines.

## Git flows

### [Git Organized: A Better Git Flow](https://render.com/blog/git-organized-a-better-git-flow)

1. Make your changes

```bash
$ git checkout -b my-feature-branch-name-doesnt-matter

...make changes...

$ git commit -m"WIP this message doesn't matter"

...make more changes...

$ git commit -m"WIP whatever"

...make even more changes...

$ git commit -m"WIP 12345"
```

2. Reset

```bash
$ git reset origin/main
Unstaged changes after reset:
M       doc/Coding/CVS/git.md
M       doc/Coding/CVS/gitea.md
M       doc/Coding/CVS/gerrit.md

$ git status
On branch feature-branch
Your branch is behind 'origin/my-feature-branch-name-doesnt-matter' by 3 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   doc/Coding/CVS/git.md
        modified:   doc/Coding/CVS/gitea.md
        modified:   doc/Coding/CVS/gerrit.md
```

`git reflog`: To go back to a commit where things weren’t broken, it will show you a timeline of every commit you’ve referenced in your local repository, even across branches. Run git reflog to find the commit you want to return to and then run `git reset <commit-sha>`. This command will point the `HEAD` of your current branch to that commit.


3. Create new, logically-grouped commits

Look at all the files you’ve changed. Try to group logically any changes related to a particular model and create a commit with the descsription.

If the same file contains multiple changes that should be grouped separately use [`git add --patch`](https://nuclearsquid.com/writings/git-add/)

```bash
$ git add doc/Coding/CVS/git.md
$ git commit -m"Add new section Git flows"

$ git add docs/Coding/CVS/gitea.md
$ git commit -m"Init section Gitea inside CVSU"

$ git add docs/Coding/CVS/gerrit.md
$ git commit -m"Fixed typo in references"
```

## Git for everything!

* [Beyond Code Control: Git for Everything!])https://thenewstack.io/beyond-code-control-git-for-everything/)

### Progress List and Work-Plans

* [Waffle.io](https://projectmanagernews.com/news/what-happened-to-waffle-io/): Looks at GitHub Issues and PR and uses them to create project management charts.
* [ZenHub](https://www.zenhub.com/): Build a prroject management tool isnide GitHub itself that is operated by PR.

### Updating your website

* [Netifly](https://projectmanagernews.com/news/what-happened-to-waffle-io/)
* [GitHub Pages](https://pages.github.com/) + Static site like [Docusuarus.io](https://docusaurus.io)

### Presentations

Presentations browser-native and work almost anywhere.

* [Reveal.js](http://revealjs.com/http://revealjs.com/)
* [GitPitch](http://gitpitch.com.bitverzo.com/)

### Word and Excel documents

* [Xltrail](https://www.xltrail.com/): Keep track of the cell-by-cell commit history of an Excel spreadsheet that’s stored in git, but it can’t handle merges and pull requests itself. 
* [Simul](http://www.simuldocs.com/):  git-like experience via a plugin for Word docs. And using other Office suites like OpenOffice/LibreOffice, you can just save files natively as XML which lets git work its magic


## Detect secrets in code

An enterprise friendly way of detecting and preventing secrets in code.

* [Yelp/detect-secrets](https://github.com/Yelp/detect-secrets)
* [Why Securing Secrets in Cloud and Container Environments Is Important – and How to Do It](https://thenewstack.io/why-securing-secrets-in-cloud-and-container-environments-is-important-and-how-to-do-it/)

