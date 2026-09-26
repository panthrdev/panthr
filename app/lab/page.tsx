"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  Terminal,
  Code2,
  BookOpen,
  Sun,
  Moon,
  CheckCircle2,
  ExternalLink,
  Layers,
} from "lucide-react";
import Masthead from "@/components/Masthead";
import { FluidTestimonialCardStack } from "@/components/ui/card-01";

const CARD_01_CODE: string = "/**\n * @component FluidTestimonialCardStack\n * @id card-01\n * @see https://panthr.dev/lab\n * Crafted with Framer Motion spring physics & Swiss typographic layout\n */\n\"use client\";\n\nimport React, { useState } from \"react\";\nimport Image from \"next/image\";\nimport { motion } from \"framer-motion\";\nimport { Star, Quote, CheckCircle2 } from \"lucide-react\";\n\nexport interface TestimonialAuthor {\n  name: string;\n  role: string;\n  company: string;\n  avatarUrl: string;\n  initials?: string;\n  handle?: string;\n}\n\nexport interface TestimonialItem {\n  id: string;\n  author: TestimonialAuthor;\n  highlight?: string;\n  quote: string;\n  rating?: number;\n  date?: string;\n}\n\nexport interface FluidTestimonialCardStackProps {\n  testimonials?: TestimonialItem[];\n  theme?: \"dark\" | \"light\";\n  className?: string;\n}\n\nconst DEFAULT_TESTIMONIALS: TestimonialItem[] = [\n  {\n    id: \"testimony-1\",\n    author: {\n      name: \"Elena Rostova\",\n      role: \"Head of Product Design\",\n      company: \"Raycast Ecosystems\",\n      avatarUrl: \"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=85\",\n      initials: \"ER\",\n      handle: \"@erostova\",\n    },\n    highlight: \"Redefined our kinetic micro-interactions.\",\n    quote:\n      \"The kinetic spring curves and layout transitions Panthr engineered transformed our software from feeling like an app to feeling like a calibrated physical instrument.\",\n    rating: 5,\n    date: \"NOV 2025\",\n  },\n  {\n    id: \"testimony-2\",\n    author: {\n      name: \"Marcus Vance\",\n      role: \"Co-Founder & CTO\",\n      company: \"HyperScale AI\",\n      avatarUrl: \"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=85\",\n      initials: \"MV\",\n      handle: \"@marcusv\",\n    },\n    highlight: \"Deterministic 120 FPS under extreme load.\",\n    quote:\n      \"Most design engineers write transitions that drop frames under real workloads. Panthr builds deterministic state machines that stay buttery smooth at 120Hz on every device.\",\n    rating: 5,\n    date: \"DEC 2025\",\n  },\n  {\n    id: \"testimony-3\",\n    author: {\n      name: \"Sarah Lin\",\n      role: \"Principal Motion Architect\",\n      company: \"Stripe Infrastructure\",\n      avatarUrl: \"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=85\",\n      initials: \"SL\",\n      handle: \"@sarahlin_ui\",\n    },\n    highlight: \"Uncompromising Swiss craft and engineering depth.\",\n    quote:\n      \"Finding engineers who understand both shader pipelines and rigorous Swiss typography is virtually impossible. Panthr is in a class of their own for modern web craft.\",\n    rating: 5,\n    date: \"JAN 2026\",\n  },\n];\n\nexport function FluidTestimonialCardStack({\n  testimonials = DEFAULT_TESTIMONIALS,\n  theme = \"light\",\n  className = \"\",\n}: FluidTestimonialCardStackProps) {\n  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);\n  const [isStackHovered, setIsStackHovered] = useState(false);\n\n  const isDark = theme === \"dark\";\n\n  // Explicit high-contrast palette tokens (immune to OS dark mode bleeding)\n  const c = isDark\n    ? {\n        cardBg: \"bg-[#111218] border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:border-white/20\",\n        nameText: \"text-white\",\n        roleText: \"text-zinc-400\",\n        quoteText: \"text-zinc-100\",\n        quoteIcon: \"text-zinc-600\",\n        orgName: \"text-zinc-200\",\n        footerText: \"text-zinc-400\",\n      }\n    : {\n        cardBg: \"bg-white border-[#E2E4E9] shadow-[0_16px_36px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.03),inset_0_1px_0_0_rgba(255,255,255,0.9)] hover:border-[#CBD5E1]\",\n        nameText: \"text-[#0F1015]\",\n        roleText: \"text-[#475467]\",\n        quoteText: \"text-[#101828]\",\n        quoteIcon: \"text-[#98A2B3]\",\n        orgName: \"text-[#1D2939]\",\n        footerText: \"text-[#475467]\",\n      };\n\n  return (\n    <div className={`relative w-full h-full flex flex-col items-center justify-center p-6 select-none ${className}`}>\n      {/* 3-Card Stack with Generous Fan-Out Spacing */}\n      <div\n        className=\"relative w-full max-w-[1020px] h-[430px] flex items-center justify-center\"\n        onMouseEnter={() => setIsStackHovered(true)}\n        onMouseLeave={() => {\n          setIsStackHovered(false);\n          setHoveredCardId(null);\n        }}\n      >\n        {testimonials.map((card, idx) => {\n          const isHovered = hoveredCardId === card.id;\n          const offset = idx - 1;\n\n          let targetX = offset * 185;\n          let targetY = Math.abs(offset) * 8;\n          let targetRotate = offset * 3.5;\n          let zIndex = idx === 1 ? 20 : 10;\n\n          if (isStackHovered) {\n            targetX = offset * 320;\n            targetY = Math.abs(offset) * 2;\n            targetRotate = offset * 1.5;\n          }\n\n          if (isHovered) {\n            targetY -= 20;\n            targetRotate = 0;\n            zIndex = 50;\n          }\n\n          return (\n            <motion.div\n              key={card.id}\n              onMouseEnter={() => setHoveredCardId(card.id)}\n              onMouseLeave={() => setHoveredCardId(null)}\n              animate={{\n                x: targetX,\n                y: targetY,\n                rotate: targetRotate,\n                scale: isHovered ? 1.03 : 1,\n              }}\n              transition={{\n                type: \"spring\",\n                stiffness: 300,\n                damping: 27,\n              }}\n              className={`absolute w-[295px] sm:w-[325px] rounded-2xl border transition-shadow duration-300 overflow-hidden ${c.cardBg}`}\n              style={{ zIndex }}\n            >\n              {/* Top Header: Flush Corner Portrait + Author Metadata */}\n              <div className=\"relative min-h-[96px] flex items-stretch\">\n                <div className=\"relative w-[96px] h-[96px] shrink-0 rounded-br-2xl overflow-hidden\">\n                  <Image\n                    src={card.author.avatarUrl}\n                    alt={card.author.name}\n                    fill\n                    sizes=\"96px\"\n                    className=\"object-cover\"\n                  />\n                </div>\n\n                <div className=\"flex-1 p-3.5 pl-4 flex flex-col justify-center space-y-1\">\n                  {card.rating && (\n                    <div className=\"flex items-center space-x-0.5 text-amber-500 mb-0.5\">\n                      {[...Array(card.rating)].map((_, i) => (\n                        <Star key={i} className=\"w-3 h-3 fill-current\" />\n                      ))}\n                    </div>\n                  )}\n\n                  <span className={`font-bold text-[13px] leading-snug block ${c.nameText}`}>\n                    {card.author.name}\n                  </span>\n                  <span className={`text-[10px] font-mono leading-tight block ${c.roleText}`}>\n                    {card.author.role}\n                  </span>\n                  <span className={`text-[10px] font-bold block ${c.orgName}`}>\n                    {card.author.company}\n                  </span>\n                </div>\n              </div>\n\n              {/* Card Body: Quote & Clean Footer */}\n              <div className=\"p-4 sm:p-5 pt-3.5 space-y-3.5\">\n                <div className=\"space-y-1.5\">\n                  <Quote className={`w-3.5 h-3.5 ${c.quoteIcon}`} />\n                  <p className={`text-xs sm:text-[13px] font-medium leading-relaxed tracking-tight ${c.quoteText}`}>\n                    &ldquo;{card.quote}&rdquo;\n                  </p>\n                </div>\n\n                <div className=\"pt-2 flex items-center justify-between\">\n                  <div className={`flex items-center space-x-1.5 font-mono text-[10px] ${c.footerText}`}>\n                    <CheckCircle2 className=\"w-3 h-3 text-emerald-600 dark:text-emerald-500\" />\n                    <span className=\"font-semibold\">VERIFIED PARTNER</span>\n                  </div>\n\n                  {card.date && (\n                    <span className={`font-mono text-[10px] font-medium tracking-wider ${c.footerText}`}>\n                      {card.date}\n                    </span>\n                  )}\n                </div>\n              </div>\n            </motion.div>\n          );\n        })}\n      </div>\n    </div>\n  );\n}\n\nexport default FluidTestimonialCardStack;\n";

const CARD_01_PROMPT: string = "Create a fluid editorial Testimonial Card Stack in React with Framer Motion (Component ID: card-01) inspired by Linear and Stripe.\n\nLayout & Stacking Architecture:\n- 3-card layered fan stack with generous spacing:\n  - Resting state: center-to-center offset of 185px (left card x: -185, rotate: -3.5\u00b0; center x: 0; right card x: +185, rotate: +3.5\u00b0).\n  - Hovering stack: cards smoothly fan out laterally to 320px offset (stiffness: 300, damping: 27), presenting all 3 cards clearly side-by-side with zero occlusion.\n  - Hovering individual card: floats up slightly (y: -20px) to top z-index with physical spring damping.\n  - Non-modal: cards stay cleanly in the fluid stack without opening popups or modal sheets on click.\n- Signature Corner Avatar PFP:\n  - Portrait photo sits flush covering the top-left corner of the card (w-[96px] h-[96px]).\n  - Crucial: The photo's bottom-right corner must be prominently curved (rounded-br-2xl) and blend seamlessly into the card without borders.\n- Author Info Header (to the right of the corner photo):\n  - 5-star micro-rating in amber.\n  - Author name (font-bold text-[13px]).\n  - Role (text-[10px] font-mono) and Company name.\n- Body:\n  - Elegant quotation text with quotation icon.\n  - Clean bottom bar: \"VERIFIED PARTNER\" badge with emerald checkmark on the left, date timestamp on the right. Zero arrows, zero icons in the bottom right corner.\n  - Clean boundaryless interior: zero horizontal divider lines (no borders under header or above footer), zero pill badges, zero inner metric boxes.\n- Themes: Explicit Light & Dark mode support with high-contrast text (#0F1015 on white, #FFFFFF on obsidian).\n\nReference architecture and live interaction specs: https://panthr.dev/lab (Component ID: card-01)";

const CARD_01_MARKDOWN: string = "*Fluid Testimonial Card Stack (card-01) crafted with [panthr.dev](https://panthr.dev/lab)*";

export default function LabPage() {
  const [activeTheme, setActiveTheme] = useState<"light" | "dark">("light");
  const [activeTab, setActiveTab] = useState<"preview" | "code" | "prompt" | "specs">("preview");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#0F1015]">
      <Masthead />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-14 w-full">
        {/* Lab Header */}
        <div className="pb-8 sm:pb-12 border-b border-black/[0.08]">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-wider text-[#64748B] uppercase mb-3">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>panthr.dev / lab</span>
            <span>•</span>
            <span className="text-[#0F1015] font-semibold">Production Components</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F1015]">
            UI Mechanics & Component Lab
          </h1>
          <p className="mt-3 sm:mt-4 max-w-3xl text-sm sm:text-lg text-[#64748B] leading-relaxed">
            A curated laboratory of design-engineered, production-ready React components crafted with Framer Motion spring physics, Swiss typography, and tactile micro-interactions.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.06] text-[#0F1015] font-medium">
              1 Curated Component
            </span>
            <span className="px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.06] text-[#64748B]">
              TypeScript + Tailwind CSS
            </span>
            <span className="px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.06] text-[#64748B]">
              Framer Motion Spring Physics
            </span>
            <span className="px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.06] text-[#64748B]">
              Zero External CSS
            </span>
          </div>
        </div>

        {/* Featured Component: card-01 */}
        <article className="py-10 sm:py-14" id="card-01">
          {/* Component Meta Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded-md bg-[#0F1015] text-[#CCFF00] font-mono text-xs font-bold tracking-tight">
                  card-01
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#64748B]">
                  Cards & Containers
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F1015]">
                Fluid Testimonial Card Stack
              </h2>
              <p className="text-sm text-[#64748B] max-w-2xl leading-relaxed">
                Layered social proof & testimonial cards that smoothly fan out on hover with physical spring damping, featuring flush corner portrait photography, verified partner metadata, and high-craft typography.
              </p>
            </div>

            {/* Quick Actions & Controls */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Theme Preview Switcher */}
              <div className="flex items-center p-1 rounded-xl bg-black/[0.05] border border-black/[0.06]">
                <button
                  onClick={() => setActiveTheme("light")}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTheme === "light"
                      ? "bg-white text-[#0F1015] shadow-xs"
                      : "text-[#64748B] hover:text-[#0F1015]"
                  }`}
                  title="Preview in Light Theme"
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Light</span>
                </button>
                <button
                  onClick={() => setActiveTheme("dark")}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTheme === "dark"
                      ? "bg-[#0F1015] text-white shadow-xs"
                      : "text-[#64748B] hover:text-[#0F1015]"
                  }`}
                  title="Preview in Dark Theme"
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Dark</span>
                </button>
              </div>

              {/* Copy Code Primary CTA */}
              <button
                onClick={() => copyToClipboard("primary-code", CARD_01_CODE)}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#0F1015] text-white hover:bg-black font-semibold text-xs transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                {copiedKey === "primary-code" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#CCFF00]" />
                    <span className="text-[#CCFF00]">Copied Code!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Component Stage */}
          <div className="rounded-3xl border border-black/[0.08] overflow-hidden bg-white shadow-xs">
            {/* View Tabs Bar */}
            <div className="px-4 sm:px-6 py-3 border-b border-black/[0.06] bg-[#FAFAFA] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button
                  onClick={() => setActiveTab("preview")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeTab === "preview"
                      ? "bg-white text-[#0F1015] shadow-xs font-bold border border-black/[0.06]"
                      : "text-[#64748B] hover:text-[#0F1015]"
                  }`}
                >
                  Interactive Preview
                </button>
                <button
                  onClick={() => setActiveTab("code")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeTab === "code"
                      ? "bg-white text-[#0F1015] shadow-xs font-bold border border-black/[0.06]"
                      : "text-[#64748B] hover:text-[#0F1015]"
                  }`}
                >
                  Component Code
                </button>
                <button
                  onClick={() => setActiveTab("prompt")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeTab === "prompt"
                      ? "bg-white text-[#0F1015] shadow-xs font-bold border border-black/[0.06]"
                      : "text-[#64748B] hover:text-[#0F1015]"
                  }`}
                >
                  AI Prompt Blueprint
                </button>
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeTab === "specs"
                      ? "bg-white text-[#0F1015] shadow-xs font-bold border border-black/[0.06]"
                      : "text-[#64748B] hover:text-[#0F1015]"
                  }`}
                >
                  API & Props
                </button>
              </div>

              {/* Attribution / GitHub link */}
              <div className="flex items-center space-x-3 text-xs font-mono text-[#64748B]">
                <a
                  href="https://github.com/panthrdev/panthr/blob/main/components/ui/card-01.tsx"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1 hover:text-[#0F1015] transition-colors"
                >
                  <span>GitHub Source</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Tab 1: Live Interactive Preview */}
            {activeTab === "preview" && (
              <div>
                <div
                  className={`relative w-full min-h-[500px] flex items-center justify-center transition-colors duration-300 overflow-hidden ${
                    activeTheme === "dark"
                      ? "bg-[#0B0C10] bg-[radial-gradient(#1f222e_1px,transparent_1px)] [background-size:24px_24px]"
                      : "bg-[#F3F4F6] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]"
                  }`}
                >
                  {/* Brand subtle watermark */}
                  <div className="absolute bottom-4 right-5 text-[11px] font-mono tracking-widest uppercase opacity-35 select-none pointer-events-none text-current">
                    panthr.dev / card-01
                  </div>

                  {/* Micro Hint */}
                  <div className="absolute top-4 left-5 text-[11px] font-mono tracking-wider opacity-60 select-none pointer-events-none text-current">
                    Hover stack to fan out • Hover individual card to float
                  </div>

                  {/* Standalone Interactive Component */}
                  <div className="w-full py-12">
                    <FluidTestimonialCardStack theme={activeTheme} />
                  </div>
                </div>

                {/* Sub-bar with secondary action buttons */}
                <div className="p-4 sm:p-5 bg-white border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center space-x-2 text-[#64748B] font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-[#0F1015]" />
                    <span>Drop-in ready • Copy code or prompt below</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard("prompt-btn", CARD_01_PROMPT)}
                      className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-black/[0.1] hover:border-black/[0.25] text-[#0F1015] font-medium transition-all cursor-pointer"
                    >
                      {copiedKey === "prompt-btn" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied Prompt!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#64748B]" />
                          <span>Copy AI Prompt</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => copyToClipboard("credit-btn", CARD_01_MARKDOWN)}
                      className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-black/[0.1] hover:border-black/[0.25] text-[#0F1015] font-medium transition-all cursor-pointer"
                    >
                      {copiedKey === "credit-btn" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied Markdown!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#64748B]" />
                          <span>Copy README Credit</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Code Viewer */}
            {activeTab === "code" && (
              <div className="bg-[#0D1117] text-zinc-100 p-4 sm:p-6 text-xs font-mono relative">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
                  <div className="flex items-center space-x-2 text-zinc-400">
                    <Code2 className="w-4 h-4 text-emerald-400" />
                    <span>components/ui/card-01.tsx</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard("code-tab", CARD_01_CODE)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs transition-all cursor-pointer"
                  >
                    {copiedKey === "code-tab" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#CCFF00]" />
                        <span className="text-[#CCFF00]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy File</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="max-h-[550px] overflow-auto leading-relaxed text-zinc-300 font-mono scrollbar-thin">
                  <code>{CARD_01_CODE}</code>
                </pre>
              </div>
            )}

            {/* Tab 3: AI Blueprint Prompt */}
            {activeTab === "prompt" && (
              <div className="bg-white p-5 sm:p-7 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                  <div>
                    <h3 className="font-bold text-sm text-[#0F1015]">
                      Architectural AI Generation Blueprint
                    </h3>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Paste this prescriptive prompt into Claude, Gemini, or ChatGPT to generate this exact component architecture.
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard("prompt-tab", CARD_01_PROMPT)}
                    className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-[#0F1015] hover:bg-black text-white font-medium text-xs transition-all shadow-xs shrink-0 cursor-pointer"
                  >
                    {copiedKey === "prompt-tab" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#CCFF00]" />
                        <span className="text-[#CCFF00]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Blueprint</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-[#F8F9FA] rounded-2xl border border-black/[0.06] p-4 sm:p-5">
                  <pre className="text-xs font-mono text-[#0F1015] leading-relaxed whitespace-pre-wrap">
                    {CARD_01_PROMPT}
                  </pre>
                </div>
              </div>
            )}

            {/* Tab 4: API & Props Reference */}
            {activeTab === "specs" && (
              <div className="bg-white p-5 sm:p-7 space-y-6">
                <div>
                  <h3 className="font-bold text-base text-[#0F1015]">
                    Installation & Dependencies
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1">
                    Requires Framer Motion for spring physics and Lucide React for UI icons.
                  </p>

                  <div className="mt-3 flex items-center justify-between p-3.5 bg-[#0F1015] text-[#CCFF00] rounded-xl font-mono text-xs">
                    <code>pnpm add framer-motion lucide-react</code>
                    <button
                      onClick={() => copyToClipboard("install-pkg", "pnpm add framer-motion lucide-react")}
                      className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      title="Copy install command"
                    >
                      {copiedKey === "install-pkg" ? (
                        <Check className="w-4 h-4 text-[#CCFF00]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-base text-[#0F1015] mb-3">
                    Props Reference
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-black/[0.08]">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-[#F8F9FA] border-b border-black/[0.08] text-[#64748B]">
                        <tr>
                          <th className="p-3">Prop</th>
                          <th className="p-3">Type</th>
                          <th className="p-3">Default</th>
                          <th className="p-3">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/[0.06] text-[#0F1015]">
                        <tr>
                          <td className="p-3 font-bold text-emerald-600">testimonials</td>
                          <td className="p-3 text-[#64748B]">TestimonialItem[]</td>
                          <td className="p-3">DEFAULT_TESTIMONIALS</td>
                          <td className="p-3 font-sans">Array of 3 testimonial objects with author metadata and quotes.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-emerald-600">theme</td>
                          <td className="p-3 text-[#64748B]">&quot;light&quot; | &quot;dark&quot;</td>
                          <td className="p-3">&quot;light&quot;</td>
                          <td className="p-3 font-sans">Explicit color scheme palette token set.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-emerald-600">className</td>
                          <td className="p-3 text-[#64748B]">string</td>
                          <td className="p-3">&quot;&quot;</td>
                          <td className="p-3 font-sans">Custom Tailwind utility class overrides.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-base text-[#0F1015] mb-2">
                    Open Source Markdown Attribution
                  </h3>
                  <p className="text-xs text-[#64748B] mb-3">
                    Include this snippet in your project&apos;s README when utilizing this component:
                  </p>
                  <div className="flex items-center justify-between p-3.5 bg-[#F8F9FA] rounded-xl border border-black/[0.06] text-xs font-mono">
                    <span className="text-[#0F1015]">{CARD_01_MARKDOWN}</span>
                    <button
                      onClick={() => copyToClipboard("spec-credit", CARD_01_MARKDOWN)}
                      className="text-[#64748B] hover:text-[#0F1015] transition-colors cursor-pointer"
                    >
                      {copiedKey === "spec-credit" ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>
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
            <a
              href="https://dribbble.com/panthrDev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0F1015] transition-colors"
            >
              Dribbble
            </a>
            <a
              href="https://x.com/panthrDev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0F1015] transition-colors"
            >
              X / Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/panthr/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0F1015] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/panthrdev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0F1015] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
