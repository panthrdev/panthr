"use client";

import React, { useState } from "react";
import { Camera, Download, Layers, Sparkles, Check } from "lucide-react";
import { Project } from "@/lib/types";

export default function DribbbleShotPresenter({ project }: { project: Project }) {
  const [backdrop, setBackdrop] = useState<"dark" | "mesh" | "minimal" | "emerald">("dark");
  const [copied, setCopied] = useState(false);

  const backdropStyles = {
    dark: "bg-[#090A0E] text-white",
    mesh: "bg-gradient-to-br from-[#0F1016] via-[#1A1C24] to-[#0A0B0E] text-white",
    minimal: "bg-[#F3F3F5] text-[#0A0A0C] border border-[rgba(10,10,12,0.1)]",
    emerald: "bg-gradient-to-br from-[#0A120E] via-[#090A0E] to-[#0E1B14] text-white"
  };

  const copyDribbbleBio = () => {
    const text = `Project: ${project.title}\nRole: UI/UX Architecture & Full-Stack Development\nStudio: PANTHR (panthr.dev)\nStack: ${project.stack.join(", ")}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-12 p-4 sm:p-6 bg-white border border-[rgba(10,10,12,0.08)] rounded-xl shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(10,10,12,0.06)]">
        <div>
          <div className="flex items-center space-x-2">
            <Camera className="w-4 h-4 text-[#0A0A0C]" />
            <h3 className="text-sm font-semibold text-[#0A0A0C] tracking-tight uppercase font-mono">
              Dribbble & Social Shot Studio (4:3)
            </h3>
          </div>
          <p className="mt-1 text-xs text-[#737380]">
            Pristine 4:3 presentation stage. Frame and capture high-craft shots ready for Dribbble, X, and LinkedIn.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-center bg-[#F6F6F8] p-1 rounded-md border border-[rgba(10,10,12,0.06)] text-xs font-mono">
            {(["dark", "mesh", "minimal", "emerald"] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBackdrop(b)}
                className={`px-2 py-1 rounded uppercase text-[10px] tracking-wider transition-colors ${
                  backdrop === b ? "bg-[#0A0A0C] text-white" : "text-[#737380] hover:text-[#0A0A0C]"
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          <button
            onClick={copyDribbbleBio}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-[#0A0A0C] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#1C1D24] transition-colors"
          >
            {copied ? <Check className="w-3 h-3 text-[#CCFF00]" /> : <Layers className="w-3 h-3" />}
            <span>{copied ? "Copied Spec" : "Copy Shot Spec"}</span>
          </button>
        </div>
      </div>

      {/* The 4:3 Canvas Stage */}
      <div className="mt-6 flex justify-center">
        <div
          id="dribbble-shot-canvas"
          className={`relative w-full max-w-3xl min-h-[380px] sm:min-h-0 sm:aspect-[4/3] rounded-xl overflow-hidden p-5 sm:p-8 md:p-12 flex flex-col justify-between transition-all duration-300 shadow-2xl ${backdropStyles[backdrop]}`}
        >
          {/* Top Stage Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2 font-mono text-xs tracking-widest uppercase">
              <span className="font-bold">PANTHR</span>
              <span className="opacity-40">/</span>
              <span className="opacity-70">STUDIO SHOT</span>
            </div>

            <div className="flex items-center space-x-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--iris)", boxShadow: "0 0 8px var(--iris-glow)" }}
              />
              <span className="font-mono text-[10px] tracking-wider uppercase opacity-70">
                panthr.dev
              </span>
            </div>
          </div>

          {/* Centerpiece: Elevated Floating App Mockup Frame */}
          <div className="my-auto w-full max-w-xl mx-auto rounded-lg bg-[#0E1015] border border-white/10 p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] transform hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-[11px] font-mono">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <span className="text-white/60 uppercase">{project.title} — Production UI</span>
            </div>

            <div className="py-6 px-2">
              <div className="text-xs font-mono uppercase text-[#8E8E9A] tracking-wider">
                {project.category}
              </div>
              <div className="text-2xl font-medium tracking-tight text-white mt-1">
                {project.subtitle}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.06] border border-white/[0.08] text-white/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Stage Details */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 z-10 text-[10px] sm:text-xs font-mono opacity-60">
            <span>Dribbble Shot Aspect: 4:3 (1600 × 1200)</span>
            <span>Crafted with Panthr Design Tokens</span>
          </div>
        </div>
      </div>
    </div>
  );
}
