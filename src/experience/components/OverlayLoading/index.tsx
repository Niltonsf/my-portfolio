import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import portalVertexShader from "../../shaders/vertex";
import portalFragmentShader from "../../shaders/fragment";
import HtmlOverlay from "./screenHandler";

interface OverlayLoadingProps {
  setOrbitControlsDisabled: Dispatch<SetStateAction<boolean>>;
  setHiddenLeva: Dispatch<SetStateAction<boolean>>;
  setHideOverlay: Dispatch<SetStateAction<boolean>>;
}

export default function OverlayLoading({
  setOrbitControlsDisabled,
  setHiddenLeva,
  setHideOverlay,
}: OverlayLoadingProps) {
  const planeMeshRef = useRef<any>();

  useEffect(() => {
    setHiddenLeva(true);
    setOrbitControlsDisabled(false);
  }, [setHiddenLeva, setOrbitControlsDisabled]);

  return (
    <>
      <mesh ref={planeMeshRef}>
        <planeGeometry args={[2, 2, 1, 1]} />
        <shaderMaterial
          vertexShader={portalVertexShader}
          fragmentShader={portalFragmentShader}
          transparent={true}
          uniforms={{
            uAlpha: { value: 1 },
          }}
        />
        <HtmlOverlay
          setHideOverlay={setHideOverlay}
          setHiddenLeva={setHiddenLeva}
          setOrbitControlsDisabled={setOrbitControlsDisabled}
          planeMeshRef={planeMeshRef}
        />
      </mesh>
    </>
  );
}
