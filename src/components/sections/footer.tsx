"use client";

import Link from "next/link";
import { ABOUT_ME, SOCIAL_LINKS, UI_TEXT } from "@/app/constants/data";
import { useLanguage } from "@/context/language-context";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="text-center py-6">
      {/* Copyright */}
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {ABOUT_ME.name}. {UI_TEXT.sections.footerCopyright[lang]}
      </p>

      {/* Secondary link */}
      <p className="text-sm text-muted-foreground mt-1">
        <span className="opacity-80">{UI_TEXT.sections.footerStillScrolling[lang]}</span>{" "}
        <Link
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          {UI_TEXT.sections.footerGithubLink[lang]}
          <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
        </Link>
      </p>
    </footer>
  );
}
