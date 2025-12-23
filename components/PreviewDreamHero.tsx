import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

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
        <div className="flex flex-col items-center justify-center text-center py-20 lg:py-32">
          
          {/* Enhanced Badge with Animation */}
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-blue-500/40 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent backdrop-blur-md mb-8 group hover:border-blue-500/80 hover:scale-105 transition-all duration-300 rounded-full shadow-lg shadow-blue-500/10">
            <Sparkles className="w-4 h-4 text-blue-400 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-xs font-black tracking-[0.4em] uppercase text-blue-400 group-hover:text-blue-300 transition-colors">AI-POWERED VISUALIZATION</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          </div>

          {/* Enhanced Main Heading with Staggered Animation */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold leading-[0.9] tracking-tighter whitespace-normal">
              <span className="inline-block text-white animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                PREVIEW
              </span>
              <span className="inline-block" style={{ width: '0.4em' }}> </span>
              <span 
                className="inline-block animate-fade-in-up relative"
                style={{ animationDelay: '0.2s' }}
              >
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  THE DREAM
                </span>
              </span>
              <span className="inline-block" style={{ width: '0.4em' }}> </span>
              <span className="inline-block text-white animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                NOW.
              </span>
            </h1>
          </div>

          {/* Enhanced Before/After Photo with 3D Effect */}
          <div className="w-full max-w-5xl mx-auto mb-12 relative group">
            <div className="relative transform-gpu">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-[#FF9A00]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Container with 3D Tilt */}
              <div 
                className="relative w-full aspect-[2/1] overflow-hidden rounded-2xl transform-gpu transition-all duration-500 group-hover:scale-[1.02]"
                style={{
                  transform: !isMobile 
                    ? `perspective(1000px) rotateX(${mousePosition.y * 0.005}deg) rotateY(${mousePosition.x * 0.005}deg)`
                    : 'none',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/images/before-after.png" 
                  alt="Before and After transformation"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Labels */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4 px-2 py-1 md:px-4 md:py-2 bg-black/60 backdrop-blur-sm rounded-lg border border-white/10">
                  <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-wider">BEFORE</span>
                </div>
                <div className="absolute top-2 right-2 md:top-4 md:right-4 px-2 py-1 md:px-4 md:py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-black/10">
                  <span className="text-[10px] md:text-xs font-black text-black uppercase tracking-wider">AFTER</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Subheading with Features */}
          <div className="mb-12 space-y-6">
            <p className="text-xl md:text-2xl text-slate-300 font-bold uppercase tracking-wider max-w-3xl mx-auto leading-relaxed">
              Transform Your Vision Into Reality
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Zap, text: "INSTANT RESULTS" },
                { icon: CheckCircle2, text: "CLINICAL PRECISION" },
                { icon: Sparkles, text: "AI-POWERED" }
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <feature.icon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-black text-slate-300 uppercase tracking-wider">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <a 
            href="#evaluation-form"
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#FF9A00] via-[#FF8A00] to-[#FF9A00] text-white font-black text-sm uppercase tracking-[0.3em] transition-all duration-300 rounded-full overflow-hidden shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-110 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-4">
              START PREVIEW
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A00] via-[#FF9A00] to-[#FF8A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
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

