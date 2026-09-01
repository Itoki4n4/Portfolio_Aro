"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Mouse } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function ScrollIndicator() {
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Check if the user has already scrolled/dismissed it during this session
    const dismissedSession = sessionStorage.getItem("portfolio_scroll_dismissed");
    if (dismissedSession) {
      setHasDismissed(true);
      return;
    }

    // Only show if at the top of the page on initial open
    if (window.scrollY < 40) {
      setIsVisible(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsVisible(false);
        setHasDismissed(true);
        sessionStorage.setItem("portfolio_scroll_dismissed", "true");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    setIsVisible(false);
    setHasDismissed(true);
    sessionStorage.setItem("portfolio_scroll_dismissed", "true");

    const profileEl = document.getElementById("profile");
    if (profileEl) {
      profileEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  if (hasDismissed) return null;

  return (
    <div
      onClick={handleScrollClick}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 cursor-pointer select-none transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      aria-label="Scroll down hint"
    >
      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background/85 backdrop-blur-md border border-border/80 shadow-lg text-xs font-mono text-foreground/80 hover:text-emerald-500 hover:border-emerald-500/40 transition-all group">
        <Mouse className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
        <span>{lang === "fr" ? "Scroller vers le bas" : "Scroll down"}</span>
        <ChevronDown className="w-3.5 h-3.5 text-emerald-500 animate-bounce ml-0.5" />
      </div>
    </div>
  );
}
