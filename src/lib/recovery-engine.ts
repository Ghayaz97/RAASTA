import { IssueClassification, RecoveryPlanData } from './types';

export function getRecoveryPlan(classification: IssueClassification): RecoveryPlanData | null {
  if (classification === 'document_status_pending') {
    return {
      title: 'DOCUMENT STATUS MISMATCH',
      classification,
      steps: [
        {
          id: 'step-1',
          title: '01',
          action: 'Check current application status.',
          whyItMatters: 'The status on the portal might have updated since you last checked.',
          citizenNeeds: 'Your application number and date of birth.',
        },
        {
          id: 'step-2',
          title: '02',
          action: 'Verify that the uploaded document appears against the application.',
          whyItMatters: 'Sometimes documents upload successfully but do not attach to the specific application.',
          citizenNeeds: 'Access to the document upload section of the portal.',
        },
        {
          id: 'step-3',
          title: '03',
          action: 'Re-upload if the portal provides that option.',
          whyItMatters: 'If the portal allows re-uploading, it is the fastest way to resolve a missing document error.',
          citizenNeeds: 'The original document files.',
        },
        {
          id: 'step-4',
          title: '04',
          action: 'If the issue remains, contact the relevant transport authority/helpdesk.',
          whyItMatters: 'Manual intervention may be required if the system is stuck.',
          citizenNeeds: 'A drafted grievance and proof of upload.',
        },
      ],
      recommendation: "Don't submit a duplicate application simply because the status appears stuck.",
    };
  }

  return null;
}

export function classifyIssue(userInput: string): IssueClassification {
  const lowerInput = userInput.toLowerCase();
  if (
    lowerInput.includes('document') &&
    lowerInput.includes('upload') &&
    lowerInput.includes('pending')
  ) {
    return 'document_status_pending';
  }
  // For the demo, we assume the specific case if it's not strictly matching
  return 'document_status_pending'; 
}
