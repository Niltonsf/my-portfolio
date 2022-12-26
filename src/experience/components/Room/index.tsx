import { useGLTF, useTexture } from "@react-three/drei";
import { Dispatch, SetStateAction, useState } from "react";
import Chair from "../Chair";
import Floor from "../Floor";
import Macbook from "../Macbook";
import Monitor from "../Monitor";
import OverlayLoading from "../OverlayLoading";
import StaticRoom from "../StaticRoom";

interface RoomProps {
  setIsPointerOnHtml: Dispatch<SetStateAction<boolean>>;
  isFocusOnHtml: boolean;
  setOrbitControlsDisabled: Dispatch<SetStateAction<boolean>>;
  setHiddenLeva: Dispatch<SetStateAction<boolean>>;
}

export default function Room({
  setIsPointerOnHtml,
  isFocusOnHtml,
  setOrbitControlsDisabled,
  setHiddenLeva,
}: RoomProps) {
  // Hide overaly
  const [hideOverlay, setHideOverlay] = useState<boolean>(false);

  // Loading models
  const { nodes }: any = useGLTF("./models/room/room.glb");
  const bakedTexture = useTexture("./models/room/baked.png");
  bakedTexture.flipY = false;

  return (
    <>
      {!hideOverlay && (
        <OverlayLoading
          setOrbitControlsDisabled={setOrbitControlsDisabled}
          setHiddenLeva={setHiddenLeva}
          setHideOverlay={setHideOverlay}
        />
      )}
      <StaticRoom geometry={nodes.room.geometry} bakedTexture={bakedTexture} />
      <Chair geometry={nodes.chair.geometry} bakedTexture={bakedTexture} />
      <Monitor
        geometry={nodes.monitor.geometry}
        screen={nodes.screen}
        bakedTexture={bakedTexture}
        setIsPointerOnHtml={setIsPointerOnHtml}
        isFocusOnHtml={isFocusOnHtml}
      />
      <Macbook geometry={nodes.macbook.geometry} bakedTexture={bakedTexture} />
      <Floor geometry={nodes.Floor.geometry} bakedTexture={bakedTexture} />
    </>
  );
}
