---
tags:
  - 'vm.dirty_ratio'
  - 'vm.dirty_background_ratio'
---

# Disk Caching & Performance


## Get vm.dirty_ratio & vm.dirty_background_ratio

```bash
$ sysctl -a | grep dirty
 vm.dirty_background_ratio = 10
 vm.dirty_background_bytes = 0
 vm.dirty_ratio = 20
 vm.dirty_bytes = 0
 vm.dirty_writeback_centisecs = 500
 vm.dirty_expire_centisecs = 3000
```
```bash
watch grep -A 1 dirty /proc/vmstat
nr_dirty 2
nr_writeback 0
```

If these numbers are significantly higher you might be having a bigger problem on your system.  Though from what I have read this sometimes indicates sync’ing.  If this becomes a problem on your server you can set system parameters in `/etc/sysctl.conf` to head this off by adding the following lines:

```bash
vm.dirty_background_ratio = 50
vm.dirty_ratio = 80
```

Then (as root) execute:

```bash
# sysctl -p
```
The `vm.dirty_background_ratio` tells at what ratio should the linux kernel start the background task of writing out dirty pages. The above increases this setting from the default 10% to 50%.  The `vm.dirty_ratio` tells at what ratio all IO writes become synchronous, meaning that we cannot do IO calls without waiting for the underlying device to complete them (which is something you never want to happen).

I did not add these to the `sysctl.conf` file but thought it worth documenting.


## Ansible

Sample task

```yaml
- name: Tune dirty sysctl
  hosts: all
  become: true

  tasks:

    sysctl:
        name: "{{ item.key }}"
        value: "{{ item.value }}"
        state: present
        reload: yes
      with_items:
        - { key: vm.swappiness, value: 1 }
        - { key: vm.min_free_kbytes, value: 131072 }
        - { key: vm.dirty_background_ratio, value: 1 } # https://www.vertica.com/kb/Tuning-Linux-Dirty-Data-Parameters-for-Vertica/Content/BestPractices/Tuning-Linux-Dirty-Data-Parameters-for-Vertica.htm#ForMoreInformation
        - { key: vm.dirty_ratio, value: 3 } # https://lonesysadmin.net/2013/12/22/better-linux-disk-caching-performance-vm-dirty_ratio/
```

## Referenes

* [2016: Adjust linux disk flush intervals to avoid blocking user processes](https://superuser.com/questions/1057007/adjust-linux-disk-flush-intervals-to-avoid-blocking-user-processes)
* [2013: 
Better Linux Disk Caching & Performance with vm.dirty_ratio & vm.dirty_background_ratio](https://lonesysadmin.net/2013/12/22/better-linux-disk-caching-performance-vm-dirty_ratio/)
* [2013: Flush this](https://linux.uits.uconn.edu/2013/08/06/flush-this-2/#)

