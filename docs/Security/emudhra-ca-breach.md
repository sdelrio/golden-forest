---
title: "The eMudhra Intermediate CA Compromise"
description: "Eight eMudhra intermediate CA private keys were recoverable from the certificates themselves. How to check and fix macOS and Linux trust stores."
tags: [security, tls, certificates, pki, macos, linux]
---

# The eMudhra Intermediate CA Compromise

On 17 October 2026, a researcher known as Wayne signed the message "We have a problem here" with the private key of eight different eMudhra intermediate CA certificates. All eight signatures verified. The keys were not stolen from a server: they were generated incorrectly by the CA, which means anyone can recover them from the public certificates themselves. Every certificate those intermediates ever issued, or will issue, can be forged.

Browsers fixed this within a day. Command-line tools, language runtimes and long-lived container images mostly did not. This article covers what happened and what to do on macOS and Linux.

:::danger TL;DR
If you use `curl`, `git`, `python3`, `pip`, Java, Node or OpenSSL on macOS or Linux, assume your client still trusts the compromised intermediates until you check and patch it. The check takes ten seconds:

```bash
curl https://dv-g3b-emudhra.we-have-a-problem.com/
```

A certificate error means you are fine. An HTTP 200 means you are not.
:::

## What happened

| Date (2026) | Event |
| :--- | :--- |
| April - May 2025 | The eight intermediates are created with flawed key generation, making the private keys recoverable |
| 17 Oct | Wayne signs a test message with each of the eight keys and reports it to the root programs |
| 17 Oct | Firefox (OneCRL, CRLite) and Chrome (CRLSets) block the intermediates |
| 18 - 19 Oct | eMudhra revokes all eight, reason `ca_compromise` |
| 19 Oct | Apple blocks them on macOS and iOS; downstream trust stores are notified |
| 20 Oct | Microsoft blocks them through the automatic certificate trust list update |

## What was compromised

Eight intermediates, each cross-signed twice: once by an eMudhra root and once by Sectigo's legacy "AAA Certificate Services". Sixteen certificates in total, which is why Windows blocks sixteen entries.

| Intermediate | Subject | Chains to | Expires |
| :--- | :--- | :--- | :--- |
| EM DV TLS CA - G3B | O=eMudhra BV, C=NL | emSign Root TLS CA - G3 + AAA Certificate Services | 2040-04-28 (AAA: 2028-12-31) |
| EM OV TLS CA - G3B | O=eMudhra BV, C=NL | emSign Root TLS CA - G3 + AAA Certificate Services | 2040-04-28 (AAA: 2028-12-31) |
| EM EV TLS CA - G3B | O=eMudhra BV, C=NL | emSign Root TLS CA - G3 + AAA Certificate Services | 2040-04-28 (AAA: 2028-12-31) |
| EM DV TLS CA - G3C | O=eMudhra Inc, C=US | emSign Root TLS CA - G3 + AAA Certificate Services | 2040-04-28 (AAA: 2028-12-31) |
| EM OV TLS CA - G3C | O=eMudhra Inc, C=US | emSign Root TLS CA - G3 + AAA Certificate Services | 2040-04-28 (AAA: 2028-12-31) |
| EM EV TLS CA - G3C | O=eMudhra Inc, C=US | emSign Root TLS CA - G3 + AAA Certificate Services | 2040-04-28 (AAA: 2028-12-31) |
| EM OV CS CA - G3B | O=eMudhra BV, C=NL | emSign Root CS CA - G3 + AAA Certificate Services | 2040-04-28 (AAA: 2028-12-31) |
| EM OV CS CA - G3C | O=eMudhra Inc, C=US | emSign Root CS CA - G3 + AAA Certificate Services | 2040-04-28 (AAA: 2028-12-31) |

The first six are TLS intermediates (DV, OV, EV). The last two are code signing intermediates, so the blast radius is not limited to HTTPS: anything that verifies signatures against those chains is in scope too.

The roots involved:

| Root | Where it is trusted | Status after the incident |
| :--- | :--- | :--- |
| emSign Root TLS CA - G3 | Microsoft root store only | Blocked by Microsoft on 20 Oct |
| emSign Root CS CA - G3 | Microsoft root store only | Blocked by Microsoft on 20 Oct |
| AAA Certificate Services (Comodo, Sectigo) | Apple and Microsoft stores; removed from Chrome and Mozilla earlier | Blocked by Apple on 19 Oct |
| emSign ECC Root CA - G3 | Apple, Chrome, Microsoft, Mozilla | Cross-signer; distrusted in the same updates |

## Am I affected?

Two questions decide this: does your client consume vendor revocation data, and does your trust store still contain the roots above? Browsers answer yes to the first. Many CLI tools answer no to both.

The community runs two checker hosts that serve certificates chaining through the compromised intermediates (one direct, one via the AAA cross-sign):

```bash
curl https://dv-g3b-emudhra.we-have-a-problem.com/
curl https://dv-g3b-aaa-emudhra.we-have-a-problem.com/
```

A certificate error means the client is fixed. A 200 means it still trusts a compromised intermediate.

:::warning
The checker hosts log the user agent of every client that connects successfully and publish aggregate statistics. Use `curl -A "check"` if you would rather not contribute a recognizable signature, and do not run the check from automation you do not want counted.
:::

On macOS the system store and the OpenSSL bundle are separate, and they disagree right now. Apple blocked the intermediates in Security.framework, so Safari and Chrome are fine, but the two roots that chain them are still in `/etc/ssl/cert.pem`, and that file carries no revocation data. It is what the bundled `curl`, `git`, `python3`, `perl`, `ruby` and `openssl` actually use:

```bash
grep -n -E "AAA Certificate Services|emSign ECC Root CA - G3" /etc/ssl/cert.pem
```

Any hit means the bundle still carries the roots, and the command-line tools on that machine still trust the compromised intermediates.

On Linux, check the package version first (see the table below), then the checker hosts. If your package manager reports an older `ca-certificates`, assume the roots are still trusted.

## macOS fixes

Apple's update on 19 October covers Security.framework, so Safari and Chrome on macOS stopped trusting the intermediates. It does not touch `/etc/ssl/cert.pem`, Apple's LibreSSL bundle, which the command-line tools above use and which carries no revocation data. Removing the two roots from that file is the only fix available, and it has to be repeated after any macOS update that replaces the file.

### Remove the two roots from the LibreSSL bundle

```bash
sudo cp -p /etc/ssl/cert.pem /etc/ssl/cert.pem.bak &&
sudo awk '/^(###|===) /{skip=0}
  /^=== .*\/CN=(AAA Certificate Services|emSign ECC Root CA - G3)$/{skip=1}
  !skip' /etc/ssl/cert.pem.bak | sudo tee /etc/ssl/cert.pem > /dev/null
```

The `awk` script drops every PEM block whose `===` header line names one of the two roots: it switches `skip=1` when it matches a header, and resets `skip=0` at the next `###` or `===` header, so the whole block (header, base64, footer) is skipped. A copy of the original file is kept at `/etc/ssl/cert.pem.bak`.

To restore it, for example after a macOS update replaces the file or if something breaks:

```bash
sudo cp -p /etc/ssl/cert.pem.bak /etc/ssl/cert.pem
```

### Fix Apple's `python3` and its virtual environments

The bundled `pip3`, and the `pip` inside virtual environments created from `/usr/bin/python3`, use their own stale copy of the roots, so they stay broken even after the bundle fix:

```bash
F="$(/usr/bin/python3 -c 'import sysconfig; print(sysconfig.get_path("stdlib"))')/sitecustomize.py" &&
echo 'import os; os.environ.setdefault("PIP_CERT", "/etc/ssl/cert.pem")' | sudo tee -a "$F" > /dev/null &&
sudo chmod 644 "$F"
```

:::warning
`sitecustomize.py` in the stdlib is a blunt instrument. It is imported by every invocation of the system `python3`, not just pip, and macOS updates may overwrite or remove it. It also pins pip to a bundle that future updates may replace.

A cleaner long-term setup is to ignore Apple's Python for package installation entirely: `brew install ca-certificates`, then point pip at the Homebrew bundle with `pip config set global.cert "$(brew --prefix)/etc/ca-certificates/cert.pem"`.
:::

### Homebrew and nix-darwin

Homebrew's `ca-certificates` already contains the fix, so anything built against Homebrew (its `curl`, `openssl`, `git`, or Python) only needs an upgrade:

```bash
brew upgrade ca-certificates
```

The patched Homebrew formula version is `2026-09-25_1`. `nix-darwin` users have a second trust store and must additionally follow the NixOS instructions in the next section.

:::danger Do not
Delete certificates from the System keychain, disable SIP, or use `security add-trusted-cert` to work around this. The system store is already correct, and those changes weaken the whole machine rather than fixing one bundle.
:::

## Linux fixes

### Upgrade ca-certificates

This is the only supported fix. The roots are removed from the Mozilla bundle that distributions ship, so the update removes them everywhere that bundle is consumed.

| Distribution | Patched version |
| :--- | :--- |
| Ubuntu | `20260816ubuntu0.22.04.1`, `20260816ubuntu0.24.04.1`, `20260816ubuntu0.26.04.1`, `20260816ubuntu0.26.10.1` |
| Debian | `20250419~deb12u2`, `20250419+deb13u1`, `20260816+nmu1` |
| Alpine | `20261020-r0` |
| Arch Linux | `ca-certificates-mozilla` `3.131.1-1` |
| Fedora | `2026.2.92_v9.0.319` |
| Gentoo | `20260816.3.125` |
| Chainguard | `20260909-r3` |
| NixOS | via `nixpkgs` update |
| FreeBSD | `caroot` `15.1-RELEASE-p6`, `14.5-RELEASE-p3`, `14.4-RELEASE-p12` |
| NetBSD | via `certctl` |

```bash
# Debian / Ubuntu
sudo apt update && sudo apt install --only-upgrade ca-certificates

# Fedora / RHEL family
sudo dnf upgrade ca-certificates

# Alpine
sudo apk upgrade ca-certificates
```

### Manual distrust (expert stopgap, not recommended)

If your distribution has not shipped the update yet, you can block the two roots directly in the system trust store. The advisory explicitly says this is **not recommended for ordinary users**, because both roots also issue a lot of legitimate certificates. Distrusting them can break websites, package managers and internal services that chain to them, and the breakage looks like a random TLS failure rather than a security measure.

Each block below extracts the root from the system store, writes it into that distribution's blocklist, and regenerates the bundle.

**Debian and Ubuntu**, as root:

```bash
sed -i \
  -e 's|^mozilla/emSign_ECC_Root_CA_-_G3.crt|!&|' \
  -e 's|^mozilla/Comodo_AAA_Services_root.crt|!&|' \
  /etc/ca-certificates.conf && update-ca-certificates
```

The `!` prefix marks a certificate as distrusted in `/etc/ca-certificates.conf`. The `^` anchor stops it from being applied twice.

**Alpine**, as root (the emSign root only, since Alpine does not ship the Comodo root):

```bash
apk add ca-certificates &&
sed -i -e 's|^mozilla/emSign_ECC_Root_CA_-_G3.crt|!&|' \
  /etc/ca-certificates.conf && update-ca-certificates
```

**Fedora, RHEL, CentOS Stream, Rocky Linux, AlmaLinux, Amazon Linux 2023**, as root:

```bash
d=/etc/pki/ca-trust/source/blocklist; [ -d $d ] || d=/etc/pki/ca-trust/source/blacklist
trust extract --overwrite --format=pem-bundle \
  --filter='pkcs11:object=Comodo%20AAA%20Services%20root;type=cert' \
  $d/Comodo_AAA_Services_root.pem &&
trust extract --overwrite --format=pem-bundle \
  --filter='pkcs11:object=emSign%20ECC%20Root%20CA%20-%20G3;type=cert' \
  $d/emSign_ECC_Root_CA_-_G3.pem &&
update-ca-trust
```

**openSUSE and SLES**, as root:

```bash
d=/etc/pki/trust/blocklist; [ -d $d ] || d=/etc/pki/trust/blacklist
trust extract --format=pem-bundle \
  --filter='pkcs11:object=Comodo%20AAA%20Services%20root;type=cert' \
  $d/Comodo_AAA_Services_root.pem &&
trust extract --format=pem-bundle \
  --filter='pkcs11:object=emSign%20ECC%20Root%20CA%20-%20G3;type=cert' \
  $d/emSign_ECC_Root_CA_-_G3.pem &&
update-ca-certificates
```

**Arch Linux**, as root (only the emSign root is needed):

```bash
trust extract --format=pem-bundle \
  --filter='pkcs11:object=emSign%20ECC%20Root%20CA%20-%20G3;type=cert' \
  /etc/ca-certificates/trust-source/blocklist/emSign_ECC_Root_CA_-_G3.pem &&
update-ca-trust
```

**NixOS**, in `configuration.nix`:

```nix
security.pki.caCertificateBlacklist = [
  "Comodo AAA Services root"
  "emSign ECC Root CA - G3"
];
```

After any of these, verify with the checker hosts. `curl -vI https://dv-g3b-emudhra.we-have-a-problem.com/` should now fail with a certificate error, and a normal site should still return 200. If a package manager or an internal service starts failing, re-enable the roots and wait for the distro update instead.

:::tip
Record what you changed. A blocklist entry you forget about becomes a mystery outage six months later, when the same root is re-added or rotated.
:::

### Containers and images

Containers inherit the `ca-certificates` baked into the image, not the host's. A running container that was built before the update stays vulnerable forever, and `docker exec` cannot fix it.

- Rebuild images on a base image that carries the patched package, and re-tag rather than pull `latest` blindly.
- For debugging only, bind-mount the host trust store: `docker run -v /etc/ssl/certs:/etc/ssl/certs:ro ...`.
- Distroless and scratch images have no package manager, so there is nothing to patch in place. Rebuild from a refreshed base.

## Language runtimes and app bundles

These ship their own CA bundle and ignore the OS store, so a patched operating system is not enough. Each one needs its own update.

| Runtime or tool | Patched version |
| :--- | :--- |
| Java (OpenJDK and Oracle JDK) | 27.0.1.0.2, 25.0.5.0.2, 21.0.13.0.2, 17.0.21.0.2, 11.0.33.0.2, 8u511 |
| Node.js | 22.23.4, 24.22.1, 26.12.1 |
| Python `certifi` | 2026.10.19 |
| pip | 26.2.2 |
| uv | 0.13.4 |
| Rust `webpki-roots` | 1.0.10 |
| Rust `rustls-webpki` | 0.103.16 |
| rustup | 1.29.2 |
| Go | 1.27.3, 1.26.10 |
| Deno | 2.9.8 |
| Electron | 44.9.1, 43.8.1 |
| curl CA bundle | 2026-10-20 |
| NSS | 3.131.1 |
| Docker Desktop | 4.96.2 |

Note what this table implies: a Go binary built with an older toolchain embeds its own roots and will keep trusting the compromised intermediates even on a fully patched Ubuntu box. Same for a Node app pinned to an old runtime. When in doubt, the checker hosts are the ground truth.

Bun is still pending at the time of writing, as is the Bottlerocket base image.

## Why Certificate Transparency saved the browsers

There are no certificate transparency log entries for these intermediates from April or May 2025. That is the detail that turns a catastrophic CA compromise into a contained one.

Every CT-enforcing client, which means Firefox, Chrome, Edge and Safari, refuses to accept a certificate whose chain is not logged. Since the intermediates were never logged, an attacker holding these keys could not have obtained a usable certificate for a public website in front of those clients. The certificates that do appear in CT logs are the later cross-signs, and those were blocked quickly.

Everything outside the browser ecosystem has no such safety net. `curl`, `git`, `python`, `java`, `node`, `go`, `rust`, container images, embedded Linux and older embedded TLS stacks typically neither enforce CT nor check revocation. For those clients the only two mitigations are:

1. The client consumes vendor revocation data (OneCRL, CRLite, CRLSets, OCSP with hard-fail).
2. The root that chains the intermediate is removed from the trust store.

Many CLI tools do neither. That is why this incident is still open for a lot of machines, and why the checker statistics page is worth a look: it is a live census of clients that will still accept a forged certificate.

## References

- [eMudhra intermediate CA compromise advisory](https://emudhra.we-have-a-problem.com/): proof, verification steps, per-platform workarounds, and patched version tables
- [Mozilla bug 2083449](https://bugzilla.mozilla.org/show_bug.cgi?id=2083449): initial incident report, including the faulty key generation
- [mozilla.dev.security-policy thread](https://groups.google.com/a/mozilla.org/g/dev-security-policy/c/0R3XLJL6FuE): guidance for trust store operators
- [Checker statistics](https://statistics-emudhra.we-have-a-problem.com/): user-agent and JA4 counts for clients that still trust the intermediates
- [OneCRL: revoking intermediate certificates](https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/)
- [CRLite in Firefox](https://hacks.mozilla.org/2025/08/crlite-fast-private-and-comprehensive-certificate-revocation-checking-in-firefox/)
- [Chrome CRLSets](https://www.chromium.org/Home/chromium-security/crlsets/)
