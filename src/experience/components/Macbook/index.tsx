import { useRef } from "react";

interface MacbookProps {
  geometry: THREE.BufferGeometry;
  bakedTexture: THREE.Texture;
}

export default function Macbook({ geometry, bakedTexture }: MacbookProps) {
  const chairRef = useRef<any>();

  return (
    <mesh ref={chairRef} geometry={geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  );
}
