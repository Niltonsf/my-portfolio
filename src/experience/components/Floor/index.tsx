import { MeshReflectorMaterial } from "@react-three/drei";

export default function Floor() {
  return (
    <mesh rotation-x={-Math.PI * 0.5} scale={40} position={[-3, 0, -3]}>
      <planeGeometry />
      <MeshReflectorMaterial
        mirror={0.9}
        resolution={512}
        blur={[1000, 1000]}
        mixBlur={1}
        envMapIntensity={0.2}
      />
    </mesh>
  );
}
