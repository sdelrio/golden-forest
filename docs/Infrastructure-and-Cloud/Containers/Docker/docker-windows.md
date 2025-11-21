# Docker for windows

## WSL

```
echo "export DOCKER_HOST=tcp://localhost:2375" >> ~/.bashrc && source ~/.bashrc
```

* edit `/etc/wsl.conf`
```
# Now make it look like this and save the file when you're done:
[automount]
root = /
options = "metadata"
```

* [Setting Up Docker for Windows and WSL 1 to Work Flawlessly](https://nickjanetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly)
* [Setting Up Docker for Windows and WSL 2 to Work Flawlessly](https://nickjanetakis.com/blog/a-linux-dev-environment-on-windows-with-wsl-2-docker-desktop-and-more)

