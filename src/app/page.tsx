'use client';

import { useState } from 'react';
import { IntakeForm } from '../components/intake/IntakeForm';
import { Diagnosis } from '../components/diagnosis/Diagnosis';
import { RecoveryFlow } from '../components/recovery/RecoveryFlow';
import { EvidencePanel } from '../components/evidence/EvidencePanel';
import { GrievanceDraft } from '../components/grievance/GrievanceDraft';
import { CaseTimeline } from '../components/timeline/CaseTimeline';
import { classifyIssue, getRecoveryPlan } from '../lib/recovery-engine';
import { demoCaseData, demoGrievanceData } from '../lib/demo-data';

type AppState = 'intake' | 'analyzing' | 'results';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('intake');
  const [userInput, setUserInput] = useState('');

  const handleIntakeSubmit = (input: string) => {
    setUserInput(input);
    setAppState('analyzing');
    // Simulate slight delay for effect
    setTimeout(() => {
      setAppState('results');
    }, 1200);
  };

  const handleDemoCase = () => {
    handleIntakeSubmit('My DL documents are uploaded but my application still says pending.');
  };

  const classification = appState === 'results' ? classifyIssue(userInput) : null;
  const plan = classification ? getRecoveryPlan(classification) : null;

  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-24 max-w-4xl mx-auto flex flex-col gap-12 pb-32">
      <header className="mb-8">
        <h1 className="text-xl font-bold tracking-tight">RAASTA</h1>
        <p className="text-sm text-[#525252] mt-1 tracking-wide uppercase">Public-Service Recovery Layer</p>
      </header>

      {appState === 'intake' && (
        <IntakeForm onSubmit={handleIntakeSubmit} onDemoCase={handleDemoCase} />
      )}

      {appState === 'analyzing' && (
        <div className="flex flex-col items-center justify-center py-20 text-[#525252] animate-pulse">
          <div className="w-8 h-8 border-2 border-t-[#c2410c] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></div>
          <p>Analyzing problem description...</p>
        </div>
      )}

      {appState === 'results' && plan && (
        <div className="flex flex-col gap-16 transition-opacity duration-700 opacity-100">
          <Diagnosis data={demoCaseData} classification={classification} planTitle={plan.title} />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 flex flex-col gap-16">
              <RecoveryFlow plan={plan} />
              <GrievanceDraft data={demoGrievanceData} />
            </div>
            
            <div className="md:col-span-4 flex flex-col gap-12">
              <EvidencePanel />
              <CaseTimeline timeline={demoCaseData.timeline} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
