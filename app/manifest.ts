import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Neo Design and Constructions", short_name: "NEO", description: "Architectural design and construction in Islamabad and Rawalpindi.", start_url: "/", display: "standalone", background_color: "#f3f0e9", theme_color: "#171813" };
}
