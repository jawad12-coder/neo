"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site";

const serviceSlugs = ["architectural-design", "residential-construction", "turnkey-construction", "interior-design", "renovation", "project-management"];
const indexed = serviceSlugs.map(slug => services.find(service => service.slug === slug)!);
const imagery = ["/images/neo-editorial-hero.png", "/images/neo-hero.png", "/images/neo-editorial-hero.png", "/images/neo-google-office.jpg", "/images/neo-hero.png", "/images/neo-editorial-hero.png"];

export function ServiceIndex() {
  const [active, setActive] = useState(0);
  const current = indexed[active];
  return <div className="neo-service-index">
    <div className="service-index-list">{indexed.map((service, index) => <Link href={`/services/${service.slug}`} key={service.slug} className={active === index ? "active" : ""} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)}>
      <span>{String(index + 1).padStart(2, "0")}</span><h3>{service.title}</h3><ArrowUpRight/>
    </Link>)}</div>
    <div className="service-stage"><Image key={imagery[active]} src={imagery[active]} fill alt={`${current.title} editorial architectural visual`} sizes="(max-width:900px) 100vw, 48vw"/><div className="service-stage-shade"/><span className="stage-coordinate">33.6844° N / 73.0479° E</span><div className="service-stage-copy"><span>{String(active + 1).padStart(2, "0")}</span><p>{current.summary}</p><Link href={`/services/${current.slug}`}>Explore service <ArrowUpRight/></Link></div></div>
  </div>;
}
