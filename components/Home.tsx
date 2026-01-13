import React from 'react';
import { Navbar } from './Navbar.tsx';
import { Footer } from './Footer.tsx';
import { PreviewDreamHero } from './PreviewDreamHero.tsx';
import { Hero } from './Hero.tsx';
import { InteractivePreview } from './InteractivePreview.tsx';
import { Philosophy } from './Philosophy.tsx';
import { SmileGoals } from './SmileGoals.tsx';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Your New Smile Revealed Before Treatment Begins section */}
        <PreviewDreamHero />
        
        {/* 2. See Your Final Result, First section */}
        <Philosophy />
        
        {/* 3. SELECT YOUR OBJECTIVE. section */}
        <SmileGoals />
        
        {/* 4. Live Engine DYNAMIC VISUALIZER. section */}
        <InteractivePreview />
        
        {/* 5. PREVIEW THE DREAM NOW. Section */}
        <Hero />
      </main>
      <Footer />
    </div>
  );
};
