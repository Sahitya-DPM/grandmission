
import React, { useState, useRef } from 'react';
import { MoveHorizontal } from 'lucide-react';

const cases = [
  {
    title: "VENEER ARCHITECTURE",
    before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200",
    after: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200",
    desc: "Full arch reconstruction using E-max porcelain."
  },
  {
    title: "ALIGNER PROTOCOL",
    before: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200",
    after: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1200",
    desc: "Phase 1 orthodontic correction."
  },
  {
    title: "ESTHETIC BONDING",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
    after: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1200",
    desc: "Composite rejuvenation for enamel attrition."
  }
];

const ComparisonSlider = ({ before, after }: { before: string, after: string }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-none overflow-hidden cursor-ew-resize select-none bg-slate-100 border border-slate-100 shadow-2xl"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <img src={after} className="absolute inset-0 w-full h-full object-cover" alt="After" />
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden border-r border-white/40 z-10"
        style={{ width: `${sliderPos}%` }}
      >
        <img src={before} className="absolute inset-0 w-full h-full object-cover grayscale-[20%]" alt="Before" style={{ width: `${10000 / sliderPos}%` }} />
      </div>

      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white z-20 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#FF9A00] text-white flex items-center justify-center shadow-2xl">
          <MoveHorizontal className="w-5 h-5" />
        </div>
      </div>

      <div className="absolute top-2 left-2 md:top-6 md:left-6 px-2 py-1 md:px-4 md:py-2 bg-[#0A0E1A] text-white text-[10px] md:text-xs font-black tracking-[0.2em] uppercase z-20">Before</div>
      <div className="absolute top-2 right-2 md:top-6 md:right-6 px-2 py-1 md:px-4 md:py-2 bg-white text-[#0A0E1A] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase z-20 border border-slate-100">After</div>
    </div>
  );
};

export const BeforeAfter: React.FC = () => {
  return (
    <section className="py-32 bg-[#F4F6F4] relative border-y border-slate-200 overflow-hidden">
      {/* Brand Structural Accents */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#3B86F2]/20"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-[#3B86F2]/5"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-24 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-1.5 bg-[#2F74B5]"></div>
              <span className="text-xs font-black tracking-[0.4em] text-[#2F74B5] uppercase">Clinical Registry</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-extrabold text-[#0A0E1A] tracking-tighter uppercase leading-none">
              HISTORICAL <span className="text-[#3B86F2]">EVIDENCE.</span>
            </h2>
          </div>
          <div className="px-10 py-8 border-l-4 border-[#FF9A00] bg-white shadow-xl shadow-slate-200/50">
            <p className="text-xs font-black text-[#0A0E1A] uppercase tracking-[0.4em] leading-relaxed">
              Verified outcomes from the <br />Grand Mission Dental Archives.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {cases.map((item, idx) => (
            <div key={idx} className="group flex flex-col bg-white p-5 shadow-2xl transition-all hover:-translate-y-2">
              <ComparisonSlider before={item.before} after={item.after} />
              <div className="pt-10 pb-6 px-6 flex-grow flex flex-col border-t border-slate-100 mt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-2 h-2 bg-[#2F74B5]"></div>
                  <h3 className="text-sm font-black text-[#0A0E1A] tracking-[0.2em] uppercase">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-tight leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
