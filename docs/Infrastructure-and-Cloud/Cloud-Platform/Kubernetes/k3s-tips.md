# K3s Tips

## Clean Orphaned Pod Volumes

```bash
#!/bin/bash

echo Init script
while true ; do
for o in $(journalctl -u k3s -n 200 | grep -o  -E 'orphaned pod \\"((\w|-)+)\\' | sort | uniq | cut -d" " -f3 | grep -oE '(\w|-)+' | uniq); do
	echo found orphaned pod $o
	p="/var/lib/kubelet/pods/$o/volumes/*"
	for dir in $p; do
	  echo "Removing $dir"
	  rm -rf $dir
	done
done
echo "################### $(date)"
sleep 20
done
```


# Delete LVM

```bash
#!/bin/bash
lvdisplay >> lvm-scan-output.txt
cat lvm-scan-output.txt | grep "VG Name" | sort | uniq | awk '{print $NF}' | xargs -P 1 echo lvremove
echo https://serverfault.com/questions/765408/cant-delete-lv-volume-is-used-by-another-device
echo dd if=/dev/zero of=/dev/sda4 bs=512 count=1
```


## Remove LVM partitions

```bash
#!/bin/bash


PREFIX=linstor_

ls /dev/mapper/$PREFIX* | xargs -I% --fuser --kill %
ls /dev/mapper/$PREFIX* | xargs -I% dmsetup clear %
ls /dev/mapper/$PREFIX* | xargs -I% dmsetup remove -f %
ls /dev/mapper/$PREFIX* | xargs -I% rm -rf %
blkdiscard /dev/loop0 && sync
wipefs -af /dev/loop0
dd if=/dev/zero of=/dev/loop0 bs=1M count=100
```

