import React, { useRef, useEffect } from 'react';
import { Section } from '../layout/Section';
import { MagneticButton } from '../ui/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      gsap.fromTo('.hero-text', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power4.out', delay: 0.5 }
      );
      
      gsap.fromTo(imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)', delay: 1 }
      );

      // Floating animation for image
      gsap.to(imageRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="home" className="min-h-screen pt-32 pb-20">
      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div ref={textRef} className="flex flex-col gap-6 z-10 relative">
          <h2 className="hero-text text-[#ff8c00] font-mono text-xl tracking-widest uppercase">
            Hello!
          </h2>
          <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5a00] to-[#ff8c00] text-glow">Shreyansh Dixit</span>
          </h1>
          <p className="hero-text text-2xl text-gray-300 font-light mt-4">
            I transform complex data into predictive intelligence and actionable insights.
          </p>
          <p className="hero-text text-lg text-gray-400 mt-2 max-w-xl">
            Specializing in Machine Learning, Statistical Modeling, and Big Data Architecture. Uncovering the hidden patterns that drive the future.
          </p>
          
          <div className="hero-text mt-8 flex flex-wrap gap-4 items-center">
            <MagneticButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore My Work
            </MagneticButton>
            <MagneticButton 
              className="bg-transparent border-[#ff8c00]/50 text-[#ff8c00] hover:bg-[#ff8c00]/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </MagneticButton>
            
            <div className="flex gap-4 ml-2 md:ml-4 pl-2 md:pl-4 border-l border-white/20">
              <a 
                href="https://github.com/shreyanshdxt04" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-full border border-white/10 hover:border-white hover:text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-2 interactable group"
                aria-label="GitHub"
              >
                <GithubIcon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shreyansh-dixit-8849b32a2/" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-full border border-white/10 hover:border-[#22d3ee] hover:text-[#22d3ee] hover:bg-[#22d3ee]/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 hover:-translate-y-2 interactable group"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="relative flex justify-center items-center h-[400px] lg:h-[500px] z-10 perspective-1000">
          {/* Right Column: Interactive Profile Art */}
          <div ref={imageRef} className="relative w-80 h-80 md:w-[480px] md:h-[480px] lg:w-[500px] lg:h-[500px] shrink-0 mt-12 lg:mt-0 flex items-center justify-center interactable perspective-1000">
            {/* Outer Glow Ring (orange-alt) */}
            <div className="absolute inset-0 rounded-full border border-[#ff8c00] glow-orange-alt animate-[spin_10s_linear_infinite]" />
            {/* Inner Glow Ring (Orange) */}
            <div className="absolute inset-4 rounded-full border border-[#ff5a00] glow-orange animate-[spin_8s_linear_infinite_reverse]" />
            
            {/* Image placeholder / real image */}
            <div className="absolute inset-8 rounded-full overflow-hidden bg-[#0a0a0a] border border-[#ff8c00]/30 p-1 glass shadow-[0_0_30px_rgba(255,90,0,0.15)]">
              <div className="w-full h-full rounded-full bg-[#050505] relative overflow-hidden group">
                {/* Fallback */}
                <div className="absolute inset-0 flex items-center justify-center text-6xl bg-gradient-to-br from-[#ff8c00]/10 to-transparent z-0">
                  👨‍💻
                </div>
                {/* Actual Image */}
                <img 
                  src="/profile.png" 
                  alt="Shreyansh Dixit Profile" 
                  className="absolute inset-0 w-full h-full object-cover z-10" 
                  onError={(e) => e.currentTarget.style.opacity = '0'}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};
