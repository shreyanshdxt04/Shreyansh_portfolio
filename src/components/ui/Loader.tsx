import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

export const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';
    
    // Complete after exact animation duration
    const timer = setTimeout(() => {
      document.body.style.overflow = 'unset';
      onComplete();
    }, 3000); // 3s matches --duration in css
    
    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#050505] transition-colors duration-1000"
      style={{ backgroundColor: 'var(--loader-bg)' }}
    >
      <div className="loader scale-75 md:scale-100">
        <div className="box box0"><div></div></div>
        <div className="box box1"><div></div></div>
        <div className="box box2"><div></div></div>
        <div className="box box3"><div></div></div>
        <div className="box box4"><div></div></div>
        <div className="box box5"><div></div></div>
        <div className="box box6"><div></div></div>
        <div className="box box7"><div></div></div>
        <div className="ground"><div></div></div>
      </div>
      
      <div className="mt-16 relative">
        <div className="text-xs md:text-sm font-mono text-[#ff8c00] tracking-[0.4em] uppercase font-bold animate-pulse">
           Booting Operations...
        </div>
      </div>
    </motion.div>
  );
};
