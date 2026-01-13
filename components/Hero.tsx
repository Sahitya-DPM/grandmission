import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://link.digitalpresencematters.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for form submission events from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Log all messages for debugging (can be removed in production)
      if (event.origin === 'https://link.digitalpresencematters.com') {
        console.log('Form message received:', event.data);
      }

      // Check if message is from the form domain
      if (event.origin !== 'https://link.digitalpresencematters.com') {
        return;
      }

      // Check for form submission events - handle various message formats
      const data = event.data;
      if (data) {
        // Check for different possible message formats
        const dataString = typeof data === 'string' ? data.toLowerCase() : JSON.stringify(data).toLowerCase();
        const isFormSubmit = 
          data.type === 'form-submit' ||
          data.event === 'form-submit' ||
          data.eventType === 'form-submit' ||
          data.formId === 'MYskIJVkjhH8myMgGoAJ' ||
          data.action === 'submit' ||
          data.status === 'success' ||
          data.status === 'submitted' ||
          dataString.includes('form-submit') ||
          dataString.includes('submitted') ||
          dataString.includes('success') ||
          dataString.includes('complete') ||
          dataString.includes('thank');

        if (isFormSubmit) {
          // Small delay to ensure form processes submission
          setTimeout(() => {
            navigate('/survey');
          }, 500);
        }
      }
    };

    // Listen for postMessage events
    window.addEventListener('message', handleMessage);

    // Also listen for storage events (some forms use localStorage)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key && (e.key.includes('form') || e.key.includes('submit'))) {
        navigate('/survey');
      }
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('storage', handleStorageChange);
      // Cleanup: remove script on unmount
      const existingScript = document.querySelector('script[src="https://link.digitalpresencematters.com/js/form_embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [navigate]);

  return (
    <section className="flex flex-col lg:flex-row min-h-[calc(100vh-88px)]">
      {/* LEFT PANEL */}
      <div className="lg:w-[45%] bg-[#0A0E1A] p-6 md:p-10 lg:p-24 flex flex-col justify-center text-white relative text-center lg:text-left">
        <div className="relative z-10 max-w-lg mx-auto lg:mx-0">
          <div className="inline-block px-4 py-1.5 border border-white/20 mb-6 md:mb-10">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-blue-400">AI SMILE ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 md:mb-10 leading-[0.95] tracking-tighter">
            PREVIEW <br />
            <span className="text-blue-500">THE DREAM</span> <br />
            NOW.
          </h1>
          
          <div className="mb-8 md:mb-12">
            <h2 className="text-white mb-4 md:mb-6 font-bold" style={{ fontSize: '22px' }}>
              DISCLAIMER:
            </h2>
            <div className="text-slate-300 leading-relaxed" style={{ fontSize: '12px' }}>
              <p>
                Smile previews are digital simulations created to help you visualize potential outcomes of treatment. These images are for illustrative purposes only and are not a guarantee of specific results. Actual treatment results may vary based on individual oral health, anatomy, treatment plan, compliance, and clinical factors determined during your dental evaluation. Final outcomes depend on the type of treatment provided and how your smile responds over time. Your dentist will review all treatment options with you and discuss what results may be realistically expected for your unique smile.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 opacity-20">
            <div className="h-px flex-grow bg-white"></div>
            <ShieldCheck className="w-6 h-6" />
            <div className="h-px flex-grow bg-white"></div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - Form */}
      <div id="evaluation-form" className="lg:w-[55%] bg-white p-6 pb-12 md:p-12 lg:p-16">
        <div className="w-full" style={{ maxWidth: '45rem', margin: '0 auto' }}>
          {/* SMILE EVALUATION Heading */}
          <div className="mb-8 md:mb-14 text-center lg:text-left">
            <h2 
              className="text-4xl md:text-4xl font-extrabold mb-4 tracking-tighter uppercase" 
              style={{ 
                fontFamily: 'Sansation, sans-serif', 
                fontWeight: 'bold', 
                color: '#0A0E1A',
                position: 'relative'
              }}
            >
              <span className="inline-block relative" style={{ paddingBottom: '12px' }}>
                SMILE
                <div 
                  className="absolute bg-[#FF9A00]" 
                  style={{ 
                    width: '64px', 
                    left: '0', 
                    bottom: '4px',
                    height: '6px'
                  }}
                ></div>
              </span>
              <span className="inline-block ml-2 md:ml-4">EVALUATION</span>
            </h2>
          </div>

          {/* Form Iframe */}
          <div className="w-full" style={{ height: '648px' }}>
            <iframe
              src="https://link.digitalpresencematters.com/widget/form/MYskIJVkjhH8myMgGoAJ"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
              id="inline-MYskIJVkjhH8myMgGoAJ"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Your New Smile Revealed Before Treatment Begins"
              data-height="648"
              data-layout-iframe-id="inline-MYskIJVkjhH8myMgGoAJ"
              data-form-id="MYskIJVkjhH8myMgGoAJ"
              title="Your New Smile Revealed Before Treatment Begins"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
