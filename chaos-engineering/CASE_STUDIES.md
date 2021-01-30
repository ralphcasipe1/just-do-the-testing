# CASE STUDIES

### CASE STUDY ONE
## LEADING TELECOMMUNICATIONS SERVICE PROVIDER
Designing Microservices Platform based on popular container orchestration engine.

Being a telecommunication provider most critical aspect of their service is SLA.

Experiments
- What if key components like ElasticSearch, Kafka or Redis are killed?
    - Platform components recovered within 2-4 mins. AS they were stateful components, failure count wasn't stretched beyong the quorom.
- What if multiple instances in different autoscaling groups are randomly shutdown?
    - The AWS autoscaling group replaced the killed instance with the new instance within 2-5 mins. Container orchestration platform started scheduling containers to this new instance.
- What if there is a sudden resource exhaustion on underlying VMS?
    - We experimented with CPU and memory resource exhaustion and did notice performance degration on those VMs. We also found that container orchestration platform stopped scheduling containers to those instasnces to resource saturation.


### CASE STUDY TWO

Designing and developing SDK

SDK code was responsible for downloading or uploading Terabytes of data. It was critical for SDK to work even under inconsistent network conditions. Team proactively developed and verified the following experiments.

| EXPERIMENTS | OUTCOMES |
| ---- | ---- |
| What if the latency increases exponentially, how will it affect SDK's upload/download behavior? | Increasing latency resulted in more time from uploading or downloading the blob |
| What if there is vigorous fluctuation in network bandwidth? | We experimented with decrease in bandwidth, which resulted in more time for uploading or downloading the blob. |
| What if there is timeout from the API backend, will SDK resume download/upload from the stalled point? | SDK continued upload or download from the stalled point for the blob whenever timeout was introduced.
| What if the remote API backend crashes, will SDK retry and resume download/upload from the stalled point? | SDK continued to retry with pre-defined attempts and resumed from the stalled point whenever API crash was stimulated.