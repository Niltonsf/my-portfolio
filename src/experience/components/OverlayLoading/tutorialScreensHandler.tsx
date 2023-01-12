import React, { useCallback, useState } from "react";

export default function TutorialScreensHandler() {
  const [tutorialScreens, setTutorialScreen] = useState(0);

  const handleTutorialScreen = useCallback(() => {
    switch (tutorialScreens) {
      case 0:
        return <></>;
      case 1:
        return <></>;
      case 2:
        return <></>;
    }
  }, []);

  return <div>{handleTutorialScreen()}</div>;
}
