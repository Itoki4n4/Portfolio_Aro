"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "../ui/theme-toggle";
import LanguageToggle from "../ui/language-toggle";
import { ABOUT_ME, UI_TEXT } from "@/app/constants/data";
import { useLanguage } from "@/context/language-context";

const STAGGER = 30;

export default function Navbar() {
  const { lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "skills", name: UI_TEXT.nav.skills[lang], href: "#skills" },
    { key: "projects", name: UI_TEXT.nav.projects[lang], href: "#projects" },
    { key: "contact", name: UI_TEXT.nav.contact[lang], href: "#contact" },
  ];

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/75 backdrop-blur-md border-b border-border/40 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="py-2.5 px-4">
        <div className="flex items-center justify-between">
          <Link
            href="#profile"
            onClick={(e) => handleScrollToSection(e, "#profile")}
            className="text-lg font-semibold text-foreground hover:text-emerald-500 transition-colors cursor-pointer"
          >
            aro.dev
          </Link>

          <div className="hidden md:flex items-center justify-end flex-1 gap-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className="relative text-base text-foreground/80 cursor-pointer group"
              >
                <span className="inline-flex">
                  {item.name.split("").map((letter, i) => (
                    <span
                      key={i}
                      className="relative inline-block overflow-hidden"
                    >
                      <span
                        className="block transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full group-hover:opacity-80"
                        style={{ transitionDelay: `${i * STAGGER}ms` }}
                      >
                        {letter}
                      </span>
                      <span
                        className="block absolute left-0 top-0 font-medium translate-y-full opacity-0 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0 group-hover:opacity-100"
                        style={{
                          transitionDelay: `${i * STAGGER}ms`,
                          color: "hsl(var(--link))",
                        }}
                      >
                        {letter}
                      </span>
                    </span>
                  ))}
                </span>
              </Link>
            ))}
          </div>

          <div className="ml-6 flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
