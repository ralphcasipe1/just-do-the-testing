# APPROACH

It should follows a disciplined process with several key steps that dictate how we design Chaos Experiments. The degree to which we can adhere to these steps correlates directly with the confidence we can have in a distributed system at scale.

- Identify metrics and values to define steady state of system
- Hypothesize it will work well for control group and experimental group
- Introduce variables that reflect real world events like servers that crash, dependencies that fail, etc.
- Stimulate environment using introduced variables to disapprove set hypothesize
- Manage the blast radius by ensuring that the fallout from experiments and minimized and contained.