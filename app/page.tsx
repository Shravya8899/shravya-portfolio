"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import HomePage from "./components/HomePage";
import IntroScreen from "./components/IntroScreen";
import WebBackground from "./components/WebBackground";
import InteractiveWeb from "./components/InteractiveWeb";

export default function Page() {
const [showIntro, setShowIntro] =
useState(true);

return (
<> <WebBackground />

  <AnimatePresence mode="wait">
    {showIntro ? (
      <IntroScreen
        key="intro"
        onComplete={() =>
          setShowIntro(false)
        }
      />
    ) : (
      <>
        <InteractiveWeb />
        <HomePage key="home" />
      </>
    )}
  </AnimatePresence>
</>


);
}
