import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Experience from "./experience/Experience";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { Leva } from "leva";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const onCreated = (state: any) => {
  state.gl.domElement.style.position = "absolute";
  state.gl.domElement.style.zIndex = 10;
};

root.render(
  <React.StrictMode>
    <Leva />
    <Suspense>
      <Canvas
        eventSource={document.getElementById("root") as any}
        camera={{
          fov: 55,
          near: 0.1,
          far: 2000,
          position: [4, 3.5, 6],
        }}
        onCreated={onCreated as any}
      >
        <Experience />
      </Canvas>
    </Suspense>
    <Loader />
  </React.StrictMode>
);
