import React, { useState } from 'react';
import { Section } from '../layout/Section';
import { GitBranch, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DemoLoader } from '../ui/DemoLoader';

const projects = [
  {
    title: 'Gesture-Based Control of Robots',
    description: 'Real-time hand gesture recognition using Mediapipe and supervised KNN learning to control a virtual robot in a Pygame GUI.',
    tags: ['Python', 'Mediapipe', 'OpenCV', 'Scikit-Learn', 'Pygame'],
    github: '#',
    demo: '#',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7316801000307052544'
  },
  {
    title: 'F1 Performance Analytics Dashboard',
    description: 'Transforming decades of Formula 1 data (1950-2024) into interactive stories. Deep dive into driver consistency, constructor eras, global circuits, and race-day strategy.',
    tags: ['Power BI', 'Data Analytics', 'Data Visualization', 'DAX'],
    github: '#',
    demo: 'https://app.powerbi.com/view?r=eyJrIjoiOGIzNTIwODYtYTdiZi00Y2Y5LWFiZjEtYzc1MmRmMzIxZjFjIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D&pageName=121d552f5cf1c8d33df3',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiOGIzNTIwODYtYTdiZi00Y2Y5LWFiZjEtYzc1MmRmMzIxZjFjIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D&pageName=121d552f5cf1c8d33df3'
  },
  {
    title: 'DSA-Based Library Tracker',
    description: 'A robust Graphical User Interface Library Management System. Demonstrates practical implementations of Binary Search Trees, Stacks, Queues, and Hash Maps.',
    tags: ['C++', 'Qt Framework', 'DSA', 'Algorithms'],
    github: '#',
    demo: '#',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7355184316097728512'
  }
];

const ProjectCard = ({ project, idx }: { project: any, idx: number }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
    >
      
      {/* Context Section (Parallel to Demo) */}
      <div className="flex-1 flex flex-col justify-center text-left">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
          <span className="text-[#ff8c00] text-xl font-mono block mb-2 opacity-80">Module 0{idx + 1}</span>
          {project.title}
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed mb-10 border-l-2 border-[#ff8c00]/30 pl-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-10">
          {project.tags.map((tag: string) => (
            <span 
              key={tag} 
              className="text-sm font-mono tracking-wider px-4 py-2 rounded-lg border border-[#ff8c00]/20 text-[#ff5a00] bg-[#ff8c00]/5 shadow-[0_0_15px_rgba(255,140,0,0.05)] cursor-default transition-all hover:bg-[#ff8c00]/20 hover:-translate-y-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 items-center">
          <a href={project.github} className="flex items-center gap-2 text-white hover:text-[#ff8c00] transition-colors pb-1 border-b border-transparent hover:border-[#ff8c00]">
            <GitBranch size={20} /> View Source Architecture
          </a>
          
          {project.demo && project.demo !== '#' && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#ff8c00] hover:text-[#ff5a00] hover:glow-orange-alt transition-colors pb-1 border-b border-transparent hover:border-[#ff5a00]">
              <ExternalLink size={20} /> Open Direct Demo
            </a>
          )}
        </div>
      </div>

      {/* Live Interactive Embed Section */}
      <div className="flex-1 w-full relative group perspective-1000">
        <div className="absolute inset-4 bg-[#ff8c00] rounded-[2rem] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000 ease-in-out" />
        
        <div className="relative aspect-[4/3] md:aspect-video lg:aspect-[4/3] w-full rounded-2xl overflow-hidden glass border border-[#ff8c00]/30 shadow-[0_0_50px_rgba(255,90,0,0.15)] group-hover:border-[#ff8c00]/60 group-hover:shadow-[0_0_80px_rgba(255,90,0,0.25)] transition-all duration-700 transform-gpu group-hover:rotate-y-2 group-hover:rotate-x-2">
          
          <div className="absolute top-0 inset-x-0 h-8 bg-black/60 backdrop-blur-md border-b border-white/10 flex items-center px-4 gap-2 z-20 pointer-events-none">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="ml-4 text-xs font-mono text-white/30 truncate flex-1 flex justify-center">{project.title.toLowerCase().replace(/\s+/g, '-')}</div>
          </div>

          {project.embedUrl ? (
            <>
              <AnimatePresence>
                {!iframeLoaded && (
                  <motion.div exit={{ opacity: 0 }} className="absolute inset-0 z-10 w-full h-full">
                    <DemoLoader />
                  </motion.div>
                )}
              </AnimatePresence>
              <iframe 
                src={project.embedUrl}
                onLoad={() => setIframeLoaded(true)}
                className={`w-full h-full absolute inset-0 pt-8 bg-black transition-opacity duration-1000 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                frameBorder="0"
                allowFullScreen
                title={project.title}
              />
            </>
          ) : (
            <div className="w-full h-full absolute inset-0 pt-8 bg-black flex flex-col items-center justify-center text-gray-500 p-8 text-center">
               <span className="w-24 h-24 mb-4 opacity-20"><GitBranch size={96} /></span>
               <p className="font-mono">Live Demo Module Initializing...</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
          <span className="w-12 h-[2px] bg-[#ff5a00] inline-block" />
          Featured Modules
        </h2>
        
        <div className="flex flex-col gap-32">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </Section>
  );
};
