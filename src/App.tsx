import { useState } from 'react';
import { DynamicBackground } from './components/sections/DynamicBackground';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Certificates } from './components/sections/Certificates';
import { Education } from './components/sections/Education';
import { GitHubSection } from './components/sections/GitHub';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { Cursor } from './components/layout/Cursor';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { Navbar } from './components/layout/Navbar';
import { Loader } from './components/ui/Loader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen selection:bg-[#ff5a00] selection:text-white overflow-hidden font-sans pt-0">
      
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <SmoothScroll>
        <Cursor />
        <DynamicBackground />
        <Navbar />
        
        <main className="relative z-10 w-full flex flex-col items-center">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Certificates />
          <GitHubSection />
          <Contact />
        </main>
      </SmoothScroll>
    </div>
  );
}

export default App;
