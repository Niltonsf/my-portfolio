import React from "react";

export default function StaticRoom({ geometry, bakedTexture }: any) {
  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  );
}
