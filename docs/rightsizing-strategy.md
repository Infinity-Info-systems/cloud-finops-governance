# Rightsizing Strategy

## Purpose

Rightsizing improves cost efficiency by aligning provisioned resources with real usage and service needs.

## Strategy Steps

- identify idle or overprovisioned resources
- confirm business and performance requirements
- test smaller instance or capacity options
- validate performance after changes
- track savings and side effects

## Review Questions

- Which workloads are overprovisioned?
- Which resource classes show low utilization?
- Are autoscaling rules effective?
- Are performance guardrails in place?

## Evidence To Collect

- utilization reports
- instance inventory
- change history
- post-change performance results

## Operating Notes

- use a change window for higher-risk workloads
- validate with the service owner before cutting capacity
- keep an exception path for performance-sensitive services
