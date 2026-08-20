import { GrievanceData } from '../../lib/types';

interface GrievanceDraftProps {
  data: GrievanceData;
}

export function GrievanceDraft({ data }: GrievanceDraftProps) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight">Prepare a grievance</h2>
        <button className="text-sm font-medium text-[#c2410c] hover:underline">Copy to clipboard</button>
      </div>

      <div className="bg-white border border-[#e5e0d8] rounded-xl p-6 md:p-8 font-mono text-sm leading-relaxed shadow-sm">
        <div className="flex flex-col gap-6">
          
          <div className="grid grid-cols-2 gap-4 border-b border-[#f5f2eb] pb-6">
            <div>
              <span className="block text-xs font-semibold text-[#525252] uppercase tracking-wide mb-1">Service</span>
              <span className="text-[#1c1c1c]">{data.service}</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-[#525252] uppercase tracking-wide mb-1">Application</span>
              <span className="text-[#1c1c1c]">{data.applicationNumber}</span>
            </div>
          </div>

          <div>
            <span className="block text-xs font-semibold text-[#525252] uppercase tracking-wide mb-2">Issue</span>
            <p className="text-[#1c1c1c]">{data.issue}</p>
          </div>

          <div>
            <span className="block text-xs font-semibold text-[#525252] uppercase tracking-wide mb-2">Timeline</span>
            <ul className="space-y-1">
              {data.timeline.map((event, i) => (
                <li key={i} className="text-[#1c1c1c]">
                  <span className="text-[#525252] w-24 inline-block">{event.date}:</span> {event.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-[#f5f2eb]">
            <span className="block text-xs font-semibold text-[#525252] uppercase tracking-wide mb-2">Request</span>
            <p className="text-[#1c1c1c]">{data.request}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
