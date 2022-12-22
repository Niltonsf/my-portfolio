interface FloorProps {
  geometry: THREE.BufferGeometry;
  bakedTexture: THREE.Texture;
}

export default function Floor({ geometry, bakedTexture }: FloorProps) {
  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  );
}
