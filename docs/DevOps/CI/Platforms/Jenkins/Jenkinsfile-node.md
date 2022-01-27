# Jenkinsfile node app

* [Set up Jenkins CI in Docker Container & Run Your Tests Inside Their Own Container A How-To Guide](https://hackernoon.com/set-up-jenkins-ci-in-docker-container-and-run-your-tests-inside-their-own-container-a-how-to-guide-7h8u32yi)

# Jenkinsfile

```groovy
pipeline {
    environment {
        // This registry is important for removing the image after the tests 
        registry = "yourname/nodeapp"
    }
    agent any
    stages {
        stage("Test") {
            steps {
                script { // Building the Docker image 
                dockerImage = docker.build registry + ":$BUILD_NUMBER" 
                try {
                    dockerImage.inside() {
                        // Extracting the PROJECTDIR environment variable from inside the container 
                        def PROJECTDIR = sh(script: 'echo \$PROJECTDIR', returnStdout: true).trim()
                        // Copying the project into our workspace
                        sh "cp -r '$PROJECTDIR' '$WORKSPACE'"
                        // Running the tests inside the new directory 
                        dir("$WORKSPACE$PROJECTDIR") { sh "npm test" }
                    }
                } finally {
                    // Removing the docker image 
                    sh "docker rmi $registry:$BUILD_NUMBER"
                }
            }
        }
    }
}

```
# Dockerfile

```dockerfile
FROM node:latest

ENV PROJECTDIR /nodeApp

WORKDIR $PROJECTDIR

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

# app.js

```javascript
const express = require("express");
const app = express();
const port =  process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200);
    res.send("Cool beans");
});

app.listen(port, () => {
    console.log(`App is up and listening on port ${port}`);
});

module.exports = app;
```
