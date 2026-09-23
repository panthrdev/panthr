"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "My favorite design engineering partner. We deliver 5x faster with PANTHR.",
    by: "Alex, CEO at TechCorp",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 1,
    testimonial: "I'm confident our product architecture is rock solid. Uncompromising quality.",
    by: "Dan, CTO at SecureNet",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 2,
    testimonial: "I know it's cliché, but we were stuck before we found PANTHR. Can't thank you enough!",
    by: "Stephanie, COO at InnovateCo",
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 3,
    testimonial: "PANTHR's design systems made our next phase seamless. Can't recommend them enough!",
    by: "Marie, CFO at FuturePlanning",
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars, I'd give 12. Obsessive craft and tactile interaction.",
    by: "Andre, Head of Design at CreativeSolutions",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 5,
    testimonial: "SO SO SO HAPPY WE FOUND YOU GUYS! Saved our internal engineering team 100+ hours.",
    by: "Jeremy, Product Manager at TimeWise",
    imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 6,
    testimonial: "Took some convincing, but now that we've partnered with PANTHR, we're never looking back.",
    by: "Pam, Marketing Director at BrandBuilders",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 7,
    testimonial: "The precision and polish are extraordinary. The ROI is easily 100X for our launch.",
    by: "Daniel, Data Scientist at AnalyticsPro",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 8,
    testimonial: "It's just the best design engineering studio. Period.",
    by: "Fernando, UX Designer at UserFirst",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 9,
    testimonial: "Transformed our web presence into a hyper-fast, award-winning experience.",
    by: "Andy, DevOps Engineer at CloudMasters",
    imgSrc: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 10,
    testimonial: "I've been searching for a studio with this level of craft for YEARS. So glad I found PANTHR!",
    by: "Pete, Sales Director at RevenueRockets",
    imgSrc: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 11,
    testimonial: "So intuitive and beautifully animated, our entire executive board was blown away.",
    by: "Marina, HR Manager at TalentForge",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 12,
    testimonial: "Communication and responsiveness are unparalleled. Always ahead of schedule.",
    by: "Olivia, Customer Success Manager at ClientCare",
    imgSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 13,
    testimonial: "The performance gains we've seen since implementing PANTHR's build are off the charts!",
    by: "Raj, Operations Manager at StreamlineSolutions",
    imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 14,
    testimonial: "PANTHR revolutionized how we think about design and interaction mechanics. Total game-changer!",
    by: "Lila, Workflow Specialist at ProcessPro",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 15,
    testimonial: "The scalability of their front-end architecture is world class. Grows with our product seamlessly.",
    by: "Trevor, Scaling Officer at GrowthGurus",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 16,
    testimonial: "I appreciate how PANTHR continually pushes the envelope with modern web standards.",
    by: "Naomi, Innovation Lead at FutureTech",
    imgSrc: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 17,
    testimonial: "The conversion surge we've seen since launch is incredible. It paid for itself in weeks.",
    by: "Victor, Finance Analyst at ProfitPeak",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 18,
    testimonial: "Tactile micro-interactions, dark mode aesthetic, and sub-second load times. The perfect balance.",
    by: "Yuki, Tech Lead at BalancedTech",
    imgSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 19,
    testimonial: "We've worked with top agencies globally, but PANTHR stands out in reliability and craft.",
    by: "Zoe, Performance Manager at ReliableSystems",
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-5 sm:p-8 transition-all duration-500 ease-in-out select-none",
        isCenter 
          ? "z-10 bg-primary text-primary-foreground border-primary" 
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter 
          ? "0px 8px 0px 4px var(--border-color, rgba(15, 16, 21, 0.12))" 
          : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-12 w-10 sm:h-14 sm:w-12 bg-muted object-cover object-top rounded-xs border border-white/20"
        style={{
          boxShadow: "3px 3px 0px var(--background, #F8F9FA)"
        }}
      />
      <h3 className={cn(
        "text-sm sm:text-xl font-medium leading-snug line-clamp-4",
        isCenter ? "text-primary-foreground" : "text-foreground"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 mt-2 text-xs sm:text-sm italic font-mono truncate",
        isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        — {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC<{ className?: string }> = ({ className }) => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);
  const touchStartX = React.useRef<number | null>(null);
  const touchStartY = React.useRef<number | null>(null);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        handleMove(-1);
      } else {
        handleMove(1);
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : Math.min(290, window.innerWidth - 32));
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={cn("relative w-full overflow-hidden bg-transparent touch-pan-y", className)}
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-20">
        <button
          type="button"
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center text-xl transition-all cursor-pointer rounded-full",
            "bg-white border-2 border-black/[0.1] text-[#0F1015] hover:bg-[#0F1015] hover:text-white hover:border-[#0F1015] active:scale-95 shadow-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          type="button"
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center text-xl transition-all cursor-pointer rounded-full",
            "bg-white border-2 border-black/[0.1] text-[#0F1015] hover:bg-[#0F1015] hover:text-white hover:border-[#0F1015] active:scale-95 shadow-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};
