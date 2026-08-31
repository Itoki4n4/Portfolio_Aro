"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "next-themes";
import { Terminal, Cpu, Sparkles } from "lucide-react";

export default function Banner() {
  const { lang } = useLanguage();
  const { resolvedTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const targetText =
    lang === "fr"
      ? "Bienvenue dans mon portfolio"
      : "Welcome to my portfolio";

  // Cyber Scramble / Decoding Text Animation State
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(true);

  const matrixChars = "0101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*<>[]{}";

  useEffect(() => {
    let iteration = 0;
    setIsScrambling(true);

    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return targetText[index];
            }
            return matrixChars[Math.floor(Math.random() * matrixChars.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
        setDisplayText(targetText);
        setIsScrambling(false);
      }

      iteration += 1 / 2; // Speed of decoding
    }, 35);

    return () => clearInterval(interval);
  }, [targetText]);

  // Binary Rain Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const streams = Array.from({ length: 32 }, () => ({
      x: Math.random() * 800,
      y: Math.random() * 120,
      speed: 0.5 + Math.random() * 1.5,
      char: Math.random() > 0.5 ? "1" : "0",
    }));

    const render = () => {
      if (!canvas || !containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = 110;

      const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.save();
      ctx.scale(dpr, dpr);

      const isDark = resolvedTheme === "dark" || resolvedTheme === undefined;

      // Dark CMD background
      ctx.fillStyle = isDark ? "rgba(10, 14, 20, 0.96)" : "rgba(245, 247, 250, 0.96)";
      ctx.fillRect(0, 0, width, height);

      // Subtle grid lines
      ctx.strokeStyle = isDark ? "rgba(57, 211, 83, 0.04)" : "rgba(0, 0, 0, 0.04)";
      ctx.lineWidth = 1;
      const step = 20;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw binary rain
      ctx.font = '11px "Courier New", monospace';
      ctx.fillStyle = isDark ? "rgba(57, 211, 83, 0.12)" : "rgba(33, 110, 57, 0.12)";

      streams.forEach((stream) => {
        stream.y += stream.speed;
        if (stream.y > height) {
          stream.y = -10;
          stream.x = Math.random() * width;
          stream.char = Math.random() > 0.5 ? "1" : "0";
        }
        ctx.fillText(stream.char, Math.floor(stream.x), Math.floor(stream.y));
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <section className="w-full p-2 sm:p-4 relative group flex justify-center">
      <div
        ref={containerRef}
        className="w-full rounded-xl border border-dashed border-border overflow-hidden bg-background shadow-md relative"
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-dashed border-border bg-muted/50 font-mono text-xs text-muted-foreground select-none">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
            </div>
            <span className="ml-1 text-[11px] opacity-80 flex items-center gap-1 font-mono">
              <Terminal className="w-3.5 h-3.5 text-emerald-500 inline" /> bash
              - welcome.sh [{lang.toUpperCase()}]
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className="flex items-center gap-1 text-emerald-500 font-semibold tracking-wider uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              <Cpu className="w-3 h-3 animate-pulse" />
              {isScrambling ? "DECODING..." : "CMD_ONLINE"}
            </span>
          </div>
        </div>

        {/* Display Container with Canvas background and Cyberpunk Text */}
        <div className="relative w-full h-[105px] bg-background flex items-center px-4 sm:px-6 overflow-hidden">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-0 pointer-events-none" />

          {/* Foreground Cyber Text Content */}
          <div className="relative z-10 w-full flex items-center justify-between flex-wrap gap-2">
            <div className="space-y-1 font-mono">
              <div className="flex items-center gap-2 text-xs text-emerald-500/80 font-medium">
                <span>user@aro-randria:~$</span>
                <span className="text-muted-foreground text-[11px]">./init_portfolio --lang={lang}</span>
              </div>

              <div className="text-lg sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-1">
                <span className="text-emerald-500 mr-1">&gt;</span>
                <span className="bg-gradient-to-r from-foreground via-emerald-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
                  {displayText}
                </span>
                <span className="w-2.5 h-5 bg-emerald-500 inline-block animate-pulse ml-1 rounded-xs"></span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 text-emerald-500 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Interactive CMD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
