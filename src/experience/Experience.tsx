import { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import { ObjectForReference } from "./components/ObjectForReference";
import * as THREE from "three";
import Room from "./components/Room";

export default function Experience() {
  const orbitControlsRef = useRef<any>();
  const invisibleObjectRef = useRef<any>();
  const { camera } = useThree();
  const { focusOnHtml } = useControls({
    focusOnHtml: false,
  });

  useEffect(() => {
    if (focusOnHtml) {
      orbitControlsRef.current.object.position.set(-1.5, 1.9, 0);
      camera.lookAt(invisibleObjectRef.current.position);
    } else {
      orbitControlsRef.current.reset();
      orbitControlsRef.current.target.set(0, 1, 0);
    }
  }, [focusOnHtml]);

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls
        ref={orbitControlsRef}
        makeDefault
        target={[0, 1, 0]}
        enabled={!focusOnHtml}
      />

      <ObjectForReference
        meshRef={invisibleObjectRef}
        position={new THREE.Vector3(-4, 1.7, 0)}
      />

      <Room />
    </>
  );
}
