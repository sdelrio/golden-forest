# Makefile

The `make` utility is a software automatino tool for run and compile your programs more efficiently.

## Basic examples

The classic "Hello World" on the terminal. Create a empty directory `myproject` containing a file `Makefile` with this content:

```
say_hello:
    @echo "hello world"
```

It's important that Makefile uses tabs and no spaces. The `@` at the begining of the command will remove the output of the command being executed.

To run the file, just call `make` inside the directory myproject. The output will be:

```bash
$ make
hello world
```

## Makefile tricks for Python projects

https://ricardoanderegg.com/posts/makefile-python-project-tricks/

