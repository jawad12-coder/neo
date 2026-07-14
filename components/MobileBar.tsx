import Link from "next/link";
import { MessageCircle, Phone, Send } from "lucide-react";
import { site } from "@/content/site";
export function MobileBar(){return <div className="mobile-bar"><a href={`tel:${site.tel}`}><Phone/>Call</a><a href={site.whatsapp}><MessageCircle/>WhatsApp</a><Link href="/request-a-quote"><Send/>Get quote</Link></div>}
