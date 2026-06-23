"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-40 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl transition-transform duration-150"
      style={{
        left: position.x - 128,
        top: position.y - 128,
      }}
    />
  );
}