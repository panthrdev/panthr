"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Masthead from "@/components/Masthead";
import { PROJECTS } from "@/data/projects";

const ALL_DESIGNS = [
  ...PROJECTS,
  {
    slug: "panthera-design-system",
    title: "Panthera UI System",
    subtitle: "High-contrast tactile component tokens and motion mechanics",
    category: "Design System",
    year: "2026",
    role: "Design Engineering",
    stack: ["React 19", "Tailwind CSS", "Framer Motion", "TypeScript"],
    metrics: [
      { label: "Token Depth", value: "60+ Tokens" },
      { label: "Motion Curves", value: "Spring Physics" }
    ],
    overview: "A comprehensive design system featuring micro-interaction physics, high-contrast dark obsidian cards, and cyber-lime spec highlights.",
    status: "Production",
    featured: false,
    liveUrl: "/lab"
  },
  {
    slug: "aurora-dashboard",
    title: "Aurora Analytics",
    subtitle: "Real-time edge metrics visualizer and anomaly detection UI",
    category: "Full-Stack Web Application",
    year: "2026",
    role: "UI/UX & Full-Stack",
    stack: ["Next.js 16", "Cloudflare", "Tailwind CSS", "Recharts"],
    metrics: [
      { label: "Throughput", value: "10k req/sec" },
      { label: "FPS", value: "60fps Locked" }
    ],
    overview: "Telemetry dashboard monitoring sub-second global cloud edge deployments with tactile zooming and kinetic sparkline graphs.",
    status: "Concept",
    featured: false,
    liveUrl: "https://dribbble.com"
  }
];

const CATEGORIES = ["All", "Full-Stack Web Application", "Cloud Media Platform & UI", "Developer Ecosystem & UI", "Design System"];

const PROJECT_IMAGES: Record<string, string> = {
  traction: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  "stellar-wallpapers": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  "future-devs": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  "sw-engine": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  "panthera-design-system": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  "aurora-dashboard": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
};

function WorkProjectTiltCard({
  item,
  imgSrc,
  detailHref,
}: {
  item: (typeof ALL_DESIGNS)[number];
  imgSrc: string;
  detailHref: string;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  // Normalized mouse coordinates: [-0.5, 0.5]
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Snappy responsive spring physics
  const springConfig = { stiffness: 320, damping: 22, mass: 0.5 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // Rotate up to 17 degrees for a dramatic, unmistakable 3D tactile tilt
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17deg", "-17deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17deg", "17deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[260px] sm:h-[360px] md:h-[400px] cursor-pointer group"
      style={{ perspective: "1000px" }}
    >
      <Link href={detailHref} className="block w-full h-full">
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full rounded-2xl sm:rounded-3xl border border-black/10 bg-[#0F1015] shadow-xl transition-shadow duration-300 group-hover:shadow-[0_28px_65px_rgba(0,0,0,0.45)]"
        >
          {/* Base Background Image Layer (No zoom on hover) */}
          <div
            className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden"
            style={{ transform: "translateZ(0px)" }}
          >
            <img
              src={imgSrc}
              alt={item.title}
              className="h-full w-full object-cover"
            />

            {/* Dark gradient overlay for typography readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
          </div>

          {/* Floating Card Info in Left Bottom (Popped 65px into 3D space) */}
          <div
            style={{
              transform: "translateZ(65px)",
              transformStyle: "preserve-3d",
            }}
            className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 pointer-events-none"
          >
            {item.category && (
              <div style={{ transform: "translateZ(18px)" }}>
                <span className="inline-block px-3 py-1 rounded-full bg-[#CCFF00] text-[#0F1015] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
                  {item.category}
                </span>
              </div>
            )}
            <h3
              style={{ transform: "translateZ(26px)" }}
              className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
            >
              {item.title}
            </h3>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}

export default function AllWorksPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? ALL_DESIGNS
    : ALL_DESIGNS.filter((d) => d.category.toLowerCase().includes(activeCategory.toLowerCase()) || d.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#0F1015]">
      <Masthead />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 w-full">
        {/* Page Header */}
        <div className="pb-8 sm:pb-10 border-b border-black/[0.08]">
          <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">
            Design Archive & Systems
          </span>
          <h1 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F1015]">
            All Shipped Designs
          </h1>
          <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-lg text-[#64748B] leading-relaxed">
            A comprehensive catalog of high-craft user interfaces, full-stack production systems, and tactile web applications engineered by panthr.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 sm:mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#0F1015] text-[#CCFF00] shadow-sm font-semibold"
                    : "bg-white border border-black/[0.08] text-[#64748B] hover:text-[#0F1015] hover:border-black/20"
                }`}
              >
                {cat === "All" ? "All Designs" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Designs Grid with 3D Perspective */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-8 sm:pt-12" style={{ perspective: "1000px" }}>
          {filtered.map((item) => {
            const imgSrc = PROJECT_IMAGES[item.slug] || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80";
            const detailHref = (item.slug.includes("panthera") || item.slug.includes("aurora"))
              ? (item.liveUrl || "#")
              : `/work/${item.slug}`;

            return (
              <WorkProjectTiltCard
                key={item.slug}
                item={item}
                imgSrc={imgSrc}
                detailHref={detailHref}
              />
            );
          })}
        </div>
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
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-[#0F1015] transition-colors">
              Dribbble
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-[#0F1015] transition-colors">
              X / Twitter
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#0F1015] transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
