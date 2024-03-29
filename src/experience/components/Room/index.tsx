import { useGLTF, useTexture } from "@react-three/drei";
import { Dispatch, SetStateAction } from "react";
import Chair from "../Chair";
import Floor from "../Floor";
import Macbook from "../Macbook";
import Monitor from "../Monitor";
import StaticRoom from "../StaticRoom";

interface RoomProps {
  setIsPointerOnHtml: Dispatch<SetStateAction<boolean>>;
  isFocusOnHtml: boolean;
  position?: THREE.Vector3;
}

export default function Room({
  setIsPointerOnHtml,
  isFocusOnHtml,
  position,
}: RoomProps) {
  // Loading models
  const { nodes }: any = useGLTF("./models/room/room.glb");
  const bakedTexture = useTexture("./models/room/baked.png");
  bakedTexture.flipY = false;

  return (
    <mesh position={position}>
      <StaticRoom geometry={nodes.room.geometry} bakedTexture={bakedTexture} />
      <Chair
        geometry={nodes.chair.geometry}
        bakedTexture={bakedTexture}
        isViewingWebpage={isFocusOnHtml}
      />
      <Monitor
        geometry={nodes.monitor.geometry}
        screen={nodes.screen}
        bakedTexture={bakedTexture}
        setIsPointerOnHtml={setIsPointerOnHtml}
        isFocusOnHtml={isFocusOnHtml}
      />
      <Macbook geometry={nodes.macbook.geometry} bakedTexture={bakedTexture} />
      <Floor />
    </mesh>
  );
}
