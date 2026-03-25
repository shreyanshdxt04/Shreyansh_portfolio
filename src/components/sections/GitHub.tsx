import React from 'react';
import { Section } from '../layout/Section';
import { GitHubCalendar } from 'react-github-calendar';
import { GlassCard } from '../ui/GlassCard';
import { GithubIcon } from '../ui/Icons';

export const GitHubSection: React.FC = () => {
  return (
    <Section id="github">
      <div className="flex flex-col gap-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-[#ff5a00] inline-block" />
          Open Source
        </h2>
        
        <GlassCard variant="neon" className="flex flex-col items-center py-10 overflow-hidden">
          <div className="w-full overflow-x-auto custom-scrollbar pb-4 flex justify-center">
            <GitHubCalendar 
              username="shreyanshdxt04" 
              blockSize={15}
              blockMargin={5}
              fontSize={14}
              theme={{
                light: ['#0f0f0f', '#3a1a08', '#7a3400', '#cc5500', '#ff8c00'],
                dark: ['#0f0f0f', '#3a1a08', '#7a3400', '#cc5500', '#ff8c00'],
              }}
              colorScheme="dark"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 w-full mt-10 text-center">
            <div className="flex flex-col gap-1 p-4 rounded-xl border border-transparent hover:border-[#ff8c00]/20 hover:bg-[#ff8c00]/5 transition-all duration-300 hover:-translate-y-2 interactable">
              <span className="text-3xl font-bold text-[#ff8c00]">450+</span>
              <span className="text-xs md:text-sm text-gray-400 font-mono tracking-wider">Problems Solved</span>
            </div>
            <div className="flex flex-col gap-1 p-4 rounded-xl border border-transparent hover:border-[#ff5a00]/20 hover:bg-[#ff5a00]/5 transition-all duration-300 hover:-translate-y-2 interactable">
              <span className="text-3xl font-bold text-[#ff5a00]">120</span>
              <span className="text-xs md:text-sm text-gray-400 font-mono tracking-wider">Day Streak</span>
            </div>
            <div className="flex flex-col gap-1 p-4 rounded-xl border border-transparent hover:border-[#ff8c00]/20 hover:bg-[#ff8c00]/5 transition-all duration-300 hover:-translate-y-2 interactable">
              <span className="text-3xl font-bold text-[#ff8c00]">15+</span>
              <span className="text-xs md:text-sm text-gray-400 font-mono tracking-wider">Repositories</span>
            </div>
            <div className="flex flex-col gap-1 p-4 rounded-xl border border-transparent hover:border-[#ff5a00]/20 hover:bg-[#ff5a00]/5 transition-all duration-300 hover:-translate-y-2 interactable">
              <span className="text-3xl font-bold text-[#ff5a00]">1.2k</span>
              <span className="text-xs md:text-sm text-gray-400 font-mono tracking-wider">Contributions</span>
            </div>
          </div>

          <div className="flex justify-center mt-12 w-full">
            <a 
              href="https://github.com/shreyanshdxt04" 
              target="_blank" 
              rel="noreferrer"
              className="group relative flex items-center gap-3 px-8 py-4 bg-[#ff8c00]/5 hover:bg-[#ff8c00]/10 border border-[#ff8c00]/30 hover:border-[#ff8c00] rounded-full text-[#ff8c00] font-bold tracking-wider uppercase transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,140,0,0.4)] hover:-translate-y-2 interactable"
            >
              <GithubIcon size={24} className="group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500" />
              <span>Explore GitHub Profile</span>
            </a>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
};
