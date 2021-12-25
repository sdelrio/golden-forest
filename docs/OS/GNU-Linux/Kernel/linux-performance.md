# Linux Performance

![Observability Tools](https://brendangregg.com/Perf/linux_observability_tools.png)

## References

* [Linux Performance](http://brendangregg.com/linuxperf.html)

## kswapd

### kswapd taking lot of cpu

```bash
echo 1 > /proc/sys/vm/drop_caches
```

* <https://askubuntu.com/questions/259739/kswapd0-is-taking-a-lot-of-cpu>
