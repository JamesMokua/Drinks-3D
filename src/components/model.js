import {  useFrame, useThree } from "@react-three/fiber";
import { useGLTF} from "@react-three/drei";
import React, {  useRef } from "react";
export default function Model(props) {
    const { nodes, materials } = useGLTF("/scene.gltf");
    const myMesh = useRef();
    const group1 = useRef();
    const group2 = useRef();
    const { camera } = useThree();
    camera.position.z = 5;
  
    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
  
      group1.current.position.y = (1 + Math.sin(a / 1.5)) / 10;
      group1.current.rotation.z = a / 2;
      group2.current.position.x = (1 + Math.sin(a / 1.5)) / 10;
      group2.current.rotation.z = a / 2;
    });
    return (
      <mesh ref={myMesh}  >
        <group {...props} dispose={null}>
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