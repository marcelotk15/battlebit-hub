'use client'
import {
  OrbitControls,
  Environment,
  Center,
  AccumulativeShadows,
  RandomizedLight,
} from '@react-three/drei'
import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import dynamic from 'next/dynamic'

import { WeaponObejct } from '~/app/weapons/weapon'

const Canvas = dynamic(() => import('@react-three/fiber').then((mod) => mod.Canvas))

export function WeaponRender() {
  const containerRef = useRef<HTMLDivElement>(null)

  const camera = useMemo(() => {
    const aspect =
      (containerRef.current?.offsetWidth || 1) / (containerRef.current?.offsetHeight || 1)

    const camera = new THREE.PerspectiveCamera(17, aspect, 1, 500)

    const [x, y, z] = [-7, 2.5, 5]

    camera.position.set(x, y, z)

    camera.up = new THREE.Vector3(0, 10, 0)

    camera.lookAt(new THREE.Vector3(0, 0, 0))

    return camera
  }, [])

  return (
    <div
      className="absolute left-0 right-0 z-10 bg-[#383838] md:bottom-0 md:top-0 md:h-auto"
      ref={containerRef}
    >
      <Canvas shadows camera={camera}>
        <group position={[-0.5, 0.05, 0.3]}>
          <Center top>
            <WeaponObejct />
          </Center>

          <AccumulativeShadows
            temporal
            frames={100}
            color="#242424"
            colorBlend={2}
            toneMapped={true}
            alphaTest={0.9}
            opacity={0.7}
            scale={12}
          >
            <RandomizedLight
              amount={8}
              radius={4}
              ambient={0.5}
              intensity={1}
              position={[5, 5, -10]}
              bias={0.001}
            />
          </AccumulativeShadows>
        </group>

        <Environment preset="city" />

        <OrbitControls enableDamping autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  )
}
