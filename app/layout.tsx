import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./secondary.css";
import "./luxury.css";
import "./home-premium.css";
import "./neo-direction.css";
import "./neo-global.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { CookieNotice } from "@/components/CookieNotice";
import { Experience } from "@/components/Experience";
import { PageTransition } from "@/components/PageTransition";
import { site } from "@/content/site";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], variable: "--font-serif", weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Construction Company in Islamabad | Neo Design and Constructions", template: "%s | Neo Design and Constructions" },
  description: "Architectural design, residential and commercial construction, grey structure, turnkey construction, interiors and renovation in Islamabad and Rawalpindi.",
  alternates: { canonical: site.url },
  openGraph: { type: "website", locale: "en_PK", siteName: site.name, url: site.url, images: [{url:"/images/neo-hero.png",width:1717,height:916,alt:"Neo Design and Constructions in Islamabad"}] },
  twitter: { card: "summary_large_image", images: ["/images/neo-hero.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({children}:{children:React.ReactNode}){
 const schema={"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":`${site.url}/#website`,url:site.url,name:site.name,alternateName:site.shortName,inLanguage:"en-PK",publisher:{"@id":`${site.url}/#business`}},{"@type":["LocalBusiness","GeneralContractor"],"@id":`${site.url}/#business`,name:site.name,url:site.url,image:`${site.url}/images/neo-hero.png`,telephone:site.tel,priceRange:"PKR",address:{"@type":"PostalAddress",streetAddress:"Plaza 9 & 10, D Tipu Boulevard, Sector D, DHA Phase II",addressLocality:"Islamabad",postalCode:"45730",addressCountry:"PK"},geo:{"@type":"GeoCoordinates",latitude:33.5374014,longitude:73.1694447},hasMap:"https://www.google.com/maps/place/Neo+Design+and+Constructions/@33.5374014,73.1694447,17z",areaServed:["Islamabad","Rawalpindi","DHA Islamabad","Bahria Town"],knowsAbout:["Architectural design","Residential construction","Commercial construction","Grey structure","Turnkey construction","Interior design","Renovation"]}]};
 return <html lang="en"><body id="top" className={`${sans.variable} ${serif.variable}`}><a className="skip-link" href="#main">Skip to content</a><Experience/><Header/><PageTransition>{children}</PageTransition><Footer/><MobileBar/><CookieNotice/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>
}
