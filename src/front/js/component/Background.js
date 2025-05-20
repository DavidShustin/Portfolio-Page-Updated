import React, { useEffect, useRef } from "react";
import "../../styles/Background.css";

const STAR_COUNT = 100;

const Background = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    // Generate stars
    stars.current = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      delta: Math.random() * 0.002 + 0.001 // speed of shimmer
    }));

    const animate = () => {
      ctx.fillStyle = "#1a002b"; // dark purple background
      ctx.fillRect(0, 0, width, height);

      stars.current.forEach(star => {
        star.alpha += star.delta;

        if (star.alpha >= 1) {
          star.alpha = 1;
          star.delta *= -1;
        } else if (star.alpha <= 0.2) {
          star.alpha = 0.2; // Never go completely invisible
          star.delta *= -1;
        }

        ctx.beginPath();
        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = "white";
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="canvas-background" />;
};

export default Background;
