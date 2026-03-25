import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for class merging
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  magneticPull?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className, 
  magneticPull = 0.3,
  ...props 
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    if (!button || !text) return;

    const xTo = gsap.quickTo(button, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    const yTo = gsap.quickTo(button, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    
    const textXTo = gsap.quickTo(text, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    const textYTo = gsap.quickTo(text, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * magneticPull);
      yTo(y * magneticPull);
      
      textXTo(x * (magneticPull * 0.5));
      textYTo(y * (magneticPull * 0.5));
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      textXTo(0);
      textYTo(0);
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [magneticPull]);

  return (
    <button
      ref={buttonRef}
      className={cn(
        "interactable relative px-6 py-3 rounded-full overflow-hidden group transition-colors",
        "border border-white/20 hover:border-[#ff5a00] hover:glow-orange",
        "bg-white/5 backdrop-blur-md",
        className
      )}
      {...props}
    >
      <div 
        ref={textRef} 
        className="relative z-10 font-medium tracking-wide flex items-center justify-center gap-2"
      >
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff5a00]/20 to-[#ff8c00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};
