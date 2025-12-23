
import React from 'react';
import { ArrowUp, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070A] text-white pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20 mb-28">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-12">
            <div className="flex items-center">
              <img 
                src="/images/grand_mission-logo footer.webp" 
                alt="Grand Mission Dentistry Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-bold uppercase tracking-[0.2em] opacity-70 max-w-[320px]">
              A nexus of clinical excellence and aesthetic precision. Engineering the future of personalized dental care in Richmond, TX.
            </p>
          </div>
          
          {/* Contact Column */}
          <div className="flex flex-col">
            <h4 className="font-black text-slate-600 mb-12 text-xs uppercase tracking-[0.4em]">CONTACT</h4>
            <div className="space-y-10">
              <div className="flex gap-5 items-start">
                <MapPin className="w-5 h-5 text-slate-600 shrink-0 mt-1" />
                <div className="flex flex-col gap-3">
                  <span className="text-sm text-white font-black uppercase tracking-[0.15em] leading-tight">
                    Grand Mission Dentistry Of Richmond
                  </span>
                  <span className="text-sm text-slate-400 font-bold uppercase tracking-[0.15em] leading-relaxed">
                    8620 Grand Mission Blvd Ste E,<br />
                    Richmond, TX 77407
                  </span>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <Phone className="w-5 h-5 text-slate-600 shrink-0" />
                <a href="tel:2817898836" className="text-sm text-white font-black uppercase tracking-[0.15em] hover:text-[#FF9A00] transition-colors">
                  (281) 789-8836
                </a>
              </div>
            </div>
          </div>

          {/* Hours Column */}
          <div className="flex flex-col">
            <h4 className="font-black text-slate-600 mb-12 text-xs uppercase tracking-[0.4em]">OFFICE HOURS</h4>
            <ul className="space-y-6 text-sm text-white font-black uppercase tracking-[0.15em]">
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>MONDAY</span> 
                <span className="text-slate-400 tracking-tighter">8:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>TUESDAY</span> 
                <span className="text-slate-400 tracking-tighter">10:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>WEDNESDAY</span> 
                <span className="text-slate-400 tracking-tighter">10:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>THURSDAY</span> 
                <span className="text-slate-400 tracking-tighter">8:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>FRIDAY</span> 
                <span className="text-slate-400 tracking-tighter">8:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>SATURDAY</span> 
                <span className="text-slate-400 tracking-tighter">8:00 AM – 3:00 PM</span>
              </li>
              <li className="flex justify-between items-center pt-2">
                <span>SUNDAY</span> 
                <span className="text-[#FF9A00] font-black">CLOSED</span>
              </li>
            </ul>
          </div>

          {/* Governance Column */}
          <div className="flex flex-col">
            <h4 className="font-black text-slate-600 mb-12 text-xs uppercase tracking-[0.4em]">GOVERNANCE</h4>
            <ul className="space-y-8 text-sm text-white font-black uppercase tracking-[0.2em]">
              <li><a href="#" className="hover:text-[#FF9A00] transition-colors">PRIVACY POLICY</a></li>
              <li><a href="#" className="hover:text-[#FF9A00] transition-colors">HIPAA STANDARDS</a></li>
              <li><a href="#" className="hover:text-[#FF9A00] transition-colors">DATA SECURITY</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-xs text-slate-600 font-black uppercase tracking-[0.5em]">
            &copy; {new Date().getFullYear()} GRAND MISSION DENTISTRY. ALL RIGHTS RESERVED.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-5 text-xs font-black uppercase tracking-[0.4em] text-slate-600 hover:text-white transition-all group"
          >
            RETURN TO TOP
            <div className="p-3 border border-slate-800 group-hover:border-white transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
