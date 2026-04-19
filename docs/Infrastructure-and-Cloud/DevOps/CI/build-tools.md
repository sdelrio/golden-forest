# Build Tools

## [Earthly](https://earthly.dev/)

Earthly is a build automation tool that combines the best ideas from Makefiles and Dockerfiles. It allows you to define your build logic in a containerized environment, ensuring that builds are reproducible and isolated from the host system. It is often described as "Makefile + Dockerfile = Earthfile."

### Key Concepts
- **Targets**: Named build steps (e.g., `+build`, `+test`) that can depend on each other.
- **Container Isolation**: Each target runs in its own isolated container, preventing "works on my machine" issues.
- **Artifacts**: Easily export files from containers back to the host system using `SAVE ARTIFACT`.
- **Automatic Caching**: Earthly analyzes your Earthfile to cache layers efficiently, speeding up subsequent builds.

### Basic Usage

1. **Create an `Earthfile`**:
   ```dockerfile
   VERSION 0.8
   FROM alpine:3.18

   build:
       RUN echo "Building..." > build-output.txt
       SAVE ARTIFACT build-output.txt AS LOCAL bin/output.txt

   test:
       FROM +build
       RUN grep "Building" build-output.txt
   ```

2. **Run a target**:
   ```bash
   earthly +test
   ```

## [Dagger](https://dagger.io/)

Dagger is a programmable CI/CD engine that allows you to define your pipelines as code using standard programming languages (Go, Python, TypeScript, etc.) rather than YAML. It runs your pipeline steps in containers, ensuring that "if it works on your machine, it works in CI."

### Key Concepts
- **Cachable by Default**: Every operation is cached automatically, significantly speeding up repeated builds.
- **Client-Side execution**: The Dagger Engine can run locally or on any CI provider.
- **Language SDKs**: Developers can write complex logic using tools they already know (loops, conditionals, testing frameworks).

### Basic Usage

1. **Initialize a module**:
   ```bash
   dagger init --name=mymanager --sdk=typescript
   ```

2. **Run a predefined function from a module**:
   ```bash
   dagger call build --src .
   ```

3. **Develop a simple function (TypeScript example)**:
   ```typescript
   @object()
   class MyManager {
     @func()
     async build(src: Directory): Promise<Container> {
       return dag.container()
         .from("node:20-alpine")
         .withMountedDirectory("/src", src)
         .withWorkdir("/src")
         .withExec(["npm", "install"])
         .withExec(["npm", "run", "build"]);
     }
   }
   ```

## [Mise](https://mise.jdx.dev)

Mise (formerly rtx) is a polyglot tool manager, environment manager, and task runner. It is designed to be a faster, more modern alternative to `asdf` (or nvm or pyenv but for any language), managing multiple versions of runtimes (Node.js, Python, Go, etc.) and project-specific environment variables in a single tool.

### Key Concepts
- **Universal Tooling**: Supports all `asdf` plugins but with significantly better performance (written in Rust).
- **Environment Management**: Automatically loads environment variables when entering a directory.
- **Task Runner**: Built-in support for defining and running project tasks (replacing simple Makefiles or `npm` scripts).

### Basic Usage

1. **Install and use a tool**:
   ```bash
   mise use node@20
   ```

2. **Run a command in a specific environment**:
   ```bash
   mise exec python@3.11 -- python --version
   ```

3. **Define a task in `mise.toml`**:
   ```toml
   [tasks.test]
   run = "go test ./..."
   description = "Run unit tests"
   ```

4. **Run the task**:
   ```bash
   mise run test
   ```

## Comparison

| Tool | Advantages | Disadvantages | GitHub Integration |
| :--- | :--- | :--- | :--- |
| **Earthly** | Simple Makefile-like syntax, container-native, extremely readable build steps, easy artifact export. | Still uses a DSL (not full code), requires Docker daemon, less flexible than programmable CI. | Strong. Runs as a simple CLI step in any CI/CD environment; official GitHub Action available. |
| **Dagger** | Programmable (SDKs), powerful caching, visual traces, local=CI parity, language-agnostic logic. | Requires Docker/BuildKit, learning curve for SDK APIs, newer ecosystem. | Excellent. Official `dagger-for-github` action; native secret management. |
| **Mise** | Extremely fast (Rust), manages runtimes + env + tasks, full `asdf` plugin compatibility. | CLI-focused, requires shell activation hooks for the best developer experience. | Great. `mise-action` allows synchronizing dev tools across local and CI environments. |