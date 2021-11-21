# KVM/QEMU

## qemu.conf

### UEFI BIOS

To enable UEFI bios override (VGA passwthrough and others). Uncomment the `nvram` config.

* `/etc/libvirt/qemu.conf`

```
# Later, when libvirt creates per domain variable store, this list is
# searched for the master image. The UEFI firmware can be called
# differently for different guest architectures. For instance, it's OVMF
# for x86_64 and i686, but it's AAVMF for aarch64. The libvirt default
# follows this scheme.

nvram = [
   "/usr/share/OVMF/OVMF_CODE.fd:/usr/share/OVMF/OVMF_VARS.fd",
   "/usr/share/OVMF/OVMF_CODE.secboot.fd:/usr/share/OVMF/OVMF_VARS.fd",
   "/usr/share/AAVMF/AAVMF_CODE.fd:/usr/share/AAVMF/AAVMF_VARS.fd",
   "/usr/share/AAVMF/AAVMF32_CODE.fd:/usr/share/AAVMF/AAVMF32_VARS.fd",
   "/usr/share/OVMF/OVMF_CODE.ms.fd:/usr/share/OVMF/OVMF_VARS.ms.fd"
]
```

#### Disable securty

Set `security_driver = "none"` if you need some special privilege, like VGA or USB passthrough.

## virtio-win isos

* <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/>


## virtio-fs

Virtiofs is a shared file system that lets virtual machines access a directory tree on the host. Unlike existing approaches, it is designed to offer local file system semantics and performance. 

* <https://virtio-fs.gitlab.io/>


### Requirements

* Linux 5.4

```bash
$ uname -rv
5.4.0-90-generic #101-Ubuntu SMP Fri Oct 15 20:00:55 UTC 2021
```

* QEMU 5.0

```bash
$ qemu-aarch64_be-static --version
qemu-aarch64_be version 5.0.0 (Debian 1:5.0-5ubuntu6~ppa0)
Copyright (c) 2003-2020 Fabrice Bellard and the QEMU Project developers
```

* libvirt 6.2

```bash
$ libvirtd -V
libvirtd (libvirt) 6.6.0
```

* `memory_backend_dir` enabled on libvirt.conf

```bash
grep memoery_backing_dir /etc/libvirt/qemu.conf
memory_backing_dir = "/var/lib/libvirt/qemu/ram"
```

### CPU section with NUMA

```xml
  <cpu mode="host-model" check="none">
    <topology sockets="1" dies="1" cores="6" threads="2"/>
    <numa>
      <cell id="0" cpus="0-11" memory="16" unit="GiB" memAccess="shared"/>
    </numa>
  </cpu>
```
### memoryBacking with source and access

```xml
  <memoryBacking>
    <hugepages/>
    <source type="memfd"/>
    <access mode="shared"/>
  </memoryBacking>
```
### filesystem with virtiofs

* source dir will be a path on the hots machine
* target dir is the name of the mounted drive in the guest machine

```xml
  <devices>
   ...
    <filesystem type="mount" accessmode="passthrough">
      <driver type="virtiofs" queue="1024"/>
      <source dir="/hddpool/imagenes"/>
      <target dir="mount_tag"/>
    </filesystem>
   ...
  </devices>
```

### Ubuntu 20.04

QEMU 5.0, libvirt 6.6, virtmanager 3.0, are available for Ubuntu 20.04:

* <https://launchpad.net/~jacob/+archive/ubuntu/virtualisation?field.series_filter=focal>

#### CLI install
```bash
sudo add-apt-repository ppa:jacob/virtualisation
sudo apt-get update
```

#### Ansible install

```yaml
- name: "Add Jacob Zimmermann APT repo"
  apt_repository:
    repo: ppa:jacob/virtualisation
    state: present
    codename: focal

    - name: "APT VM packages"
  apt:
    name:
      - qemu-kvm
      - qemu-utils
      - libvirt-daemon-system
      - libvirt-clients
      - virt-manager
      - ovmf
      - libhugetlbfs-bin      # hugeadm: Tools to ease use of hugetlbfs
```

