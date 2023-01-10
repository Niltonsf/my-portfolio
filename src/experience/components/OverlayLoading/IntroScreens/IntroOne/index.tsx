import { Dispatch, SetStateAction, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";

interface IntroOneProps {
  setPresentationScreens: Dispatch<SetStateAction<number>>;
}

export default function IntroOne({ setPresentationScreens }: IntroOneProps) {
  const { progress } = useProgress();

  useEffect(() => {
    setTimeout(() => {
      gsap.to(".localHtml", {
        opacity: 1,
      });
    }, 100);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        gsap.to(".localHtml", {
          opacity: 0,
          onComplete: () => {
            setTimeout(() => {
              setPresentationScreens(1);
            }, 1000);
          },
        });
      }, 1500);
    }
  }, [progress, setPresentationScreens]);

  return (
    <div className="localHtml">
      <div className="commonHtml">
        <div style={{ marginBottom: 20 }}>
          <span
            className="introText finalText"
            style={{
              display: "table",
              fontSize: 40,
              cursor: "default",
              textAlign: "center",
            }}
          >
            We are loading your experience
          </span>
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
