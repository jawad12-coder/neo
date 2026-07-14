import type { Metadata } from "next";
import { site } from "@/content/site";

type SeoOptions = { title: string; description: string; path: string; noIndex?: boolean };

export function createMetadata({ title, description, path, noIndex = false }: SeoOptions): Metadata {
  const canonical = path === "/" ? site.url : `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website", locale: "en_PK", siteName: site.name, title, description, url: canonical,
      images: [{ url: "/images/neo-hero.png", width: 1717, height: 916, alt: `${site.name} architectural design and construction` }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/neo-hero.png"] },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
  };
}
