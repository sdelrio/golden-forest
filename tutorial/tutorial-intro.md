---
sidebar_position: 1
---

# Contributing

This page is done using **Docusaurus**. There are many articles about it and a very good officiali documentaion:

* <https://docusaurus.io/docs/>
* <https://blog.logrocket.com/easy-documentation-with-docusaurus/>
* <https://www.google.com/search?q=docusaurus+draw+svg>

## Start

This site is already initialized with docusaurus, it should be already plug-and-play. You can

If you want to create another site with this **Docusaurus** technology you can visit [docusaurus.new](https://docusaurus.new).

### Makefile

```shell
$ make
Usage: make [TARGET ...]

help                 Show this help menu.
start                Docusaurus start develop server
```


### Develop server

Go inside your cloned directory and `make start`

```shell
cd my-website

make start
```

A web server will start on `http://localhost:3000`. After this your default browser will open that URL.

Edit some file like `docs/intro.md` and edit some lines, then the page wih **automatically reloads** and you will see the changes in the browser.

