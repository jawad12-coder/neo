"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { services, site } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const update = () => setSolid(scrollY > 24);
    update();
    addEventListener("scroll", update, { passive: true });
    return () => removeEventListener("scroll", update);
  }, []);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    addEventListener("keydown", close);
    return () => { document.body.classList.remove("menu-open"); removeEventListener("keydown", close); };
  }, [open]);

  const links = [["About", "/about"], ["Projects", "/projects"], ["Process", "/process"], ["Insights", "/blog"], ["Contact", "/contact"]];
  const current = (href: string) => href === "/" ? path === href : path.startsWith(href);

  return <header className={`header ${solid || path !== "/" ? "solid" : ""}`}>
    <div className="nav-shell">
      <Link className="brand" href="/" aria-label="Neo Design and Constructions home"><span className="brand-mark">N</span><span><b>NEO</b><small>DESIGN + CONSTRUCTIONS</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link className={current("/about") ? "active" : ""} aria-current={current("/about") ? "page" : undefined} href="/about">About</Link>
        <div className="nav-drop"><Link className={current("/services") ? "active" : ""} href="/services">Services <span aria-hidden="true">⌄</span></Link><div className="drop-menu">{services.map(service => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}</div></div>
        {links.slice(1).map(([label, href]) => <Link className={current(href) ? "active" : ""} aria-current={current(href) ? "page" : undefined} key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="nav-actions">
        <a className="icon-link" href={site.whatsapp} aria-label="Chat with Neo on WhatsApp"><MessageCircle size={18}/></a>
        <Link className="button button-sm" href="/request-a-quote">Get a quote</Link>
        <button className="menu-toggle" onClick={() => setOpen(value => !value)} aria-controls="mobile-navigation" aria-expanded={open} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      </div>
    </div>
    <div id="mobile-navigation" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open} inert={!open ? true : undefined}>
      <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link>
      {services.map(service => <Link className="sub" key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}
      {links.slice(1).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      <Link className="button" href="/request-a-quote">Get a quote</Link>
    </div>
  </header>;
}
