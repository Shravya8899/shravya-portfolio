"use client";

import InteractiveWeb from "./InteractiveWeb";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface IntroScreenProps {
onComplete: () => void;
}

export default function IntroScreen({
onComplete,
}: IntroScreenProps) {
const audioRef =
useRef<HTMLAudioElement>(null);

const handleStart = async () => {
if (!audioRef.current) return;

try {
  audioRef.current.currentTime = 0;

  await audioRef.current.play();

  audioRef.current.onended = () => {
    onComplete();
  };
} catch (error) {
  console.error(error);
  onComplete();
}

};

return (
<motion.div
className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#020617]"
initial={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 1 }}
> <InteractiveWeb />

  <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-90" />

  <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-red-500/20 blur-[140px]" />

  <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

  <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center">

    <motion.h1
      initial={{
        opacity: 0,
        y: 220,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.8,
      }}
      className="text-3xl font-black md:text-6xl"
    >
      Yennepally{" "}
      <span className="bg-gradient-to-r from-red-500 via-cyan-400 to-red-500 bg-clip-text text-transparent">
        Shravya
      </span>{" "}
      Reddy
    </motion.h1>

    <motion.div
      animate={{
        y: [0, -10, 0],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className="relative"
    >
      <Image
        src="/ai-profile.png"
        alt="Shravya"
        width={190}
        height={190}
        priority
        className="rounded-full border-4 border-cyan-400"
      />
    </motion.div>

    <p className="text-slate-300">
      Welcome to SpiderOps
    </p>

    <button
      onClick={handleStart}
      className="rounded-full bg-gradient-to-r from-red-600 to-cyan-500 px-8 py-3 font-bold text-white"
    >
      ENTER SPIDEROPS
    </button>

    <audio
      ref={audioRef}
      src="/intro.mp3"
      preload="auto"
    />
  </div>
</motion.div>


);
}
