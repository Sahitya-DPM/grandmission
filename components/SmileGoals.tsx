
import React from 'react';
import { ArrowRight } from 'lucide-react';

const goals = [
  {
    tag: "AESTHETICS",
    title: "STRAIGHTEN",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    description: "Correction of crowding, gaps, and misalignment using advanced clear aligner protocols.",
    cta: "Consultation"
  },
  {
    tag: "MAINTENANCE",
    title: "RETAIN",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=1200",
    description: "Preserve clinical outcomes with high-durability, custom-fabricated retention systems.",
    cta: "Order System"
  },
  {
    tag: "PROTECTION",
    title: "SAFEGUARD",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
    description: "Premium occlusal guards designed to prevent clenching and long-term enamel attrition.",
    cta: "Guard Suite"
  }
];

export const SmileGoals: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById('evaluation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-[#0A0E1A] mb-6 tracking-tighter leading-[1]">
              SELECT YOUR <br />
              <span className="text-slate-300">OBJECTIVE.</span>
            </h2>
            <div className="w-16 h-1.5 bg-[#FF9A00]"></div>
          </div>
          <p className="text-slate-500 font-bold text-sm leading-relaxed max-w-[300px] uppercase tracking-[0.2em]">
            Specialized treatments engineered for health and aesthetic perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-slate-100 border-t border-x">
          {goals.map((goal, idx) => (
            <div key={idx} className={`group flex flex-col bg-white transition-all ${idx !== 2 ? 'md:border-r border-slate-100' : ''} border-b border-slate-100 md:border-b-0`}>
              {/* Image Container */}
              <div className="w-full aspect-[4/5] overflow-hidden bg-slate-50 relative">
                <img 
                  src={goal.image} 
                  alt={goal.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-8 left-8">
                  <span className="bg-[#0A0E1A] px-4 py-2 text-xs font-black tracking-[0.3em] text-white uppercase border border-white/10 shadow-xl">
                    {goal.tag}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-12 flex flex-col border-t border-slate-100 flex-grow">
                <h3 className="text-3xl font-black text-[#0A0E1A] mb-6 tracking-tighter uppercase">
                  {goal.title}
                </h3>
                <p className="text-slate-400 font-bold text-sm uppercase tracking-wider leading-relaxed mb-12 max-w-[95%]">
                  {goal.description}
                </p>
                <button 
                  onClick={scrollToForm}
                  className="group relative flex items-center justify-center gap-10 bg-[#FF9A00] hover:bg-[#0A0E1A] text-white py-8 rounded-none font-black text-xs uppercase tracking-[0.3em] transition-all mt-auto"
                >
                  {goal.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
