import { Project } from "@/lib/types";

export const PROJECTS: Project[] = [
  {
    slug: "traction",
    title: "Traction",
    subtitle: "High-growth student enrollment engine & interactive growth calculator",
    category: "Full-Stack Web Application",
    year: "2026",
    role: "Full-Stack Engineering & UI/UX Architecture",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    metrics: [
      { label: "Performance Score", value: "99/100" },
      { label: "Architecture", value: "Next.js App Router" },
      { label: "Interaction Depth", value: "Full Dynamic Physics" }
    ],
    overview:
      "Traction is a conversion-optimized web application engineered for high-velocity tutor academies. Designed with an editorial layered hierarchy, it replaces static sales copy with an interactive growth simulation engine and streamlined booking flows.",
    uxRationale:
      "Traditional agency landing pages suffer from high bounce rates due to passive reading. Traction flips this dynamic by placing an interactive Class Growth Calculator directly in the user's path, allowing academy directors to model their exact student capacity and revenue upside in real time.",
    engineeringHighlights: [
      "Dynamic ROI & student capacity calculation engine with zero UI latency",
      "Slide-over booking orchestration modal with multi-step validation",
      "High-contrast obsidian surface cards on warm architectural canvas",
      "Smooth hardware-accelerated scroll reveal transitions"
    ],
    keyInteractions: [
      "Real-time slider calculating projected monthly student revenues",
      "Tactile booking trigger with smooth focus trap and backdrop blur",
      "Sticky hero with layered sheet elevation on scroll"
    ],
    layoutVariant: "hero-viewport",
    featured: true,
    status: "Shipped",
    liveUrl: "https://traction.preview"
  },
  {
    slug: "stellar-wallpapers",
    title: "Stellar Wallpapers",
    subtitle: "Cloud-distributed digital wallpaper platform & curation interface",
    category: "Cloud Media Platform & UI",
    year: "2026",
    role: "End-to-End Product Design & Cloud Architecture",
    stack: ["React", "Cloudflare Workers", "Firebase Firestore", "Tailwind CSS", "Sharp"],
    metrics: [
      { label: "Asset Delivery", value: "Edge Distributed" },
      { label: "Image Optimization", value: "Lossless WebP/AVIF" },
      { label: "Latency", value: "< 45ms Global" }
    ],
    overview:
      "A high-performance visual repository and media distribution platform built for ultra-high-resolution desktop and mobile wallpapers. Powered by Cloudflare edge caching and Firebase Firestore for instant asset discovery.",
    uxRationale:
      "Wallpaper galleries are notoriously sluggish and visual clutter ruins the artwork. Stellar uses an ultra-minimalist framing system that recedes into the background, letting the high-dynamic-range assets command full visual focus with zero visual noise.",
    engineeringHighlights: [
      "Headless automated image optimization pipeline converting 4K assets to WebP",
      "Cloudflare Workers edge delivery with custom CORS and caching headers",
      "Dynamic resolution detection adapting preview fidelity to device pixel ratios",
      "Nocturnal UI architecture with feline eye status markers"
    ],
    keyInteractions: [
      "Instant resolution switcher (Desktop / Mobile / Dual-Screen)",
      "Zero-jank masonry image grid with progressive blurred thumbnail loading",
      "One-click lossless asset download trigger"
    ],
    layoutVariant: "editorial-split",
    featured: true,
    status: "Shipped",
    liveUrl: "https://stellarwallpapers.dev"
  },
  {
    slug: "future-devs",
    title: "Future Devs",
    subtitle: "Boutique digital engineering studio platform with radar performance metrics",
    category: "Studio Marketing & Client Platform",
    year: "2026",
    role: "Creative Direction & Frontend Engineering",
    stack: ["Express", "Node.js", "Firebase", "Vanilla JS", "Tailwind CSS"],
    metrics: [
      { label: "Target Audience", value: "Funded Tech Startups" },
      { label: "Conversion Lift", value: "+38% Inquiries" },
      { label: "Design System", value: "Bespoke Tokens" }
    ],
    overview:
      "A boutique digital studio interface built to articulate complex engineering offerings to non-technical startup founders. Integrates sprint countdown timers, interactive capability radar graphs, and transparent pricing matrices.",
    uxRationale:
      "Consulting and studio websites often obscure deliverables behind vague buzzwords. Future Devs implements a transparent, technical index model where clients can inspect exact sprint structures, timeline breakdowns, and deliverables before initiating a conversation.",
    engineeringHighlights: [
      "Custom interactive radar chart visualizing multi-dimensional engineering competencies",
      "Live sprint countdown timer with automated capacity status updates",
      "Multi-part file asset upload endpoint for client brief submissions"
    ],
    keyInteractions: [
      "Interactive radar chart with hover state inspection for technical competencies",
      "Transparent pricing table with instantaneous scope toggles"
    ],
    layoutVariant: "spec-sheet",
    featured: true,
    status: "In Production"
  },
  {
    slug: "sw-engine",
    title: "SW Frame & Engine",
    subtitle: "High-throughput desktop asset processor and aspect ratio normalization suite",
    category: "Desktop Systems Tool",
    year: "2026",
    role: "Systems Architecture & Automation Scripting",
    stack: ["Python 3.11", "Pillow", "PyInstaller", "Multi-Threading"],
    metrics: [
      { label: "Batch Speed", value: "100+ files / min" },
      { label: "Formats", value: "RAW, PNG, JPG, WebP" },
      { label: "Binary Footprint", value: "< 24MB Standalone" }
    ],
    overview:
      "A desktop systems tool engineered to automate the laborious task of formatting, watermarking, aspect-ratio cropping, and compressing thousands of ultra-high-resolution creative assets.",
    uxRationale:
      "Creative workflows grind to a halt when designers spend hours manually resizing mockups. SW Frame provides a surgical, distraction-free command and GUI environment built purely for batch execution speed.",
    engineeringHighlights: [
      "Multi-core image transformation pipeline utilizing native SIMD instructions",
      "Aspect ratio auto-cropping with smart saliency detection",
      "Zero-dependency standalone binary compiled with PyInstaller"
    ],
    keyInteractions: [
      "Drag-and-drop batch folder target queue",
      "Live processing progress bar with real-time throughput metrics"
    ],
    layoutVariant: "terminal-frame",
    featured: false,
    status: "Internal System"
  }
];
