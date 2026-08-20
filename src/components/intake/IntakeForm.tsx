import { useState } from 'react';

interface IntakeFormProps {
  onSubmit: (input: string) => void;
  onDemoCase: () => void;
}

export function IntakeForm({ onSubmit, onDemoCase }: IntakeFormProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
    }
  };

  return (
    <section className="flex flex-col gap-8 max-w-2xl transition-opacity duration-500 opacity-100">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#1c1c1c] leading-tight text-balance">
          Something went wrong with a government application?
        </h2>
        <p className="text-lg text-[#525252]">
          Tell RAASTA what happened. We&apos;ll help you understand the problem and find the next step.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <textarea
            className="w-full min-h-[160px] p-4 text-lg border border-[#e5e0d8] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c2410c]/50 focus:border-[#c2410c] transition-all resize-y placeholder:text-gray-400"
            placeholder="My DL documents are uploaded but my application still says pending..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
            aria-label="Describe your problem"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!input.trim()}
            className="w-full sm:w-auto px-8 py-4 bg-[#1c1c1c] text-white font-medium rounded-lg hover:bg-black focus:ring-4 focus:ring-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Find my next step
          </button>
          
          <span className="text-[#525252] text-sm">or</span>
          
          <button
            type="button"
            onClick={onDemoCase}
            className="w-full sm:w-auto px-6 py-4 bg-transparent text-[#525252] font-medium border border-[#e5e0d8] rounded-lg hover:bg-[#f5f2eb] focus:ring-4 focus:ring-gray-100 transition-all"
          >
            Try a demo case
          </button>
        </div>
      </div>
    </section>
  );
}
