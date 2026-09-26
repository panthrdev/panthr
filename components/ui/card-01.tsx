/**
 * @component FluidTestimonialCardStack
 * @id card-01
 * @see https://panthr.dev/lab
 * Crafted with Framer Motion spring physics & Swiss typographic layout
 */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export interface TestimonialAuthor {
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  initials?: string;
  handle?: string;
}

export interface TestimonialItem {
  id: string;
  author: TestimonialAuthor;
  highlight?: string;
  quote: string;
  rating?: number;
  date?: string;
}

export interface FluidTestimonialCardStackProps {
  testimonials?: TestimonialItem[];
  theme?: "dark" | "light";
  className?: string;
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testimony-1",
    author: {
      name: "Elena Rostova",
      role: "Head of Product Design",
      company: "Raycast Ecosystems",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=85",
      initials: "ER",
      handle: "@erostova",
    },
    highlight: "Redefined our kinetic micro-interactions.",
    quote:
      "The kinetic spring curves and layout transitions Panthr engineered transformed our software from feeling like an app to feeling like a calibrated physical instrument.",
    rating: 5,
    date: "NOV 2025",
  },
  {
    id: "testimony-2",
    author: {
      name: "Marcus Vance",
      role: "Co-Founder & CTO",
      company: "HyperScale AI",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=85",
      initials: "MV",
      handle: "@marcusv",
    },
    highlight: "Deterministic 120 FPS under extreme load.",
    quote:
      "Most design engineers write transitions that drop frames under real workloads. Panthr builds deterministic state machines that stay buttery smooth at 120Hz on every device.",
    rating: 5,
    date: "DEC 2025",
  },
  {
    id: "testimony-3",
    author: {
      name: "Sarah Lin",
      role: "Principal Motion Architect",
      company: "Stripe Infrastructure",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=85",
      initials: "SL",
      handle: "@sarahlin_ui",
    },
    highlight: "Uncompromising Swiss craft and engineering depth.",
    quote:
      "Finding engineers who understand both shader pipelines and rigorous Swiss typography is virtually impossible. Panthr is in a class of their own for modern web craft.",
    rating: 5,
    date: "JAN 2026",
  },
];

export function FluidTestimonialCardStack({
  testimonials = DEFAULT_TESTIMONIALS,
  theme = "light",
  className = "",
}: FluidTestimonialCardStackProps) {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [isStackHovered, setIsStackHovered] = useState(false);

  const isDark = theme === "dark";

  // Explicit high-contrast palette tokens (immune to OS dark mode bleeding)
  const c = isDark
    ? {
        cardBg: "bg-[#111218] border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:border-white/20",
        nameText: "text-white",
        roleText: "text-zinc-400",
        quoteText: "text-zinc-100",
        quoteIcon: "text-zinc-600",
        orgName: "text-zinc-200",
        footerText: "text-zinc-400",
      }
    : {
        cardBg: "bg-white border-[#E2E4E9] shadow-[0_16px_36px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.03),inset_0_1px_0_0_rgba(255,255,255,0.9)] hover:border-[#CBD5E1]",
        nameText: "text-[#0F1015]",
        roleText: "text-[#475467]",
        quoteText: "text-[#101828]",
        quoteIcon: "text-[#98A2B3]",
        orgName: "text-[#1D2939]",
        footerText: "text-[#475467]",
      };

  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center p-6 select-none ${className}`}>
      {/* 3-Card Stack with Generous Fan-Out Spacing */}
      <div
        className="relative w-full max-w-[1020px] h-[430px] flex items-center justify-center"
        onMouseEnter={() => setIsStackHovered(true)}
        onMouseLeave={() => {
          setIsStackHovered(false);
          setHoveredCardId(null);
        }}
      >
        {testimonials.map((card, idx) => {
          const isHovered = hoveredCardId === card.id;
          const offset = idx - 1;

          let targetX = offset * 185;
          let targetY = Math.abs(offset) * 8;
          let targetRotate = offset * 3.5;
          let zIndex = idx === 1 ? 20 : 10;

          if (isStackHovered) {
            targetX = offset * 320;
            targetY = Math.abs(offset) * 2;
            targetRotate = offset * 1.5;
          }

          if (isHovered) {
            targetY -= 20;
            targetRotate = 0;
            zIndex = 50;
          }

          return (
            <motion.div
              key={card.id}
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              animate={{
                x: targetX,
                y: targetY,
                rotate: targetRotate,
                scale: isHovered ? 1.03 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 27,
              }}
              className={`absolute w-[295px] sm:w-[325px] rounded-2xl border transition-shadow duration-300 overflow-hidden ${c.cardBg}`}
              style={{ zIndex }}
            >
              {/* Top Header: Flush Corner Portrait + Author Metadata */}
              <div className="relative min-h-[96px] flex items-stretch">
                <div className="relative w-[96px] h-[96px] shrink-0 rounded-br-2xl overflow-hidden">
                  <Image
                    src={card.author.avatarUrl}
                    alt={card.author.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 p-3.5 pl-4 flex flex-col justify-center space-y-1">
                  {card.rating && (
                    <div className="flex items-center space-x-0.5 text-amber-500 mb-0.5">
                      {[...Array(card.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  )}

                  <span className={`font-bold text-[13px] leading-snug block ${c.nameText}`}>
                    {card.author.name}
                  </span>
                  <span className={`text-[10px] font-mono leading-tight block ${c.roleText}`}>
                    {card.author.role}
                  </span>
                  <span className={`text-[10px] font-bold block ${c.orgName}`}>
                    {card.author.company}
                  </span>
                </div>
              </div>

              {/* Card Body: Quote & Clean Footer */}
              <div className="p-4 sm:p-5 pt-3.5 space-y-3.5">
                <div className="space-y-1.5">
                  <Quote className={`w-3.5 h-3.5 ${c.quoteIcon}`} />
                  <p className={`text-xs sm:text-[13px] font-medium leading-relaxed tracking-tight ${c.quoteText}`}>
                    &ldquo;{card.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className={`flex items-center space-x-1.5 font-mono text-[10px] ${c.footerText}`}>
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-500" />
                    <span className="font-semibold">VERIFIED PARTNER</span>
                  </div>

                  {card.date && (
                    <span className={`font-mono text-[10px] font-medium tracking-wider ${c.footerText}`}>
                      {card.date}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default FluidTestimonialCardStack;
