'use client'

import type * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { type GLTF } from 'three-stdlib'

import { useWeaponContext } from '~/app/weapons/provider'

type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Mesh>
  materials: Record<string, THREE.MeshStandardMaterial>
}

export function WeaponObejct() {
  const { weaponSelected } = useWeaponContext()

  const { nodes, materials } = useGLTF(
    `models/weapons//${weaponSelected.id}-transformed.glb`,
  ) as GLTFResult

  return (
    <>
      <group dispose={null}>
        <mesh
          geometry={nodes.meshes_0.geometry}
          material={materials.ToolSurface_Metalic_A}
          position={[0.7, 1, 0]}
          rotation={[-Math.PI / 2.2, 0, 0]}
          castShadow
          receiveShadow
        />
      </group>
    </>
  )
}
