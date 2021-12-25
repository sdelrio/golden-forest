# ssh client

## Tunnel

### Basic

```bash
ssh  -L:6443:<target_ip>:6443 <user>@<machine_if_ip>
```

### Advanced

```bash
ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -M -S my_tunnel -fnNT -l mysshuser -i $HOME/.ssh/id_rsa -L:6443:<target_ip>:6443 <machine_if_ip>
```

## Generate ed25519 ssh key

```bash
ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519 -C "john@example.com"

ssh-add ~/.ssh/id_ed25519
```

## Generate SSH pub key from priv key

```bash
ssh-keygen -y -f private_key.pem > public_key.pem
```

### References

* <https://lwn.net/Articles/821544/>
* <https://www.unixtutorial.org/how-to-generate-ed25519-ssh-key/>
* <https://medium.com/risan/upgrade-your-ssh-key-to-ed25519-c6e8d60d3c54>

