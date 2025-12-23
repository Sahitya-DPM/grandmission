
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById('evaluation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-32 bg-[#F7F9F7] relative overflow-hidden border-y border-slate-100">
      {/* Structural Watermark */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] select-none pointer-events-none">
        <span className="text-[20rem] font-black tracking-tighter leading-none text-[#3B86F2]">SAGE</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <div className="sticky top-40">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-1 bg-[#2F74B5]"></span>
              </div>
              <p className="text-[#3B86F2] font-bold uppercase tracking-widest leading-relaxed mb-8" style={{ fontSize: '20px' }}>
                MOST PEOPLE DON'T AVOID TREATMENT. THEY AVOID UNCERTAINITY.
              </p>
              <button
                onClick={scrollToForm}
                className="group relative w-full flex items-center justify-center gap-4 px-6 py-6 bg-[#FF9A00] hover:bg-[#0A0E1A] text-white font-black text-sm uppercase tracking-[0.3em] transition-all rounded-none"
              >
                <span className="whitespace-nowrap">Generate Preview</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform shrink-0" />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-12">
            <div className="bg-white p-12 lg:p-16 border-l-4 border-[#2F74B5] shadow-2xl shadow-slate-200/50">
              <div className="space-y-6 text-slate-600 leading-snug" style={{ fontSize: '16px' }}>
                <p className="font-medium">
                  Choosing dental treatment can feel overwhelming when you can't see the outcome.
                </p>
                <div className="space-y-3">
                  <p className="font-bold text-[#0A0E1A] uppercase tracking-wide">Questions like:</p>
                  <ul className="space-y-2 pl-6 leading-snug">
                    <li className="font-medium">Will it suit my face?</li>
                    <li className="font-medium">Will my smile look natural?</li>
                    <li className="font-medium">Is it really worth it?</li>
                  </ul>
                </div>
                <div className="font-bold text-slate-600 border-t border-slate-100 pt-6 space-y-2">
                  <p>That uncertainty stops many people from moving forward.</p>
                  <p className="text-[#2F74B5]">We changed that.</p>
                </div>
              </div>
            </div>
            
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-[#2F74B5] text-white">
                <h4 className="font-black text-xs tracking-[0.3em] uppercase mb-6 opacity-70">The Problem</h4>
                <p className="text-base font-bold leading-relaxed uppercase tracking-tight">
                  Chipped, broken, or missing teeth often make it impossible to imagine a flawless future.
                </p>
              </div>
              <div className="p-10 bg-[#FF9A00] text-white">
                <h4 className="font-black text-xs tracking-[0.3em] uppercase mb-6 opacity-70">The Protocol</h4>
                <p className="text-base font-bold leading-relaxed uppercase tracking-tight">
                  Our cutting-edge smile design technology provides a true-to-life preview before treatment.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
