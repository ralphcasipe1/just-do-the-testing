## GUIDELINES

## ARE YOU READY FOR CHAOS ENGINEERING?

It's all too tempting to assign Chaos Engineering to simply **"hurting systems"** and not understand that it is so much more than that. You can get an idea of exactly how much that is not the case merely by examining the prerequisites. 

Starts with "Is your system resilient to real-world events" and ends with "Apply Chaos Engineering"

The interesting thing about this decision tree is that it doesn't mention microservices. In fact, it doesn't even mention distributed systems. You can use the technique for any system that is sufficiently complex.

It is Chaos Engineering that help you build confidence in your system in production.

Chaos is so much more than merely "hurting your system", it's about establishing a discipline for implementing double-loop learning through experiments sothat you can build confidence in chaotic and complex environments.

## STARTING WITH TURBULENCE
- Consider your failure points and map depedencies
The practice of Chaos Engineering developed in response to the increased complexity of cloud-based architectures and shorter development cycles.

- Form a hypotheses
Once you have an idea of how your service interacts with other components of your architecture, think about where failures may occur.
1. Are services tightly coupled in a "distributed monolith" where a single service failure renders several or all other services inoperable?
2. Could increased network latency between services cascade (or multiply) throughout the system?
3. Are services necessary to core functionality (sometimes described as "in the critical path") resilient to common scenarios like node failure?

- Define the smallest possible blast radius

- Run your first attack

- Observe the results

- Scale our squash


1. Figure out a steady-state hypothesis, including what probes and tolerances you want to include.

2. Figure out what probes and actions you want in your method.

3. Figure out what rollback activities, if any, you want to include to be a good citizen.

And then all of this needs to be captured in the JSON or YAML experiment format that the Chaos Toolkit supports.

### Science often doesn't (really) start with a Hypothesis, and neither does experimental 

Chaos engineering is a scientific, empirical discipline.

Coming up a compoplete steady-state hypothesis can seem onerous when you just want to "poke" a system with some turbulent conditions to seeh how to responds. Frequently this is all the automation a manual Game Day needs, or in fact is all that can be automated when you are creating a chaos experiment.

The Chaos Toolkit supports this workflow by making the steady-state hypothesis optional. You can start with just the activities in your experiment's method that inject the turbulent conditions you want to explore, and then over time you can complete your experiment with a steady-state hypothesis.

## WITH HUMANS IN THE LOOP
Two cases where this is useful are when your chaos experiments are being used as validating tests as part of a CI/CD pipeline, or as part of scheduled contiuous chaos.

1. Check steady state hypothesis: Look at some metrics (Automated)

2. Alter some configuration in Legacy HR system (Manual step, waits for user to make change and confirm before proceeding)

3. Check metrics (Automated)

4. Check steady state hypothesis again (Automated)

5. Rollback (Manual step, restore old configuration)

### Removing a control does not stop the experiment executing

## CHAOS SHOULD NEVER BE A SURPRISE
When you're executing a chaos experiment, everyone should know about.

Some of the sample runtime hooks
- Validate Flow Events: Surfaces that experiment validation has started, failed or has completed.

- Discovery Flow Events : Surfaces that system discovery has started, failed, or has completed.

- Init Flow Events: Surfaces that experiment initialisation, or creation, has been started, failed of has completed.

- Run Flow Events: Surfaces that an experiment has been started, failed, or has completed.

## Communication is Key

> Terminate a database instance should not prevent application from running.

The key characteristic for any chaos engineer, above the innate care and attention and curiosity necessary to experimetn and improve complex, distributed systems in order to attain better availability, **is in fact a personality trait**.

The key personality trait is empathy, and the mechanism by which a successful chaos engineer applies it is through **constant communication about the chaos being run and the results of those experiments.**

> Chaos engineering is a highly collaborative endeavor.

Chaos engineers have the potential to cause great harm in their work, and **nothing amplifies that harm better than if it comes as a surprise** to the teams involved.

Chaos engineers work closely with, and sometimes in, the teams that are affected by the experiments being run. Often the teams themselves come up with the experiments they want to run to build their own confidence in theirs services and system's availability.

## MATURITY MODEL
This model provides a map for software delivery teams getting started with Chaos Engineering and evolving their use of it over time. It's a useful way to track your progress and compare yourself to other organizational adopters.

Infrostretch uses this model when we work with clients to layout the most effective approach that will deliver the most product results.

## Reference
1. [Infrostrech's White Paper for Chaos Engineering, Maturity Model](https://www.infostretch.com/resources/white-papers/chaos-engineering/)
2. [Russ Miles' Are you Ready for Chaos Engineering](https://medium.com/russmiles/are-you-ready-for-chaos-engineering-59b859091281)
3. [Russ Miles' Start with Turbulence](https://medium.com/chaos-toolkit/starting-with-turbulence-6b3a8888a005)
4. [eksworkshop](https://www.eksworkshop.com/)