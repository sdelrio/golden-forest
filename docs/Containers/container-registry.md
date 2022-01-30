# Container Registry


## GitLab container registry


* `Jenkinsfile` sample
```javascript
env.TAG = "$BUILD_TIMESTAMP-$BUILD_ID"
env.IMAGE_X86 = "registry.gitlab.com/yourproject/yourrepo"

withCredentials([usernamePassword(
        credentialsId: 'gitlab-reg', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER'
        )]) {
    sh 'docker login --username $DOCKER_USER --password $DOCKER_PASS registry.gitlab.com'
    sh 'docker push ${IMAGE_X86}:${TAG}'
}
```

* [sloopy.io - GitLab Container Registry as an alternative to Docker Hub](https://sloppy.io/gitlab-container-registry-alternative-docker-hub/)
* [2017: Setting up your own fully functional GitLab: HTTPS, Registry, CI + Runners](https://gitlabfan.com/setting-up-your-own-fully-functional-gitlab-https-registry-ci-runners-79901ac617c0)
* [2016: GitLab Container Registry](https://about.gitlab.com/blog/2016/05/23/gitlab-container-registry/)

