import { FAQ } from "@/components/FAQ";
import { CTA, PageHero } from "@/components/Sections";
import { faqs } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Construction FAQs", description: "Answers about architecture, construction scopes, estimates, project changes, materials and overseas coordination.", path: "/faqs" });

export default function FAQs() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageHero eyebrow="Frequently asked questions" title="Ask early. Build with clarity." text="Straightforward guidance for planning your first conversation with a design and construction team."/>
    <section className="content-section faq-page"><div className="container"><FAQ items={faqs}/></div></section>
    <CTA/>
  </>;
}
