import React, { Suspense, useRef, useEffect } from "react";
import "./Hero.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF,useScroll,ScrollControls,Scroll} from "@react-three/drei";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Model(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  const myMesh = useRef();
  const group1 = useRef();
  const group2 = useRef();
  const { camera } = useThree();
  camera.position.z = 5;
 


  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    
     
    group1.current.position.y = (1 + Math.sin(a / 1.5)) / 10
     group1.current.rotation.z = a/2;
    group2.current.position.x = (1 + Math.sin(a / 1.5)) / 10
    group2.current.rotation.z = a/2;
  });
  return (
    <mesh ref={myMesh}>
      <group {...props} dispose={null}
      ><ScrollControls pages={3} >
              <Scroll >
        <group
          ref={group1}
          position={[-1, 0, 0.5]}
          rotation={[-Math.PI / 2, -Math.PI / 5, 0.5]}
          scale={[0.02, 0.02, 0.02]}
          
        >
          <mesh
            geometry={nodes["Can_01_-_Default_0"].geometry}
            material={materials["01_-_Default"]}
          />
          <mesh
            geometry={nodes["Can_02_-_Default_0"].geometry}
            material={materials["02_-_Default"]}
          />
        </group>
  </Scroll>

            </ScrollControls>
        <group
          ref={group2}
          position={[0, -2, 0.5]}
          rotation={[-Math.PI / 2, Math.PI / 5, 0.5]}
          scale={[0.02, 0.02, 0.02]}
        >
          <mesh
            geometry={nodes["Can002_07_-_Default_0"].geometry}
            material={materials["07_-_Default"]}
          />
          <mesh
            geometry={nodes["Can002_02_-_Default_0"].geometry}
            material={materials["02_-_Default"]}
          />
        </group>
     
      </group>
      
    </mesh>
  );
}
const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      
      <div id="hero">
    
        <h1 className="main-title" data-aos="slide-left" data-aos-duration="2000" data-aos-easing="ease-in-out-back" data-aos-delay="50">REFRESHING</h1>
      
      
        <Canvas data-aos="fade-down"  data-aos-duration="2000">
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-1000, 1000, 100]} intensity={2} />
            <spotLight intensity={1} position={[100, -1000, 100]} />
            <spotLight intensity={1} position={[-100, 1000, -100]} />
            <spotLight intensity={10} position={[-180, -1000, -100]} />
            
                <Model  />
          
          </Suspense>
        </Canvas>
   
        <div className="sub-text">
          <p className="textone" data-aos="fade-up"  data-aos-duration="2000">Our varieties of sodas will leave you wanting more, no reason not to try it!</p>
          <button className="btn" data-aos="fade-up"  data-aos-duration="2000">Try It Now!</button>
        </div>
      </div>
    
     
    </>
  );
};

export default Hero;
