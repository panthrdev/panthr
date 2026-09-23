"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Sliders, 
  Copy, 
  Check, 
  Zap, 
  Shield, 
  Cpu, 
  Radio, 
  Maximize2 
} from "lucide-react";
import Masthead from "@/components/Masthead";
import { LocationCard } from "@/components/ui/card-17";

export default function LabPage() {
  const [toggleState, setToggleState] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [sliderVal, setSliderVal] = useState(72);
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const copySnippet = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#0F1015]">
      <Masthead />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 w-full">
        {/* Page Header */}
        <div className="pb-8 sm:pb-12 border-b border-black/[0.08]">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F1015]">
            UI Components & Mechanics
          </h1>
          <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-lg text-[#64748B] leading-relaxed">
            A live laboratory demonstrating bespoke button mechanics, card architectures, toggles, and micro-interaction states crafted for panthr projects.
          </p>
        </div>

        {/* Section 1: Button Styles */}
        <section className="py-10 sm:py-14 border-b border-black/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Style 01 • Actions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1015] mt-1">
                Button Styles & Triggers
              </h2>
            </div>
            <div className="text-xs font-mono text-[#64748B]">
              Tactile • Kinetic • Glowing
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Button 1: Cyber Lime Glow Pill */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.08] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                  Button 01 • Signature Glow
                </span>
                <p className="mt-1 text-sm font-medium text-[#0F1015]">
                  Cyber Lime Neon Glow Pill
                </p>
                <p className="mt-1 text-xs text-[#64748B]">
                  Signature high-impact CTA with soft radiant green drop shadow.
                </p>
              </div>

              <div className="py-8 flex items-center justify-center">
                <button className="px-6 py-2.5 rounded-full bg-[#CCFF00] text-[#0F1015] font-bold text-xs tracking-tight shadow-[0_4px_22px_rgba(204,255,0,0.65)] hover:shadow-[0_6px_28px_rgba(204,255,0,0.85)] hover:scale-105 active:scale-95 transition-all duration-200">
                  Get Started
                </button>
              </div>

              <button
                onClick={() => copySnippet("btn1", "bg-[#CCFF00] text-[#0F1015] shadow-[0_4px_22px_rgba(204,255,0,0.65)]")}
                className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-[#64748B] hover:text-[#0F1015]"
              >
                <span>Copy Classes</span>
                {copiedIndex === "btn1" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Button 2: Obsidian Stealth Pill */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.08] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                  Button 02 • High Contrast
                </span>
                <p className="mt-1 text-sm font-medium text-[#0F1015]">
                  Obsidian Stealth Pill
                </p>
                <p className="mt-1 text-xs text-[#64748B]">
                  Deep solid ink with electric lime accent text and hover lift.
                </p>
              </div>

              <div className="py-8 flex items-center justify-center">
                <button className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#0F1015] text-[#CCFF00] font-semibold text-xs hover:bg-black transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95">
                  <span>Explore Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => copySnippet("btn2", "bg-[#0F1015] text-[#CCFF00] rounded-full hover:scale-105")}
                className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-[#64748B] hover:text-[#0F1015]"
              >
                <span>Copy Classes</span>
                {copiedIndex === "btn2" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Button 3: Frosted Glass Pill */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.08] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                  Button 03 • Translucent
                </span>
                <p className="mt-1 text-sm font-medium text-[#0F1015]">
                  Frosted Minimalist Pill
                </p>
                <p className="mt-1 text-xs text-[#64748B]">
                  Subtle hairline outline with glass sheen on hover.
                </p>
              </div>

              <div className="py-8 flex items-center justify-center">
                <button className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-white border border-black/[0.1] text-[#0F1015] font-semibold text-xs hover:bg-black/[0.03] hover:border-black/20 transition-all shadow-xs active:scale-95">
                  <span>View Documentation</span>
                </button>
              </div>

              <button
                onClick={() => copySnippet("btn3", "bg-white border border-black/[0.1] text-[#0F1015] shadow-xs")}
                className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-[#64748B] hover:text-[#0F1015]"
              >
                <span>Copy Classes</span>
                {copiedIndex === "btn3" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Button 4: Dark Capsule Nav Pill */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.08] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                  Button 04 • Nav Capsule
                </span>
                <p className="mt-1 text-sm font-medium text-[#0F1015]">
                  Obsidian Capsule Tab
                </p>
                <p className="mt-1 text-xs text-[#64748B]">
                  Mini segmented toggle used in the top navigation bar.
                </p>
              </div>

              <div className="py-8 flex items-center justify-center">
                <div className="flex items-center space-x-1 bg-[#18191E] p-1 rounded-full shadow-md">
                  <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-[#2D2E36] text-white">
                    Active
                  </span>
                  <span className="px-3.5 py-1 text-xs font-medium rounded-full text-[#94A3B8]">
                    Inactive
                  </span>
                </div>
              </div>

              <button
                onClick={() => copySnippet("btn4", "bg-[#18191E] p-1 rounded-full shadow-md")}
                className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-[#64748B] hover:text-[#0F1015]"
              >
                <span>Copy Classes</span>
                {copiedIndex === "btn4" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Button 5: Magnetic Icon Trigger */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.08] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                  Button 05 • Micro-Trigger
                </span>
                <p className="mt-1 text-sm font-medium text-[#0F1015]">
                  Circular Arrow Launcher
                </p>
                <p className="mt-1 text-xs text-[#64748B]">
                  Hover transforms color from subtle ghost to vibrant green.
                </p>
              </div>

              <div className="py-8 flex items-center justify-center space-x-4">
                <button className="w-11 h-11 rounded-full bg-[#0F1015] text-[#CCFF00] flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
                <button className="w-11 h-11 rounded-full bg-white border border-black/[0.1] text-[#0F1015] flex items-center justify-center shadow-xs hover:border-[#CCFF00] hover:bg-[#CCFF00] transition-all">
                  <Sparkles className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={() => copySnippet("btn5", "w-11 h-11 rounded-full bg-[#0F1015] text-[#CCFF00] hover:scale-110")}
                className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-[#64748B] hover:text-[#0F1015]"
              >
                <span>Copy Classes</span>
                {copiedIndex === "btn5" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Button 6: Status Pulse Button */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.08] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                  Button 06 • Indicator Pill
                </span>
                <p className="mt-1 text-sm font-medium text-[#0F1015]">
                  Status Beacon Pill
                </p>
                <p className="mt-1 text-xs text-[#64748B]">
                  Pulsing beacon demonstrating live availability.
                </p>
              </div>

              <div className="py-8 flex items-center justify-center">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-black/[0.08] shadow-xs text-xs font-medium text-[#0F1015]">
                  <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00] animate-pulse" />
                  <span>Available for Q4 Production</span>
                </div>
              </div>

              <button
                onClick={() => copySnippet("btn6", "px-4 py-2 rounded-full bg-white border border-black/[0.08] text-xs")}
                className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-[#64748B] hover:text-[#0F1015]"
              >
                <span>Copy Classes</span>
                {copiedIndex === "btn6" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Card Styles */}
        <section className="py-10 sm:py-14 border-b border-black/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Style 02 • Containers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1015] mt-1">
                Card Architectures
              </h2>
            </div>
            <div className="text-xs font-mono text-[#64748B]">
              Elevation • Bento • Spotlight
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Obsidian Elevated Card */}
            <div className="p-8 rounded-3xl bg-[#0F1015] text-white relative overflow-hidden shadow-xl flex flex-col justify-between min-h-[300px]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-[#CCFF00] font-mono text-[10px] uppercase tracking-wider font-semibold border border-white/10">
                  Obsidian Tier
                </span>
                <h3 className="mt-4 text-2xl font-bold text-white tracking-tight">
                  Terminal Velocity
                </h3>
                <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                  Engineered with pitch-black surfaces, glowing corner ambient flares, and crisp typographic hierarchy.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#94A3B8]">
                <span>Zero Layout Thrash</span>
                <span className="text-[#CCFF00] font-mono">0.02ms</span>
              </div>
            </div>

            {/* Card 2: Minimalist Studio Card */}
            <div className="p-8 rounded-3xl bg-white border border-black/[0.08] shadow-xs hover:border-black/20 hover:shadow-lg transition-all flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#F1F3F5] text-[#475569] font-mono text-[10px] uppercase tracking-wider font-semibold">
                  Chalk Minimal
                </span>
                <h3 className="mt-4 text-2xl font-bold text-[#0F1015] tracking-tight">
                  Human Craft
                </h3>
                <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                  Clean architectural canvas with generous breathing room, restrained typography, and hairline borders.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#64748B]">
                <span>Swiss Typography</span>
                <ArrowUpRight className="w-4 h-4 text-[#0F1015]" />
              </div>
            </div>

            {/* Card 3: Bento Spotlight Metric Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#F8F9FA] to-white border border-black/[0.08] shadow-xs flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#CCFF00] text-[#0F1015] font-mono text-[10px] uppercase tracking-wider font-bold">
                  Bento Metric
                </span>
                <h3 className="mt-4 text-2xl font-bold text-[#0F1015] tracking-tight">
                  100% Production Ready
                </h3>
                <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                  Dynamic metric containers that deliver instant quantitative proof directly to the user.
                </p>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-[#0F1015] text-[#CCFF00] flex items-center justify-between">
                <span className="text-xs font-mono text-white/80">Lighthouse Score</span>
                <span className="text-xl font-bold font-mono">99 / 100</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Interactive Controls & Toggles */}
        <section className="py-10 sm:py-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Style 03 • Micro-Interactions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1015] mt-1">
                Controls & Haptics
              </h2>
            </div>
            <div className="text-xs font-mono text-[#64748B]">
              Mechanical • Sliders • Live
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Interactive Mechanical Switch */}
            <div className="p-8 rounded-3xl bg-white border border-black/[0.08] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                  Control 01
                </span>
                <h3 className="mt-1 text-xl font-bold text-[#0F1015]">
                  Cyber Spring Switch
                </h3>
                <p className="mt-1 text-xs text-[#64748B]">
                  Click to test the spring physics toggle with live status change.
                </p>
              </div>

              <div className="py-8 flex items-center justify-between px-4 bg-[#F8F9FA] rounded-2xl border border-black/[0.05]">
                <div className="flex items-center space-x-3">
                  <Zap className={`w-5 h-5 ${toggleState ? "text-[#0F1015]" : "text-[#94A3B8]"}`} />
                  <span className="text-sm font-semibold text-[#0F1015]">
                    {toggleState ? "Turbo Acceleration: Engaged" : "Standard Engine: Idle"}
                  </span>
                </div>

                <button
                  onClick={() => setToggleState(!toggleState)}
                  className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                    toggleState ? "bg-[#0F1015]" : "bg-[#CBD5E1]"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full transition-transform duration-300 transform ${
                      toggleState ? "translate-x-6 bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" : "translate-x-0 bg-white"
                    }`}
                  />
                </button>
              </div>

              <div className="pt-3 border-t border-black/[0.06] text-[11px] font-mono text-[#64748B] flex justify-between">
                <span>State: {toggleState ? "ENABLED" : "DISABLED"}</span>
                <span>Feedback: Instant</span>
              </div>
            </div>

            {/* Interactive Slider Control */}
            <div className="p-8 rounded-3xl bg-white border border-black/[0.08] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                  Control 02
                </span>
                <h3 className="mt-1 text-xl font-bold text-[#0F1015]">
                  Tactile Range Slider
                </h3>
                <p className="mt-1 text-xs text-[#64748B]">
                  Drag the slider to test continuous value recalculation.
                </p>
              </div>

              <div className="py-6 px-4 bg-[#F8F9FA] rounded-2xl border border-black/[0.05] space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-[#0F1015]">
                  <span>System Capacity</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#0F1015] text-[#CCFF00] font-mono">
                    {sliderVal}%
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderVal}
                  onChange={(e) => setSliderVal(Number(e.target.value))}
                  className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#0F1015]"
                />
              </div>

              <div className="pt-3 border-t border-black/[0.06] text-[11px] font-mono text-[#64748B] flex justify-between">
                <span>Dynamic Physics</span>
                <span>Smooth Step: 1 unit</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 3D Spatial Mechanics (card-17) */}
        <section className="py-10 sm:py-14 border-t border-black/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Style 04 • Spatial Motion
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1015] mt-1">
                3D Spring Tilt Architecture (card-17)
              </h2>
            </div>
            <div className="text-xs font-mono text-[#64748B]">
              Framer Motion • Perspective 1000px
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
            <LocationCard
              city="Jaipur Creative Studio"
              address="Hawa Mahal Quarter, Pink City, Rajasthan"
              imageUrl="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
              directionsUrl="https://maps.google.com"
            />
            <LocationCard
              city="Sydney Pacific Hub"
              address="Ocean View Promenade, Bondi Beach, NSW"
              imageUrl="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80"
              directionsUrl="https://maps.google.com"
            />
          </div>
        </section>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-black/[0.08] py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex items-center space-x-2 font-medium">
            <span className="text-[#0F1015] font-bold">panthr.dev</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>

          <div className="flex items-center space-x-6 font-medium">
            <a href="https://dribbble.com/panthrDev" target="_blank" rel="noreferrer" className="hover:text-[#0F1015] transition-colors">
              Dribbble
            </a>
            <a href="https://x.com/panthrDev" target="_blank" rel="noreferrer" className="hover:text-[#0F1015] transition-colors">
              X / Twitter
            </a>
            <a href="https://www.linkedin.com/in/panthr/" target="_blank" rel="noreferrer" className="hover:text-[#0F1015] transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/panthrdev" target="_blank" rel="noreferrer" className="hover:text-[#0F1015] transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
