import { ArrowRight, CheckCircle2, ChevronRight, LayoutDashboard, MapPin, MessageCircleMore, PhoneCall, Search, UserCheck, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

import { Seo } from "@/components/seo/Seo";
import { PageHero, SectionIntro } from "@/components/site/PageHero";
import TNMap from "@/components/site/TNMap";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import {
  audienceBenefits,
  brandAssets,
  contactCards,
  founders,
  geoCoverage,
  networkFlow,
  platformBenefits,
  quickStats,
  seoByPath,
  siteDescription,
} from "@/data/siteData";
import { cn } from "@/lib/utils";

const Home = () => {
  const seo = seoByPath["/"];

  return (
    <SiteLayout>
      <Seo
        {...seo}
        path="/"
        image={brandAssets.tnPvcLogo}
      />

      {/* ─── Hero (Centered Reference Style) ─── */}
      <PageHero
        centered
        eyebrow="The future of PVC interiors is here"
        titleClassName="lg:leading-[1.4]"
        title={
          <>
            A Stronger Digital Network for <span className="text-primary">PVC Interiors</span> Across Tamil Nadu.
          </>
        }
        description="Leverage a connected digital ecosystem and community-first coordination to streamline your projects, reduce delays, and drive consistent growth across Tamil Nadu."
        bentoItems={[
          {
            image: brandAssets.heroInterior,
            title: "Modular Kitchens",
            description: "High-gloss PVC cabinetry designed for modern homes.",
            className: "md:col-span-2 md:row-span-2"
          },
          {
            image: brandAssets.bentoPvcWall,
            title: "Wall Paneling",
            description: "Sophisticated textures and durable finishes.",
            className: "md:col-span-2 md:row-span-1"
          },
          {
            image: brandAssets.bentoUpvcWindow,
            title: "UPVC Windows",
            description: "Precision-engineered architectural solutions.",
            className: "md:col-span-1 md:row-span-1"
          },
          {
            image: brandAssets.bentoInstallation,
            title: "Trade Execution",
            description: "Professional site coordination and installation.",
            className: "md:col-span-1 md:row-span-1"
          }
        ]}
        actions={[
          { label: "Learn More", to: "/benefits", secondary: true, icon: ChevronRight },
          { label: "Get Started", to: "/network", icon: ArrowRight },
        ]}
      />

      {/* ─── Stats Section (Floating Cards like Reference) ─── */}
      <section className="-mt-12 relative z-20 pb-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "Client Satisfaction", value: "250+", accent: "bg-blue-500" },
              { label: "Community Members", value: "2k+", accent: "bg-primary" },
              { label: "Districts Covered", value: "38", accent: "bg-indigo-500" },
            ].map((stat, i) => (
              <div key={stat.label} className="float-card group relative overflow-hidden flex flex-col items-center justify-center text-center py-10">
                <div className={cn("absolute top-0 left-0 h-1.5 w-full", stat.accent)} />
                <p className="text-4xl font-black tracking-tight text-foreground">{stat.value}</p>
                <p className="mt-2 text-sm font-bold text-muted-foreground tracking-wide">{stat.label}</p>
                {/* Subtle grid pattern background */}
                <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ─── Platform benefits ─── */}
      <section className="section-padding overflow-hidden" aria-labelledby="benefits-title">
        <div className="container space-y-16 lg:space-y-24">
          <SectionIntro
            eyebrow="Powerful features"
            title="Built to solve trust, coordination, and growth gaps."
            description="The TN-PVC model makes worker identity visible, ensures payment fairness, and gives customers a smoother path to quality interiors."
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {platformBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="float-card group">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-xl font-black tracking-tight">{benefit.title}</h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Ecosystem Bento Grid ─── */}
      <section className="section-padding overflow-hidden bg-mesh relative">
        <div className="container space-y-16 lg:space-y-24">
          <div className="mx-auto max-w-4xl text-center">
            <SectionIntro
              eyebrow="Digital identity"
              title="Your entire PVC business, visualized in one place."
              description="We are building the digital infrastructure for the PVC trade. Every contractor, manufacturer, and worker becomes part of a searchable, trusted network."
              align="center"
            />
          </div>

          <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-4 md:grid-rows-2">
            {/* Main Feature: Showroom / Ecosystem */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-border/40 shadow-2xl md:col-span-2 md:row-span-2">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img
                src={brandAssets.bentoShowroom}
                alt="Premium PVC Showroom"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 backdrop-blur-md self-start">
                  <UserCheck className="size-4 text-primary" />
                  <span className="text-xs font-bold tracking-wide text-white">Verified identity</span>
                </div>
                <h3 className="text-2xl font-black text-white sm:text-3xl">Professional ecosystem</h3>
                <p className="mt-2 max-w-md text-sm font-medium text-white/70">A professional profile for every member, showcasing skills, location, and project history across Tamil Nadu.</p>
              </div>
            </div>

            {/* Sub Feature 1: Accountability / Installation */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-border/40 shadow-2xl md:col-span-2 md:row-span-1">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img
                src={brandAssets.bentoInstallation}
                alt="Site Level Accountability"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <div className="flex items-center gap-3 mb-2">
                  <LayoutDashboard className="size-5 text-primary" />
                  <h3 className="text-xl font-black text-white">Site-level accountability</h3>
                </div>
                <p className="text-sm font-medium text-white/70">Digital tools to track site progress, material delivery, and team allocation in real-time.</p>
              </div>
            </div>

            {/* Sub Feature 2: Visibility / Search */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-border/40 shadow-2xl md:col-span-2 md:row-span-1">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img
                src={brandAssets.heroInterior}
                alt="Growth Visibility"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <div className="flex items-center gap-3 mb-2">
                  <Search className="size-5 text-primary" />
                  <h3 className="text-xl font-black text-white">Growth-first visibility</h3>
                </div>
                <p className="text-sm font-medium text-white/70">Get discovered by clients across Tamil Nadu through the TN-PVC searchable directory.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section className="section-padding overflow-hidden" aria-labelledby="flow-title">
        <div className="container space-y-16 lg:space-y-24">
          <SectionIntro
            eyebrow="The workflow"
            title="From factories to finished interiors, one connected flow."
            description="TN-PVC Interiors reflects the real field journey of a project and makes each layer more visible and collaborative."
            align="center"
          />
          <div className="grid gap-12 lg:grid-cols-5">
            {networkFlow.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative text-center group">
                  {index < networkFlow.length - 1 && (
                    <div className="absolute left-[calc(50%+32px)] top-10 hidden w-[calc(100%-64px)] border-t-2 border-dashed border-border lg:block" aria-hidden="true" />
                  )}
                  <div className="step-circle mx-auto relative z-10 transition-transform group-hover:scale-110">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-8 text-sm font-black tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Regional Presence (Tamil Nadu Map Section) ─── */}
      <section className="section-padding border-y border-border/40 bg-surface/30 overflow-hidden">
        <div className="container space-y-16 lg:space-y-24">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-10">
              <SectionIntro
                eyebrow="Regional presence"
                title="Visible across Tamil Nadu and ready for growth."
                description="Our network is growing as a searchable, shareable identity across web, WhatsApp, and leadership channels, covering every major hub and all 38 districts."
              />
              <div className="flex flex-wrap gap-3">
                {geoCoverage.map((location) => (
                  <div 
                    key={location} 
                    className={cn(
                      "rounded-xl border border-border/60 bg-white px-5 py-3 text-sm font-bold shadow-sm transition-all hover:border-primary/40 hover:text-primary whitespace-normal break-words",
                      location.includes("38 districts") && "bg-primary/5 border-primary/20 text-primary"
                    )}
                  >
                    {location}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stylized Map Visual */}
            <div className="relative group overflow-hidden md:overflow-visible">
              <div className="float-card aspect-square flex items-center justify-center bg-mesh/50 overflow-hidden p-8 border-none shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-10 pointer-events-none" />
                
                <TNMap className="w-full h-full relative z-20 transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_20px_50px_rgba(var(--primary-rgb),0.2)]" />

                {/* Ambient Glows */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-[80px] animate-pulse delay-700" />
                
                {/* Coverage Badge */}
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-30 text-right pointer-events-none">
                  <p className="text-[10px] font-black tracking-wide text-primary mb-1">Statewide coverage</p>
                  <p className="text-xl md:text-3xl font-black text-foreground drop-shadow-sm">38 Districts</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-10 -right-10 size-64 bg-primary/5 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Audience benefits ─── */}
      <section className="section-padding bg-surface border-y border-border/40">
        <div className="container space-y-16 lg:space-y-24">
          <SectionIntro
            eyebrow="Target audience"
            title="Specific benefits for contractors, clients, and labour."
            description="Each side of the PVC ecosystem needs different kinds of support, and the platform has been designed to serve those needs clearly."
            align="center"
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { title: "For Contractors", points: audienceBenefits.contractors, to: "/contractors" },
              { title: "For Clients", points: audienceBenefits.clients, to: "/clients", highlight: true },
              { title: "For Labour", points: audienceBenefits.labour, to: "/labour" },
            ].map((group) => (
              <div
                key={group.title}
                className={cn(
                  "float-card flex flex-col group",
                  group.highlight && "ring-2 ring-primary ring-offset-4 ring-offset-background"
                )}
              >
                {group.highlight && (
                  <span className="mb-6 inline-flex self-start items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black text-primary">
                    Recommended
                  </span>
                )}
                <h3 className="text-2xl font-black">{group.title}</h3>
                <div className="mt-8 flex-1 space-y-4">
                  {group.points.map((point) => (
                    <div key={point} className="flex items-start gap-4">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                      <p className="text-sm font-medium text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to={group.to}
                  className={cn(
                    "mt-10 h-12 inline-flex items-center justify-center font-bold text-sm rounded-full transition-all",
                    group.highlight ? "primary-btn" : "secondary-btn"
                  )}
                >
                  Learn More
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Founders ─── */}
      <section className="section-padding">
        <div className="container grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-12">
            <SectionIntro
              eyebrow="The Team"
              title="A field-driven community backed by builders and creators."
              description="TN-PVC Interiors is powered by strong experience from the trade and digital execution built for long-term growth."
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {founders.map((founder) => (
                <Link
                  key={founder.slug}
                  to={`/${founder.slug}`}
                  className="group flex flex-col"
                >
                  <div className="overflow-hidden rounded-2xl border border-border/40 bg-card shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-primary/20">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="aspect-[4/5] w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-base font-black tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {founder.name}
                    </h3>
                    <p className="mt-2 text-[10px] font-black tracking-wide text-muted-foreground whitespace-normal">
                      {founder.role.split(',')[0]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="float-card p-2 hidden lg:block overflow-hidden rounded-[2rem]">
            <img
              src={brandAssets.dexazReference}
              alt="Founders overview visual"
              className="h-full max-h-[600px] w-full object-cover rounded-[1.8rem]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="section-padding bg-mesh">
        <div className="container text-center space-y-10">
          <SectionIntro
            eyebrow="Ready to begin?"
            title="Discover the full TN-PVC network."
            description="Join thousands of professionals and homeowners building a better PVC interior ecosystem."
            align="center"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/benefits" className="primary-btn h-14 px-10 group">
              Get Started Today
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:+918870826404" className="secondary-btn h-14 px-10 group">
              Contact Support
              <PhoneCall className="ml-2 size-5 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Home;
