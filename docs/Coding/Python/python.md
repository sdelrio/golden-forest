# Python

[Python](https://en.wikipedia.org/wiki/Python_%28programming_language%29) is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.

Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.

## History

* Guido van Rossum began working on Python in the late 1980s, as a successor to the ABC programming language
* First released it in 1991 as Python 0.9.0.
* Python 2.0 was released in 2000 and introduced new features, such as list comprehensions and a cycle-detecting garbage collection system (in addition to reference counting).
* Python 3.0 was released in 2008 and was a major revision of the language that is not completely backward-compatible.
* Python 2 was discontinued with version 2.7.18 in 2020.


## PyEnv

Manage python versions with PyEnv

You can [Install](https://github.com/pyenv/pyenv#installation) with brew, compiling or just a git clone. `pyenv` works by building Python from source. 

### Using `pyenv` to install a specific version of Python

#### Search versions

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="python" label="CPython" default>

To see all available [CPython](https://realpython.com/cpython-source-code-guide/) 3.8 through 3.10, you can do this:
```bash
$ pyenv install --list | grep " 3\.\([89]\|10\)"
  3.8.0
  3.8-dev
  3.8.1
  3.8.2
  3.8.3
  3.8.4
  3.8.5
  3.8.6
  3.8.7
  3.8.8
  3.8.9
  3.8.10
  3.8.11
  3.8.12
  3.9.0
  3.9-dev
  3.9.1
  3.9.2
  3.9.4
  3.9.5
  3.9.6
  3.9.7
  3.10.0rc2
  3.10-dev
```
  </TabItem>

  <TabItem value="jython" label="Jython">

:::caution Python 2 deprecated in 2020
:::

```
$ pyenv install --list | grep "jython"
  jython-dev
  jython-2.5.0
  jython-2.5-dev
  jython-2.5.1
  jython-2.5.2
  jython-2.5.3
  jython-2.5.4-rc1
  jython-2.7.0
  jython-2.7.1
  jython-2.7.2
```
  </TabItem>
</Tabs>

#### Install samples

<Tabs>
  <TabItem value="python397" label="Python 3.9.7" default>

```bash
$ pyenv install -v 3.9.7
python-build: use openssl@1.1 from homebrew
python-build: use readline from homebrew
/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228211329.31561 ~/github/golden-forest/docs/Coding
Downloading Python-3.9.7.tar.xz...
-> https://www.python.org/ftp/python/3.9.7/Python-3.9.7.tar.xz
/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228211329.31561/Python-3.9.7 /var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228211329.31561 ~/github/golden-forest/docs/Coding
Installing Python-3.9.7...
(...)
Successfully installed pip-21.2.3 setuptools-57.4.0
/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228211329.31561 ~/github/golden-forest/docs/Coding
~/github/golden-forest/docs/Coding
Installed Python-3.9.7 to /Users/sdelrio/.pyenv/versions/3.9.7
```
  </TabItem>

  <TabItem value="python372" label="Python 3.7.2" default>

```bash
$ pyenv install -v 3.7.2
/tmp/python-build.20190208022403.30568 ~
Downloading Python-3.7.2.tar.xz...
-> https://www.python.org/ftp/python/3.7.2/Python-3.7.2.tar.xz
Installing Python-3.7.2...
/tmp/python-build.20190208022403.30568/Python-3.7.2 /tmp/python-build.20190208022403.30568 ~
[...]
Installing collected packages: setuptools, pip
Successfully installed pip-18.1 setuptools-40.6.2
Installed Python-3.7.2 to /home/realpython/.pyenv/versions/3.7.2
```
  </TabItem>

  <TabItem value="python27" label="Python 2.7.18">

:::caution Python 2 deprecated in 2020
:::

```bash
$ pyenv install -v 2.7.18
/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228204134.2129 ~/github/golden-forest/docs/Coding
Downloading openssl-1.0.2q.tar.gz...
-> https://www.openssl.org/source/old/1.0.2/openssl-1.0.2q.tar.gz
/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228204134.2129/openssl-1.0.2q /var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228204134.2129 ~/github/golden-forest/docs/Coding
Installing openssl-1.0.2q...
Operating system: i686-apple-darwinDarwin Kernel Version 20.5.0: Sat May 8 05:10:33 PDT 2021; root:xnu-7195.121.3~9/RELEASE_X86_64
Configuring for darwin64-x86_64-cc
(...)
/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228204134.2129 ~/github/golden-forest/docs/Coding
~/github/golden-forest/docs/Coding
Installed Python-2.7.18 to /Users/sdelrio/.pyenv/versions/2.7.18
```
  </TabItem>
</Tabs>


### Install locations

Each version that you have installed is located nicely in your `pyenv` root directory:

```
$ ls ~/.pyenv/versions
2.7.18	3.6.8 3.8.10 3.9.10
```

### Uninstall `pyenv` version

<Tabs>
  <TabItem value="uninstall" label="pyenv uninstall" default>

```bash
$ pyenv uninstall 2.7.18
```

  </TabItem>
  <TabItem value="rm" label="manual rm">

```bash
$ rm -rf ~/.pyenv/versions/2.7.18
```

  </TabItem>
</Tabs>

### Using your installed versions

* Check current versions, the `*` indicates current active version.

```bash
$ pyenv versions
* system (set by /home/youruser/.pyenv/version)
  2.7.18
  3.8.10
  3.9.10
```

### Global python version

Not recommended to override system python, specially on macOS.

```bash
$ pyenv global 2.7.18

$ pyenv versions
  system (set by /home/youruser/.pyenv/version)
* 2.7.18
  3.8.10
  3.9.10
```

### Local python version

Application level version, recommended way.

You can create a `.python-version` into a folder to specify that version each time you enter in that path.

```bash
$ pyenv local 2.7.18

$ pyenv versions
  system (set by /home/youruser/.pyenv/version)
* 2.7.18
  3.8.10
```

### Virtual Env

#### Creating

```bash
$ pyenv virtualenv <python_version> <environment_name>
```

#### Activating

```bash
$ pyenv virtualenv 3.6.8 myproject
$ pyenv local myproject
```

## Project Setup

* Python 3.7+
* [Poetry](https://srcco.de/posts/my-python-poetry-project-setup-calver-2020.html#poetry) for dependency management
* Make to leverage muscle memory
* [black](https://black.readthedocs.io/) for code formatting
* [mypy](https://srcco.de/posts/my-python-poetry-project-setup-calver-2020.html#mypy) for type checking
* [py.test](https://srcco.de/posts/my-python-poetry-project-setup-calver-2020.html#py-test) for unit and e2e tests
* [pre-commit](https://pre-commit.com/) hooks to run formatting and linting
* [ReadTheDocs](https://readthedocs.org/) for documentation
* [CalVer](https://calver.org/) for releases

### black & flake8

#### `.flake8`

```
[flake8]
ignore=E501,E203
```
* ignore E501: black won't always ensure a max line length, e.g. it won't linebreak docstrings or comments
* ignore E203: black has problems formatting mylist[len(prefix) :]

### Pre-commit Hooks

* make sure that file endings are consistent (also important when working with Windows colleagues)
* strip unnecessary whitespace (avoids unnecessary git diffs)
* validate YAML/Dockerfile/... syntax
* validate Kubernetes manifests (easy to get some deployment spec wrong)
* format Python code with [black](https://black.readthedocs.io/)
* lint Python code ([Flake8](https://flake8.pycqa.org/), [mypy](https://srcco.de/posts/my-python-poetry-project-setup-calver-2020.html#mypy), [Bandit](https://bandit.readthedocs.io/))

#### `pre-commit-config.yaml`

```yaml
minimum_pre_commit_version: 1.21.0
repos:
- repo: meta
  hooks:
  - id: check-hooks-apply
  - id: check-useless-excludes

# reorder Python imports
- repo: https://github.com/asottile/reorder_python_imports
  rev: v1.9.0
  hooks:
  - id: reorder-python-imports

# format Python code with black
- repo: https://github.com/ambv/black
  rev: 19.10b0
  hooks:
  - id: black

# check docstrings
- repo: https://github.com/PyCQA/pydocstyle
  rev: 5.0.2
  hooks:
  - id: pydocstyle
    args: ["--ignore=D10,D21,D202"]

# static type checking with mypy
- repo: https://github.com/pre-commit/mirrors-mypy
  rev: v0.761
  hooks:
  - id: mypy

- repo: https://github.com/pre-commit/pre-commit-hooks
  rev: v2.4.0
  hooks:
  - id: check-added-large-files
  - id: check-docstring-first
  - id: debug-statements
  - id: end-of-file-fixer
  - id: flake8
    additional_dependencies: ["flake8-bugbear"]
  - id: trailing-whitespace
  - id: check-ast
  - id: check-builtin-literals
  - id: detect-private-key
  - id: mixed-line-ending
  - id: name-tests-test
    args: ["--django"]
```

#### Article

* [2020: Python Project Setup](https://srcco.de/posts/my-python-poetry-project-setup-calver-2020.html)

## References

* [Managing Multiple Python Versions With pyenv](https://realpython.com/intro-to-pyenv/)

