"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Lock, X, ZoomIn } from "lucide-react";
import { UI_TEXT } from "@/app/constants/data";
import { useLanguage } from "@/context/language-context";
import BackButton from "./back-button";
import ThemeToggle from "@/components/ui/theme-toggle";
import LanguageToggle from "@/components/ui/language-toggle";

interface ProjectImage {
  src: string;
  alt: string;
  caption?: {
    en: string;
    fr: string;
  } | string;
}

interface TechnicalDetail {
  title: {
    en: string;
    fr: string;
  } | string;
  description: {
    en: string;
    fr: string;
  } | string;
  code?: string;
}

interface Challenge {
  problem: {
    en: string;
    fr: string;
  } | string;
  solution: {
    en: string;
    fr: string;
  } | string;
}

interface ProjectMetrics {
  [key: string]: string | undefined;
}

export interface Project {
  name: string;
  tagline: {
    en: string;
    fr: string;
  } | string;
  description: {
    en: string;
    fr: string;
  } | string;
  tech: string[];
  link?: string;
  github?: string;
  statusBadge?: {
    en: string;
    fr: string;
  } | string;
  images?: {
    hero?: string;
    gallery?: ProjectImage[];
  };
  features?: {
    en: string[];
    fr: string[];
  } | string[];
  technicalDetails?: TechnicalDetail[];
  challenges?: Challenge[];
  metrics?: ProjectMetrics;
  video?: string;
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const [activeModalImage, setActiveModalImage] = useState<{
    src: string;
    alt: string;
    caption?: string;
  } | null>(null);

  // Close Lightbox Modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalImage(null);
      }
    };
    if (activeModalImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalImage]);

  const getText = (field: { en: string; fr: string } | string | undefined): string => {
    if (!field) return "";
    if (typeof field === "string") return field;
    return field[lang] || field.en || "";
  };

  const getFeatures = (): string[] => {
    if (!project.features) return [];
    if (Array.isArray(project.features)) return project.features;
    return project.features[lang] || project.features.en || [];
  };

  return (
    <div>
      {/* Header */}
      <div className="divide-y divide-dashed divide-border">
        {/* Back Button & Toggles */}
        <div className="py-2 px-4 flex items-center justify-between">
          <BackButton />
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Links & Tech Area */}
        <div className="px-4 py-4 space-y-4">
          <h1 className="text-4xl font-bold">{project.name}</h1>

          <div className="flex flex-wrap gap-3 items-center">
            {project.link ? (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-4 py-2 flex items-center gap-2 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                {UI_TEXT.sections.liveDemo[lang]}
              </Link>
            ) : (
              <span className="px-3.5 py-1.5 rounded-lg border border-dashed border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-mono text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {project.statusBadge
                  ? getText(project.statusBadge)
                  : lang === "fr"
                  ? "En cours de production"
                  : "In Production"}
              </span>
            )}

            {project.github ? (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-4 py-2 flex items-center gap-2 text-sm"
              >
                <Github className="w-4 h-4" />
                {UI_TEXT.sections.sourceCode[lang]}
              </Link>
            ) : (
              <span className="px-3.5 py-1.5 rounded-lg border border-dashed border-border bg-muted/40 text-muted-foreground font-mono text-xs flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                {lang === "fr" ? "Dépôt Privé (Confidentialité)" : "Private Repository (Confidentiality)"}
              </span>
            )}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm badge text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="divide-y divide-dashed divide-border">
        {/* Hero Image */}
        {project.images?.hero && (
          <div className="p-2">
            <div
              onClick={() =>
                setActiveModalImage({
                  src: project.images!.hero!,
                  alt: `${project.name} preview`,
                  caption: `${project.name} - Aperçu Principal`,
                })
              }
              className="relative aspect-video overflow-hidden group cursor-zoom-in rounded-lg"
            >
              <Image
                src={project.images.hero}
                alt={`${project.name} preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-sm font-mono">
                <ZoomIn className="w-5 h-5 text-emerald-400" />
                <span>{lang === "fr" ? "Agrandir l'image en taille réelle" : "View Full Size"}</span>
              </div>
            </div>
          </div>
        )}

        {/* Overview */}
        <section className="divide-y divide-dashed divide-border">
          <div className="py-2 px-4">
            <h2 className="text-2xl font-semibold">
              {UI_TEXT.sections.overviewHeader[lang]}
            </h2>
          </div>
          <p className="p-4 text-muted-foreground text-justify leading-relaxed">
            {getText(project.description)}
          </p>
        </section>

        {/* Technical Implementation */}
        {project.technicalDetails && project.technicalDetails.length > 0 && (
          <section className="divide-y divide-dashed divide-border">
            <div className="py-2 px-4">
              <h2 className="text-2xl font-semibold">
                {UI_TEXT.sections.techHeader[lang]}
              </h2>
            </div>
            {project.technicalDetails.map(
              (detail: TechnicalDetail, index: number) => (
                <div key={index} className="p-4">
                  <h3 className="font-medium">{getText(detail.title)}</h3>
                  <p className="text-sm text-muted-foreground text-justify leading-relaxed">
                    {getText(detail.description)}
                  </p>
                  {detail.code && (
                    <pre className="bg-muted p-4 border border-dashed border-border text-sm overflow-x-auto mt-2">
                      <code>{detail.code}</code>
                    </pre>
                  )}
                </div>
              )
            )}
          </section>
        )}

        {/* Project Video */}
        {project.video && (
          <section className="divide-y divide-dashed divide-border">
            <div className="py-2 px-4">
              <h2 className="text-2xl font-semibold">
                {UI_TEXT.sections.demoHeader[lang]}
              </h2>
            </div>
            <div className="p-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src={`${project.video.replace("watch?v=", "embed/")}?rel=0&modestbranding=1&iv_load_policy=3&color=white&disablekb=1`}
                  title={`${project.name} Demo Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </section>
        )}

        {/* Features */}
        {getFeatures().length > 0 && (
          <section className="divide-y divide-dashed divide-border">
            <div className="py-2 px-4">
              <h2 className="text-2xl font-semibold">
                {UI_TEXT.sections.featuresHeader[lang]}
              </h2>
            </div>
            <ul className="p-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {getFeatures().map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-foreground/20 mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Screenshots Gallery */}
        {project.images?.gallery && project.images.gallery.length > 0 && (
          <section className="divide-y divide-dashed divide-border">
            <div className="py-2 px-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                {UI_TEXT.sections.screenshotsHeader[lang]}
              </h2>
              <span className="text-xs text-muted-foreground font-mono hidden sm:inline-block">
                {lang === "fr" ? "Cliquez sur une image pour l'agrandir en taille réelle" : "Click image to view full size"}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {project.images.gallery.map((image: ProjectImage, index: number) => {
                const captionText = getText(image.caption);
                return (
                  <div
                    key={index}
                    className="relative group p-2 border-dashed border-border border-b md:odd:border-r last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0"
                  >
                    <div
                      onClick={() =>
                        setActiveModalImage({
                          src: image.src,
                          alt: image.alt,
                          caption: captionText,
                        })
                      }
                      className="relative aspect-video overflow-hidden cursor-zoom-in rounded-lg"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                        <div className="flex items-center gap-2 text-white text-xs font-mono font-medium mb-1 bg-black/70 px-3 py-1.5 rounded-full border border-emerald-500/40 shadow-md">
                          <ZoomIn className="w-4 h-4 text-emerald-400" />
                          <span>{lang === "fr" ? "Taille réelle" : "Full Size"}</span>
                        </div>
                        {captionText && (
                          <p className="text-xs text-white/90 line-clamp-2 max-w-sm">
                            {captionText}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Challenges & Solutions */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="divide-y divide-dashed divide-border">
            <div className="py-2 px-4">
              <h2 className="text-2xl font-semibold">
                {UI_TEXT.sections.challengesHeader[lang]}
              </h2>
            </div>
            {project.challenges.map((challenge: Challenge, index: number) => (
              <div key={index} className="p-4">
                <h3 className="font-medium text-sm">
                  {UI_TEXT.sections.challengeLabel[lang]}
                  {getText(challenge.problem)}
                </h3>
                <p className="text-sm text-muted-foreground text-justify leading-relaxed mt-1">
                  {UI_TEXT.sections.solutionLabel[lang]}
                  {getText(challenge.solution)}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Metrics */}
        {project.metrics && (
          <section className="divide-y divide-dashed divide-border">
            <div className="py-2 px-4">
              <h2 className="text-2xl font-semibold">
                {UI_TEXT.sections.impactHeader[lang]}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {Object.entries(project.metrics)
                .filter(([, value]) => value !== undefined)
                .map(([key, value], index, array) => (
                  <div
                    key={key}
                    className={`text-center p-4 border-dashed border-border border-r border-b 
                      ${(index + 1) % 2 === 0 ? "border-r-0 md:border-r" : ""}
                      ${(index + 1) % 4 === 0 ? "md:border-r-0" : ""}
                      ${index >= array.length - 2 ? "border-b-0 md:border-b" : ""}
                      ${index >= array.length - 4 ? "md:border-b-0" : ""}
                    `}
                  >
                    <div className="text-2xl font-bold">{value}</div>
                    <div className="text-xs text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        )}
      </div>

      {/* Full-Size Image Lightbox Modal */}
      {activeModalImage && (
        <div
          onClick={() => setActiveModalImage(null)}
          className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-300 select-none cursor-pointer"
        >
          {/* Top Bar with Close Button */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
            <button
              onClick={() => setActiveModalImage(null)}
              className="p-2.5 rounded-full bg-muted/40 border border-emerald-500/40 text-white hover:bg-emerald-500/20 hover:text-emerald-400 transition-all cursor-pointer shadow-lg"
              aria-label="Close image modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[94vw] max-h-[88vh] flex flex-col items-center justify-center space-y-3 cursor-default"
          >
            <div className="relative max-w-full max-h-[82vh] overflow-hidden rounded-xl border border-dashed border-emerald-500/40 shadow-2xl bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeModalImage.src}
                alt={activeModalImage.alt}
                className="max-w-[92vw] max-h-[80vh] object-contain rounded-xl"
              />
            </div>

            {/* Caption Badge */}
            {activeModalImage.caption && (
              <div className="px-4 py-2 rounded-xl bg-background/90 border border-dashed border-border text-center font-mono text-xs text-foreground max-w-2xl shadow-lg">
                <span className="text-emerald-400 font-semibold mr-1 font-mono">[IMAGE_VIEWER]</span>
                <span>{activeModalImage.caption}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
