import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import Overlay from "./Overlay";
import "./Hero.css";
import Model from "../model";

const Hero = () => {
  return (
    <>
      <Canvas data-aos="fade-down" data-aos-duration="2000">
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-1000, 1000, 100]} intensity={2} />
          <spotLight intensity={1} position={[100, -1000, 100]} />
          <spotLight intensity={1} position={[-100, 1000, -100]} />
          <spotLight intensity={10} position={[-180, -1000, -100]} />
          <ScrollControls pages={3}>
            <Model />
            <Overlay />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
};

export default Hero;
