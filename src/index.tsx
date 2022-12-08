import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Experience from "./experience/Experience";
import { Canvas } from "@react-three/fiber";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const onCreated = (state: {
  gl: { domElement: { style: { position: string; zIndex: number } } };
}) => {
  state.gl.domElement.style.position = "absolute";
  state.gl.domElement.style.zIndex = 99999;
};

root.render(
  <React.StrictMode>
    <Canvas
      eventSource={document.getElementById("root") as any}
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
      onCreated={onCreated as any}
    >
      <Experience />
    </Canvas>
  </React.StrictMode>
);
