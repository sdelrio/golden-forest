# GitLab

## Gitlab runners access

Allow access from gitlab runners SaaS to your webook located in port 6443:

```bash
ufw allow proto tcp from 67.205.128.0/18 to YOUR_PUB_IP port 6443
ufw allow proto tcp from 192.241.128.0/17 to YOUR_PUB_IP port 6443
```

* gitlab-shared-runners-manager-2.gitlab.com
* gitlab-shared-runners-manager-1.gitlab.com
* shared-runners-manager-2.gitlab.com
* shared-runners-manager-1.gitlab.com

### How to get IPs and mask

```bash
$ dig +short gitlab-shared-runners-manager-2.gitlab.com
67.205.141.121
$ dig +short gitlab-shared-runners-manager-1.gitlab.com
67.205.137.49
$ dig +short shared-runners-manager-2.gitlab.com
67.205.166.117
$ whois 67.205.137.49 | grep -i ^cidr
CIDR:           67.205.128.0/18
```

* <https://forum.gitlab.com/t/gitlab-ci-runners-public-ip-addresses-range/4301/4>

