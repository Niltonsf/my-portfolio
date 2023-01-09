import { Dispatch, SetStateAction, useEffect } from "react";
import gsap from "gsap";

interface IntroThreeProps {
  setOrbitControlsDisabled: Dispatch<SetStateAction<boolean>>;
  setHiddenLeva: Dispatch<SetStateAction<boolean>>;
  setHideOverlay: Dispatch<SetStateAction<boolean>>;
  planeMeshRef: any;
}

export default function IntroThree({
  setHideOverlay,
  setHiddenLeva,
  setOrbitControlsDisabled,
  planeMeshRef,
}: IntroThreeProps) {
  const handleIntroFinish = () => {
    setTimeout(() => {
      gsap.to(".htmlComponent", {
        opacity: 0,
        onComplete: () => {
          if (planeMeshRef) {
            gsap.to(planeMeshRef?.current?.material?.uniforms?.uAlpha, {
              value: 0,
              onComplete: () => {
                setHideOverlay(true);
                setHiddenLeva(false);
                setOrbitControlsDisabled(true);
              },
            });
          } else {
            console.log("error on ref");
          }
        },
      });
    }, 1500);
  };
  useEffect(() => {
    setTimeout(() => {
      gsap.to(".introText", {
        opacity: 1,
        onComplete: () => {},
      });
    }, 500);
  }, [planeMeshRef, setHiddenLeva, setHideOverlay, setOrbitControlsDisabled]);

  return (
    <div className="localHtml">
      <div className="commonHtml">
        <span
          className="introText finalText"
          onClick={handleIntroFinish}
          style={{
            opacity: 0,
            fontSize: 70,
          }}
          data-text="Start"
        >
          Start
        </span>
      </div>
    </div>
  );
}
