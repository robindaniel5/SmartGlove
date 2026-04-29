import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

const RealisticWire = ({ start, end, color }) => {
  const curve = useMemo(() => {
    const mid1 = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.3);
    mid1.y += 0.8;
    mid1.x += (Math.random() - 0.5) * 0.5;
    const mid2 = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.7);
    mid2.y += 0.6;
    mid2.z += (Math.random() - 0.5) * 0.5;
    return new THREE.CatmullRomCurve3([start, mid1, mid2, end]);
  }, [start, end]);

  return (
    <mesh>
      <tubeGeometry args={[curve, 50, 0.015, 8, false]} />
      <meshStandardMaterial color={color} metalness={0.2} roughness={0.1} />
    </mesh>
  );
};

const FingerSensor = ({ position, length }) => {
  return (
    <group position={position}>
      <mesh position={[0, length/2, 0.14]}>
        <boxGeometry args={[0.08, length * 0.7, 0.02]} />
        <meshStandardMaterial color="#111" roughness={1} />
      </mesh>
      <mesh position={[0, length * 0.8, 0.15]}>
        <boxGeometry args={[0.12, 0.04, 0.03]} />
        <meshStandardMaterial color="#b87333" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, length * 0.2, 0.15]}>
        <boxGeometry args={[0.12, 0.04, 0.03]} />
        <meshStandardMaterial color="#b87333" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};

const RealisticGlove = ({ isMobile }) => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t / 4) * 0.1;
      groupRef.current.rotation.x = Math.cos(t / 5) * 0.05;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.4, -0.6, 0]} scale={isMobile ? 2.5 : 3.6} position={[0, -0.5, 0]}>
      {/* Main Glove - White Leather */}
      <mesh castShadow>
        <boxGeometry args={[1.5, 1.8, 0.45]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.8} />
      </mesh>

      {/* Fingers */}
      <group position={[-0.5, 1, 0]}>
        <mesh castShadow><capsuleGeometry args={[0.14, 1.1, 4, 16]} /><meshStandardMaterial color="#f0f0f0" /></mesh>
        <FingerSensor position={[0, 0, 0]} length={1.1} />
      </group>
      <group position={[-0.15, 1.1, 0]}>
        <mesh castShadow><capsuleGeometry args={[0.15, 1.3, 4, 16]} /><meshStandardMaterial color="#f0f0f0" /></mesh>
        <FingerSensor position={[0, 0, 0]} length={1.3} />
      </group>
      <group position={[0.2, 1.1, 0]}>
        <mesh castShadow><capsuleGeometry args={[0.15, 1.3, 4, 16]} /><meshStandardMaterial color="#f0f0f0" /></mesh>
        <FingerSensor position={[0, 0, 0]} length={1.3} />
      </group>
      <group position={[0.55, 0.9, 0]}>
        <mesh castShadow><capsuleGeometry args={[0.14, 1, 4, 16]} /><meshStandardMaterial color="#f0f0f0" /></mesh>
        <FingerSensor position={[0, 0, 0]} length={1} />
      </group>

      {/* Thumb */}
      <group position={[-0.9, 0.1, 0]} rotation={[0, 0, 1]}>
        <mesh castShadow><capsuleGeometry args={[0.15, 0.8, 4, 16]} /><meshStandardMaterial color="#f0f0f0" /></mesh>
        <FingerSensor position={[0, 0, 0]} length={0.8} />
      </group>

      {/* Control Unit */}
      <group position={[0, 0, 0.3]}>
        <mesh castShadow>
          <boxGeometry args={[1.3, 1, 0.08]} />
          <meshStandardMaterial color="#1e4d2b" metalness={0.2} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.2, 0.1]}>
          <boxGeometry args={[0.7, 0.5, 0.12]} />
          <meshStandardMaterial color="#102a43" metalness={0.8} />
        </mesh>
        <group position={[-0.8, -0.2, 0.1]} rotation={[0, 0.3, 0]}>
          <mesh castShadow><boxGeometry args={[0.5, 0.7, 0.15]} /><meshStandardMaterial color="#ffd700" metalness={0.2} roughness={0.4} /></mesh>
        </group>
        <group position={[-0.4, -0.4, 0.1]} rotation={[0, 0.2, 0]}>
          <mesh castShadow><boxGeometry args={[0.5, 0.7, 0.15]} /><meshStandardMaterial color="#ffd700" metalness={0.2} roughness={0.4} /></mesh>
        </group>
      </group>

      {/* Wires */}
      <RealisticWire start={new THREE.Vector3(-0.3, 0.3, 0.4)} end={new THREE.Vector3(-0.5, 1.5, 0.2)} color="#ff3333" />
      <RealisticWire start={new THREE.Vector3(-0.2, 0.3, 0.4)} end={new THREE.Vector3(-0.2, 1.5, 0.2)} color="#ffaa33" />
      <RealisticWire start={new THREE.Vector3(0, 0.3, 0.4)} end={new THREE.Vector3(0.1, 1.5, 0.2)} color="#3333ff" />
      <RealisticWire start={new THREE.Vector3(0.2, 0.3, 0.4)} end={new THREE.Vector3(0.5, 1.5, 0.2)} color="#33ff33" />
      <RealisticWire start={new THREE.Vector3(0.4, 0.3, 0.4)} end={new THREE.Vector3(0.7, 0.5, 0.2)} color="#ff33ff" />
    </group>
  );
};

const GloveModel = ({ isMobile }) => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: isMobile ? '300px' : '800px', cursor: 'grab' }}>
      <Canvas shadows antialias>
        <PerspectiveCamera makeDefault position={[0, 0, isMobile ? 6 : 5]} fov={50} near={0.001} far={100} />
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, 5, 5]} intensity={1.5} color="#00f2fe" />
        <Environment preset="studio" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <RealisticGlove isMobile={isMobile} />
        </Float>

        <ContactShadows position={[0, -5, 0]} opacity={0.6} scale={20} blur={3} far={10} />

        <OrbitControls 
          enableZoom={true} 
          minDistance={1}
          maxDistance={15}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default GloveModel;
