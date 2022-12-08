import { useGLTF, useTexture, Html } from "@react-three/drei";
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
      <primitive object={nodes.screen}>
        <Html
          transform
          prepend
          wrapperClass="htmlScreen"
          distanceFactor={1.17}
          position={[-2.57, 1.8, -0.01]}
          rotation-y={1.565}
          zIndexRange={[0, 0]}
        >
          <iframe src="https://bruno-simon.com/html/" />
        </Html>
      </primitive>
      {/* <Monitor geometry={nodes.monitor.geometry} bakedTexture={bakedTexture} /> */}
    </>
  );
}
