"use client";

import React from "react";
import { LocationCard } from "@/components/ui/card-17";

const locations = [
  {
    city: "India",
    address: "Hawa Mahal, Pink City, Jaipur, Rajasthan India",
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    directionsUrl: "https://maps.app.goo.gl/TWAmMefs3B22wU5LA",
  },
  {
    city: "Sydney",
    address: "456 Ocean View Road, Bondi Beach, NSW 2026",
    imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    directionsUrl: "https://maps.app.goo.gl/3qXzH4fSjK6rB7yP8",
  },
];

export const LocationCardDemo = () => {
  return (
    <div className="w-full bg-[#0F1015] text-white p-8 rounded-3xl">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#CCFF00] mb-2 font-mono">
            LOCATIONS
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Our Studio Hubs
          </h1>
          <p className="mt-3 text-sm text-[#94A3B8]">
            Physical presence and collaborative creative labs across regions.
          </p>
        </div>
        
        {/* Responsive grid for the location cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
          {locations.map((location) => (
            <LocationCard
              key={location.city}
              city={location.city}
              address={location.address}
              imageUrl={location.imageUrl}
              directionsUrl={location.directionsUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationCardDemo;
