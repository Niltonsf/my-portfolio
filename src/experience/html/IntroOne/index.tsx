import { Dispatch, SetStateAction, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import CircularProgress from "../CircularProgress";

interface IntroOneProps {
  setPresentationScreens: Dispatch<SetStateAction<number>>;
}

export default function IntroOne({ setPresentationScreens }: IntroOneProps) {
  const { progress } = useProgress();

  useEffect(() => {
    setTimeout(() => {
      gsap.to(".localHtml", {
        opacity: 1,
        lazy: false,
      });
    }, 100);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        gsap.to(".localHtml", {
          opacity: 0,
          lazy: false,
          onComplete: () => {
            setTimeout(() => {
              setPresentationScreens(1);
            }, 500);
          },
        });
      }, 1500);
    }
  }, [progress, setPresentationScreens]);

  return (
    <>
      <div className="localHtml">
        <div className="commonHtml">
          <span
            className="introText finalText"
            style={{
              display: "table",
              position: "absolute",
              fontSize: 30,
              cursor: "default",
              textAlign: "center",
            }}
          >
            loading your experience
          </span>

          <CircularProgress progress={progress} />
        </div>
      </div>
    </>
  );
}
