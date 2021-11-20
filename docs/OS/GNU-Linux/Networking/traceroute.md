# Traceroute

Network diagnostics comand line tool. It shows the routing path to reach the target domain/IP.

```bash
Usage:
  traceroute [ -46dFITnreAUDV ] [ -f first_ttl ] [ -g gate,... ] [ -i device ] [ -m max_ttl ] [ -N squeries ] [ -p port ] [ -t tos ] [ -l flow_label ] [ -w MAX,HERE,NEAR ] [ -q nqueries ] [ -s src_addr ] [ -z sendwait ] [ --fwmark=num ] host [ packetlen ]
```

## Get more information

```bash
echo 0 > /proc/sus/net/ipv4/conf/all/rp_filter
```

