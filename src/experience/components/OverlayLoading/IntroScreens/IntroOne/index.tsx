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
      }, 1000);
    }
  }, [progress]);

  return (
    <div className="localHtml opacityControl">
      <div className="commonHtml">
        {/* Loading text and dots */}
        <div style={{ marginBottom: 20 }}>
          <span className="introText">We are loading your experience</span>
        </div>
        {/* Progress bar */}
        <div className="progressBar">
          <div
            style={{
              height: "100%",
              borderRadius: 10,
              width: `${progress}%`,
              backgroundColor: "#32527b",
            }}
          ></div>
          <span className="progressPercent">{progress} %</span>
        </div>
      </div>
    </div>
  );
}
