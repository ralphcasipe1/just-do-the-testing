# 💥 INTRODUCTION TO CHAOS ENGINEERING

> **TLDR;**
>
> **CHAOS ENGINEERING** is the discipline of experimenting on a distributed system in order to induce artificial failures to build confidence in the system's capability to withstand turbulent conditions in production. [ [5](https://www.infostretch.com/resources/white-papers/chaos-engineering/) ]

## Abstract
Finding faults in a distributed system goes beyond the capability of standard pyramid application testing.

Companies need smarter ways to test microservices continuously. One strategy that is gaining popularity is **CHAOS ENGINEERING**.

Using this proactive testing practice, an organization can prepare, shift the culture and fix failures before they cause costly outage.

## ❓ What is Chaos Engineering?
It is a strategy for discovering vulnerabilities in a distributed system.

This practice requires injecting failures and errors into software during production.

Once you intentionally cause a bug, monitor the effects to see how the system responds to stress.

By "breaking things" on purpose, you discover new issues that could impact components and end-users. Address the identified weaknesses before they cause data loss or service impact [ [2](https://phoenixnap.com/blog/chaos-engineering) ].

### Chaos engineering allows an engineer/tester to:
1. **Identify** weak points in a system.
    Result from exploratory testing.
2. **See** in real-time how a system responds to pressure (See Load Testing).
    This could be done through Load Testing.
3. **Prepare** the team for real failures.
    Derive disciplined culture.
4. **Pinpoint** bugs that are yet to cause system-wide issues.
    Bugs that are not business related but bugs that are commonly known in distributed systems that are hard to replicate.

> **Chaos engineering** is a methodology that _helps developers attain consistent reliability by hardening services against failures in production_. 
>
> A common way to introduce chaos is to deliberately inject faults that cause system components to fail. 
>
> _The goal is to **obeserve**, **monitor**, **respond to** and **improve** your system's reliability under adverse circumstances_. [ [1](https://docs.microsoft.com/en-us/azure/architecture/framework/resiliency/chaos-engineering) ]

It is a new approach to software development and testing designed to eliminate some of that unpredictability by putting that complexity and interdependence to the test.

The idea is to put MOST parts of your system in a deterministic manner by performing controller experiments in a distributed environment. This will help your team build confidence in the system's ability to tolerate the inevitable failures.

In other words, break your system on purpose to find out where the weakness are. That way, you can fix them before they break unexpectedly and hurt the business and your users.

As a result, you will better understand how your systems really behave when they fail. You can exercise contingency plans at scale to ensure those plans works as designed. Chaos Engineering Services also provides the ability to revert systems back to their original states without impacting users. It can also saves a lot of time and money that would be spent responding to systems outages.

### Build Testing vs Chaos Engineering

**Build Testing**
A specific approach to testing known conditions.

_Assertion_: GIVEN specific conditions, a system will emit a specific output.

Tests are typically; determine whether a property is _true_ or _false_ ONLY.

**Chaos Engineering**
A practice for generating new information.

More exploratory in nature with unknown outcomes.

Tests effects of various conditions; generates more subjective information.

## The Cost of System Downtime
Eight fallacies of modern-day distributed computing
1. The network is reliable
2. Bandwidth is infinite
3. Topology doesn't change
4. Transport cost is zero
5. Latency is zero
6. The network is secure
7. There is one administrator
8. The network is homogenous

## Motivation for Chaos Engineering
It's difficult to simulate the characteristics of a service's behavior at scale outside a production environment. 

The ephemeral nature of cloud platforms can worsens this difficulty.

Architecting your service to expect failure is a core approach to creating a modern service.

Chaos engineering embraces the uncertainty of the production environment and strives to anticipate rare, unpredictable, and disruptive outcomes, so that you can minimize any potential on your customers.

A company provides it's software to meet the demands of its users. 

Typically, a company's goal is never to let their software crash; it needs to be available whenever a user wants it. 

Software requires resources to run, and chaos engineering focus testing the resources given extreme user behaviors and uncertain availability of resources. Companies often have a cost associated with how much time their services are not running.

Netflix is a leader in chaos engineering. Their service meets several criteria that demands they push this practice for what is possible in internet services:
1. Their services operate in all time zones.
2. They have many users.
3. Their users consume large amounts of data.

> 💡 **TRIVIA**
>
> Like many companies, Netflix moved from a physical infrastructure to a cloud infrastructure in 2010. A cloud-based system runs into a whole new set of fires, and chaos engineering allows the Netflix team to create a practice of fighting fires before they happen. [ [4](https://www.bmc.com/blogs/chaos-engineering/) ]

## Concept
In software development, a given software system's ability to tolerate failures while still ensuring adequate quality of service -- often generalized as _resiliency_ -- is typically specified as a requirement.

However, development teams often fail to meet this requirement due to factors such as **short deadlines** or **lack of knowledge** of the field. It is a techinique to meet the resilience requirement.

Chaos engineering can be used to achieve resilience against these types of failures [ [3](https://en.wikipedia.org/wiki/Chaos_engineering) ]:
1. Infrastructure
2. Network
3. Application

### References
1. [Microsoft's Chaos Engineering](https://docs.microsoft.com/en-us/azure/architecture/framework/resiliency/chaos-engineering)
2. [PhoenixNAP's Chaos Engineering: How it works, Principles, Benefits, & Tools](https://phoenixnap.com/blog/chaos-engineering)
3. [Wikipedia's Chaos Engineering](https://en.wikipedia.org/wiki/Chaos_engineering)
4. [bmcblogs' What is Chaos Engineering](https://www.bmc.com/blogs/chaos-engineering/)
5. [Infostretch's Chaos Engineering in Approaches, Best Practices and Case Studies](https://www.infostretch.com/resources/white-papers/chaos-engineering/)