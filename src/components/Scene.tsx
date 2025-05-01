import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';

export default function Scene() {
  const computerRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (computerRef.current) {
      // Gentle floating animation
      computerRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      // Slow rotation
      computerRef.current.rotation.y += 0.002;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x += 0.001;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#00ffaa" intensity={2} />
      <pointLight position={[-10, -10, -10]} color="#00ffaa" intensity={1} />
      
      {/* Computer structure */}
      <group ref={computerRef} position={[2, 0, 0]} scale={1.2}>
        {/* Monitor */}
        <Box args={[2, 1.5, 0.1]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#00ffaa" wireframe />
        </Box>

        {/* Screen */}
        <Box args={[1.8, 1.3, 0.05]} position={[0, 0.5, 0.1]}>
          <meshStandardMaterial color="#00ffaa" opacity={0.2} transparent />
        </Box>

        {/* Monitor Stand */}
        <Box args={[0.2, 0.8, 0.1]} position={[0, -0.2, 0]}>
          <meshStandardMaterial color="#00ffaa" wireframe />
        </Box>

        {/* Monitor Base */}
        <Box args={[0.8, 0.1, 0.4]} position={[0, -0.6, 0]}>
          <meshStandardMaterial color="#00ffaa" wireframe />
        </Box>

        {/* Keyboard */}
        <Box args={[1.2, 0.1, 0.4]} position={[0, -0.6, 0.6]}>
          <meshStandardMaterial color="#00ffaa" wireframe />
        </Box>

        {/* Code lines on screen */}
        {[-0.4, -0.2, 0, 0.2, 0.4].map((y, i) => (
          <Box
            key={i}
            args={[1.4, 0.05, 0.01]}
            position={[0, y + 0.5, 0.15]}
          >
            <meshStandardMaterial color="#00ffaa" opacity={0.8} transparent />
          </Box>
        ))}
      </group>

      {/* Orbiting particles */}
      <group ref={particlesRef}>
        {[...Array(20)].map((_, i) => {
          const angle = (i / 20) * Math.PI * 2;
          const radius = 2.5;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          return (
            <Sphere
              key={i}
              args={[0.05, 16, 16]}
              position={[x + 2, Math.sin(i) * 0.5, z]}
            >
              <meshStandardMaterial color="#00ffaa" emissive="#00ffaa" emissiveIntensity={0.5} />
            </Sphere>
          );
        })}
      </group>
    </>
  );
}