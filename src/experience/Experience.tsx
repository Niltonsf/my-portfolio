import { Dispatch, SetStateAction, useRef, useState } from "react";
import OrbitControls from "./components/OrbitControls";
import { Perf } from "r3f-perf";
import { ObjectForReference } from "./components/ObjectForReference";
import * as THREE from "three";
import Room from "./components/Room";
import useLevaControls from "./hook/useLevaControls";

interface ExperienceProps {
  setHiddenLeva: Dispatch<SetStateAction<boolean>>;
}

export default function Experience({ setHiddenLeva }: ExperienceProps) {
  const invisibleObjectRef = useRef<THREE.Mesh | null>(null);
  const [orbitControlsDisabled, setOrbitControlsDisabled] =
    useState<boolean>(false);
  const [isPointerOnHtml, setIsPointerOnHtml] = useState<boolean>(false);
  const { viewWebpage, showPerformace } = useLevaControls();

  return (
    <>
      <color args={["#2E282A"]} attach="background" />

      {showPerformace && <Perf position="top-left" />}

      <OrbitControls
        invisibleObjectRef={invisibleObjectRef}
        isPointerOnHtml={isPointerOnHtml}
        focusOnHtml={viewWebpage}
        disabled={orbitControlsDisabled}
      />

      <ObjectForReference
        meshRef={invisibleObjectRef}
        position={new THREE.Vector3(-4, 1.7, 0)}
      />

      <Room
        setIsPointerOnHtml={setIsPointerOnHtml}
        isFocusOnHtml={viewWebpage}
        setOrbitControlsDisabled={setOrbitControlsDisabled}
        setHiddenLeva={setHiddenLeva}
      />
    </>
  );
}
