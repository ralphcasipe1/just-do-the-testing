## Traditional Test Strategy
Most people are familar with the famous Testing Pyramid.

This technique was an extremely efficient way to organize tests. In a microservice world, this is no longer the case, and we would argue that it can be actively harmful.

The biggest comlexity in a Microservice is not within the service itself, but in how it interfacts with others, and that deserves special attention.

Having too many unit tests in Microservices, which are small by definition, also restricts how we can change the code without also having to change the tests. By having to change the tests we lose some confidence that the code still does what it should and it has a negative impact on the speed we iterate at.

## Microservices Test Strategy

A more fitting way of structuring our tests for Microservices would be the Testing Honeycomb.

Integrated
Integration
Implementation Details

This means we should focus on Integration Tests, have a few implementation Detail Tests and even fewer Integrated Tests (ideally none).

### Integrated Tests
- We spin up other services in a local testing environment
- We test against other services in a shared testing environment
- Changes to your system breaks tests for other systems

This is quite fragile way of testing and we recommend learning more directly from the source above.

### Integration Tests
Verifies the correctness of the service in a more isolated fashion while focusing on the interaction points and making them very explicit.

### Takeaways
- Give confidence that the code does what it should.
- Provide fast, accurate, reliable and predictable feedback.
- Make maintenance easier, something that is commonly overlooked when writing tests
  - Test from the edges and leave it cleaner than you found it with confidence that knowing it doesn't break.
______

## 5 Tips for Testing Microservices
1. Treat each service as a software module. Conduct unit tests on the service as you would for any new piece of code. In a microservice architecture, each service is treated as a black box, so you should test it in a similar fashion.

2. Work out the essential links in your architecture and seek to test those. For instance, there's a strong link between the user login service, the frontend that will display user details and the database storing those details.

3. Don't try to assemble the entire microservice environment in a small test setup -- you are only asking for weeks of pain. 

4. Try to test across different setups

5. Make good use of Canary Testing for new code and test using real-life users. Ensure that all your code is well instrumented and take advantage of all the monitoring offered by your platform provider. This is in direct conflict with the test-driven development methodology since in this approach you sacrifice test coverage in favaor of testing in the wild.
______
When working with microservices, you have more options because microservices are deployed typically in environments that use containers like Docker. In microservice architectures, your teams are likely to use a wider variety of testing techniques. Also, since microservices communicate more over the wire, you need to test the impact of network connections more thoroughly. Using tools and techniques that better fit the new architecture can allow for faster time to market, less cost, and less risk.

The organization of the people working on the application often influences how the code and test environments are organized; this effect is known as Conway's Law. Typically, the code will be split into several layers of components such as UI, services, and repositories. The monoliths will be deployed to shared environments, usually development, QA, and user acceptance testing.

The techniques that do not require containerization are:
- use test doubles such as stubs, mocks, or virtual services;
- connecting to real test instances of back-end or third-party systems; and
- contract testing.

Because of Conway's Law, siloed functional teams with complex communication patterns create monoliths with the same complex communication patterns.

In microservice architecture, you typically find:

- Teams are organized around business capabilities such as cross-functional teams of several UI, middleware, and back-end developers, a database administrator, and a DevOps specialist.
- Decentralized governance that allows every team to choose the right tool for their job
- Decentralized data management that allows each microservice or group of related microservices to manage its own data.
- Testing, deployments, and infrastructure typically are automated with little or no manual intervention.
- Decentralized data management that allows each microservice or group of related microservice to manage its own data.
- Testing, deployment, and infrastructure typically are automated with little or manual intervention.

The main categories of solutions for testing microsercices are those that are already available in monolithic architectures, which are also applicable to microservices, and those desgined specifically for microsevice architectures.

## Contract Testing
A contract describes how components communicate and interact with each other, both message formats between components (syntax) as well as behavioral expectations of components (semantics). You use contract testing to verify that contracts between components are honored; this gives you confidence that the compnents are able to work together. When you use test-specific dependent components (such as test doubles), you can also use contract testing to make sure that they honor the latest or any specific version of the contract. 

Here are the several ways of testing or managing contracts between components
1. In a contract snapshot test, your test doubles represent a snapshot of a contract between components at a point in time. That snapshot can fall out of date. You can test contract snapshots in an automated way.

2. Contract snapshot refreshes allow you to re-record (refresh) the contracts between components. Typically, a refresh will cater for the syntax and partially for the semantics of the contract. See consumer-driven contract testing for more thorough syntax and semantics testing.

3. Consumer-driven contract testing is a component of a complete microservice testing strategy. It verifies contract that the producer provides a contract that fulfills all consumers' expectations. Consumers verify that the producers still provide the structure of messages and behavior they need.

4. Per-contract naroow integration testing can test the contract between the connector module in your microservice and the dependent component. The contract, in this case, is typically more producer driven rather than consumer driven.

5. Use contract teasting for independent component releases if you want to independently release two dependent components. You must remember to _test combinations of the latest and production aritifacts_.

6. End-to-end testing means verifying that all components work well together for complete user journeys. This means contracts between components are implicitly validated when exercising the user journey tests across the system.

## Techniques

### Testing your microservice with a test instance of another microservice

Low impact

Low impact

Quick to start

Slows projects as complexity

Low cost when complexity is low

Can get costly as complexity

Reduces the chances of introducing issues in test doubles
> Several companies stay with this approach after the initial testing, which results in the rapid accumulation of technical debt, eventually slowing development treams as the complexity of the system under test grows exponentially with the number of its components.

Risk of not following the testing pyramid

> Testing a test instance of a dependency reduces the chance of introducing issues in test doubles. 
> Follow the test pyramid to produce a sound development and testing strategy or you risk ending up with big E2E test suites that are costly to maintain and slow to run.

### Testing your microservice with a production instance of another microservice

Moderate impact

Low impact

Quick to start

Slows projects as complexity grows

Low cost when complexity is low

Can get costly as complexity grows

Reduces the chances of introducing issues in test doubles

Risk of not following the testing pyramid

Can change the state of production systems

Hard to simulate hypothetical scenarios

This technique typically is applicable for simple, stable, non-critical APIs, which is a rare use case. Avoid it unless you have identified a specific good reason to do it.

### Testing a microservice with third-party dependencies

Moderate impact

Low impact

Quick to start

Slows projects as complexity grows

Low cost when complexity is low

Can get costly as complexity grows

Calls to third-party APIs can generate costs

Reduces the chances of introducing issues in test doubles

Risk of not following the testing pyramid

Can change the state of production systems

Hard to simulate hypothetical scenarios

The organization may have to pay to test with a third-part API as third parties typically charge per transaction. This is especially relevant when testing performance.

### Testing a microservice with a legacy non-microservice internal dependencies

Moderate impact

Low impact

Quick to start

Slows projects as complexity grows

Low cost when complexity is low

Can get costly as complexity grows

Reduces the chances of introducing issues in test doubles

Risk of not following the testing pyramid

Can change the state of production systems.

Hard to simulate hypothetical scenarios

This technique offers a fast feedback loop on issues with the contract between the new world of microservices and old legacy systems, reducing risk.

### Testing a microservice with non-software (hardware) dependencies
---

### Mocks 

Moderate impact

Moderate impact

A moderate amount of time to start

Reduces complexity

Might need in-house development efforts.

Increases Test Coverage

Can become obsolete

Mocks let you set up a low-granularity failure and hypothetical scenarios, hence increasing your test coverage.

### Stubs 

Moderate impact

Moderate impact

A moderate amount of time to start

Reduces complexity

In house can be moderate costly

Increases Test Coverage

Can become obsolete

While a mock replaces an object the microservice depends on with a test-specific object that verifies that the microservice is using it correctly, a stub replaces it with a test-specific object that provides test data to the microservice.

### Simulators

Moderate impact

Low impact 

Off-the-shelf products help you get to market faster

Off-the-shelf products can be cost effective

Commercial off-the-self products can get expensive

Reduces the risk of making common mistakes

Allows simulation of network issues

Open-source products come without a support contract

Virtual services can become obsolete

This technique lets you simulate network issues, which is critical for testing microservice architectures that rely on networks.

### Service virtualization

Moderate impact

Low impact

Off-the-shelf products help you get to market faster

Off-the-shelf products can be cost effective

Commercial off-the-shelf products can get expensive

Reduces the risk of making common mistakes

Allows simuation of network issues

Open-source products come without a support contract

Virtual services can become obsolete

Service-virtualization tools help to keep virtual service up to date. The faster the pace of change of project requirements, the more critical it is to keep the virtual services from becoming obsolete.

### In-memory database

Moderate impact

Low impact

Reduces time to market where provisioning new database is problematic

Reduces the cost of licensing commercial databases

In-memory databases can behave differently than the real ones.

### Test Container

Moderate impact

Low impact

Allows teams to move at their own pace

Reduces time to market where provisioning new environments is problematic

Can reduce licensing costs

Can reduce infrastructure costs

Can have licensing-cost implications

Test containers can have a different configuration than the real production dependency.


The test container can be configured differently than the real dependency, leading to false confidence in your test suite. Make sure you configure the container database the same as the production database.


### Legacy in a box

Moderate to high impact 

Low impact

Quick to start

Slows projects as complexity grows

Provisioning containers is an order of magnitude faster than provisioning hardware environments

Time spent up front to configure containers

Potential time for refactoring

Quick to start

Slows projects as complexity grows

Provisioning containers is an order of magnitude faster than provisioning hardware environments

Up-front cost to configure

Potential time for refactoring

Reduces the chances of introducing issues in test doubles

Risk of not following the testing pyramid

This technique reduces the chance of introducing discrepancies between test doubles and real systems. Make sure you configure your container legacy the same as the production system so that there are no significant discrepancies between your production and test environments.

We have explored techniques for managing microservice dependencies when testing microservices from a manager's point of view and compared them based on team maturity, pace of change, time to market, cost and risks.

## Use Cases

--

## References
1. [Testing Microservices: An Overview of 12 Useful Techniques](https://www.infoq.com/articles/twelve-testing-techniques-microservices-intro/)
2. [Testing Microservices: Examining the Tradeoffs of Twelve Techniques](https://www.infoq.com/articles/twelve-testing-techniques-microservices-tradeoffs/)
3. [Testing Microservices: Six Case Studies with a Combination of Testing Techniques](https://www.infoq.com/articles/testing-techniques-microservices-use-cases/)
4. [Testing of Microservice in Spotify Engineering Blog](https://engineering.atspotify.com/2018/01/11/testing-of-microservices/)
5. [Integrated Tests Are a Scam](https://blog.thecodewhisperer.com/permalink/integrated-tests-are-a-scam)
6. [How To Test Microservice](https://www.functionize.com/blog/how-to-test-microservices/)
7. [How to DO Shift Left Testing Right](https://www.functionize.com/blog/how-to-do-shift-left-testing-right/)