import { useCallback, useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import { ObjectForReference } from "./components/ObjectForReference";
import * as THREE from "three";
// import { TWEEN } from "three/examples/jsm/libs/tween.module.min";
import TWEEN from "@tweenjs/tween.js";
import Room from "./components/Room";
import gsap from "gsap";

export default function Experience() {
  const orbitControlsRef = useRef<any>();
  const invisibleObjectRef = useRef<any>();
  const { camera } = useThree();
  const { focusOnHtml } = useControls({
    focusOnHtml: {
      value: false,
    },
  });

  const sleep = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // Logic for focusing on the monitor screen with the html
  useEffect(() => {
    if (focusOnHtml) {
      orbitControlsRef.current.enableRotate = false;
      orbitControlsRef.current.enableZoom = false;
      gsap.to(orbitControlsRef.current.target, {
        duration: 1.3,
        ease: "power1.inOut",
        x: invisibleObjectRef.current.position.x,
        y: invisibleObjectRef.current.position.y,
        z: invisibleObjectRef.current.position.z,
      });
      sleep(420).then(() => {
        gsap.to(orbitControlsRef.current.object.position, {
          x: -1.5,
          y: 1.9,
          z: 0,
        });
      });
      orbitControlsRef.current.enableZoom = true;
    } else {
      orbitControlsRef.current.enableRotate = true;
      orbitControlsRef.current.reset();
      orbitControlsRef.current.target.set(0, 1, 0);
    }
  }, [focusOnHtml]);

  useFrame(() => {
    orbitControlsRef.current.update();
  });

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
