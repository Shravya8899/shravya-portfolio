"use client";

import { motion } from "framer-motion";

export default function WebBackground() {
return ( <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-950">

```
  {/* Red and cyan glow */}
  <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-red-500/20 blur-[140px]" />
  <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

  {/* Top-left web */}
  <svg
    className="absolute left-0 top-0 h-[420px] w-[420px] opacity-40"
    viewBox="0 0 400 400"
  >
    {[40, 80, 120, 160, 200, 240, 280, 320].map((r) => (
      <circle
        key={r}
        cx="0"
        cy="0"
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="2"
      />
    ))}

    {[0, 15, 30, 45, 60, 75].map((angle) => (
      <line
        key={angle}
        x1="0"
        y1="0"
        x2={400 * Math.cos((angle * Math.PI) / 180)}
        y2={400 * Math.sin((angle * Math.PI) / 180)}
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="2"
      />
    ))}
  </svg>

  {/* Bottom-right web */}
  <svg
    className="absolute bottom-0 right-0 h-[420px] w-[420px] rotate-180 opacity-40"
    viewBox="0 0 400 400"
  >
    {[40, 80, 120, 160, 200, 240, 280, 320].map((r) => (
      <circle
        key={r}
        cx="0"
        cy="0"
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="2"
      />
    ))}

    {[0, 15, 30, 45, 60, 75].map((angle) => (
      <line
        key={angle}
        x1="0"
        y1="0"
        x2={400 * Math.cos((angle * Math.PI) / 180)}
        y2={400 * Math.sin((angle * Math.PI) / 180)}
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="2"
      />
    ))}
  </svg>

  {/* Moving spider silhouette */}
  <motion.div
    className="absolute left-1/2 top-0"
    animate={{
      y: [0, 250, 120, 300, 0],
      x: [0, 40, -30, 20, 0],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div className="h-[220px] w-[2px] bg-white/30" />

    <div className="relative -ml-4 h-8 w-8 rounded-full bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.7)]">
      <div className="absolute left-[-10px] top-2 h-[2px] w-6 rotate-45 bg-cyan-300" />
      <div className="absolute right-[-10px] top-2 h-[2px] w-6 -rotate-45 bg-cyan-300" />
      <div className="absolute left-[-10px] bottom-2 h-[2px] w-6 -rotate-45 bg-cyan-300" />
      <div className="absolute right-[-10px] bottom-2 h-[2px] w-6 rotate-45 bg-cyan-300" />
    </div>
  </motion.div>
</div>


);
}
