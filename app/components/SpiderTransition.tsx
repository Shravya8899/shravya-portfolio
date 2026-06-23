"use client";

import { AnimatePresence, motion } from "framer-motion";

type SpiderTransitionProps = {
active: boolean;
};

export default function SpiderTransition({
active,
}: SpiderTransitionProps) {
return ( <AnimatePresence>
{active && (
<motion.div
className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
initial={{ opacity: 1 }}
exit={{ opacity: 0 }}
>
<motion.div
className="absolute left-8 top-0 h-screen w-[2px] bg-white/70"
initial={{ x: -100 }}
animate={{ x: "110vw" }}
transition={{
duration: 1,
ease: "easeInOut",
}}
/>

```
      <motion.div
        className="absolute left-0 top-24 h-10 w-10 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)]"
        initial={{ x: -100, y: 0 }}
        animate={{
          x: "110vw",
          y: [0, 50, 0],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )}
</AnimatePresence>

);
}
