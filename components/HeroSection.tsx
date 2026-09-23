import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white text-[#0F1015] overflow-hidden flex flex-col justify-between select-none">
      {/* Main Massive Headline */}
      <div className="w-full px-4 sm:px-6 lg:px-12 pt-4 sm:pt-10 md:pt-12 pb-4 sm:pb-8 md:pb-10 flex flex-col items-center justify-center">
        <h1 className="text-center font-black uppercase text-[#0F1015] tracking-[-0.04em] leading-[0.88] text-[11.5vw] sm:text-7xl md:text-8xl lg:text-[8.5vw] xl:text-[9.2vw] 2xl:text-[148px]">
          <span className="block">DESIGNED TO</span>
          <span className="block">STAND OUT</span>
        </h1>
      </div>

      {/* Bottom Vivid Block with Panther Illustration */}
      <div
        className="relative w-full overflow-hidden select-none"
        style={{ backgroundColor: "#c4fa12" }}
      >
        {/* Height wrapper matching reference proportions */}
        <div className="relative w-full h-[36vh] sm:h-[50vh] md:h-[58vh] lg:h-[62vh] min-h-[250px] sm:min-h-[420px] md:min-h-[520px] flex items-start justify-center">
          {/* Top Divider Crisp Edge */}
          <div className="absolute top-0 inset-x-0 h-px bg-black/[0.1] z-20" />

          {/* Big PANTHR Watermark Behind Hero Image */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
          >
            <span className="font-black uppercase tracking-[-0.04em] text-black/[0.09] text-[20vw] sm:text-[23vw] md:text-[25vw] leading-none whitespace-nowrap">
              PANTHR
            </span>
          </div>

          {/* Panther Image Container - Top aligned so head/ears meet the top edge */}
          <div className="relative w-full h-full flex items-start justify-center z-10 overflow-hidden">
            <Image
              src="/hero-bg.png"
              alt="PANTHR"
              width={1451}
              height={1084}
              priority
              className="w-auto h-full max-h-none object-contain object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
