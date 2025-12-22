
import React from 'react';
import { Camera, BrainCircuit, Eye, ClipboardList, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "CAPTURE",
    subtitle: "DATA ACQUISITION",
    icon: Camera,
    color: "bg-blue-500",
    lightColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    description: "Submit a high-fidelity portrait for biometric mapping."
  },
  {
    number: "02",
    title: "ANALYZE",
    subtitle: "NEURAL PROCESSING",
    icon: BrainCircuit,
    color: "bg-slate-400",
    lightColor: "bg-slate-500/10",
    textColor: "text-slate-400",
    description: "AI evaluates 120+ anatomical markers for precision."
  },
  {
    number: "03",
    title: "PREVIEW",
    subtitle: "VISUAL PROJECTION",
    icon: Eye,
    color: "bg-white",
    lightColor: "bg-white/10",
    textColor: "text-white",
    description: "Review your 3D-accurate smile in cinematic detail."
  },
  {
    number: "04",
    title: "EXECUTE",
    subtitle: "CLINICAL STRATEGY",
    icon: ClipboardList,
    color: "bg-[#FF9A00]",
    lightColor: "bg-[#FF9A00]/10",
    textColor: "text-[#FF9A00]",
    description: "Finalize your surgical roadmap with our specialists."
  }
];

export const Process: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById('evaluation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="how-it-works" className="py-32 bg-[#0A0E1A] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2F74B5]/10 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-px bg-[#FF9A00]"></span>
              <span className="text-xs font-black tracking-[0.4em] text-slate-500 uppercase">Operational Flow</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tighter uppercase leading-[0.85] mb-8">
              THE <br />
              <span className="text-[#2F74B5]">EVOLUTION.</span>
            </h2>
            <p className="text-slate-400 font-bold text-sm uppercase tracking-[0.2em] max-w-sm leading-relaxed">
              A meticulously engineered journey from diagnostic capture to surgical execution.
            </p>
          </div>
          
          <button 
            onClick={scrollToForm}
            className="group relative flex items-center justify-center gap-10 bg-[#FF9A00] hover:bg-white text-white hover:text-[#0A0E1A] px-20 py-10 rounded-none font-black text-sm uppercase tracking-[0.4em] transition-all shadow-2xl shadow-orange-500/20"
          >
            Start Sequence
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col bg-white/5 border border-white/10 p-12 transition-all duration-500 hover:bg-white/10 hover:border-[#2F74B5]/50"
            >
              <div className="flex items-center justify-between mb-20">
                <div className={`w-16 h-16 ${step.lightColor} flex items-center justify-center border border-white/5`}>
                  <step.icon className={`w-7 h-7 ${step.textColor}`} />
                </div>
                <span className="text-6xl font-black text-white/5 group-hover:text-[#2F74B5]/20 transition-colors leading-none tracking-tighter">
                  {step.number}
                </span>
              </div>

              <div className="mt-auto">
                <p className={`text-xs font-black tracking-[0.3em] mb-6 uppercase ${step.textColor}`}>
                  {step.subtitle}
                </p>
                <h3 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-tight leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  {step.description}
                </p>
              </div>

              <div className={`absolute bottom-0 left-0 w-full h-[6px] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ${step.color}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
