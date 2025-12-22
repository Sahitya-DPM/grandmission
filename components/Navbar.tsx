
import React from 'react';
import { ShieldCheck, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-slate-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="bg-[#0A0E1A] p-2 rounded-none transition-transform">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-extrabold tracking-tighter text-[#0A0E1A]">GRAND MISSION</span>
              <span className="text-xs font-black text-slate-400 tracking-[0.4em] uppercase">Dentistry</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-12">
            <div className="flex gap-10">
              <a href="#how-it-works" className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 hover:text-[#0A0E1A] transition-colors">Process</a>
              <a href="#benefits" className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 hover:text-[#0A0E1A] transition-colors">Protocol</a>
            </div>
            <div className="flex items-center gap-10">
              <a href="tel:2817898836" className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#0A0E1A] hover:text-[#FF9A00] transition-colors">
                <Phone className="h-4 w-4" />
                (281) 789-8836
              </a>
              <button className="bg-[#FF9A00] text-white px-12 py-6 rounded-none text-xs font-black uppercase tracking-[0.3em] hover:bg-[#0A0E1A] transition-all active:translate-y-[1px] shadow-lg shadow-orange-500/10">
                Book Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
