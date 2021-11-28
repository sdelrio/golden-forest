"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[9753],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6637:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],s={},o="KVM/QEMU",p={unversionedId:"OS/GNU-Linux/KVM-QEMU/kvm-qemu",id:"OS/GNU-Linux/KVM-QEMU/kvm-qemu",isDocsHomePage:!1,title:"KVM/QEMU",description:"qemu.conf",source:"@site/docs/OS/GNU-Linux/KVM-QEMU/kvm-qemu.md",sourceDirName:"OS/GNU-Linux/KVM-QEMU",slug:"/OS/GNU-Linux/KVM-QEMU/kvm-qemu",permalink:"/docs/OS/GNU-Linux/KVM-QEMU/kvm-qemu",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/KVM-QEMU/kvm-qemu.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bcache SSD caching",permalink:"/docs/OS/GNU-Linux/HDs/ssd-cache"},next:{title:"Linux 5.15",permalink:"/docs/OS/GNU-Linux/Kernel/linux-5.15"}},u=[{value:"qemu.conf",id:"qemuconf",children:[{value:"UEFI BIOS",id:"uefi-bios",children:[{value:"Disable securty",id:"disable-securty",children:[],level:4}],level:3}],level:2},{value:"virtio-win isos",id:"virtio-win-isos",children:[],level:2},{value:"virtio-fs",id:"virtio-fs",children:[{value:"Requirements",id:"requirements",children:[{value:"Ubuntu 20.04",id:"ubuntu-2004",children:[{value:"CLI install",id:"cli-install",children:[],level:5},{value:"Ansible install",id:"ansible-install",children:[],level:5}],level:4}],level:3},{value:"CPU section with NUMA",id:"cpu-section-with-numa",children:[],level:3},{value:"memoryBacking with source and access",id:"memorybacking-with-source-and-access",children:[],level:3},{value:"filesystem with virtiofs",id:"filesystem-with-virtiofs",children:[],level:3},{value:"Install virtiofs drivers on windows",id:"install-virtiofs-drivers-on-windows",children:[],level:3}],level:2},{value:"PCI passthrough",id:"pci-passthrough",children:[{value:"Check if is <code>amd_iommu=on</code> &amp; <code>amd_iommu=pt</code> enabled",id:"check-if-is-amd_iommuon--amd_iommupt-enabled",children:[],level:3}],level:2},{value:"VGA",id:"vga",children:[{value:"Recomendations",id:"recomendations",children:[],level:3},{value:"References",id:"references",children:[],level:3}],level:2},{value:"PCI passthrough",id:"pci-passthrough-1",children:[],level:2},{value:"USB hotplug",id:"usb-hotplug",children:[{value:"Attach a USB device",id:"attach-a-usb-device",children:[{value:"References",id:"references-1",children:[],level:4}],level:3}],level:2},{value:"Huge Pages",id:"huge-pages",children:[],level:2},{value:"Windonws 10 VM",id:"windonws-10-vm",children:[],level:2},{value:"Gaming VM",id:"gaming-vm",children:[],level:2},{value:"CPU Pinning",id:"cpu-pinning",children:[{value:"AMD Ryzen 3900",id:"amd-ryzen-3900",children:[{value:"Manual edit your VM xml",id:"manual-edit-your-vm-xml",children:[],level:4},{value:"Domain schema",id:"domain-schema",children:[],level:4},{value:"Update vcpu section",id:"update-vcpu-section",children:[],level:4},{value:"Update cpu section",id:"update-cpu-section",children:[],level:4}],level:3}],level:2},{value:"WakeonLan",id:"wakeonlan",children:[],level:2},{value:"Apparmor",id:"apparmor",children:[{value:"libvirt denied capname <code>sysrawio</code>",id:"libvirt-denied-capname-sysrawio",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kvmqemu"},"KVM/QEMU"),(0,r.kt)("h2",{id:"qemuconf"},"qemu.conf"),(0,r.kt)("h3",{id:"uefi-bios"},"UEFI BIOS"),(0,r.kt)("p",null,"To enable UEFI bios override (VGA passwthrough and others). Uncomment the ",(0,r.kt)("inlineCode",{parentName:"p"},"nvram")," config."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/libvirt/qemu.conf"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Later, when libvirt creates per domain variable store, this list is\n# searched for the master image. The UEFI firmware can be called\n# differently for different guest architectures. For instance, it\'s OVMF\n# for x86_64 and i686, but it\'s AAVMF for aarch64. The libvirt default\n# follows this scheme.\n\nnvram = [\n   "/usr/share/OVMF/OVMF_CODE.fd:/usr/share/OVMF/OVMF_VARS.fd",\n   "/usr/share/OVMF/OVMF_CODE.secboot.fd:/usr/share/OVMF/OVMF_VARS.fd",\n   "/usr/share/AAVMF/AAVMF_CODE.fd:/usr/share/AAVMF/AAVMF_VARS.fd",\n   "/usr/share/AAVMF/AAVMF32_CODE.fd:/usr/share/AAVMF/AAVMF32_VARS.fd",\n   "/usr/share/OVMF/OVMF_CODE.ms.fd:/usr/share/OVMF/OVMF_VARS.ms.fd"\n]\n')),(0,r.kt)("h4",{id:"disable-securty"},"Disable securty"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},'security_driver = "none"')," if you need some special privilege, like VGA or USB passthrough."),(0,r.kt)("h2",{id:"virtio-win-isos"},"virtio-win isos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/"},"https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/"))),(0,r.kt)("h2",{id:"virtio-fs"},"virtio-fs"),(0,r.kt)("p",null,"Virtiofs is a shared file system that lets virtual machines access a directory tree on the host. Unlike existing approaches, it is designed to offer local file system semantics and performance."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://virtio-fs.gitlab.io/"},"https://virtio-fs.gitlab.io/"))),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux 5.4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ uname -rv\n5.4.0-90-generic #101-Ubuntu SMP Fri Oct 15 20:00:55 UTC 2021\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"QEMU 5.0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ qemu-aarch64_be-static --version\nqemu-aarch64_be version 5.0.0 (Debian 1:5.0-5ubuntu6~ppa0)\nCopyright (c) 2003-2020 Fabrice Bellard and the QEMU Project developers\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"libvirt 6.2+ (in my case i got 6.6.0)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ libvirtd -V\nlibvirtd (libvirt) 6.6.0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"memory_backend_dir")," enabled on libvirt.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grep memory_backing_dir /etc/libvirt/qemu.conf\nmemory_backing_dir = "/var/lib/libvirt/qemu/ram"\n')),(0,r.kt)("h4",{id:"ubuntu-2004"},"Ubuntu 20.04"),(0,r.kt)("p",null,"QEMU 5.0, libvirt 6.6, virtmanager 3.0, are available for Ubuntu 20.04:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://launchpad.net/~jacob/+archive/ubuntu/virtualisation?field.series_filter=focal"},"https://launchpad.net/~jacob/+archive/ubuntu/virtualisation?field.series_filter=focal"))),(0,r.kt)("h5",{id:"cli-install"},"CLI install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository ppa:jacob/virtualisation\nsudo apt-get update\n")),(0,r.kt)("h5",{id:"ansible-install"},"Ansible install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: "Add Jacob Zimmermann APT repo"\n  apt_repository:\n    repo: ppa:jacob/virtualisation\n    state: present\n    codename: focal\n\n    - name: "APT VM packages"\n  apt:\n    name:\n      - qemu-kvm\n      - qemu-utils\n      - libvirt-daemon-system\n      - libvirt-clients\n      - virt-manager\n      - ovmf\n      - libhugetlbfs-bin      # hugeadm: Tools to ease use of hugetlbfs\n')),(0,r.kt)("h3",{id:"cpu-section-with-numa"},"CPU section with NUMA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'  <cpu mode="host-model" check="none">\n    <topology sockets="1" dies="1" cores="6" threads="2"/>\n    <numa>\n      <cell id="0" cpus="0-11" memory="16" unit="GiB" memAccess="shared"/>\n    </numa>\n  </cpu>\n')),(0,r.kt)("h3",{id:"memorybacking-with-source-and-access"},"memoryBacking with source and access"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'  <memoryBacking>\n    <hugepages/>\n    <source type="memfd"/>\n    <access mode="shared"/>\n  </memoryBacking>\n')),(0,r.kt)("h3",{id:"filesystem-with-virtiofs"},"filesystem with virtiofs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"source dir will be a path on the hots machine"),(0,r.kt)("li",{parentName:"ul"},"target dir is the name of the mounted drive in the guest machine")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'  <devices>\n   ...\n    <filesystem type="mount" accessmode="passthrough">\n      <driver type="virtiofs" queue="1024"/>\n      <source dir="/hddpool/imagenes"/>\n      <target dir="mount_tag"/>\n    </filesystem>\n   ...\n  </devices>\n')),(0,r.kt)("h3",{id:"install-virtiofs-drivers-on-windows"},"Install virtiofs drivers on windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://virtio-fs.gitlab.io/howto-windows.html"},"How to install virtiofs drivers on windows"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("a",{parentName:"li",href:"http://www.secfs.net/winfsp"},"WinFsp")),(0,r.kt)("li",{parentName:"ol"},"Install virtiofs PCI device driver: Device manager, right click Mass storage device, use virtio-win ISO to install drivers"),(0,r.kt)("li",{parentName:"ol"},"Copy ",(0,r.kt)("inlineCode",{parentName:"li"},"E:\\viofs\\w10\\amd64")," (E drive is your virtio-win ISO drivers) to a local location (sample ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\virtiofs"),")."),(0,r.kt)("li",{parentName:"ol"},"Install virtio service on windows (open terminal as administrator).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'sc.exe create VirtioFsSvc binpath="C:\\virtiofs\\virtiofs.exe" start=auto depend="WinFsp.Launcher/VirtioFsDrv" DisplayName="Virtio FS Service"\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Start VirtioFsSvc (open terminal as administrator).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sc.exe start VirtioFsSvc\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"virtiofs terminal",src:n(5529).Z})),(0,r.kt)("h2",{id:"pci-passthrough"},"PCI passthrough"),(0,r.kt)("h3",{id:"check-if-is-amd_iommuon--amd_iommupt-enabled"},"Check if is ",(0,r.kt)("inlineCode",{parentName:"h3"},"amd_iommu=on")," & ",(0,r.kt)("inlineCode",{parentName:"h3"},"amd_iommu=pt")," enabled"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dmesg | grep AMD-Vi\n[    1.498933] pci 0000:00:00.2: AMD-Vi: IOMMU performance counters supported\n[    1.503260] pci 0000:00:00.2: AMD-Vi: Found IOMMU cap 0x40\n[    1.503261] pci 0000:00:00.2: AMD-Vi: Extended features (0x58f77ef22294ade):\n[    1.503263] AMD-Vi: Interrupt remapping enabled\n[    1.503263] AMD-Vi: Virtual APIC enabled\n[    1.503263] AMD-Vi: X2APIC enabled\n[    1.503333] AMD-Vi: Lazy IO/TLB flushing enabled\n[    1.801913] AMD-Vi: AMD IOMMUv2 driver by Joerg Roedel <jroedel@suse.de>\n$ lspci | grep VGA\n09:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Ellesmere [Radeon RX 470/480/570/570X/580/580X/590] (rev cf)\n$ lspci | grep VGA\n09:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Ellesmere [Radeon RX 470/480/570/570X/580/580X/590] (rev cf)\n$ lspci -nn|grep 09:00\n09:00.0 VGA compatible controller [0300]: Advanced Micro Devices, Inc. [AMD/ATI] Ellesmere [Radeon RX 470/480/570/570X/580/580X/590] [1002:67df] (rev cf)\n09:00.1 Audio de\n")),(0,r.kt)("p",null,"VGA has two devices, the first one is the graphics card and the second is the hdmi audio. In some graphics cards are even 3 of them (like usb or serial port). If you going to do a PCI passthrough to a VM you have to pass all the PCI IDs from that card."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/title/PCI_passthrough_via_OVMF"},"ArchLinux PCI passthrough via OVMF"))),(0,r.kt)("h2",{id:"vga"},"VGA"),(0,r.kt)("h3",{id:"recomendations"},"Recomendations"),(0,r.kt)("p",null,"For the desktop use case (assuming display performance matters and/or you need multihead support), in order of preference:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"virtio")," vga or ",(0,r.kt)("inlineCode",{parentName:"li"},"virtio-gpu-pci"),", if your guest has drivers"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"qxl")," vga, if your guest has drivers.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If guest is windows, is recomended to this enable change resolution when you resize the spice window and enable copy/paste from/to VM, so make sure you do this:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://www.spice-space.org/download/windows/spice-guest-tools/spice-guest-tools-latest.exe"},"spice-guest-tools")," ."),(0,r.kt)("li",{parentName:"ul"},"Install spice VD agent.")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install spice-vdagent\n")),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Make sure that in the qemu xml you have a ve the spicevmc channel into the ",(0,r.kt)("inlineCode",{parentName:"li"},"<devices>...</devices>")," section.")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<channel type="spicevmc">\n  <target type="virtio" name="com.redhat.spice.0" state="disconnected"/>\n  <alias name="channel0"/>\n  <address type="virtio-serial" controller="0" bus="0" port="1"/>\n</channel>\n')))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bochs")," display device, when using UEFI"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"std"),", standard VGA")),(0,r.kt)("p",null,"For the server use case (assuming the GUI is rarely used, or not at all), in order of preference:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"none"),": serial console, if you can work without a GUI"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bochs")," display device, when using UEFI"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"std"),", standard VGA")),(0,r.kt)("p",null,"On arm systems display devices with a pci memory bar do not work, which reduces the choices alot. We are left with:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"virtio-gpu-pci")," virtio gpu, if your guest has drivers"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ramfb"))),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.kraxel.org/blog/2019/09/display-devices-in-qemu/"},"VGA and other display devices in qemu"))),(0,r.kt)("h2",{id:"pci-passthrough-1"},"PCI passthrough"),(0,r.kt)("p",null,"Usually very complex and recomended only for advanced users."),(0,r.kt)("h2",{id:"usb-hotplug"},"USB hotplug"),(0,r.kt)("h3",{id:"attach-a-usb-device"},"Attach a USB device"),(0,r.kt)("p",null,"Attach your device to your VM using virtmanager. You will end up with a section like this in your machine definition:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Copy this snippets to a new file ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/libvirt/snippets/SNIPPET.xml"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<hostdev mode='subsystem' type='usb' managed='yes'>\n  <source>\n    <vendor id='0x04f9'/>\n    <product id='0x2015'/>\n  </source>\n  <address type='usb' bus='0' port='4'/>\n</hostdev>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Load the snippet into the Virtual Machine:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ virsh attach-device VMNAME /etc/libvirt/snippets/SNIPPET.xml\nDevice attached successfully\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find ",(0,r.kt)("inlineCode",{parentName:"p"},"ENV{PRODUCT}")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"udevadm monitor --environment"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/udev/rules.d/90-libvirt-usb.rules")," to automate this plugin and unpluggin using ",(0,r.kt)("inlineCode",{parentName:"p"},"udev"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ACTION=="add",    SUBSYSTEM=="usb", ENV{PRODUCT}=="4f9/2015/100", RUN+="/usr/bin/virsh attach-device VMNAME /etc/libvirt/snippets/SNIPPET.xml"\nACTION=="remove", SUBSYSTEM=="usb", ENV{PRODUCT}=="4f9/2015/100", RUN+="/usr/bin/virsh detach-device VMNAME /etc/libvirt/snippets/SNIPPET.xml"\n')),(0,r.kt)("h4",{id:"references-1"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.tinyhost.de/blog/2020-05-01_libvirt_usb.html"},"2020: Hotplug USB devices into libvirt VMS"))),(0,r.kt)("h2",{id:"huge-pages"},"Huge Pages"),(0,r.kt)("p",null,"HugePages is a feature integrated into the Linux kernel since v2.6. It makes possible for the OS to suport memory pages greater than the default (usually 4KB). Using very large page sizes can improve system performance by reduccing the ammount of system resources required to access page tables entries.. I't size vary from 2MB to 256oMB, depending on the kernel version and the harware architecture.\nThis feature is commonly enabled in VMs and big Databases."),(0,r.kt)("p",null,"For KVM/libvirt case I put a hugepages scripts on ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/libvirt/hooks/hugepages.sh")," and then make symbolic links from each libvirtvm hook to that one. For."),(0,r.kt)("p",null,"Example, if you have 2 VMs named ",(0,r.kt)("inlineCode",{parentName:"p"},"wind10")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu20"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/etc/libvirt/hooks/\n  huepages.sh\n  qemu\n  qemu.d/\n    win10/\n      prepare/\n        begin/\n          hugepages.sh -> ../../../../hugepages.sh\n      release/\n        end/\n          hugepages.sh -> ../../../../hugepages.sh\n    ubuntu20/\n      prepare/\n        begin/\n          hugepages.sh -> ../../../../hugepages.sh\n      release/\n        end/\n          hugepages.sh -> ../../../../hugepages.sh\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sdelrio/ansible-workstation/blob/master/roles/kvm/files/hooks/hugepages.sh"},"My hugepages hook script"))),(0,r.kt)("h2",{id:"windonws-10-vm"},"Windonws 10 VM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.heiko-sieger.info/running-windows-10-on-linux-using-kvm-with-vga-passthrough/"},"09/2021: Running Windows 10 on Linux using KVM wiht VGA passthrough")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.heiko-sieger.info/creating-a-windows-10-vm-on-the-amd-ryzen-9-3900x-using-qemu-4-0-and-vga-passthrough/"},"10/2021: Windows 10 KVM VN on Ryzen 9 3900x using qemu and vga passthrough"))),(0,r.kt)("h2",{id:"gaming-vm"},"Gaming VM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rokups.github.io/#!pages/gaming-vm-performance.md"},"Performance of your gaming VM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mathiashueber.com/performance-tweaks-gaming-on-virtual-machines/"},"2021: Guide to performance optimizations for gaming on VM with QEMU and PCI passthrough")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mathiashueber.com/pci-passthrough-ubuntu-2004-virtual-machine/"},"2020: VM with PCI passthrough on Ubuntu 20.04 for gaming machine"))),(0,r.kt)("h2",{id:"cpu-pinning"},"CPU Pinning"),(0,r.kt)("p",null,"CPU-pinning will allocate CPU-cores for the guest VM while it is running. The idea is the host machine not using the guest CPU cores pinned inside the VM."),(0,r.kt)("p",null,"A more agresive aproach could be to use ",(0,r.kt)("inlineCode",{parentName:"p"},"isolcpus")," kernel command line as linux boot parameter to restrict access even if the VM is not running."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"isolcpu kernel parameters"),(0,r.kt)("div",null,(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/title/PCI_passthrough_via_OVMF#With_isolcpus_kernel_parameter"},"https://wiki.archlinux.org/title/PCI_passthrough_via_OVMF#With_isolcpus_kernel_parameter")),(0,r.kt)("p",{parentName:"div"},"Example, let us assume you are using CPUs 4-7. Use the kernel parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"isolcpus nohz_full rcu_nocbs")," to completely isolate the CPUs from the kernel. For example:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"isolcpus=4-7 nohz_full=4-7 rcu_nocbs=4-7\n")),(0,r.kt)("p",{parentName:"div"},"Then, run ",(0,r.kt)("inlineCode",{parentName:"p"},"qemu-system-x86_64")," with taskset and chrt:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chrt -r 1 taskset -c 4-7 qemu-system-x86_64 ...\n")),(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"chrt"),' command will ensure that the task scheduler will round-robin distribute work (otherwise it will all stay on the first cpu). For taskset, the CPU numbers can be comma- and/or dash-separated, like "0,1,2,3" or "0-4" or "1,7-8,10" etc.'))))),(0,r.kt)("h3",{id:"amd-ryzen-3900"},"AMD Ryzen 3900"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cpu-ryzen3k",src:n(2750).Z})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Screnshot from lstopo cli tool")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Tool to see CPU architecture, usually in all mayor distributions."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Ubuntu/Mint: ",(0,r.kt)("inlineCode",{parentName:"li"},"apt-get install hwloc"))))),(0,r.kt)("p",null,"AMD Ryzen 3900 has 12 physical cores, each core with 2 threads, with a total of 24 cores availabe to make the cpu pinning."),(0,r.kt)("p",null,"The 12 cores are spared in 4 complex of 3 physical cores called CCX."),(0,r.kt)("p",null,"Each CCX has his own L3 (16MB) cache."),(0,r.kt)("p",null,"Depending on the power needed inside the VM we could set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 CCX for the host and 3 CCX for the VM"),(0,r.kt)("li",{parentName:"ul"},"2 CCX for the host and 2 CCX for the VM"),(0,r.kt)("li",{parentName:"ul"},"..."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n")," CCX for the hots and ",(0,r.kt)("inlineCode",{parentName:"li"},"4-n")," CCX for the VM")),(0,r.kt)("p",null,"In this example will choose 2 for the host and 2 for the VM:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pin cpu ryen3900",src:n(2356).Z})),(0,r.kt)("h4",{id:"manual-edit-your-vm-xml"},"Manual edit your VM xml"),(0,r.kt)("p",null,"Edit your VM xml settings wiht ",(0,r.kt)("inlineCode",{parentName:"p"},"virsh edit your-windows-vm-name")),(0,r.kt)("h4",{id:"domain-schema"},"Domain schema"),(0,r.kt)("p",null,"Search for"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<domain type='kvm'>\n")),(0,r.kt)("p",null,"and repace with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<domain type='kvm' xmlns:qemu='http://libvirt.org/schemas/domain/qemu/1.0'>\n")),(0,r.kt)("h4",{id:"update-vcpu-section"},"Update vcpu section"),(0,r.kt)("p",null,"Find line within ",(0,r.kt)("inlineCode",{parentName:"p"},"<vcpu>....</vcpu>")," and add the following block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<vcpu placement='static'>12</vcpu>\n<iothreads>2</iothreads>\n<cputune>\n    <vcpupin vcpu='0' cpuset='12'/>\n    <vcpupin vcpu='1' cpuset='13'/>\n    <vcpupin vcpu='2' cpuset='14'/>\n    <vcpupin vcpu='3' cpuset='15'/>\n    <vcpupin vcpu='4' cpuset='16'/>\n    <vcpupin vcpu='5' cpuset='17'/>\n    <vcpupin vcpu='6' cpuset='18'/>\n    <vcpupin vcpu='7' cpuset='19'/>\n    <vcpupin vcpu='8' cpuset='20'/>\n    <vcpupin vcpu='9' cpuset='21'/>\n    <vcpupin vcpu='10' cpuset='22'/>\n    <vcpupin vcpu='11' cpuset='23'/>\n    <emulatorpin cpuset='0-1'/>\n    <iothreadpin iothread='1' cpuset='0-1'/>\n    <iothreadpin iothread='2' cpuset='2-3'/>\n </cputune>\n")),(0,r.kt)("h4",{id:"update-cpu-section"},"Update cpu section"),(0,r.kt)("p",null,"Find the block ",(0,r.kt)("inlineCode",{parentName:"p"},"<cpu>...</cpu>")," and adapt like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<cpu mode='host-passthrough' check='none'>\n    <topology sockets='1' cores='6' threads='2'/>\n    <cache mode='passthrough'/>\n    <feature policy='require' name='topoext'/>\n    \x3c!-- add additional cpu features here--\x3e\n</cpu>\n")),(0,r.kt)("h2",{id:"wakeonlan"},"WakeonLan"),(0,r.kt)("p",null,"libvirt-wakenlan, a daemon which listens for wake on LAN packets and starts libvirt based virtual machines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/simoncadman/libvirt-wakeonlan"},"GitHub libvirt-wakeonlan"))),(0,r.kt)("h2",{id:"apparmor"},"Apparmor"),(0,r.kt)("p",null,"When you find some vm not sarting, check for dmesg or ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/syslog"),"."),(0,r.kt)("h3",{id:"libvirt-denied-capname-sysrawio"},"libvirt denied capname ",(0,r.kt)("inlineCode",{parentName:"h3"},"sysrawio")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},'[ 2592.816582] audit: type=1400 audit(1638036341.363:33): apparmor="DENIED" operation="capable" profile="libvirtd" pid=4545 comm="prio-rpc-worker" capability=17  capname="sys_rawio"\n[ 2593.030984] audit: type=1400 audit(1638036341.575:34): apparmor="DENIED" operation="capable" profile="libvirtd" pid=47974 comm="libvirt_parthel" capability=17  capname="sys_rawio"\n[ 2593.045133] audit: type=1400 audit(1638036341.591:35): apparmor="DENIED" operation="capable" profile="libvirtd" pid=47977 comm="libvirt_parthel" capability=17  capname="sys_rawio"\n')),(0,r.kt)("p",null,"Edit apparmor and add ",(0,r.kt)("inlineCode",{parentName:"p"},"capability sys_rawio,")," (the comma at the end too) and restart libvirt service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vi /etc/apparmor.d/abstractions/libvirt-qemu\nsudo systemctl restart libvirtd\n")))}d.isMDXComponent=!0},2750:function(e,t,n){t.Z=n.p+"assets/images/lstopo-cpu-ryzen3900-c6901e8dae8bf06aef70a1a0f164664b.png"},2356:function(e,t,n){t.Z=n.p+"assets/images/lstopo-pin-cpu-ryzen3900-24ea067bf50b290a9090480994b1ae37.png"},5529:function(e,t,n){t.Z=n.p+"assets/images/virtiofs-start-svc-728a7bd1aaca1d96f37bb239d62673de.png"}}]);