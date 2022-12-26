import React, { Dispatch, SetStateAction, useEffect } from "react";
import gsap from "gsap";

interface IntroTwoProps {
  setPresentationScreens: Dispatch<SetStateAction<number>>;
}

export default function IntroTwo({ setPresentationScreens }: IntroTwoProps) {
  useEffect(() => {
    setTimeout(() => {
      gsap.to(".introText", {
        opacity: 1,
        onComplete: () => {
          setTimeout(() => {
            gsap.to(".introText", {
              opacity: 0,
              onComplete: () => {
                setPresentationScreens(2);
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
          Loaded
        </span>
      </div>
    </div>
  );
}
