---
title: Rust
description: A deep dive into Rust, from system performance and memory safety without a garbage collector to the ecosystem of runtimes, frameworks and libraries for web, data, embedded and beyond.
tags: [rust, programming, performance]
slug: rust
---

# Rust

Rust is a multi-paradigm, high-performance language designed for **performance, reliability, and safety**. It provides memory safety without a garbage collector and is frequently cited as the most loved language by developers due to its powerful type system and ownership model.

## Performance & Comparisons

Rust's zero-cost abstractions and fine-grained control over system resources allow it to rival legacy systems languages.

*   **vs. C/C++:** Rust delivers comparable performance but with built-in memory safety, preventing common issues like buffer overflows and double-frees at compile time.
*   **vs. Go:** Rust generally outperforms Go by 15-30% in CPU-bound tasks. Unlike Go, Rust lacks a garbage collector, resulting in more predictable latency and lower memory usage.
*   **vs. Java:** Rust consistently delivers higher performance than Java because it compiles to native code without the overhead of a JVM, garbage collection, or JIT compilation.

## Web & API Ecosystem

While originally designed for systems programming, Rust has evolved into a powerhouse for high-performance backends and web APIs.

*   **[Actix Web](https://actix.rs/):** One of the fastest web frameworks in existence, consistently ranking at the top of performance benchmarks.
*   **[Axum](https://github.com/tokio-rs/axum):** A modern framework from the Tokio team, designed for ergonomics and modularity.
*   **[Rocket](https://rocket.rs/):** A focus on ease of use and type safety, making it one of the most developer-friendly options.

## Empowering JavaScript (WASM & Native)

Rust is the premier choice for offloading computationally intensive tasks from JavaScript environments.

*   **WebAssembly (WASM):** Compiled Rust can run in the browser at near-native speeds (up to 10x faster than pure JS for certain tasks). Use **[wasm-pack](https://rustwasm.github.io/wasm-pack/)** for high-performance image processing or data visualization.
*   **Node.js Addons:** Using tools like **[NAPI-RS](https://napi.rs/)**, developers can write performance-critical parts of a Node.js application in Rust to achieve massive speedups (up to 100x for specific algorithms).

## Async Runtimes and Concurrency

Async Rust is a set of language features: `async` functions compile to state machines that implement `Future`, and nothing runs until an executor polls them. The standard library ships the traits but no runtime, so every application picks one.

- **[Tokio](https://tokio.rs/):** the de facto runtime. A multi-threaded work-stealing scheduler, async TCP/UDP and filesystem wrappers, timers, and sync primitives such as `mpsc`, `oneshot`, `RwLock` and `Semaphore`. Most of the web stack (`axum`, `hyper`, `tonic`, `reqwest`, `sqlx`) is built on it.
- **[smol](https://github.com/smol-rs/smol):** a small runtime with an API shaped like `std`, plus companion crates such as `async-io` and `futures-lite`. `async-std` has been discontinued and its own README recommends switching to `smol`. Pick one runtime per binary, because mixing two in one process is a common source of hangs.
- **[rayon](https://docs.rs/rayon/):** data parallelism for CPU-bound work through `par_iter()`, with work stealing and no manual thread management.
- **[crossbeam](https://docs.rs/crossbeam/):** MPMC channels, epoch-based memory reclamation and lock-free data structures. Scoped threads moved into `std` in Rust 1.63, so `crossbeam::scope` is mostly redundant now.

```rust
#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let task = tokio::spawn(async { 21 * 2 });
    println!("answer: {}", task.await?);
    Ok(())
}
```

:::info
Async is a tool for waiting, not for computing. It lets a few threads juggle thousands of connections, but it does not make a CPU-bound function faster. Use `rayon` for parallel number crunching, and `tokio::task::spawn_blocking` when blocking code has to run inside an async service.
:::

## The Everyday Stack

A small set of crates covers most application code. These are the names you will meet in nearly every production `Cargo.toml`:

| Need | Crate | Why it is the default |
| --- | --- | --- |
| Serialization | [`serde`](https://serde.rs/) with `serde_json` or `toml` | One data model, derive macros, every format plugs into it |
| Errors in applications | [`anyhow`](https://docs.rs/anyhow/) | Type-erased errors with `context()` and backtraces |
| Errors in libraries | [`thiserror`](https://docs.rs/thiserror/) | `#[derive(Error)]` for enums callers can match on |
| Command-line parsing | [`clap`](https://docs.rs/clap/) | Derive API, subcommands, help, env vars, shell completions |
| HTTP client | [`reqwest`](https://docs.rs/reqwest/) | Async and blocking APIs, TLS through `rustls` or `native-tls` |
| Text matching | [`regex`](https://docs.rs/regex/) | Linear-time guarantees, no catastrophic backtracking |
| Date and time | [`jiff`](https://docs.rs/jiff/) | Timezone-aware types and explicit DST handling; `chrono` is still widely deployed |

Error handling is where the split matters. Use `thiserror` for the error type a caller may want to match, and `anyhow` at the top of a binary where you only need context and a backtrace:

```rust
use serde::Deserialize;

#[derive(Deserialize)]
struct Config {
    name: String,
    port: u16,
}

#[derive(Debug, thiserror::Error)]
enum ConfigError {
    #[error("cannot read {path}")]
    Read { path: String, #[source] source: std::io::Error },
    #[error("invalid TOML")]
    Parse(#[from] toml::de::Error),
}

fn load(path: &str) -> Result<Config, ConfigError> {
    let raw = std::fs::read_to_string(path)
        .map_err(|source| ConfigError::Read { path: path.into(), source })?;
    Ok(toml::from_str(&raw)?)
}
```

## Composing a Web Service

The framework list above covers routing. The rest of a service is glue, and that glue has settled on a common shape. In axum 0.8 a handler is an async function whose arguments implement extractors, and path parameters use the `{name}` syntax:

```rust
use axum::{extract::{Path, State}, routing::get, Json, Router};

// User derives sqlx::FromRow and serde::Serialize; AppError implements IntoResponse.
async fn user(State(pool): State<sqlx::PgPool>, Path(id): Path<i64>)
    -> Result<Json<User>, AppError>
{
    let user = sqlx::query_as!(User, "select id, name from users where id = $1", id)
        .fetch_one(&pool)
        .await?;
    Ok(Json(user))
}

let app = Router::new().route("/users/{id}", get(user)).with_state(pool);
```

- **Middleware:** axum builds on [`tower`](https://docs.rs/tower/), so one layer applies to every route. [`tower-http`](https://docs.rs/tower-http/) supplies `TraceLayer`, `TimeoutLayer`, `CompressionLayer` and `CorsLayer`.
- **Shared state:** `State` carries the connection pool, configuration or clients. Keep it cheap to clone instead of building one per request.
- **Observability:** [`tracing`](https://docs.rs/tracing/) records a span per request and `tracing-subscriber` writes them as text or JSON. `tracing-opentelemetry` exports the same spans over OTLP, so one request keeps one ID across services.
- **Authorization:** implement it as an extractor or a middleware layer that rejects before the handler runs, rather than repeating a check in every handler.

## Databases and Persistence

- **[SQLx](https://github.com/launchbadge/sqlx):** async, pure-Rust drivers for PostgreSQL, MySQL and SQLite with no DSL. The `query!` and `query_as!` macros check SQL against a live database at compile time, `cargo sqlx prepare` stores that metadata so CI builds without a database, and `sqlx migrate` runs migrations.
- **[Diesel](https://diesel.rs/):** the mature synchronous ORM and query builder. `diesel print-schema` generates types from the database, migrations are first class, and the type system catches joins that do not line up.
- **[SeaORM](https://www.sea-ql.org/SeaORM/):** an async ORM over SQLx for teams that want entities and relations instead of hand-written SQL.

:::tip
Size the pool against the database, not the CPU count. Set `max_connections` below the server's connection limit, account for every replica, and remember that an oversized pool is often slower than a small one.
:::

## Testing and Benchmarking

- **Built-in harness:** `#[test]`, `#[cfg(test)]` unit tests beside the code, integration tests in `tests/`, and doctests that keep examples in the documentation honest. `cargo test --workspace` runs all of it.
- **[cargo-nextest](https://nexte.st/):** a faster test runner with per-test process isolation, retries for flaky tests and JUnit output for CI.
- **[proptest](https://docs.rs/proptest/):** property-based testing that generates inputs and shrinks failures to the smallest counterexample.
- **[insta](https://insta.rs/):** snapshot testing for serialized output, rendered markup and error messages, reviewed with `cargo insta review`.
- **[criterion](https://docs.rs/criterion/):** statistical benchmarks with baselines and HTML reports; run them with `cargo bench`.
- **cargo-fuzz:** coverage-guided fuzzing through libFuzzer, the practical way to harden a parser that accepts untrusted input.

```rust
use proptest::prelude::*;

proptest! {
    #[test]
    fn parser_never_panics(input in "\\PC*") {
        let _ = parse(&input);
    }
}
```

## Desktop, GUI, and Full-Stack Web

- **[Tauri 2](https://tauri.app/):** a web frontend in a system webview with a Rust backend. Commands are plain functions behind IPC, a capability and permission model gates what the frontend may call, and version 2 added mobile targets. Binaries stay small because the webview belongs to the operating system.
- **[egui](https://github.com/emilk/egui):** immediate-mode GUI that runs natively and in the browser through WASM. Fast to build tools, inspectors and debug panels with.
- **[iced](https://iced.rs/):** a retained, Elm-inspired GUI library with native and web backends and a stronger separation between state and view.
- **[Leptos](https://leptos.dev/)** and **[Dioxus](https://dioxuslabs.com/):** full-stack Rust with server rendering and hydration. Leptos leans on fine-grained reactivity, Dioxus also targets desktop and mobile from one codebase.

The choice usually follows the team: web skills point to Tauri, a pure-Rust tool points to egui or iced, and a Rust-everywhere frontend points to Leptos or Dioxus.

## Data and Machine Learning

- **[Polars](https://pola.rs/):** a DataFrame library on Apache Arrow with a lazy query engine and multi-threaded execution. It covers the pandas workload without leaving Rust.
- **[arrow](https://docs.rs/arrow/) and [parquet](https://docs.rs/parquet/):** the columnar format and file reader used to exchange data with Python, Spark and DuckDB.
- **[ndarray](https://docs.rs/ndarray/):** n-dimensional arrays for numerical code that does not need a full DataFrame.
- **[Candle](https://github.com/huggingface/candle)** and **[Burn](https://burn.dev/):** ML frameworks in Rust, the first from Hugging Face with an emphasis on inference, the second with pluggable backends including WGPU and CUDA.
- **[tokenizers](https://docs.rs/tokenizers/):** Hugging Face's fast tokenizer implementations, the same ones Python uses under the hood.

Python remains the place where models are trained. Rust earns its place beside it for tokenization, inference servers and the hot loops of a pipeline, which is what the bindings in the next section are for.

## Embedded and Firmware

Rust runs on microcontrollers without an operating system, and the ecosystem is mature enough for production firmware:

- **[embedded-hal](https://docs.rs/embedded-hal/):** version 1.0 defines the traits for GPIO, I2C, SPI, UART and delays. Drivers written against those traits work on any chip whose HAL implements them.
- **[Embassy](https://embassy.dev/):** an async executor and HAL family for STM32, nRF, RP2040 and others. Tasks become state machines at compile time, so there is no RTOS, no heap and no per-task stack to tune.
- **[RTIC](https://rtic.rs/):** a real-time framework that turns interrupt priorities into a compile-time checked concurrency model.
- **[defmt](https://defmt.rust-lang.org/)** and **[probe-rs](https://probe.rs/):** deferred-format logging that costs a few bytes per message, and flashing plus debugging over CMSIS-DAP or J-Link.

Firmware crates are `#![no_std]`, cross-compiled to a target such as `thumbv7em-none-eabihf`, and measured in kilobytes, so `panic = "abort"` and `opt-level = "s"` in the release profile are normal.

## Interop with Other Languages

- **[PyO3](https://pyo3.rs/)** with **[maturin](https://www.maturin.rs/):** write a Python extension module in Rust and build wheels with `maturin build`. This is the usual way to move a Python bottleneck into Rust without rewriting the application.
- **[cxx](https://cxx.rs/):** a safe bridge to C++ with shared types and no manual `unsafe` at the boundary; `bindgen` generates raw bindings when you only have C headers.
- **JavaScript:** `wasm-bindgen` for the browser and NAPI-RS for Node.js, both covered in the WASM section above.

The boundary is where the bugs live. Keep it narrow, pass owned data across it, and handle panics on the Rust side so they do not unwind into the host language.

## Beyond the Backend

Rust is no longer only a backend language:

- **Linux kernel:** Rust has been a supported language for kernel code since Linux 6.1, and drivers such as the Apple GPU driver in Asahi Linux are written in it.
- **Networking infrastructure:** Cloudflare's [Pingora](https://github.com/cloudflare/pingora) was built to replace their NGINX-based proxy stack, and has served more than 40 million internet requests per second.
- **Android:** Google uses Rust in components such as the Bluetooth stack, the DNS resolver and Keystore.

These are component rewrites, not whole-product rewrites. The pattern that works is isolating a hot, risky or security-sensitive piece, giving it a narrow interface, and leaving the rest of the system in the language the team already knows.

## Choosing a Crate

The registry has more than a hundred thousand crates, so the hard part is choosing. A short checklist filters most of them out:

1. **Is it maintained?** Check the last release date and the commit history on crates.io, not only the download count. A popular crate that has not shipped in three years is a liability.
2. **Does it document its features?** A docs.rs build with feature flags listed means the author expects conditional compilation to be understood.
3. **What does it pull in?** `cargo tree -e features` shows the real dependency graph, and `cargo tree -d` finds two versions of the same crate in the build.
4. **How much `unsafe` is inside?** Read the crate's root attributes. Libraries that declare `#![forbid(unsafe_code)]` are making a checkable promise.
5. **What is the MSRV?** A `rust-version` in its `Cargo.toml` tells you whether it fits the compiler your project supports.
6. **Is the license compatible?** `cargo deny check licenses` automates the answer for the whole graph.

## Toolchain and Day-to-Day Tools

- **[rustup](https://rustup.rs/):** installs and switches toolchains by channel, adds cross-compilation targets with `rustup target add`, and installs components such as `rustfmt`, `clippy` and `rust-analyzer`.
- **[Cargo](https://doc.rust-lang.org/cargo/):** the official package manager and build system. `cargo add`, `cargo tree`, `cargo bench` and `cargo doc` cover the daily loop, and `edition = "2024"` in `Cargo.toml` opts a crate into the current edition.
- **[rust-analyzer](https://rust-analyzer.github.io/):** the language server behind every editor integration. Errors as you type, go to definition, completion, rename and inlay hints.
- **[rustfmt](https://github.com/rust-lang/rustfmt):** the canonical formatter. `cargo fmt --check` in CI ends style debates.
- **[Clippy](https://doc.rust-lang.org/clippy/):** hundreds of lints beyond the compiler, grouped into correctness, suspicious, style, complexity and performance.
- **[sccache](https://github.com/mozilla/sccache):** caches compiler output locally or in shared storage, which pays off on CI and on repeated rebuilds.
- **[bacon](https://dystroy.org/bacon/):** reruns `cargo check` or `cargo test` in the background and shows the first error in the terminal.
- **[cargo-expand](https://github.com/dtolnay/cargo-expand):** prints the code after macros and derives have run, the fastest way to see what a derive generated.
- **[Fleet](https://github.com/dimensionhq/fleet):** blazing fast build tool for Rust.

A CI pipeline for a workspace fits in five commands:

```bash
cargo fmt --all --check
cargo clippy --workspace --all-targets --all-features -- -D warnings
cargo nextest run --workspace
cargo audit
cargo deny check
```

`cargo audit` matches `Cargo.lock` against the RUSTSEC advisory database. `cargo deny` enforces the policies a team agrees on: allowed licenses, banned crates, approved registries and known advisories.

## Books and Learning

*   **[Learn Rust (Official)](https://www.rust-lang.org/learn)**
*   **[The Rust Programming Language (The Book)](https://doc.rust-lang.org/stable/book/)** - The definitive guide.
*   **[The Rust Reference](https://doc.rust-lang.org/stable/reference/index.html)**
*   **[The Rustonomicon](https://doc.rust-lang.org/stable/nomicon/index.html)** - Advanced guide to "unsafe" Rust.
*   **[A half-hour to learn Rust](https://fasterthanli.me/articles/a-half-hour-to-learn-rust)** - Excellent quick-start guide.

## Media & Articles

*   **[Intro into the Rust Programming Language](https://www.youtube.com/watch?v=INT_rGJr6JQ)** (Video)
*   **[Rust by the Numbers (2021)](https://thenewstack.io/rust-by-the-numbers-the-rust-programming-language-in-2021/)**

## References

- [crates.io](https://crates.io/): the official package registry.
- [docs.rs](https://docs.rs/): API documentation built for every published crate.
- [lib.rs](https://lib.rs/): curated categories, alternatives and maintenance signals.
- [Rust Blog](https://blog.rust-lang.org/): release announcements and project news.
- [This Week in Rust](https://this-week-in-rust.org/): the weekly newsletter of crates, articles and talks.
- [RustSec Advisory Database](https://rustsec.org/): security advisories for the crate ecosystem.
- [Awesome Rust](https://github.com/rust-unofficial/awesome-rust): a long, categorized list of crates and projects.
- [The Complete Rust Ecosystem Explained (YouTube)](https://youtu.be/fMWThgQmibw): walkthrough of the ecosystem from toolchain to production.

