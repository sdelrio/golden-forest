# Go

[Go](https://en.wikipedia.org/wiki/Go_(programming_language)), also known as Golang, is an open-source programming language developed by Google in 2009. It is designed for simplicity, efficiency, and strong concurrency support, making it well-suited for building scalable and high-performance applications. Go combines the ease of use of dynamically typed languages with the performance and safety of statically typed languages. It features a clean syntax, garbage collection, and built-in support for concurrent programming through goroutines. Go is widely used in cloud services, distributed systems, and other performance-critical application

## History

### 2007-2009: Early Development

* 2007: The Go language was conceived by Robert Griesemer, Rob Pike, and Ken Thompson at Google. The aim was to create a language that combined the performance of C with the ease of use of modern languages.
* 2009: Go was officially announced to the public as an open-source project on November 10, 2009. The initial version (Go 1.0) included key features like goroutines, channels, and garbage collection.

### 2012: Go 1.0 Release

* 2012: Go 1.0 was released in March 2012. It was the first stable release, establishing Go’s core features and compatibility guidelines. This version provided a stable base for developers, with a focus on backward compatibility in future updates.

### 2013-2014: Early Adoption and Growth

* 2013-2014: Go gained popularity, particularly in the cloud infrastructure and DevOps communities. During this period, various improvements were made in libraries, tools, and performance, but the language itself remained stable to maintain backward compatibility.

### 2015-2016: Go 1.5 and Go 1.6

* 2015: Go 1.5 was released, marking a significant milestone as it was the first version to be self-hosted (written in Go itself, rather than C). This release included improvements to the garbage collector and the introduction of the vendoring feature for dependency management.
* 2016: Go 1.6 focused on further performance improvements and introduced HTTP/2 support in the net/http package, enhancing the language’s capability for web services.

### 2017-2018: Go 1.8 to Go 1.10

* 2017-2018: These years saw incremental updates (Go 1.8 to Go 1.10) that focused on performance optimizations, tooling enhancements (like go vet improvements), and better support for various platforms. Go 1.9 introduced type aliases, while Go 1.10 improved build caching for faster compile times.

### 2019: Go 1.12 and the Go Modules System

* 2019: Go 1.12 was released with improved support for modules, a new dependency management system that became the default in Go 1.13. The introduction of modules marked a significant change in how dependencies were managed, moving away from GOPATH.

### 2020: Go 1.14 and Beyond

* 2020: Go 1.14 introduced goroutine preemption, improving the language’s concurrency model. The releases continued to enhance performance and developer experience, with refinements to the runtime and standard library.
* 2021: Go 1.16 brought native support for file embedding and the //go:embed directive, as well as better module support. Go 1.17 introduced a new way of calling functions (register ABI) for performance gains.

### 2022-2023: Go 1.18 to Go 1.21

* 2022: Go 1.18 introduced generics, a major feature for flexible and reusable code. Go 1.19 refined the memory model and introduced a soft memory limit.
* 2023: Go 1.20 brought a preview of Profile-Guided Optimization (PGO) and the `errors.Join` function. Go 1.21 added built-in functions `min`, `max`, and `clear`, and introduced structured logging with `log/slog`.

### 2024: Go 1.22 and Go 1.23

* 2024: Go 1.22 finally fixed the long-standing loop variable scope issue and introduced `math/rand/v2`. Go 1.23 added support for range-over-function iterators and the `iter` package.

### 2025: Go 1.24

* 2025: Go 1.24 introduced full support for generic type aliases, a new `os.Root` for directory-scoped file access, and enhanced cryptographic libraries including post-quantum support.

## Usefull links

* [Go Developer](https://roadmap.sh/golang). Step by step guide to become a Go developer in 2024.
* [Common Go Mistakes](https://roadmap.sh/golang). 100 Go mistakes and how to avoid them.
* [Go by Example](https://gobyexample.com/). Hands-on introduction to Go using annotated example programs.
* [Effective Go](https://go.dev/doc/effective_go). Tips for writing clear, idiomatic Go code.

### Common Libraries & Frameworks

* [Gin](https://gin-gonic.com/): High-performance HTTP web framework. Known for speed and features.
* [Echo](https://echo.labstack.com/): Minimalist, high-performance web framework.
* [Chi](https://github.com/go-chi/chi): Lightweight, idiomatic router for building Go HTTP services.
* [GORM](https://gorm.io/): The fantastic ORM library for Golang.
* [Viper](https://github.com/spf13/viper): Complete configuration solution for Go applications.
* [Cobra](https://github.com/spf13/cobra): A commander for modern Go CLI interactions.

### High Performance & Fastest APIs

* [Fiber](https://gofiber.io/): Express-inspired web framework built on Fasthttp. Considered one of the fastest.
* [HttpRouter](https://github.com/julienschmidt/httprouter): A high performance HTTP request router.
* [Fasthttp](https://github.com/valyala/fasthttp): Fast HTTP implementation for Go. Up to 10x faster than `net/http` but with a different API.
