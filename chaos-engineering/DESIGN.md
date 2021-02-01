RECALIBRATING MENTAL MODELS THROUGH DESIGN OF CHAOS EXPERIMENTS

> Maybe the process of designing a chaos experiment is just as valuable as the actual performance of the experiment.

A chaos experiment should have:
- a hypothesis
- a specific scope, and
- a set of metrics or behaviors to monitor

The design and operation of modern software systems is not done with the expectation that engineers will comprehensively and accurately understand a system's behavior once it is in production.

## Examples
Here is the list of the most common chaos tests:
- Simulating the failure  of a micro-component
- Turning a virtual machine off to see how a dependency reacts.
- Simulating a high CPU load.
- Disconnecting the system from the data center
- Injecting latency between services.
- Randomly causing functions to throw exceptions (also known as function-based chaos).
- Adding instructions to a program and allowing fault injection (also known as code insertion)
- Disrupting syncs between system clocks
- Emulating I/O errors.
- Causing sudden spikes in traffic.
- Injecting byzantine failures.

## References
1. [phoenixNAP's Chaos Engineering Blog](https://phoenixnap.com/blog/chaos-engineering)