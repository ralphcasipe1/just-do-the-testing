# DIFFERENCE BETWEEN CHAOS ENGINEERING AND FAILURE TESTING

> **ROUGH DRAFT**


## FAILURE TESTING
- Are tests that usually found in pyramid tests (**unit**, **integration** and **e2e**).

A failure test examines a single condition and determines whether a property is true or false.

The results are usually binary, and they do not uncover new information about the application.

The goal of a chaos test is to generate new knowledge about the system. Broader scope and unpredictable outcomes enable you to learn about the system's _behaviors_, _properties_, and _performance_. 

You open new avenues for exploration and see how you can improve the system.

While different, chaos and failure testing do have some overlap in concerns and tools used. 

You get the best results when you use both disciplines to test an application.


### UNIT TEST

[input] ---------> (component A) ------------> [output]

### INTEGRATION TEST

[input] ---------> (component A) ------(component B)------> [output]

### CHAOS EXPERIMENT

(SERVICE 1) <----------> (SERVICE 2) -> UNPREDICTABLE OUTPUT

```
S1
- Component A
- Component B
- Component C

S2
- Component D
- Component E
- Component F
```