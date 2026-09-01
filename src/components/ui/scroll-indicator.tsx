"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronDown, Mouse } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function ScrollIndicator() {
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Clear existing timer on any scroll movement
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      if (window.scrollY > 120) {
        // Hide immediately when scrolling down past top section
        setIsVisible(false);
      } else {
        // When staying at top / profile section, reset timer to re-appear after 2.5s of idle time
        setIsVisible(false);
        timerRef.current = setTimeout(() => {
          if (window.scrollY <= 120) {
            setIsVisible(true);
          }
        }, 2500);
      }
    };

    // Initial state check
    if (window.scrollY <= 120) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleScrollClick = () => {
    setIsVisible(false);

    // Scroll to the content below profile section
    const targetEl =
      document.getElementById("experience") ||
      document.getElementById("about") ||
      document.getElementById("skills");

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 500, behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleScrollClick}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 cursor-pointer select-none transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-95 pointer-events-none"
      }`}
      aria-label="Scroll down hint"
    >
      <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-background/90 backdrop-blur-md border border-border/90 shadow-xl text-sm font-medium font-mono text-foreground hover:text-emerald-500 hover:border-emerald-500/50 transition-all duration-300 group">
        <Mouse className="w-4 h-4 text-emerald-500 animate-pulse" />
        <span>{lang === "fr" ? "Scroller vers le bas" : "Scroll down"}</span>
        <ChevronDown className="w-4 h-4 text-emerald-500 animate-bounce ml-0.5" />
      </div>
    </div>
  );
}
