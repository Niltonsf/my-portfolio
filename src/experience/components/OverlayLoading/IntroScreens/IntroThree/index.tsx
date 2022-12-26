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
  useEffect(() => {
    setTimeout(() => {
      gsap.to(".introText", {
        opacity: 1,
        onComplete: () => {
          setTimeout(() => {
            gsap.to(".htmlComponent", {
              opacity: 0,
              onComplete: () => {
                gsap.to(planeMeshRef.current.material.uniforms.uAlpha, {
                  value: 0,
                  onComplete: () => {
                    setHideOverlay(true);
                    setHiddenLeva(false);
                    setOrbitControlsDisabled(true);
                  },
                });
              },
            });
          }, 1500);
        },
      });
    }, 500);
  }, []);

  return (
    <div className="localHtml">
      <div className="commonHtml">
        <span
          className="introText"
          style={{
            opacity: 0,
          }}
        >
          Start
        </span>
      </div>
    </div>
  );
}
