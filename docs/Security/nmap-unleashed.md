# nmapUnleashed (nu) - Modern Nmap Wrapper

**nmapUnleashed (nu)** is a modern CLI wrapper for [Nmap](https://nmap.org/), designed to make network scanning more comfortable and effective. It provides all familiar Nmap commands with extended features such as **multithreading**, easy scan management, and improved overview.

---

## Quick Usage and Examples

nmapUnleashed is intended to feel familiar to Nmap users while adding scan management and productivity features.

After nmapUnleashed finishes, a `dashboard.txt` file is generated containing a complete overview of all performed scans and their statuses.
Also, all scan results are merged into `scans.xml` and `scans.html`, for centralized inspection and post-processing.

_Config file location: `~/.config/nmapUnleashed/nmapUnleashed.conf`_

### Basic Scan
```bash
# Classic Nmap scan of all ports with version detection.
nu -d -p- -A scanme.nmap.org
```

### Powerful target loading and custom multithreading
```bash
# Scan multiple targets specified as IPs, CIDRs, or files in 8 parallel scans and only create merged scan results (scans.xml, scans.html).
nu -th 8 -p- -A scanme.nmap.org 192.168.178.0/24 targets.txt -os
```

### Using predefined parameter sets / presets
```bash
# Define parameter sets / presets, in config, and load any set with a single command to start scans faster.
# Example: {'basic': '-d -p- -A', 'basic-offline': '-d -p- -A -Pn'}
nu -ps basic scanme.nmap.org
```

### Parallel scans with auto-abort and bandwidth usage warning
```bash
# 8 threads, auto-abort after 120 min, warn if network >1000 KBps, keep files for non-online targets.
nu -th 8 -kt 120 -nwr 1000 -nwt 1000 -ko -p- -sV scanme.nmap.org
```

### Scan output and files configuration
```bash
# Keep scan files for non-online targets, store all scans in the current folder, remove specified file types after scan.
nu -ko -nf -rf "xml;html;gnamp" -p- -A fd12:3456:789a::/28
```

### Define targets and networks, exclude specific targets and set individual nmap parameters
```bash
# Specify Nmap parameters and targets, set custom parameters for a target network, and exclude one target of the specified network.
nu -p- -A 10.10.2.1 10.10.2.2 "10.10.1.0/24=--top-ports 100 -A" -ex 10.10.1.5
```

---

## Key nmapUnleashed Features

- **Multithreading** — Run scans in parallel with `-th` flag
- **Auto-abort** — Set timeout limits with `-kt` (e.g., `-kt 120` = 120 minutes)
- **Bandwidth monitoring** — Warn on excessive network usage with `-nwr` / `-nwt`
- **Keep files** — Preserve scan results with `-ko` for non-online targets
- **Presets** — Load predefined parameter sets with `-ps`
- **Target files** — Load targets from text files or inline specifications
- **Dashboard** — Generated `dashboard.txt` with scan overview
- **Merged results** — `scans.xml` and `scans.html` for centralized inspection

---

## Installation and Requirements

### Required Packages
```bash
sudo apt install -y nmap xsltproc grep
```

### Quick Install using pipx
```bash
pipx ensurepath
pipx install git+https://github.com/sharkeonix/nmap-unleashed.git
```

### Offline installation:
```bash
cd ./nmap-unleashed
pipx install
```
