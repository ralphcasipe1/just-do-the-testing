# FAQs

### What makes Chaos Engineering important, why do you believe the topic is receiving more attention now?

Availability of a service is now as important as security for IT Directors, we must mitigate impact of critical incidents and outage.

Disaster recovery has been around for many years, but it's expensive, custom, and fragile, so it's only implemented where it's essential and it's exercised infrequently if at all. Chaos engineering takes advantage of the APIs and automation now available in cloud native architectures (whether on premises using K8s, or on AWS) to make disaster recovery low cost, productized and robust enough to be exercised continuously, to prove that safety margins exist.

### Should everyone focus on Chaos Engineering, or just the Ops team?

Having the best customer experience is the goal for everyone, not just Ops team.

Practicing chaos engineering is one way to improve it by limiting the impact in case of an incident

- Dev teams to use resilience patterns in their applications.
- Ops teams to provide and operate resilient platform, and 
- UX/UI teams to design customer experience to absorb impact of incident.

Availability is a developer concern, Chaos Engineering makes sure developers build resilient systems and learn to make them stronger. There doesn't even need to be an ops team for chaos engineering to be useful.

What even is an ops team anymore? In modern organizations all engineering teams ship software, everyone owns their service health. Those used to be called "dev" and "ops" but that is increasingly an archaic distinction.

If you're asking if only infra engineering teams should care about chaos engineering, I would answer "do only infra engineers have SLAs or care about quality?" 

Hopefully not, Every engineering team should care passionately about (and be held accountable for) the health of their service. Chaos eng can help by accelerating the rate at which you discover failure scenarios and compensate for them.

### What is the difference between Chaos Engineering and Resilience Engineering?

Resilience Engineering aims to prevent incident impact by building resilient applications and platforms. However, as our systems grow in complexity, it becoming very hard to anticipate everything.

TLDR; Resilience Engineering is DETERMINISTIC whereas Chaos Engineering is NONDETERMINISTIC. We need both to have the best customer experience.