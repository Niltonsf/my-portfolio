import { useState, useCallback, Dispatch, SetStateAction } from "react";
import { Html } from "@react-three/drei";
import IntroOne from "../../html/IntroOne";
import IntroTwo from "../../html/IntroTwo";
import IntroThree from "../../html/IntroThree";
import { useNavigate } from "react-router-dom";

interface LoaderScreensHandlerProps {
  setOrbitControlsDisabled: Dispatch<SetStateAction<boolean>>;
  setHiddenLeva: Dispatch<SetStateAction<boolean>>;
  setHideOverlay: Dispatch<SetStateAction<boolean>>;
  planeMeshRef: any;
}

export default function LoaderScreensHandler({
  setHideOverlay,
  setHiddenLeva,
  setOrbitControlsDisabled,
  planeMeshRef,
}: LoaderScreensHandlerProps) {
  const navigate = useNavigate();

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
            navigate={navigate}
          />
        );
    }
  }, [
    navigate,
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
