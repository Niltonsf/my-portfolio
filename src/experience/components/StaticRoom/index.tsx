interface StaticRoomProps {
  geometry: THREE.BufferGeometry;
  bakedTexture: THREE.Texture;
}

export default function StaticRoom({
  geometry,
  bakedTexture,
}: StaticRoomProps) {
  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  );
}
