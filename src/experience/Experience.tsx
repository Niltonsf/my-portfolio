import { Dispatch, SetStateAction, Suspense, useRef, useState } from "react";
import OrbitControls from "./components/OrbitControls";
import { Perf } from "r3f-perf";
import { ObjectForReference } from "./components/ObjectForReference";
import * as THREE from "three";
import Room from "./components/Room";
import useLevaControls from "./hook/useLevaControls";
import OverlayLoading from "./components/OverlayLoading";

interface ExperienceProps {
  setHiddenLeva: Dispatch<SetStateAction<boolean>>;
}

export default function Experience({ setHiddenLeva }: ExperienceProps) {
  const invisibleObjectRef = useRef<THREE.Mesh | null>(null);
  const [orbitControlsDisabled, setOrbitControlsDisabled] =
    useState<boolean>(false);
  // Hide overaly
  const [hideOverlay, setHideOverlay] = useState<boolean>(false);
  const [isPointerOnHtml, setIsPointerOnHtml] = useState<boolean>(false);
  const { viewWebpage, showPerformace } = useLevaControls();

  return (
    <>
      {/* Background color */}
      <color args={["#000"]} attach="background" />

      {/* Lights */}
      <ambientLight intensity={0.2} />

      <fog attach="fog" args={["#000", 1, 30]} />

      {/* <directionalLight position={[1, 2, 3]} intensity={1.5} /> */}

      {/* <Environment
        background
        resolution={256}
        files={"./environmentMaps/satara_night_no_lamps_4k.hdr"}
        ground={{
          height: 5,
          radius: 20,
          scale: 50,
        }}
      /> */}

      {/* <ContactShadows
        resolution={1024}
        frames={1}
        color="#fff"
        position={[0.05, 0, -0.1]}
        scale={20}
        blur={3}
        opacity={0.8}
        far={10} */}
      {/* /> */}

      {/* Performances */}
      {showPerformace && <Perf position="top-left" />}

      {/* Orbit Controls */}
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

      {!hideOverlay && (
        <OverlayLoading
          setOrbitControlsDisabled={setOrbitControlsDisabled}
          setHiddenLeva={setHiddenLeva}
          setHideOverlay={setHideOverlay}
        />
      )}

      <Suspense>
        <Room
          setIsPointerOnHtml={setIsPointerOnHtml}
          isFocusOnHtml={viewWebpage}
        />
      </Suspense>
    </>
  );
}
