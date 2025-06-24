'use client'

import { useGLTF } from '@react-three/drei'

export default function TreeModel() {
  const gltf = useGLTF('/model.glb', true)
  return <primitive object={gltf.scene} scale={0.9} position={[0, -1.5, 0]} />
}
