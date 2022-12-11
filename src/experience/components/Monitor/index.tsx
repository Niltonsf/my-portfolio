import { Html } from "@react-three/drei";
import * as THREE from "three";
import MainWebpage from "../../../webpage/main";
import CustomIframe from "../CustomIframe";

export default function Monitor({ geometry, screen, bakedTexture }: any) {
  return (
    <>
      <primitive object={screen}>
        <group position={[-2.57, 1.8, -0.01]} rotation-y={1.565}>
          <Html
            as="div"
            transform
            prepend
            scale={0.35}
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            zIndexRange={[0, 0]}
          >
            <MainWebpage />
            {/* <iframe src="https://bruno-simon.com/html/" dangerouslySetInnerHTML={}/> */}

            {/* <CustomIframe>
              <MainWebpage />
            </CustomIframe> */}
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
