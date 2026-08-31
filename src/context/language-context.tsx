"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "fr";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Language>("fr");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio_lang") as Language | null;
    if (savedLang && (savedLang === "en" || savedLang === "fr")) {
      setLangState(savedLang);
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("en")) {
        setLangState("en");
      } else {
        setLangState("fr");
      }
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

  const toggleLang = () => {
    const nextLang = lang === "en" ? "fr" : "en";
    setLang(nextLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
