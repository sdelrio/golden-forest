
# Docker registry

## API

### Get docker registry content

```bash
curl -X GET http://<ip_docker_registry>:5000/v2/_catalog
```

* Sample 
  ```bash
  curl -s -X GET https://your-k8s-registry.domain.local/v2/_catalog?n=1000 | jq .
  ```
