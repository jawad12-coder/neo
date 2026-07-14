import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { projects } from "@/content/site";
export function ProjectCard({project, index}: {project: (typeof projects)[number], index: number}){
  return <article className={`project-card project-${index}`}><Link href={`/projects/${project.slug}`} className="project-image"><Image src="/images/neo-hero.png" fill alt="Editorial architectural image placeholder" sizes="(max-width: 700px) 100vw, 50vw" style={{objectPosition: project.crop}}/><span className="sample-tag">Editorial placeholder</span><span className="project-open"><ArrowUpRight/></span></Link><div className="project-meta"><div><p>{project.type} · {project.location}</p><h3>{project.title}</h3></div><span>{String(index + 1).padStart(2, "0")}</span></div></article>
}
