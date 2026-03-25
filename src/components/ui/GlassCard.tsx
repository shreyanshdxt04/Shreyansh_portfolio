import React from 'react';
import { cn } from '../ui/MagneticButton'; // Reuse utility

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'neon';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  variant = 'default',
  ...props 
}) => {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 md:p-8 relative overflow-hidden group transition-all duration-500",
        variant === 'neon' ? "neon-border" : "border border-white/10 hover:border-white/20",
        className
      )}
      {...props}
    >
      {variant === 'neon' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff5a00]/10 to-[#ff8c00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
