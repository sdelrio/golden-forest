# Syslog

In computing, syslog is a standard for message logging. It allows separation of the software that generates messages, the system that stores them, and the software that reports and analyzes them. Each message is labeled with a facility code, indicating the type of system generating the message, and is assigned a severity level.

Computer system designers may use syslog for system management and security auditing as well as general informational, analysis, and debugging messages. A wide variety of devices, such as printers, routers, and message receivers across many platforms use the syslog standard. This permits the consolidation of logging data from different types of systems in a central repository. Implementations of syslog exist for many operating systems.

When operating over a network, syslog uses a client-server architecture where a syslog server listens for and logs messages coming from clients.

Besides writing to files and communicating to each other, modern syslog daemons can also write to other destinations. For example, datastores like MySQL or Elasticsearch or queue systems such as Kafka and RabbitMQ. Each such destination often comes with its own protocol and message format. For example, Elasticsearch uses JSON over HTTP (though you can also secure it and send syslog messages over HTTPS).


* [Wikipedia](https://en.wikipedia.org/wiki/Syslog)
* [2017: What is Syslog: Daemons, Message Formats and Protocols](https://sematext.com/blog/what-is-syslog-daemons-message-formats-and-protocols/)

## Formats

### Original BSD format (RFC3164)

- https://tools.ietf.org/html/rfc3164

Although RFC suggests it’s a standard, RFC3164 was more of a collection of what was found in the wild at the time (2001), rather than a spec that implementations will adhere to. As a result, you’ll find slight variations of it. That said, most messages will look like the RFC3164 example:

```
<34>Oct 11 22:14:15 mymachine su: 'su root' failed for lonvick on /dev/pts/8
This is how the application should log to /dev/log, and you can see some structure:
```

* `<34>` is a priority number. It represents the facility number multiplied by 8, to which severity is added. In this case, facility=4 (Auth) and severity=2 (Critical).
* `Oct 11 22:14:15` is commonly known as syslog timestamp. It misses the year, the time-zone and doesn’t have sub-second information. For those reasons, rsyslog also parses RFC3164-formatted messages with an ISO-8601 timestamp instead
mymachine is a host name where the message was written.
* `su:` is a tag. Typically this is the process name – sometimes having a PID (like su[1234]:). The tag typically ends in a colon, but it may end up just with the square brackets or with a space.
* the message (MSG) is everything after the tag. In this example, since we have the colon to separate the tag and the message, the message actually starts with a space. This tiny detail often gives a lot of headache when parsing.

In /var/log/messages, you’ll often see something like this:

```
Oct 11 22:14:15 su: 'su root' failed for lonvick on /dev/pts/8
```

This isn’t a syslog message format, it’s just how most syslog deamons write messages to files by default. Usually, you can choose how the output data looks like, for example rsyslog has templates.

### “New” format (RFC5424)

- https://tools.ietf.org/html/rfc5424

RFC5424 came up in 2009 to deal with the problems of RFC3164. First of all, it’s an actual standard, that daemons and libraries chose to implement. Here’s an example message:

```
<34>1 2003-10-11T22:14:15.003Z mymachine.example.com su - - - 'su root' failed for lonvick on /dev/pts/8
```

- https://en.wikipedia.org/wiki/ISO_8601
- https://sematext.com/blog/2013/05/28/structured-logging-with-rsyslog-and-elasticsearch/

Now we get an ISO-8601 timestamp, amongst other improvements. We also get more structure: the dashes you can see there are places for PID, message ID and other structured data you may have. That said, RFC5424 structured data never really took off, as people preferred to put JSON in the syslog message (whether it’s the old or the new format). Finally, the new format supports UTF8 and other encodings, not only ASCII, and it’s easier to extend because it has a version number (in this example, the 1 after the priority number).

## Protocols

### TCP

- https://tools.ietf.org/html/rfc6587

**TCP**. Just like the UDP, it was first used in the wild and then documented. That documentation finally came with RFC6587, which describes two flavors:
messages are delimited by a trailer character, typically a newline
messages are framed based on an octet count

### UDP

- https://tools.ietf.org/html/rfc3164#section-2
- https://tools.ietf.org/html/rfc5424
- https://tools.ietf.org/html/rfc5426

Originally, syslog messages were sent over the wire via **UDP** – which was also mentioned in *RFC3164*. It was later standardized in RFC5426, after the new message format (*RFC5424*) was published.

### TLS

TLS. Standardized in [RFC5425](https://tools.ietf.org/html/rfc5425), which allows for encryption and certificate-based authorization

### REPL

- http://blog.gerhards.net/2008/04/on-unreliability-of-plain-tcp-syslog.html

Unlike plain TCP, RELP adds application-level acknowledgements, which provides at-least-once guarantees on delivering messages. You can also get RELP with TLS if you need encryption and authorization

## Multiline logs

The ones we hear most come from the assumption that UDP is the only option, implying there’s no reliability, authorization or encryption.

The other frequent one is that you can’t send multiline messages, like stack traces. This is only true for TCP syslog, if newlines are used for delimiting. Then, a stacktrace will end up as multiple messages at the destination – unless its newlines are escaped at the source and reverted at the destination. With UDP, multiline logs work out of the box, because you have one message per datagram. Other protocols (TLS, RELP and octet-delimited TCP) also handle multiline logs well, by framing messages.

## Syslog-ng + elasticsearch

- https://www.syslog-ng.com/community/b/blog/posts/how-to-parse-data-with-syslog-ng-store-in-elasticsearch-and-analyze-with-kibana

