"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  Mail, 
  Code, 
  Copy, 
  Check, 
  ExternalLink, 
  Compass, 
  CornerDownLeft,
  X
} from "lucide-react";

interface CommandItem {
  id: string;
  category: "Navigation" | "Projects" | "Quick Actions";
  label: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Global keyboard listener for Cmd+K / Ctrl+K and custom event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@panthr.dev");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1200);
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-home",
      category: "Navigation",
      label: "Home Overview",
      description: "Return to the main studio stage & hero",
      icon: <Compass className="w-4 h-4 text-[#CCFF00]" />,
      action: () => { router.push("/"); setIsOpen(false); },
      shortcut: "H",
    },
    {
      id: "nav-work",
      category: "Navigation",
      label: "All Works & Systems",
      description: "Explore all shipped product designs",
      icon: <Layers className="w-4 h-4 text-[#CCFF00]" />,
      action: () => { router.push("/work"); setIsOpen(false); },
      shortcut: "W",
    },
    {
      id: "nav-lab",
      category: "Navigation",
      label: "UI Mechanics Lab",
      description: "Interactive design tokens, buttons & 3D tilt cards",
      icon: <Sparkles className="w-4 h-4 text-[#CCFF00]" />,
      action: () => { router.push("/lab"); setIsOpen(false); },
      shortcut: "L",
    },
    {
      id: "nav-contact",
      category: "Navigation",
      label: "Initiate Engagement",
      description: "Project inquiry form & studio availability",
      icon: <Mail className="w-4 h-4 text-[#CCFF00]" />,
      action: () => { router.push("/contact"); setIsOpen(false); },
      shortcut: "C",
    },

    // Projects
    {
      id: "proj-traction",
      category: "Projects",
      label: "Traction — Growth Engine",
      description: "Next.js 16 high-conversion analytics platform",
      icon: <Code className="w-4 h-4 text-[#94A3B8]" />,
      action: () => { router.push("/work/traction"); setIsOpen(false); },
    },
    {
      id: "proj-stellar",
      category: "Projects",
      label: "Stellar — Edge Wallpapers",
      description: "Sub-second media CDN platform",
      icon: <Code className="w-4 h-4 text-[#94A3B8]" />,
      action: () => { router.push("/work/stellar-wallpapers"); setIsOpen(false); },
    },
    {
      id: "proj-future",
      category: "Projects",
      label: "Future Devs — Developer Foundry",
      description: "Full-stack developer community portal",
      icon: <Code className="w-4 h-4 text-[#94A3B8]" />,
      action: () => { router.push("/work/future-devs"); setIsOpen(false); },
    },
    {
      id: "proj-sw",
      category: "Projects",
      label: "SW Engine — Performance Audit",
      description: "High-velocity systems telemetry UI",
      icon: <Code className="w-4 h-4 text-[#94A3B8]" />,
      action: () => { router.push("/work/sw-engine"); setIsOpen(false); },
    },

    // Quick Actions
    {
      id: "act-copy-email",
      category: "Quick Actions",
      label: copied ? "Copied hello@panthr.dev!" : "Copy Direct Email",
      description: "Copies hello@panthr.dev to your clipboard",
      icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#CCFF00]" />,
      action: copyEmail,
      shortcut: "⌘C",
    },
    {
      id: "act-twitter",
      category: "Quick Actions",
      label: "X / Twitter Profile",
      description: "Follow design engineering updates",
      icon: <ExternalLink className="w-4 h-4 text-[#94A3B8]" />,
      action: () => { window.open("https://x.com/panthrDev", "_blank"); setIsOpen(false); },
    },
    {
      id: "act-linkedin",
      category: "Quick Actions",
      label: "LinkedIn Professional",
      description: "Connect & discuss contracts",
      icon: <ExternalLink className="w-4 h-4 text-[#94A3B8]" />,
      action: () => { window.open("https://www.linkedin.com/in/panthr/", "_blank"); setIsOpen(false); },
    },
    {
      id: "act-github",
      category: "Quick Actions",
      label: "GitHub Repositories",
      description: "Inspect open-source code & tooling",
      icon: <ExternalLink className="w-4 h-4 text-[#94A3B8]" />,
      action: () => { window.open("https://github.com/panthrdev", "_blank"); setIsOpen(false); },
    },
    {
      id: "act-dribbble",
      category: "Quick Actions",
      label: "Dribbble Visual Feed",
      description: "High-resolution interface shots",
      icon: <ExternalLink className="w-4 h-4 text-[#94A3B8]" />,
      action: () => { window.open("https://dribbble.com/panthrDev", "_blank"); setIsOpen(false); },
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    const searchTarget = `${cmd.label} ${cmd.description} ${cmd.category}`.toLowerCase();
    return searchTarget.includes(query.toLowerCase());
  });

  // Handle arrow key navigation inside search results
  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
    }
  };

  // Keep selected item scrolled into view
  useEffect(() => {
    const listEl = listRef.current;
    if (listEl) {
      const activeItem = listEl.children[selectedIndex] as HTMLElement;
      if (activeItem) {
        activeItem.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] sm:pt-[16vh] px-4 bg-black/65 backdrop-blur-md transition-all duration-200 animate-in fade-in"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="w-full max-w-xl rounded-2xl bg-[#0F1015] border border-white/12 shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden text-white flex flex-col animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyNavigation}
      >
        {/* Search Bar Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-4 h-4 text-[#CCFF00] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, project, or destination..."
            className="w-full bg-transparent text-sm text-white placeholder-[#71717A] focus:outline-none"
          />
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-md text-[#71717A] hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command Items List */}
        <div 
          ref={listRef}
          className="max-h-[380px] overflow-y-auto p-2 space-y-1 select-none"
        >
          {filteredCommands.length === 0 ? (
            <div className="py-10 text-center text-xs text-[#71717A]">
              No matching commands or destinations found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                    isSelected 
                      ? "bg-white/[0.08] text-white shadow-xs border-l-2 border-[#CCFF00]" 
                      : "text-[#94A3B8] hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <div className="shrink-0 p-1.5 rounded-lg bg-black/40 border border-white/5">
                      {cmd.icon}
                    </div>
                    <div className="truncate">
                      <div className="text-xs sm:text-sm font-semibold text-white truncate">
                        {cmd.label}
                      </div>
                      <div className="text-[11px] text-[#71717A] truncate">
                        {cmd.description}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    {cmd.shortcut && (
                      <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-[#CCFF00]">
                        {cmd.shortcut}
                      </span>
                    )}
                    {isSelected && (
                      <CornerDownLeft className="w-3.5 h-3.5 text-[#CCFF00]" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Keyboard Helper Footer */}
        <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#71717A]">
          <div className="flex items-center gap-4">
            <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">↵</kbd> Select</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">esc</kbd> Close</span>
          </div>
          <span className="hidden sm:inline text-[#CCFF00]">panthr.dev spotlight</span>
        </div>
      </div>
    </div>
  );
}
