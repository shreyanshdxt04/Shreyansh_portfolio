import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Section } from '../layout/Section';
import { GlassCard } from '../ui/GlassCard';

export const About: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal animation already handled by Section component, 
    // but we can add inner stagger here if needed.
    const ctx = gsap.context(() => {
      gsap.from('.about-item', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        }
      });
    }, textRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section id="about">
      <div ref={textRef} className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="about-item text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c00] to-[#ff5a00]">
          System Architecture
        </h2>
        
        <GlassCard variant="neon" className="about-item max-w-3xl text-left leading-relaxed text-gray-300 text-lg md:text-xl">
          <p className="mb-6">
            As a Data Scientist, I specialize in architecting scalable machine learning models and deep neural networks. My focus lies at the intersection of statistical rigor, advanced algorithms, and real-world impact.
          </p>
          <p>
            Whether building predictive pipelines, analyzing complex datasets, or deploying AI solutions, I treat data as the ultimate source of truth—engineering intelligence that adapts, performs, and scales.
          </p>
        </GlassCard>
      </div>
    </Section>
  );
};
