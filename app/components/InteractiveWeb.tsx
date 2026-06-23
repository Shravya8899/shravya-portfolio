"use client";

import { useEffect, useRef } from "react";

type Particle = {
x: number;
y: number;
vx: number;
vy: number;
};

export default function InteractiveWeb() {
const canvasRef = useRef<HTMLCanvasElement>(null);

useEffect(() => {
const canvas = canvasRef.current;

if (!canvas) return;

const ctx = canvas.getContext("2d");

if (!ctx) return;

let animationId: number;

const mouse = {
  x: -1000,
  y: -1000,
};

const particles: Particle[] = Array.from(
  { length: 45 },
  () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
  })
);

const resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const handleMouseMove = (e: MouseEvent) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

resize();

window.addEventListener("resize", resize);
window.addEventListener("mousemove", handleMouseMove);

const animate = () => {
  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  particles.forEach((particle, i) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (
      particle.x <= 0 ||
      particle.x >= canvas.width
    ) {
      particle.vx *= -1;
    }

    if (
      particle.y <= 0 ||
      particle.y >= canvas.height
    ) {
      particle.vy *= -1;
    }

    ctx.beginPath();
    ctx.arc(
      particle.x,
      particle.y,
      1.2,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      "rgba(255,255,255,0.18)";
    ctx.fill();

    for (
      let j = i + 1;
      j < particles.length;
      j++
    ) {
      const other = particles[j];

      const dx =
        particle.x - other.x;

      const dy =
        particle.y - other.y;

      const distance = Math.sqrt(
        dx * dx + dy * dy
      );

      if (distance < 100) {
        ctx.beginPath();

        ctx.moveTo(
          particle.x,
          particle.y
        );

        ctx.lineTo(
          other.x,
          other.y
        );

        ctx.strokeStyle = `rgba(6,182,212,${
          0.12 - distance / 900
        })`;

        ctx.lineWidth = 0.6;

        ctx.stroke();
      }
    }

    const mouseDx =
      particle.x - mouse.x;

    const mouseDy =
      particle.y - mouse.y;

    const mouseDistance =
      Math.sqrt(
        mouseDx * mouseDx +
          mouseDy * mouseDy
      );

    if (mouseDistance < 180) {
      ctx.beginPath();

      ctx.moveTo(
        particle.x,
        particle.y
      );

      ctx.lineTo(
        mouse.x,
        mouse.y
      );

      ctx.strokeStyle = `rgba(239,68,68,${
        1 - mouseDistance / 180
      })`;

      ctx.lineWidth = 1.5;

      ctx.stroke();
    }
  });

  animationId =
    requestAnimationFrame(animate);
};

animate();

return () => {
  cancelAnimationFrame(animationId);

  window.removeEventListener(
    "resize",
    resize
  );

  window.removeEventListener(
    "mousemove",
    handleMouseMove
  );
};

}, []);

return ( <canvas
   ref={canvasRef}
   className="pointer-events-none fixed inset-0 z-[5]"
 />
);
}
