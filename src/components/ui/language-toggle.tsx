"use client";

import { useLanguage } from "@/context/language-context";
import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="px-2.5 py-1 text-xs badge font-medium">
        <span className="w-6 inline-block text-center">...</span>
      </div>
    );
  }

  return (
    <button
      onClick={toggleLang}
      className="px-2.5 py-1 text-xs font-semibold badge cursor-pointer flex items-center gap-1.5 hover:opacity-80 transition-opacity"
      aria-label="Switch language / Changer de langue"
      title={lang === "fr" ? "Passer en Anglais" : "Switch to French"}
    >
      <Globe className="w-3.5 h-3.5 text-muted-foreground" />
      <span className="font-mono uppercase tracking-wider">{lang === "fr" ? "FR" : "EN"}</span>
    </button>
  );
}
