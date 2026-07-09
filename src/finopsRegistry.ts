export type FinOpsDomain = {
  id: string;
  name: string;
  purpose: string;
  controls: string[];
  evidence: string[];
  signals: string[];
  priority: "High" | "Medium" | "Low";
  owner: string;
};

export const finopsDomains: FinOpsDomain[] = [
  {
    id: "cost-visibility",
    name: "Cost Visibility",
    purpose: "Show what is being spent and where the spend is going.",
    controls: [
      "dashboards",
      "forecast review",
      "actual versus plan comparison",
      "cost owner assignment",
    ],
    evidence: ["Cloud cost dashboard", "Forecast reports", "Variance notes"],
    signals: ["Spend trend", "Forecast deviation", "Unexplained variance"],
    priority: "High",
    owner: "FinOps lead",
  },
  {
    id: "allocation",
    name: "Allocation",
    purpose: "Assign spend to services, owners, or business units in a repeatable way.",
    controls: ["tagging governance", "shared spend rules", "allocation logic"],
    evidence: ["Tagging model", "Allocation report", "Exception log"],
    signals: ["Tagged coverage", "Unallocated spend", "Cost owner coverage"],
    priority: "High",
    owner: "Cloud platform owner",
  },
  {
    id: "optimization",
    name: "Optimization",
    purpose: "Identify rightsizing and utilization opportunities and track them to closure.",
    controls: ["rightsizing review", "utilization analysis", "action backlog"],
    evidence: ["Rightsizing strategy", "Optimization backlog", "Savings validation"],
    signals: ["Idle resources", "Oversized instances", "Savings claim"],
    priority: "High",
    owner: "Platform owner",
  },
  {
    id: "commitments",
    name: "Commitments",
    purpose: "Manage reservations and savings plans with a disciplined operating cadence.",
    controls: ["reservation review", "commitment policy", "coverage tracking"],
    evidence: ["Reserved instance model", "Commitment report", "Coverage analysis"],
    signals: ["Coverage rate", "Renewal window", "Utilization trend"],
    priority: "Medium",
    owner: "Finance partner",
  },
  {
    id: "accountability",
    name: "Accountability",
    purpose: "Make sure every major spend driver has an owner and a review path.",
    controls: ["owner assignment", "cadence review", "exception routing"],
    evidence: ["Executive cost report", "Review notes", "Action log"],
    signals: ["Owner missing", "Open action", "Persistent variance"],
    priority: "High",
    owner: "Executive sponsor",
  },
];

export function getFinOpsSummary() {
  return {
    totalDomains: finopsDomains.length,
    highPriorityDomains: finopsDomains.filter((domain) => domain.priority === "High").length,
    totalControls: finopsDomains.reduce((sum, domain) => sum + domain.controls.length, 0),
  };
}

export function getFinOpsCadence() {
  return [
    { cadence: "Weekly or biweekly", focus: "Cost review" },
    { cadence: "Monthly", focus: "Forecast review" },
    { cadence: "Monthly", focus: "Optimization backlog review" },
    { cadence: "Quarterly", focus: "Leadership review" },
  ];
}

export function getFinOpsPriorityMatrix() {
  return finopsDomains.map((domain) => ({
    domain: domain.name,
    priority: domain.priority,
    owner: domain.owner,
    riskIfWeak:
      domain.priority === "High"
        ? "Material budget and accountability exposure"
        : "Optimization and commitment inefficiency",
  }));
}
