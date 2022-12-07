import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Experience from "./experience/Experience";
import { Canvas } from "@react-three/fiber";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
    >
      <Experience />
    </Canvas>
  </React.StrictMode>
);
