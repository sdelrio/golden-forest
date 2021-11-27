"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[9753],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),u=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6637:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],s={},o="KVM/QEMU",u={unversionedId:"OS/GNU-Linux/KVM-QEMU/kvm-qemu",id:"OS/GNU-Linux/KVM-QEMU/kvm-qemu",isDocsHomePage:!1,title:"KVM/QEMU",description:"qemu.conf",source:"@site/docs/OS/GNU-Linux/KVM-QEMU/kvm-qemu.md",sourceDirName:"OS/GNU-Linux/KVM-QEMU",slug:"/OS/GNU-Linux/KVM-QEMU/kvm-qemu",permalink:"/docs/OS/GNU-Linux/KVM-QEMU/kvm-qemu",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/KVM-QEMU/kvm-qemu.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bcache SSD caching",permalink:"/docs/OS/GNU-Linux/HDs/ssd-cache"},next:{title:"Linux 5.15",permalink:"/docs/OS/GNU-Linux/Kernel/linux-5.15"}},c=[{value:"qemu.conf",id:"qemuconf",children:[{value:"UEFI BIOS",id:"uefi-bios",children:[{value:"Disable securty",id:"disable-securty",children:[],level:4}],level:3}],level:2},{value:"virtio-win isos",id:"virtio-win-isos",children:[],level:2},{value:"virtio-fs",id:"virtio-fs",children:[{value:"Requirements",id:"requirements",children:[],level:3},{value:"CPU section with NUMA",id:"cpu-section-with-numa",children:[],level:3},{value:"memoryBacking with source and access",id:"memorybacking-with-source-and-access",children:[],level:3},{value:"filesystem with virtiofs",id:"filesystem-with-virtiofs",children:[],level:3},{value:"Ubuntu 20.04",id:"ubuntu-2004",children:[{value:"CLI install",id:"cli-install",children:[],level:4},{value:"Ansible install",id:"ansible-install",children:[],level:4}],level:3}],level:2},{value:"VGA",id:"vga",children:[{value:"Recomendations",id:"recomendations",children:[],level:3},{value:"References",id:"references",children:[],level:3}],level:2},{value:"PCI passthrough",id:"pci-passthrough",children:[],level:2},{value:"USB hotplug",id:"usb-hotplug",children:[{value:"Attach a USB device",id:"attach-a-usb-device",children:[{value:"References",id:"references-1",children:[],level:4}],level:3}],level:2},{value:"Huge Pages",id:"huge-pages",children:[],level:2},{value:"Gaming VM",id:"gaming-vm",children:[],level:2},{value:"WakeonLan",id:"wakeonlan",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kvmqemu"},"KVM/QEMU"),(0,r.kt)("h2",{id:"qemuconf"},"qemu.conf"),(0,r.kt)("h3",{id:"uefi-bios"},"UEFI BIOS"),(0,r.kt)("p",null,"To enable UEFI bios override (VGA passwthrough and others). Uncomment the ",(0,r.kt)("inlineCode",{parentName:"p"},"nvram")," config."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/libvirt/qemu.conf"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Later, when libvirt creates per domain variable store, this list is\n# searched for the master image. The UEFI firmware can be called\n# differently for different guest architectures. For instance, it\'s OVMF\n# for x86_64 and i686, but it\'s AAVMF for aarch64. The libvirt default\n# follows this scheme.\n\nnvram = [\n   "/usr/share/OVMF/OVMF_CODE.fd:/usr/share/OVMF/OVMF_VARS.fd",\n   "/usr/share/OVMF/OVMF_CODE.secboot.fd:/usr/share/OVMF/OVMF_VARS.fd",\n   "/usr/share/AAVMF/AAVMF_CODE.fd:/usr/share/AAVMF/AAVMF_VARS.fd",\n   "/usr/share/AAVMF/AAVMF32_CODE.fd:/usr/share/AAVMF/AAVMF32_VARS.fd",\n   "/usr/share/OVMF/OVMF_CODE.ms.fd:/usr/share/OVMF/OVMF_VARS.ms.fd"\n]\n')),(0,r.kt)("h4",{id:"disable-securty"},"Disable securty"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},'security_driver = "none"')," if you need some special privilege, like VGA or USB passthrough."),(0,r.kt)("h2",{id:"virtio-win-isos"},"virtio-win isos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/"},"https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/"))),(0,r.kt)("h2",{id:"virtio-fs"},"virtio-fs"),(0,r.kt)("p",null,"Virtiofs is a shared file system that lets virtual machines access a directory tree on the host. Unlike existing approaches, it is designed to offer local file system semantics and performance. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://virtio-fs.gitlab.io/"},"https://virtio-fs.gitlab.io/"))),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux 5.4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ uname -rv\n5.4.0-90-generic #101-Ubuntu SMP Fri Oct 15 20:00:55 UTC 2021\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"QEMU 5.0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ qemu-aarch64_be-static --version\nqemu-aarch64_be version 5.0.0 (Debian 1:5.0-5ubuntu6~ppa0)\nCopyright (c) 2003-2020 Fabrice Bellard and the QEMU Project developers\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"libvirt 6.2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ libvirtd -V\nlibvirtd (libvirt) 6.6.0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"memory_backend_dir")," enabled on libvirt.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grep memoery_backing_dir /etc/libvirt/qemu.conf\nmemory_backing_dir = "/var/lib/libvirt/qemu/ram"\n')),(0,r.kt)("h3",{id:"cpu-section-with-numa"},"CPU section with NUMA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'  <cpu mode="host-model" check="none">\n    <topology sockets="1" dies="1" cores="6" threads="2"/>\n    <numa>\n      <cell id="0" cpus="0-11" memory="16" unit="GiB" memAccess="shared"/>\n    </numa>\n  </cpu>\n')),(0,r.kt)("h3",{id:"memorybacking-with-source-and-access"},"memoryBacking with source and access"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'  <memoryBacking>\n    <hugepages/>\n    <source type="memfd"/>\n    <access mode="shared"/>\n  </memoryBacking>\n')),(0,r.kt)("h3",{id:"filesystem-with-virtiofs"},"filesystem with virtiofs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"source dir will be a path on the hots machine"),(0,r.kt)("li",{parentName:"ul"},"target dir is the name of the mounted drive in the guest machine")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'  <devices>\n   ...\n    <filesystem type="mount" accessmode="passthrough">\n      <driver type="virtiofs" queue="1024"/>\n      <source dir="/hddpool/imagenes"/>\n      <target dir="mount_tag"/>\n    </filesystem>\n   ...\n  </devices>\n')),(0,r.kt)("h3",{id:"ubuntu-2004"},"Ubuntu 20.04"),(0,r.kt)("p",null,"QEMU 5.0, libvirt 6.6, virtmanager 3.0, are available for Ubuntu 20.04:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://launchpad.net/~jacob/+archive/ubuntu/virtualisation?field.series_filter=focal"},"https://launchpad.net/~jacob/+archive/ubuntu/virtualisation?field.series_filter=focal"))),(0,r.kt)("h4",{id:"cli-install"},"CLI install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository ppa:jacob/virtualisation\nsudo apt-get update\n")),(0,r.kt)("h4",{id:"ansible-install"},"Ansible install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: "Add Jacob Zimmermann APT repo"\n  apt_repository:\n    repo: ppa:jacob/virtualisation\n    state: present\n    codename: focal\n\n    - name: "APT VM packages"\n  apt:\n    name:\n      - qemu-kvm\n      - qemu-utils\n      - libvirt-daemon-system\n      - libvirt-clients\n      - virt-manager\n      - ovmf\n      - libhugetlbfs-bin      # hugeadm: Tools to ease use of hugetlbfs\n')),(0,r.kt)("h2",{id:"vga"},"VGA"),(0,r.kt)("h3",{id:"recomendations"},"Recomendations"),(0,r.kt)("p",null,"For the desktop use case (assuming display performance matters and/or you need multihead support), in order of preference:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"virtio")," vga or ",(0,r.kt)("inlineCode",{parentName:"li"},"virtio-gpu-pci"),", if your guest has drivers"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"qxl")," vga, if your guest has drivers"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bochs")," display device, when using UEFI"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"std"),", standard VGA")),(0,r.kt)("p",null,"For the server use case (assuming the GUI is rarely used, or not at all), in order of preference:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"none"),": serial console, if you can work without a GUI"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bochs")," display device, when using UEFI"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"std"),", standard VGA")),(0,r.kt)("p",null,"On arm systems display devices with a pci memory bar do not work, which reduces the choices alot. We are left with:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"virtio-gpu-pci")," virtio gpu, if your guest has drivers"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ramfb"))),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.kraxel.org/blog/2019/09/display-devices-in-qemu/"},"VGA and other display devices in qemu"))),(0,r.kt)("h2",{id:"pci-passthrough"},"PCI passthrough"),(0,r.kt)("p",null,"Usually very complex and recomended only for advanced users."),(0,r.kt)("h2",{id:"usb-hotplug"},"USB hotplug"),(0,r.kt)("h3",{id:"attach-a-usb-device"},"Attach a USB device"),(0,r.kt)("p",null,"Attach your device to your VM using virtmanager. You will end up with a section like this in your machine definition:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Copy this snippets to a new file ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/libvirt/snippets/SNIPPET.xml"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<hostdev mode='subsystem' type='usb' managed='yes'>\n  <source>\n    <vendor id='0x04f9'/>\n    <product id='0x2015'/>\n  </source>\n  <address type='usb' bus='0' port='4'/>\n</hostdev>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Load the snippet into the Virtual Machine:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ virsh attach-device VMNAME /etc/libvirt/snippets/SNIPPET.xml\nDevice attached successfully\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find ",(0,r.kt)("inlineCode",{parentName:"p"},"ENV{PRODUCT}")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"udevadm monitor --environment"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/udev/rules.d/90-libvirt-usb.rules")," to automate this plugin and unpluggin using ",(0,r.kt)("inlineCode",{parentName:"p"},"udev"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ACTION=="add",    SUBSYSTEM=="usb", ENV{PRODUCT}=="4f9/2015/100", RUN+="/usr/bin/virsh attach-device VMNAME /etc/libvirt/snippets/SNIPPET.xml"\nACTION=="remove", SUBSYSTEM=="usb", ENV{PRODUCT}=="4f9/2015/100", RUN+="/usr/bin/virsh detach-device VMNAME /etc/libvirt/snippets/SNIPPET.xml"\n')),(0,r.kt)("h4",{id:"references-1"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.tinyhost.de/blog/2020-05-01_libvirt_usb.html"},"2020: Hotplug USB devices into libvirt VMS"))),(0,r.kt)("h2",{id:"huge-pages"},"Huge Pages"),(0,r.kt)("p",null,"HugePages is a feature integrated into the Linux kernel since v2.6. It makes possible for the OS to suport memory pages greater than the default (usually 4KB). Using very large page sizes can improve system performance by reduccing the ammount of system resources required to access page tables entries.. I't size vary from 2MB to 256oMB, depending on the kernel version and the harware architecture.\nThis feature is commonly enabled in VMs and big Databases."),(0,r.kt)("p",null,"For KVM/libvirt case I put a hugepages scripts on ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/libvirt/hooks/hugepages.sh")," and then make symbolic links from each libvirtvm hook to that one. For."),(0,r.kt)("p",null,"Example, if you have 2 VMs named ",(0,r.kt)("inlineCode",{parentName:"p"},"wind10")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu20"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/etc/libvirt/hooks/\n  huepages.sh\n  qemu\n  qemu.d/\n    win10/\n      prepare/\n        begin/\n          hugepages.sh -> ../../../../hugepages.sh\n      release/\n        end/\n          hugepages.sh -> ../../../../hugepages.sh\n    ubuntu20/\n      prepare/\n        begin/\n          hugepages.sh -> ../../../../hugepages.sh\n      release/\n        end/\n          hugepages.sh -> ../../../../hugepages.sh\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sdelrio/ansible-workstation/blob/master/roles/kvm/files/hooks/hugepages.sh"},"My hugepages hook script"))),(0,r.kt)("h2",{id:"gaming-vm"},"Gaming VM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rokups.github.io/#!pages/gaming-vm-performance.md"},"Performance of your gaming VM"))),(0,r.kt)("h2",{id:"wakeonlan"},"WakeonLan"),(0,r.kt)("p",null,"libvirt-wakenlan, a daemon which listens for wake on LAN packets and starts libvirt based virtual machines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/simoncadman/libvirt-wakeonlan"},"GitHub libvirt-wakeonlan"))))}d.isMDXComponent=!0}}]);