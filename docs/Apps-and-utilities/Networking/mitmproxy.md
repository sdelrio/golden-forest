---
title: "mitmproxy"
description: "A free and open-source interactive HTTPS proxy for intercepting, inspecting, modifying, and replaying HTTP/HTTPS traffic across CLI, web, and Python API interfaces."
tags: [networking, security, proxy, debugging, mitmproxy]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Accordion from '@site/src/components/Accordion/Accordion';
import AccordionGroup from '@site/src/components/Accordion/AccordionGroup';

# mitmproxy

[mitmproxy](https://mitmproxy.org/) is a free and open-source interactive HTTPS proxy. It lets you intercept, inspect, modify, and replay web traffic such as HTTP/1, HTTP/2, HTTP/3, WebSockets, and any other SSL/TLS-protected protocols. It supports three distinct interfaces — a terminal UI, a web UI, and a Python scripting API — making it a versatile tool for developers, security testers, and network engineers.

## Interfaces

mitmproxy offers three ways to interact with intercepted traffic, each suited to different workflows.

<AccordionGroup>
<Accordion title="CLI (mitmproxy)" icon="console">

An interactive terminal-based UI for real-time traffic inspection. You can filter, search, and modify requests on the fly using keyboard shortcuts. Think of it as `tcpdump` with an interactive layer on top.

```bash
mitmproxy
```

</Accordion>
<Accordion title="Web Interface (mitmweb)" icon="web">

A browser-based GUI similar to Chrome DevTools, but for any application or device. It provides request/response inspection, interception, and replay in a visual interface.

```bash
mitmweb
```

</Accordion>
<Accordion title="Python API (mitmdump)" icon="language-python">

A command-line tool for scripted traffic manipulation. Write Python addons that automatically modify messages, redirect traffic, mock responses, or implement custom logic — ideal for automation and CI/CD pipelines.

```bash
mitmdump -s addon.py
```

A minimal addon example that redirects traffic:

```python
from mitmproxy import http

def request(flow: http.HTTPFlow):
    if flow.request.pretty_host == "example.com":
        flow.request.host = "mitmproxy.org"
```

</Accordion>
</AccordionGroup>

## Installation

:::info
mitmproxy requires Python 3.10 or later.
:::

<Tabs>
<TabItem value="homebrew" label="Homebrew (macOS)">

```bash
brew install mitmproxy
```

</TabItem>
<TabItem value="pip" label="pip">

```bash
pip install mitmproxy
```

</TabItem>
<TabItem value="docker" label="Docker">

```bash
docker run --rm -it -p 8080:8080 mitmproxy/mitmproxy
```

</TabItem>
<TabItem value="binary" label="Pre-built Binaries">

Download installers and binaries from [GitHub Releases](https://github.com/mitmproxy/mitmproxy/releases) for Windows, macOS, and Linux.

</TabItem>
</Tabs>

## Use Cases

- **API Debugging**: Inspect requests and responses between your app and backend services without modifying code.
- **Mobile App Traffic**: Route mobile device traffic through mitmproxy to observe and debug HTTP calls.
- **Security Testing**: Intercept and modify traffic to test for vulnerabilities, auth bypass, or input validation issues.
- **Performance Measurement**: Analyze request timing, payload sizes, and headers to identify bottlenecks.
- **Traffic Mocking**: Return custom responses to simulate server behavior during development or testing.

## Quick Start

Start the proxy on the default port (8080), then point a client at it:

```bash
# Start mitmproxy
mitmproxy

# In another terminal, send traffic through it
curl -x http://127.0.0.1:8080 https://example.com
```

The request will appear in the mitmproxy interface where you can inspect headers, body, and timing. For HTTPS interception, install the mitmproxy CA certificate on your client — run `mitmproxy` once, then visit `mitmproxy.it` from the device to download it.

:::tip
Use `--set flow_detail=2` with `mitmdump` to capture full request and response bodies in saved flow dumps.
:::

## References

- [mitmproxy.org](https://mitmproxy.org/) — Official website
- [Documentation](https://docs.mitmproxy.org/stable/) — Stable docs
- [GitHub Repository](https://github.com/mitmproxy/mitmproxy) — Source code and releases
