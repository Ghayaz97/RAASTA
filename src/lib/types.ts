export type IssueClassification = 'document_status_pending' | 'unknown';

export interface TimelineEvent {
  date: string;
  title: string;
}

export interface DemoCaseData {
  service: string;
  jurisdiction: string;
  applicationNumber: string;
  issueClassification: IssueClassification;
  timeline: TimelineEvent[];
}

export interface RecoveryStep {
  id: string;
  title: string;
  action: string;
  whyItMatters: string;
  citizenNeeds: string;
}

export interface RecoveryPlanData {
  title: string;
  classification: IssueClassification;
  steps: RecoveryStep[];
  recommendation: string;
}

export interface GrievanceData {
  service: string;
  applicationNumber: string;
  issue: string;
  timeline: TimelineEvent[];
  request: string;
}
