"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[8859],{74738:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>h});var a=s(87462),o=(s(67294),s(3905));s(61839);const l={},i="Syslog",n={unversionedId:"OS/GNU-Linux/syslog",id:"OS/GNU-Linux/syslog",title:"Syslog",description:"In computing, syslog is a standard for message logging. It allows separation of the software that generates messages, the system that stores them, and the software that reports and analyzes them. Each message is labeled with a facility code, indicating the type of system generating the message, and is assigned a severity level.",source:"@site/docs/OS/GNU-Linux/syslog.md",sourceDirName:"OS/GNU-Linux",slug:"/OS/GNU-Linux/syslog",permalink:"/docs/OS/GNU-Linux/syslog",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/syslog.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ssh client",permalink:"/docs/OS/GNU-Linux/ssh"},next:{title:"Nix configs and tutorials",permalink:"/docs/OS/MacOS/nix-configs"}},r={},h=[{value:"Formats",id:"formats",level:2},{value:"Original BSD format (RFC3164)",id:"original-bsd-format-rfc3164",level:3},{value:"\u201cNew\u201d format (RFC5424)",id:"new-format-rfc5424",level:3},{value:"Protocols",id:"protocols",level:2},{value:"TCP",id:"tcp",level:3},{value:"UDP",id:"udp",level:3},{value:"TLS",id:"tls",level:3},{value:"REPL",id:"repl",level:3},{value:"Multiline logs",id:"multiline-logs",level:2},{value:"Syslog-ng + elasticsearch",id:"syslog-ng--elasticsearch",level:2}],m={toc:h},d="wrapper";function p(e){let{components:t,...s}=e;return(0,o.kt)(d,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"syslog"},"Syslog"),(0,o.kt)("p",null,"In computing, syslog is a standard for message logging. It allows separation of the software that generates messages, the system that stores them, and the software that reports and analyzes them. Each message is labeled with a facility code, indicating the type of system generating the message, and is assigned a severity level."),(0,o.kt)("p",null,"Computer system designers may use syslog for system management and security auditing as well as general informational, analysis, and debugging messages. A wide variety of devices, such as printers, routers, and message receivers across many platforms use the syslog standard. This permits the consolidation of logging data from different types of systems in a central repository. Implementations of syslog exist for many operating systems."),(0,o.kt)("p",null,"When operating over a network, syslog uses a client-server architecture where a syslog server listens for and logs messages coming from clients."),(0,o.kt)("p",null,"Besides writing to files and communicating to each other, modern syslog daemons can also write to other destinations. For example, datastores like MySQL or Elasticsearch or queue systems such as Kafka and RabbitMQ. Each such destination often comes with its own protocol and message format. For example, Elasticsearch uses JSON over HTTP (though you can also secure it and send syslog messages over HTTPS)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Syslog"},"Wikipedia")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sematext.com/blog/what-is-syslog-daemons-message-formats-and-protocols/"},"2017: What is Syslog: Daemons, Message Formats and Protocols"))),(0,o.kt)("h2",{id:"formats"},"Formats"),(0,o.kt)("h3",{id:"original-bsd-format-rfc3164"},"Original BSD format (RFC3164)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc3164"},"https://tools.ietf.org/html/rfc3164"))),(0,o.kt)("p",null,"Although RFC suggests it\u2019s a standard, RFC3164 was more of a collection of what was found in the wild at the time (2001), rather than a spec that implementations will adhere to. As a result, you\u2019ll find slight variations of it. That said, most messages will look like the RFC3164 example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<34>Oct 11 22:14:15 mymachine su: 'su root' failed for lonvick on /dev/pts/8\nThis is how the application should log to /dev/log, and you can see some structure:\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<34>")," is a priority number. It represents the facility number multiplied by 8, to which severity is added. In this case, facility=4 (Auth) and severity=2 (Critical)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Oct 11 22:14:15")," is commonly known as syslog timestamp. It misses the year, the time-zone and doesn\u2019t have sub-second information. For those reasons, rsyslog also parses RFC3164-formatted messages with an ISO-8601 timestamp instead\nmymachine is a host name where the message was written."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"su:")," is a tag. Typically this is the process name \u2013 sometimes having a PID (like su","[1234]",":). The tag typically ends in a colon, but it may end up just with the square brackets or with a space."),(0,o.kt)("li",{parentName:"ul"},"the message (MSG) is everything after the tag. In this example, since we have the colon to separate the tag and the message, the message actually starts with a space. This tiny detail often gives a lot of headache when parsing.")),(0,o.kt)("p",null,"In /var/log/messages, you\u2019ll often see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Oct 11 22:14:15 su: 'su root' failed for lonvick on /dev/pts/8\n")),(0,o.kt)("p",null,"This isn\u2019t a syslog message format, it\u2019s just how most syslog deamons write messages to files by default. Usually, you can choose how the output data looks like, for example rsyslog has templates."),(0,o.kt)("h3",{id:"new-format-rfc5424"},"\u201cNew\u201d format (RFC5424)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc5424"},"https://tools.ietf.org/html/rfc5424"))),(0,o.kt)("p",null,"RFC5424 came up in 2009 to deal with the problems of RFC3164. First of all, it\u2019s an actual standard, that daemons and libraries chose to implement. Here\u2019s an example message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<34>1 2003-10-11T22:14:15.003Z mymachine.example.com su - - - 'su root' failed for lonvick on /dev/pts/8\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601"},"https://en.wikipedia.org/wiki/ISO_8601")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sematext.com/blog/2013/05/28/structured-logging-with-rsyslog-and-elasticsearch/"},"https://sematext.com/blog/2013/05/28/structured-logging-with-rsyslog-and-elasticsearch/"))),(0,o.kt)("p",null,"Now we get an ISO-8601 timestamp, amongst other improvements. We also get more structure: the dashes you can see there are places for PID, message ID and other structured data you may have. That said, RFC5424 structured data never really took off, as people preferred to put JSON in the syslog message (whether it\u2019s the old or the new format). Finally, the new format supports UTF8 and other encodings, not only ASCII, and it\u2019s easier to extend because it has a version number (in this example, the 1 after the priority number)."),(0,o.kt)("h2",{id:"protocols"},"Protocols"),(0,o.kt)("h3",{id:"tcp"},"TCP"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc6587"},"https://tools.ietf.org/html/rfc6587"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TCP"),". Just like the UDP, it was first used in the wild and then documented. That documentation finally came with RFC6587, which describes two flavors:\nmessages are delimited by a trailer character, typically a newline\nmessages are framed based on an octet count"),(0,o.kt)("h3",{id:"udp"},"UDP"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc3164#section-2"},"https://tools.ietf.org/html/rfc3164#section-2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc5424"},"https://tools.ietf.org/html/rfc5424")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc5426"},"https://tools.ietf.org/html/rfc5426"))),(0,o.kt)("p",null,"Originally, syslog messages were sent over the wire via ",(0,o.kt)("strong",{parentName:"p"},"UDP")," \u2013 which was also mentioned in ",(0,o.kt)("em",{parentName:"p"},"RFC3164"),". It was later standardized in RFC5426, after the new message format (",(0,o.kt)("em",{parentName:"p"},"RFC5424"),") was published."),(0,o.kt)("h3",{id:"tls"},"TLS"),(0,o.kt)("p",null,"TLS. Standardized in ",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5425"},"RFC5425"),", which allows for encryption and certificate-based authorization"),(0,o.kt)("h3",{id:"repl"},"REPL"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://blog.gerhards.net/2008/04/on-unreliability-of-plain-tcp-syslog.html"},"http://blog.gerhards.net/2008/04/on-unreliability-of-plain-tcp-syslog.html"))),(0,o.kt)("p",null,"Unlike plain TCP, RELP adds application-level acknowledgements, which provides at-least-once guarantees on delivering messages. You can also get RELP with TLS if you need encryption and authorization"),(0,o.kt)("h2",{id:"multiline-logs"},"Multiline logs"),(0,o.kt)("p",null,"The ones we hear most come from the assumption that UDP is the only option, implying there\u2019s no reliability, authorization or encryption."),(0,o.kt)("p",null,"The other frequent one is that you can\u2019t send multiline messages, like stack traces. This is only true for TCP syslog, if newlines are used for delimiting. Then, a stacktrace will end up as multiple messages at the destination \u2013 unless its newlines are escaped at the source and reverted at the destination. With UDP, multiline logs work out of the box, because you have one message per datagram. Other protocols (TLS, RELP and octet-delimited TCP) also handle multiline logs well, by framing messages."),(0,o.kt)("h2",{id:"syslog-ng--elasticsearch"},"Syslog-ng + elasticsearch"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.syslog-ng.com/community/b/blog/posts/how-to-parse-data-with-syslog-ng-store-in-elasticsearch-and-analyze-with-kibana"},"https://www.syslog-ng.com/community/b/blog/posts/how-to-parse-data-with-syslog-ng-store-in-elasticsearch-and-analyze-with-kibana"))))}p.isMDXComponent=!0}}]);