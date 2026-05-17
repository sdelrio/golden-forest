---
title: "Advanced Debian/Ubuntu Hardening Strategy (2026)"
description: "Comprehensive guide to securing Debian and Ubuntu servers with SSH hardening, 2FA/MFA, kernel sysctl tuning, file integrity monitoring, rootkit detection, and automated security updates."
tags: [security, linux, debian, ubuntu, hardening, homelab]
sidebar_position: 10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';

# Advanced Debian/Ubuntu Hardening Strategy (2026)

Security begins at the primary entry points. For Debian and Ubuntu systems, this requires moving beyond default configurations to a "Zero Trust" local posture. This guide synthesizes best practices from industry-standard frameworks including CIS Benchmarks, the [konstruktoid/hardening](https://github.com/konstruktoid/hardening) project, and the comprehensive [imthenachoman/How-To-Secure-A-Linux-Server](https://github.com/imthenachoman/How-To-Secure-A-Linux-Server) reference.

:::info
This guide is designed to be followed sequentially. Each section builds upon the previous one. Read the entire guide before implementing changes on a production system.
:::

## 1. Core Foundational Hardening

### SSH Server Access

SSH is the most targeted service on any Linux server. Hardening it is non-negotiable:

* **Public Key Only:** Disable password-based authentication (`PasswordAuthentication no`).
* **Algorithm Strictness:** Use only modern, secure host keys (Ed25519) and secure Ciphers/MACs.
* **No Root Login:** Force administrative access through a standard user with `sudo` privileges to ensure an audit trail.
* **Rate Limiting:** Use tools like `Fail2Ban` or `CrowdSec` to block IPs after multiple failed attempts.
* **SSH Access Groups:** Use `AllowGroups` to restrict SSH access to specific UNIX groups only.
* **2FA/MFA:** Add a second authentication factor using `libpam-google-authenticator` for TOTP-based codes.
* **Connection Limits:** Set `MaxAuthTries`, `MaxSessions`, `LoginGraceTime`, and `ClientAliveInterval` to prevent abuse.
* **Diffie-Hellman Moduli:** Remove all DH moduli shorter than 3072 bits from `/etc/ssh/moduli`.

### 1.1 SSH Access Control Groups

Create a dedicated group to control who can SSH into the server:

<Steps>
 <Step title="Create the SSH group">
  ```bash
  sudo groupadd sshusers
  ```
 </Step>
 <Step title="Add authorized users">
  ```bash
  sudo usermod -a -G sshusers yourusername
  ```
 </Step>
 <Step title="Restrict SSH to the group">
  Add this line to `/etc/ssh/sshd_config`:
  ```
  AllowGroups sshusers
  ```
 </Step>
</Steps>

:::tip
Keep a second terminal session open while testing SSH configuration changes. If you lock yourself out, you'll still have an active session to fix the issue.
:::

### 1.2 SSH 2FA/MFA with Google Authenticator

Add TOTP-based two-factor authentication for an extra layer of security:

<Steps>
 <Step title="Install the PAM module">
  ```bash
  sudo apt install libpam-google-authenticator -y
  ```
 </Step>
 <Step title="Generate TOTP keys per user">
  Run as each user who needs 2FA (NOT as root):
  ```bash
  google-authenticator
  ```
  Answer `y` to all prompts and **save the emergency scratch codes**.
 </Step>
 <Step title="Configure PAM for SSH">
  ```bash
  echo "auth required pam_google_authenticator.so nullok" | sudo tee -a /etc/pam.d/sshd
  ```
 </Step>
 <Step title="Enable challenge-response authentication">
  ```bash
  sudo sed -i 's/^ChallengeResponseAuthentication no/ChallengeResponseAuthentication yes/' /etc/ssh/sshd_config
  sudo systemctl restart sshd
  ```
 </Step>
</Steps>

:::warning
With the `nullok` option, users who haven't set up 2FA can still log in. Remove `nullok` once all users have configured their tokens.
:::

### 1.3 SSH Advanced Hardening

**Remove weak Diffie-Hellman moduli:**

```bash
sudo cp /etc/ssh/moduli /etc/ssh/moduli.backup
sudo awk '$5 >= 3071' /etc/ssh/moduli > /etc/ssh/moduli.tmp && sudo mv /etc/ssh/moduli.tmp /etc/ssh/moduli
```

**Recommended `/etc/ssh/sshd_config` additions:**

```
# Verbose logging for audit trail
LogLevel VERBOSE

# Connection limits
MaxAuthTries 3
MaxSessions 2
LoginGraceTime 30
ClientAliveInterval 300
ClientAliveCountMax 2

# Disable unnecessary features
X11Forwarding no
AllowTcpForwarding no
PermitTunnel no
AllowAgentForwarding no
PermitUserEnvironment no
Compression no
TCPKeepAlive no
```

:::info
For OpenSSH 9.1 and later, add `RequiredRSASize 3072` to enforce a minimum RSA key size of 3072 bits.
:::

### Firewall & Network

* **Default Deny:** Implement a strict "deny all" inbound and outbound policy, explicitly allowing only necessary ports (e.g., 80/443 for web, custom SSH port).
* **Egress Filtering:** Prevent "phone home" malware by restricting which external IPs/ports the server can initiate connections to.
* **Intrusion Detection:** Deploy `PSAD` to monitor iptables logs for port scans and suspicious activity.

## 2. System Hardening & Updates

### 2.1 NTP/Time Synchronization

Accurate time is critical for security protocols, log correlation, and TOTP token validation:

<Tabs>
 <TabItem value="debian12" label="Debian 12 and earlier">
  ```bash
  sudo apt install ntp -y
  sudo systemctl enable --now ntp
  ```
 </TabItem>
 <TabItem value="debian13" label="Debian 13+ (Trixie)">
  ```bash
  sudo timedatectl set-ntp true
  sudo systemctl enable --now systemd-timesyncd
  ```
  The classic `ntp` package has been removed in Debian 13. `systemd-timesyncd` is pre-installed and sufficient for client-only NTP synchronization.
 </TabItem>
</Tabs>

### 2.2 Automatic Security Updates

Never miss a critical security patch:

<Steps>
 <Step title="Install unattended-upgrades">
  ```bash
  sudo apt install unattended-upgrades apt-listchanges -y
  sudo dpkg-reconfigure -plow unattended-upgrades
  ```
 </Step>
 <Step title="Configure in `/etc/apt/apt.conf.d/50unattended-upgrades`">
  ```
  Unattended-Upgrade::Allowed-Origins {
      "${distro_id}:${distro_codename}";
      "${distro_id}:${distro_codename}-security";
      "${distro_id}ESMApps:${distro_codename}-apps-security";
      "${distro_id}ESM:${distro_codename}-infra-security";
  };
  Unattended-Upgrade::Automatic-Reboot "true";
  Unattended-Upgrade::Automatic-Reboot-Time "02:00";
  Unattended-Upgrade::Mail "admin@example.com";
  ```
 </Step>
</Steps>

### 2.3 Password Quality Enforcement

Force strong passwords for all local accounts:

<Steps>
 <Step title="Install libpam-pwquality">
  ```bash
  sudo apt install libpam-pwquality -y
  ```
 </Step>
 <Step title="Configure in `/etc/security/pwquality.conf`">
  ```
  minlen = 14
  minclass = 4
  maxrepeat = 3
  maxsequence = 4
  dictcheck = 1
  usercheck = 1
  enforce_for_root
  ```
 </Step>
</Steps>

### 2.4 Limiting su Access

Restrict who can use `su` to switch users, separate from `sudo` privileges:

```bash
# Create a group for su access
sudo groupadd suusers
sudo usermod -a -G suusers yourusername

# Restrict /bin/su to the group only
sudo dpkg-statoverride --update --add root suusers 4750 /bin/su
```

## 3. Kernel & Runtime Hardening

### 3.1 Kernel sysctl Hardening

Add to `/etc/sysctl.d/99-hardening.conf`:

```
# Network hardening - disable redirects
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv6.conf.all.accept_redirects = 0
net.ipv6.conf.default.accept_redirects = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0

# Disable source routing
net.ipv4.conf.all.accept_source_route = 0
net.ipv6.conf.all.accept_source_route = 0

# Log martian packets
net.ipv4.conf.all.log_martians = 1
net.ipv4.conf.default.log_martians = 1

# IP spoofing protection (reverse path filtering)
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.rp_filter = 1

# Disable IP forwarding (unless acting as router)
net.ipv4.ip_forward = 0
net.ipv6.conf.all.forwarding = 0

# SYN flood protection
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_syn_backlog = 2048
net.ipv4.tcp_synack_retries = 2

# Restrict ptrace (prevent process debugging by other users)
kernel.yama.ptrace_scope = 1

# Restrict kernel pointer exposure
kernel.kptr_restrict = 2
kernel.dmesg_restrict = 1

# Disable core dumps for setuid programs
fs.suid_dumpable = 0
```

Apply with:

```bash
sudo sysctl --system
```

### 3.2 Securing /proc

Hide process information from non-owner users:

<Steps>
 <Step title="Remount /proc with hidepid">
  ```bash
  sudo mount -o remount,hidepid=2 /proc
  ```
 </Step>
 <Step title="Make it persistent in `/etc/fstab`">
  ```
  proc /proc proc defaults,hidepid=2 0 0
  ```
 </Step>
</Steps>

Levels: `0` = everyone sees all processes, `1` = users see only their own processes, `2` = `/proc/&lt;pid&gt;` directories are hidden from other users entirely.

## 4. Distributed Security: Remote Logging & Auditing

In a modern production environment, a server should never be the sole keeper of its own logs.

* **Immutable Audit Trails:** Use `rsyslog` or `systemd-journal-remote` to stream logs to a dedicated, hardened logging server.
* **The "Black Box" Principle:** By forwarding `auditd` events via the `audisp-remote` plugin, you ensure that even if an attacker gains root and wipes the local disk, the record of their actions exists safely off-host.
* **Append-Only Storage:** Configure the remote collector so that received logs cannot be modified or deleted by the source server.

### 4.1 File Integrity Monitoring with AIDE

Detect unauthorized file changes to critical system binaries and configuration files:

<Steps>
 <Step title="Install AIDE">
  ```bash
  sudo apt install aide -y
  ```
 </Step>
 <Step title="Initialize the database">
  This takes several minutes as it scans the entire filesystem:
  ```bash
  sudo aideinit
  sudo mv /var/lib/aide/aide.db.new /var/lib/aide/aide.db
  ```
 </Step>
 <Step title="Run an integrity check">
  ```bash
  sudo aide --check
  ```
 </Step>
 <Step title="Update database after known changes">
  ```bash
  sudo aide --update
  sudo mv /var/lib/aide/aide.db.new /var/lib/aide/aide.db
  ```
 </Step>
</Steps>

Set up a daily cron job in `/etc/cron.daily/aide`:

```bash
#!/bin/bash
/usr/bin/aide --check | mail -s "AIDE Report $(hostname)" admin@example.com
```

### 4.2 Rootkit Detection

Install and schedule rootkit scanners to detect hidden malware:

<Steps>
 <Step title="Install rkhunter and chkrootkit">
  ```bash
  sudo apt install rkhunter chkrootkit -y
  ```
 </Step>
 <Step title="Update rkhunter database">
  ```bash
  sudo rkhunter --update
  sudo rkhunter --propupd
  ```
 </Step>
 <Step title="Run manual checks">
  ```bash
  sudo rkhunter --check
  sudo chkrootkit
  ```
 </Step>
 <Step title="Schedule weekly scans">
  Create `/etc/cron.weekly/rkhunter`:
  ```bash
  #!/bin/bash
  rkhunter --check --skip-keypress --report-mode | mail -s "rkhunter Report $(hostname)" admin@example.com
  ```
 </Step>
</Steps>

### 4.3 Intrusion Detection Systems

**PSAD** - Port scan detection from iptables logs:

```bash
sudo apt install psad -y
sudo psad -S  # Show status
```

**OSSEC** - Host-based intrusion detection system:

```bash
sudo apt install ossec-hids -y
# Configure in /var/ossec/etc/ossec.conf
sudo systemctl restart ossec
```

:::tip
PSAD works best when combined with a properly configured UFW/iptables firewall that logs dropped packets. Enable logging with `sudo ufw logging medium`.
:::

## 5. Secure "Dev Box" & Container Environments

To replicate a "GitHub Codespaces" experience securely, use open-source tools like **Coder** or **DevPod** with a focus on isolation.

### Container Hardening Strategy

* **Rootless Execution:** Run the container engine (Docker/Podman) in rootless mode. A container breakout will only land the attacker in an unprivileged user space on the host.
* **User Namespaces:** Isolate the container's root user from the host's root user.
* **Minimalist Base Images:** Use Debian-Slim images to reduce the internal attack surface.

## 6. Automation: The Konstruktoid Hardening Framework

The [konstruktoid/hardening](https://github.com/konstruktoid/hardening) project is an industry-standard script used to align systems with **CIS (Center for Internet Security) Benchmarks**.

### Key Automated Features

* **Kernel Lockdown:** Sets `kernel.modules_disabled=1` after boot to prevent the loading of malicious kernel modules.
* **FileSystem Hardening:** Automatically mounts `/tmp`, `/dev/shm`, and `/home` with `nodev`, `nosuid`, and `noexec` flags.
* **Compiler Restriction:** Restricts access to `gcc`, `make`, and `rustc` to prevent attackers from building exploit payloads.
* **Systemd Sandboxing:** Applies restrictive systemd overrides to common services.
* **Legacy Protocol Disabling:** Systematically removes support for DCCP, SCTP, RDS, and TIPC protocols.

## 7. Implementation Scripts

### 7.1 SSH & Firewall Hardening

```bash
#!/bin/bash
# Basic Hardening Script for Debian/Ubuntu

# 1. Update System
sudo apt update && sudo apt upgrade -y

# 2. Hardening SSH
echo "Configuring SSH..."
sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin no/' /etc/ssh/sshd_config
sudo sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
sudo sed -i 's/X11Forwarding yes/X11Forwarding no/' /etc/ssh/sshd_config
sudo systemctl restart ssh

# 3. Configure Firewall (UFW)
echo "Configuring Firewall..."
sudo apt install ufw -y
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp  # Change this if using a custom port
sudo ufw --force enable

echo "Base hardening complete."
```

### 7.2 Remote Logging & Auditd

```bash
#!/bin/bash
# Remote Logging & Auditd Hardening Script

# 1. Install Remote Logging Daemon
echo "Installing rsyslog..."
sudo apt install rsyslog -y

# 2. Configure Remote Logging
# Replace [IP_ADDRESS] with your log server IP
echo "Configuring remote logging..."
sudo sed -i '/^#module(load="imuxsock")$/a module(load="imudp")\nmodule(load="imtcp")\ninput(type="imudp" port="514")\ninput(type="imtcp" port="514")\n*.* @[IP_ADDRESS]:514' /etc/rsyslog.conf

# 3. Configure Auditd for Remote Forwarding
echo "Configuring auditd..."
sudo apt install auditd audispd-plugins -y

# Enable remote plugin
sudo sed -i 's/active = no/active = yes/' /etc/audisp/plugins.d/remote.conf

# Configure remote server (replace with your log server IP)
sudo sed -i 's/remote_server = [IP_ADDRESS]/remote_server = [IP_ADDRESS]/' /etc/audisp/plugins.d/remote.conf

# 4. Restart Services
sudo systemctl restart rsyslog
sudo systemctl restart auditd

echo "Remote logging and auditd configured."
```

### 7.3 Coder (Secure Dev Environment)

```bash
# Install Coder on Debian/Ubuntu
curl -fsSL https://coder.com/install.sh | sh

# Start Coder
coder run

# Access Coder UI at http://localhost:8080
```

### 7.4 Hardened Dev Box (Dockerfile & Devcontainer)

**Dockerfile:**

```Dockerfile
FROM debian:12-slim

# Avoid prompts from apt
ENV DEBIAN_FRONTEND=noninteractive

# Install essential tools and create a non-root user
RUN apt update && apt install -y \
    sudo \
    git \
    curl \
    openssh-client \
    && useradd -m -s /bin/bash devuser \
    && echo "devuser ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/devuser

# Set working directory
WORKDIR /home/devuser/project

# Switch to non-root user
USER devuser
```

**devcontainer.json:**

```json
{
    "name": "Secure Hardened DevBox",
    "build": { "dockerfile": "Dockerfile" },
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },
    "runArgs": [
        "--cap-drop=ALL",
        "--security-opt=no-new-privileges"
    ],
    "remoteUser": "devuser"
}
```

## 8. Critical Hardening Checklist

| Priority | Action Item | Goal |
| :-- | :-- | :-- |
| Critical | Remote Logging | Ensures forensic integrity after a compromise. |
| Critical | Automatic Security Updates | Patches zero-days without manual intervention. |
| Critical | SSH Key-Only + 2FA | Eliminates brute-force and credential theft attacks. |
| High | SSH Access Groups (AllowGroups) | Limits SSH access to authorized personnel only. |
| High | Firewall (UFW) with Default Deny | Blocks unauthorized network access. |
| High | Kernel sysctl Hardening | Protects against network attacks and process exploits. |
| High | File Integrity Monitoring (AIDE) | Detects unauthorized file modifications. |
| Medium | NTP Synchronization | Ensures valid logs, tokens, and security protocols. |
| Medium | Rootkit Detection (rkhunter) | Identifies hidden malware and backdoors. |
| Medium | Rootless Containers | Limits "blast radius" for dev boxes and apps. |
| Medium | No-Exec Mounts | Prevents execution of scripts in /tmp. |
| Medium | Auditd Configuration | Tracks sensitive file access and privilege escalations. |
| Medium | Password Quality (pwquality) | Enforces strong passwords for local accounts. |
| Low | Intrusion Detection (PSAD/OSSEC) | Alerts on port scans and suspicious behavior. |
| Low | Securing /proc (hidepid=2) | Hides process information from other users. |
| Low | Limit su Access | Prevents unauthorized user switching. |

## References

- [imthenachoman/How-To-Secure-A-Linux-Server](https://github.com/imthenachoman/How-To-Secure-A-Linux-Server) - Comprehensive evolving guide covering SSH hardening, 2FA/MFA, FireJail sandboxing, AIDE integrity monitoring, rootkit detection, PSAD intrusion detection, and sysctl tuning
- [konstruktoid/hardening](https://github.com/konstruktoid/hardening) - CIS Benchmark automation script for Debian/Ubuntu
- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks/) - Industry-standard security configuration guidelines
- [Mozilla OpenSSH Guidelines](https://infosec.mozilla.org/guidelines/openssh) - Modern SSH configuration recommendations
- [Google Authenticator PAM](https://github.com/google/google-authenticator-libpam) - TOTP-based two-factor authentication module
