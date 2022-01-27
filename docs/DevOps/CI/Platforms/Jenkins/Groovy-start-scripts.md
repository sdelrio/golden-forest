# Jenkins Groovy scripts

## Jenkins server configuration
* [Usefull jenkins groovy init scripts](https://github.com/hayderimran7/useful-jenkins-groovy-init-scripts/blob/master/init.groovy): A script that setups and configure Jenkins with a script, non-interactive mode.

* [Automated Jenkins CI env which provisions agent infra on the fly per build](https://github.com/samrocketman/jenkins-bootstrap-jervis): Bootstrap Jenkins using Jervis (Jenkins as a Service)

* [mvanholsteijn/docker-makefile](https://github.com/mvanholsteijn/docker-makefile/blob/master/Makefile): Makefile for building docker repository releases

## Load an extra Jenkinsfile

* [Jenkinsworld 2017 sample app](https://github.com/NET-A-PORTER/jenkinsworld-2017-sample-app/blob/master/Jenkinsfile): Load a `path/Jenkinsfile` inside a `Jenkinsfile`.

```javascript
node {
    checkout scm

    echo env.JENKINS_URL
    if(env.JENKINS_URL ==~ /.*central-pipeline.*/) {
        echo "loading central"
        load "central/Jenkinsfile"
    } else {
        echo "loading local"
        load "local/Jenkinsfile"
    }
}()
```

## [Groovy file check](https://stackoverflow.com/questions/39262999/groovy-file-check)

  * `file.exists()` to check if the file exists on the filesystem 
  * `file.readable()` to check if it can be read by the application.
  * `JSONSlurper` to parse the file and catch `JSONException` if the json is invalid:

```javascript
import groovy.json.*

def filePath = "/tmp/file.json"

def file = new File(filePath)

assert file.exists() : "file not found"
assert file.canRead() : "file cannot be read"

def jsonSlurper = new JsonSlurper()
def object

try {
  object = jsonSlurper.parse(file)
} catch (JsonException e) {
  println "File is not valid"
  throw e
}

println object
```

To pass the file path argument from the command line, replace def filePath = "/tmp/file.json" with

```javascript
assert args.size == 1 : "missing file to parse"
def filePath = args[0]
```

and execute on the command line groovy parse.groovy `/tmp/file.json`

## [Groovy environment vars](https://stackoverflow.com/questions/21236268/access-to-build-environment-variables-from-a-groovy-script-in-a-jenkins-build-st)

### General enviornment vars

Vars like `BASE`

```
System.getenv("BASE")
```

## Build environment vars

To get vars like `JOB_NAME`

```
def myVar = build.getEnvironment(listener).get('myVar')
```

## [Jenkins OK/Cancel button](https://support.cloudbees.com/hc/en-us/articles/226554067-Pipeline-How-to-add-an-input-step-with-timeout-that-continues-if-timeout-is-reached-using-a-default-value)

```javascript
def userInput = true
def didTimeout = false
try {
    timeout(time: 15, unit: 'SECONDS') { // change to a convenient timeout for you
        userInput = input(
        id: 'Proceed1', message: 'Was this successful?', parameters: [
        [$class: 'BooleanParameterDefinition', defaultValue: true, description: '', name: 'Please confirm you agree with this']
        ])
    }
} catch(err) { // timeout reached or input false
    def user = err.getCauses()[0].getUser()
    if('SYSTEM' == user.toString()) { // SYSTEM means timeout.
        didTimeout = true
    } else {
        userInput = false
        echo "Aborted by: [${user}]"
    }
}

node {
    if (didTimeout) {
        // do something on timeout
        echo "no input was received before timeout"
    } else if (userInput == true) {
        // do something
        echo "this was successful"
    } else {
        // do something else
        echo "this was not successful"
        currentBuild.result = 'FAILURE'
    }
}
```

