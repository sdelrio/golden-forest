# Otto


Otto is a robust distributed system for scalable continuous integration and delivery. To accomplish this Otto is multi-process oriented and distributed by default; all system interactions must occur over process boundaries even if executing in the same logical host. This document outlines the high level architecture but omits specific inter-process communication formats, protocols, and dependencies.

Otto does not aim to be the center of the entire continuous delivery process, but rather seeks to interoperate seamlessly with all the various components which make CD work for you.

* [Otto GitHub](https://github.com/rtyler/otto#release)

