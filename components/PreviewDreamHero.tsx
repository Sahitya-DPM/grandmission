import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const PreviewDreamHero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0a0e1a' }}>

      {/* Enhanced Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            backgroundColor: i % 2 === 0 ? 'rgba(59,130,246,0.4)' : 'rgba(255,154,0,0.4)',
            animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Dynamic Gradient Orbs with Mouse Interaction */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] transition-all duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF9A00]/20 rounded-full blur-[100px] transition-all duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          animationDelay: '1s'
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px] animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center text-center py-8">
          
          {/* Enhanced Main Heading with Staggered Animation */}
          <div className="mb-12">
            <h1 className="font-extrabold leading-[0.9] tracking-tighter text-3xl md:text-5xl lg:text-6xl" style={{ fontSize: 'clamp(28px, 5vw, 60px)' }}>
              <span className="block text-white animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Your New Smile
              </span>
              <span 
                className="block animate-fade-in-up relative"
                style={{ animationDelay: '0.2s' }}
              >
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Revealed Before
                </span>
                <span className="inline-block" style={{ width: '0.4em' }}> </span>
                <span className="inline-block text-white">
                  Treatment Begins
                </span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-bold leading-relaxed mt-4 md:whitespace-nowrap overflow-hidden text-ellipsis">
              Upload a simple photo and see a realistic preview of how your smile can look after treatment. NO guesswork, NO pressure.
            </p>
          </div>

          {/* Single Image Preview */}
          <div className="w-full max-w-3xl mx-auto mb-12 relative group">
            <div className="relative w-full overflow-hidden bg-black rounded-2xl shadow-[0_50px_100px_-20px_rgba(47,116,181,0.2)]">
              <div className="relative w-full aspect-[16/10] md:aspect-[21/9] lg:h-[600px] bg-black min-h-[400px] md:min-h-[500px]">
                <iframe
                  src="https://smile4d.ai/preview/eaedb500-d22f-4014-bbbf-1f6cbc90c348"
                  className="w-full h-full border-none"
                  title="VENEER ARCHITECTURE"
                  allow="camera; microphone; clipboard-read; clipboard-write"
                />
              </div>
            </div>
          </div>


          {/* Enhanced CTA Button */}
          <a 
            href="#evaluation-form"
            className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#FF9A00] hover:bg-[#0A0E1A] text-white font-black text-sm uppercase tracking-[0.3em] transition-all rounded-none"
          >
            Generate my Smile Preview
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>

          {/* Enhanced Decorative Elements */}
          <div className="absolute top-1/4 left-10 w-32 h-32 border border-blue-500/20 rotate-45 hidden lg:block animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-[#FF9A00]/20 rotate-12 hidden lg:block animate-pulse"></div>
          <div className="absolute top-1/2 right-20 w-16 h-16 border border-blue-400/15 rotate-45 hidden lg:block animate-bounce-slow"></div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

