"use client";

import { SKILLS_CATEGORIES, UI_TEXT } from "@/app/constants/data";
import { useLanguage } from "@/context/language-context";

const Skills = () => {
  const { lang } = useLanguage();

  return (
    <section id="skills">
      {/* Section Header */}
      <div className="flex items-center py-2 px-4 border-b border-dashed border-border">
        <h2 className="text-2xl font-semibold flex items-center">
          {UI_TEXT.sections.skills[lang]}
        </h2>
      </div>

      {/* Categorized Skills Grid */}
      <div className="divide-y divide-dashed divide-border">
        {SKILLS_CATEGORIES.map((catGroup, index) => (
          <div key={index} className="p-4 space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider font-mono">
              // {catGroup.category[lang]}
            </h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(42px,1fr))] gap-2 pt-1">
              {catGroup.skills.map((skill) => (
                <button
                  key={skill}
                  aria-label={skill}
                  title={skill}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-115 transition-transform duration-200 bg-muted/20 border border-border/50 hover:border-border"
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${skill}`}
                    alt={skill}
                    width={32}
                    height={32}
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
