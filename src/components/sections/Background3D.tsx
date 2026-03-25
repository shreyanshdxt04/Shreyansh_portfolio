import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

const ParticleCluster: React.FC<{ count?: number, color?: string }> = ({ count = 3000, color = "#ff8c00" }) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random spherical coordinates for the particles
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const radius = Math.random() * 20 + 2; 
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(Math.random() * 2 - 1);
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        p[i * 3] = x;
        p[i * 3 + 1] = y;
        p[i * 3 + 2] = z;
    }
    return p;
  }, [count]);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta / 10;
      pointsRef.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

export const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <fog attach="fog" args={['#050505', 5, 25]} />
        <ParticleCluster count={3000} color="#ff8c00" /> {/* Neon orange-alt */}
        <ParticleCluster count={2000} color="#ff5a00" /> {/* Neon Orange */}
      </Canvas>
    </div>
  );
};
