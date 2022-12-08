import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Room from "./components/Room";

export default function Experience({ onCreated }: any) {
  return (
    <Canvas
      eventSource={document.getElementById("root") as any}
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
      onCreated={onCreated}
    >
      <>
        <Perf position="top-left" />

        <Environment preset="city" />

        <OrbitControls makeDefault />

        <Room />
      </>
    </Canvas>
  );
}
