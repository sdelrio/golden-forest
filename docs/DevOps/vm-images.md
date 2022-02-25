# VM base images

## Tools

### Packer

Build automated machine images.

Create identical machine images for multiple platforms from a single source configuration.

* [Packer Homepage](https://www.packer.io/)
* [Packer templates: Add more verbosity to shell provisioners](https://pet2cattle.com/2022/01/packer-shell-provisioners-verbosity)

We can change `script` to `inline` by adding the `-x` flag to enable further verbosity:
```json
(...)
  "provisioners": [
  {
    "type": "shell",
    "inline": ["/bin/bash -x /opt/provisioners/example_script.sh"]
  }],
(...)
```




## Articles

* [Baking delicious cloud instances](https://blog.kintoandar.com/2017/06/Baking-delicious-cloud-instances.html)
