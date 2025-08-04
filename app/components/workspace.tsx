// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { Suspense } from "react";
// import { useGLTF, Environment, OrbitControls } from "@react-three/drei";

// const StaticModel: React.FC = () => {
//   const { scene } = useGLTF("/myWorkspace.glb");
//   return (
//     <primitive
//       object={scene}
//       scale={.5}
//       rotation={[0 * Math.PI, 1 * Math.PI, 0 * Math.PI]}
//       position={[0, 15, -15]}
//     />
//   );
// };

// // OrbitControls component stays inside the Canvas
// const Controls: React.FC<{ onUpdate: (cameraPos: number[], target: number[]) => void }> = ({ onUpdate }) => {
//   const { camera } = useThree();
//   const controlsRef = useRef<any>(null);

//   useFrame(() => {
//     if (controlsRef.current) {
//       onUpdate(
//         camera.position.toArray().map((n) => Number(n.toFixed(2))),
//         controlsRef.current.target.toArray().map((n) => Number(n.toFixed(2)))
//       );
//     }
//   });

//   return <OrbitControls enableZoom={false} ref={controlsRef} />;
// };

// // DebugInfo panel should be outside the Canvas tree
// const DebugOverlay: React.FC<{ position: number[]; target: number[] }> = ({ position, target }) => (
//   <div
//     style={{
//       position: "absolute",
//       top: 10,
//       left: 10,
//       background: "rgba(0,0,0,0.7)",
//       color: "#fff",
//       padding: "10px",
//       fontSize: "12px",
//       fontFamily: "monospace",
//       borderRadius: "6px",
//       zIndex: 1000,
//     }}
//   >
//     <div><strong>Camera Position:</strong></div>
//     <div>x: {position[0]}</div>
//     <div>y: {position[1]}</div>
//     <div>z: {position[2]}</div>
//     <br />
//     <div><strong>Target:</strong></div>
//     <div>x: {target[0]}</div>
//     <div>y: {target[1]}</div>
//     <div>z: {target[2]}</div>
//   </div>
// );

// const StaticScene: React.FC = () => {
//   const chairY = 14.147;
//   const chairHeight = 17.1;
//   const chairZ = 0;
//   const chairDepth = 18.6;

//   const cameraY = chairY + chairHeight * 0.6;
//   const cameraZ = chairZ - chairDepth * 2.0;
//   const lookAtY = chairY + chairHeight * 0.3;

//   const [debug, setDebug] = useState({
//     position: [0, 0, 0],
//     target: [0, 0, 0],
//   });



//   return (
//     <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
//       <Canvas
//   camera={{
//     position: [3.17, 29.53, -39.42], // see explanation below
//     fov: 75,
//   }}
//   dpr={[1, 2]}
// >
//         <Suspense fallback={null}>
//           <ambientLight intensity={0.7} />
//           <directionalLight position={[200, 200, 200]} intensity={1.5} />
//           <StaticModel />
//           <Environment preset="sunset" />
//           {/* <Controls onUpdate={(pos, tgt) => setDebug({ position: pos, target: tgt })}/> */}
//         </Suspense>
//       </Canvas>
//       <DebugOverlay position={debug.position} target={debug.target} />
//     </div>
//   );
// };

// export default StaticScene;


// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import { Canvas, useThree } from "@react-three/fiber";
// import { Suspense } from "react";
// import { useGLTF, Environment } from "@react-three/drei";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";

// const StaticModel: React.FC = () => {
//   const { scene } = useGLTF("/myWorkspace.glb");
//   return (
//     <primitive
//       object={scene}
//       scale={1}
//       rotation={[0, Math.PI, 0]}
//       position={[0, 10, -10]}
//     />
//   );
// };

// // Manually sets lookAt on initial render
// const ManualLookAt: React.FC = () => {
//   const { camera } = useThree();
//   const targetRef = useRef(new THREE.Vector3(120, 28, 25)); // start at x = 120
//   const destinationX = -100;

//   useFrame(() => {
//     // Smoothly interpolate target.x toward destination
//     targetRef.current.x = THREE.MathUtils.lerp(targetRef.current.x, destinationX, 0.005);
//     camera.lookAt(targetRef.current);
//   });

//   return null;
// };

// // DebugInfo panel
// const DebugOverlay: React.FC<{ position: number[]; target: number[] }> = ({ position, target }) => (
//   <div
//     style={{
//       position: "absolute",
//       top: 10,
//       left: 10,
//       background: "rgba(0,0,0,0.7)",
//       color: "#fff",
//       padding: "10px",
//       fontSize: "12px",
//       fontFamily: "monospace",
//       borderRadius: "6px",
//       zIndex: 1000,
//     }}
//   >
//     <div><strong>Camera Position:</strong></div>
//     <div>x: {position[0]}</div>
//     <div>y: {position[1]}</div>
//     <div>z: {position[2]}</div>
//     <br />
//     <div><strong>Target:</strong></div>
//     <div>x: {target[0]}</div>
//     <div>y: {target[1]}</div>
//     <div>z: {target[2]}</div>
//   </div>
// );

// const StaticScene: React.FC = () => {
//   const [debug, setDebug] = useState({
//     position: [0, 32, -20],
//     target: [-100, 28, 25], // You can change this target vector
//   });

//   return (
//     <div style={{ width: "100vw", height: "100% ", position: "relative" }}>
//       <Canvas
//         camera={{
//           position: debug.position,
//           fov: 45,
//         }}
//         dpr={[1, 2]}
//       >
//         <Suspense fallback={null}>
//           <ambientLight intensity={0.7} />
//           <directionalLight position={[200, 200, 200]} intensity={1.5} />
//           <StaticModel />
//           <Environment preset="sunset" />
//           <ManualLookAt target={new THREE.Vector3(...debug.target)} />
//         </Suspense>
//       </Canvas>
//       <DebugOverlay position={debug.position} target={debug.target} />
//     </div>
//   );
// };

// export default StaticScene;

"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

//
// Load GLTF model
//
const StaticModel: React.FC = () => {
  const { scene } = useGLTF("/myWorkspace.glb");
  return (
    <primitive
      object={scene}
      scale={0.5}
      rotation={[0, 0*Math.PI, 0]}
      position={[0, 15, -15]}
    />
  );
};

//
// Camera animation with movement limits
//
const ManualLookAt: React.FC = () => {
  const { camera } = useThree();
  const angle = useRef(0);
  const radius = 30;
  const height = 60;
  const target = useRef(new THREE.Vector3(0, 15, -15)); // model center

useFrame(() => {
  // Adjust this value for speed control
  const speed = 0.006; // faster than 0.003
  angle.current += speed;

  let x = radius * Math.cos(angle.current);
  let y = height + 10 * Math.sin(angle.current * 2);
  const z = 10 + 5 * Math.sin(angle.current); // ensures z stays 5–15 without clamp


  // Smoothly move target instead of snapping
  if (z < 10) {
    target.current.lerp(new THREE.Vector3(0, 18, -15), 0.05);
  } else {
    target.current.lerp(new THREE.Vector3(0, 15, -15), 0.05);
  }

  y = THREE.MathUtils.clamp(y, 20, 38);
  x = THREE.MathUtils.clamp(x, -10, 10);

  camera.position.set(x, y, z);
  camera.lookAt(target.current);
});





  return null;
};


//
// Tracks and displays camera position and target
//
// const CameraDebugger: React.FC<{ setDebug: Function }> = ({ setDebug }) => {
//   const { camera } = useThree();
//   const target = new THREE.Vector3(0, 15, -15);

//   useFrame(() => {
//     setDebug({
//       position: camera.position.toArray().map((n) => Number(n.toFixed(2))),
//       target: target.toArray().map((n) => Number(n.toFixed(2))),
//     });
//   });

//   return null;
// };

//
// Overlay to show debug info
//
// const DebugOverlay: React.FC<{ position: number[]; target: number[] }> = ({ position, target }) => (
//   <div
//     style={{
//       position: "absolute",
//       top: 10,
//       left: 10,
//       background: "rgba(0,0,0,0.7)",
//       color: "#fff",
//       padding: "10px",
//       fontSize: "12px",
//       fontFamily: "monospace",
//       borderRadius: "6px",
//       zIndex: 1000,
//     }}
//   >
//     <div><strong>Camera Position:</strong></div>
//     <div>x: {position[0]}</div>
//     <div>y: {position[1]}</div>
//     <div>z: {position[2]}</div>
//     <br />
//     <div><strong>Target:</strong></div>
//     <div>x: {target[0]}</div>
//     <div>y: {target[1]}</div>
//     <div>z: {target[2]}</div>
//   </div>
// );

//
// Main Scene
//
const StaticScene: React.FC = () => {
  // const [debug, setDebug] = useState({
  //   position: [0, 0, 0],
  //   target: [0, 0, 0],
  // });

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas
        camera={{
          position: [3.17, 29.53, 0.1], // start in allowed zone
          fov: 55
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[200, 200, 200]} intensity={1.5} />
          <StaticModel />
          <Environment preset="sunset" />
          <ManualLookAt />
          {/* <CameraDebugger setDebug={setDebug} /> */}
        </Suspense>
      </Canvas>
      {/* <DebugOverlay position={debug.position} target={debug.target} /> */}
    </div>
  );
};

export default StaticScene;
