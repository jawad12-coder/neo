import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { CTA, PageHero, Breadcrumb } from "@/components/Sections";
import { services, site } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata({ title: `${service.title} in Islamabad`, description: service.summary, path: `/services/${service.slug}` });
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", name: service.title, description: service.summary, url: `${site.url}/services/${service.slug}`, provider: { "@id": `${site.url}/#business` }, areaServed: ["Islamabad", "Rawalpindi", "DHA Islamabad", "Bahria Town"] },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
        { "@type": "ListItem", position: 3, name: service.title, item: `${site.url}/services/${service.slug}` },
      ] },
    ],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageHero eyebrow={`Services · ${service.eyebrow}`} title={service.hero} text={service.summary}/>
    <Breadcrumb label={service.title}/>
    <section className="content-section"><div className="container service-detail-intro"><div><p className="eyebrow">What’s involved</p><h2>Scope built around the project.</h2></div><div className="prose"><p>Every successful project starts with clarity. Neo considers the site, intended use, aesthetics, practical requirements, budget awareness and relevant local requirements before defining the work.</p><div className="check-grid">{service.items.map((item) => <div key={item}><Check/>{item}</div>)}</div><p className="service-note">Final services, deliverables, material specifications and revision allowances depend on the written and agreed project scope.</p><Link className="button button-dark" href="/request-a-quote">Discuss this service <ArrowRight/></Link></div></div></section>
    <section className="content-section dark-section"><div className="container"><p className="eyebrow light">A coordinated sequence</p><h2>How the work may progress.</h2><div className="step-grid">{service.process.map((step, index) => <div className="step-card" key={step}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step}</h3></div>)}</div></div></section>
    <CTA/>
  </>;
}
