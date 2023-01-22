import React, { Dispatch, SetStateAction, useEffect } from "react";
import gsap from "gsap";
import { useMediaQuery } from "usehooks-ts";

interface IntroTwoProps {
  setPresentationScreens: Dispatch<SetStateAction<number>>;
}

export default function IntroTwo({ setPresentationScreens }: IntroTwoProps) {
  const smallMediumDevices = useMediaQuery("(max-width: 576px)");

  useEffect(() => {
    setTimeout(() => {
      gsap.to(".introText", {
        opacity: 1,
        lazy: false,
        onComplete: () => {
          setTimeout(() => {
            gsap.to(".introText", {
              opacity: 0,
              lazy: false,
              onComplete: () => {
                setPresentationScreens(2);
              },
            });
          }, 1500);
        },
      });
    }, 500);
  }, [setPresentationScreens]);

  return (
    <div className="localHtml">
      <div className="commonHtml">
        <span
          className="introText finalText"
          style={{
            opacity: 0,
            fontSize: smallMediumDevices ? 40 : 60,
            cursor: "default",
          }}
        >
          Loaded
        </span>
      </div>
    </div>
  );
}
