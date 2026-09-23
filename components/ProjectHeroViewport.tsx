"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sliders, Smartphone, Monitor } from "lucide-react";
import { Project } from "@/lib/types";

export default function ProjectHeroViewport({ project }: { project: Project }) {
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");
  const [students, setStudents] = useState<number>(45);

  // Traction dynamic calculation: estimated monthly revenue based on students
  const revenuePerStudent = 140;
  const projectedRevenue = students * revenuePerStudent;

  return (
    <div className="border border-[rgba(10,10,12,0.08)] bg-white rounded-xl shadow-xs overflow-hidden">
      {/* Top Chrome / Viewport Controls */}
      <div className="px-4 py-3 bg-[#F6F6F8] border-b border-[rgba(10,10,12,0.06)] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[rgba(10,10,12,0.15)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[rgba(10,10,12,0.15)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[rgba(10,10,12,0.15)]" />
          </div>
          <span className="ml-3 font-mono text-[11px] text-[#737380] tracking-wider">
            https://panthr.dev/work/{project.slug}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          {/* Device viewport toggle */}
          <div className="flex items-center bg-white border border-[rgba(10,10,12,0.08)] rounded p-0.5 text-xs font-mono">
            <button
              onClick={() => setDeviceMode("desktop")}
              className={`p-1 rounded transition-colors ${
                deviceMode === "desktop" ? "bg-[#0A0A0C] text-white" : "text-[#737380] hover:text-[#0A0A0C]"
              }`}
              title="Desktop Viewport"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceMode("mobile")}
              className={`p-1 rounded transition-colors ${
                deviceMode === "mobile" ? "bg-[#0A0A0C] text-white" : "text-[#737380] hover:text-[#0A0A0C]"
              }`}
              title="Mobile Viewport"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center space-x-1 text-xs font-mono text-[#0A0A0C] hover:underline"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Main Viewport Workspace */}
      <div className="p-4 sm:p-8 bg-[#EBECEF] flex justify-center items-center min-h-[420px] transition-all">
        <div
          className={`transition-all duration-300 bg-[#090A0E] text-[#F7F7FA] rounded-xl border border-[rgba(255,255,255,0.08)] shadow-xl overflow-hidden ${
            deviceMode === "desktop" ? "w-full max-w-4xl" : "w-[360px]"
          }`}
        >
          {/* Simulated App Navigation */}
          <div className="px-5 py-3 border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center space-x-2">
              <span className="font-bold tracking-tight text-white uppercase">{project.title}</span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--iris)", boxShadow: "0 0 6px var(--iris-glow)" }}
              />
            </div>
            <div className="text-[11px] text-[#8E8E9A]">SYSTEM / ACADEMY OS</div>
          </div>

          {/* Interactive Core: Traction Growth Calculator */}
          <div className="p-6 sm:p-8">
            <div className="max-w-xl">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#8E8E9A]">
                Interactive Growth Simulation
              </div>
              <h3 className="mt-2 text-xl sm:text-2xl font-medium tracking-tight text-white">
                Projected Academy Revenue Model
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#8E8E9A] leading-relaxed">
                Test the live calculation engine. Drag the slider to compute student capacity and automated MRR trajectory.
              </p>
            </div>

            {/* Slider Control */}
            <div className="mt-8 p-5 bg-[#121318] rounded-lg border border-white/[0.08]">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#8E8E9A]">Active Students Enrolled</span>
                <span className="text-white font-bold text-sm">{students} Students</span>
              </div>

              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="mt-4 w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#CCFF00]"
                style={{ accentColor: "var(--iris)" }}
              />

              <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#8E8E9A]">
                    Projected Monthly Velocity
                  </div>
                  <div className="text-2xl font-mono font-medium text-white tracking-tight mt-0.5">
                    ${projectedRevenue.toLocaleString()}
                    <span className="text-xs text-[#8E8E9A] font-normal"> / mo</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span
                    className="px-2 py-1 rounded bg-white/[0.06] text-white border border-white/[0.08]"
                  >
                    Annual: ${(projectedRevenue * 12).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="p-5 bg-white border-t border-[rgba(10,10,12,0.06)] flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-3">
            <h2 className="text-lg font-medium text-[#0A0A0C] tracking-tight">{project.title}</h2>
            <span className="text-xs font-mono text-[#737380] uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <p className="text-xs text-[#52525B] mt-1 max-w-xl">{project.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-[#F6F6F8] border border-[rgba(10,10,12,0.08)] rounded text-[#4A4A52]"
            >
              {item}
            </span>
          ))}
          <Link
            href={`/work/${project.slug}`}
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider bg-[#0A0A0C] text-white rounded hover:bg-[#1A1A22] transition-colors"
          >
            Read Case Study
          </Link>
        </div>
      </div>
    </div>
  );
}
