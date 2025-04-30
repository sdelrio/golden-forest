---
date: 20211106
author: sdelrio
tags:
- amd
- radeon
- OpenCL
- ROCm
---

# ROCm OpenCL

Some programs like DarkTable and some ML apps will use that for hardware acceleration.


## Install

1. Ensure system is up to date.

```
sudo apt update

sudo apt dist-upgrade

sudo apt install libnuma-dev

sudo reboot
```

2. Add the ROCm apt repository.

```bash
wget -q -O - http://repo.radeon.com/rocm/apt/debian/rocm.gpg.key | sudo apt-key add -

echo 'deb [arch=amd64] http://repo.radeon.com/rocm/apt/debian/ xenial main' | sudo tee /etc/apt/sources.list.d/rocm.list                                                        
cat /etc/apt/sources.list.d/rocm.list
```
3. Install ROCm meta-package

```bash
apt install rocm-dkms
```

4. Restart the system

5. Verify installation


```bash
/opt/rocm/bin/rocminfo
/opt/rocm/opencl/bin/clinfo
```

6. Add ROCm binaries to your path

```bash
echo 'export PATH=$PATH:/opt/rocm/bin:/opt/rocm/rocprofiler/bin:/opt/rocm/opencl/bin' | sudo tee -a /etc/profile.d/rocm.sh
```

## Uninstall

```bash
sudo apt autoremove rocm-opencl rocm-dkms rocm-dev rocm-utils && sudo reboot
```

## Usefull commands

* `clinfo`
```bash
$ clinfo | grep -i platform
Number of platforms:				 2
  Platform Profile:				 FULL_PROFILE
  Platform Version:				 OpenCL 1.2 pocl 1.4, None+Asserts, LLVM 9.0.1, RELOC, SLEEF, DISTRO, POCL_DEBUG
  Platform Name:				 Portable Computing Language
  Platform Vendor:				 The pocl project
  Platform Extensions:				 cl_khr_icd
  Platform Profile:				 FULL_PROFILE
  Platform Version:				 OpenCL 2.0 AMD-APP (3182.0)
  Platform Name:				 AMD Accelerated Parallel Processing
  Platform Vendor:				 Advanced Micro Devices, Inc.
  Platform Extensions:				 cl_khr_icd cl_amd_event_callback
  Platform Name:				 Portable Computing Language
  Platform ID:					 0x7f4c6cb43020
  Platform Name:				 AMD Accelerated Parallel Processing
  Preferred platform atomic alignment:		 0
  Platform ID:					 0x7f4c66e8acd0
```
If manual installed/compiled it should be on `/opt`:

* `/opt/rocm-3.1.0/opencl/bin/x86_64/clinfo`

## Issues

The version 4.3.0 had a problem with linux mint 20 and amd drivers so v3.7.0 was used until bug was fixed

## References

* [Youtube: Install ROCm 3.0 and tensorflow on Ubuntu - AMD RX 580](https://www.youtube.com/watch?v=fkSRkAoMS4g)
* [http://ml-ci.amd.com:21096/job/tensorflow-rocm-nightly/274/](http://ml-ci.amd.com:21096/job/tensorflow-rocm-nightly/274/) :red_circle:
* [https://askubuntu.com/questions/1223032/install-opencl-2-0-driver-for-amd-gpu-on-ubuntu-19-10-whats-my-options](https://askubuntu.com/questions/1223032/install-opencl-2-0-driver-for-amd-gpu-on-ubuntu-19-10-whats-my-options)
* [ROCm official documentation](https://rocmdocs.amd.com/en/latest/Installation_Guide/Installation-Guide.html#ubuntu)

