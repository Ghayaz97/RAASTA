import { DemoCaseData, GrievanceData } from './types';

export const demoCaseData: DemoCaseData = {
  service: 'Driving Licence',
  jurisdiction: 'Karnataka',
  applicationNumber: 'DL-20481',
  issueClassification: 'document_status_pending',
  timeline: [
    { date: '05 Aug', title: 'Application submitted' },
    { date: '05 Aug', title: 'Fee recorded' },
    { date: '06 Aug', title: 'Documents uploaded' },
    { date: '19 Aug', title: 'Pending status reported' },
  ],
};

export const demoGrievanceData: GrievanceData = {
  service: 'Driving Licence',
  applicationNumber: 'DL-20481',
  issue: 'Documents were uploaded but the application continues to display a pending document status.',
  timeline: [
    { date: '05 Aug', title: 'Application submitted' },
    { date: '06 Aug', title: 'Documents uploaded' },
    { date: '19 Aug', title: 'Current status checked' },
  ],
  request: 'Please review the application status and advise whether any further action or document submission is required.',
};
