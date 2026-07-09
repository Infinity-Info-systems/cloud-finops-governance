# Cloud FinOps Governance

## Overview

This repository contains the governance and operating model for cloud financial management across multi-cloud environments.

It focuses on cost visibility, rightsizing, tagging governance, reserved instance strategy, and executive cost reporting.
It is intended to help teams manage cloud spend with the same discipline they apply to service and architecture governance.
The repository should also be easy to reference from the parent MCGR page so the FinOps library is visible as part of the larger ecosystem.

## Why It Matters

Cloud cost growth often outpaces governance maturity.

This repository helps teams build a repeatable FinOps operating model for:

- cloud cost governance
- executive reporting
- cost optimization
- rightsizing and reservation strategy
- tagging and allocation controls
- unit economics tracking
- savings validation
- decision accountability
- recurring review cadence

## Where This Fits In The Ecosystem

- [MCGR Framework](../MCGR-Framework/README.md)
- [MCGR Public Page](../MCGR-Framework/README.md#featured-research-spotlight)
- [Cloud Governance Assessment Toolkit](../cloud-governance-assessment-toolkit/README.md)
- [Executive Technology Roadmaps](../executive-technology-roadmaps/README.md)
- [Cloud Risk and Compliance Controls](../cloud-risk-compliance-controls/README.md)

## Content Model

This repository works best when the content is grouped into three layers:

- governance and operating guidance
- models and dashboards
- templates and reference notes

## How To Use This Repo

1. Read the framework overview and operating model.
2. Review the review cycle and rightsizing strategy.
3. Use the cost models to define governance and decision rules.
4. Use the dashboards and templates to run recurring reviews.
5. Capture evidence and impact metrics so improvement can be measured.
6. Keep terminology consistent across teams and cloud providers.

## Core Content

- [Framework Overview](docs/framework-overview.md)
- [Cloud Cost Governance](docs/cloud-cost-governance.md)
- [FinOps Review Cycle](docs/finops-review-cycle.md)
- [FinOps Operating Model](docs/finops-operating-model.md)
- [Rightsizing Strategy](docs/rightsizing-strategy.md)
- [Reserved Instance Model](docs/reserved-instance-model.md)
- [Executive Cost Reporting](docs/executive-cost-reporting.md)

## Models

- [Cost Optimization Model](models/cost-optimization-model.md)
- [Tagging Governance Model](models/tagging-governance-model.md)
- [Unit Economics Model](models/unit-economics-model.md)

## Dashboards

- [Cloud Cost Dashboard](dashboards/cloud-cost-dashboard.md)
- [FinOps KPI Dashboard](dashboards/finops-kpi-dashboard.md)

## Templates

- [Cloud Cost Review Template](templates/cloud-cost-review-template.md)
- [Executive Cost Report](templates/executive-cost-report.md)
- [FinOps Maturity Assessment](templates/finops-maturity-assessment.md)
- [Rightsizing Assessment Template](templates/rightsizing-assessment-template.md)

## References

- [Bibliography](references/bibliography.md)
- [Research Links](publications/research-links.md)
- [Impact Metrics](evidence/impact-metrics.md)

## Operating Principle

FinOps should make spend visible, accountable, and actionable.

## Quick View

| FinOps Area | What It Governs | Typical Artifact |
| --- | --- | --- |
| Visibility | Who is spending and why | Cloud cost dashboard |
| Allocation | How spend is assigned | Tagging governance model |
| Optimization | What can be improved | Rightsizing strategy |
| Commitments | How reservations are managed | Reserved instance model |
| Accountability | Who owns the action | Executive cost report |

## Codebase Direction

- use `src/` as the cost governance registry and report layer
- keep Markdown docs as the operating model and narrative layer
- use the registry outputs to support dashboards or a future FinOps console
