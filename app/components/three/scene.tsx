import React, { useEffect, FC } from "react";
import * as THREE from "three";

const ThreeScene: FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // init scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0.15, -5, 0.5);
      camera.lookAt(0, 0, 0);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // init variables
      const innerRadius = 1;
      const outerRadius = 4.5;
      const numParticles = window.innerWidth > 768 ? 50000 : 40000;
      const rotationSpeed = 0.001;
      const fadeInDuration = 1500;

      // init geometries
      const particlesGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(numParticles * 3);
      const colors = new Float32Array(numParticles * 3);
      const opacities = new Float32Array(numParticles).fill(0);

      // colors
      const colorPalette = [
        new THREE.Color(0x3a81f4),
        new THREE.Color(0x93c5fd),
        new THREE.Color(0x38bdf8),
      ];

      // create particle system
      for (let i = 0; i < numParticles; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius =
          innerRadius + Math.random() * (outerRadius - innerRadius);

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = 0;

        const index = i * 3;
        positions.set([x, y, z], index);

        const colorIndex = i % colorPalette.length;
        colors.set(colorPalette[colorIndex].toArray(), index);
      }

      // add particles to scene
      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      particlesGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colors, 3)
      );
      particlesGeometry.setAttribute(
        "opacity",
        new THREE.BufferAttribute(opacities, 1)
      );
      const particlesMaterial = new THREE.PointsMaterial({
        size: window.innerWidth > 768 ? 0.001 : 0.006,
        vertexColors: true,
        transparent: true,
        opacity: 0,
      });
      const particleSystem = new THREE.Points(
        particlesGeometry,
        particlesMaterial
      );
      scene.add(particleSystem);

      // animate particle system
      const animate = () => {
        requestAnimationFrame(animate);

        if (particlesMaterial.opacity < 1) {
          particlesMaterial.opacity += (1 / fadeInDuration) * 16;
        }

        particleSystem.rotation.z += rotationSpeed;
        renderer.render(scene, camera);
      };

      setTimeout(() => {
        animate();
      }, fadeInDuration);

      return () => {
        renderer.dispose();
        scene.remove();
        document.querySelector("canvas")?.remove();
      };
    }
  }, []);

  return <div />;
};

export default ThreeScene;
