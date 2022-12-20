import { useRef } from "react";

export default function Macbook({ geometry, bakedTexture }: any) {
  const chairRef = useRef<any>();

  return (
    <mesh ref={chairRef} geometry={geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  );
}
