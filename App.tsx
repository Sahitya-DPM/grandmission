
import React from 'react';
import { Navbar } from './components/Navbar';
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
        <Hero />
        <InteractivePreview />
        <Philosophy />
        <BeforeAfter />
        <SmileGoals />
        <Features />
        <Process />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
