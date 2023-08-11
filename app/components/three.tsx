import React, { useEffect, FC } from "react";
import * as THREE from "three";

const ThreeScene: FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const particleGeometry = new THREE.SphereGeometry(0.05, 100, 100);
      const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      scene.add(particle);

      const radius = 100;
      const centerX = 100;
      const centerY = 100;
      let angle = 0;

      const animate = () => {
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        particle.position.set(x, y, 0);

        angle += 0.01;

        renderer.render(scene, camera);

        requestAnimationFrame(animate);
      };

      //   animate();
    }
  }, []);

  return <div />;
};

export default ThreeScene;
