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

* libvirt 6.2+ (in my case i got 6.6.0)

```bash
$ libvirtd -V
libvirtd (libvirt) 6.6.0
```

* `memory_backend_dir` enabled on libvirt.conf

```bash
grep memory_backing_dir /etc/libvirt/qemu.conf
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

## Windonws 10 VM

* [Windows 10 KVM VN on Ryzen 9 3900x using qemu and vga passthrough](https://www.heiko-sieger.info/creating-a-windows-10-vm-on-the-amd-ryzen-9-3900x-using-qemu-4-0-and-vga-passthrough/)

## Gaming VM

* [Performance of your gaming VM](https://rokups.github.io/#!pages/gaming-vm-performance.md)
* [Guide to performance optimizations for gaming on VM with QEMU and PCI passthrough](https://mathiashueber.com/performance-tweaks-gaming-on-virtual-machines/)

## CPU Pinning

CPU-pinning will allocate CPU-cores for the guest VM while it is running. The idea is the host machine not using the guest CPU cores pinned inside the VM.

A more agresive aproach could be to use `isolcpus` kernel command line as linux boot parameter to restrict access even if the VM is not running.

<details>
 <summary>isolcpu kernel parameters</summary>
  <div>

:::note
https://wiki.archlinux.org/title/PCI_passthrough_via_OVMF#With_isolcpus_kernel_parameter

Example, let us assume you are using CPUs 4-7. Use the kernel parameters `isolcpus nohz_full rcu_nocbs` to completely isolate the CPUs from the kernel. For example:

```bash
isolcpus=4-7 nohz_full=4-7 rcu_nocbs=4-7
```

Then, run `qemu-system-x86_64` with taskset and chrt:

```bash
chrt -r 1 taskset -c 4-7 qemu-system-x86_64 ...
```

The `chrt` command will ensure that the task scheduler will round-robin distribute work (otherwise it will all stay on the first cpu). For taskset, the CPU numbers can be comma- and/or dash-separated, like "0,1,2,3" or "0-4" or "1,7-8,10" etc.
:::

  </div>
</details>

### AMD Ryzen 3900

![cpu-ryzen3k](/img/lstopo-cpu-ryzen3900.png)

:::noteScrenshot from lstopo cli tool
Tool to see CPU architecture, usually in all mayor distributions.

* Ubuntu/Mint: `apt-get install hwloc`
:::

AMD Ryzen 3900 has 12 physical cores, each core with 2 threads, with a total of 24 cores availabe to make the cpu pinning.

The 12 cores are spared in 4 complex of 3 physical cores called CCX.

Each CCX has his own L3 (16MB) cache.

Depending on the power needed inside the VM we could set:

* 1 CCX for the host and 3 CCX for the VM
* 2 CCX for the host and 2 CCX for the VM
* ...
* `n` CCX for the hots and `4-n` CCX for the VM

In this example will choose 2 for the host and 2 for the VM:

![pin cpu ryen3900](/img/lstopo-pin-cpu-ryzen3900.png)

#### Manual edit your VM xml

Edit your VM xml settings wiht `virsh edit your-windows-vm-name`

#### Domain schema

Search for

```xml
<domain type='kvm'>
```

and repace with:

```xml
<domain type='kvm' xmlns:qemu='http://libvirt.org/schemas/domain/qemu/1.0'>
```

#### Update vcpu section

Find line within `<vcpu>....</vcpu>` and add the following block:

```xml
<vcpu placement='static'>12</vcpu>
<iothreads>2</iothreads>
<cputune>
    <vcpupin vcpu='0' cpuset='12'/>
    <vcpupin vcpu='1' cpuset='13'/>
    <vcpupin vcpu='2' cpuset='14'/>
    <vcpupin vcpu='3' cpuset='15'/>
    <vcpupin vcpu='4' cpuset='16'/>
    <vcpupin vcpu='5' cpuset='17'/>
    <vcpupin vcpu='6' cpuset='18'/>
    <vcpupin vcpu='7' cpuset='19'/>
    <vcpupin vcpu='8' cpuset='20'/>
    <vcpupin vcpu='9' cpuset='21'/>
    <vcpupin vcpu='10' cpuset='22'/>
    <vcpupin vcpu='11' cpuset='23'/>
    <emulatorpin cpuset='0-1'/>
    <iothreadpin iothread='1' cpuset='0-1'/>
    <iothreadpin iothread='2' cpuset='2-3'/>
 </cputune>
```

#### Update cpu section


Find the block `<cpu>...</cpu>` and adapt like this:

```xml
<cpu mode='host-passthrough' check='none'>
    <topology sockets='1' cores='6' threads='2'/>
    <cache mode='passthrough'/>
    <feature policy='require' name='topoext'/>
    <!-- add additional cpu features here-->
</cpu>
```

## WakeonLan

libvirt-wakenlan, a daemon which listens for wake on LAN packets and starts libvirt based virtual machines

* [GitHub libvirt-wakeonlan](https://github.com/simoncadman/libvirt-wakeonlan)

## Apparmor

When you find some vm not sarting, check for dmesg or `/var/log/syslog`.


### libvirt denied capname `sysrawio`
```log
[ 2592.816582] audit: type=1400 audit(1638036341.363:33): apparmor="DENIED" operation="capable" profile="libvirtd" pid=4545 comm="prio-rpc-worker" capability=17  capname="sys_rawio"
[ 2593.030984] audit: type=1400 audit(1638036341.575:34): apparmor="DENIED" operation="capable" profile="libvirtd" pid=47974 comm="libvirt_parthel" capability=17  capname="sys_rawio"
[ 2593.045133] audit: type=1400 audit(1638036341.591:35): apparmor="DENIED" operation="capable" profile="libvirtd" pid=47977 comm="libvirt_parthel" capability=17  capname="sys_rawio"
```

Edit apparmor and add `capability sys_rawio,` (the comma at the end too) and restart libvirt service

```bash
sudo vi /etc/apparmor.d/abstractions/libvirt-qemu
sudo systemctl restart libvirtd
```

