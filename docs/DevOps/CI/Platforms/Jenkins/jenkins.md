# Jenkins

Jenkins provides hundreds of plugins to support building, deploying and automating any project. Like a Swiss knives, it can do a lot of things.

There is a new [serverless version](https://medium.com/@jdrawlings/serverless-jenkins-with-jenkins-x-9134cbfe6870) called [Jenkins-X](https://jenkins-x.io/es/)

## References

* [Homepage](https://www.jenkins.io/)
* [Pipeline Syntax](https://jenkins.io/doc/book/pipeline/syntax/#stages)
* [Jenkinsfile Syntax](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/)

### Setup

* [2020: Run Parallel Builds in Kubernetes Cluster with Jenkins Pipeline](https://ittroubleshooter.in/run-parallel-build-kubernetes-cluster-jenkins/)
* [2019: Using Jenkins Configuration as Code](https://devops.com/using-jenkins-configuration-as-code/)
* [2018: KubeCon NA - Migrationg Jenkins to Kubernetes Broke our brains](https://www.youtube.com/watch?v=2w8dbJCTNaA)
* [2018: Build Your Own Jenkins! Introducing Custom WAR/Docker Package](https://www.cloudbees.com/blog/build-your-own-jenkins-introducing-custom-wardocker-package)
* [2018: Devops world - Jenkins Config as Code](https://docs.google.com/presentation/d/1VsvDuffinmxOjg0a7irhgJSRWpCzLg_Yskf7Fw7FpBg/edit#slide=id.g2deaad7e50_0_16)
* [2018: Scaled and distributed Jenkins top of Kubernetes](https://medium.com/muhammet-arslan/how-ive-created-scaled-and-distributed-jenkins-top-of-kubernetes-441db62b15cd)
* [2018: BlazeMeter - Setup Scalable Jenkins on Top of a Kubernetes Cluster](https://www.blazemeter.com/blog/how-to-setup-scalable-jenkins-on-top-of-a-kubernetes-cluster)
* [2017: Technology Converstations - Automating Jenkins Docker Setup](https://technologyconversations.com/2017/06/16/automating-jenkins-docker-setup/comment-page-1/#comment-11768)
* [2017: Demo Jenkins Config as Code with Docker + Groovy hook scripts](https://github.com/hayderimran7/demo-jenkins-config-as-code)
* [2017: Run Jenkins in Docker container with persistent config in git](https://antonfisher.com/posts/2017/01/16/run-jenkins-in-docker-container-with-persistent-configuration/)

### Articles

* [2021: CloudBees - Top 10 Best Practices for Jenkins Pipeline Plugin](https://www.cloudbees.com/blog/top-10-best-practices-jenkins-pipeline-plugin)
* [2020: NetApp - DevOps-as-a-Service: Our internal Solution](https://thenewstack.io/devops-as-a-service-our-internal-solution/)
* [2017: Mozilla - fxtest-jenkins-pipeline](https://davehunt.uk/2017/03/23/migrating-to-declarative-jenkins-pipelines.html)
  * [GitHub](https://github.com/mozilla/fxtest-jenkins-pipeline)
* [2017: Ten Things I Wish I’d Known Before Using Jenkins Pipelines](https://zwischenzugs.com/2017/04/23/things-i-wish-i-knew-before-using-jenkins-pipelines/)
* [Trigger job by URL](https://humanwhocodes.com/blog/2015/10/triggering-jenkins-builds-by-url/)
* [Docker packaging](https://www.cloudbees.com/blog/build-your-own-jenkins-introducing-custom-wardocker-package)
* [Jenkins software bill of materials with Syft](https://thenewstack.io/give-jenkins-a-software-bill-of-materials-with-syft/)
* [Restrict Jenkins Project access using Roles (Project Matrix)](https://www.thegeekstuff.com/2017/03/jenkins-users-groups-roles/)
* [2016: Controlling the Flow with Stage, Lock, and Milestone](https://jenkins.io/blog/2016/10/16/stage-lock-milestone/)

### Global Libraries

* [fabric8](https://github.com/fabric8io/fabric8-pipeline-library)
  * [ci/cd fabric](https://fabric8.io/guide/cdelivery.html)
* [jenkinsci - pipeline-examples](https://github.com/jenkinsci/pipeline-examples/tree/master/pipeline-examples)
* [jenkinsci - report test results](https://github.com/jenkinsci/pipeline-model-definition-plugin/wiki/Reporting-test-results-and-storing-artifacts)
* [jenkins server to develop pipelines](https://github.com/liatrio/pipeline-developer)
* [2017: Centralise Jenkins Pipelines configuration using Shared Libraries](https://dev.to/jalogut/centralise-jenkins-pipelines-configuration-using-shared-libraries)
* [2016: Making your own DSL with plugins, written in Pipeline script](Making your own DSL with plugins, written in Pipeline script)

### Sample Jenkinsfiles

* [2019: Java 8 Pipeline with tests](https://github.com/leszko/calculator/blob/master/Jenkinsfile)
* [2017: CodeQL, GitHub, Heroku, manual webhook urls](https://gist.github.com/jonico/e205b16cf07451b2f475543cf1541e70)
* [2016: fahl-design - Slack/mail notifications](https://bitbucket.org/snippets/fahl-design/koxKe)
* [Building your first Docker image with Jenkins 2: Guide for developers](https://tutorials.releaseworksacademy.com/learn/building-your-first-docker-image-with-jenkins-2-guide-for-developers)
* [2107: Jenkins Canary releases demo](https://github.com/GoogleCloudPlatform/continuous-deployment-on-kubernetes/blob/master/sample-app/Jenkinsfile)
    * [Infoshare 2p017: carter morgan (google) what does a production ready kuberntees application look like](https://www.youtube.com/watch?v=PXJu8ujNEmU)

### Test Pipelines

* [2017: Jenkins World: JenkinsPipelineUnit: Test your CD pipeline](https://www.youtube.com/watch?v=RmrpUtbVR7o)

### Plugins

* [Plugin: Role-based Authorization Strategy](https://plugins.jenkins.io/role-strategy/)
* [Plugin: Delivery Pipeline ](https://plugins.jenkins.io/delivery-pipeline-plugin/)

#### 2021

* <https://devopscurry.com/best-jenkins-plugins-for-2021/>

### Videos

* [2019: CloudBeesTV - Creating a CI/CD Pipeline for Your Shared Libraries](https://www.youtube.com/watch?v=DDBzm-KT24E)
* [2018: Cloud Next - Continuous Delivery Best Practices with Jenkins and GKE](https://www.youtube.com/watch?v=IDoRWieTcMc)
* [2018: Jenkins World - A Cloud Native Jenkins](https://www.youtube.com/watch?v=dxv0-O63fDM)
  * [Presentation](https://static.sched.com/hosted_files/devopsworldjenkinsworld2018/8f/DWJW2018%20-%20A%20Cloud%20Native%20Jenkins.pdf)
  * [Speaker blogpost: A Cloud Native Jenkins](https://www.jenkins.io/blog/2018/09/12/speaker-blog-a-cloud-native-jenkins/)
* [2017: Jenkins Minutes - Using a Dockerfile with Jenkins Pipeline](https://www.youtube.com/watch?v=Pi2kJ2RJS50)
* [2017: Jenkins World - Disposable Jenkins](https://www.youtube.com/watch?v=LivUvzkXASs)
  * [Speaker blogpost: Indispensable, Disposable Jenkins](https://www.jenkins.io/blog/2017/07/17/speaker-blog-care/)
  * [Joyent + Care.com/HomePay Fireside Chat: Indispensable, Disposable Jenkins](https://www.joyent.com/blog/fireside-chat-indispensable-disposable-jenkins)
* [2017: Jenkins World - Mastering the Jenkins Script Console](https://www.youtube.com/watch?v=qaUPESDcsGg)
  * [Learging Groovy](http://groovy-lang.org/learn.html)
  * [Jenkins Community Scripts](https://github.com/jenkinsci/jenkins-scripts)
  * [Script Console in Jenkins wiki](https://wiki.jenkins.io/display/JENKINS/Jenkins+Script+Console)
  * [Examples in GitHub OAuth Plugin Wiki](https://wiki.jenkins.io/display/JENKINS/GitHub+Oauth+Plugin)
  * Configuration via Script Console
    - <https://issues.jenkins-ci.org/browse/JENKINS-31094>
    - <https://github.com/sandscape>
    - <https://github.com/samrocketman>
    - <https://github.com/samrocketman/jenkins-bootstrap-shared/>

### Backup

* [2021: How To Backup Jenkins Data and Configuration](https://devopscube.com/jenkins-backup-data-configurations/)
* [Job on Jenkins to make backup](https://confluence.cornell.edu/display/CLOUD/Backup+Jenkins+Home+EFS+Volume)
* [Backup Jenkins to the Cloud](https://www.cloudbees.com/blog/backup-jenkins-cloud)
* [gist - Backup Jenkins config to S3](https://gist.github.com/luispabon/d181724ee80589d12e4b0de44b921a4f)

#### Backup and restore script

https://gist.github.com/luispabon/d181724ee80589d12e4b0de44b921a4f

* Backup to S3

```bash
#!/usr/bin/env bash

# Generate timestamped filename
TIMESTAMPED_TAG=`date +%Y-%m-%d-%H%M%S`
BACKUP_ARCHIVE="./jenkins-backup-${TIMESTAMPED_TAG}.tar.gz"

# Inconceivable race condition avoidance
if [-f $BACKUP_ARCHIVE ]; then
	rm ${BACKUP_ARCHIVE}
fi

# Archive everything on jenkins but workspace, .file, .folders and m2 files, whatever these are
# If the jenkins folder changes half way through, tar will fail; retry up to 5 times
COUNTER=0
until [ $COUNTER -ge 5 ]
do
    tar -czvf ${BACKUP_ARCHIVE} --exclude="workspace" --exclude=".m2" --exclude=builds --exclude=".*" /var/lib/jenkins && break

    # If we get here, tar failed!
    echo "Archive creation failed, retrying..."
    COUNTER=$[$COUNTER+1]
    sleep 15
done

# Place on s3 and cleanup
aws s3 cp ${BACKUP_ARCHIVE} s3://${S3_BUCKET}/jenkins-backups/
rm ${BACKUP_ARCHIVE}
```

* Restore from S3

```bash
#!/usr/bin/env bash

# Fetch backup generated from script above from s3 and restore
# This works best BEFORE you install and start jenkins for the first time
# We use this as part of our jenkins-up logic
JENKINS_CONFIG_ARCHIVE=`aws s3 ls ${S3_BUCKET}/jenkins-backups/ | sort | tail -n 1 | awk '{print $4}'`
aws s3 cp s3://${S3_BUCKET}/jenkins-backups/${JENKINS_CONFIG_ARCHIVE} .
if [ -f ${JENKINS_CONFIG_ARCHIVE} ]; then
    echo "Archive found, restoring..."
    tar -xvf ${JENKINS_CONFIG_ARCHIVE}
    mkdir -p /var/lib/jenkins
    mv var/lib/jenkins/* /var/lib/jenkins/
    chown ${JENKINS_USER}:${JENKINS_GROUP} /var/lib/jenkins -Rf
    rm ${JENKINS_CONFIG_ARCHIVE}
    rm var -Rf
else
    echo "No backups found on s3, skipping..."
fi
```

### Logs

* [2017: Putting Jenkins Build log into dockerized ELK stack](https://dzone.com/articles/putting-jenkins-build-logs-into-elk-stack-filebeat)

### Local Development with Jenkins pipelines

Jenkins server for developing pipelines locally without requiring git commits.
The goal here is to be able to immediately run a pipeline locally without needing to manually copy code or make a git commit before running changes.

* [2017: Building with Docker Using Jenkins Pipelines](https://liatrio.com/local-development-with-jenkins-pipelines/)
  * https://github.com/liatrio/pipeline-developer

#### Expose port to public URL

* https://ngrok.com/
* http://www.ultrahook.com/
* https://jordancrawford.kiwi/home-server-without-portforward/
  *  https://jordancrawford.kiwi/setting-up-tinc/.
