"use client";

import { TESTIMONIALS, UI_TEXT } from "@/app/constants/data";
import { useLanguage } from "@/context/language-context";

const Testimonials = () => {
  const { lang } = useLanguage();

  return (
    <section id="testimonials">
      <div className="flex items-center py-2 px-4 border-b border-dashed border-border">
        <h2 className="text-2xl font-semibold flex items-center">
          {UI_TEXT.sections.testimonials[lang]}
        </h2>
      </div>
      <div className={`grid grid-cols-1 ${TESTIMONIALS.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} divide-y md:divide-y-0 md:divide-x divide-dashed divide-border relative`}>
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.name}
            className="flex flex-col h-full relative p-4"
          >
            <div className="flex-1">
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10 text-justify">
                {testimonial.content[lang]}
              </p>
            </div>

            <footer className="mt-2 flex flex-col space-y-0.5">
              <p className="font-medium text-foreground text-sm tracking-tight leading-tight">
                {testimonial.name}
              </p>
              <span className="text-xs text-muted-foreground opacity-90">
                {testimonial.role[lang]}
              </span>
            </footer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
