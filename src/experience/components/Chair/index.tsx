import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { isMobile } from "react-device-detect";

interface ChairProps {
  geometry: THREE.BufferGeometry;
  bakedTexture: THREE.Texture;
  isViewingWebpage: boolean;
}

export default function Chair({
  geometry,
  bakedTexture,
  isViewingWebpage,
}: ChairProps) {
  const chairRef = useRef<any>();

  useFrame((state, delta) => {
    chairRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.6) * 0.2 + -25;
  });

  return (
    <mesh
      ref={chairRef}
      geometry={geometry}
      visible={isMobile ? !isViewingWebpage : true}
      position={[-0.9, 1.4, -0.04]}
    >
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  );
}
