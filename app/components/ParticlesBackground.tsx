"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const init = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      init={init}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -3,
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#22d3ee",
          },
          links: {
            enable: true,
            color: "#22d3ee",
            distance: 140,
            opacity: 0.12,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            value: 40,
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },
      }}
    />
  );
}