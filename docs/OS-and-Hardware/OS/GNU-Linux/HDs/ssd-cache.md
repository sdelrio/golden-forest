# Bcache SSD caching

## Bcache Sample



1. Install Bcache

```bash
sudo pt install bcache-tools
```

2. Cleanup device

```bash
sudo dd if=/dev/zero if=/dev/sda6 bs=512 count=8
wipefs -a /dev/sda6
sudo dd if=/dev/zero if=/dev/sdb1 bs=512 count=8
wipefs -a /dev/sdb1
```

3. Create and register device

```bash
make-bcache -B /dev/sda6
make-bcache -C /dev/sdb1
```

4. Format drives

```bash
mkfs.ext4 /dev/sda6
mkfs.ext4 /dev/sdb1
```

5. Attach device

```bash
# ls /sys/fs/bcache/
9b1e7bf9-a97a-4785-bacb-0b17189adc08  register  register_quiet
# echo 9b1e7bf9-a97a-4785-bacb-0b17189adc08 > /sys/block/bcache0/bcache/attach
```

6. Check bcache status

```
# lsblk
```

## Create virtual block device

```bash
# create a 100M file in /opt
dd if=/dev/zero of=/opt/dev0-backstore bs=1M count=100

# create the loopback block device
# where 7 is the major number of loop device driver, grep loop /proc/devices
mknod /dev/fake-dev0 b 7 200

losetup /dev/fake-dev0  /opt/dev0-backstore
```


## Reference

* [https://cinhtau.net/2015/08/05/ssd-caching-with-bcache-for-linux/](https://cinhtau.net/2015/08/05/ssd-caching-with-bcache-for-linux/)
* [https://askubuntu.com/questions/546921/how-to-create-virtual-block-devices](https://askubuntu.com/questions/546921/how-to-create-virtual-block-devices)

