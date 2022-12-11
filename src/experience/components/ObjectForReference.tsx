import { Ref } from "react";
import * as THREE from "three";

interface ObjectForReferenceProps {
  meshRef: Ref<THREE.Mesh>;
  position: THREE.Vector3;
}

export function ObjectForReference({
  meshRef,
  position,
}: ObjectForReferenceProps) {
  // This is an invisible object for reference, so we can make the camera look at a place

  return (
    <mesh ref={meshRef} position={position} visible={false}>
      <planeGeometry />
    </mesh>
  );
}
