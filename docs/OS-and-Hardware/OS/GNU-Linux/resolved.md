# Systemd-resolved

## Disable systemd-resolved

### Ubuntu

1. Disable and stop sytemd-resolved servicee
```bash
sudo systemctl disable systemd-resolved
sudo systemctl stop systemd-resolved
```

2. Put `dns=default` on `[main]` section of your `/etc/NetworkManager/NetworkManager.conf`:
```bash
dns=default
```

3. Delete symlink `/etc/resolv.conf`


4. Restart NetworkManager

```bash
sudo systemctl restart NetworkManager
```

* [https://askubuntu.com/questions/907246/how-to-disable-systemd-resolved-in-ubuntu](https://askubuntu.com/questions/907246/how-to-disable-systemd-resolved-in-ubuntu)

### Use resolvconf

To replace systemd and manual set the DNS server

1. Install `resolvconf`:
```
sudo apt install resolvconf
```

2. Edit `tail` file

```
vi /etc/resolvconf/resolv.conf.d/tail
```

Set the DNS server we want to use in that file:

```
nameserver 8.8.8.8
```

Make sure systemd-resolved is disabled

```
sudo systemctl disable systemd-resolved
```

