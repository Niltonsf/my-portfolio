import { Html } from "@react-three/drei";
import { Dispatch, SetStateAction } from "react";
import { isMobile } from "react-device-detect";
import * as THREE from "three";

interface MonitorProps {
  geometry: THREE.BufferGeometry;
  screen: THREE.Mesh;
  bakedTexture: THREE.Texture;
  setIsPointerOnHtml: Dispatch<SetStateAction<boolean>>;
  isFocusOnHtml: boolean;
}

export default function Monitor({
  geometry,
  screen,
  bakedTexture,
  setIsPointerOnHtml,
  isFocusOnHtml,
}: MonitorProps) {
  return (
    <>
      <primitive object={screen}>
        <group position={[-2.57, 1.8, -0.01]} rotation-y={1.565}>
          <Html
            transform
            prepend
            wrapperClass="htmlScreen"
            scale={0.35}
            distanceFactor={1.17}
            zIndexRange={[0, 0]}
          >
            <div
              onClick={(e) => {
                if (!isFocusOnHtml) e.preventDefault();
              }}
              onPointerEnter={(e) => {
                if (isFocusOnHtml) setIsPointerOnHtml(true);
              }}
              onPointerLeave={(e) => {
                if (isFocusOnHtml) setIsPointerOnHtml(false);
              }}
            >
              <iframe
                id="iframe"
                src="https://niltonsf.dev/static"
                // src="http://192.168.1.13:3000/static"
                title="myStaticWebsite"
                style={{ width: isMobile ? 1200 : 1500 }}
              />
            </div>
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
