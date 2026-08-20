import { DemoCaseData } from '../../lib/types';

interface DiagnosisProps {
  data: DemoCaseData;
  classification: string | null;
  planTitle: string;
}

export function Diagnosis({ data, planTitle }: DiagnosisProps) {
  return (
    <section className="bg-white border border-[#e5e0d8] rounded-xl p-8 shadow-sm">
      <div className="flex flex-col gap-6">
        <header>
          <p className="text-sm font-semibold tracking-wider text-[#c2410c] uppercase mb-1">
            Action Required
          </p>
          <h2 className="text-2xl font-bold tracking-tight">{planTitle}</h2>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#f5f2eb]">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#525252] uppercase tracking-wide">Service</span>
            <span className="font-medium text-sm">{data.service}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#525252] uppercase tracking-wide">Jurisdiction</span>
            <span className="font-medium text-sm">{data.jurisdiction}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#525252] uppercase tracking-wide">Issue</span>
            <span className="font-medium text-sm">Documents uploaded, status still pending</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#525252] uppercase tracking-wide">Data source</span>
            <span className="font-medium text-sm text-[#c2410c]">Demo case</span>
          </div>
        </div>

        <div className="bg-[#faf8f5] p-5 rounded-lg border border-[#e5e0d8]">
          <p className="text-[#1c1c1c] leading-relaxed">
            Your description matches a document-status problem. This prototype cannot access your Parivahan application directly, so it cannot verify the live status.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mt-2">
          <div>
            <h3 className="text-xs font-semibold text-[#525252] uppercase tracking-wide mb-3">What We Know</h3>
            <ul className="text-sm space-y-2 text-[#1c1c1c]">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                Your issue classification
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                Standard recovery steps
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-[#525252] uppercase tracking-wide mb-3">What We Can&apos;t Verify</h3>
            <ul className="text-sm space-y-2 text-[#525252]">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">○</span>
                Actual Parivahan DB status
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">○</span>
                Officer assignments
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
