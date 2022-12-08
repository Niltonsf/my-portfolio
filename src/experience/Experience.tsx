import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Room from "./components/Room";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <Environment preset="city" />

      <OrbitControls makeDefault />

      <Room />
    </>
  );
}
