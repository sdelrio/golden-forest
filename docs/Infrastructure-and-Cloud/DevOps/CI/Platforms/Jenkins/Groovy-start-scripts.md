# Groovy scripts

## Jenkins server configuration

* [Usefull jenkins groovy init scripts](https://github.com/hayderimran7/useful-jenkins-groovy-init-scripts/blob/master/init.groovy): A script that setups and configure Jenkins with a script, non-interactive mode.

* [Automated Jenkins CI env which provisions agent infra on the fly per build](https://github.com/samrocketman/jenkins-bootstrap-jervis): Bootstrap Jenkins using Jervis (Jenkins as a Service)

* [mvanholsteijn/docker-makefile](https://github.com/mvanholsteijn/docker-makefile/blob/master/Makefile): Makefile for building docker repository releases

## [Activate user roles](https://gist.github.com/mllrjb/ccfd3315b7546ae8e8382ff693b34d7f)


Set a system environment variable AUTHZ_JSON_URL that points to a JSON file with the following structure:

```json
{
  "admins": [
    "groupA", 
    "userA"
  ],
  "builders": [
    "groupB",
    "userB"
  ],
  "readers": ["anonymous"]
}
```

If you don't specify a URL, it will just grant admin access to anonymous.

* `role-authz.groovy`

```javascript
import hudson.*
import hudson.security.*
import jenkins.model.*
import java.util.*
import com.michelin.cio.hudson.plugins.rolestrategy.*
import com.synopsys.arc.jenkins.plugins.rolestrategy.*
import java.lang.reflect.*
import java.util.logging.*
import groovy.json.*

def env = System.getenv()

/**
 * ===================================
 *         
 *                Roles
 *
 * ===================================
 */
def globalRoleRead = "read"
def globalBuildRole = "build"
def globalRoleAdmin = "admin"

/**
 * ===================================
 *         
 *           Users and Groups
 *
 * ===================================
 */
def access = [
  admins: ["anonymous"],
  builders: [],
  readers: []
]

if (env.AUTHZ_JSON_FILE)  {
  println "Get role authorizations from file ${env.AUTHZ_JSON_FILE}"
  File f = new File(env.AUTHZ_JSON_FILE)
  def jsonSlurper = new JsonSlurper()
  def jsonText = f.getText()
  access = jsonSlurper.parseText( jsonText )
}
else if (env.AUTH_JSON_URL) {
  println "Get role authorizations from URL ${env.AUTHZ_JSON_URL}"
  URL jsonUrl = new URL(env.AUTHZ_JSON_URL);
  access = new JsonSlurper().parse(jsonUrl);
}
else {
  println "Warning! Neither env.AUTHZ_JSON_FILE nor env.AUTHZ_JSON_URL specified!"
  println "Granting anonymous admin access"
} 

/**
 * ===================================
 *         
 *           Permissions
 *
 * ===================================
 */

// drive these from a config file
def adminPermissions = [
"hudson.model.Hudson.Administer",
"hudson.model.Hudson.Read"
]

def readPermissions = [
"hudson.model.Hudson.Read",
"hudson.model.Item.Discover",
"hudson.model.Item.Read"
]

def buildPermissions = [
"hudson.model.Hudson.Read",
"hudson.model.Item.Build",
"hudson.model.Item.Cancel",
"hudson.model.Item.Read",
"hudson.model.Run.Replay"
]

def roleBasedAuthenticationStrategy = new RoleBasedAuthorizationStrategy()
Jenkins.instance.setAuthorizationStrategy(roleBasedAuthenticationStrategy)


/**
 * ===================================
 *         
 *               HACK
 * Inspired by https://issues.jenkins-ci.org/browse/JENKINS-23709
 * Deprecated by on https://github.com/jenkinsci/role-strategy-plugin/pull/12
 *
 * ===================================
 */

Constructor[] constrs = Role.class.getConstructors();
for (Constructor<?> c : constrs) {
  c.setAccessible(true);
}

// Make the method assignRole accessible
Method assignRoleMethod = RoleBasedAuthorizationStrategy.class.getDeclaredMethod("assignRole", RoleType.class, Role.class, String.class);
assignRoleMethod.setAccessible(true);
println("HACK! changing visibility of RoleBasedAuthorizationStrategy.assignRole")

/**
 * ===================================
 *         
 *           Permissions
 *
 * ===================================
 */

Set<Permission> adminPermissionSet = new HashSet<Permission>();
adminPermissions.each { p ->
  def permission = Permission.fromId(p);
  if (permission != null) {
    adminPermissionSet.add(permission);
  } else {
    println("${p} is not a valid permission ID (ignoring)")
  }
}

Set<Permission> buildPermissionSet = new HashSet<Permission>();
buildPermissions.each { p ->
  def permission = Permission.fromId(p);
  if (permission != null) {
    buildPermissionSet.add(permission);
  } else {
    println("${p} is not a valid permission ID (ignoring)")
  }
}

Set<Permission> readPermissionSet = new HashSet<Permission>();
readPermissions.each { p ->
  def permission = Permission.fromId(p);
  if (permission != null) {
    readPermissionSet.add(permission);
  } else {
    println("${p} is not a valid permission ID (ignoring)")
  }
}

/**
 * ===================================
 *         
 *      Permissions -> Roles
 *
 * ===================================
 */

// admins
Role adminRole = new Role(globalRoleAdmin, adminPermissionSet);
roleBasedAuthenticationStrategy.addRole(RoleType.Global, adminRole);

// builders
Role buildersRole = new Role(globalBuildRole, buildPermissionSet);
roleBasedAuthenticationStrategy.addRole(RoleType.Global, buildersRole);

// anonymous read
Role readRole = new Role(globalRoleRead, readPermissionSet);
roleBasedAuthenticationStrategy.addRole(RoleType.Global, readRole);

/**
 * ===================================
 *         
 *      Roles -> Groups/Users
 *
 * ===================================
 */

access.admins.each { l ->
  println("Granting admin to ${l}")
  roleBasedAuthenticationStrategy.assignRole(RoleType.Global, adminRole, l);  
}

access.builders.each { l ->
  println("Granting builder to ${l}")
  roleBasedAuthenticationStrategy.assignRole(RoleType.Global, buildersRole, l);  
}

access.readers.each { l ->
  println("Granting read to ${l}")
  roleBasedAuthenticationStrategy.assignRole(RoleType.Global, readRole, l);  
}

Jenkins.instance.save()
```


## [LDAP groups roles](https://github.com/Accenture/adop-jenkins/blob/master/resources/init.groovy.d/role_based_auth.groovy)

* https://www.google.es/search?q=groovy+enable+Role+Strategy+Plugin

```javascript
import hudson.*
import hudson.model.*
import hudson.security.*
import jenkins.*
import jenkins.model.*
import java.util.*
import com.michelin.cio.hudson.plugins.rolestrategy.*
import java.lang.reflect.*

def env = System.getenv()

// Roles
def globalRoleRead = "read"
def globalRoleAdmin = "admin"
def ldapGroupNameAdmin = env['LDAP_GROUP_NAME_ADMIN'] ?: "administrators"

def jenkinsInstance = Jenkins.getInstance()
def currentAuthenticationStrategy = Hudson.instance.getAuthorizationStrategy()

Thread.start {
    sleep 15000
    if (currentAuthenticationStrategy instanceof RoleBasedAuthorizationStrategy) {
      println "Role based authorisation already enabled."
      println "Exiting script..."
      return
    } else {
      println "Enabling role based authorisation strategy..."
    }

    // Set new authentication strategy
    RoleBasedAuthorizationStrategy roleBasedAuthenticationStrategy = new RoleBasedAuthorizationStrategy()
    jenkinsInstance.setAuthorizationStrategy(roleBasedAuthenticationStrategy)

    Constructor[] constrs = Role.class.getConstructors();
    for (Constructor<?> c : constrs) {
      c.setAccessible(true);
    }

    // Make the method assignRole accessible
    Method assignRoleMethod = RoleBasedAuthorizationStrategy.class.getDeclaredMethod("assignRole", String.class, Role.class, String.class);
    assignRoleMethod.setAccessible(true);

    // Create admin set of permissions
    Set<Permission> adminPermissions = new HashSet<Permission>();
    adminPermissions.add(Permission.fromId("hudson.model.View.Delete"));
    adminPermissions.add(Permission.fromId("hudson.model.Computer.Connect"));
    adminPermissions.add(Permission.fromId("hudson.model.Run.Delete"));
    adminPermissions.add(Permission.fromId("hudson.model.Hudson.UploadPlugins"));
    adminPermissions.add(Permission.fromId("com.cloudbees.plugins.credentials.CredentialsProvider.ManageDomains"));
    adminPermissions.add(Permission.fromId("hudson.model.Computer.Create"));
    adminPermissions.add(Permission.fromId("hudson.model.View.Configure"));
    adminPermissions.add(Permission.fromId("hudson.model.Hudson.ConfigureUpdateCenter"));
    adminPermissions.add(Permission.fromId("hudson.model.Computer.Build"));
    adminPermissions.add(Permission.fromId("hudson.model.Item.Configure"));
    adminPermissions.add(Permission.fromId("hudson.model.Hudson.Administer"));
    adminPermissions.add(Permission.fromId("hudson.model.Item.Cancel"));
    adminPermissions.add(Permission.fromId("hudson.model.Item.Read"));
    adminPermissions.add(Permission.fromId("com.cloudbees.plugins.credentials.CredentialsProvider.View"));
    adminPermissions.add(Permission.fromId("hudson.model.Computer.Delete"));
    adminPermissions.add(Permission.fromId("hudson.model.Item.Build"));
    adminPermissions.add(Permission.fromId("hudson.scm.SCM.Tag"));
    adminPermissions.add(Permission.fromId("hudson.model.Item.Discover"));
    adminPermissions.add(Permission.fromId("hudson.model.Hudson.Read"));
    adminPermissions.add(Permission.fromId("com.cloudbees.plugins.credentials.CredentialsProvider.Update"));
    adminPermissions.add(Permission.fromId("hudson.model.Item.Create"));
    adminPermissions.add(Permission.fromId("hudson.model.Item.Move"));
    adminPermissions.add(Permission.fromId("hudson.model.Item.Workspace"));
    adminPermissions.add(Permission.fromId("com.cloudbees.plugins.credentials.CredentialsProvider.Delete"));
    adminPermissions.add(Permission.fromId("hudson.model.View.Read"));
    adminPermissions.add(Permission.fromId("hudson.model.Hudson.RunScripts"));
    adminPermissions.add(Permission.fromId("hudson.model.View.Create"));
    adminPermissions.add(Permission.fromId("hudson.model.Item.Delete"));
    adminPermissions.add(Permission.fromId("hudson.model.Computer.Configure"));
    adminPermissions.add(Permission.fromId("com.cloudbees.plugins.credentials.CredentialsProvider.Create"));
    adminPermissions.add(Permission.fromId("hudson.model.Computer.Disconnect"));
    adminPermissions.add(Permission.fromId("hudson.model.Run.Update"));

    // Create the admin Role
    Role adminRole = new Role(globalRoleAdmin, adminPermissions);
    roleBasedAuthenticationStrategy.addRole(RoleBasedAuthorizationStrategy.GLOBAL, adminRole);

    // Assign the role
    roleBasedAuthenticationStrategy.assignRole(RoleBasedAuthorizationStrategy.GLOBAL, adminRole, ldapGroupNameAdmin);
    println "Admin role created...OK"

    /// Read access for authenticated users
    // Create permissions
    Set<Permission> authenticatedPermissions = new HashSet<Permission>();
    authenticatedPermissions.add(Permission.fromId("hudson.model.Hudson.Read"));
    authenticatedPermissions.add(Permission.fromId("hudson.model.View.Read"));

    Role authenticatedRole = new Role(globalRoleRead, authenticatedPermissions);
    roleBasedAuthenticationStrategy.addRole(RoleBasedAuthorizationStrategy.GLOBAL, authenticatedRole);

    // Assign the role
    roleBasedAuthenticationStrategy.assignRole(RoleBasedAuthorizationStrategy.GLOBAL, authenticatedRole, 'authenticated');
    println "Read role created...OK"

    // Save the state
    println "Saving changes."
    jenkinsInstance.save()
}
```

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

