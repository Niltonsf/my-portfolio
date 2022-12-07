import React from "react";
import { Html } from "@react-three/drei";

export default function Monitor({ geometry, bakedTexture }: any) {
  return (
    <>
      <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={1.17}
        position={[-2.57, 1.8, -0.01]}
        rotation-y={1.565}
      >
        <iframe src="https://bruno-simon.com/html/" />
      </Html>
      <mesh geometry={geometry}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </>
  );
}
