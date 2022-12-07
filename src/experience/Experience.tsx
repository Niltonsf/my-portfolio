import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Room from "./components/Room";
import Chair from "./components/Chair";

export default function Experience() {
  function Loader() {
    const data = useProgress();
    useEffect(() => {
      console.log(data.active, data.progress, data);
    }, [data]);
    return <Html center>{data.progress} % loaded</Html>;
  }

  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
    >
      <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <Suspense fallback={<Loader />}>
          <Room />
        </Suspense>
      </>
    </Canvas>
  );
}
