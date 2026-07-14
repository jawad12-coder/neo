import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { HomePlanner } from "@/components/HomePlanner";
import { ServiceIndex } from "@/components/ServiceIndex";
import { FAQ } from "@/components/FAQ";
import { faqs, site } from "@/content/site";

const process = [
  ["Discover", "Understand the site, ambition, priorities and commercial boundaries."],
  ["Define", "Turn the brief into a coordinated scope, programme and decision path."],
  ["Design", "Shape space, massing, materials and the experience of everyday use."],
  ["Document", "Coordinate technical information, specifications and responsibilities."],
  ["Construct", "Execute through defined milestones, reporting and quality reviews."],
  ["Deliver", "Review, document and close out the project for confident handover."],
];

export default function Home() {
  return <>
    <section className="neo-hero">
      <Image src="/images/neo-editorial-hero.png" alt="Editorial visual of a contemporary concrete villa at night" fill priority sizes="100vw"/>
      <div className="neo-hero-grade"/><div className="architectural-grid" aria-hidden="true"/>
      <div className="container neo-hero-copy"><span className="status-chip"><i/> Project visual / 01</span><p>Architecture · Build · Interior</p><h1>We shape<br/>space into<br/><em>experience.</em></h1></div>
      <aside className="hero-project-side"><span>01</span><p>Neo House<br/><small>Editorial concept</small></p><div><button aria-label="Previous project">←</button><button aria-label="Next project">→</button></div></aside>
      <div className="hero-data"><div><span>Project type</span><strong>Residential concept</strong></div><div><span>Location</span><strong>Islamabad / PK</strong></div><div><span>Plot size</span><strong>Pending verification</strong></div><div><span>Completion</span><strong>Editorial visual</strong></div><Link href="/projects">Explore project <ArrowUpRight/></Link></div>
      <a className="neo-scroll" href="#project-planner"><ArrowDown/> Scroll</a>
    </section>

    <section id="project-planner" className="neo-planner"><div className="container"><header><span>Start with the essentials</span><h2>Plan your project</h2></header><HomePlanner/></div></section>

    <section className="neo-proof"><div className="container">{[["01","Islamabad studio"],["02","Architecture to turnkey"],["03","DHA · Bahria · Rawalpindi"],["04","Eight coordinated services"]].map(([number,text])=><div key={number}><span>{number}</span><p>{text}</p></div>)}</div></section>

    <section className="neo-about"><div className="container about-editorial">
      <span className="rotated-label">01 / Perspective</span><div className="about-visual"><Image src="/images/neo-hero.png" fill alt="Editorial architectural exterior used as a project placeholder" sizes="(max-width:900px) 100vw, 48vw"/><span>Material / Stone + glass</span></div>
      <div className="about-statement"><p className="neo-label">Neo / Islamabad</p><h2>Architecture is not only what we build.<br/><em>It is how people experience space.</em></h2><div className="about-notes"><p>One coordinated studio for architecture, grey structure, turnkey construction, interiors, renovation and project management.</p><Link href="/about">Our point of view <ArrowUpRight/></Link></div></div>
      <div className="about-detail"><Image src="/images/neo-google-office.jpg" fill alt="Neo studio interior in DHA Phase II Islamabad" sizes="260px"/></div>
    </div></section>

    <section className="neo-services"><div className="container neo-section-intro"><span>02 / Capabilities</span><h2>One studio.<br/>Six disciplines.</h2><p>Move through the index to explore the connected services behind a more coherent project journey.</p></div><div className="container"><ServiceIndex/></div></section>

    <section className="neo-projects"><div className="container neo-section-intro dark-text"><span>03 / Selected work</span><h2>Projects as<br/>living narratives.</h2><div className="sticky-filter"><b>All</b><span>Residential</span><span>Commercial</span><span>Interiors</span><span>In progress</span></div></div>
      <div className="container project-composition">
        <article className="project-hero-card"><Link href="/projects"><div><Image src="/images/neo-editorial-hero.png" fill alt="Editorial architectural concept visual" sizes="90vw"/><span>Editorial visual</span></div><footer><b>01</b><h3>Neo House</h3><p>Residential concept · Islamabad</p><ArrowUpRight/></footer></Link></article>
        <article className="project-split"><div><Image src="/images/neo-hero.png" fill alt="Editorial contemporary villa visual" sizes="(max-width:800px) 100vw, 48vw"/></div><div><span>02 / Residence</span><h3>House of<br/>Quiet Planes</h3><p>DHA Islamabad<br/>Area and year pending verification</p><Link href="/projects">View case study <ArrowRight/></Link></div></article>
        <div className="project-duo"><article><Image src="/images/neo-google-office.jpg" fill alt="Neo studio interior" sizes="45vw"/><span>03 / Interior study</span></article><article><Image src="/images/neo-hero.png" fill alt="Editorial material and facade study" sizes="45vw"/><span>04 / Material study</span></article></div>
      </div>
    </section>

    <section className="project-story"><Image src="/images/neo-editorial-hero.png" fill alt="Cinematic editorial villa story" sizes="100vw"/><div/><div className="container"><span>Story / 001</span><h2>Concrete.<br/>Shadow.<br/><em>Warmth.</em></h2><p>An editorial study in contrast—monolithic form balanced by light, landscape and the rituals of home.</p><Link href="/projects">Enter the story <ArrowUpRight/></Link></div></section>

    <section className="role-stack">
      {[['Architect','We translate lifestyle, context and function into precise spatial ideas.','/images/neo-hero.png'],['Builder','We coordinate execution around defined scope, quality reviews and clear reporting.','/images/neo-editorial-hero.png'],['Developer','We shape distinctive opportunities around usability, identity and long-term value.','/images/neo-google-office.jpg']].map(([role,description,image],index)=><article key={role} style={{top:`${82+index*18}px`}}><Image src={image} fill alt={`${role} editorial architecture visual`} sizes="100vw"/><div/><span>0{index+1}</span><h2>{role}</h2><p>{description}</p><Link href="/about">Explore role <ArrowUpRight/></Link></article>)}
    </section>

    <section className="neo-process"><div className="container neo-section-intro"><span>05 / Method</span><h2>From first thought<br/>to final detail.</h2></div><div className="container process-rail">{process.map(([title,description],index)=><article className={index===0?"active":""} key={title}><span>0{index+1}</span><h3>{title}</h3><p>{description}</p><i/></article>)}</div></section>

    <section className="neo-testimonials"><div className="container"><span className="rotated-label">06 / Trust</span><div><p className="neo-label">Client perspective</p><h2>Proof belongs<br/>to real people.</h2></div><blockquote>Genuine reviews, names, project locations and ratings will appear here only after client approval.<small>Verified testimonials reserved / no identities invented</small></blockquote></div></section>

    <section className="neo-faq"><div className="container faq-grid"><div><p className="neo-label">07 / Questions</p><h2>Before we<br/>begin.</h2><p>Clear answers for a more useful first conversation.</p></div><FAQ items={faqs.slice(0,5)}/></div></section>

    <section className="neo-final"><div className="architectural-grid"/><div className="container"><span>Ready when you are</span><h2>Let’s create<br/>something<br/><em>exceptional.</em></h2><Link href="/request-a-quote">Start a project <ArrowUpRight/></Link><div className="final-contact"><a href={`tel:${site.tel}`}>{site.phone}</a><a href={site.whatsapp}><MessageCircle/> WhatsApp</a><p>DHA Phase II / Islamabad</p></div></div></section>
  </>;
}
