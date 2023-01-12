import { Dispatch, SetStateAction, useEffect, useRef } from "react";

import gsap from "gsap";

interface IntroThreeProps {
  setOrbitControlsDisabled: Dispatch<SetStateAction<boolean>>;
  setHiddenLeva: Dispatch<SetStateAction<boolean>>;
  setHideOverlay: Dispatch<SetStateAction<boolean>>;
  planeMeshRef: any;
  navigate: any;
}

export default function IntroThree({
  setHideOverlay,
  setHiddenLeva,
  setOrbitControlsDisabled,
  planeMeshRef,
  navigate,
}: IntroThreeProps) {
  const experienceTextRef = useRef<any>();
  const normalTextRef = useRef<any>();

  const handleIntroFinish = (normalWebsite: boolean) => {
    setTimeout(() => {
      gsap.to(".htmlComponent", {
        opacity: 0,
        onComplete: () => {
          if (normalWebsite) {
            navigate("/static");
            return;
          }
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ width: 500, textAlign: "center", marginBottom: 20 }}>
            Here you can select what type of experience you want to have, by
            pressing{" "}
            <span style={{ fontFamily: "SFSemiBold" }}>EXPERIENCE</span>, you
            will be redirected to my 3D website. By pressing{" "}
            <span style={{ fontFamily: "SFSemiBold" }}>NORMAL</span> you will be
            redirected to my normal website.
          </span>
          <span
            ref={experienceTextRef}
            className="introText finalText"
            onClick={() => {
              experienceTextRef.current.classList.toggle("fullTextWidth");
              handleIntroFinish(false);
            }}
            style={{
              opacity: 0,
              fontSize: 60,
            }}
            data-text="Experience"
          >
            Experience
          </span>
          <span
            ref={normalTextRef}
            className="introText finalText"
            onClick={() => {
              normalTextRef.current.classList.toggle("fullTextWidth");
              handleIntroFinish(true);
            }}
            style={{
              opacity: 0,
              fontSize: 60,
            }}
            data-text="Normal"
          >
            Normal
          </span>
        </div>
      </div>
    </div>
  );
}
