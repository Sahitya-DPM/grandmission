import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, ArrowRight, MoveHorizontal } from 'lucide-react';

export const PreviewDreamHero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);
  const [showBefore, setShowBefore] = useState(true);
  const [viewMode, setViewMode] = useState<'photo' | 'video'>('photo');
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Auto-slider effect for mobile (only in photo mode)
  useEffect(() => {
    if (!isMobile || viewMode !== 'photo') return;
    
    const interval = setInterval(() => {
      setShowBefore((prev) => !prev);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, [isMobile, viewMode]);

  const handleSliderMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseDown = () => {
    if (!containerRef.current) return;
    containerRef.current.style.cursor = 'ew-resize';
  };

  const handleMouseUp = () => {
    if (!containerRef.current) return;
    containerRef.current.style.cursor = 'ew-resize';
  };

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center text-center py-4 md:py-8">
          
          {/* Enhanced Main Heading with Staggered Animation */}
          <div className="mb-4 md:mb-12">
            <h1 className="font-extrabold leading-[0.9] tracking-tighter text-2xl md:text-5xl lg:text-6xl" style={{ fontSize: 'clamp(24px, 5vw, 60px)' }}>
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
            <p className="text-xs md:text-base text-slate-300 font-bold leading-relaxed mt-2 md:mt-4 md:whitespace-nowrap overflow-hidden text-ellipsis">
              Upload a simple photo and see a realistic preview of how your smile can look after treatment. NO guesswork, NO pressure.
            </p>
          </div>

          {/* Single Image Preview */}
          <div className="w-full max-w-3xl md:max-w-3xl mx-auto mb-6 md:mb-12 relative group">
            {/* Mobile: Photo/Video Preview with Before/After */}
            <div className="md:hidden relative w-[calc(100%+0.5rem)] -mx-0.5 md:mx-0 overflow-hidden bg-black rounded-lg md:rounded-2xl shadow-[0_50px_100px_-20px_rgba(47,116,181,0.2)]">
              <div className="relative w-full h-[calc(100vh-280px)] overflow-hidden bg-black">
                {/* Photo Preview Mode */}
                {viewMode === 'photo' && (
                  <div className="relative w-full h-full">
                    {/* Before Image */}
                    <div 
                      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                        showBefore ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <img 
                        src="/images/before-mobile view.JPG" 
                        className="w-full h-full object-cover" 
                        alt="Before" 
                      />
                    </div>

                    {/* After Image */}
                    <div 
                      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                        !showBefore ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <img 
                        src="/images/after-mobile view.png" 
                        className="w-full h-full object-cover" 
                        alt="After" 
                      />
                    </div>

                    {/* Before/After Toggle Buttons */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2 bg-black/70 backdrop-blur-md px-3 py-2.5 rounded-full">
                      <button
                        onClick={() => setShowBefore(true)}
                        className={`px-5 py-2.5 rounded-full text-xs font-black tracking-[0.2em] uppercase transition-all ${
                          showBefore 
                            ? 'bg-[#FF9A00] text-white' 
                            : 'bg-white/20 text-white/70'
                        }`}
                      >
                        Before
                      </button>
                      <button
                        onClick={() => setShowBefore(false)}
                        className={`px-5 py-2.5 rounded-full text-xs font-black tracking-[0.2em] uppercase transition-all ${
                          !showBefore 
                            ? 'bg-[#FF9A00] text-white' 
                            : 'bg-white/20 text-white/70'
                        }`}
                      >
                        After
                      </button>
                    </div>
                  </div>
                )}

                {/* Video Preview Mode */}
                {viewMode === 'video' && (
                  <div className="relative w-full h-full">
                    {/* Before Image */}
                    <div className="absolute inset-0 w-full h-full z-10">
                      <img 
                        src="/images/before-mobile view.JPG" 
                        className="w-full h-full object-cover" 
                        alt="Before" 
                      />
                    </div>

                    {/* Video */}
                    <div className="absolute inset-0 w-full h-full z-20">
                      <video
                        src="/videos/40e9e18b-71e3-436c-8b02-b9850aeb4e3a.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Tabs - Below Image */}
              <div className="flex justify-center gap-2 bg-black/70 backdrop-blur-md px-2 py-1.5 rounded-full mt-4 mb-2">
                <button
                  onClick={() => {
                    setViewMode('photo');
                    setShowBefore(true);
                  }}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all ${
                    viewMode === 'photo'
                      ? 'bg-[#FF9A00] text-white'
                      : 'bg-white/20 text-white/70'
                  }`}
                >
                  Photo Preview
                </button>
                <button
                  onClick={() => setViewMode('video')}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all ${
                    viewMode === 'video'
                      ? 'bg-[#FF9A00] text-white'
                      : 'bg-white/20 text-white/70'
                  }`}
                >
                  Video Preview
                </button>
              </div>
            </div>

            {/* Desktop: Iframe */}
            <div className="hidden md:block relative w-full overflow-hidden bg-black rounded-2xl shadow-[0_50px_100px_-20px_rgba(47,116,181,0.2)]">
              <div className="relative w-full aspect-[21/9] lg:h-[600px] bg-black min-h-[500px] overflow-hidden">
                <iframe
                  src="https://smile4d.ai/preview/eaedb500-d22f-4014-bbbf-1f6cbc90c348"
                  className="w-full h-full border-none"
                  title="VENEER ARCHITECTURE"
                  allow="camera; microphone; clipboard-read; clipboard-write"
                  scrolling="no"
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
        @media (max-width: 768px) {
          iframe {
            overflow: hidden !important;
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
          }
          iframe::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

