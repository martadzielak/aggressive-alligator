import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, GroupProps, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef, useState } from "react";
import { colorPink, colorViolet } from "../constants";

const Stars = ({ count = 5000 }) => {
  const positions = useMemo(() => {
    let positions = [];
    for (let i = 0; i < count; i++) {
      const r = 4000;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x =
        r * Math.cos(theta) * Math.sin(phi) + (-2000 + Math.random() * 4000);
      const y =
        r * Math.sin(theta) * Math.sin(phi) + (-2000 + Math.random() * 4000);
      const z = r * Math.cos(phi) + (-1000 + Math.random() * 2000);
      positions.push(x);
      positions.push(y);
      positions.push(z);
    }
    return new Float32Array(positions);
  }, [count]);

  const ref = useRef<GroupProps>(null);

  useFrame(
    ({ clock }) =>
      ref.current &&
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z =
          Math.cos(clock.getElapsedTime() / 16) * Math.PI)
  );

  return (
    <group ref={ref}>
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={["attributes", "position"]}
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          size={12.5}
          sizeAttenuation
          color="white"
          fog={false}
        />
      </points>
    </group>
  );
};

const Alligator = () => {
  const [alligatorRotation, setAlligatorRotation] = useState(0);
  useFrame(() => {
    setAlligatorRotation(alligatorRotation + 0.01);
  });
  const { nodes } = useGLTF("/crocodile.glb");
  return (
    <group rotation={[0, alligatorRotation, 0]} position={[0, 0, -350]}>
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
      camera={{ position: [0, 0, 10], fov: 40, far: 10000 }}
      onCreated={({ gl }) => {
        gl.gammaInput = true;
      }}
    >
      <Suspense fallback={null}>
        <Stars />
        <group rotation={[0, 0, Math.PI / 4]}>
          <mesh position={[0, 0, -400]} material-color={colorPink}>
            <planeGeometry args={[150, 50]} />
          </mesh>
          <mesh position={[0, 0, -400]} material-color={colorPink}>
            <planeGeometry args={[50, 150]} />
          </mesh>
        </group>
        <Alligator />
        <mesh position={[0, 0, -5000]} material-color={colorViolet}>
          <planeGeometry args={[15000, 15000]} />
        </mesh>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};
