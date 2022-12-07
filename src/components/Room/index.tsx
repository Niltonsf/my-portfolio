import { useGLTF } from "@react-three/drei";

export default function Room() {
  const model = useGLTF("./models/room/room.glb");

  return (
    <>
      <primitive object={model.scene} />
    </>
  );
}
