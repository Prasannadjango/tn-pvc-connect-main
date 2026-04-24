import { Fingerprint, Headphones, Search, ShieldCheck } from "lucide-react";

import { Seo } from "@/components/seo/Seo";
import { PageHero, SectionIntro } from "@/components/site/PageHero";
import { SiteLayout } from "@/components/site/SiteLayout";
import { platformBenefits, seoByPath, brandAssets } from "@/data/siteData";

const focusAreas = [
  {
    title: "Digital identity cards",
    description: "Professional identity systems can help create recognition, reduce confusion on sites, and strengthen verification.",
    icon: Fingerprint,
  },
  {
    title: "Field communication",
    description: "A voice-first coordination layer can help field teams stay aligned without delay during active installation work.",
    icon: Headphones,
  },
  {
    title: "Search visibility",
    description: "Well-structured content helps customers discover verified TN-PVC Interiors teams through Google and AI surfaces.",
    icon: Search,
  },
  {
    title: "Safer work culture",
    description: "The platform supports better discipline, accountability, and stronger expectations for professional conduct.",
    icon: ShieldCheck,
  },
];

const Benefits = () => {
  const seo = seoByPath["/benefits"];

  return (
    <SiteLayout>
      <Seo {...seo} path="/benefits" />
      <PageHero
        eyebrow="Benefits"
        title="Designed for business growth and field trust."
        description="TN-PVC Interiors helps the PVC and UPVC trade move beyond informal coordination into an accountable ecosystem."
        bentoItems={[
          { image: brandAssets.heroInterior, title: "Quality Spaces", description: "Long-lasting value." },
          { image: brandAssets.bentoShowroom, title: "Visibility", description: "Searchable network." },
          { image: brandAssets.bentoInstallation, title: "Field Trust", description: "Accountable execution." },
          { image: brandAssets.bentoUpvcWindow, title: "Growth", description: "Business expansion." }
        ]}
      />

      <section className="section-padding">
        <div className="container space-y-16 lg:space-y-24">
          <SectionIntro
            eyebrow="Value stack"
            title="A benefit layer for real trade problems."
            description="The community is structured around daily business pain points—lead flow, worker visibility, and professional trust."
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {platformBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="float-card group">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <h2 className="mt-8 text-lg font-black tracking-tight">{benefit.title}</h2>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border/40 bg-surface/50">
        <div className="container grid gap-8 lg:grid-cols-2">
          {focusAreas.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="float-card group">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-8 text-lg font-black tracking-tight">{item.title}</h2>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Benefits;
