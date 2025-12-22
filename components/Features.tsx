
import React from 'react';
import { Camera, Shield, Heart, Zap } from 'lucide-react';

const features = [
  {
    number: "01",
    icon: Camera,
    title: "VISUAL CLARITY",
    description: "Move beyond words. See a high-fidelity simulation of your future smile today using our proprietary AI projection engine.",
  },
  {
    number: "02",
    icon: Shield,
    title: "CLINICAL CONFIDENCE",
    description: "Feel certain about your path forward. Every visualization is verified against anatomical markers for surgical feasibility.",
  },
  {
    number: "03",
    icon: Zap,
    title: "INSTANT RESULTS",
    description: "Efficiency without compromise. Get your comprehensive aesthetic analysis delivered directly to your inbox in minutes.",
  },
  {
    number: "04",
    icon: Heart,
    title: "PATIENT FOCUSED",
    description: "Human-centric architecture. Experience a personalized journey designed specifically around your unique facial profile.",
  }
];

export const Features: React.FC = () => {
  return (
    <section id="benefits" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-t border-slate-200 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-[#2F74B5]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-[#2F74B5]"></span>
              <span className="text-xs font-black tracking-[0.4em] text-[#2F74B5] uppercase">Clinical Standard</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-extrabold text-[#0A0E1A] tracking-tighter uppercase leading-[0.85]">
              CORE <br />
              <span className="text-[#2F74B5]">PROTOCOL.</span>
            </h2>
          </div>
          <div className="bg-[#0A0E1A] p-10 text-white max-w-[380px]">
             <p className="text-xs font-black leading-relaxed uppercase tracking-[0.2em] mb-6">
               Biological Data Integration
             </p>
             <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
               Combining digital mapping with clinical oversight for 99.4% predictive accuracy.
             </p>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group relative p-12 bg-white border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2"
            >
              {/* Top Meta Info */}
              <div className="flex items-center justify-between mb-16">
                <span className="text-5xl font-black text-slate-100 group-hover:text-blue-100 transition-colors duration-500 tracking-tighter leading-none">
                  {feature.number}
                </span>
                <div className="w-14 h-14 bg-[#0A0E1A] flex items-center justify-center group-hover:bg-[#2F74B5] transition-all duration-500">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-sm font-black text-[#0A0E1A] mb-8 tracking-[0.3em] uppercase leading-tight">
                {feature.title}
              </h3>
              <p className="text-base text-slate-500 leading-relaxed font-bold uppercase tracking-wider mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                {feature.description}
              </p>

              {/* Brand Accent */}
              <div className="h-1.5 w-10 bg-slate-100 group-hover:w-full group-hover:bg-[#FF9A00] transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
