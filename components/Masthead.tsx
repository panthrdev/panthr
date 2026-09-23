"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function PantherHeadLogo({ className = "w-7 h-7 sm:w-8 sm:h-8" }: { className?: string }) {
  return (
    <Image
      src="/logo.webp"
      alt="panthr logo"
      width={128}
      height={128}
      priority
      className={`object-contain shrink-0 ${className}`}
    />
  );
}

export default function Masthead() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Works", href: "/work" },
    { label: "Lab", href: "/lab" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
      mobileMenuOpen ? "bg-[#0F1015]" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand with Panther Head Logo */}
        <Link href="/" className="group flex items-center space-x-2 shrink-0">
          <PantherHeadLogo className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:scale-105" />
          <span className={`text-xl sm:text-2xl font-black tracking-tight transition-colors ${
            mobileMenuOpen ? "text-white" : "text-[#0F1015]"
          }`}>
            panthr
          </span>
        </Link>

        {/* Center Dark Capsule Navigation (Desktop only) */}
        <nav className="hidden md:flex items-center space-x-0.5 bg-[#18191E] p-1.5 rounded-full shadow-md border border-white/[0.06]">
          {navItems.map((item) => {
            const isActive = item.href === "/" 
              ? pathname === "/" 
              : pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 sm:px-5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#2D2E36] text-white shadow-xs font-semibold"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button (Desktop) & Mobile Trigger */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center space-x-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#CCFF00] text-[#0F1015] font-extrabold text-xs sm:text-sm tracking-tight shadow-[0_0_20px_rgba(204,255,0,0.5)] hover:shadow-[0_0_30px_rgba(204,255,0,0.8)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#18191E] text-white border border-white/[0.1] active:scale-95 transition-all shadow-sm"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Fullscreen Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-x-0 top-16 bottom-0 z-50 bg-[#0F1015] text-white flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto"
          >
            {/* Navigation Links */}
            <div className="space-y-6 pt-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B]">
                Navigation
              </span>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = item.href === "/" 
                    ? pathname === "/" 
                    : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl font-bold flex items-center justify-between py-2 border-b border-white/[0.08] transition-colors ${
                        isActive
                          ? "text-[#CCFF00]"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-full bg-[#CCFF00] text-[#0F1015] font-extrabold text-sm shadow-[0_0_24px_rgba(204,255,0,0.5)] active:scale-95 transition-all"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            </div>

            {/* Mobile Footer Info */}
            <div className="pt-8 border-t border-white/[0.08] space-y-4 text-xs">
              <div className="flex items-center justify-between text-[#94A3B8]">
                <span>Studio Contact</span>
                <a
                  href="mailto:hello@panthr.dev"
                  className="font-mono text-[#CCFF00] hover:underline flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>hello@panthr.dev</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-[#64748B] pt-2">
                <span>panthr.dev</span>
                <div className="flex items-center space-x-4">
                  <a href="https://dribbble.com/panthrDev" target="_blank" rel="noreferrer" className="hover:text-white">
                    Dribbble
                  </a>
                  <a href="https://x.com/panthrDev" target="_blank" rel="noreferrer" className="hover:text-white">
                    Twitter
                  </a>
                  <a href="https://github.com/panthrdev" target="_blank" rel="noreferrer" className="hover:text-white">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
