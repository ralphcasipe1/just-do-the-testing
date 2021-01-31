
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

____

I. Plan an Experiment
II. Contain the blast radius
III. Scale or squash

These experiments have added benefit of helping teams build muscle memory in resolving outages, akin to a fire drill (or changing a flat tire, in the Netflix analogy). By breaking things on purpose we surface unknown issues that could impact our systems and customers.

Fallacies of Distributed Systems:
1. The network is reliable
2. Latency is zero
3. Bandwidth is infinite
4. The network is secure
5. Topology doesn't change
6. There is one administrator
7. Transport cost is zero
8. The network is homogenous

Chaos Engineering for service teams
1. Traffic Team (e.g. Nginx, Apache, DNS)
2. Streaming Team (e.g. Kafka)
3. Storage Team (e.g. S3)
4. Data Team (e.g. Hadoop/HDFS)
5. Database Team (e.g. MySQL, Amazon RDS, PostgreSQL)

What are the customer, business, and technical benefits of Chaos Engineering?
- Customer: the increased availability and durability of service means no outages disrupt their day-to-day lives.
- Business: Chaos Engineering can help prevent extremely large losses in revenue and maintenance costs, create happier and more engaged engineers, improve in on-call training for engineering teams, and improve the SEV (incident) Management Program for the entire company.
- Technical: The insights from chaos engineering can mean a reduction in incidents, reduction in on-call burden, increased understanding of system failure modes, improved system design, faster mean time to detection for SEVs, and reduction in repeated SEVs.