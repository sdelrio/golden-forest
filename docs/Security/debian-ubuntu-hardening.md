# Advanced Debian/Ubuntu Hardening Strategy (2026)

## 1. Core Foundational Hardening
Security begins at the primary entry points. For Debian and Ubuntu systems, this requires moving beyond default configurations to a "Zero Trust" local posture.

### SSH Server Access
SSH is the most targeted service. Hardening it is non-negotiable:
* **Public Key Only:** Disable password-based authentication (`PasswordAuthentication no`).
* **Algorithm Strictness:** Use only modern, secure host keys (Ed25519) and secure Ciphers/MACs.
* **No Root Login:** Force administrative access through a standard user with `sudo` privileges to ensure an audit trail.
* **Rate Limiting:** Use tools like `Fail2Ban` or `CrowdSec` to block IPs after multiple failed attempts.

### Firewall & Network
* **Default Deny:** Implement a strict "deny all" inbound and outbound policy, explicitly allowing only necessary ports (e.g., 80/443 for web, custom SSH port).
* **Egress Filtering:** Prevent "phone home" malware by restricting which external IPs/ports the server can initiate connections to.

## 2. Distributed Security: Remote Logging & Auditing
In a modern production environment, a server should never be the sole keeper of its own logs.

* **Immutable Audit Trails:** Use `rsyslog` or `systemd-journal-remote` to stream logs to a dedicated, hardened logging server. 
* **The "Black Box" Principle:** By forwarding `auditd` events via the `audisp-remote` plugin, you ensure that even if an attacker gains root and wipes the local disk, the record of their actions exists safely off-host.
* **Append-Only Storage:** Configure the remote collector so that received logs cannot be modified or deleted by the source server.

## 3. Secure "Dev Box" & Container Environments
To replicate a "GitHub Codespaces" experience securely, use open-source tools like **Coder** or **DevPod** with a focus on isolation.

### Container Hardening Strategy
* **Rootless Execution:** Run the container engine (Docker/Podman) in rootless mode. A container breakout will only land the attacker in an unprivileged user space on the host.
* **User Namespaces:** Isolate the container's root user from the host's root user.
* **Minimalist Base Images:** Use Debian-Slim images to reduce the internal attack surface.

## 4. Automation: The Konstruktoid Hardening Framework
The [konstruktoid/hardening](https://github.com/konstruktoid/hardening) project is an industry-standard script used to align systems with **CIS (Center for Internet Security) Benchmarks**.

### Key Automated Features:
* **Kernel Lockdown:** Sets `kernel.modules_disabled=1` after boot to prevent the loading of malicious kernel modules.
* **FileSystem Hardening:** Automatically mounts `/tmp`, `/dev/shm`, and `/home` with `nodev`, `nosuid`, and `noexec` flags.
* **Compiler Restriction:** Restricts access to `gcc`, `make`, and `rustc` to prevent attackers from building exploit payloads.
* **Systemd Sandboxing:** Applies restrictive systemd overrides to common services.
* **Legacy Protocol Disabling:** Systematically removes support for DCCP, SCTP, RDS, and TIPC protocols.

## 5. Implementation: SSH & Firewall Hardening Script

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

## 6. Implementation: Remote Logging & Auditd Configuration

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

## 7. Implementation: Coder (Secure Dev Environment)

```bash
# Install Coder on Debian/Ubuntu
curl -fsSL https://coder.com/install.sh | sh

# Start Coder
coder run

# Access Coder UI at http://localhost:8080
```

## 8. Implementation: Hardened Dev Box (Dockerfile & Devcontainer)

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

### devcontainer.json

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

## 9. Critical Hardening Checklist

| Priority | Action Item | Goal |
| :-- | :-- | :-- |
| Critical | Remote Logging | Ensures forensic integrity after a compromise. |
| High | SSH Key-Only Access | Eliminates 99% of automated brute-force attacks. |
| High | Unattended Upgrades | Automates security patching for the OS and Kernel. |
| Medium | Rootless Containers | Limits "blast radius" for dev boxes and apps. |
| Medium | No-Exec Mounts | Prevents execution of scripts in /tmp. |
| Medium | Auditd Configuration | Tracks sensitive file access and privilege escalations. |
