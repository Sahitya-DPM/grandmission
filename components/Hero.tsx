
import React, { useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  useEffect(() => {
    // Load GHL form embed script
    const script = document.createElement('script');
    script.src = 'https://link.digitalpresencematters.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://link.digitalpresencematters.com/js/form_embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        #evaluation-form iframe {
          height: 750px !important;
          overflow: hidden !important;
        }
        #evaluation-form iframe::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        #evaluation-form {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
          overflow: hidden !important;
        }
        #evaluation-form::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        #evaluation-form * {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        #evaluation-form *::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        #inline-wlgA39lNyyz2pOEeAE0H {
          height: 750px !important;
          overflow: hidden !important;
        }
        #inline-wlgA39lNyyz2pOEeAE0H::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
      `}</style>
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
          
          <div className="mb-12">
            <h2 className="text-white mb-6 font-bold" style={{ fontSize: '22px' }}>
              DISCLAIMER:
            </h2>
            <div className="text-slate-300 leading-relaxed space-y-4" style={{ fontSize: '14px' }}>
              <p className="uppercase">
                SMILE PREVIEWS ARE DIGITAL SIMULATIONS CREATED TO HELP YOU VISUALIZE POTENTIAL OUTCOMES OF TREATMENT. THESE IMAGES ARE FOR ILLUSTRATIVE PURPOSES ONLY AND ARE NOT A GUARANTEE OF SPECIFIC RESULTS.
             ACTUAL TREATMENT RESULTS MAY VARY BASED ON INDIVIDUAL ORAL HEALTH, ANATOMY, TREATMENT PLAN, COMPLIANCE, AND CLINICAL FACTORS DETERMINED DURING YOUR DENTAL EVALUATION. FINAL OUTCOMES DEPEND ON THE TYPE OF TREATMENT PROVIDED AND HOW YOUR SMILE RESPONDS OVER TIME.
                YOUR DENTIST WILL REVIEW ALL TREATMENT OPTIONS WITH YOU AND DISCUSS WHAT RESULTS MAY BE REALISTICALLY EXPECTED FOR YOUR UNIQUE SMILE.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 opacity-20">
            <div className="h-px flex-grow bg-white"></div>
            <ShieldCheck className="w-6 h-6" />
            <div className="h-px flex-grow bg-white"></div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - GHL Form */}
      <div id="evaluation-form" className="lg:w-[55%] bg-white flex items-center justify-center overflow-hidden p-6 md:p-12 lg:p-16">
        <div className="w-full" style={{ maxWidth: '45rem' }}>
          <div className="mb-8 md:mb-14">
            <h2 className="text-4xl md:text-4xl font-extrabold text-[#0A0E1A] mb-4 tracking-tighter uppercase">
              <span className="inline-block">Smile</span>
              <span className="inline-block ml-2 md:ml-4">Evaluation</span>
            </h2>
            <div className="w-12 h-1.5 bg-[#FF9A00]"></div>
          </div>
          
          <div className="h-full min-h-[500px] md:min-h-[600px] lg:min-h-[750px] overflow-hidden" style={{ overflow: 'hidden' }}>
            <iframe
              src="https://link.digitalpresencematters.com/widget/form/wlgA39lNyyz2pOEeAE0H"
              className="w-full border-none rounded"
              style={{ 
                width: '100%', 
                height: '750px', 
                minHeight: '500px',
                border: 'none', 
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'block'
              }}
              scrolling="no"
              frameBorder="0"
              id="inline-wlgA39lNyyz2pOEeAE0H" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name=" grand mission smile evaluation form"
              data-height="565"
              data-layout-iframe-id="inline-wlgA39lNyyz2pOEeAE0H"
              data-form-id="wlgA39lNyyz2pOEeAE0H"
              title=" grand mission smile evaluation form"
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
