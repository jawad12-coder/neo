import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Privacy Policy", description: "How Neo Design and Constructions handles website enquiries and personal information.", path: "/privacy-policy" });
export default function PrivacyLayout({ children }: { children: React.ReactNode }) { return children; }
