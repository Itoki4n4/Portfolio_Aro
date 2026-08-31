"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Disable on touch/mobile devices
    const isMobile =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches;

    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    const pixels: {
      x: number;
      y: number;
      alpha: number;
      size: number;
      color: string;
    }[] = [];

    const mouse = { x: -100, y: -100 };
    const prevMouse = { x: -100, y: -100 };

    const colors = ["#39d353", "#50fa7b", "#26a641", "#00f2fe"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const dist = Math.hypot(mouse.x - prevMouse.x, mouse.y - prevMouse.y);
      if (dist > 5) {
        // Add a small lightweight pixel square to the trail
        pixels.push({
          x: mouse.x + (Math.random() - 0.5) * 6,
          y: mouse.y + (Math.random() - 0.5) * 6,
          alpha: 0.85,
          size: Math.random() > 0.5 ? 3 : 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });

        // Keep trail short & subtle (max 8 particles)
        if (pixels.length > 10) pixels.shift();

        prevMouse.x = mouse.x;
        prevMouse.y = mouse.y;
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = pixels.length - 1; i >= 0; i--) {
        const p = pixels[i];
        p.alpha -= 0.05; // Fast decay for a short, crisp trail

        if (p.alpha <= 0) {
          pixels.splice(i, 1);
          continue;
        }

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
      }

      ctx.globalAlpha = 1;
      animFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    resize();
    render();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] block"
    />
  );
}
