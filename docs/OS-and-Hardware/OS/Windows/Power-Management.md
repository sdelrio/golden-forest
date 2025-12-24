# Windows Power Management ⚡

This section covers advanced power configuration settings to optimize system performance,
specifically for workstations and gaming environments.

## Ultimate Performance Mode

The **Ultimate Performance** power plan is a hidden scheme in Windows (Pro and Enterprise
versions) designed to eliminate micro-latencies associated with fine-grained power
management techniques. It is particularly useful for heavy workloads where every bit of
CPU responsiveness counts.

### Enabling via CLI

To unlock this mode, open a Command Prompt (CMD) or PowerShell with administrative
privileges and run the following command:

```bash
powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61
```

