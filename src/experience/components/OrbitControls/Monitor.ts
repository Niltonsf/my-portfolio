import sleep from "../../../utils/sleep";
import gsap from "gsap";
import { Dispatch, RefObject, SetStateAction } from "react";
import { OrbitControlsProps } from "@react-three/drei";

export interface OrbitControlsExtendedProps extends OrbitControlsProps {
  target: any;
  update: () => void;
}

interface HandlingGsapAnimationsOnHtmlFocusProps {
  focusOnHtml: boolean;
  orbitControlsRef: RefObject<OrbitControlsExtendedProps | null>;
  invisibleObjectRef: RefObject<THREE.Mesh | null>;
  setAnimationOnHtmlFinished: Dispatch<SetStateAction<boolean>>;
}

interface HandlingEndOfInicialFocusAnimationProps {
  isAnimationOnHtmlFinished: boolean;
  isPointerOnHtml: any;
  orbitControlsRef: any;
}

export const handlingGsapAnimationsOnHtmlFocus = ({
  focusOnHtml,
  orbitControlsRef,
  invisibleObjectRef,
  setAnimationOnHtmlFinished,
}: HandlingGsapAnimationsOnHtmlFocusProps) => {
  if (focusOnHtml) {
    orbitControlsRef!.current!.enableRotate = false;
    orbitControlsRef!.current!.enableZoom = false;
    gsap.to(orbitControlsRef!.current!.target, {
      duration: 1.3,
      ease: "power1.inOut",
      x: invisibleObjectRef!.current!.position.x,
      y: invisibleObjectRef!.current!.position.y,
      z: invisibleObjectRef!.current!.position.z,
    });
    sleep(420).then(() => {
      gsap.to(orbitControlsRef!.current!.object!.position, {
        x: -1.5,
        y: 1.9,
        z: 0,
      });
    });
    // This sleep is for the user not scroll while the animation happens
    sleep(1200).then(() => {
      setAnimationOnHtmlFinished(true);
      orbitControlsRef!.current!.minDistance = 2.1;
      orbitControlsRef!.current!.maxDistance = 2.7;
    });
  } else {
    orbitControlsRef!.current!.enableZoom = false;
    orbitControlsRef!.current!.minDistance = 0;
    orbitControlsRef!.current!.maxDistance = 12;
    gsap.to(orbitControlsRef!.current!.object!.position, {
      x: 3.9,
      y: 3.5,
      z: 6,
      duration: 1.3,
    });
    gsap.to(orbitControlsRef!.current!.target, {
      duration: 1,
      ease: "power1.inOut",
      x: 0,
      y: 1,
      z: 0,
    });
    sleep(1300).then(() => {
      orbitControlsRef!.current!.enableZoom = true;
      orbitControlsRef!.current!.enableRotate = true;
      setAnimationOnHtmlFinished(false);
    });
  }
};

export const handlingEndOfInicialFocusAnimation = ({
  isAnimationOnHtmlFinished,
  isPointerOnHtml,
  orbitControlsRef,
}: HandlingEndOfInicialFocusAnimationProps) => {
  if (isAnimationOnHtmlFinished) {
    if (isPointerOnHtml) {
      orbitControlsRef.current.enableZoom = false;
    } else {
      orbitControlsRef.current.enableZoom = true;
    }
  }
};
