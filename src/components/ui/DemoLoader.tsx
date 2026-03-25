import React from 'react';
import './DemoLoader.css';

export const DemoLoader: React.FC = () => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#050505]/90 backdrop-blur-md light-mode:bg-white/90 pt-8" style={{ fontSize: 'min(1.5vw, 12px)' }}>
      <div className="demo-loader scale-75 md:scale-100">
        <div className="text"><span>Loading</span></div>
        <div className="text"><span>Loading</span></div>
        <div className="text"><span>Loading</span></div>
        <div className="text"><span>Loading</span></div>
        <div className="text"><span>Loading</span></div>
        <div className="text"><span>Loading</span></div>
        <div className="text"><span>Loading</span></div>
        <div className="text"><span>Loading</span></div>
        <div className="text"><span>Loading</span></div>
        <div className="line"></div>
      </div>
    </div>
  );
};
