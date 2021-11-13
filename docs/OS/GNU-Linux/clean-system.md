# Clean system

## Clean docs packages


1. Disable the apt cache:

When you install a package with apt-get or aptitude on a Debian-based system, the downloaded package is, by default, kept in the APT cache located at /var/cache/apt/archives. This is really not necessary as you typically do not re-install the same package ever again. Over time, the content in /var/cache/apt/archives will grow.

  * Create a file in /etc/apt/apt.conf.d/ called 02nocache with these contents:

    ```bash
    Dir::Cache "";
    Dir::Cache::archives "";
    ```

  * Clear the apt cache:

    ```bash
    sudo rm -rf /var/cache/apt/archives 
    ```

2. Disable man pages, locales and docs:

You can disable a lot of rubbish doing this:

  * Create a file called 01_nodoc on /etc/dpkg/dpkg.cfg.d with these contents:

    ```bash
    # /etc/dpkg/dpkg.cfg.d/01_nodoc

    # Delete locales
    path-exclude=/usr/share/locale/*

    # Delete man pages
    path-exclude=/usr/share/man/*

    # Delete docs
    path-exclude=/usr/share/doc/*
    path-include=/usr/share/doc/*/copyright
    ```
  * Delete the current contents:

    ```bash
    sudo rm -rf /usr/share/doc/
    sudo rm -rf /usr/share/man/
    sudo rm -rf /usr/share/locale/
    ```


### References

* <https://askubuntu.com/questions/628407/removing-man-pages-on-ubuntu-docker-installation>
