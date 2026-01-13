
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const goals = [
  {
    tag: "STEP 01",
      title: "Upload Your Photo",
    image: "/images/Step-1.jpeg",
    description: "A clear face photo showing your smile is all we need.",
      cta: "Generate my Smile Preview"
  },
  {
    tag: "STEP 02",
      title: "We Design Your Smile Preview",
    image: "/images/Step-2.jpeg",
    description: "Our dental team uses advanced software to generate a personalized smile simulation.",
      cta: "Generate my Smile Preview"
  },
  {
    tag: "STEP 03",
      title: "Receive Your Smile Preview by Email",
    image: "/images/Step-3.mp4",
    isSlider: true,
    beforeImage: "/images/Before-SD.jpeg",
    afterImage: "/images/After-SD.jpeg",
    description: "You'll get an image showing how your smile can look after treatment.",
      cta: "Generate my Smile Preview"
  }
];

export const SmileGoals: React.FC = () => {
  const [showBefore, setShowBefore] = useState(true);

  // Auto-slider effect for all screen sizes
  useEffect(() => {
    const interval = setInterval(() => {
      setShowBefore((prev) => !prev);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);
  const scrollToForm = () => {
    const element = document.getElementById('evaluation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-12 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-center md:justify-between mb-8 md:mb-16 gap-4 md:gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-[#0A0E1A] mb-4 md:mb-6 tracking-tighter leading-[1]">
              HOW IT <br />
              <span className="text-[#0A0E1A]">WORKS.</span>
            </h2>
            <div className="w-16 h-1.5 bg-[#FF9A00] mx-auto md:mx-0"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-slate-100 border-t border-x">
          {goals.map((goal, idx) => (
            <div key={idx} className={`group flex flex-col bg-white transition-all ${idx !== 2 ? 'md:border-r border-slate-100' : ''} border-b border-slate-100 md:border-b-0`}>
              {/* Image Container */}
              <div className="w-full aspect-[4/5] overflow-hidden bg-slate-50 relative">
                {goal.isSlider ? (
                  <div className="relative w-full h-full">
                    {/* Before Image */}
                    <div 
                      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                        showBefore ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <img 
                        src={goal.beforeImage || "/images/Before-SD.jpeg"} 
                        alt="Before" 
                        className="w-full h-full object-cover object-center grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        onError={(e) => {
                          // Try different extensions if the image fails to load
                          const target = e.target as HTMLImageElement;
                          const src = target.src;
                          if (src.includes('Before-SD.jpeg')) {
                            target.src = src.replace('.jpeg', '.jpg');
                          } else if (src.includes('Before-SD.jpg')) {
                            target.src = src.replace('.jpg', '.png');
                          }
                        }}
                      />
                    </div>

                    {/* After Image */}
                    <div 
                      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                        !showBefore ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <img 
                        src={goal.afterImage || "/images/After-SD.jpeg"} 
                        alt="After" 
                        className="w-full h-full object-cover object-center grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        onError={(e) => {
                          // Try different extensions if the image fails to load
                          const target = e.target as HTMLImageElement;
                          const src = target.src;
                          if (src.includes('After-SD.jpeg')) {
                            target.src = src.replace('.jpeg', '.jpg');
                          } else if (src.includes('After-SD.jpg')) {
                            target.src = src.replace('.jpg', '.png');
                          }
                        }}
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
                ) : (
                  <img 
                    src={goal.image} 
                    alt={goal.title} 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  />
                )}
                <div className="absolute top-8 left-8 z-20">
                  <span className="bg-[#0A0E1A] px-4 py-2 text-xs font-black tracking-[0.3em] text-white uppercase border border-white/10 shadow-xl">
                    {goal.tag}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 md:p-12 flex flex-col border-t border-slate-100 flex-grow text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-[#0A0E1A] mb-4 md:mb-6 tracking-tighter uppercase">
                  {goal.title}
                </h3>
                <p className="text-slate-400 font-bold text-sm uppercase tracking-wider leading-relaxed mb-6 md:mb-12 max-w-[95%] mx-auto md:mx-0">
                  {goal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
