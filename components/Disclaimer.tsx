
import React from 'react';
import { ShieldAlert, FileSearch, Fingerprint, Lock, ArrowUpRight } from 'lucide-react';

const governancePoints = [
  {
    icon: FileSearch,
    title: "SIMULATION ACCURACY",
    text: "AI imagery is an algorithmic projection for educational modeling. Not a guaranteed outcome."
  },
  {
    icon: ShieldAlert,
    title: "PHYSICAL PROTOCOL",
    text: "Implementation requires a comprehensive diagnostic session to verify anatomical readiness."
  },
  {
    icon: Fingerprint,
    title: "DATA INTEGRITY",
    text: "Neural mapping is performed within an encrypted, clinical-grade digital environment."
  },
  {
    icon: Lock,
    title: "HIPAA COMPLIANCE",
    text: "Patient data is managed under the strictest healthcare privacy standards."
  }
];

export const Disclaimer: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Structural Watermark */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="text-[15rem] font-black tracking-tighter leading-none">LEGAL</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 lg:items-center mb-32">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-12 h-[2px] bg-[#FF9A00]"></div>
              <span className="text-xs font-black tracking-[0.4em] text-slate-400 uppercase">Governance</span>
            </div>
            <h2 className="text-6xl lg:text-8xl font-extrabold text-[#0A0E1A] tracking-tighter uppercase leading-[0.85] mb-12">
              CLINICAL <br />
              <span className="text-slate-200">OVERSIGHT.</span>
            </h2>
            <p className="text-slate-500 font-bold text-sm uppercase tracking-widest leading-relaxed max-w-sm">
              Adhering to strict medical frameworks to ensure patient safety and data precision at every stage of the digital transformation.
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
            {governancePoints.map((point, idx) => (
              <div key={idx} className="group relative">
                <div className="flex flex-col gap-8">
                  <point.icon className="w-6 h-6 text-[#FF9A00]" />
                  <div>
                    <h3 className="text-xs font-black text-[#0A0E1A] tracking-[0.2em] uppercase mb-6">
                      {point.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-tight leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-100 pt-20 gap-10">
          <div className="flex items-center gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-black text-[#0A0E1A] uppercase tracking-widest">Grand Mission</span>
              <span className="text-xs font-black text-slate-300 uppercase tracking-[0.3em]">Operational Unit v2.4</span>
            </div>
          </div>

          <button className="group relative flex items-center justify-center gap-10 bg-[#FF9A00] hover:bg-[#0A0E1A] text-white px-16 py-8 rounded-none font-black text-xs uppercase tracking-[0.3em] transition-all shadow-xl shadow-orange-500/10">
            Schedule Diagnostic
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-[#FF9A00] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-[#FF9A00] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  );
};
