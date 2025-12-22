
import React, { useState } from 'react';
import { CheckCircle, Upload, Loader2, ShieldCheck, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  return (
    <section className="flex flex-col lg:flex-row min-h-[calc(100vh-88px)]">
      {/* LEFT PANEL */}
      <div className="lg:w-[45%] bg-[#0A0E1A] p-10 lg:p-24 flex flex-col justify-center text-white relative">
        <div className="relative z-10 max-w-lg">
          <div className="inline-block px-4 py-1.5 border border-white/20 mb-10">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-blue-400">AI SMILE ARCHITECTURE</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold mb-10 leading-[0.95] tracking-tighter">
            PREVIEW <br />
            <span className="text-blue-500">THE DREAM</span> <br />
            NOW.
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 leading-relaxed font-bold uppercase tracking-tight">
            Clinical precision meets artificial intelligence. Upload your photo for a high-fidelity visualization of your aesthetic potential.
          </p>

          <div className="space-y-5 mb-16 border-l border-white/10 pl-8">
            {[
              "ZERO COMMITMENT",
              "INSTANT VISUALIZATION",
              "CLINICAL OVERSIGHT"
            ].map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-blue-500"></div>
                <span className="text-white font-black text-xs tracking-[0.4em] uppercase">{bullet}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 opacity-20">
            <div className="h-px flex-grow bg-white"></div>
            <ShieldCheck className="w-6 h-6" />
            <div className="h-px flex-grow bg-white"></div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - Evaluation Form */}
      <div id="evaluation-form" className="lg:w-[55%] bg-white flex items-center justify-center p-8 lg:p-20">
        <div className="w-full max-w-xl">
          {!isSuccess ? (
            <div className="bg-white p-1 md:p-4">
              <div className="mb-14">
                <h2 className="text-4xl font-extrabold text-[#0A0E1A] mb-4 tracking-tighter uppercase">Smile Evaluation</h2>
                <div className="w-12 h-1.5 bg-[#FF9A00]"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Smith"
                      className="w-full px-5 py-5 bg-[#F8FAFC] rounded-none border-slate-100 focus:border-[#FF9A00] outline-none text-base font-bold placeholder:text-slate-300 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="(281) 000-0000"
                      className="w-full px-5 py-5 bg-[#F8FAFC] rounded-none border-slate-100 focus:border-[#FF9A00] outline-none text-base font-bold placeholder:text-slate-300 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="jane@example.com"
                    className="w-full px-5 py-5 bg-[#F8FAFC] rounded-none border-slate-100 focus:border-[#FF9A00] outline-none text-base font-bold placeholder:text-slate-300 transition-all"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Clinical Photo</label>
                  <div className="border border-dashed border-slate-200 rounded-none p-16 text-center hover:border-[#FF9A00] transition-all cursor-pointer relative bg-slate-50/50 group">
                    <input type="file" required className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                    <Upload className="h-8 w-8 text-slate-300 mx-auto mb-4 group-hover:text-[#FF9A00] transition-colors" />
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Drop Portrait File</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="pt-1">
                    <input type="checkbox" required className="w-4 h-4 accent-[#FF9A00] rounded-none border-slate-300" id="consent" />
                  </div>
                  <label htmlFor="consent" className="text-xs text-slate-400 font-bold leading-relaxed cursor-pointer uppercase tracking-widest">
                    I acknowledge this visualization is for illustrative purposes only.
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="group relative w-full py-7 bg-[#FF9A00] hover:bg-[#0A0E1A] text-white rounded-none font-black text-xs uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-8 shadow-lg shadow-orange-500/10"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-4">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      PROCESSING DATA
                    </span>
                  ) : (
                    <>
                      GENERATE PREVIEW
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center p-16 border border-slate-100 bg-white">
                <div className="w-24 h-24 bg-green-50 flex items-center justify-center mx-auto mb-10">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h2 className="text-4xl font-extrabold text-[#0A0E1A] mb-6 tracking-tighter uppercase leading-none">Transmission <br/><span className="text-slate-300">Successful</span></h2>
                <p className="text-slate-400 mb-12 text-sm font-bold leading-relaxed uppercase tracking-[0.2em] max-w-xs mx-auto">
                    Our architects are analyzing your profile. Check your inbox within 24 hours.
                </p>
                <button 
                    onClick={() => setIsSuccess(false)}
                    className="bg-[#FF9A00] text-white px-16 py-7 rounded-none font-black text-xs uppercase tracking-[0.3em] hover:bg-[#0A0E1A] transition-all"
                >
                    New Submission
                </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
