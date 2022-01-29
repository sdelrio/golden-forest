# K8s Linter tools

## Kubelinter

KubeLinter is a static analysis tool that checks Kubernetes YAML files and Helm charts to ensure the applications represented in them adhere to best practices. 

When a lint check fails, KubeLinter reports recommendations for how to resolve any potential issues and returns a non-zero exit code.

### Install

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="brew" label="brew" default>

```bash
brew install kube-linter
```

  </TabItem>
  <TabItem value="binary" label="binary">

Download the latest binary from [Releases](https://github.com/stackrox/kube-linter/releases) and add it to your PATH. 

  </TabItem>
</Tabs>


### References

* [Kubelinter GitHub](https://github.com/stackrox/kube-linter)
* [2020: StackRox KubeLinter Brings Security Linting to Kubernetes](https://thenewstack.io/stackrox-kubelinter-brings-security-linting-to-kubernetes/)
* [Ensuring YAML best practices using KubeLinter](https://www.civo.com/learn/yaml-best-practices-using-kubelinter) at civo.com by Saiyam Pathak.
* [Analyze Kubernetes files for errors with KubeLinter](https://opensource.com/article/21/1/kubelinter) at opensource.com by Jessica Cherry.
* [How to add a new check in KubeLinter?](https://www.psaggu.com/upstream-contribution/2021/08/17/notes.html) by Priyanka Saggu.

