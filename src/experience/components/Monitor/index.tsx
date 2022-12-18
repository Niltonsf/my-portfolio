import { Html } from "@react-three/drei";
import * as THREE from "three";
import MainWebpage from "../../../webpage/main";

export default function Monitor({ geometry, screen, bakedTexture }: any) {
  return (
    <>
      <primitive object={screen}>
        <group position={[-2.57, 1.8, -0.01]} rotation-y={1.565}>
          <Html
            transform
            prepend
            scale={0.35}
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            zIndexRange={[0, 0]}
          >
            <MainWebpage />
          </Html>
          <mesh>
            <planeGeometry args={[1.535, 0.69]} />
            <meshPhysicalMaterial
              blending={THREE.NoBlending}
              opacity={0}
              color={"black"}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      </primitive>
      <mesh geometry={geometry}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </>
  );
}
