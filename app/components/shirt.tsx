'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function AnimatedShirt() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF('/shirt.glb');
  console.log('Animations:', animations); // should be non-empty

  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  return <primitive object={scene} ref={groupRef} />;
}

export default function Shirt() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <AnimatedShirt />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
