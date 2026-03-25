import React from 'react';
import { Section } from '../layout/Section';
import { MagneticButton } from '../ui/MagneticButton';
import { GlassCard } from '../ui/GlassCard';
import { Mail, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="min-h-[80vh]">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto w-full">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Ready to Innovate?
        </h2>
        
        <p className="text-xl text-gray-400 mb-10">
          Ready to unlock the potential of your data? Whether it's training predictive models, analyzing big data, or architecting AI pipelines, let's connect.
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-12 w-full justify-center">
          <a 
            href="mailto:shreyanshdixit200409@gmail.com"
            className="flex items-center justify-center gap-3 px-6 md:px-8 py-4 rounded-xl glass border border-white/10 hover:border-[#ff8c00]/50 hover:bg-[#ff8c00]/5 text-gray-300 hover:text-[#ff8c00] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,140,0,0.15)] interactable group"
          >
            <Mail size={20} className="group-hover:scale-110 transition-transform text-[#ff8c00]" />
            <span className="font-mono tracking-wider text-sm md:text-base">shreyanshdixit200409@gmail.com</span>
          </a>
          
          <a 
            href="tel:+918429899606"
            className="flex items-center justify-center gap-3 px-6 md:px-8 py-4 rounded-xl glass border border-white/10 hover:border-[#22d3ee]/50 hover:bg-[#22d3ee]/5 text-gray-300 hover:text-[#22d3ee] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] interactable group"
          >
            <Phone size={20} className="group-hover:scale-110 transition-transform text-[#22d3ee]" />
            <span className="font-mono tracking-wider text-sm md:text-base">+91 8429899606</span>
          </a>
        </div>
        
        <GlassCard className="w-full max-w-xl p-8 md:p-12 border-[#ff5a00]/30 hover:border-[#ff5a00]/80">
          <form className="flex flex-col gap-6 w-full text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono text-[#ff8c00] uppercase tracking-wider">Communication Channel</label>
              <input 
                type="email" 
                placeholder="system@enter.email" 
                className="bg-black/50 border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff8c00] transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono text-[#ff5a00] uppercase tracking-wider">Transmission Payload</label>
              <textarea 
                placeholder="Initiate connection sequence..." 
                rows={4}
                className="bg-black/50 border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff5a00] transition-colors resize-none"
              />
            </div>
            
            <MagneticButton className="w-full py-4 mt-4 bg-white/5 border border-[#ff8c00] hover:bg-[#ff8c00]/20 text-[#ff8c00]">
              Transmit Signal 🚀
            </MagneticButton>
          </form>
        </GlassCard>

        <div className="flex gap-4 md:gap-8 mt-16 font-mono text-sm tracking-wider">
          <a 
            href="https://github.com/shreyanshdxt04" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-500 hover:text-white hover:scale-110 hover:-translate-y-2 transition-all duration-300 uppercase px-6 py-3 rounded-full hover:bg-white/10 border border-transparent hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] interactable"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/shreyansh-dixit-8849b32a2/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-500 hover:text-[#22d3ee] hover:scale-110 hover:-translate-y-2 transition-all duration-300 uppercase px-6 py-3 rounded-full hover:bg-[#22d3ee]/10 border border-transparent hover:border-[#22d3ee]/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] interactable"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
};
