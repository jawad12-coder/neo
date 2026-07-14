"use client";
import { useEffect, useRef } from "react";

export function Experience(){
  const glow=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const selectors=".section-head,.split-heading,.service-row,.project-card,.philosophy-image,.philosophy-copy,.studio-copy,.studio-photo,.faq-item,.content-grid,.value-card,.info-card,.service-overview-card,.timeline-step,.post-card,.contact-layout,.step-card,.project-facts,.legal>*,.cta-band .container,.home-about-grid>*,.premium-section-head>*,.editorial-service,.work-feature,.roles-grid article,.six-step-line article,.why-content>*,.testimonial-grid>*";
    const els=[...document.querySelectorAll<HTMLElement>(selectors)];
    els.forEach((el,i)=>{el.classList.add("reveal-ready");el.style.setProperty("--reveal-delay",`${Math.min(i%4,3)*70}ms`)});
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:"0px 0px -40px"});
    els.forEach(el=>observer.observe(el));
    const move=(event:PointerEvent)=>{if(glow.current&&matchMedia("(pointer:fine)").matches){glow.current.style.transform=`translate3d(${event.clientX}px,${event.clientY}px,0)`}};
    let frame=0;
    const progress=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const available=document.documentElement.scrollHeight-innerHeight;document.documentElement.style.setProperty("--scroll-progress",`${available?scrollY/available*100:0}%`);document.documentElement.style.setProperty("--parallax",`${Math.min(scrollY*.055,55)}px`)})};
    addEventListener("pointermove",move,{passive:true});addEventListener("scroll",progress,{passive:true});progress();
    return()=>{observer.disconnect();cancelAnimationFrame(frame);removeEventListener("pointermove",move);removeEventListener("scroll",progress)};
  },[]);
  return <><div className="scroll-progress"/><div ref={glow} className="cursor-glow" aria-hidden="true"/></>
}
