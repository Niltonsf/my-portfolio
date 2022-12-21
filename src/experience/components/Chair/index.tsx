import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ChairProps {
  geometry: THREE.BufferGeometry;
  bakedTexture: THREE.Texture;
}

export default function Chair({ geometry, bakedTexture }: ChairProps) {
  const chairRef = useRef<any>();

  useFrame((state, delta) => {
    // chairRef.current.rotation.y =
    //   Math.sin(state.clock.elapsedTime * 0.6) * 0.4 + 900;
  });

  return (
    <mesh ref={chairRef} geometry={geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  );
}
