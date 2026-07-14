import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Terms and Conditions", description: "Terms for using the Neo Design and Constructions website and its informational content.", path: "/terms" });
export default function TermsLayout({ children }: { children: React.ReactNode }) { return children; }
