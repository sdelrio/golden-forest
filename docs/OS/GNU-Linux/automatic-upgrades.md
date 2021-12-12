# Automatic Upgrades


## Ubuntu

### Ubuntu 18 or Ubuntu 20

```bash
apt install unattended-upgrades
vi /etc/apt/apt.conf.d/50unattended-upgrades
```

The most important: uncomment the “updates” line by deleting the two slashes at the beginning of it:

```
"${distro_id}:${distro_codename}-updates";
```

Optional: You should uncomment and adapt the following lines to ensure you’ll be notified if an error happens:

```
Unattended-Upgrade::Mail "user@example.com";
Unattended-Upgrade::MailOnlyOnError "true";
```

Recommended: remove unused kernel packages and dependencies and make sure the system automatically reboots if needed by uncommenting and adapting the following lines:

```
Unattended-Upgrade::Remove-Unused-Kernel-Packages "true";
```
↑ You may have to add a semicolon at the end of this line. ↑

```
Unattended-Upgrade::Remove-Unused-Dependencies "true";
Unattended-Upgrade::Automatic-Reboot "true";
Unattended-Upgrade::Automatic-Reboot-Time "02:38";
```

## References

* <https://libre-software.net/ubuntu-automatic-updates/>

