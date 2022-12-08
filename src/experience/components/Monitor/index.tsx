import React from "react";

export default function Monitor({
  geometry,

  bakedTexture,
}: any) {
  return (
    <>
      <mesh geometry={geometry}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </>
  );
}
