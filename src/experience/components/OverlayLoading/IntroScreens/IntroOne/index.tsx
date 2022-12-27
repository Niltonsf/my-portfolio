import { Dispatch, SetStateAction, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";

interface IntroOneProps {
  setPresentationScreens: Dispatch<SetStateAction<number>>;
}

export default function IntroOne({ setPresentationScreens }: IntroOneProps) {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        gsap.to(".opacityControl", {
          opacity: 0,
          onComplete: () => {
            setPresentationScreens(1);
          },
        });
      }, 1500);
    }
  }, [progress, setPresentationScreens]);

  return (
    <div className="localHtml opacityControl">
      <div className="commonHtml">
        <div style={{ marginBottom: 20 }}>
          <span className="introText">We are loading your experience</span>
        </div>

        <div className="progressBar">
          <div
            style={{
              height: "100%",
              borderRadius: 10,
              width: `${progress}%`,
              backgroundColor: "#0061FF",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
