"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SOCIAL_LINKS, ABOUT_ME, UI_TEXT } from "@/app/constants/data";
import { useLanguage } from "@/context/language-context";
import { Github, Linkedin, Mail, FileText, Phone, Terminal, Copy, Check, ExternalLink } from "lucide-react";

export default function AboutMe() {
  const { lang } = useLanguage();
  const [showEmailBox, setShowEmailBox] = useState(false);
  const [scrambledEmail, setScrambledEmail] = useState("");
  const [copied, setCopied] = useState(false);

  const targetEmail = ABOUT_ME.email;
  const matrixChars = "0101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*<>[]{}";

  // Cyber Scramble effect for Email text
  useEffect(() => {
    if (!showEmailBox) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setScrambledEmail(
        targetEmail
          .split("")
          .map((char, index) => {
            if (char === "@" || char === ".") return char;
            if (index < iteration) {
              return targetEmail[index];
            }
            return matrixChars[Math.floor(Math.random() * matrixChars.length)];
          })
          .join("")
      );

      if (iteration >= targetEmail.length) {
        clearInterval(interval);
        setScrambledEmail(targetEmail);
      }

      iteration += 1 / 2;
    }, 30);

    return () => clearInterval(interval);
  }, [showEmailBox, targetEmail]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const SOCIAL_BUTTONS = [
    {
      href: SOCIAL_LINKS.github,
      label: "GitHub",
      icon: (
        <>
          <Github className="w-5 h-5" /> GitHub
        </>
      ),
      className: "flex items-center gap-2 font-medium",
      isExternal: true,
    },
    {
      href: SOCIAL_LINKS.linkedin,
      label: "LinkedIn",
      icon: (
        <>
          <Linkedin className="w-5 h-5" /> LinkedIn
        </>
      ),
      className: "flex items-center gap-2 font-medium",
      isExternal: true,
    },
    {
      href: SOCIAL_LINKS.phone,
      label: UI_TEXT.sections.phoneLabel[lang],
      icon: (
        <>
          <Phone className="w-5 h-5" /> {ABOUT_ME.phone}
        </>
      ),
      className: "flex items-center gap-2 font-medium",
      isExternal: true,
    },
    {
      href: SOCIAL_LINKS.resume,
      label: UI_TEXT.sections.resumeLabel[lang],
      icon: (
        <>
          <FileText className="w-5 h-5" /> {UI_TEXT.sections.resumeLabel[lang]}
        </>
      ),
      className: "flex items-center gap-2 font-medium",
      isExternal: true,
    },
  ];

  return (
    <section id="about" className="divide-y divide-dashed divide-border">
      <div className="p-4">
        <div className="space-y-4 text-[15px] sm:text-base text-muted-foreground text-justify leading-relaxed">
          {ABOUT_ME.description[lang].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex gap-3 flex-wrap items-center">
          {SOCIAL_BUTTONS.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-2 btn text-sm ${btn.className || ""}`}
              aria-label={btn.label}
            >
              {btn.icon}
            </Link>
          ))}

          {/* Email Cyber CMD Button */}
          <button
            onClick={() => setShowEmailBox(!showEmailBox)}
            className={`px-3 py-2 btn text-sm flex items-center gap-2 font-medium cursor-pointer ${
              showEmailBox ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-500" : ""
            }`}
            aria-label="Email"
          >
            <Mail className="w-5 h-5" /> Email
          </button>
        </div>

        {/* Cyber CMD Email Box */}
        {showEmailBox && (
          <div className="p-3.5 rounded-xl border border-dashed border-emerald-500/40 bg-background shadow-md space-y-3 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center justify-between pb-2 border-b border-dashed border-border font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                </div>
                <span className="ml-1 opacity-80 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-emerald-500 inline" /> bash -
                  get_email.sh
                </span>
              </div>

              <span className="text-[10px] text-emerald-500 font-mono font-semibold uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                EMAIL_CMD
              </span>
            </div>

            <div className="font-mono space-y-2">
              <div className="flex items-center gap-2 text-xs text-emerald-500/80 font-medium">
                <span>user@aro-randria:~$</span>
                <span className="text-muted-foreground text-[11px]">cat ./contact_email.txt</span>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="text-base sm:text-xl font-bold tracking-tight text-foreground flex items-center gap-1">
                  <span className="text-emerald-500 mr-1">&gt;</span>
                  <span className="bg-gradient-to-r from-foreground via-emerald-400 to-emerald-500 bg-clip-text text-transparent select-all">
                    {scrambledEmail}
                  </span>
                  <span className="w-2 h-4 bg-emerald-500 inline-block animate-pulse ml-1 rounded-xs"></span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 text-xs btn flex items-center gap-1.5 font-medium cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={SOCIAL_LINKS.email}
                    className="px-3 py-1.5 text-xs btn flex items-center gap-1.5 font-medium"
                    title="Open Email Client"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Mail</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
