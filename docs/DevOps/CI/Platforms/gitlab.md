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

