import { TimelineEvent } from '../../lib/types';

interface CaseTimelineProps {
  timeline: TimelineEvent[];
}

export function CaseTimeline({ timeline }: CaseTimelineProps) {
  // Add the generated events from today
  const allEvents = [
    ...timeline,
    { date: '19 Aug', title: 'Recovery plan generated' },
    { date: '19 Aug', title: 'Grievance prepared' },
  ];

  return (
    <section className="bg-[#1c1c1c] rounded-xl p-6 text-white shadow-md">
      <div className="mb-6">
        <h2 className="text-sm font-semibold tracking-wider text-[#e5e0d8] uppercase">Case Timeline</h2>
      </div>

      <div className="relative border-l border-[#525252] ml-2 flex flex-col gap-6 pb-2">
        {allEvents.map((event, i) => {
          const isToday = event.date === '19 Aug';
          return (
            <div key={i} className="relative pl-6">
              <div className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ${isToday ? 'bg-[#c2410c]' : 'bg-[#525252]'}`}></div>
              <div className="flex flex-col">
                <span className={`text-xs font-mono mb-1 ${isToday ? 'text-[#c2410c]' : 'text-[#888]'}`}>{event.date}</span>
                <span className="text-sm font-medium">{event.title}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-4 border-t border-[#525252]">
        <p className="text-[10px] text-[#888] uppercase tracking-wider mb-1">Current state:</p>
        <p className="text-sm font-semibold text-white tracking-wide">WAITING FOR CITIZEN ACTION</p>
      </div>
    </section>
  );
}
