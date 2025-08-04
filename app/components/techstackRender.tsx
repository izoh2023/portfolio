"use client"

import type React from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment } from "@react-three/drei"
import { Suspense, useRef, useState } from "react"

const Cube: React.FC<{ autoRotate: boolean }> = ({ autoRotate }) => {
  const cubeRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF("/techstackModel.glb")

  useFrame((state: { clock: { getElapsedTime: () => never } }) => {
    if (cubeRef.current && autoRotate) {
      const time = state.clock.getElapsedTime()
      cubeRef.current.rotation.x = time * 0.25
      cubeRef.current.rotation.y = time * 0.25
      cubeRef.current.rotation.z = time * 0.25
    }
  })

  return <primitive ref={cubeRef} object={scene} position={[0, 0, 0]}  scale={.6}/>
}

const CubeViewer: React.FC = () => {
  const [autoRotate, setAutoRotate] = useState(true)

  return (
    <Canvas camera={{ position: [0, 0, 0], fov: 26 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <spotLight position={[5, 5, 5]} angle={0.4} intensity={2} penumbra={1} color="#A11312" />
        <spotLight position={[-5, 5, -5]} angle={0.3} intensity={1.5} color="#A11312" />
        <Cube autoRotate={autoRotate} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate={autoRotate}
          minDistance={1}
          maxDistance={1}
          onStart={() => setAutoRotate(false)}
          onEnd={() => setAutoRotate(true)}
        />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  )
}

export default CubeViewer
