"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Cloud, Layers, CheckCircle2, Monitor, Smartphone } from "lucide-react";
import { Project } from "@/lib/types";

export default function ProjectEditorialSplit({ project }: { project: Project }) {
  const [activeAspect, setActiveAspect] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="border border-[rgba(10,10,12,0.08)] bg-white rounded-xl shadow-xs overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Editorial & Technical Specifications (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[rgba(10,10,12,0.06)] bg-[#FDFDFE]">
          <div>
            <div className="flex items-center space-x-3 text-xs font-mono text-[#737380] uppercase tracking-wider">
              <span>{project.category}</span>
              <span>/</span>
              <span>{project.year}</span>
            </div>

            <h2 className="mt-4 text-2xl sm:text-3xl font-medium text-[#0A0A0C] tracking-tight">
              {project.title}
            </h2>

            <p className="mt-3 text-sm text-[#52525B] leading-relaxed">
              {project.overview}
            </p>

            <div className="mt-6 pt-6 border-t border-[rgba(10,10,12,0.06)]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#737380] mb-3">
                Architectural Highlights
              </div>
              <ul className="space-y-2.5">
                {project.engineeringHighlights.slice(0, 3).map((hl, i) => (
                  <li key={i} className="flex items-start space-x-2 text-xs text-[#4A4A52] leading-normal">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: "var(--iris)" }}
                    />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[rgba(10,10,12,0.06)]">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-[#F6F6F8] border border-[rgba(10,10,12,0.08)] rounded text-[#52525B]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#0A0A0C] font-semibold hover:underline"
            >
              <span>Inspect Full Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive Media Stage (7 cols) */}
        <div className="lg:col-span-7 bg-[#EBECEF] p-6 sm:p-8 lg:p-10 flex flex-col justify-center items-center">
          <div className="w-full max-w-xl bg-[#090A0E] rounded-xl border border-white/[0.08] shadow-xl overflow-hidden">
            {/* Viewport Control Bar */}
            <div className="px-4 py-3 bg-[#121318] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <div className="flex items-center space-x-2 text-white">
                <Cloud className="w-3.5 h-3.5 text-[#8E8E9A]" />
                <span className="text-[11px] text-[#8E8E9A]">EDGE REPOSITORY / CLOUDFLARE</span>
              </div>

              {/* Aspect Ratio Switcher */}
              <div className="flex items-center bg-black/40 border border-white/[0.08] rounded p-0.5">
                <button
                  onClick={() => setActiveAspect("desktop")}
                  className={`px-2 py-1 rounded text-[10px] transition-colors flex items-center space-x-1 ${
                    activeAspect === "desktop" ? "bg-white/20 text-white" : "text-[#8E8E9A] hover:text-white"
                  }`}
                >
                  <Monitor className="w-3 h-3" />
                  <span>Desktop 16:9</span>
                </button>
                <button
                  onClick={() => setActiveAspect("mobile")}
                  className={`px-2 py-1 rounded text-[10px] transition-colors flex items-center space-x-1 ${
                    activeAspect === "mobile" ? "bg-white/20 text-white" : "text-[#8E8E9A] hover:text-white"
                  }`}
                >
                  <Smartphone className="w-3 h-3" />
                  <span>Mobile 9:16</span>
                </button>
              </div>
            </div>

            {/* Dynamic Visual Preview Container */}
            <div className="p-6 flex justify-center items-center">
              <div
                className={`relative rounded-lg overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 bg-gradient-to-br from-[#12131A] via-[#1A1A26] to-[#0A0A0F] flex flex-col justify-between p-6 ${
                  activeAspect === "desktop" ? "w-full h-64" : "w-48 h-80"
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E8E9A] px-2 py-0.5 rounded bg-black/50 border border-white/10">
                    4K HDR Curated
                  </span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "var(--iris)", boxShadow: "0 0 8px var(--iris-glow)" }}
                  />
                </div>

                <div>
                  <div className="font-mono text-xs text-white/40 uppercase tracking-widest">
                    Asset ID: #0922-STELLAR
                  </div>
                  <div className="text-lg font-medium text-white tracking-tight mt-1">
                    Nocturnal Deep Space
                  </div>
                  <div className="mt-3 flex items-center space-x-3 text-[11px] font-mono text-[#8E8E9A]">
                    <span>3840 × 2160</span>
                    <span>•</span>
                    <span>Lossless AVIF</span>
                    <span>•</span>
                    <span className="text-white">Edge Cached</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Edge Metrics Footer */}
            <div className="px-6 py-3 bg-[#0D0E12] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#8E8E9A]">
              <span>Global CDN Latency: 32ms</span>
              <span className="text-white">Active Production</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
