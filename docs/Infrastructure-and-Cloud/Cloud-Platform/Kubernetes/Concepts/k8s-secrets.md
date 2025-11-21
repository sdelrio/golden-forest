# K8s Secrets

A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key. Such information might otherwise be put in a Pod specification or in a container image. Using a Secret means that you don't need to include confidential data in your application code.

By default, secrets are stored in etcd (or the storage used in k8s) encoded in base64 format. This cannot be safe for many kind of deployment, but we have some other ways to use credentials in a GitOps environments like Sealed Secrets or Vault injectors.

## Bitnami's Sealed Secrets

* [Secure GitOps Using Weave Cloud Deploy and Bitnami's Sealed Secrets](https://engineering.bitnami.com/articles/secure-gitops.html)

## Hashicorp Vault Injector

* [Vault Agent Injector Examples](https://www.vaultproject.io/docs/platform/k8s/injector/examples)

## Banzai's Vault Injector

Most versatile and easy to use from the developers point of view. It can be tricky to install but once is done, it make it easy to delegate to the gitops repo the credentials configuration through environment vars.

The mutating webhook of Bank-Vaults is a solution that bypasses the Kubernetes secrets mechanism and injects the secrets retrieved from Vault directly into the Pods. Specifically, the mutating admission webhook injects (in a very non-intrusive way) an executable into containers of Deployments and StatefulSets. This executable can request secrets from Vault through special environment variable definitions.

* [Mutating Webook](https://banzaicloud.com/docs/bank-vaults/mutating-webhook/)
* [Vault Secrets Webhook - Helm Chart](https://artifacthub.io/packages/helm/banzaicloud-stable/vault-secrets-webhook )

## [Kubernetes external secrets](https://github.com/external-secrets/kubernetes-external-secrets)

Integrate external secret management systems with Kubernetes.

:::warning
This project was deprecated and replaced by an operator ([ESO](./k8s-secrets#eso-external-secrets-operator) External Secrets Operator)
:::

### [Backends](https://github.com/external-secrets/kubernetes-external-secrets#backends)

* AWS based backends
* AWS SSM Parameter Store
* Akeyless Vault
* Hashicorp Vault
* Azure Key Vault
* Alibaba Cloud KMS Secret Manager
* GCP Secret Manager
* IBM Cloud Secrets Manager
* Binary Secrets

## [ESO](https://github.com/external-secrets/external-secrets) (External Secrets Operator)

External Secrets Operator reads information from a third-party service like AWS Secrets Manager and automatically injects the values as Kubernetes Secrets. 

### [Backends](https://github.com/external-secrets/external-secrets#supported-backends)

* AWS Secrets Manager
* AWS Parameter Store
* Akeyless
* Hashicorp Vault
* Google Cloud Secrets Manager
* Azure Key Vault
* IBM Cloud Secrets Manager
* Yandex Lockbox
* Gitlab Project Variables
* Alibaba Cloud KMS
* Oracle Vault
* Generic Webhook

### References

* [Documentation](https://external-secrets.io/v0.4.4/)
* [GitHub](https://github.com/external-secrets/external-secrets)

