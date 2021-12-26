# Visual Studio Code

## Download VS Code Insider

Insider is the Development/beta version of Visual Studio Code.

* <https://code.visualstudio.com/insiders/>

## Remote development extensions

* [Remote Developtment](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
  * [Remote WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)
  * [Remote SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)
  * [Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
    * [Developing inside a Container](https://code.visualstudio.com/docs/remote/containers)

### References

* <https://trello.com/c/htx9kxq3/3-remote-development-with-visual-studio-code>

## DeepCode AI extension to find bugs/security vulnerabilities

* [DeepCode](https://marketplace.visualstudio.com/items?itemName=DeepCode.deepcode)

## Configs

### Watcher exclude files

* File &gt; Pref &gt; Settings &gt; `json`

```json
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/*/**": true
  }
```

## Raspberry Pi

* <https://raspberryparatorpes.net/proyectos/visual-studio-code-para-raspberry-pi/>

## Remote VS Code

### Code-server

Run VS Code on any machine anywhere and access it in the browser

* [GitHub](https://github.com/coder/code-server)

### GitHub Codespaces

GitHub SaaS to run development environments using a web base version of VS code.

* <https://github.blog/2020-05-06-new-from-satellite-2020-github-codespaces-github-discussions-securing-code-in-private-repositories-and-more/?utm_source=thenewstack&utm_medium=website&utm_campaign=platform#codespaces>
* <https://thenewstack.io/this-week-in-programming-github-codespaces-portable-dev-environment/>

### GitPod

SaaS which Spin up fresh, automated dev environments for each task, in the cloud, in seconds.

* [HomePage](https://www.gitpod.io/)

## Links

* [2019: Video - Visual Studio Code Tips and Tricks](https://www.youtube.com/watch?v=tnSnVlbKtMk)
* [2019: Video - Create Visually Compelling Developer Experiences for Kuberntes](https://www.youtube.com/watch?v=C6kktvpZFtg&t=982s)
  * <https://github.com/Azure/vscode-kubernetes-tools-api-samples/>
  * <https://github.com/Azure/vscode-kubernetes-tools/tree/master/docs/extending>

