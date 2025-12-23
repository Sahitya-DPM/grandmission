
import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToForm = () => {
    const element = document.getElementById('evaluation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 glass border-b border-slate-200 py-3 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <img 
              src="/images/grand_mission-logo.webp" 
              alt="Grand Mission Dentistry Logo" 
              className="h-8 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Menu */}
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
              <button 
                onClick={scrollToForm}
                className="bg-[#FF9A00] text-white px-12 py-6 rounded-none text-xs font-black uppercase tracking-[0.3em] hover:bg-[#0A0E1A] transition-all active:translate-y-[1px] shadow-lg shadow-orange-500/10"
              >
                Generate my Smile Preview
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#0A0E1A]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col gap-4 pt-4">
              <a 
                href="#how-it-works" 
                onClick={() => setIsMenuOpen(false)}
                className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 hover:text-[#0A0E1A] transition-colors py-2"
              >
                Process
              </a>
              <a 
                href="#benefits" 
                onClick={() => setIsMenuOpen(false)}
                className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 hover:text-[#0A0E1A] transition-colors py-2"
              >
                Protocol
              </a>
              <a 
                href="tel:2817898836" 
                className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#0A0E1A] hover:text-[#FF9A00] transition-colors py-2"
              >
                <Phone className="h-4 w-4" />
                (281) 789-8836
              </a>
              <button 
                onClick={scrollToForm}
                className="bg-[#FF9A00] text-white px-6 py-4 rounded-none text-xs font-black uppercase tracking-[0.3em] hover:bg-[#0A0E1A] transition-all text-left"
              >
                Generate my Smile Preview
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
