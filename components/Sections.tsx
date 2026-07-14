import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { site } from "@/content/site";

export function PageHero({eyebrow,title,text}:{eyebrow:string,title:string,text:string}){return <section className="page-hero"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{text}</p></div></section>}
export function CTA(){return <section className="cta-band"><div className="container"><div><p className="eyebrow">Let’s discuss your project</p><h2>Planning a construction<br/>or design project?</h2></div><p>Share your plot size, location, project type and requirements to begin the conversation.</p><div className="cta-actions"><Link className="button button-light" href="/request-a-quote">Request a quote <ArrowRight/></Link><a href={site.whatsapp} className="round-button" aria-label="WhatsApp Neo"><MessageCircle/></a><a href={`tel:${site.tel}`} className="round-button" aria-label="Call Neo"><Phone/></a></div></div></section>}
export function Breadcrumb({label}:{label:string}){return <div className="container breadcrumb"><Link href="/">Home</Link><span>/</span><span>{label}</span></div>}
