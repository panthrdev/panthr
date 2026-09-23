"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function StudioFooter() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#F6F6F8] border-t border-[rgba(10,10,12,0.06)] py-16 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[rgba(10,10,12,0.06)]">
          {/* Studio Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-2 text-sm font-semibold text-[#0A0A0C]">
              <Image src="/logo.webp" alt="panthr logo" width={20} height={20} className="object-contain" />
              <span>PANTHR</span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--iris)", boxShadow: "0 0 6px var(--iris-glow)" }}
              />
            </div>
            <p className="mt-3 text-xs text-[#52525B] max-w-sm font-sans leading-relaxed">
              An independent design-engineering studio. Obsessive UI/UX craftsmanship combined with rapid full-stack software development.
            </p>
            <div className="mt-4 text-[11px] text-[#737380]">
              Studio Time: {time || "20:30:00"} (UTC+05:30)
            </div>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-wider text-[#737380] mb-3">
              Distribution Channels
            </div>
            <ul className="space-y-2 text-[#0A0A0C]">
              <li>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1 hover:text-[#737380] transition-colors"
                >
                  <span>Dribbble Shots</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1 hover:text-[#737380] transition-colors"
                >
                  <span>X / Twitter</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/panthrdev"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1 hover:text-[#737380] transition-colors"
                >
                  <span>GitHub Repositories</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1 hover:text-[#737380] transition-colors"
                >
                  <span>LinkedIn Professional</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Directory */}
          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-wider text-[#737380] mb-3">
              Index
            </div>
            <ul className="space-y-2 text-[#0A0A0C]">
              <li>
                <a href="#work" className="hover:text-[#737380] transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <Link href="/lab" className="hover:text-[#737380] transition-colors">
                  Tactile Lab
                </Link>
              </li>
              <li>
                <a href="#index" className="hover:text-[#737380] transition-colors">
                  Full Registry
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#737380] transition-colors">
                  Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Engagement */}
          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-wider text-[#737380] mb-3">
              Direct Contact
            </div>
            <p className="text-xs text-[#52525B] font-sans">
              Currently accepting select contracts and founding product engineering engagements for Q4.
            </p>
            <a
              href="mailto:inquiries@panthr.dev"
              className="mt-3 inline-block font-mono text-xs text-[#0A0A0C] font-semibold underline underline-offset-4"
            >
              inquiries@panthr.dev
            </a>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[#737380] text-[11px]">
          <div>
            © 2026 PANTHR (`panthr.dev`). Engineered with Next.js & bespoke tokens.
          </div>
          <div className="flex items-center space-x-4">
            <span>No generic AI templates</span>
            <span>•</span>
            <span>Pure human craft</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
