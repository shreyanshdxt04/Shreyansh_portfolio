import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { ThemeToggle } from '../ui/ThemeToggle';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Background', href: '#background' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 inset-x-0 z-[90] transition-all duration-300 pointer-events-auto ${
          scrolled ? 'py-4 glass border-b border-white/10 shadow-lg backdrop-blur-xl bg-black/40' : 'py-5 glass border-b border-transparent backdrop-blur-md bg-black/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tighter text-white flex items-center gap-2 group cursor-pointer hover:text-[#ff8c00] transition-colors">
            <span className="w-8 h-8 rounded bg-gradient-to-br from-[#ff5a00] to-[#ff8c00] text-black flex items-center justify-center font-black group-hover:shadow-[0_0_15px_#ff8c00] transition-all">S</span>
            Shreyansh.
          </a>

          {/* Right side controls */}
          <div className="flex items-center gap-2 md:gap-6">
            
            {/* Always visible Theme Toggle */}
            <ThemeToggle className="scale-75 md:scale-90 opacity-90 hover:opacity-100 transition-opacity" />

            {/* Desktop Nav Links & Button */}
            <div className="hidden md:flex items-center gap-6 border-l border-white/20 pl-6 ml-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-gray-300 hover:text-[#ff8c00] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/Shreyansh_Dixit_CV.pdf" 
                download
                className="interactable relative px-5 py-2 overflow-hidden rounded-full glass border border-[#ff8c00]/50 text-[#ff8c00] hover:text-black hover:bg-[#ff8c00] hover:glow-orange-alt transition-all flex items-center gap-2 text-sm font-bold cursor-pointer"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white hover:text-[#ff8c00] transition-colors p-2 cursor-pointer z-[100]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[80] bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pointer-events-auto"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-[#ff8c00] transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Removed the deeply nested theme toggle previously here */}
            
            <a 
              href="/Shreyansh_Dixit_CV.pdf" 
              download
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-[#ff8c00] text-black hover:bg-[#ff5a00] transition-all flex items-center gap-2 text-lg font-bold"
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
