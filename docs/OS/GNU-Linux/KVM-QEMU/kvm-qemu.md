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
## VGA

### Recomendations

For the desktop use case (assuming display performance matters and/or you need multihead support), in order of preference:

1. `virtio` vga or `virtio-gpu-pci`, if your guest has drivers
2. `qxl` vga, if your guest has drivers
3. `bochs` display device, when using UEFI
4. `std`, standard VGA

For the server use case (assuming the GUI is rarely used, or not at all), in order of preference:

1. `none`: serial console, if you can work without a GUI
2. `bochs` display device, when using UEFI
3. `std`, standard VGA

On arm systems display devices with a pci memory bar do not work, which reduces the choices alot. We are left with:

1. `virtio-gpu-pci` virtio gpu, if your guest has drivers
2. `ramfb`

### References

* [VGA and other display devices in qemu](https://www.kraxel.org/blog/2019/09/display-devices-in-qemu/)

## PCI passthrough

Usually very complex and recomended only for advanced users.

## USB hotplug


### Attach a USB device

Attach your device to your VM using virtmanager. You will end up with a section like this in your machine definition:

1. Copy this snippets to a new file `/etc/libvirt/snippets/SNIPPET.xml`

```xml
<hostdev mode='subsystem' type='usb' managed='yes'>
  <source>
    <vendor id='0x04f9'/>
    <product id='0x2015'/>
  </source>
  <address type='usb' bus='0' port='4'/>
</hostdev>
```

2. Load the snippet into the Virtual Machine:

```bash
$ virsh attach-device VMNAME /etc/libvirt/snippets/SNIPPET.xml
Device attached successfully
```

3. Find `ENV{PRODUCT}` using `udevadm monitor --environment`

4. Add a `/etc/udev/rules.d/90-libvirt-usb.rules` to automate this plugin and unpluggin using `udev`.

```
ACTION=="add",    SUBSYSTEM=="usb", ENV{PRODUCT}=="4f9/2015/100", RUN+="/usr/bin/virsh attach-device VMNAME /etc/libvirt/snippets/SNIPPET.xml"
ACTION=="remove", SUBSYSTEM=="usb", ENV{PRODUCT}=="4f9/2015/100", RUN+="/usr/bin/virsh detach-device VMNAME /etc/libvirt/snippets/SNIPPET.xml"
```

#### References

* [2020: Hotplug USB devices into libvirt VMS](https://blog.tinyhost.de/blog/2020-05-01_libvirt_usb.html)

## Huge Pages

HugePages is a feature integrated into the Linux kernel since v2.6. It makes possible for the OS to suport memory pages greater than the default (usually 4KB). Using very large page sizes can improve system performance by reduccing the ammount of system resources required to access page tables entries.. I't size vary from 2MB to 256oMB, depending on the kernel version and the harware architecture.
This feature is commonly enabled in VMs and big Databases.

For KVM/libvirt case I put a hugepages scripts on `/etc/libvirt/hooks/hugepages.sh` and then make symbolic links from each libvirtvm hook to that one. For.

Example, if you have 2 VMs named `wind10` and `ubuntu20`:
```
/etc/libvirt/hooks/
  huepages.sh
  qemu
  qemu.d/
    win10/
      prepare/
        begin/
          hugepages.sh -> ../../../../hugepages.sh
      release/
        end/
          hugepages.sh -> ../../../../hugepages.sh
    ubuntu20/
      prepare/
        begin/
          hugepages.sh -> ../../../../hugepages.sh
      release/
        end/
          hugepages.sh -> ../../../../hugepages.sh
```

* [My hugepages hook script](https://github.com/sdelrio/ansible-workstation/blob/master/roles/kvm/files/hooks/hugepages.sh)

## Gaming VM

* [Performance of your gaming VM](https://rokups.github.io/#!pages/gaming-vm-performance.md)


## WakeonLan

libvirt-wakenlan, a daemon which listens for wake on LAN packets and starts libvirt based virtual machines

* [GitHub libvirt-wakeonlan](https://github.com/simoncadman/libvirt-wakeonlan)

