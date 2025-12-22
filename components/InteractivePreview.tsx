
import React from 'react';

export const InteractivePreview: React.FC = () => {
  return (
    <section className="w-full bg-[#F2F2F2] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
          <div>
             <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#2F74B5]"></span>
              <span className="text-[10px] font-black tracking-[0.4em] text-[#2F74B5] uppercase">Live Engine</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0A0E1A] tracking-tighter uppercase leading-[0.9]">
              DYNAMIC <br />
              <span className="text-[#FF9A00]">VISUALIZER.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 border border-slate-200">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Active Simulation Stream</span>
          </div>
        </div>

        <div className="relative group">
          {/* Architectural Framing */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#2F74B5]"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#FF9A00]"></div>
          
          <div className="relative w-full aspect-[16/10] md:aspect-[21/9] lg:h-[700px] overflow-hidden bg-white shadow-[0_50px_100px_-20px_rgba(47,116,181,0.2)]">
            <iframe 
              src="https://smile4d.ai/preview/eaedb500-d22f-4014-bbbf-1f6cbc90c348" 
              className="absolute inset-0 w-full h-full border-none"
              title="Interactive Smile Preview Tool"
              allow="camera; microphone; clipboard-read; clipboard-write"
            />
          </div>

          {/* Technical Overlay Markers */}
          <div className="hidden lg:block absolute -right-24 top-1/2 -translate-y-1/2 rotate-90">
             <span className="text-[10px] font-black text-slate-300 uppercase tracking-[1em]">ALIGNMENT_AXIS_01</span>
          </div>
        </div>
      </div>
    </section>
  );
};
