"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type IrisColor = "lime" | "amber" | "ruby" | "violet";

interface IrisContextType {
  iris: IrisColor;
  setIris: (color: IrisColor) => void;
  irisName: string;
  irisHex: string;
}

const IRIS_METADATA: Record<IrisColor, { name: string; hex: string }> = {
  lime: { name: "Cyber Lime", hex: "#CCFF00" },
  amber: { name: "Molten Amber", hex: "#FFB703" },
  ruby: { name: "Ember Ruby", hex: "#FF1E56" },
  violet: { name: "Ultraviolet", hex: "#A855F7" }
};

const IrisContext = createContext<IrisContextType>({
  iris: "lime",
  setIris: () => {},
  irisName: "Cyber Lime",
  irisHex: "#CCFF00"
});

export function IrisProvider({ children }: { children: React.ReactNode }) {
  const [iris, setIrisState] = useState<IrisColor>("lime");

  const setIris = (color: IrisColor) => {
    setIrisState(color);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-iris", color);
      try {
        localStorage.setItem("panthr_iris", color);
      } catch {
        // Ignore storage errors
      }
    }
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("panthr_iris") as IrisColor;
      if (saved && IRIS_METADATA[saved]) {
        setIrisState(saved);
        document.documentElement.setAttribute("data-iris", saved);
      }
    } catch {
      // Ignore
    }
  }, []);

  return (
    <IrisContext.Provider
      value={{
        iris,
        setIris,
        irisName: IRIS_METADATA[iris].name,
        irisHex: IRIS_METADATA[iris].hex
      }}
    >
      {children}
    </IrisContext.Provider>
  );
}

export function useIris() {
  return useContext(IrisContext);
}
