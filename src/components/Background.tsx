import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useState } from "react";

const Crocodile = () => {
  const [alligatorRotation, setAlligatorRotation] = useState(0);
  useFrame(() => {
    setAlligatorRotation(alligatorRotation + 0.01);
  });
  const { nodes } = useGLTF("/crocodile.glb");
  return (
    <group rotation={[0, alligatorRotation, 0]}>
      <mesh geometry={nodes["18751_Crocodile_lunging_sideways_V1_"].geometry}>
        <meshPhysicalMaterial
          thickness={5}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={1}
          ior={1.25}
          envMapIntensity={25}
          color="white"
          attenuationTint={"#ffe79e"}
          attenuationDistance={0}
        />
      </mesh>
    </group>
  );
};

export const Background = () => {
  return (
    <Canvas
      style={{ position: "fixed", zIndex: -1 }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 200] }}
      gl={{ alpha: false }}
    >
      <color attach="background" args={["#4A0001"]} />
      <Suspense fallback={null}>
        <Crocodile />
        <group rotation={[0, 0, Math.PI / 4]}>
          <mesh position={[0, 0, -10]} material-color="hotpink">
            <planeGeometry args={[150, 15]} />
          </mesh>
          <mesh position={[0, 0, -10]} material-color="hotpink">
            <planeGeometry args={[15, 150]} />
          </mesh>
        </group>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};
