# API Standards

## REST

REST is more concerned with API durability than query optimization like OData and GraphQL

GraphQL, on the other hand, is designed to operate over a single endpoint over HTTP, hence improving performance and adaptability. Meanwhile, OData defines best practices for developing REST APIs that work on top of the REST architecture.

### OpenAPI

The current standard for describing REST API is [OpenAPI](https://swagger.io/specification/). OpenAPI is a description, in YAML or JSON, of what the backend capabilities are. So, for example, here is a snippet from devto.io:

```yaml
---
paths:
  /articles:
    get:
      description: |
        ...
      parameters:
        - $ref: "#/components/parameters/pageParam"
        - $ref: "#/components/parameters/perPageParam30to1000"
```

As you can see, it specifies that the API supports GET /articles?pageParam.

### AsyncAPI

[AsyncAPI](https://www.asyncapi.com/) addresses the need for a unified, open source, protocol-agnostic asynchronous specification that is both human-readable and machine-readable, while also being backed by a diverse and rich tooling ecosystem. With its maturity and elegant abstractions, the AsyncAPI Specification has emerged as the industry standard for defining asynchronous, event-driven APIs.

### Advantages

Here are some of the key AsyncAPI specification features that we found particularly useful:

* Clean separation between [channels](https://www.asyncapi.com/docs/specifications/2.0.0#definitionsChannel), [operations](https://www.asyncapi.com/docs/specifications/2.0.0#operationObject) and [servers](https://www.asyncapi.com/docs/specifications/2.0.0#serverObject). This allows a complete representation of the event-driven topology (the [producer](https://www.asyncapi.com/docs/specifications/2.0.0#definitionsProducer), [consumer](https://www.asyncapi.com/docs/specifications/2.0.0#definitionsConsumer) and [message](https://www.asyncapi.com/docs/specifications/2.0.0#definitionsMessage) perspectives), resulting in a standardized and precise representation of a message-driven ecosystem.
* Support for defining bindings at the [operation](https://www.asyncapi.com/docs/specifications/2.0.0#operationBindingsObject), [broker](https://www.asyncapi.com/docs/specifications/2.0.0#serverBindingsObject), [channel](https://www.asyncapi.com/docs/specifications/2.0.0#channelBindingsObject) and [message](https://www.asyncapi.com/docs/specifications/2.0.0#messageBindingsObject) level.
* Support for traits and external references. This promotes reusability.
* Support for correlation Ids using dynamic runtime expressions.
* Extensibility of the specification, for those one-off customization needs.
* Support for a wide range of asynchronous protocols to satisfy most industry needs.
* Compatibility with the [OpenAPI specification](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md). This enables the re-use of schema definitions from existing models, which leads to a short adoption cycle for organizations that have already standardized on the OpenAPI specification.

## OData

OData (Open Data Protocol) is an [OASIS standard](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=odata) that defines the best practice for building and consuming RESTful APIs. OData provides a rich query language with capabilities for sorting, filtering, querying and reducing fields in the output of the API. It is strictly RESTful and expects to be delivered in conjunction with best REST practice.

Usage: 

* [OData](https://www.odata.org/libraries/) + OpenAPI or other APIs
* [Apache Olingo LIbrary](https://www.odata.org/libraries/) for mapping entities to OData entities, and converting OData entities to Java OSGi calls.
* [Multitude of libraries](https://www.odata.org/libraries/)

### Advantages

* Good documentation.
* REST-based framework easy to most programmers.
* Using [HATEOAS](https://restfulapi.net/hateoas/), it is possible to solve an often-cited complaint with OData: that it doesn’t support versioning. The argument of OData not supporting versioning or field deprecation is moot, in that it is extremely easy to develop around this problem.

### When to use it

* An OData API is a good fit when you know that consumers of your API will come from a broad group of developers of different technologies.
* OData is a simpler concept and has a simpler definition for queries than GraphQL, which are powerful enough to meet most use cases.
* If as an organization I want to control the data produced by the API but don’t want unlimited data queries for performance reasons, OData presents an attractive option as a strong RESTful standard with an advanced feature set.

## GraphQL

[GraphQL](https://graphql.org/) was created by Facebook(Meta), a signle URI mapped to a web services which allows you to have an API capable of meeting the most complex cata requiremetns. It is most certanly no RESTful.

Usage:

* [Multitude of libraries](https://graphql.org/code/) for implementing and discovering GraphQL.


And GraphQL, by default, is introspective. What that means is that GraphQL endpoints support a GraphQL query like this:

```json
{
  __schema {
    queryType {
      name
    }
  }
}
```

We ask a GraphQL endpoint to tell us what queries it supports using a GraphQL query. This allows a whole set of third-party tools to work against any GraphQL endpoint.

If the GraphQL endpoint changes, the introspection query returns a different - current or updated - result. Consequently, as long as the program issues the query periodically, the production of an API endpoint and its use stays up to date. How awesome is that? In contrast, in OpenAPI, the spec is a separate doc. So if that is not updated, the endpoint will do something, and the spec will say something else.

### Advantages

* Single ednpoint + GraphQL standard
* Support [Subscriptions](https://www.apollographql.com/docs/react/advanced/subscriptions/) 
* Self-contained query

### When to use it

* GraphQL in most circumstances the more powerful query language, but it can be expensive to implement and is not RESTful.
* Harder learning curve.
* Is the fastest, most cost-effective way you can delight that consumer.
* Much can be achieved by just going the OpenAPI route or rolling whatever you like while sticking to a RESTful standard of your own making. 

## References

* [2021: The State of Introspection for REST and GraphQL APIs](https://thenewstack.io/the-state-of-introspection-for-rest-and-graphql-apis/)
* [2019: OData or GraphQL? The Best Tech for Developing an API Is Neither or Both](https://thenewstack.io/odata-or-graphql-the-best-tech-for-developing-an-api-is-neither-or-both/)
* [2017: https://thenewstack.io/asyncapi-2-0-enabling-the-event-driven-world/](https://thenewstack.io/asyncapi-2-0-enabling-the-event-driven-world/)

