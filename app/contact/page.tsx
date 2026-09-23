"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Copy, Mail, Send, Sparkles, Clock, ShieldCheck } from "lucide-react";
import Masthead from "@/components/Masthead";

const SERVICES = [
  "Full-Stack Web App",
  "UI/UX & Design System",
  "High-Craft Landing Page",
  "Architecture Consulting",
];

const BUDGETS = [
  "< $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000+",
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>(["Full-Stack Web App"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("$5,000 – $15,000");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@panthr.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F1015] font-sans flex flex-col selection:bg-[#CCFF00] selection:text-[#0F1015] relative overflow-x-hidden">
      {/* Top Right Panther Graphic - Aligned to top of page */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 pointer-events-none select-none z-10 w-[300px] sm:w-[460px] md:w-[580px] lg:w-[720px] xl:w-[840px] 2xl:w-[960px] max-sm:opacity-25 transition-all duration-300"
      >
        <Image
          src="/contact-panther.webp"
          alt="Panther Stalking"
          width={1451}
          height={1084}
          priority
          className="w-full h-auto object-contain object-top"
        />
      </div>

      <Masthead />

      <main className="relative z-20 flex-1 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <div className="max-w-2xl mb-10 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F1015] leading-[1.08]">
              Let's build something extraordinary.
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-[#64748B] leading-relaxed">
              Have an ambitious vision, need custom design systems, or want to build a high-performance web product? Let's discuss your timeline and technical requirements.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Direct Channels & Information (5 cols) */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              {/* Obsidian Status Card */}
              <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#0F1015] text-white relative overflow-hidden shadow-xl border border-white/[0.08]">
                <div className="relative z-10 space-y-4 sm:space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                      Studio Status
                    </span>
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] text-[11px] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
                      <span>Available Q2/Q3</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Open for selective contracts & partnerships
                    </h3>
                    <p className="mt-1.5 text-xs text-[#94A3B8] leading-relaxed">
                      We focus on a few select products at a time to ensure obsessive craft, swift delivery, and uncompromising quality.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] text-xs">
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-wider text-[#64748B]">
                        Response Time
                      </div>
                      <div className="mt-1 font-semibold text-white flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#CCFF00]" />
                        <span>&lt; 24 Hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Email & Fast Copy Card */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-black/[0.08] shadow-xs space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Direct Inquiries
                </span>
                
                <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#F8F9FA] border border-black/[0.06]">
                  <div className="flex items-center space-x-2.5 truncate">
                    <Mail className="w-4 h-4 text-[#0F1015] shrink-0" />
                    <span className="text-xs sm:text-sm font-mono font-medium text-[#0F1015] truncate">
                      hello@panthr.dev
                    </span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 px-3 py-1.5 rounded-xl bg-white border border-black/[0.08] hover:border-black/20 text-xs font-semibold text-[#0F1015] transition-all flex items-center space-x-1.5 shadow-2xs"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#64748B]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs text-[#64748B] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0F1015] shrink-0" />
                  <span>NDAs respected. All code ownership transferred to client.</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-black/[0.08] shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block mb-3">
                  Online Presence
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8F9FA] hover:bg-black/[0.04] text-[#0F1015] font-medium transition-colors"
                  >
                    <span>X (Twitter)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
                  </a>
                  <a
                    href="https://github.com/panthrdev"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8F9FA] hover:bg-black/[0.04] text-[#0F1015] font-medium transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
                  </a>
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8F9FA] hover:bg-black/[0.04] text-[#0F1015] font-medium transition-colors"
                  >
                    <span>Dribbble</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8F9FA] hover:bg-black/[0.04] text-[#0F1015] font-medium transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-black/[0.08] shadow-sm relative">
                {submitted ? (
                  <div className="py-16 text-center space-y-5">
                    <div className="w-16 h-16 rounded-full bg-[#CCFF00] mx-auto flex items-center justify-center shadow-[0_0_24px_rgba(204,255,0,0.6)]">
                      <Check className="w-8 h-8 text-[#0F1015] stroke-[2.5]" />
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1015] tracking-tight">
                        Inquiry Received!
                      </h2>
                      <p className="text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out, <span className="font-semibold text-[#0F1015]">{formData.name || "friend"}</span>. We've recorded your project details and will follow up at <span className="font-semibold text-[#0F1015]">{formData.email}</span> within 24 business hours.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", email: "", company: "", message: "" });
                        }}
                        className="px-6 py-2.5 rounded-full bg-[#0F1015] text-white text-xs font-semibold hover:bg-black/80 transition-all"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Services Selector */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
                        What can we help you build?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES.map((service) => {
                          const isSelected = selectedServices.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                                isSelected
                                  ? "bg-[#0F1015] text-white shadow-xs font-semibold"
                                  : "bg-[#F8F9FA] text-[#64748B] hover:text-[#0F1015] border border-black/[0.06]"
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                      {/* Budget Selector */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
                        Estimated Budget
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {BUDGETS.map((budget) => {
                          const isSelected = selectedBudget === budget;
                          return (
                            <button
                              key={budget}
                              type="button"
                              onClick={() => setSelectedBudget(budget)}
                              className={`py-2 px-2 sm:px-3 rounded-xl text-[11px] sm:text-xs font-medium transition-all text-center ${
                                isSelected
                                  ? "bg-[#CCFF00] text-[#0F1015] font-bold shadow-xs border border-transparent"
                                  : "bg-[#F8F9FA] text-[#64748B] hover:text-[#0F1015] border border-black/[0.06]"
                              }`}
                            >
                              {budget}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Morgan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-[#F8F9FA] border border-black/[0.08] focus:border-[#0F1015] focus:bg-white rounded-xl text-xs text-[#0F1015] outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-[#F8F9FA] border border-black/[0.08] focus:border-[#0F1015] focus:bg-white rounded-xl text-xs text-[#0F1015] outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                        Company or Project Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Stripe, Acme Corp, or Stealth Startup"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8F9FA] border border-black/[0.08] focus:border-[#0F1015] focus:bg-white rounded-xl text-xs text-[#0F1015] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                        Project Overview & Goals *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about the project, target timeline, any existing designs or stack requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8F9FA] border border-black/[0.08] focus:border-[#0F1015] focus:bg-white rounded-xl text-xs text-[#0F1015] outline-none transition-all resize-none leading-relaxed"
                      />
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-full bg-[#CCFF00] text-[#0F1015] font-bold text-xs sm:text-sm tracking-tight shadow-[0_4px_20px_rgba(204,255,0,0.55)] hover:shadow-[0_6px_28px_rgba(204,255,0,0.75)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        <span>Send Project Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                      <p className="mt-3 text-center text-[11px] text-[#94A3B8]">
                        We treat all client details with strict confidentiality.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
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
            <a href="https://github.com/panthrdev" target="_blank" rel="noreferrer" className="hover:text-[#0F1015] transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
