
# BEST PRACTICES
APPROACHES & BEST PRACTICES

Infrastucture Layer
Purpose:

Anticipate production failures and mitigate them by simulating failure of virtual instances, availability zones, regions, etc.

Primarily done in production or production-like environments

Network Layer
Purpose:
Ensure App doesn't have a single points of failure; simulate network and system conditions supporting deterministic tampering with connections, but with support for randomized chaos and customization

Simulate network degradation/intermittent connectivity, how applications behave in these conditions early during development.

Ideal For:
Mobile apps with offline functionality

SPA web apps that work without network connectivity.

Toxiproxy:
Latency (with optional jitter)

Complete unavailability

Reduced Bandwidth

Timeouts

Slow-to-close connections

Piecemeal information, with more optional delays

Application Layer:
Purpose:
Instill Chaos Engineering principles early in the development stage; build for resilience and stability

Developers & SDETs primarility lead this activity in this stage but consilt and involve business/product owners for expected results. Ops can also be consulted or informed.

Use Cases:
Observe component/service under test behavior in the absence of a dependent service in another docker container

Lower-Level Environments
Introduce chaos at container level: killing, stopping and removing running containers.

__________
Shift Left

Shift Right

Blast Radius

Error Budgeting Testing