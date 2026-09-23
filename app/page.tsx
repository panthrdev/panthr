"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Sparkles, Clock, ShieldCheck, Zap } from "lucide-react";
import Masthead from "@/components/Masthead";
import HeroSection from "@/components/HeroSection";
import { ImagesScrollingAnimation } from "@/components/ui/images-scrolling-animation";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F1015]">
      {/* Navigation */}
      <Masthead />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Editorial Brutalist Hero Section */}
        <HeroSection />

        {/* Lower Content Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full space-y-12 mt-4 sm:mt-8">
          {/* Work Section - Interactive Stacking Cards */}
          <section id="work" className="pt-8 sm:pt-10 pb-8 border-t border-black/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Featured Portfolio
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F1015] mt-1">
                  Selected Work
                </h2>
              </div>

              <Link
                href="/work"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-black/[0.08] shadow-xs hover:border-black/20 text-xs font-semibold uppercase tracking-wider text-[#0F1015] transition-all"
              >
                <span>View All Designs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Interactive Sticky Scrolling Stacking Animation */}
            <div className="w-full">
              <ImagesScrollingAnimation />
            </div>
          </section>

          {/* Testimonials Section - Staggered Kinetic Chamfered Carousel */}
          <section id="testimonials" className="pt-16 pb-12 border-t border-black/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Client Endorsements
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F1015] mt-1">
                  Trusted by Tech Leaders
                </h2>
              </div>
              <p className="text-sm text-[#64748B] max-w-sm">
                Obsessive craft and engineering velocity across seed-stage startups and enterprise platforms.
              </p>
            </div>

            <div className="w-full">
              <StaggerTestimonials />
            </div>
          </section>

        {/* Contact Section - Uneven Asymmetrical Architectural Card */}
        <section id="contact" className="py-16 sm:py-20 border-t border-black/[0.08]">
          <div className="p-6 sm:p-12 lg:p-14 rounded-tl-[36px] sm:rounded-tl-[64px] rounded-br-[36px] sm:rounded-br-[64px] rounded-tr-xl sm:rounded-tr-2xl rounded-bl-xl sm:rounded-bl-2xl bg-[#0F1015] text-white relative overflow-hidden shadow-2xl border border-white/[0.08]">
            {/* Asymmetrical Ambient Glow in bottom-right corner */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#CCFF00]/12 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/[0.03] rounded-full blur-2xl pointer-events-none" />

            {/* Asymmetrical Corner Tag in sharp top-right corner */}
            <div className="absolute top-5 right-6 sm:top-7 sm:right-8 hidden sm:flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-[10px] font-mono tracking-wider text-[#94A3B8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
              <span>BOOKINGS Q2/Q3</span>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (7 cols): Main Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-medium text-[#CCFF00]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                  <span className="font-mono text-[11px] uppercase tracking-wider">Let's collaborate</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                  Have a project in mind? Let's build something incredible.
                </h2>

                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl">
                  Available for full website design & development, high-end web applications, and UI/UX consulting.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#CCFF00] text-[#0F1015] font-extrabold text-sm hover:bg-[#b8e600] transition-all shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:shadow-[0_0_28px_rgba(204,255,0,0.6)] hover:scale-105 active:scale-95"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>
                  <a
                    href="mailto:hello@panthr.dev"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-white/[0.08] text-white hover:bg-white/[0.14] border border-white/10 font-medium text-sm transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>hello@panthr.dev</span>
                  </a>
                </div>
              </div>

              {/* Right Column (5 cols): Uneven Offset Studio Card */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xs space-y-4 lg:translate-y-2 lg:rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                      Studio Guarantees
                    </span>
                    <span className="text-[11px] font-mono text-[#CCFF00] flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      <span>Sprint Ready</span>
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-[#94A3B8] flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#CCFF00]" />
                        <span>Response Time</span>
                      </span>
                      <span className="font-semibold text-white font-mono">&lt; 24 Hours</span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <span className="text-[#94A3B8] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
                        <span>Turnaround</span>
                      </span>
                      <span className="font-semibold text-white font-mono">2–4 Weeks</span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <span className="text-[#94A3B8] flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#CCFF00]" />
                        <span>IP Ownership</span>
                      </span>
                      <span className="font-semibold text-white font-mono">100% Client</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08]">
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      We take on a limited number of projects simultaneously to guarantee obsessive attention to detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

      {/* Clean Footer */}
      <footer className="border-t border-black/[0.08] py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex items-center space-x-2 font-medium">
            <Image src="/logo.webp" alt="panthr logo" width={16} height={16} className="object-contain" />
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
            <a href="https://github.com/panthrdev" target="_blank" rel="noreferrer" className="hover:text-[#0F1015] transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
