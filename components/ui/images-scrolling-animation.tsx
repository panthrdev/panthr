"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface ScrollProject {
  title: string;
  category?: string;
  src: string;
  href?: string;
}

const DEFAULT_PROJECTS: ScrollProject[] = [
  {
    title: "Traction — Growth Engine",
    category: "Full-Stack Web App",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    href: "/work/traction",
  },
  {
    title: "Stellar — Edge Wallpapers",
    category: "Cloud Media Platform",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    href: "/work/stellar-wallpapers",
  },
  {
    title: "Future Devs — Developer Foundry",
    category: "Community Platform",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    href: "/work/future-devs",
  },
  {
    title: "SW Engine — Performance Audit",
    category: "High-Velocity Systems",
    src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
    href: "/work/sw-engine",
  },
  {
    title: "Panthera — Tactile UI Kit",
    category: "Design System & Micro-Interactions",
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    href: "/lab",
  },
];

const StickyCard_001 = ({
  i,
  title,
  category,
  src,
  href,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  category?: string;
  src: string;
  href?: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  const CardContent = (
    <motion.div
      style={{
        scale,
        top: `calc(-2vh + ${i * 24 + 120}px)`,
      }}
      transformTemplate={({ scale }) => `translate3d(0, 0, 0) scale(${scale})`}
      className="relative -top-1/4 flex origin-top flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-black/10 bg-[#0F1015] shadow-2xl transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                 h-[230px] w-[calc(100vw-32px)] max-w-[310px] 
                 sm:h-[320px] sm:w-[480px] sm:max-w-none 
                 md:h-[380px] md:w-[600px] 
                 lg:h-[420px] lg:w-[720px] group transform-gpu will-change-transform"
    >
      <img
        src={src || "/placeholder.svg"}
        alt={title}
        loading={i < 2 ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 select-none pointer-events-none will-change-transform"
      />

      {/* Dark gradient overlay for typography readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

      {/* Card Info Pill */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between gap-4 pointer-events-none">
        <div>
          {category && (
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#CCFF00] text-[#0F1015] font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1.5 shadow-xs">
              {category}
            </span>
          )}
          <h3 className="text-base sm:text-xl font-bold text-white tracking-tight">
            {title}
          </h3>
        </div>

        <div className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] sm:text-xs font-semibold tracking-wider flex items-center space-x-1.5 shrink-0 shadow-lg group-hover:bg-[#CCFF00] group-hover:text-[#0F1015] group-hover:border-[#CCFF00] group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(204,255,0,0.6)] transition-all duration-300 ease-out">
          <span>View</span>
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="sticky top-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 isolate">
      {href ? (
        <Link href={href} className="block cursor-pointer">
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </div>
  );
};

const ImagesScrollingAnimation = ({
  projects = DEFAULT_PROJECTS,
}: {
  projects?: ScrollProject[];
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={container}
      className="relative flex w-full flex-col items-center justify-center 
                 pb-[20vh] pt-[2vh] 
                 sm:pb-[25vh] sm:pt-[4vh] 
                 lg:pb-[30vh] lg:pt-[5vh]"
    >
      {projects.map((project, i) => {
        const targetScale = Math.max(0.65, 1 - (projects.length - i - 1) * 0.06);
        return (
          <StickyCard_001
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * (0.8 / projects.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export { ImagesScrollingAnimation, StickyCard_001 };
