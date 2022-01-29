# Tunnes to LAN

## Inlets

Get live traffic to your development machine, just like in production.

inlets was built to run just as well in containers as on bare metal, and scales outs as you grow.

* [Inlets Homepage](https://inlets.dev/)
* [Inlets Doc](https://docs.inlets.dev/)

## Ngrok

Expose a local web server to the internet

* Example: Expose a secure web server on port 5001 of your local machine to the internet

```
ngrok http https://localhost:5001
```

When you start ngrok, it will display a UI in your terminal with the public URL of your tunnel and other status and metrics information about connections made over your tunnel.

* The ngrok console UI

```
ngrok by @inconshreveable

Tunnel Status                 online
Version                       2.0/2.0
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://92832de0.ngrok.io -> localhost:80
Forwarding                    https://92832de0.ngrok.io -> localhost:80

Connnections                  ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

* [Ngrok Homepage](https://ngrok.com/)
* [Ngrok Doc](https://ngrok.com/docs)

## Cloudflared tunnel

Cloudflare Tunnel provides you with a secure way to connect your resources to Cloudflare without a publicly routable IP address. With Tunnel, you do not send traffic to an external IP — instead, a lightweight daemon in your infrastructure (cloudflared) creates outbound-only connections to Cloudflare’s edge. Cloudflare Tunnel can connect HTTP web servers, SSH servers, remote desktops, and other protocols safely to Cloudflare. This way, your origins can serve traffic through Cloudflare without being vulnerable to attacks that bypass Cloudflare.

* <https://developers.cloudflare.com/cloudflare-one/connections/connect-apps>

## UltraHook

Receive webhooks on localhost trough all firewalls

* [UltraHook Homepage](https://www.ultrahook.com/)

```bash
$ gem install ultrahook
$ ultrahook stripe 5000
Authenticated as senvee
Forwarding activated...
https://senvee-stripe.ultrahook.com -> http://localhost:5000
```

## TincVPN

* [Homepage TincVPN](https://tinc-vpn.org/)
* [Article home server without port forward](https://jordancrawford.kiwi/home-server-without-portforward/)
  * <https://jordancrawford.kiwi/setting-up-tinc/>

