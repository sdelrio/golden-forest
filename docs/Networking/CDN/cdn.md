---
sidebar_position: 1
---
# Content Delivery Network

A distributed group of servers (network) geographic distributed to offer a fast delivery of static content using internet. The goal is to provide high performance to the end users. CDN existance began in late 1990s

## How to implement

* [2020: Guide for Cahing and HTTP Cache Headeres for Static Content](https://imagekit.io/blog/ultimate-guide-to-http-caching-for-static-assets/):
  * How does Caching Work?
  * Caching with CDN in play
  * Best practices for cache control
    * The `Expires` header
    * The Cache control `max-age` directive
    * `public` vs `private` Cache-Control directive
    * Setting Optimal Cache Lifetime
    * Cache content Validation: `ETag`and `Last-Modified`
    * Ensuring fresh content is served - Fingeprints in the URLs
      * WebPack: [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin#long-term-caching)
      * Gulp: [`gulp-cache-bust`](https://www.npmjs.com/package/gulp-cache-bust)
    * Improving cache hit ratio on the CDN
    * Use `Vary` header responsibly
    * How to Invalidate CAche
    * Purge from CDN

* [2020: Video - Build your own CDN in under 1h | DZone webinar by Varnish software](https://www.youtube.com/watch?v=MUIGehj3s1Y) (Route53 + Varnish cloud)
* [2019: How to build your own CDN with Kubernets](https://blog.insightdatascience.com/how-to-build-your-own-cdn-with-kubernetes-5cab00d5c258) (KubeCDN)
* [2018: Building your own CDN for Fun and Profit](https://debugged.it/blog/building-your-own-cdn/)
* [2016: Adding and Leveragin a CDN on your website](https://css-tricks.com/adding-a-cdn-to-your-website/)
* [2010: Google CDN Naming Conventions](https://css-tricks.com/google-cdn-naming/)

* [2009: Hash Javascrit for better cahing and less breakage on updates](https://blog.greenfelt.net/2009/09/01/caching-javascript-safely/)

## Resources

* [Wikipedia](https://en.wikipedia.org/wiki/Content_delivery_network)
* [Cloudflare](https://www.cloudflare.com/es-es/learning/cdn/what-is-a-cdn/)

