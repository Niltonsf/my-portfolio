import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { useState } from "react";

const onCreated = (state: any) => {
  state.gl.domElement.style.position = "absolute";
  state.gl.domElement.style.zIndex = 10;
};

export default function MainExperience() {
  const [hiddenLeva, setHiddenLeva] = useState(true);
  return (
    <>
      <Leva hidden={hiddenLeva} />
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
        <Experience setHiddenLeva={setHiddenLeva} />
      </Canvas>
    </>
  );
}
