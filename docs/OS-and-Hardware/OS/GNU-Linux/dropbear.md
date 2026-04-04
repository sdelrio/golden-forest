# Dropbear

## Install

```bash title="Terminal"
apt install dropbear-initramfs
```

## Configure

### Edit dropbear.conf

```bash title="Terminal"
vim /etc/dropbear/initramfs/dropbear.conf

DROPBEAR_OPTIONS="-I 180 -j -k -p 2222 -s -c cryptroot-unlock"
```

### Edit initramfs.conf

```bash title="Terminal"
vim /etc/initramfs-tools/initramfs.conf

# Add the following line at the end of the file, replacing the example IP address, gateway, netmask, and hostname with your own values. If your server is in a remote data center, you should use the server's public IP address

IP=192.168.1.193::192.168.1.1:255.255.255.0:mm14
```

### Update initramfs

```bash title="Terminal"
update-initramfs -u
```

### Add SSH key

Copy your `ed25519.pub` key content to the server's `authorized_keys`.


```bash title="Terminal"
vim /etc/dropbear/initramfs/authorized_keys
chmod 600 /etc/dropbear/initramfs/authorized_keys
```

```bash title="Terminal"
$ ls -1 /etc/dropbear/initramfs/
authorized_keys
dropbear.conf
dropbear_ecdsa_host_key
dropbear_ecdsa_host_key.pub
dropbear_ed25519_host_key
dropbear_ed25519_host_key.pub
dropbear_rsa_host_key
dropbear_rsa_host_key.pub
```

### Update initramfs

```bash title="Terminal"
update-initramfs -u
```

## Unlock with

### Manual SSH with used key in `authorized_keys`:

```bash title="Terminal"
ssh -i ~/.ssh/unlock_id_ed25519 -p 2222 root@192.168.1.193
```

### Create alias

Create an SSH alias for unlocking SERVER in ~/.ssh/config:

```bash title="Terminal"
# foobox - unlock server at boot
Host unlock-foobox
  Hostname 192.168.1.193
  User root
  Port 2222
  IdentityFile ~/.ssh/unlock_id_ed25519
  HostKeyAlgorithms ssh-rsa
  RequestTTY yes
  RemoteCommand cryptroot-unlock
```

With an alias, a simple ssh unlock-foobox and entering the correct passphrase will do the trick:


```bash title="Terminal"
$ ssh unlock-foobox
Please unlock disk sda3_crypt:
cryptsetup: sda3_crypt set up successfully
Connection to 192.168.1.23 closed.
```

## Refrences

* https://swissmade.host/en/blog/unlocking-a-luks-fully-encrypted-drive-and-booting-into-the-os-via-dropbear-ssh
* https://www.dwarmstrong.org/remote-unlock-dropbear/
* https://github.com/fangfufu/wifi-on-debian-initramfs/tree/master
