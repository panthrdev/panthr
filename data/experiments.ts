import { LabExperiment } from "@/lib/types";

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: "mechanical-toggle",
    title: "Tactile Spring Switch",
    type: "Micro-Interaction / Physics",
    description: "A mechanical spring toggle with physical deceleration curves, haptic click simulation, and active state displacement.",
    tags: ["Framer Motion", "Spring Physics", "Audio Web API"],
    date: "Sep 2026"
  },
  {
    id: "magnetic-trigger",
    title: "Proximity Magnetic Pull",
    type: "Spatial Interaction",
    description: "An interactive button element that softly gravitates toward cursor coordinates when entering an active 64px perimeter field.",
    tags: ["Vector Math", "Spring Interpolation", "DOM Events"],
    date: "Sep 2026"
  },
  {
    id: "iris-tuner",
    title: "Panther Iris Optics Engine",
    type: "Shader & Token Engine",
    description: "Real-time CSS variable interpolation modifying the chromatic wavelength and glow dispersion of the nocturnal feline eye.",
    tags: ["CSS Custom Properties", "Chromatic Dispersion", "State Sync"],
    date: "Sep 2026"
  },
  {
    id: "fluid-counter",
    title: "Kinetic Numeric Ticker",
    type: "Typography Motion",
    description: "Smooth spring-driven number digit rollovers inspired by vintage mechanical split-flap displays and aircraft altimeters.",
    tags: ["RAF Loop", "LayoutId", "Monospaced Geometry"],
    date: "Aug 2026"
  }
];
