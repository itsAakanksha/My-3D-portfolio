import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";


const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  console.log(isMobile)
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black"
      
      />
      <pointLight intensity={1} />
      <spotLight position={[-20,60,10]} angle ={0.43}  penumbra ={1} intensity={1}
      castShadow shadow-mapSize ={1024}
      />
      <primitive object={computer.scene}
      scale ={isMobile ? 0.57 : 0.75}
      position={isMobile ? [0.9,-2.9,-1.4]:[0,-3.15,-1.5]}
      rotation={[-0.01,-0.2,-0.13]}

      />
    </mesh>
  );
};

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width:500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change',
    handleMediaQueryChange
    )

    return()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  },[])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};



export default ComputersCanvas;
