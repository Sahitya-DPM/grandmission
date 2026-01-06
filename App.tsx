
import React from 'react';
import { Navbar } from './components/Navbar';
import { PreviewDreamHero } from './components/PreviewDreamHero';
import { Hero } from './components/Hero';
import { InteractivePreview } from './components/InteractivePreview';
import { Philosophy } from './components/Philosophy';
import { BeforeAfter } from './components/BeforeAfter';
import { SmileGoals } from './components/SmileGoals';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Disclaimer } from './components/Disclaimer';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* 1. Header - Navbar is above */}
        
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
        
        {/* Commented out for future use */}
        {/* <BeforeAfter /> */}
        {/* <Features /> */}
        {/* <Process /> */}
        {/* <Disclaimer /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
