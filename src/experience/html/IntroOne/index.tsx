import { Dispatch, SetStateAction, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import CircularProgress from "../CircularProgress";
import { useMediaQuery } from "usehooks-ts";

interface IntroOneProps {
  setPresentationScreens: Dispatch<SetStateAction<number>>;
}

export default function IntroOne({ setPresentationScreens }: IntroOneProps) {
  const { progress } = useProgress();
  const smallMediumDevices = useMediaQuery("(max-width: 576px)");
  const smallDevices = useMediaQuery("(max-width: 350px)");

  function handleWidthAndTextSize() {
    if (smallDevices) {
      return {
        textSize: 20,
        width: 200,
      };
    } else if (smallMediumDevices) {
      return {
        textSize: 20,
        width: 300,
      };
    }
    return {
      textSize: 30,
      width: 600,
    };
  }

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
              width: handleWidthAndTextSize()?.width,
              display: "table",
              position: "absolute",
              fontSize: handleWidthAndTextSize()?.textSize,
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
