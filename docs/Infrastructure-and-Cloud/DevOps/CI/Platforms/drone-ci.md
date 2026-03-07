# Drone CI

## Summary

Drone CI is a modern, cloud-native Continuous Integration and Continuous Deployment (CI/CD) platform developed by Harness. It empowers development teams to automate their build, test, and release workflows through a powerful pipeline engine that executes steps in isolated containers. Unlike traditional CI systems that rely on complex configuration files or proprietary formats, Drone uses a simple, YAML-based syntax that integrates seamlessly with your existing Git repositories.

### Key Benefits

- **Container-Native Execution**: Pipelines run entirely in Docker containers, ensuring consistent environments across development, testing, and production stages.
- **Multi-Platform Support**: Supports various execution environments including Docker, Kubernetes, and Exec runners, making it adaptable to different infrastructure needs.
- **Self-Hosted Flexibility**: Available as both a free, open-source Community Edition and an Enterprise Edition, allowing teams to maintain full control over their CI/CD infrastructure.
- **Extensive Integrations**: Native support for major source control management providers like GitHub, GitLab, Bitbucket, and Gitea, with webhooks for automatic triggering.
- **Scalable Architecture**: Designed for high availability and horizontal scaling, capable of handling large numbers of concurrent pipelines.
- **Security-First Approach**: Implements signature verification for pipelines and supports encrypted secrets management.

### Common Use Cases

- **Automated Testing**: Run unit tests, integration tests, and end-to-end tests automatically on every code change.
- **Build Automation**: Compile applications, package artifacts, and create Docker images as part of the development workflow.
- **Deployment Pipelines**: Automate deployments to staging and production environments with approval gates and rollback capabilities.
- **Multi-Environment Testing**: Test applications across different operating systems, architectures, and runtime versions concurrently.
- **Security Scanning**: Integrate security tools like vulnerability scanners and code quality analyzers into the pipeline.
- **Release Management**: Automate versioning, changelog generation, and release artifact publishing.

## Setup

### Prerequisites
- A publicly accessible server (for webhooks from Git providers)
- Docker installed on the server
- An OAuth application configured with your Git provider (GitHub, GitLab, etc.)

### Installation Steps
1. **Provision a server**: Set up a VM or container with Docker.
2. **Create OAuth app**: In your Git provider, create an OAuth app and note the client ID and secret.
3. **Pull Docker image**: `docker pull drone/drone:2`
4. **Configure environment**: Set environment variables like `DRONE_GITHUB_CLIENT_ID`, `DRONE_GITHUB_CLIENT_SECRET`, `DRONE_RPC_SECRET`, and `DRONE_SERVER_HOST`.
5. **Start server**: Run the Drone server container with the configuration.
6. **Install runner**: Pull and run `drone/drone-runner-docker:1` for Docker-based execution.
7. **Post-install**: Access the web UI, connect your repository, and configure pipelines.

For detailed guides, see:
- [2019: Setting up simple, self-hosted & fast CI/CD solution with Drone.io](https://webhookrelay.com/blog/2019/02/11/using-drone-for-simple-selfhosted-ci-cd/)
- [2019: Explore Gitea-Drone CI/CD on K3s](https://itnext.io/explore-gitea-drone-ci-cd-on-k3s-4a9e99f8b938)
- [2016: Setting Up a Self-hosted drone.io CI Server](http://tleyden.github.io/blog/2016/02/15/setting-up-a-self-hosted-drone-dot-io-ci-server/)

## Key Pipeline Concepts

Drone CI pipelines are defined in a `.drone.yml` file placed in the root of your Git repository. The platform supports multiple pipeline types optimized for different runtime environments:

### Core Concepts

- **Pipelines**: The top-level workflow definition containing one or more steps executed serially or in parallel.
- **Steps**: Individual execution units that run commands in isolated containers, with support for conditional execution.
- **Triggers**: Conditions that determine when a pipeline should execute, based on branch, event type, or custom rules.
- **Secrets**: Encrypted values injected into pipeline steps for sensitive data like API keys or credentials.
- **Services**: Background containers that support the main pipeline steps, such as databases or caches.

### Official Documentation Links

- [Pipeline Overview](https://docs.drone.io/pipeline/overview/): Comprehensive guide to pipeline concepts and execution models.
- [Docker Pipeline Syntax](https://docs.drone.io/pipeline/docker/syntax/): Detailed reference for Docker-based pipeline configuration.
- [Pipeline Triggers](https://docs.drone.io/pipeline/triggers/): Documentation on configuring when pipelines execute.
- [Pipeline Steps](https://docs.drone.io/pipeline/docker/syntax/steps/): Reference for defining and configuring pipeline steps.
- [Environment Variables](https://docs.drone.io/pipeline/environment/): Guide to using environment variables in pipelines.

## Sample Pipeline YAML

Here's a sample `.drone.yml` file demonstrating a basic CI/CD workflow for a Node.js application that builds, tests, and deploys a Docker image:

```yaml
kind: pipeline
type: docker
name: default

steps:
- name: dependencies
  image: node:18
  commands:
  - npm ci

- name: test
  image: node:18
  commands:
  - npm run lint
  - npm test
  depends_on:
  - dependencies

- name: build
  image: node:18
  commands:
  - npm run build
  depends_on:
  - test

- name: docker-build
  image: plugins/docker
  settings:
    repo: myregistry/myapp
    tags:
    - latest
    - ${DRONE_COMMIT_SHA:0:8}
    username:
      from_secret: docker_username
    password:
      from_secret: docker_password
  depends_on:
  - build

- name: deploy-staging
  image: plugins/kubernetes
  settings:
    kubernetes_template: deploy/staging.yaml
    kubernetes_namespace: staging
  depends_on:
  - docker-build
  when:
    branch:
    - develop

- name: deploy-production
  image: plugins/kubernetes
  settings:
    kubernetes_template: deploy/production.yaml
    kubernetes_namespace: production
  depends_on:
  - docker-build
  when:
    branch:
    - main
    event:
    - tag

trigger:
  branch:
  - main
  - develop
  event:
  - push
  - pull_request
  - tag
```

This example demonstrates:
- Sequential step execution with dependencies
- Docker image building and publishing
- Conditional deployment based on branch and event
- Secret management for credentials
- Multi-environment deployment strategy

## Setup Summary

### Prerequisites

- **Docker**: Version 20.10 or later installed on the host system
- **Publicly Accessible Server**: A server or virtual machine with HTTP/HTTPS ports (80/443) open and accessible via domain name or IP address
- **Source Control Provider**: GitHub, GitLab, Bitbucket, or Gitea account with OAuth application configured
- **SSL Certificate**: For production deployments, a valid SSL certificate (can be obtained via Let's Encrypt)

### Installation Steps

1. **Provision Infrastructure**:
   - Choose a cloud provider (AWS, GCP, Azure) or on-premises server
   - Ensure the instance has sufficient CPU, memory, and storage for your expected pipeline load
   - Configure security groups/firewalls to allow inbound traffic on ports 80 and 443

2. **Create OAuth Application**:
   - For GitHub: Go to Settings > Developer settings > OAuth Apps and create a new application
   - Set Authorization callback URL to `https://your-drone-server.com/authorize`
   - Note the Client ID and Client Secret

3. **Generate Shared Secret**:
   ```bash
   openssl rand -hex 16
   ```

4. **Pull Docker Image**:
   ```bash
   docker pull drone/drone:2
   ```

5. **Configure Environment Variables**:
   - `DRONE_GITHUB_CLIENT_ID`: OAuth Client ID
   - `DRONE_GITHUB_CLIENT_SECRET`: OAuth Client Secret
   - `DRONE_RPC_SECRET`: Shared secret for runner authentication
   - `DRONE_SERVER_HOST`: Your server's domain name
   - `DRONE_SERVER_PROTO`: `https` for production
   - `DRONE_USER_FILTER`: Optional comma-separated list of allowed users/organizations

6. **Start Drone Server**:
   ```bash
   docker run \
     --volume=/var/lib/drone:/data \
     --env=DRONE_GITHUB_CLIENT_ID=your-client-id \
     --env=DRONE_GITHUB_CLIENT_SECRET=your-client-secret \
     --env=DRONE_RPC_SECRET=your-shared-secret \
     --env=DRONE_SERVER_HOST=your-drone-server.com \
     --env=DRONE_SERVER_PROTO=https \
     --publish=80:80 \
     --publish=443:443 \
     --restart=always \
     --detach=true \
     --name=drone \
     drone/drone:2
   ```

7. **Install Runners**:
   - Choose appropriate runner type (Docker, Kubernetes, Exec)
   - For Docker runner: `docker pull drone/drone-runner-docker:1`
   - Configure runner with matching RPC secret and server endpoint

8. **Configure SSL/TLS**:
   - Use Let's Encrypt for automatic certificates or provide custom certificates
   - Set `DRONE_TLS_CERT` and `DRONE_TLS_KEY` environment variables if using custom certificates

### Configuration Options

- **Database**: Default is SQLite; configure PostgreSQL or MySQL for production
- **High Availability**: Deploy multiple server instances behind a load balancer
- **User Management**: Configure administrators and user registration policies
- **Extensions**: Enable features like Starlark scripting or GitHub team synchronization

### Post-Installation

1. Access the Drone web interface at your configured domain
2. Authenticate with your source control provider
3. Enable repositories and configure pipelines
4. Set up secrets for sensitive data
5. Test pipeline execution with a sample commit

For detailed installation guides specific to your source control provider, refer to the [official documentation](https://docs.drone.io/server/overview/).

## Additional Resources

- [Drone CI Official Documentation](https://docs.drone.io/)
- [Community Edition Source Code](https://github.com/harness/drone)
- [Plugin Registry](https://plugins.drone.io/)
- [Community Forum](https://community.harness.io/)
