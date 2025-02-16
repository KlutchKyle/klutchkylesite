import React, { useEffect, useRef } from "react";
import useWindowDimensions from "./functions";

export default function StarField({windowSize}) {
  const { height, width } = useWindowDimensions();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = 1000;
    const speed = 0.75;
    const maxZ = 500;
    const spread = 150;
    const scale = height/height;

    // Set the canvas size to match the window size
    canvas.width = window.innerWidth * scale;
    canvas.height = window.innerHeight * scale;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    // Generate random stars
    for (let i = 0; i < numStars; i++) {
      const x = (Math.random() - 0.5) * canvas.width;
      const y = (Math.random() - 0.5) * canvas.height;
      const z = Math.random() * maxZ;
      const size = Math.random() * 3;
      stars.push({ x, y, z, size });
    }

    // Animate the stars
    const animate = () => {
      // Move the stars
      for (let i = 0; i < numStars; i++) {
        stars[i].z -= speed;
        if (stars[i].z < 0) {
          stars[i].z = maxZ;
        }
      }

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the stars
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        const x = ((star.x / star.z) * spread + canvas.width / 2) * scale;
        const y = ((star.y / star.z) * spread + canvas.height / 2) * scale;
        const size = star.size * (maxZ - star.z) / maxZ * scale;
        ctx.fillRect(x, y, size, size);
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} className="starfield" />;
};


