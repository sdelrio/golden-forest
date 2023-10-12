"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[9018],{5751:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var t=o(7462),i=(o(7294),o(3905)),a=(o(1839),o(614));const s="wipefs -a /dev/disk/by-id/virtio-abcdef0123456789-part{1,2,3,4,5}\nwipefs -a /dev/disk/by-id/virtio-abcdef0123456789\nzpool labelclear -f /dev/disk/by-id/virtio-abcdef0123456789-part{1,2,3,3,4,5}\nzpool labelclear -f /dev/disk/by-id/virtio-abcdef0123456789\nsgdisk --zap-all /dev/disk/by-id/virtio-abcdef0123456789\n",r='#!/bin/bash\nset -e\n\n# Preparation\n\nDISK=\'/dev/disk/by-id/virtio-abcdef0123456789\'\necho "[info] DISK=${DISK}"\n\nMIRROR=\n# If raid, put more disks here and update mirror env var\n#MIRROR=mirror\n\nROOT_ENCRYPT=false\nROOT_ENCRYPT_PASSWORD=changeme\n\nMNT=$(mktemp -d)\n#MNT=/mnt\n\n##Set swap size in GB, set to 1 if you don\u2019t want swap to take up too much space\nSWAPSIZE=2\necho "[info] SWAPSIZE=${SWAPSIZE}"\n\n## Set how much space should be left at the end of the disk, minimum 1GB\nRESERVE=1\necho "[info] RESERVER=${RESERVE}"\n\n## For git commit configs\nEMAIL=myuser@users.noreply.github.com\nNAME="myuser"\n\n## Git for system configuration\nGITREPO=https://github.com/ne9z/dotfiles-flake.git\nGITBRANCH=openzfs-guide\nMYHOST=exampleHost\n\n## Enable Nix Flakes functionality\nmkdir -p ~/.config/nix\necho "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf\n\n## Install programs needed for system installation\nif ! command -v git; then nix-env -f \'<nixpkgs>\' -iA git; fi\nif ! command -v jq;  then nix-env -f \'<nixpkgs>\' -iA jq; fi\nif ! command -v partprobe;  then nix-env -f \'<nixpkgs>\' -iA parted; fi\n\n# System Install\n\necho "[info] Partitioning the disks:"\n\npartition_disk () {\n local disk="${1}"\n blkdiscard -f "${disk}" || true\n echo "${disk} blkdiscarded"\n\n parted --script --align=optimal "${disk}" -- \\\n mklabel gpt \\\n mkpart EFI 2MiB 1GiB \\\n mkpart bpool 1GiB 5GiB \\\n mkpart rpool 5GiB -$((SWAPSIZE + RESERVE))GiB \\\n mkpart swap -$((SWAPSIZE + RESERVE))GiB -"${RESERVE}"Gi \\\n mkpart BIOS 1MiB 2MiB \\\n set 1 esp on \\\n set 5 bios_grub on \\\n set 5 legacy_boot on\n\n partprobe "${disk}"\n udevadm settle && echo "[OK] udevadm settle"\n\n parted ${disk} print\n}\n\npartition_disk_noswap () {\n local disk="${1}"\n blkdiscard -f "${disk}" || true\n echo "${disk} blkdiscarded"\n\n parted --script --align=optimal "${disk}" -- \\\n mklabel gpt \\\n mkpart EFI 2MiB 1GiB \\\n mkpart bpool 1GiB 5GiB \\\n mkpart rpool 5GiB -$((SWAPSIZE + RESERVE))GiB \\\n mkpart BIOS 1MiB 2MiB \\\n set 1 esp on \\\n set 4 bios_grub on \\\n set 4 legacy_boot on\n\n partprobe "${disk}"\n udevadm settle && echo "[OK] udevadm settle"\n\n parted ${disk} print\n}\n\nfor i in ${DISK}; do\n if [[ "$SWAPSIZE" = "0" ]]; then\n   partition_disk_noswap "${i}"\n else\n   partition_disk "${i}"\n fi\ndone\n\necho "[info] blkid -p ${DISK}-part{1,2,3,4,5} | grep zfs_member | grep --color LABEL"\nblkid -p ${DISK}-part{1,2,3,4,5} | grep zfs_member | grep --color LABEL || true\n\nif [[ "$SWAPSIZE" -ne "0" ]]; then\n  echo "[info] Setup encrypted swap"\n  for i in ${DISK}; do\n    cryptsetup open --type plain --key-file /dev/random "${i}"-part4 "${i##*/}"-part4\n    mkswap /dev/mapper/"${i##*/}"-part4\n    swapon /dev/mapper/"${i##*/}"-part4\n  done\nfi\n\necho "[info] creating boot pool"\n# -O atime=off not needed is set up later for the nixos/root\n# shellcheck disable=SC2046\nzpool create \\\n    -o compatibility=grub2 \\\n    -o ashift=12 \\\n    -o autotrim=on \\\n    -O acltype=posixacl \\\n    -O canmount=off \\\n    -O compression=lz4 \\\n    -O devices=off \\\n    -O normalization=formD \\\n    -O relatime=on \\\n    -O xattr=sa \\\n    -O mountpoint=/boot \\\n    -R "${MNT}" \\\n    bpool \\\n    ${MIRROR} \\\n    $(for i in ${DISK}; do\n       printf \'%s \' "${i}-part2";\n      done)\n\necho "[info] creating root pool"\n# shellcheck disable=SC2046\nzpool create \\\n    -o ashift=12 \\\n    -o autotrim=on \\\n    -R "${MNT}" \\\n    -O acltype=posixacl \\\n    -O canmount=off \\\n    -O compression=zstd \\\n    -O dnodesize=auto \\\n    -O normalization=formD \\\n    -O relatime=on \\\n    -O xattr=sa \\\n    -O mountpoint=/ \\\n    rpool \\\n    ${MIRROR} \\\n    $(for i in ${DISK}; do\n      printf \'%s \' "${i}-part3";\n     done)\n\necho "[info] created pools:"\nzpool list\n\nif [[ "$ROOT_ENCRYPT" = "true" ]]; then\n# Encrypted root system container. Note: Change the password\n  echo "[info] zfs create root encrypted"\n  echo $ROOT_ENCRYPT_PASSWORD | zfs create \\\n    -o canmount=off \\\n    -o mountpoint=none \\\n    -o encryption=on \\\n    -o keylocation=prompt \\\n    -o keyformat=passphrase \\\n  rpool/nixos\nelse\n# Unencrypted root system container\n  echo "[info] zfs create root unencrypt"\n  zfs create \\\n    -o canmount=off \\\n    -o mountpoint=none \\\n  rpool/nixos\nfi\n\necho "[info] Creating system dataset"\nzfs create -o mountpoint=legacy rpool/nixos/root\nmount -t zfs rpool/nixos/root "${MNT}"/\nzfs create -o mountpoint=legacy rpool/nixos/home\nmkdir "${MNT}"/home\nmount -t zfs rpool/nixos/home "${MNT}"/home\nzfs create -o mountpoint=legacy rpool/nixos/var\nzfs create -o mountpoint=legacy rpool/nixos/var/lib\nzfs create -o mountpoint=legacy rpool/nixos/var/log\nzfs create -o mountpoint=none bpool/nixos\nzfs create -o mountpoint=legacy bpool/nixos/root\nmkdir "${MNT}"/boot\nmount -t zfs bpool/nixos/root "${MNT}"/boot\nmkdir -p "${MNT}"/var/log\nmkdir -p "${MNT}"/var/lib\nmount -t zfs rpool/nixos/var/lib "${MNT}"/var/lib\nmount -t zfs rpool/nixos/var/log "${MNT}"/var/log\nzfs create -o mountpoint=legacy rpool/nixos/empty\nzfs snapshot rpool/nixos/empty@start\n\n\necho "[info] Format and mount ESP EFI"\nfor i in ${DISK}; do\n mkfs.vfat -n EFI "${i}"-part1\n mkdir -p "${MNT}"/boot/efis/"${i##*/}"-part1\n mount -t vfat -o iocharset=iso8859-1 "${i}"-part1 "${MNT}"/boot/efis/"${i##*/}"-part1\ndone\n\n# System Configuration\n\nmkdir -p "${MNT}"/etc\n\ngit clone --depth 1 --branch ${GITBRANCH} \\\n  ${GITREPO} "${MNT}"/etc/nixos\n\n\nrm -rf "${MNT}"/etc/nixos/.git\ngit -C "${MNT}"/etc/nixos/ init -b main\ngit -C "${MNT}"/etc/nixos/ add "${MNT}"/etc/nixos/\ngit -C "${MNT}"/etc/nixos config user.email "${EMAIL}"\ngit -C "${MNT}"/etc/nixos config user.name "${NAME}"\ngit -C "${MNT}"/etc/nixos commit -asm \'initial commit\'\n\necho "[info] Customize configg to your hardware"\n\nfor i in ${DISK}; do\n  sed -i \\\n  "s|/dev/disk/by-id/|${i%/*}/|" \\\n  "${MNT}"/etc/nixos/hosts/exampleHost/default.nix\n  break\ndone\n\ndiskNames=""\nfor i in ${DISK}; do\n  diskNames="${diskNames} \\"${i##*/}\\""\ndone\n\necho "[info] sed bootDevices_placeholder "${MNT}"/etc/nixos/hosts/exampleHost/default.nix"\nsed -i "s|\\"bootDevices_placeholder\\"|${diskNames}|g" \\\n  "${MNT}"/etc/nixos/hosts/exampleHost/default.nix\n\necho "[info] sed abcd1234 "${MNT}"/etc/nixos/hosts/exampleHost/default.nix"\nsed -i "s|\\"abcd1234\\"|\\"$(head -c4 /dev/urandom | od -A none -t x4| sed \'s| ||g\' || true)\\"|g" \\\n  "${MNT}"/etc/nixos/hosts/exampleHost/default.nix\n\necho "[info] sed x86_64-linux "${MNT}"/etc/nixos/flake.nix"\nsed -i "s|\\"x86_64-linux\\"|\\"$(uname -m || true)-linux\\"|g" \\\n  "${MNT}"/etc/nixos/flake.nix\n\necho "[info] Detect kernel modules needed for boot"\ncp "$(command -v nixos-generate-config || true)" ./nixos-generate-config\n\nchmod a+rw ./nixos-generate-config\n\n# shellcheck disable=SC2016\necho \'print STDOUT $initrdAvailableKernelModules\' >> ./nixos-generate-config\n\nkernelModules="$(./nixos-generate-config --show-hardware-config --no-filesystems | tail -n1 || true)"\n\necho "[info] kernelModules=$kernelModules"\n\nsed -i "s|\\"kernelModules_placeholder\\"|${kernelModules}|g" \\\n  "${MNT}"/etc/nixos/hosts/exampleHost/default.nix\n\necho "[question] Root Password"\nrootPwd=$(mkpasswd -m SHA-512)\n\nsed -i \\\n"s|rootHash_placeholder|${rootPwd}|" \\\n"${MNT}"/etc/nixos/configuration.nix\n\ngit -C "${MNT}"/etc/nixos commit -asm \'initial installation\'\n\necho "[info] Update flake lock file to track latest system version"\nnix flake update --commit-lock-file \\\n  "git+file://${MNT}/etc/nixos"\n\necho "[info] Install system and apply configuration"\nnixos-install \\\n--root "${MNT}" \\\n--no-root-passwd \\\n--flake "git+file://${MNT}/etc/nixos#${MYHOST}"\n\necho "[info] Umount and export pools"\numount -Rl "${MNT}"\nzpool export -a\n\n',l={},d="NixOS Root on ZFS",p={unversionedId:"OS/GNU-Linux/NixOS/install-zfs",id:"OS/GNU-Linux/NixOS/install-zfs",title:"NixOS Root on ZFS",description:"Requirements inside VM",source:"@site/docs/OS/GNU-Linux/NixOS/install-zfs.md",sourceDirName:"OS/GNU-Linux/NixOS",slug:"/OS/GNU-Linux/NixOS/install-zfs",permalink:"/docs/OS/GNU-Linux/NixOS/install-zfs",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/NixOS/install-zfs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installing",permalink:"/docs/OS/GNU-Linux/NixOS/install-system"},next:{title:"NixOs configs and tutorials",permalink:"/docs/OS/GNU-Linux/NixOS/nix-configs"}},c={},u=[{value:"Requirements inside VM",id:"requirements-inside-vm",level:2},{value:"Check the disk with id",id:"check-the-disk-with-id",level:3},{value:"Sample partition schema",id:"sample-partition-schema",level:2},{value:"Without swap:",id:"without-swap",level:3},{value:"With swap",id:"with-swap",level:3},{value:"Destroy partitions",id:"destroy-partitions",level:2},{value:"View block IDs for zfs_members",id:"view-block-ids-for-zfs_members",level:3},{value:"Wipe script",id:"wipe-script",level:3},{value:"Install",id:"install",level:2},{value:"Install script collected from NixOS Root on ZFS",id:"install-script-collected-from-nixos-root-on-zfs",level:3},{value:"Check zpools",id:"check-zpools",level:3},{value:"Console and locale for Spanish",id:"console-and-locale-for-spanish",level:3},{value:"References",id:"references",level:2},{value:"Default configuration",id:"default-configuration",level:2},{value:"Configuration.nix",id:"configurationnix",level:3},{value:"Hardware generator",id:"hardware-generator",level:3}],m={toc:u},f="wrapper";function h(e){let{components:n,...o}=e;return(0,i.kt)(f,(0,t.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nixos-root-on-zfs"},"NixOS Root on ZFS"),(0,i.kt)("h2",{id:"requirements-inside-vm"},"Requirements inside VM"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure the disk has some serial number so we created the ",(0,i.kt)("inlineCode",{parentName:"li"},"disk/by-id")," device. In virt manager you can do this into VirtIO Disk -> advanced options -> Serial"),(0,i.kt)("li",{parentName:"ul"},"Make sure you UEFI bios enabled (you will need to download OVMF). You can add it through xml configuration if your virt manager doesn't support it:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'  <os>\n    <type arch="x86_64" machine="pc-q35-5.0">hvm</type>\n    <loader readonly="yes" type="pflash">/usr/share/OVMF/OVMF_CODE.fd</loader>\n    <nvram>/var/lib/libvirt/qemu/nvram/NixOsMinimal_VARS.fd</nvram>\n  </os>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure the disk doesn't already have ",(0,i.kt)("inlineCode",{parentName:"li"},"rpool")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"bpool")," zpools.")),(0,i.kt)("h3",{id:"check-the-disk-with-id"},"Check the disk with id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[root@nixos:~]# find /dev/disk/by-id/\n/dev/disk/by-id/\n/dev/disk/by-id/ata-QEMU_DVD-ROM_QM00001\n/dev/disk/by-id/virtio-abcdef0123456789\n")),(0,i.kt)("h2",{id:"sample-partition-schema"},"Sample partition schema"),(0,i.kt)("h3",{id:"without-swap"},"Without swap:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Number  Start   End     Size    File system  Name   Flags\n 4      1049kB  2097kB  1049kB               BIOS   bios_grub, legacy_boot\n 1      2097kB  1074MB  1072MB  fat32        EFI    boot, esp\n 2      1074MB  5369MB  4295MB               bpool\n 3      5369MB  20.4GB  15.0GB               rpool\n")),(0,i.kt)("h3",{id:"with-swap"},"With swap"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Number  Start   End     Size    File system  Name   Flags\n 5      1049kB  2097kB  1049kB  ext4         BIOS   bios_grub, legacy_boot\n 1      2097kB  1074MB  1072MB  fat32        EFI    boot, esp\n 2      1074MB  5369MB  4295MB               bpool\n 3      5369MB  18.3GB  12.9GB               rpool\n 4      18.3GB  20.4GB  2147MB               swap\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://chrisdown.name/2018/01/02/in-defence-of-swap.html"},"In defense of swap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://haydenjames.io/linux-performance-almost-always-add-swap-space/"},"Linuxx Performance: Almost always add swap space"))),(0,i.kt)("h2",{id:"destroy-partitions"},"Destroy partitions"),(0,i.kt)("p",null,"In case you have a previous install with zfs labels, and IDs, is recomended to destroy everything or you will messages like that zfs is used on some machine IDs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wipefs -a /dev/disk/by-id/virtio-abcdef0123456789-part{1,2,3,4,5}\nwipefs -a /dev/disk/by-id/virtio-abcdef0123456789\nzpool labelclear -f /dev/disk/by-id/virtio-abcdef0123456789\nsgdisk --zap-all /dev/disk/by-id/virtio-abcdef0123456789\n")),(0,i.kt)("h3",{id:"view-block-ids-for-zfs_members"},"View block IDs for zfs_members"),(0,i.kt)("p",null,"Check no duplicated ",(0,i.kt)("inlineCode",{parentName:"p"},"zfs_member")," with same ",(0,i.kt)("inlineCode",{parentName:"p"},"LABEL")," or will have problems on boot with grub and zfs import."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"blkid -p /dev/vda{1,2,3,4,5} | grep --color zfs_member\n")),(0,i.kt)("h3",{id:"wipe-script"},"Wipe script"),(0,i.kt)(a.Z,{language:"bash",mdxType:"CodeBlock"},s),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("h3",{id:"install-script-collected-from-nixos-root-on-zfs"},"Install script collected from ",(0,i.kt)("a",{parentName:"h3",href:"https://openzfs.github.io/openzfs-docs/Getting%20Started/NixOS/Root%20on%20ZFS.html"},"NixOS Root on ZFS")),(0,i.kt)(a.Z,{language:"bash",mdxType:"CodeBlock"},r),(0,i.kt)("h3",{id:"check-zpools"},"Check zpools"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[root@nixos:~]# zfs get mounted,canmount,mountpoint rpool\nNAME   PROPERTY    VALUE       SOURCE\nrpool  mounted     no          -\nrpool  canmount    off         local\nrpool  mountpoint  /           local\n\n[root@nixos:~]# zfs get mounted,canmount,mountpoint bpool\nNAME   PROPERTY    VALUE       SOURCE\nbpool  mounted     no          -\nbpool  canmount    off         local\nbpool  mountpoint  /boot       local\n")),(0,i.kt)("h3",{id:"console-and-locale-for-spanish"},"Console and locale for Spanish"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskel"},'  console = pkg.lib.mkforce {\n    keyMap = "es";\n    font = "Lat2-Terminus16";\n    useXkbConfig = true;\n  };\n\n  i18n.defaultLocale = "es_ES.UTF-8";\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"configs: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mcdonc/p51-thinkpad-nixos/tree/zfsvid"},"https://github.com/mcdonc/p51-thinkpad-nixos/tree/zfsvid"))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Official ",(0,i.kt)("a",{parentName:"li",href:"https://openzfs.github.io/openzfs-docs/Getting%20Started/NixOS/Root%20on%20ZFS.html"},"NixOS Root on ZFS"),"."),(0,i.kt)("li",{parentName:"ul"},"Install videos",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"NixOS 1: ZFS Encrypted Root on Thinkpad P51",(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/CboOUrkIZ2k?si=9lp1FIQHCWXQPDcv",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))))),(0,i.kt)("h2",{id:"default-configuration"},"Default configuration"),(0,i.kt)("h3",{id:"configurationnix"},"Configuration.nix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'[root@nixos:/mnt/sergio/etc/nixos]# cat configuration.nix\n# Edit this configuration file to define what should be installed on\n# your system.  Help is available in the configuration.nix(5) man page\n# and in the NixOS manual (accessible by running `nixos-help`).\n\n{ config, pkgs, ... }:\n\n{\n  imports =\n    [ # Include the results of the hardware scan.\n      ./hardware-configuration.nix\n    ];\n\n  # Use the GRUB 2 boot loader.\n  boot.loader.grub.enable = true;\n  boot.kernelPackages = config.boot.zfs.package.latestCompatibleLinuxPackages;\n  boot.zfs.devNodes = "/dev/disk/by-partuuid";\n  boot.loader.grub.efiSupport = true;\n  boot.loader.grub.efiInstallAsRemovable = true;\n  boot.loader.efi.efiSysMountPoint = "/boot/efi";\n  # Define on which hard drive you want to install Grub.\n  # boot.loader.grub.device = "/dev/sda"; # or "nodev" for efi only\n  boot.loader.grub.device = "nodev"; # or "nodev" for efi only\n\n  boot.supportedFilesystems = [ "zfs" ];\n  boot.zfs.requestEncryptionCredentials = true;\n\n  network.hostId = "nixos-46f14301" # Define unique id, sample: head -c 8 /etc/machine-id\n  # Used to determine which machien last imported the zfs device\n\n  networking.hostName = "nixos"; # Define your hostname.\n  # Pick only one of the below networking options.\n  # networking.wireless.enable = true;  # Enables wireless support via wpa_supplicant.\n  networking.networkmanager.enable = true;  # Easiest to use and most distros use this by default.\n\n  # Set your time zone.\n  # time.timeZone = "Europe/Amsterdam";\n  time.timeZone = "Europe/Madrid";\n\n  # Configure network proxy if necessary\n  # networking.proxy.default = "http://user:password@proxy:port/";\n  # networking.proxy.noProxy = "127.0.0.1,localhost,internal.domain";\n\n  # Select internationalisation properties.\n  # i18n.defaultLocale = "en_US.UTF-8";\n  i18n.defaultLocale = "en_ES.UTF-8";\n  console = {\n    font = "Lat2-Terminus16";\n    keyMap = "es";\n    useXkbConfig = true; # use xkbOptions in tty.\n  };\n\n  # Enable the X11 windowing system.\n  services.xserver.enable = true;\n\n  services.zfs.autoScrub.enable = true;\n  services.zfs.trim.enable = false;\n  boot.kernelParams = [\n    "nohibernate"\n    "zfs.zfs_arc_max=12884901888"\n    "mitigations=off"\n  ];\n\n  # Enable the GNOME Desktop Environment.\n  services.xserver.displayManager.gdm.enable = true;\n  services.xserver.desktopManager.gnome.enable = true;\n  \n\n  # Configure keymap in X11\n  services.xserver.layout = "es";\n  # services.xserver.xkbOptions = "eurosign:e,caps:escape";\n\n  # Enable CUPS to print documents.\n  # services.printing.enable = true;\n\n  # Enable sound.\n  # sound.enable = true;\n  # hardware.pulseaudio.enable = true;\n\n  # Enable touchpad support (enabled default in most desktopManager).\n  # services.xserver.libinput.enable = true;\n\n  # Define a user account. Don\'t forget to set a password with \u2018passwd\u2019.\n  users.users.sdelrio = {\n    isNormalUser = true;\n    initialPassword= "sdelrio";\n    extraGroups = [ "wheel" ]; # Enable \u2018sudo\u2019 for the user.\n    packages = with pkgs; [\n  #    firefox\n      tree\n    ];\n  };\n\n  # List packages installed in system profile. To search, run:\n  # $ nix search wget\n  environment.systemPackages = with pkgs; [\n    vim # Do not forget to add an editor to edit configuration.nix! The Nano editor is also installed by default.\n    wget\n  ];\n\n  # Some programs need SUID wrappers, can be configured further or are\n  # started in user sessions.\n  # programs.mtr.enable = true;\n  # programs.gnupg.agent = {\n  #   enable = true;\n  #   enableSSHSupport = true;\n  # };\n\n  # List services that you want to enable:\n\n  # Enable the OpenSSH daemon.\n  # services.openssh.enable = true;\n\n  # Open ports in the firewall.\n  # networking.firewall.allowedTCPPorts = [ ... ];\n  # networking.firewall.allowedUDPPorts = [ ... ];\n  # Or disable the firewall altogether.\n  networking.firewall.enable = false;\n\n  # Copy the NixOS configuration file and link it from the resulting system\n  # (/run/current-system/configuration.nix). This is useful in case you\n  # accidentally delete configuration.nix.\n  # system.copySystemConfiguration = true;\n\n  # This value determines the NixOS release from which the default\n  # settings for stateful data, like file locations and database versions\n  # on your system were taken. It\'s perfectly fine and recommended to leave\n  # this value at the release version of the first install of this system.\n  # Before changing this value read the documentation for this option\n  # (e.g. man configuration.nix or on https://nixos.org/nixos/options.html).\n  system.stateVersion = "23.05"; # Did you read the comment?\n\n}\n\n')),(0,i.kt)("h3",{id:"hardware-generator"},"Hardware generator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'[root@nixos:/mnt/sergio/etc/nixos]# cat hardware-configuration.nix \n# Do not modify this file!  It was generated by \u2018nixos-generate-config\u2019\n# and may be overwritten by future invocations.  Please make changes\n# to /etc/nixos/configuration.nix instead.\n{ config, lib, pkgs, modulesPath, ... }:\n\n{\n  imports =\n    [ (modulesPath + "/profiles/qemu-guest.nix")\n    ];\n\n  boot.initrd.availableKernelModules = [ "ahci" "xhci_pci" "virtio_pci" "sr_mod" "virtio_blk" ];\n  boot.initrd.kernelModules = [ ];\n  boot.kernelModules = [ "kvm-amd" ];\n  boot.extraModulePackages = [ ];\n\n  swapDevices = [ ];\n\n  # Enables DHCP on each ethernet and wireless interface. In case of scripted networking\n  # (the default) this is the recommended approach. When using systemd-networkd it\'s\n  # still possible to use this option, but it\'s recommended to use it in conjunction\n  # with explicit per-interface declarations with `networking.interfaces.<interface>.useDHCP`.\n  networking.useDHCP = lib.mkDefault true;\n  # networking.interfaces.enp1s0.useDHCP = lib.mkDefault true;\n\n  nixpkgs.hostPlatform = lib.mkDefault "x86_64-linux";\n}\n')))}h.isMDXComponent=!0}}]);