import type { MetadataRoute } from "next";
import { services, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/services", "/process", "/overseas-clients", "/faqs", "/contact", "/request-a-quote", "/privacy-policy", "/terms", ...services.map((service) => `/services/${service.slug}`)];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: "2026-07-14",
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.9 : 0.7,
  }));
}
