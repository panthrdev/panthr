"use client";

import React from "react";
import { Zap, ShieldCheck, Cpu, Flame } from "lucide-react";

interface Metric {
  id: string;
  value: string;
  label: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
}

const METRICS: Metric[] = [
  {
    id: "velocity",
    value: "14–21 Days",
    label: "Production MVP Delivery",
    description: "From architecture & Figma to global edge deployment.",
    badge: "Velocity",
    icon: <Zap className="w-4 h-4 text-[#CCFF00]" />,
  },
  {
    id: "perf",
    value: "99 / 100",
    label: "Lighthouse Performance",
    description: "Sub-50ms TTFB, 60fps motion, and zero layout shift.",
    badge: "Speed",
    icon: <Flame className="w-4 h-4 text-[#CCFF00]" />,
  },
  {
    id: "ownership",
    value: "100%",
    label: "Full Client IP Ownership",
    description: "Complete repo ownership transferred with zero lock-in.",
    badge: "Freedom",
    icon: <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />,
  },
  {
    id: "craft",
    value: "60+ Tokens",
    label: "Design System Depth",
    description: "Bespoke micro-interactions, dark obsidian cards & tokens.",
    badge: "Craft",
    icon: <Cpu className="w-4 h-4 text-[#CCFF00]" />,
  },
];

export default function MetricsBar() {
  return (
    <section className="w-full pt-4 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS.map((metric) => (
          <div
            key={metric.id}
            className="group p-5 rounded-2xl bg-white border border-black/[0.08] shadow-xs hover:border-black/20 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 rounded-md bg-[#0F1015] text-[#CCFF00] font-mono text-[10px] font-bold uppercase tracking-wider">
                  {metric.badge}
                </span>
                <div className="p-1 rounded-md bg-[#F8F9FA] border border-black/[0.05]">
                  {metric.icon}
                </div>
              </div>

              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F1015] font-mono">
                {metric.value}
              </div>

              <h4 className="mt-1 text-xs font-bold uppercase tracking-wider text-[#0F1015]">
                {metric.label}
              </h4>
            </div>

            <p className="mt-3 pt-3 border-t border-black/[0.05] text-[11px] text-[#64748B] leading-relaxed">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
