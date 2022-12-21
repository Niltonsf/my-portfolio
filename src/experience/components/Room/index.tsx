import { useGLTF, useTexture } from "@react-three/drei";
import Chair from "../Chair";
import Macbook from "../Macbook";
import Monitor from "../Monitor";
import StaticRoom from "../StaticRoom";

export default function Room({ setIsPointerOnHtml, isFocusOnHtml }: any) {
  // Loading models
  const { nodes }: any = useGLTF("./models/room/room.glb");
  const bakedTexture = useTexture("./models/room/baked.png");
  bakedTexture.flipY = false;

  return (
    <>
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
    </>
  );
}
