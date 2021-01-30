# APPROACH

It should follows a disciplined process with several key steps that dictate how we design Chaos Experiments. The degree to which we can adhere to these steps correlates directly with the confidence we can have in a distributed system at scale.

1. Identify metrics and values to define steady state of system
2. Hypothesize it will work well for control group and experimental group
3. Introduce variables that reflect real world events like servers that crash, dependencies that fail, etc.
4. Stimulate environment using introduced variables to disapprove set hypothesize
5. Manage the blast radius by ensuring that the fallout from experiments and minimized and contained.

### STEP 1:  CREATING A HYPOTHESIS

Engineers analyze the system and choose what failure to cause. The core step of chaos engineering is to predict how the system will behave once it encounters a particular bug.

Engineers also need to determine critical metric thresholds before starting a test. Metrics typically come in two sets:

- **Key metrics**
- **Customer metrics**

### STEP 2: FAULT INJECTION

Engineers add a specific failure to the system. Since there is no way to be sure how the application will behave, there is always a backup plan.

Most chaos engineering tools have a reverse option. That way, if something goes wrong, you can safely abort the test and return to a steady-state of the application.

### STEP 3: MEASURE THE IMPACT

Engineers monitor the system while the bug causes significant issues. Key metrics are the primary concern but always monitor the entire system.

If the test starts a simulated outage, the team looks for the best way to fix it.

STEP 4: REVIEW YOUR HYPOTHESIS.
A successful chaos test has one of two outcomes. You either verify the resilience of the system, or you find a problem you need to fix. Both are good outcomes.

## References
1. [phoenixNAP's Chaos Engineering Blog, How Chaos Engineering Works](https://phoenixnap.com/blog/chaos-engineering)