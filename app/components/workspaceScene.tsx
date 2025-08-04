//ts-nocheck
import React, { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import * as THREE from 'three'

type SceneContentProps = {
  active: "close" | "wide";
  setDebug: (val: { position: number[]; target: number[] }) => void;
};

const SceneContent: React.FC<SceneContentProps> = ({ active, setDebug }) => {
  const closeCamRef = useRef<THREE.PerspectiveCamera>(null);
  const wideCamRef = useRef<THREE.PerspectiveCamera>(null);

  const chairY = 14.147;
  const chairHeight = 17.1;
  const chairZ = 0;
  const chairDepth = 18.6;

  const cameraY = chairY + chairHeight * 0.6;
  const cameraZ = chairZ - chairDepth * 2.0;
  const lookAtY = chairY + chairHeight * 0.3;

  const { scene } = useGLTF("/myWorkspace.glb");

  useFrame(() => {
    if (active === "close" && closeCamRef.current) {
      closeCamRef.current.position.x += 0.02;
      closeCamRef.current.lookAt(0, lookAtY, 0);

      setDebug({
        position: closeCamRef.current.position.toArray().map((n: number) => Number(n.toFixed(2))),
        target: [0, lookAtY, 0],
      });
    }

    if (active === "wide" && wideCamRef.current) {
      setDebug({
        position: wideCamRef.current.position.toArray().map((n: number) => Number(n.toFixed(2))),
        target: [0, lookAtY, 0],
      });
    }
  });

  return (
    <>
        <primitive
        object={scene}
        scale={.5}
        rotation={[0 * Math.PI, 1 * Math.PI, 0 * Math.PI]}
        position={[0, 15, -15]}
        />

        <PerspectiveCamera
            ref={wideCamRef}
            fov={100}
            position={[0, cameraY, cameraZ]}
            makeDefault={active === "wide"}
        />

        <PerspectiveCamera
            ref={closeCamRef}
            fov={50}
            position={[-10, cameraY, cameraZ / 2]}
            makeDefault={active === "close"}
        />
    </>
  );
};

export default SceneContent;
