import { RecoveryPlanData } from '../../lib/types';

interface RecoveryFlowProps {
  plan: RecoveryPlanData;
}

export function RecoveryFlow({ plan }: RecoveryFlowProps) {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-bold tracking-tight mb-2">Recovery Plan</h2>
        <p className="text-[#525252]">Sequential steps to resolve the status mismatch.</p>
      </div>

      <div className="flex flex-col gap-6">
        {plan.steps.map((step, index) => (
          <div 
            key={step.id} 
            className="flex gap-4 md:gap-6 relative group"
          >
            {/* Connection line */}
            {index !== plan.steps.length - 1 && (
              <div className="absolute left-6 top-14 bottom-[-1.5rem] w-px bg-[#e5e0d8] group-hover:bg-[#c2410c] transition-colors duration-300"></div>
            )}
            
            <div className="flex-shrink-0 w-12 h-12 bg-white border border-[#e5e0d8] rounded-full flex items-center justify-center font-mono font-medium text-sm text-[#1c1c1c] shadow-sm z-10 group-hover:border-[#c2410c] group-hover:text-[#c2410c] transition-colors duration-300">
              {step.title}
            </div>
            
            <div className="flex flex-col gap-3 pb-6 flex-grow">
              <h3 className="text-lg font-semibold mt-2.5 text-[#1c1c1c]">{step.action}</h3>
              
              <div className="grid sm:grid-cols-2 gap-4 text-sm mt-1">
                <div className="bg-white p-4 rounded-lg border border-[#e5e0d8]">
                  <span className="block text-xs font-semibold text-[#525252] uppercase tracking-wide mb-1">Why it matters</span>
                  <p className="text-[#1c1c1c]">{step.whyItMatters}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-[#e5e0d8]">
                  <span className="block text-xs font-semibold text-[#525252] uppercase tracking-wide mb-1">You will need</span>
                  <p className="text-[#1c1c1c]">{step.citizenNeeds}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {plan.recommendation && (
        <div className="mt-4 p-5 bg-[#fff8f3] border-l-4 border-[#c2410c] rounded-r-lg">
          <p className="text-xs font-semibold tracking-wider text-[#c2410c] uppercase mb-2">
            RAASTA Recommendation
          </p>
          <p className="text-[#1c1c1c] font-medium">
            {plan.recommendation}
          </p>
          <p className="text-xs text-[#525252] mt-2 italic">
            * This is an automated recommendation, not official government policy.
          </p>
        </div>
      )}
    </section>
  );
}
