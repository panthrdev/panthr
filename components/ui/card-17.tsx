"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Define the props for the LocationCard component
export interface LocationCardProps {
  city: string;
  address: string;
  imageUrl: string;
  directionsUrl: string;
  className?: string;
}

// The main LocationCard component
export const LocationCard = ({
  city,
  address,
  imageUrl,
  directionsUrl,
  className,
}: LocationCardProps) => {
  // Framer Motion hooks for creating the 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  // Create transforms for rotation based on mouse position
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["15deg", "-15deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-15deg", "15deg"]
  );

  // Handle mouse movement over the card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  // Reset the tilt effect when the mouse leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }} className="w-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative w-full h-[340px] sm:h-80 rounded-xl bg-cover bg-center cursor-pointer",
          "shadow-lg transition-shadow duration-300 hover:shadow-2xl",
          className
        )}
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
            backgroundImage: `url(${imageUrl})`,
          }}
          className="absolute inset-4 grid h-[calc(100%-2rem)] w-[calc(100%-2rem)] place-content-end rounded-xl bg-cover bg-center shadow-lg"
        >
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Content */}
          <div 
            style={{ transform: "translateZ(50px)" }}
            className="p-4 sm:p-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 w-full"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">{city}</h3>
              <p className="text-xs sm:text-sm text-white/80">{address}</p>
            </div>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="shrink-0">
              <Button 
                variant="secondary"
                aria-label={`Get directions to our ${city} office`}
                className="text-xs sm:text-sm py-1.5 h-auto"
              >
                Get directions
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LocationCard;
