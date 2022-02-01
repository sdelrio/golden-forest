# Let's Encrypt

Let’s Encrypt is a free, automated, and open certificate authority (CA), run for the public’s benefit. It is a service provided by the Internet Security Research Group (ISRG).

It provides digital certificates they need in order to enable HTTPS (SSL/TLS) for websites, for free, in the most user-friendly way we can. We do this because we want to create a more secure and privacy-respecting Web.

* **Free:** Anyone who owns a domain name can use Let’s Encrypt to obtain a trusted certificate at zero cost.
* **Automatic:** Software running on a web server can interact with Let’s Encrypt to painlessly obtain a certificate, securely configure it for use, and automatically take care of renewal.
* **Secure:** Let’s Encrypt will serve as a platform for advancing TLS security best practices, both on the CA side and by helping site operators properly secure their servers.
* **Transparent:** All certificates issued or revoked will be publicly recorded and available for anyone to inspect.
* **Open:** The automatic issuance and renewal protocol is published as an open standard that others can adopt.
* **Cooperative:** Much like the underlying Internet protocols themselves, Let’s Encrypt is a joint effort to benefit the community, beyond the control of any one organization.

## Boulder

[Boulder](https://github.com/letsencrypt/boulder) is an implementation of an ACME-based CA. The [ACME protocol](https://github.com/ietf-wg-acme/acme/) allows the CA to automatically verify that an applicant for a certificate actually controls an identifier, and allows domain holders to issue and revoke certificates for their domains. Boulder is the software that runs [Let's Encrypt](https://letsencrypt.org/).
