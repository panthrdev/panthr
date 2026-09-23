"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Copy, Check } from "lucide-react";

interface TerminalLine {
  id: string;
  type: "input" | "output" | "system";
  content: React.ReactNode;
}

export default function PanthrTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: "line-welcome",
      type: "system",
      content: (
        <div className="space-y-1">
          <div className="text-[#CCFF00] font-bold">
            PANTHR Studio Terminal [Environment: Production Node 22 / Turbopack]
          </div>
          <div className="text-[#71717A] text-xs">
            Type <span className="text-white font-mono font-semibold">"help"</span> to view studio operations, or tap the quick commands below.
          </div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmdText: string) => {
    const rawCmd = cmdText.trim().toLowerCase();
    if (!rawCmd) return;

    const newLines: TerminalLine[] = [
      {
        id: `input-${Date.now()}`,
        type: "input",
        content: `guest@panthr:~$ ${cmdText}`,
      },
    ];

    switch (rawCmd) {
      case "help":
        newLines.push({
          id: `out-${Date.now()}`,
          type: "output",
          content: (
            <div className="space-y-1.5 text-xs text-[#94A3B8]">
              <div className="text-white font-semibold mb-1">Available Operations:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 font-mono">
                <div><span className="text-[#CCFF00] font-bold">about</span> - Studio philosophy & background</div>
                <div><span className="text-[#CCFF00] font-bold">stack</span> - Active engineering & design stack</div>
                <div><span className="text-[#CCFF00] font-bold">projects</span> - Shipped production case studies</div>
                <div><span className="text-[#CCFF00] font-bold">contact</span> - Direct correspondence & inquiries</div>
                <div><span className="text-[#CCFF00] font-bold">whoami</span> - Inspect your session permissions</div>
                <div><span className="text-[#CCFF00] font-bold">clear</span> - Reset terminal screen buffer</div>
              </div>
            </div>
          ),
        });
        break;

      case "about":
        newLines.push({
          id: `out-${Date.now()}`,
          type: "output",
          content: (
            <div className="space-y-1.5 text-xs text-[#94A3B8] leading-relaxed">
              <div className="text-white font-bold">Philosophy: High-Craft Full-Stack Engineering</div>
              <p>
                PANTHR is an independent design-engineering studio. We build production web applications, bespoke design systems, and tactile digital products with zero generic boilerplate and 100% bespoke craftsmanship.
              </p>
              <div className="text-[#CCFF00] font-mono text-[11px]">
                Status: Accepting select contracts for Q2/Q3 2026.
              </div>
            </div>
          ),
        });
        break;

      case "stack":
        newLines.push({
          id: `out-${Date.now()}`,
          type: "output",
          content: (
            <div className="space-y-2 text-xs">
              <div className="text-white font-bold">Technical Weaponry:</div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {[
                  "Next.js 16",
                  "React 19",
                  "TypeScript 5",
                  "Tailwind CSS v4",
                  "Framer Motion",
                  "Lenis Smooth Scroll",
                  "Cloudflare Edge",
                  "PostgreSQL",
                  "Supabase",
                  "Figma Tokens",
                ].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-white/10 text-white border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ),
        });
        break;

      case "projects":
        newLines.push({
          id: `out-${Date.now()}`,
          type: "output",
          content: (
            <div className="space-y-2 text-xs text-[#94A3B8]">
              <div className="text-white font-bold">Featured Shipped Works:</div>
              <ul className="space-y-1 font-mono text-[11px]">
                <li>
                  • <Link href="/work/traction" className="text-[#CCFF00] hover:underline">Traction — Growth Engine</Link> (Full-Stack Analytics)
                </li>
                <li>
                  • <Link href="/work/stellar-wallpapers" className="text-[#CCFF00] hover:underline">Stellar — Edge Wallpapers</Link> (Cloud Media CDN)
                </li>
                <li>
                  • <Link href="/work/future-devs" className="text-[#CCFF00] hover:underline">Future Devs — Developer Foundry</Link> (Ecosystem Portal)
                </li>
                <li>
                  • <Link href="/work/sw-engine" className="text-[#CCFF00] hover:underline">SW Engine — Audit Suite</Link> (Telemetry Dashboard)
                </li>
              </ul>
              <div className="pt-1">
                <Link href="/work" className="text-xs text-white underline underline-offset-4 font-sans font-medium">
                  View full archive on /work →
                </Link>
              </div>
            </div>
          ),
        });
        break;

      case "contact":
      case "hire":
        newLines.push({
          id: `out-${Date.now()}`,
          type: "output",
          content: (
            <div className="space-y-2 text-xs text-[#94A3B8]">
              <div className="text-white font-bold">Initiate Direct Contact:</div>
              <p>Direct Email: <span className="text-[#CCFF00] font-mono">hello@panthr.dev</span></p>
              <div className="flex items-center gap-3 pt-1">
                <Link 
                  href="/contact"
                  className="px-3 py-1.5 rounded-full bg-[#CCFF00] text-[#0F1015] font-bold text-xs hover:bg-[#b8e600] transition-colors"
                >
                  Open Inquiry Form
                </Link>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("hello@panthr.dev");
                    setCopiedEmail(true);
                    setTimeout(() => setCopiedEmail(false), 1500);
                  }}
                  className="px-3 py-1.5 rounded-full bg-white/10 text-white font-mono text-xs hover:bg-white/20 transition-colors flex items-center gap-1.5"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
                </button>
              </div>
            </div>
          ),
        });
        break;

      case "whoami":
        newLines.push({
          id: `out-${Date.now()}`,
          type: "output",
          content: (
            <div className="text-xs text-[#94A3B8] font-mono">
              guest@visitor • Elevated studio guest privileges granted. Zero telemetry tracked.
            </div>
          ),
        });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "sudo":
        newLines.push({
          id: `out-${Date.now()}`,
          type: "output",
          content: (
            <div className="text-xs text-red-400 font-mono">
              [sudo] permission denied: Studio operates on pure human craft. No algorithmic compromises permitted.
            </div>
          ),
        });
        break;

      default:
        newLines.push({
          id: `out-${Date.now()}`,
          type: "output",
          content: (
            <div className="text-xs text-red-400 font-mono">
              command not found: {cmdText}. Type <span className="text-[#CCFF00]">"help"</span> for valid operations.
            </div>
          ),
        });
        break;
    }

    setHistory((prev) => [...prev, ...newLines]);
    setInputVal("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <div className="w-full rounded-2xl bg-[#0F1015] border border-white/[0.1] shadow-2xl overflow-hidden font-mono text-white text-xs">
      {/* Terminal Window Header */}
      <div className="px-4 py-3 bg-[#181920] border-b border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block" />
          <span className="ml-2 text-[11px] text-[#94A3B8] font-mono">
            panthr@studio: ~
          </span>
        </div>

        <div className="flex items-center space-x-2 text-[10px] text-[#64748B]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
          <span className="hidden sm:inline">LIVE SHELL</span>
        </div>
      </div>

      {/* Terminal Console Buffer */}
      <div 
        className="p-5 min-h-[220px] max-h-[340px] overflow-y-auto space-y-3"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line) => (
          <div key={line.id} className="leading-relaxed">
            {line.type === "input" ? (
              <span className="text-[#CCFF00] font-semibold">{line.content}</span>
            ) : (
              line.content
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Command Trigger Chips */}
      <div className="px-4 py-2 bg-[#14151B] border-t border-white/[0.04] flex flex-wrap items-center gap-1.5 text-[11px]">
        <span className="text-[#64748B] text-[10px] uppercase font-semibold mr-1">Quick:</span>
        {["help", "about", "stack", "projects", "contact", "clear"].map((btnCmd) => (
          <button
            key={btnCmd}
            type="button"
            onClick={() => executeCommand(btnCmd)}
            className="px-2.5 py-1 rounded bg-white/[0.06] hover:bg-[#CCFF00] hover:text-[#0F1015] text-[#94A3B8] transition-colors cursor-pointer"
          >
            {btnCmd}
          </button>
        ))}
      </div>

      {/* Terminal Input Prompt */}
      <form onSubmit={handleFormSubmit} className="px-4 py-3 bg-[#0A0B0E] border-t border-white/[0.08] flex items-center gap-2">
        <span className="text-[#CCFF00] font-bold shrink-0">guest@panthr:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder='Type a command (try "about" or "stack")...'
          className="flex-1 bg-transparent text-xs text-white placeholder-[#52525B] focus:outline-none"
        />
        <button
          type="submit"
          className="p-1 rounded text-[#71717A] hover:text-[#CCFF00] transition-colors"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
