"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
export function FAQ({items}: {items: string[][]}){
 const [active,setActive]=useState(0);
 return <div className="faq-list">{items.map(([q,a],i)=><div className={`faq-item ${active===i?"active":""}`} key={q}><button onClick={()=>setActive(active===i?-1:i)} aria-expanded={active===i}><span>{String(i+1).padStart(2,"0")}</span>{q}<Plus/></button><div className="faq-answer"><p>{a}</p></div></div>)}</div>
}
