import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, site } from "@/content/site";

export function Footer() {
  return <footer className="neo-footer">
    <div className="container neo-footer-top"><p>Neo Design + Constructions</p><a href="#top">Back to top ↑</a></div>
    <div className="container neo-footer-name" aria-hidden="true">NEO</div>
    <div className="container neo-footer-grid">
      <div className="footer-statement"><span>Architecture / Construction / Interiors</span><h2>Space, shaped<br/>with intent.</h2><Link href="/request-a-quote">Start a project <ArrowUpRight/></Link></div>
      <nav aria-label="Footer navigation"><span>Explore</span><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/process">Process</Link><Link href="/blog">Insights</Link><Link href="/contact">Contact</Link></nav>
      <nav aria-label="Footer services"><span>Services</span>{services.slice(0,6).map(service=><Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}</nav>
      <address><span>Studio</span><p>{site.address}</p><a href={`tel:${site.tel}`}>{site.phone}</a><a href={site.whatsapp}>WhatsApp ↗</a>{site.email&&<a href={`mailto:${site.email}`}>{site.email}</a>}</address>
    </div>
    <div className="container neo-footer-bottom"><span>© {new Date().getFullYear()} Neo Design and Constructions</span><div><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div><span>Islamabad / Pakistan</span></div>
  </footer>;
}
