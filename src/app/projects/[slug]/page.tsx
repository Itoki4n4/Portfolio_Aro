import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PROJECTS, BASE_URL, ABOUT_ME } from "@/app/constants/data";
import { generateSlug } from "@/lib/utils";
import SectionSeparator from "@/components/ui/section-separator";
import ProjectDetailClient from "./project-detail-client";

// =============================================
// METADATA GENERATION (Server-side)
// =============================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find(
    (project) => generateSlug(project.name) === slug
  );

  if (!project) {
    return { title: "Project Not Found" };
  }

  const desc = typeof project.description === "string" ? project.description : project.description.en;

  return {
    title: project.name,
    description: desc,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.name} | ${ABOUT_ME.name} Portfolio`,
      description: desc,
      url: `${BASE_URL}/projects/${slug}`,
      siteName: `${ABOUT_ME.name} Portfolio`,
      type: "website",
      images: project.images?.hero ? [{ url: project.images.hero }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | ${ABOUT_ME.name} Portfolio`,
      description: desc,
      images: project.images?.hero ? [project.images.hero] : [],
    },
  };
}

const getProjectBySlug = (slug: string) => {
  return PROJECTS.find((project) => generateSlug(project.name) === slug);
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: generateSlug(project.name),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="font-sans min-h-screen flex flex-col items-center relative px-2">
      <main className="relative z-10 max-w-3xl w-full mx-auto border-x border-dashed border-border bg-background">
        <SectionSeparator />
        <ProjectDetailClient project={project} />
        <SectionSeparator />
      </main>
    </div>
  );
}
