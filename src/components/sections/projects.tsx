"use client";

import { Eye, MousePointerClick, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import { PROJECTS, UI_TEXT } from "@/app/constants/data";
import { useLanguage } from "@/context/language-context";
import { useState } from "react";
import { generateSlug } from "@/lib/utils";
import ImageTooltip from "@/components/ui/image-tooltip";
import ImageMarquee from "@/components/ui/image-marquee";
import CollapsibleGrid from "@/components/ui/collapsible-grid";

export default function Projects() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"pro" | "academic">("pro");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleProjectClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Mark that user navigated from main page
    sessionStorage.setItem("navigatedFromMainPage", "true");
  };

  const filteredProjects = PROJECTS.filter(
    (project) => !project.type || project.type === activeCategory
  );

  return (
    <section id="projects">
      {/* Header with Title & Smooth Category Switch Toggle */}
      <div className="flex items-center justify-between py-2 px-4 border-b border-dashed border-border flex-wrap gap-2">
        <h2 className="text-2xl font-semibold flex items-center">
          {UI_TEXT.sections.projects[lang]}
        </h2>

        {/* Futuristic Category Toggle Switch with Sliding Active Pill */}
        <div className="relative flex items-center p-1 bg-muted/40 rounded-xl border border-dashed border-border text-xs font-mono select-none">
          <button
            onClick={() => {
              setActiveCategory("pro");
              setActiveIndex(null);
            }}
            className={`relative z-10 px-3 py-1.5 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] font-medium cursor-pointer flex items-center gap-1.5 ${
              activeCategory === "pro"
                ? "bg-background text-emerald-500 shadow-sm border border-emerald-500/30 font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-emerald-500" />
            <span>{lang === "fr" ? "Professionnels" : "Professional"}</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory("academic");
              setActiveIndex(null);
            }}
            className={`relative z-10 px-3 py-1.5 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] font-medium cursor-pointer flex items-center gap-1.5 ${
              activeCategory === "academic"
                ? "bg-background text-emerald-500 shadow-sm border border-emerald-500/30 font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-emerald-500" />
            <span>{lang === "fr" ? "Académiques & Perso" : "Academic & Personal"}</span>
          </button>
        </div>
      </div>

      <div className="border-b border-dashed border-border overflow-hidden">
        <ImageMarquee />
      </div>

      {/* Projects List with Smooth Organic Entrance Transition */}
      <div
        key={activeCategory}
        className="relative divide-y divide-dashed divide-border transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] animate-in fade-in slide-in-from-bottom-2"
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <CollapsibleGrid
              key={project.name}
              isExpanded={activeIndex === index}
              onToggle={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              rightActions={
                <Link
                  href={`/projects/${generateSlug(project.name)}`}
                  onClick={handleProjectClick}
                  className="p-1.5 rounded-lg border border-dashed border-border/60 bg-muted/20 text-muted-foreground hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-500 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group/eye flex items-center justify-center cursor-pointer"
                  aria-label={`View ${project.name} details`}
                  title={
                    lang === "fr"
                      ? "Voir les détails du projet"
                      : "View project details"
                  }
                >
                  <Eye className="w-4 h-4 transition-transform duration-300 group-hover/eye:scale-115 group-hover/eye:text-emerald-500" />
                </Link>
              }
              header={
                <div className="flex items-center gap-3">
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <h3 className="font-medium text-base">
                      <ImageTooltip
                        imageSrc={
                          project.images?.hero || "/placeholder-image.png"
                        }
                        imageAlt={`${project.name} preview`}
                      >
                        <Link
                          href={`/projects/${generateSlug(project.name)}`}
                          className="link"
                          onClick={handleProjectClick}
                        >
                          {project.name}
                          <MousePointerClick className="inline-block w-5 h-5 ml-1 align-text-bottom text-muted-foreground" />
                        </Link>
                      </ImageTooltip>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.tagline[lang]}
                    </p>
                  </div>
                </div>
              }
            >
              {/* Collapsible Details */}
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground text-justify leading-relaxed">
                  {project.overview[lang]}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs badge text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CollapsibleGrid>
          ))
        ) : (
          <div className="p-8 text-center text-sm text-muted-foreground font-mono">
            {lang === "fr"
              ? "Aucun projet dans cette catégorie pour le moment."
              : "No projects in this category yet."}
          </div>
        )}
      </div>
    </section>
  );
}
