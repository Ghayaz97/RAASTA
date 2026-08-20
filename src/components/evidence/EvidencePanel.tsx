export function EvidencePanel() {
  const evidenceItems = [
    'Application acknowledgement',
    'Application number',
    'Document upload confirmation',
    'Current status screenshot',
  ];

  return (
    <section className="bg-white border border-[#e5e0d8] rounded-xl p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-sm font-semibold tracking-wider text-[#1c1c1c] uppercase">Evidence Checklist</h2>
        <p className="text-xs text-[#525252] mt-1">Keep these ready for any helpdesk queries.</p>
      </div>

      <ul className="space-y-3">
        {evidenceItems.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#f5f2eb] flex items-center justify-center border border-[#e5e0d8]">
              <span className="text-[#c2410c] text-xs">✓</span>
            </div>
            <span className="text-sm text-[#1c1c1c]">{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 pt-4 border-t border-[#f5f2eb]">
        <p className="text-[10px] text-[#525252] uppercase tracking-wider">
          Using synthetic information only
        </p>
      </div>
    </section>
  );
}
