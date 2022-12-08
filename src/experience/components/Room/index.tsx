import { useGLTF, useTexture } from "@react-three/drei";
import Chair from "../Chair";
import Monitor from "../Monitor";
import StaticRoom from "../StaticRoom";

export default function Room() {
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
      />
    </>
  );
}
