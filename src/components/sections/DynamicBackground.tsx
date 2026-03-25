import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const PremiumEnvironment = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Creates an ultra-slow, cinematic camera panning effect 
  // through the stellar/data environment.
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0003;
      groupRef.current.rotation.z += 0.0001;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 
        Deep background layer: 
        Monochromatic, deeply faded stars that look like abstract data points / vast distance.
      */}
      <Stars 
        radius={100} 
        depth={50} 
        count={4000} 
        factor={5} 
        saturation={0} 
        fade 
        speed={1} 
      />
      
      {/* 
        Mid-foreground layer: 
        Softly glowing, dynamically floating embers. They drift naturally
        using complex noise functions without looking chaotic.
      */}
      <Sparkles 
        count={250} 
        scale={30} 
        size={4} 
        speed={0.4} 
        opacity={0.2} 
        color="#ff8c00" 
      />
    </group>
  );
};

export const DynamicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none minimal-bg transition-colors duration-1000">
      
      {/* Pure 3D Canvas rendering the deep environment */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          {/* Subtle fog helps the particles fade beautifully into the distance */}
          <fog attach="fog" args={['#050505', 10, 40]} />
          <PremiumEnvironment />
        </Canvas>
      </div>

      {/* 
        Cinematic Vignette Overlay:
        This adds a premium soft shading around the outermost edges of the screen,
        framing the content perfectly and hiding hard cutoffs.
      */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(5,5,5,0.95)] z-10 pointer-events-none" />

    </div>
  );
};
