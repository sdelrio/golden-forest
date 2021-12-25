# Disable systemd-resolved

## Ubuntu



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

* <https://askubuntu.com/questions/907246/how-to-disable-systemd-resolved-in-ubuntu>

