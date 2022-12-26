import "./index.css";
import { useState, useCallback, Dispatch, SetStateAction } from "react";
import { Html } from "@react-three/drei";
import IntroOne from "../IntroScreens/IntroOne";
import IntroTwo from "../IntroScreens/IntroTwo";
import IntroThree from "../IntroScreens/IntroThree";

interface HtmlOverlayProps {
  setOrbitControlsDisabled: Dispatch<SetStateAction<boolean>>;
  setHiddenLeva: Dispatch<SetStateAction<boolean>>;
  setHideOverlay: Dispatch<SetStateAction<boolean>>;
  planeMeshRef: any;
}

export default function HtmlOverlay({
  setHideOverlay,
  setHiddenLeva,
  setOrbitControlsDisabled,
  planeMeshRef,
}: HtmlOverlayProps) {
  const [presentationScreens, setPresentationScreens] = useState(0);

  const handlePresentationScreen = useCallback(() => {
    switch (presentationScreens) {
      case 0:
        return <IntroOne setPresentationScreens={setPresentationScreens} />;
      case 1:
        return <IntroTwo setPresentationScreens={setPresentationScreens} />;
      case 2:
        return (
          <IntroThree
            setHideOverlay={setHideOverlay}
            setHiddenLeva={setHiddenLeva}
            setOrbitControlsDisabled={setOrbitControlsDisabled}
            planeMeshRef={planeMeshRef}
          />
        );
    }
  }, [
    planeMeshRef,
    presentationScreens,
    setHiddenLeva,
    setHideOverlay,
    setOrbitControlsDisabled,
  ]);

  return (
    <Html fullscreen className="htmlComponent">
      {handlePresentationScreen()}
    </Html>
  );
}
