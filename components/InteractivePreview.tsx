
import React, { useState, useEffect } from 'react';

export const InteractivePreview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const carouselImages = [
    {
      id: 1,
      image: '/images/before-after.png',
      title: 'VENEER ARCHITECTURE',
      description: 'Full arch reconstruction using E-max porcelain.'
    },
    {
      id: 2,
      image: '/images/before-after.png',
      title: 'ALIGNER PROTOCOL',
      description: 'Phase 1 orthodontic correction.'
    },
    {
      id: 3,
      image: '/images/before-after.png',
      title: 'ESTHETIC BONDING',
      description: 'Composite rejuvenation for enamel attrition.'
    }
  ];

  return (
    <section className="w-full bg-[#F2F2F2] py-12 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-6">
          <div>
             <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <span className="w-6 md:w-8 h-px bg-[#2F74B5]"></span>
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] text-[#2F74B5] uppercase">Live Engine</span>
            </div>
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-[#0A0E1A] tracking-tighter uppercase leading-[0.9]">
              DYNAMIC <br />
              <span className="text-[#FF9A00]">VISUALIZER.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 md:gap-4 bg-white p-3 md:p-4 border border-slate-200">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest">Photo Preview</span>
          </div>
        </div>

        <div className="relative group">
          {/* Architectural Framing */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#2F74B5]"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#FF9A00]"></div>
          
          {/* Image Carousel */}
          <div className="relative w-full overflow-hidden bg-black shadow-[0_50px_100px_-20px_rgba(47,116,181,0.2)]">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselImages.map((item, index) => (
                <div key={item.id} className="min-w-full relative">
                  <div className="relative w-full aspect-[16/10] md:aspect-[21/9] lg:h-[700px] bg-black">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 md:p-12">
                      <div className="max-w-2xl">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 uppercase tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-base text-slate-200 font-bold uppercase tracking-wide">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-8 right-8 flex gap-2 z-10">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#FF9A00] w-8' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + 3) % 3)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-[#0A0E1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % 3)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-[#0A0E1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Technical Overlay Markers */}
          <div className="hidden lg:block absolute -right-24 top-1/2 -translate-y-1/2 rotate-90">
             <span className="text-[10px] font-black text-slate-300 uppercase tracking-[1em]">ALIGNMENT_AXIS_01</span>
          </div>
        </div>
      </div>
    </section>
  );
};
