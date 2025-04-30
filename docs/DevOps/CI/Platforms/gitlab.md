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

### How to get IPs and mask for public gitlab runners

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

* [https://forum.gitlab.com/t/gitlab-ci-runners-public-ip-addresses-range/4301/4](https://forum.gitlab.com/t/gitlab-ci-runners-public-ip-addresses-range/4301/4)

## Official documentation

* [Gitlab CI/CD](https://docs.gitlab.com/ee/ci/)
* [Making CI/CD easier with GitLab](https://about.gitlab.com/blog/2017/07/13/making-ci-easier-with-gitlab/)

## Articles

* [2020: How to Improve Your Kubernetes CI/CD Pipelines with GitLab and Open Source](https://thenewstack.io/how-to-improve-your-kubernetes-ci-cd-pipelines-with-gitlab-and-open-source/])
* [2020: Why I Moved My Personal Projects to GitLab](https://thenewstack.io/why-i-moved-my-personal-projects-to-gitlab/)
* [2020: How Containerized CI/CD Pipelines Work with Kubernetes and GitLab](https://thenewstack.io/part-1-how-to-improve-enhance-your-kubernetes-ci-cd-pipelines-with-gitlab-and-open-source/)
* [2019: How DigitalOcean and Northwestern Mutual Use GitLab to Help Run CI/CD](https://thenewstack.io/how-digitalocean-and-northwestern-mutual-use-gitlab-to-help-run-ci-cd/)
* [2019: GitLab Uses TriggerMesh to Offer Knative-Based Serverless Workflows](https://thenewstack.io/gitlab-uses-triggermesh-to-offer-knative-based-serverless-workflows/)
* [2018: Debugging GitLab CI pipelines locally](https://campfirecode.medium.com/debugging-gitlab-ci-pipelines-locally-e2699608f4df)
* [2016: Continuous Initegration with Jenkins and GitLab](https://medium.com/@teeks99/continuous-integration-with-jenkins-and-gitlab-fa770c62e88a#.c4j4to4ys)
  * [https://github.com/jenkinsci/gitlab-plugin/wiki/Setup-Example](https://github.com/jenkinsci/gitlab-plugin/wiki/Setup-Example)
* [2019: Docker security scanning using Microscanner (in Jenkins & Gitlab CI)!](https://aboullaite.me/docker-security-scan/)

