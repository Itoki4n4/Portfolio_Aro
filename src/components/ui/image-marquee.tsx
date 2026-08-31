"use client";

import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/app/constants/data";
import { generateSlug } from "@/lib/utils";

export default function ImageMarquee() {
  const projectImages = PROJECTS.flatMap((project) => {
    const list = [];
    if (project.images?.hero) {
      list.push({
        src: project.images.hero,
        alt: `${project.name} hero screen`,
        projectName: project.name,
        slug: generateSlug(project.name),
      });
    }
    if (project.images?.gallery) {
      project.images.gallery.forEach((img) => {
        list.push({
          src: img.src,
          alt: img.alt || `${project.name} screenshot`,
          projectName: project.name,
          slug: generateSlug(project.name),
        });
      });
    }
    return list;
  });

  // Duplicate for seamless infinite marquee loop
  const marqueeList = [...projectImages, ...projectImages];

  return (
    <>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>

      <div className="relative w-full overflow-hidden py-1">
        <div className="absolute left-0 top-0 bottom-0 w-16 backdrop-blur-sm [mask-image:linear-gradient(to_right,black,transparent)] pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 backdrop-blur-sm [mask-image:linear-gradient(to_left,black,transparent)] pointer-events-none z-10" />

        <div className="flex w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
          {marqueeList.map((img, i) => (
            <Link
              key={`${img.src}-${i}`}
              href={`/projects/${img.slug}`}
              className="flex-shrink-0 border-r border-dashed border-border p-2 flex flex-col items-center justify-center group cursor-pointer"
            >
              <div className="relative w-[220px] h-32 overflow-hidden rounded-lg border border-border/60 group-hover:border-emerald-500/50 transition-all duration-300">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="220px"
                  className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                  <span className="text-[11px] font-mono text-emerald-400 font-medium line-clamp-1 bg-black/80 px-2 py-1 rounded border border-emerald-500/30">
                    {img.projectName}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
