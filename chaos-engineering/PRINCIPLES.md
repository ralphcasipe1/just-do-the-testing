# Principles
> Chaos Engineering is the discipline of experimenting on a system in order to build confidence in the system’s capability to withstand turbulent conditions in production.

## Motivation
Advances in large-scale, distributed software systems are changing the game for software engineering. As an industry, we are quick to adopt practices that increase flexibility of development and velocity of deployment. An urgent question follows on the heels of these benefits: How much confidence we can have in the complex systems that we put into production?

Even when all of the individual services in a distributed system are functioning properly, the interactions between those services can cause unpredictable outcomes. Unpredictable outcomes, compounded by rare but disruptive real-world events that affect production environments, make these distributed systems inherently chaotic.

## In Practice
> Chaos Engineering is the discipline of experimenting on a system in order to build confidence in the system's capability to withstand turbulent conditions in production.

It can be thought of as the faciliation of experiments to uncover systemic weaknesses. These experiments follow four steps:

1. Start by defining 'steady state' as some measurable output of a system that indicates normal behavior.

2. Hypothesize that this steady state will continue in both the control group and the experimental group.

3. Try to disprove the hypothesis by looking for a difference in steady state between the control group and the experimental group.

4. Try to disprove the hypothesis by looking for a difference in steady state between the control group and the experimental group.

## ADVANCED PRINCIPLES

### Build a hypothesis around steady state behavior

Focus on the measurable output of a system, rather than internal attributes of the system. Measurements of that output over a short period of time constitue a proxy for the system's steady state. 

The overall system's throughput, error rates, latency percentiles, etc. could all be metrics of interest representing steady state behavior.

By focusing on systemic behavior patterns during experiments, Chaos verifies that the system does work, rather than trying to validate how it works.

### Vary Real-world Events

Chaos variables reflect real-world events. Prioritize events either by potential impact or estimated frequency. 

Consider events that correspond to hardware failures like servers dying, software failures like malfomed responses, and non-failure events like a spike in traffic or a scaling event. 

Any event capable of disrupting steady state is a potential variable in a Chaos Experiment.

### Run experiments in Production
Systems behave differently depending on environment and traffic patterns. Since the behavior of utilization can change at any time, sampling real traffic is the only way to reliably capture the request path. 

To guarantee both authenticity of the way in which the system is exercised and relevance to the current deployed system, Chaos strongly prefers to experiment directly on production traffic.

### Automate Expiriments to run continuously
Running experiments manually is labor-intensive and ultimately unsustainable. Automate experiments and run them continuously. Chaos Engineering builds automation into the system to drive both orchestration and analysis.

### Minimize Blast Radius
Experimenting in production has the potential to cause unncessary customer pain. While there must be an allowance for some short-term negative impactive, it is the responsibility and obligation of the Choas Engineer to ensure the fallout from experiments are minimized and contained.
_____

Chaos Engineer is a powerful practice that is already changing how software is designed and engineered at some of the largest-scale operations in the world.

Where other practices address velocity and flexibility, Chaos specifically tackles systemic uncertainty in these distributed systems. The principles of chaos provide confidence to innovate quickly at massive scales and give customers the high quality experiences they deserve.



## References
1. [Principles of Chaos Engineering](https://principlesofchaos.org/)