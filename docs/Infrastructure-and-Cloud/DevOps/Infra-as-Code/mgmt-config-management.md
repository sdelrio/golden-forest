---
title: mgmt (Conf Management)
description: A deep dive into mgmt, the distributed, event-driven, and parallel configuration management tool that challenges legacy paradigms.
tags: [devops, infra-as-code, mgmt, configuration-management, distributed-systems, automation]
---

# mgmt: Reactive Infrastructure

Representing a fundamental shift in the world of configuration management (CM), **mgmt** (developed by purpleidea) moves away from periodic polling and centralized orchestration toward a distributed, event-driven, and reactive paradigm.

## Executive Summary

`mgmt` is a next-generation distributed, event-driven, and parallel configuration management tool. It is designed to be algorithmically faster, intrinsically more resilient, and more integrated than traditional "legacy" tools. Rather than simply applying state, `mgmt` models the infrastructure as a living system that reacts to changes in real-time.

## Architecture

To understand `mgmt`, one must look at the three pillars that differentiate it from tools like Ansible, Puppet, or Chef.

### Distributed
Unlike centralized orchestrators that pose a single point of failure, `mgmt` agents can self-coordinate using the **Raft consensus algorithm**. This allows clusters of agents to maintain consistency and high availability without a "master" server dictating operations.

### Event-Driven
Traditional tools generally follow a "check-and-apply" loop, often triggered by a timer (polling). `mgmt` is built on an event-driven engine. It continuously monitors the state of resources (files, services, packages) and reacts *instantly* to deviations or external events. This avoids the CPU waste and latency inherent in polling-based systems.

### Parallelism
`mgmt` executes configuration changes in parallel by default. The engine analyzes dependencies and builds an execution graph where independent resources are processed simultaneously, significantly reducing the "time to convergence."

## Features

### Reactive DSL
The Mgmt Configuration Language (MCL) is a declarative, functional, and reactive Domain-Specific Language. Unlike static YAML or Ruby-based DSLs, MCL treats infrastructure as a stream of values. When a source value changes, only the dependent parts of the configuration are re-evaluated, making it truly reactive.

### Graph Engine
The core engine uses graph theory algorithms to transform declarative code into an optimized execution plan. This includes features like:
- **AutoEdges:** Automatic dependency detection (e.g., ensuring a service waits for its config file).
- **AutoGroup:** Intelligent grouping of similar resources (e.g., batching multiple package installations) to maximize efficiency.

### State Enforcement
Because `mgmt` monitors resources in real-time, it provides a "drift-proof" environment. If a system administrator manually alters a configuration file managed by `mgmt`, the tool detects the change immediately and reverts it to the desired state.

## Comparison: mgmt vs. Legacy IaC

| Feature | mgmt | Ansible / Puppet / Chef |
| :--- | :--- | :--- |
| **Execution Model** | Event-Driven / Reactive | Polling / Procedural |
| **Orchestration** | Distributed (Raft) | Centralized / Master-based |
| **State Monitoring** | Real-time (Continuous) | Periodic (Scheduled) |
| **Performance** | High (Parallel) | Varies (often Sequential) |
| **Resilience** | Decentralized (No SPOF) | Potential SPOF |

## Advanced Capabilities

Beyond standard resource management, `mgmt` extends into:
- **Infrastructure-as-Code for Hardware:** Managing firmware BIOS and low-level system settings.
- **Dynamic Infrastructure:** Seamlessly handling ephemeral workloads and cloud-native services.
- **Cross-Tool Integration:** The ability to consume Puppet-generated graphs as a data source, facilitating migration.

## Ecosystem & Integrations

`mgmt` is designed with extensibility and modern environment integration in mind, moving beyond just managing native OS resources.

### Container Support
`mgmt` features configurable Docker integration and can be built with or without container support. It internally utilizes Docker libraries, allowing it to interact with and manage containerized resources directly as part of the configuration graph.

### SDKs & "Librarification"
Being written in **Go (golang)**, `mgmt` follows a "librarification" philosophy. Instead of just being a standalone binary, it is designed to be used as a library or foundation for other software, effectively serving as an SDK for developers building their own automation tools. While it primarily uses **MCL** for declarative configuration, its plugin-based architecture allows for deep extensibility via Go-based engines and resource types.

## References & Further Reading

- [Official Documentation](https://mgmtconfig.com/docs/)
- [GitHub Repository (purpleidea/mgmt)](https://github.com/purpleidea/mgmt)
- [Mgmt Configuration Language (MCL) Specs](https://github.com/purpleidea/mgmt/blob/master/doc/language.md)
