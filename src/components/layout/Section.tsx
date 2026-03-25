import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className, ...props }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    gsap.fromTo(el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id={id} 
      className={cn("min-h-screen relative flex flex-col justify-center py-20 px-4 md:px-12", className)}
      {...props}
    >
      <div ref={contentRef} className="max-w-7xl mx-auto w-full relative z-10">
        {children}
      </div>
    </section>
  );
};
