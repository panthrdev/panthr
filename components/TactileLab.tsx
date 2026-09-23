"use client";

import React, { useState, useRef } from "react";
import { Sliders, Activity, MousePointer, Gauge } from "lucide-react";
import { useIris } from "./IrisContext";

export default function TactileLab() {
  const { irisHex, irisName } = useIris();

  // Experiment 1: Spring Switch State
  const [switchState, setSwitchState] = useState(true);

  // Experiment 2: Proximity Magnetic Pull
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;
    const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

    if (dist < 80) {
      const pull = 0.25;
      setOffset({
        x: (e.clientX - btnCenterX) * pull,
        y: (e.clientY - btnCenterY) * pull
      });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  // Experiment 3: Numeric Ticker
  const [counter, setCounter] = useState(148);

  // Experiment 4: Glow Aperture
  const [glowIntensity, setGlowIntensity] = useState(24);

  return (
    <section id="lab" className="py-20 border-b border-[rgba(10,10,12,0.06)] bg-[#FDFDFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#737380]">
              Experimental Sandbox / 04 Interactive Modules
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-medium text-[#0A0A0C] tracking-tight">
              The Tactile Micro-Lab
            </h2>
            <p className="mt-2 text-sm text-[#52525B] max-w-xl leading-relaxed">
              Living interface components engineered with physical spring curves, spatial vector proximity, and dynamic CSS token injection.
            </p>
          </div>
        </div>

        {/* 4 Interactive Lab Modules in an Asymmetric 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Module 1: Mechanical Spring Toggle */}
          <div className="p-6 sm:p-8 bg-white border border-[rgba(10,10,12,0.08)] rounded-xl shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-[#737380]">
              <span className="uppercase tracking-wider">EXP 01 / Physics</span>
              <span className="text-[#0A0A0C]">Spring Inertia</span>
            </div>
            <h3 className="mt-3 text-base font-medium text-[#0A0A0C]">
              Mechanical Spring Switch
            </h3>
            <p className="mt-1 text-xs text-[#52525B]">
              Tactile toggle state with physical snap physics and active displacement.
            </p>

            <div className="mt-8 flex items-center justify-between p-6 bg-[#F6F6F8] rounded-lg border border-[rgba(10,10,12,0.06)]">
              <span className="text-xs font-mono text-[#4A4A52]">
                System State: <strong className="text-[#0A0A0C]">{switchState ? "ENGAGED" : "DISENGAGED"}</strong>
              </span>

              <button
                onClick={() => setSwitchState(!switchState)}
                className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-200 focus:outline-none ${
                  switchState ? "bg-[#0A0A0C]" : "bg-[rgba(10,10,12,0.15)]"
                }`}
                aria-label="Toggle mechanical switch"
              >
                <div
                  className={`w-6 h-6 rounded-full transition-transform duration-200 shadow-sm flex items-center justify-center ${
                    switchState ? "translate-x-6 bg-[#CCFF00]" : "translate-x-0 bg-white"
                  }`}
                  style={{
                    backgroundColor: switchState ? "var(--iris)" : "#FFFFFF",
                    boxShadow: switchState ? "0 0 8px var(--iris-glow)" : "none"
                  }}
                >
                  <span className="w-1 h-1 rounded-full bg-black/40" />
                </div>
              </button>
            </div>
          </div>

          {/* Module 2: Proximity Magnetic Pull */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="p-6 sm:p-8 bg-white border border-[rgba(10,10,12,0.08)] rounded-xl shadow-xs"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#737380]">
              <span className="uppercase tracking-wider">EXP 02 / Spatial</span>
              <span className="text-[#0A0A0C]">Proximity Vector</span>
            </div>
            <h3 className="mt-3 text-base font-medium text-[#0A0A0C]">
              Magnetic Proximity Trigger
            </h3>
            <p className="mt-1 text-xs text-[#52525B]">
              Hover within 80px of the trigger to observe spring-vector cursor gravitation.
            </p>

            <div className="mt-8 h-28 flex items-center justify-center bg-[#F6F6F8] rounded-lg border border-[rgba(10,10,12,0.06)] overflow-hidden">
              <button
                ref={buttonRef}
                style={{
                  transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
                  transition: offset.x === 0 ? "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)" : "none"
                }}
                className="px-5 py-2.5 rounded bg-[#0A0A0C] text-[#F7F7FA] text-xs font-mono uppercase tracking-wider shadow-md hover:shadow-lg transition-shadow flex items-center space-x-2"
              >
                <MousePointer className="w-3 h-3 text-[#CCFF00]" style={{ color: "var(--iris)" }} />
                <span>Gravitational Pill</span>
              </button>
            </div>
          </div>

          {/* Module 3: Numeric Kinetic Ticker */}
          <div className="p-6 sm:p-8 bg-white border border-[rgba(10,10,12,0.08)] rounded-xl shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-[#737380]">
              <span className="uppercase tracking-wider">EXP 03 / Kinetic Type</span>
              <span className="text-[#0A0A0C]">Sub-Pixel Rollover</span>
            </div>
            <h3 className="mt-3 text-base font-medium text-[#0A0A0C]">
              Kinetic Metric Counter
            </h3>
            <p className="mt-1 text-xs text-[#52525B]">
              Click to cycle simulated latency throughput.
            </p>

            <div className="mt-8 flex items-center justify-between p-6 bg-[#F6F6F8] rounded-lg border border-[rgba(10,10,12,0.06)]">
              <div>
                <div className="text-[10px] font-mono uppercase text-[#737380]">
                  Global Edge Latency
                </div>
                <div className="text-3xl font-mono font-medium text-[#0A0A0C] tracking-tight mt-1">
                  {counter}
                  <span className="text-sm font-normal text-[#737380]"> ms</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => setCounter((c) => c + 15)}
                  className="px-3 py-1.5 text-xs font-mono bg-white border border-[rgba(10,10,12,0.08)] rounded text-[#0A0A0C] hover:border-[#0A0A0C] transition-colors"
                >
                  +15ms
                </button>
                <button
                  onClick={() => setCounter(32)}
                  className="px-3 py-1.5 text-xs font-mono bg-[#0A0A0C] text-white rounded hover:bg-[#1A1A22] transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Module 4: Panther Eye Optics Tuner */}
          <div className="p-6 sm:p-8 bg-white border border-[rgba(10,10,12,0.08)] rounded-xl shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-[#737380]">
              <span className="uppercase tracking-wider">EXP 04 / Optics</span>
              <span className="text-[#0A0A0C]">{irisName}</span>
            </div>
            <h3 className="mt-3 text-base font-medium text-[#0A0A0C]">
              Panther Eye Dispersion Tuner
            </h3>
            <p className="mt-1 text-xs text-[#52525B]">
              Modulate the radial blur dispersion and refractive halo of the nocturnal eye.
            </p>

            <div className="mt-8 p-5 bg-[#090A0E] rounded-lg border border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: "var(--iris)",
                    boxShadow: `0 0 ${glowIntensity}px var(--iris-glow)`
                  }}
                >
                  <span className="w-1.5 h-3 bg-black/60 rounded-full" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#8E8E9A]">
                    Luminescence Radius
                  </div>
                  <div className="text-sm font-mono text-white mt-0.5">
                    {glowIntensity}px Aperture
                  </div>
                </div>
              </div>

              <input
                type="range"
                min="4"
                max="48"
                value={glowIntensity}
                onChange={(e) => setGlowIntensity(Number(e.target.value))}
                className="w-28 sm:w-36 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                style={{ accentColor: "var(--iris)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
