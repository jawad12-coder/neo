import { Building2, DraftingCompass, Hammer, HardHat, House, Layers3, Paintbrush, Ruler } from "lucide-react";

export const site = {
  name: "Neo Design and Constructions",
  shortName: "NEO",
  phone: "+92 333 5151848",
  tel: "+923335151848",
  whatsapp: "https://wa.me/923335151848?text=Hello%20Neo%20Design%20and%20Constructions%2C%20I%20would%20like%20to%20discuss%20my%20construction%20or%20design%20project.",
  email: "",
  hours: "10:00 AM–6:00 PM · Check Google for current opening days",
  address: "Plaza 9 & 10, D Tipu Boulevard, Sector D, DHA Phase II, Islamabad 45730, Pakistan",
  url: "https://neodesignconstruction.com"
};

export const services = [
  { slug: "architectural-design", title: "Architectural Design", eyebrow: "Plan with purpose", icon: DraftingCompass, summary: "Considered layouts, elevations, visualisations and coordinated drawings shaped around your site and requirements.", hero: "Architectural Design for Functional and Distinctive Spaces", items: ["Site and requirement review", "Space planning and floor plans", "Elevation and 3D visualisation", "Working drawing coordination"], process: ["Requirement discussion", "Site and plot review", "Concept planning", "Layout development", "Elevation development", "Client revisions", "Working drawings", "Final design package"] },
  { slug: "residential-construction", title: "Residential Construction", eyebrow: "Homes made considered", icon: House, summary: "Coordinated construction for new homes, villas, basements, extensions and multi-storey residences.", hero: "Residential Construction, Carefully Coordinated", items: ["Site mobilisation", "Structural and masonry works", "MEP coordination", "Finishing and final review"], process: ["Planning", "Site mobilisation", "Structural works", "Masonry", "MEP coordination", "Plaster and waterproofing", "Finishes", "Handover"] },
  { slug: "commercial-construction", title: "Commercial Construction", eyebrow: "Built for business", icon: Building2, summary: "Practical commercial spaces balancing circulation, durability, services, brand needs and delivery planning.", hero: "Commercial Spaces Designed to Perform", items: ["Offices and retail", "Plazas and mixed-use", "Clinics and restaurants", "Fit-out and finishing"], process: ["Business brief", "Space planning", "Services coordination", "Construction scheduling", "Execution", "Fit-out", "Review", "Documentation"] },
  { slug: "grey-structure", title: "Grey Structure", eyebrow: "Strong from within", icon: HardHat, summary: "Core structural construction with documented scope, specifications and milestone-based quality reviews.", hero: "A Sound Structure Starts with Clarity", items: ["Excavation and foundation", "Reinforced concrete frame", "Brick or block masonry", "Plaster and concealed services"], process: ["Site setup", "Excavation", "Foundation", "Structure", "Masonry", "Services", "Plaster", "Quality review"] },
  { slug: "turnkey-construction", title: "Turnkey Construction", eyebrow: "One coordinated journey", icon: Layers3, summary: "A coordinated route from planning and procurement through construction, finishes and final handover.", hero: "From First Drawing to Final Handover", items: ["Design coordination", "Cost and procurement planning", "Construction execution", "Finishes and handover"], process: ["Consultation", "Scope definition", "Design", "Estimate", "Agreement", "Procurement", "Execution", "Handover"] },
  { slug: "interior-design", title: "Interior Design", eyebrow: "Spaces with character", icon: Paintbrush, summary: "Interior planning, materials, lighting and bespoke details that bring function and atmosphere together.", hero: "Interiors Designed Around Everyday Life", items: ["Space and furniture planning", "Materials and colour direction", "Lighting and ceiling concepts", "Kitchen and wardrobe design"], process: ["Discovery", "Site measure", "Concept", "Mood and materials", "Visualisation", "Documentation", "Execution support", "Styling"] },
  { slug: "renovation", title: "Renovation", eyebrow: "Renew what matters", icon: Hammer, summary: "Thoughtful remodelling for homes, offices and retail spaces with careful existing-condition planning.", hero: "Reimagine the Space You Already Have", items: ["Existing-condition review", "Layout improvements", "Kitchen and bathroom upgrades", "Interior and exterior renewal"], process: ["Site review", "Needs assessment", "Design proposal", "Budget planning", "Protection and removal", "Construction", "Finishes", "Review"] },
  { slug: "project-management", title: "Project Management", eyebrow: "Clarity at every stage", icon: Ruler, summary: "Planning, site coordination, progress reporting and quality-focused supervision across project stages.", hero: "Project Coordination with Greater Visibility", items: ["Programme and scope tracking", "Site coordination", "Quality observations", "Progress documentation"], process: ["Scope review", "Programme", "Team coordination", "Site monitoring", "Reporting", "Change tracking", "Quality review", "Close-out"] }
];

export const projects = [
  { slug: "modern-residence-dha", title: "Modern Residence", location: "DHA Phase II", type: "Residential", area: "[Plot / Covered Area]", status: "Project placeholder", crop: "52% 42%" },
  { slug: "contemporary-house-bahria", title: "Contemporary House", location: "Bahria Town", type: "Residential", area: "[Plot / Covered Area]", status: "Project placeholder", crop: "75% 50%" },
  { slug: "luxury-interior-islamabad", title: "Refined Interior", location: "Islamabad", type: "Interior", area: "[Covered Area]", status: "Project placeholder", crop: "90% 50%" },
  { slug: "commercial-plaza-rawalpindi", title: "Commercial Plaza", location: "Rawalpindi", type: "Commercial", area: "[Plot / Covered Area]", status: "Project placeholder", crop: "35% 45%" },
  { slug: "residential-renovation", title: "Residential Renewal", location: "Islamabad", type: "Renovation", area: "[Covered Area]", status: "Project placeholder", crop: "60% 70%" },
  { slug: "grey-structure-dha", title: "Ongoing Structure", location: "DHA Islamabad", type: "Grey Structure", area: "[Plot / Covered Area]", status: "Project placeholder", crop: "45% 30%" }
];

export const faqs = [
  ["What areas do you serve?", "Neo is based in DHA Phase II, Islamabad and primarily serves Islamabad, Rawalpindi, DHA Islamabad, Bahria Town and nearby housing societies. Confirm site coverage with the team for your location."],
  ["Do you provide architectural design and construction together?", "Neo coordinates architectural and construction services. The exact combination of services and deliverables is defined in a written project scope."],
  ["What is included in grey-structure construction?", "A typical scope may include excavation, foundations, reinforced concrete, masonry, plaster and selected concealed services. Inclusions, brands and exclusions must be confirmed in the quotation."],
  ["Can overseas Pakistanis monitor projects remotely?", "Possible arrangements include scheduled calls, progress photographs, videos, approval records and milestone reports. Frequency and project authority are agreed before work begins."],
  ["How can I request an estimate?", "Share your location, plot or covered area, drawings if available, required service and expected timeline. Final pricing requires a review of the site, specifications and complete scope."],
  ["How are project changes handled?", "Changes should be documented with their cost and programme implications, then approved before related work proceeds."],
  ["Can I select preferred materials?", "Material selection can be coordinated against the agreed specification and budget. Availability and approved alternatives should be documented."],
  ["Do you provide 3D exterior designs?", "3D exterior visualisation may be included in an architectural design scope. Confirm the number of views and revisions in your proposal."]
];

export const posts = [
  { slug: "grey-structure-vs-turnkey", title: "Grey Structure vs Turnkey Construction", category: "Construction Guides", excerpt: "Understand where each delivery model begins, ends, and what to clarify before comparing quotations." },
  { slug: "before-building-islamabad", title: "What to Prepare Before Building in Islamabad", category: "Project Planning", excerpt: "A practical starting list covering documents, requirements, site information and design decisions." },
  { slug: "monitor-project-from-abroad", title: "Monitoring a Building Project from Abroad", category: "Overseas Client Advice", excerpt: "Build a clear communication rhythm around approvals, records, milestones and decision-making authority." }
];
