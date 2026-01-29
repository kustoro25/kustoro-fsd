"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

interface StarBackgroundProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
}

const StarBackground = (props: StarBackgroundProps) => {
  const ref = useRef<THREE.Points>(null);

  const generateSphere = () => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < positions.length; i += 3) {
      const radius = 1.2;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.cbrt(Math.random());

      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    return positions;
  };

  const [sphere] = useState<Float32Array>(() => generateSphere());

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div
    className="w-full h-auto fixed inset-0 z-[20]"
    style={{ pointerEvents: "none" }}
  >
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{
        background: "transparent",
        pointerEvents: "none",
      }}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
