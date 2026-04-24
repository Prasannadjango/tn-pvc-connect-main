import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Factory,
  Fingerprint,
  Globe,
  Handshake,
  Headphones,
  MapPinned,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import aiPvcLogo from "@/assets/ai-pvc-groups-logo.png";
import tnPvcLogo from "@/assets/tn-pvc-logo.png";
import siranthanFounder from "@/assets/siranthan-founder.png";
import srinivasanFounder from "@/assets/srinivasan-founder.jpg";
import anubrindhaFounder from "@/assets/anubrindha-founder.jpg";
import dexazReference from "@/assets/dexaz-reference.jpg";
import heroInterior from "@/assets/hero-interior.png";
import bentoPvcWall from "@/assets/bento-pvc-wall.png";
import bentoUpvcWindow from "@/assets/bento-upvc-window.png";
import bentoInstallation from "@/assets/bento-installation.png";
import bentoShowroom from "@/assets/bento-showroom.png";
import heroPartnership from "@/assets/hero-partnership.png";

export type NavItem = {
  label: string;
  path: string;
  shortLabel?: string;
};

export type SeoConfig = {
  title: string;
  description: string;
  keywords: string[];
};

export const siteName = "TN-PVC Interiors";
export const siteTagline = "Tamil Nadu's PVC and UPVC interiors connecting hub";
export const siteDescription =
  "TN-PVC Interiors, powered by AI-PVC Groups, connects manufacturers, distributors, contractors, labour teams, and customers across Tamil Nadu through a WhatsApp-first PVC and UPVC interior community.";

export const companyLinks = {
  website: "https://www.tnpvc.co.in",
  dexaz: "https://www.dexaz.in",
  srinivasanFacebook: "https://www.facebook.com/srinivasan.x",
  siranthanInstagram: "https://www.instagram.com/siranthan_siran?igsh=aDZ4dGx4cHdtdmZr",
};

export const brandAssets = {
  tnPvcLogo,
  aiPvcLogo,
  dexazReference,
  heroInterior,
  bentoPvcWall,
  bentoUpvcWindow,
  bentoInstallation,
  bentoShowroom,
  heroPartnership,
};

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Network", path: "/network" },
  { label: "Benefits", path: "/benefits" },
  { label: "Contractors", path: "/contractors" },
  { label: "Clients", path: "/clients" },
  { label: "Labour", path: "/labour" },
  { label: "AI-PVC Groups", path: "/ai-pvc-groups", shortLabel: "AI-PVC" },
  { label: "Siranthan Siran", path: "/siranthan-siran", shortLabel: "Siranthan" },
  { label: "Srinivasan", path: "/srinivasan" },
  { label: "Anubrindha", path: "/anubrindha" },
];

export const seoByPath: Record<string, SeoConfig> = {
  "/": {
    title: "TN-PVC Interiors | PVC & UPVC Network in Tamil Nadu",
    description:
      "Explore TN-PVC Interiors, the Tamil Nadu PVC and UPVC community connecting customers, contractors, labour teams, distributors, and AI-PVC Groups with WhatsApp-first coordination.",
    keywords: [
      "TN-PVC Interiors",
      "PVC interiors Tamil Nadu",
      "UPVC interiors Tamil Nadu",
      "Tamil Nadu contractors network",
      "AI-PVC Groups",
      "WhatsApp PVC community",
    ],
  },
  "/network": {
    title: "PVC network across Tamil Nadu | TN-PVC Interiors",
    description:
      "See how TN-PVC Interiors links manufacturers, distributors, contractors, labour teams, and customers across 38 districts in Tamil Nadu.",
    keywords: ["PVC network Tamil Nadu", "UPVC supply chain", "38 districts PVC", "Tamil Nadu distributors"],
  },
  "/benefits": {
    title: "Why join TN-PVC Interiors | Business benefits",
    description:
      "Learn how TN-PVC Interiors improves trust, lead generation, worker coordination, digital identity, and project delivery for the PVC and UPVC sector.",
    keywords: ["PVC business benefits", "digital ID PVC workers", "walkie talkie app interiors"],
  },
  "/contractors": {
    title: "For contractors | TN-PVC Interiors",
    description:
      "Discover how TN-PVC Interiors helps contractors with leads, pricing clarity, reliable materials, district reach, and stronger labour coordination.",
    keywords: ["PVC contractors Tamil Nadu", "interior contractors network", "UPVC contractor leads"],
  },
  "/clients": {
    title: "For clients | TN-PVC Interiors",
    description:
      "Find reliable PVC and UPVC interior solutions, transparent project planning, verified professionals, and smoother delivery for homes and businesses.",
    keywords: ["PVC interiors for homes", "UPVC cupboard work", "interior clients Tamil Nadu"],
  },
  "/labour": {
    title: "For labour teams | TN-PVC Interiors",
    description:
      "See how labour teams gain fair payments, stronger project allocation, identity systems, and safer coordination within the TN-PVC ecosystem.",
    keywords: ["PVC labour jobs", "fair payment labour contractors", "Tamil Nadu interior workers"],
  },
  "/ai-pvc-groups": {
    title: "AI-PVC Groups partnership | TN-PVC Interiors",
    description:
      "Understand the partnership between TN-PVC Interiors, AI-PVC Groups, and Dexaz Groups powering digital growth for the PVC and UPVC sector.",
    keywords: ["AI-PVC Groups", "Dexaz Groups", "PVC digital partnership"],
  },
  "/siranthan-siran": {
    title: "Siranthan Siran | Founder story | TN-PVC Interiors",
    description:
      "Read the founder story of Siranthan Siran, the young entrepreneur behind Dexaz Studio and the digital growth journey of TN-PVC Interiors.",
    keywords: ["Siranthan Siran", "Dexaz Studio founder", "young entrepreneur Tamil Nadu"],
  },
  "/srinivasan": {
    title: "Srinivasan | Co-founder story | TN-PVC Interiors",
    description:
      "Read Srinivasan's journey from village hardship and carpentry mastery to innovation leadership in PVC and UPVC interiors.",
    keywords: ["Srinivasan TNPVC", "PVC founder story", "wood to PVC interiors"],
  },
  "/anubrindha": {
    title: "Anubrindha | Managing director | TN-PVC Interiors",
    description:
      "Discover Anubrindha's operations leadership, family roots in interiors, and role in scaling TN-PVC Interiors across Tamil Nadu.",
    keywords: ["Anubrindha TNPVC", "operations manager interiors", "women leaders Tamil Nadu"],
  },
};

export const quickStats = [
  { label: "District reach in Tamil Nadu", value: "38" },
  { label: "Core network layers", value: "5" },
  { label: "Digital-first coordination", value: "24/7" },
  { label: "Focus areas", value: "PVC • UPVC" },
];

export const networkFlow = [
  {
    title: "Manufacturing companies",
    description: "PVC and UPVC product makers move the sector forward with scalable, eco-conscious material production.",
    icon: Factory,
  },
  {
    title: "South India distributors",
    description: "Regional distribution partners move materials efficiently into the Tamil Nadu project network.",
    icon: Building2,
  },
  {
    title: "District-level suppliers",
    description: "The platform aligns distributors with demand across all 38 districts for quicker delivery and better coordination.",
    icon: MapPinned,
  },
  {
    title: "Local contractors & shops",
    description: "Contractors collect measurements, prepare square-foot calculations, and convert enquiries into live projects.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Labour teams & execution",
    description: "Labour contractors complete installation with project accountability, better communication, and payment transparency.",
    icon: Wrench,
  },
];

export const platformBenefits: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "WhatsApp-first business communication",
    description: "The community runs on fast, familiar group coordination so enquiries, updates, and district-level opportunities move quickly.",
    icon: MessageCircle,
  },
  {
    title: "Digital identity card system",
    description: "A structured identity layer is planned to improve trust, worker verification, and professional recognition across the sector.",
    icon: Fingerprint,
  },
  {
    title: "Walkie-talkie style app vision",
    description: "Voice-first field coordination is part of the roadmap to reduce communication delays on active project sites.",
    icon: Headphones,
  },
  {
    title: "Search-first digital presence",
    description: "TN-PVC Interiors and AI-PVC Groups are building discoverable web experiences so customers can find verified services faster.",
    icon: Search,
  },
  {
    title: "Trusted trade ecosystem",
    description: "The network is built to reduce unsafe work culture, improve accountability, and support fair treatment for teams on the ground.",
    icon: ShieldCheck,
  },
  {
    title: "Partnership-led growth",
    description: "Dexaz Groups supports the digital layer with branding, websites, and visibility to strengthen market reach.",
    icon: Handshake,
  },
];

export const audienceBenefits = {
  contractors: [
    "Receive district-wide business opportunities and stronger visibility.",
    "Coordinate square-foot estimates, material planning, and execution faster.",
    "Work with a more trusted labour ecosystem and clearer communication flow.",
    "Build a digital reputation through verified community membership.",
  ],
  clients: [
    "Find PVC and UPVC interior professionals with a clear local network.",
    "Get better project transparency from enquiry to installation.",
    "Access eco-friendly interior alternatives with dependable sourcing.",
    "Benefit from coordinated teams instead of fragmented vendor chasing.",
  ],
  labour: [
    "Improve payment visibility and reduce confusion in work allocation.",
    "Gain recognition through planned digital identity features.",
    "Connect to more reliable contractors and distributors through the network.",
    "Support safer, more disciplined work environments with better accountability.",
  ],
};

export const socialChannels = [
  {
    title: "Facebook presence",
    value: "Srinivasan on Facebook",
    href: companyLinks.srinivasanFacebook,
  },
  {
    title: "Instagram presence",
    value: "Siranthan Siran on Instagram",
    href: companyLinks.siranthanInstagram,
  },
  {
    title: "Company website",
    value: "Dexaz Groups",
    href: companyLinks.dexaz,
  },
];

export const founders = [
  {
    slug: "siranthan-siran",
    name: "Siranthan Siran",
    role: "CEO & Founder, TN-PVC Interiors • CEO & Founder, Dexaz Studio",
    image: siranthanFounder,
    phone: "+91 8489143405",
    email: "siranthan.siran.sk.1@gmail.com",
    link: companyLinks.siranthanInstagram,
    intro:
      "Siranthan Siran is a young entrepreneur from Tamil Nadu building digital ecosystems for trades, businesses, and student-led innovation communities.",
    highlights: [
      "Founded Dexaz Studio while still a student and built a fast-growing tech ecosystem.",
      "Leads the digital future of TN-PVC Interiors through websites, apps, and brand systems.",
      "Believes age should never limit ambition, execution, or learning speed.",
    ],
    story: [
      "Siranthan's journey began with a strong attraction to computer science, digital creation, coding, editing, and building practical solutions with technology.",
      "He launched his company with a small-startup mindset, believing the biggest brands in the world were once built without money, scale, or certainty.",
      "What began as Sk Software Technologies later evolved into Dexaz Studio, now positioned as a student-led technology ecosystem delivering web development, app development, and digital growth services.",
      "A major milestone came through the TN-PVC partnership, where he started leading digital transformation for contractors, fabricators, and the wider PVC interior sector in Tamil Nadu.",
      "Alongside formal education, he continues mentoring youth, building new products, and expanding the digital reach of TN-PVC Interiors and AI-PVC Groups.",
    ],
  },
  {
    slug: "srinivasan",
    name: "Srinivasan",
    role: "Co-Founder & Director, TN-PVC Interiors • Co-Founder, AI-PVC Groups",
    image: srinivasanFounder,
    phone: "+91 8870826404",
    email: "Direct phone contact available",
    link: companyLinks.srinivasanFacebook,
    intro:
      "Srinivasan's life story is rooted in hardship, field labour, carpentry mastery, and a long-term vision to make PVC and UPVC interiors accessible and trustworthy.",
    highlights: [
      "Built 30 years of experience in wooden carpentry before shifting to PVC interiors.",
      "Turned struggle into innovation by introducing new PVC and UPVC work ideas in the market.",
      "Focused his mission on smooth service, eco-friendly interiors, and stronger community growth.",
    ],
    story: [
      "Born in Kerala to Raja Manickam and Muruganantham, Srinivasan faced family hardship from the beginning after losing his father shortly after birth.",
      "He spent his early life between Pollachi and Udumalpet, supporting the family through goat feeding and village work before moving to Coimbatore in search of food and opportunity.",
      "He first worked simply to survive, then gradually learned wooden carpentry and built three decades of hands-on experience in the trade.",
      "As companies introduced PVC material for interior use, he recognised its eco-friendly potential and made the bold decision to shift from wood-based work into PVC interior systems.",
      "Despite opposition, disruption, and repeated struggles, he continued developing new ideas in PVC and UPVC execution and eventually helped build TN-PVC Interiors and AI-PVC Groups into a serious community movement.",
    ],
  },
  {
    slug: "anubrindha",
    name: "Anubrindha",
    role: "Managing Director, TN-PVC Interiors",
    image: anubrindhaFounder,
    phone: "Leadership contact via TN-PVC network",
    email: "Operations contact available through TN-PVC Interiors",
    link: companyLinks.website,
    intro:
      "Anubrindha brings family-rooted knowledge of interiors together with modern operations management to help TN-PVC Interiors scale with discipline and care.",
    highlights: [
      "Raised in a family deeply connected to construction and interior labour.",
      "Completed BBA CA with strong academic performance and added finance and ERP certifications.",
      "Leads project quality, worker welfare, and day-to-day operations for the TN-PVC ecosystem.",
    ],
    story: [
      "Anubrindha was born and raised in Trichy, Tamil Nadu, where interior work was already part of the family's everyday life and identity.",
      "Her parents were labour professionals in interiors and construction, and her brother specialised in glass work, giving her a practical understanding of the trade from a young age.",
      "She pursued formal education in business administration with computer applications, graduating in 2022 from Kongunadu Arts and Science College with 82%.",
      "To strengthen her operational abilities, she added training in Tally Prime, ERP 9, and banking, making her well suited to both people coordination and system management.",
      "At TN-PVC Interiors, she helps align digital systems, field execution, worker welfare, and customer delivery so the network can grow with consistency across Tamil Nadu.",
    ],
  },
] as const;

export const partnershipPillars = [
  {
    title: "TN-PVC Interiors",
    description: "The Tamil Nadu-facing trade community connecting clients and PVC professionals through local reach and everyday coordination.",
    icon: Users,
  },
  {
    title: "AI-PVC Groups",
    description: "The broader All India PVC network building trust, partnerships, and a larger ecosystem across the industry.",
    icon: Globe,
  },
  {
    title: "Dexaz Groups",
    description: "Digital media, branding, website, and technology support driving visibility, credibility, and future-ready communication.",
    icon: BadgeCheck,
  },
];

export const contactCards = [
  {
    title: "Call Srinivasan",
    value: "+91 8870826404",
    href: "tel:+918870826404",
    icon: Phone,
  },
  {
    title: "Call Siranthan Siran",
    value: "+91 8489143405",
    href: "tel:+918489143405",
    icon: Phone,
  },
  {
    title: "Email Siranthan Siran",
    value: "siranthan.siran.sk.1@gmail.com",
    href: "mailto:siranthan.siran.sk.1@gmail.com",
    icon: MessageCircle,
  },
  {
    title: "Visit Dexaz Groups",
    value: "www.dexaz.in",
    href: companyLinks.dexaz,
    icon: Globe,
  },
];

export const geoCoverage = [
  "Coimbatore",
  "Pollachi",
  "Udumalpet",
  "Trichy",
  "Chennai",
  "Madurai",
  "Salem",
  "Erode",
  "Tiruppur",
  "and all 38 districts across Tamil Nadu",
];
