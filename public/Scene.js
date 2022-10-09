/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Anthony Yanez (https://sketchfab.com/paulyanez)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/soda-cans-4e0be610db9646929d8be84491f1a72f
title: Soda Cans
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-138.34, 0, 0.24]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.82, 0.82, 1]}>
            <mesh geometry={nodes['Can_01_-_Default_0'].geometry} material={materials['01_-_Default']} />
            <mesh geometry={nodes['Can_02_-_Default_0'].geometry} material={materials['02_-_Default']} />
          </group>
          <group position={[-46.54, 0, 0.24]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.82, 0.82, 1]}>
            <mesh geometry={nodes['Can001_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
            <mesh geometry={nodes['Can001_02_-_Default_0'].geometry} material={materials['02_-_Default']} />
          </group>
          <group position={[45.13, 0, 0.24]} rotation={[-Math.PI / 2, 0, 0.7]} scale={[0.82, 0.82, 1]}>
            <mesh geometry={nodes['Can002_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
            <mesh geometry={nodes['Can002_02_-_Default_0'].geometry} material={materials['02_-_Default']} />
          </group>
          <group position={[140.98, 0, 0.24]} rotation={[-Math.PI / 2, 0, Math.PI / 4]} scale={[0.82, 0.82, 1]}>
            <mesh geometry={nodes['Can003_08_-_Default_0'].geometry} material={materials['08_-_Default']} />
            <mesh geometry={nodes['Can003_02_-_Default_0'].geometry} material={materials['02_-_Default']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')