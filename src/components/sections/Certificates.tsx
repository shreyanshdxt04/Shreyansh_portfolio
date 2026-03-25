import React, { useState } from 'react';
import { Section } from '../layout/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const certificates = [
  { id: 1, title: 'Oracle Data Science Certification', issuer: 'Oracle', link: '/certs/cert_oracle.pdf' },
  { id: 2, title: 'Introduction to Hardware & OS', issuer: 'IBM', link: '/certs/cert_hw.pdf' },
  { id: 3, title: 'Computational Theory & Automata', issuer: 'Infosys', link: '/certs/cert_automata.pdf' },
  { id: 4, title: 'Bits and Bytes of Computer Networking', issuer: 'Google', link: '/certs/cert_networking.pdf' },
  { id: 5, title: 'Computer Communications Specialization', issuer: 'University of Colorado', link: '/certs/cert_comms.pdf' }
];

export const Certificates: React.FC = () => {
  const [certs, setCerts] = useState(certificates);

  const handleNext = () => {
    setCerts(prev => {
      const updated = [...prev];
      const first = updated.shift();
      if (first) updated.push(first);
      return updated;
    });
  };

  const handlePrev = () => {
    setCerts(prev => {
      const updated = [...prev];
      const last = updated.pop();
      if (last) updated.unshift(last);
      return updated;
    });
  };

  return (
    <Section id="certificates" className="overflow-hidden">
      <div className="flex flex-col gap-12 w-full">
        
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#ff8c00] inline-block" />
            Credentials
          </h2>
          
          <div className="flex gap-4">
            <button 
              onClick={handlePrev} 
              className="p-3 rounded-full glass border border-[#ff8c00]/30 hover:glow-orange-alt transition-all text-[#ff8c00] hover:text-white hover:bg-[#ff8c00]/20 active:scale-95 z-20"
              aria-label="Previous Certificate"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext} 
              className="p-3 rounded-full glass border border-[#ff8c00]/30 hover:glow-orange-alt transition-all text-[#ff8c00] hover:text-white hover:bg-[#ff8c00]/20 active:scale-95 z-20"
              aria-label="Next Certificate"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        {/* Infinite Carousel Container */}
        <div className="relative w-full flex items-center min-h-[280px]">
          
          {/* Fading Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          {/* Cards Wrapper */}
          <div className="flex w-full overflow-hidden items-center py-4 px-4 gap-8">
            <AnimatePresence mode="popLayout">
              {certs.map((cert) => (
                <motion.a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    mass: 0.8
                  }}
                  className="relative w-80 md:w-96 h-60 shrink-0 glass neon-border rounded-xl p-6 flex flex-col justify-between overflow-hidden cursor-pointer no-underline block"
                >
                  {/* Subtle Background Glow instead of image */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff8c00] rounded-full blur-[60px] opacity-10 pointer-events-none z-0" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ff5a00] rounded-full blur-[60px] opacity-20 pointer-events-none z-0" />

                  <div className="relative z-10">
                    <span className="text-xs font-mono text-[#ff8c00] uppercase tracking-widest bg-[#ff8c00]/10 px-3 py-1 rounded-full border border-[#ff8c00]/30 inline-block mb-4">
                      {cert.issuer}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <div className="relative z-10 mt-auto flex items-center justify-between">
                    <p className="text-sm text-[#ff8c00] font-mono flex items-center gap-2 hover:text-[#ff5a00] transition-colors">
                       <span className="w-2 h-2 rounded-full bg-[#ff8c00] glow-orange-alt animate-pulse" />
                       View Certificate ↗
                    </p>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        </div>
        
      </div>
    </Section>
  );
};
