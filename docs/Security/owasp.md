---
title: "OWASP"
description: "Open Web Application Security Project - Top 10, Cheat Sheet Series, ASVS, and Proactive Controls for building and verifying secure applications."
tags:
  - security
  - owasp
  - appsec
  - web
  - vulnerabilities
  - top10
---

import Card from '@site/src/components/Card/Card';
import CardGroup from '@site/src/components/Card/CardGroup';

# OWASP

The **Open Web Application Security Project (OWASP)** is a nonprofit foundation that improves software security through open, freely available resources: articles, methodologies, documentation, tools, and technologies. Since 2003 it has published the [Top 10 project](https://owasp.org/www-project-top-ten/), a broad-consensus list of the most critical security risks facing organizations.

This article covers the four resources that matter most day to day: the **Top 10**, the **Cheat Sheet Series**, the **ASVS**, and the **Proactive Controls**.

## OWASP Top 10

The Top 10 is a standard awareness document for developers and web application security. The current release is **Top 10:2025**.

| ID | Risk | Focus |
|----|------|-------|
| [A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/) | Broken Access Control | Missing or weak authorization checks |
| [A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/) | Security Misconfiguration | Insecure defaults, exposed services, verbose errors |
| [A03:2025](https://owasp.org/Top10/2025/A03_2025-Software_Supply_Chain_Failures/) | Software Supply Chain Failures | Compromised or unverified dependencies and build steps |
| [A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/) | Cryptographic Failures | Weak or missing encryption at rest and in transit |
| [A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/) | Injection | Untrusted data interpreted as code (SQL, OS, LDAP, XSS) |
| [A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/) | Insecure Design | Missing threat modeling and secure design patterns |
| [A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/) | Authentication Failures | Weak credential, session, and MFA handling |
| [A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/) | Software or Data Integrity Failures | Unverified updates, deserialization, CI/CD integrity |
| [A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/) | Security Logging and Alerting Failures | Missing detection and response signals |
| [A10:2025](https://owasp.org/Top10/2025/A10_2025-Mishandling_of_Exceptional_Conditions/) | Mishandling of Exceptional Conditions | Poor error and edge-case handling leaking or failing open |

:::note
The [2021 edition](https://owasp.org/Top10/2021/) is still widely referenced. The Cheat Sheet Series mapping index below is built around the 2021 categories, which remain useful as a checklist even after the 2025 reshuffle (SSRF folded into Broken Access Control, Supply Chain promoted to A03, and Mishandling of Exceptional Conditions added at A10).
:::

There are domain-specific variants for other platforms:

* [OWASP Kubernetes Top Ten](https://owasp.org/www-project-kubernetes-top-ten/)
* [OWASP API Security Top 10](https://owasp.org/API-Security/editions/2023/en/0x00-header/)
* [OWASP Mobile Top 10](https://owasp.org/www-project-mobile-top-10/)

## OWASP Cheat Sheet Series

The [Cheat Sheet Series](https://cheatsheetseries.owasp.org/) is a concise collection of high-value guidance on specific application security topics, written by practitioners and maintained in the [OWASP/CheatSheetSeries](https://github.com/OWASP/CheatSheetSeries) repository. Each cheat sheet is a self-contained reference for one topic, so it doubles as a review checklist.

The project organises its ~130 cheat sheets through four indices:

| Index | Purpose |
|-------|---------|
| [Top 10](https://cheatsheetseries.owasp.org/IndexTopTen.html) | Maps each Top 10 category to its relevant cheat sheets |
| [ASVS](https://cheatsheetseries.owasp.org/IndexASVS.html) | Maps cheat sheets to Application Security Verification Standard requirements |
| [MASVS](https://cheatsheetseries.owasp.org/IndexMASVS.html) | Maps cheat sheets to mobile application security requirements |
| [Proactive Controls](https://cheatsheetseries.owasp.org/IndexProactiveControls.html) | Maps cheat sheets to the ten proactive security controls |

## Application Security Verification Standard (ASVS)

The [ASVS](https://owasp.org/www-project-application-security-verification-standard/) is a framework of security requirements used to design, build, and test applications. Version 5.0 is organised into 17 chapters:

* **V1** Encoding and Sanitization
* **V2** Validation and Business Logic
* **V3** Web Frontend Security
* **V4** API and Web Service
* **V5** File Handling
* **V6** Authentication
* **V7** Session Management
* **V8** Authorization
* **V9** Self-contained Tokens
* **V10** OAuth and OIDC
* **V11** Cryptography
* **V12** Secure Communication
* **V13** Configuration
* **V14** Data Protection
* **V15** Secure Coding and Architecture
* **V16** Security Logging and Error Handling
* **V17** WebRTC

Use the [ASVS index](https://cheatsheetseries.owasp.org/IndexASVS.html) to jump from a requirement chapter straight to the matching cheat sheets.

## Proactive Controls

The [Proactive Controls](https://top10proactive.owasp.org/) are ten security techniques to include in every software project, ordered by importance. Control C1 is the most fundamental.

| ID | Control |
|----|---------|
| [C1](https://cheatsheetseries.owasp.org/IndexProactiveControls.html#c1-define-security-requirements) | Define Security Requirements |
| [C2](https://cheatsheetseries.owasp.org/IndexProactiveControls.html#c2-leverage-security-frameworks-and-libraries) | Leverage Security Frameworks and Libraries |
| [C3](https://cheatsheetseries.owasp.org/IndexProactiveControls.html#c3-secure-database-access) | Secure Database Access |
| [C4](https://cheatsheetseries.owasp.org/IndexProactiveControls.html#c4-encode-and-escape-data) | Encode and Escape Data |
| [C5](https://cheatsheetseries.owasp.org/IndexProactiveControls.html#c5-validate-all-inputs) | Validate All Inputs |
| [C6](https://cheatsheetseries.owasp.org/IndexProactiveControls.html#c6-implement-digital-identity) | Implement Digital Identity |
| [C7](https://cheatsheetseries.owasp.org/IndexProactiveControls.html#c7-enforce-access-controls) | Enforce Access Controls |
| [C8](https://cheatsheetseries.owasp.org/IndexProactiveControls.html#c8-protect-data-everywhere) | Protect Data Everywhere |
| [C9](https://cheatsheetseries.owasp.org/IndexProactiveControls.html#c9-implement-security-logging-and-monitoring) | Implement Security Logging and Monitoring |
| [C10](https://cheatsheetseries.owasp.org/IndexProactiveControls.html#c10-handle-all-errors-and-exceptions) | Handle All Errors and Exceptions |

## Notable Cheat Sheets

A curated starting set from the series, grouped by concern.

### Injection and Input

<CardGroup cols={2}>
  <Card title="Injection Prevention" icon="shield-alert" href="https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html">
    Prevent untrusted data being interpreted as code across interpreters.
  </Card>
  <Card title="Cross Site Scripting Prevention" icon="code-tags" href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html">
    Context-aware output encoding rules for every HTML/JS/CSS sink.
  </Card>
  <Card title="SQL Injection Prevention" icon="database" href="https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html">
    Parameterized queries and defense-in-depth for database access.
  </Card>
  <Card title="Input Validation" icon="form-textbox" href="https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html">
    Allow-list validation and canonicalization strategies.
  </Card>
</CardGroup>

### Identity and Access

<CardGroup cols={2}>
  <Card title="Authentication" icon="account-key" href="https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html">
    Password storage, MFA, and account management controls.
  </Card>
  <Card title="Authorization" icon="account-lock" href="https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html">
    Enforce least privilege on every request, not just the UI.
  </Card>
  <Card title="Session Management" icon="cookie" href="https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html">
    Session IDs, cookies, timeouts, and renewal.
  </Card>
  <Card title="Password Storage" icon="lock" href="https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html">
    Argon2id, scrypt, bcrypt, and migration guidance.
  </Card>
</CardGroup>

### Data and Cryptography

<CardGroup cols={2}>
  <Card title="Cryptographic Storage" icon="safe" href="https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html">
    Algorithm selection and key handling for stored data.
  </Card>
  <Card title="Secrets Management" icon="key-variant" href="https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html">
    Storing, rotating, and auditing application secrets.
  </Card>
  <Card title="Transport Layer Security" icon="transfer-right" href="https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html">
    TLS configuration, cipher suites, and HSTS.
  </Card>
  <Card title="Key Management" icon="key-chain" href="https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html">
    Key lifecycle, storage, rotation, and separation.
  </Card>
</CardGroup>

### Configuration and Infrastructure

<CardGroup cols={2}>
  <Card title="Docker Security" icon="docker" href="https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html">
    Harden images, runtimes, and container networking.
  </Card>
  <Card title="Kubernetes Security" icon="kubernetes" href="https://cheatsheetseries.owasp.org/cheatsheets/Kubernetes_Security_Cheat_Sheet.html">
    RBAC, network policy, secrets, and admission control.
  </Card>
  <Card title="Infrastructure as Code Security" icon="server-security" href="https://cheatsheetseries.owasp.org/cheatsheets/Infrastructure_as_Code_Security_Cheat_Sheet.html">
    Keep provisioning templates secure and reviewed.
  </Card>
  <Card title="Software Supply Chain Security" icon="package-variant-closed" href="https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html">
    SBOMs, dependency pinning, and artifact integrity.
  </Card>
</CardGroup>

### Process and Observability

<CardGroup cols={2}>
  <Card title="Threat Modeling" icon="sitemap" href="https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html">
    Find design flaws before writing code.
  </Card>
  <Card title="Secure Code Review" icon="magnify-scan" href="https://cheatsheetseries.owasp.org/cheatsheets/Secure_Code_Review_Cheat_Sheet.html">
    A structured approach to reviewing code for security.
  </Card>
  <Card title="Logging" icon="text-box-search" href="https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html">
    What to log, what to redact, and how to protect logs.
  </Card>
  <Card title="Error Handling" icon="alert-octagon" href="https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html">
    Fail securely without leaking internals.
  </Card>
</CardGroup>

### AI and LLM Systems

<CardGroup cols={2}>
  <Card title="LLM Prompt Injection Prevention" icon="robot-confused" href="https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html">
    Defend against direct and indirect prompt injection.
  </Card>
  <Card title="AI Agent Security" icon="robot" href="https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html">
    Sandboxing, permissions, and tool-use boundaries for agents.
  </Card>
  <Card title="MCP Security" icon="connection" href="https://cheatsheetseries.owasp.org/cheatsheets/MCP_Security_Cheat_Sheet.html">
    Securing Model Context Protocol servers and clients.
  </Card>
  <Card title="Secure Coding with AI" icon="robot-happy" href="https://cheatsheetseries.owasp.org/cheatsheets/Secure_Coding_with_AI_Cheat_Sheet.html">
    Using AI assistants without introducing new weak points.
  </Card>
</CardGroup>

## References

* [About OWASP Foundation](https://owasp.org/about/)
* [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
* [Cheat Sheet Series GitHub Repository](https://github.com/OWASP/CheatSheetSeries)
* [OWASP Top 10:2025](https://owasp.org/Top10/2025/)
* [OWASP Top 10:2021](https://owasp.org/Top10/2021/)
* [Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)
* [OWASP Proactive Controls](https://top10proactive.owasp.org/)
* [OWASP Kubernetes Top Ten](https://owasp.org/www-project-kubernetes-top-ten/)
* [Wikipedia OWASP](https://es.wikipedia.org/wiki/Open_Web_Application_Security_Project)
* [2021 Top 10 summary](https://thenewstack.io/owasp-top-10-a-guide-to-the-worst-software-vulnerabilities/)
