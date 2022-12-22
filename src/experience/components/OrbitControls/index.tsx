import { RefObject, useEffect, useRef, useState } from "react";
import * as DREI from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  handlingGsapAnimationsOnHtmlFocus,
  handlingEndOfInicialFocusAnimation,
  OrbitControlsExtendedProps,
} from "./Monitor";

interface OrbitControlsProps {
  invisibleObjectRef: RefObject<THREE.Mesh | null>;
  isPointerOnHtml: boolean;
  focusOnHtml: boolean;
}

export default function OrbitControls({
  invisibleObjectRef,
  isPointerOnHtml,
  focusOnHtml,
}: OrbitControlsProps) {
  const orbitControlsRef = useRef<OrbitControlsExtendedProps | null>(null);
  const [isAnimationOnHtmlFinished, setAnimationOnHtmlFinished] =
    useState<boolean>(false);

  // Logic for focusing on the monitor screen with the html
  useEffect(() => {
    handlingGsapAnimationsOnHtmlFocus({
      focusOnHtml,
      orbitControlsRef,
      invisibleObjectRef,
      setAnimationOnHtmlFinished,
    });
  }, [focusOnHtml, invisibleObjectRef]);

  // This will enable and disable the scroll according to the cursor
  useEffect(() => {
    handlingEndOfInicialFocusAnimation({
      isAnimationOnHtmlFinished,
      isPointerOnHtml,
      orbitControlsRef,
    });
  }, [isPointerOnHtml, isAnimationOnHtmlFinished]);

  useFrame(() => {
    orbitControlsRef!.current!.update();
  });

  return (
    <DREI.OrbitControls
      ref={orbitControlsRef as any}
      makeDefault
      target={[0, 1, 0]}
      minPolarAngle={0}
      maxPolarAngle={Math.PI / 1.9}
      maxAzimuthAngle={Math.PI / 1.65}
      minAzimuthAngle={Math.PI * 1.9}
      rotateSpeed={0.15}
      dampingFactor={0.03}
      zoomSpeed={0.25}
    />
  );
}
