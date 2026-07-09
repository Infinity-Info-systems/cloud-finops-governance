import {
  getFinOpsCadence,
  getFinOpsPriorityMatrix,
  getFinOpsSummary,
} from "./finopsRegistry";

export function buildFinOpsReport() {
  return {
    summary: getFinOpsSummary(),
    cadence: getFinOpsCadence(),
    priorityMatrix: getFinOpsPriorityMatrix(),
  };
}
