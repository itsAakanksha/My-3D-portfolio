import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Environment,
  MeshDistortMaterial,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from 'three';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();
  const glowRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Add dynamic animations
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
      meshRef.current.rotation.y += 0.008;
      
      // Pulsing scale effect
      const scale = 2.8 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
    
    if (glowRef.current) {
      glowRef.current.rotation.z += 0.01;
      glowRef.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
    }
  });

  return (
    <group>
      <Float 
        speed={2.5} 
        rotationIntensity={hovered ? 2 : 1}
        floatIntensity={hovered ? 3 : 2}
      >
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-3, -3, -3]} intensity={1.2} color="#9333ea" />
        <pointLight position={[3, -3, 3]} intensity={1.2} color="#db2777" />
        <pointLight position={[0, 3, 0]} intensity={0.8} color="#3b82f6" />
        
        {/* Rim Light */}
        <spotLight 
          position={[0, 0, 10]} 
          angle={0.5} 
          intensity={2} 
          color="#ffffff"
          distance={20}
        />

        {/* Main Sphere with Enhanced Material */}
        <mesh 
          ref={meshRef}
          castShadow 
          receiveShadow 
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <icosahedronGeometry args={[1, 3]} />
          <MeshDistortMaterial
            color="#ffffff"
            attach="material"
            distort={hovered ? 0.3 : 0.15}
            speed={hovered ? 4 : 2}
            roughness={0.05}
            metalness={0.9}
            envMapIntensity={2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transparent
            opacity={0.95}
          />

          {/* Technology Icon Decal */}
          <Decal 
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={hovered ? 0.9 : 0.75}
            map={decal}
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </mesh>

        {/* Outer Glowing Aura */}
        <mesh ref={glowRef} scale={3.5}>
          <ringGeometry args={[0.8, 1.2, 64]} />
          <meshBasicMaterial 
            color="#9333ea" 
            transparent 
            opacity={0.4}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Secondary Glow Ring */}
        <mesh scale={3.8} rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[0.9, 1.1, 64]} />
          <meshBasicMaterial 
            color="#db2777" 
            transparent 
            opacity={0.25}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Inner Energy Ring */}
        <mesh scale={4.1} rotation={[0, Math.PI / 4, Math.PI / 2]}>
          <ringGeometry args={[0.95, 1.05, 64]} />
          <meshBasicMaterial 
            color="#3b82f6" 
            transparent 
            opacity={0.2}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Particle-like dots around the sphere */}
        {[...Array(8)].map((_, i) => (
          <mesh 
            key={i}
            position={[
              Math.cos((i / 8) * Math.PI * 2) * 3,
              Math.sin((i / 8) * Math.PI * 2) * 3,
              Math.sin((i / 8) * Math.PI * 4) * 0.5
            ]}
            scale={0.1}
          >
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial 
              color={i % 3 === 0 ? "#9333ea" : i % 3 === 1 ? "#db2777" : "#3b82f6"}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
      </Float>
    </group>
  )
};

const BallCanvas = ({icon}) => {
  return (
    <Canvas 
      frameloop="always" 
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2
      }}
      camera={{ 
        position: [0, 0, 6], 
        fov: 45,
        near: 0.1,
        far: 200
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
       
        {/* Enhanced Orbit Controls */}
        <OrbitControls 
          enableZoom={false} 
          autoRotate
          autoRotateSpeed={1.5}
          enablePan={false}
          enableDamping
          dampingFactor={0.1}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        
        {/* Add some atmospheric fog */}
        <fog attach="fog" args={['#050816', 8, 20]} />
        
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas;
