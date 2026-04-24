import { ExternalLink, Globe2, Handshake, MonitorSmartphone } from "lucide-react";

import { Seo } from "@/components/seo/Seo";
import { PageHero, SectionIntro } from "@/components/site/PageHero";
import { SiteLayout } from "@/components/site/SiteLayout";
import { brandAssets, partnershipPillars, seoByPath } from "@/data/siteData";

const AiPvcGroups = () => {
  const seo = seoByPath["/ai-pvc-groups"];

  return (
    <SiteLayout>
      <Seo {...seo} path="/ai-pvc-groups" image={brandAssets.aiPvcLogo} />
      <PageHero
        eyebrow="AI-PVC partnership"
        title="TN-PVC Interiors x AI-PVC Groups x Dexaz Groups"
        description="Bringing field experience, national PVC identity, and digital growth into one aligned platform."
        bentoItems={[
          { image: brandAssets.heroInterior, title: "AI-PVC", description: "National network." },
          { image: brandAssets.bentoPvcWall, title: "Partnership", description: "Digital growth." },
          { image: brandAssets.bentoUpvcWindow, title: "TN-PVC", description: "Statewide reach." },
          { image: brandAssets.bentoShowroom, title: "Dexaz", description: "Tech ecosystem." }
        ]}
        aside={
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="float-card flex items-center justify-center p-8">
              <img src={brandAssets.aiPvcLogo} alt="AI-PVC Groups logo" className="max-h-20 object-contain" />
            </div>
            <div className="float-card overflow-hidden p-0">
              <img src={brandAssets.dexazReference} alt="Dexaz Groups digital capability" className="h-full w-full object-cover" />
            </div>
          </div>
        }
      />

      <section className="section-padding">
        <div className="container space-y-16 lg:space-y-24">
          <SectionIntro
            eyebrow="Partnership pillars"
            title="Three brands, one growth direction."
            description="Each partner supports a different layer of the ecosystem, creating a complete foundation for the sector."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {partnershipPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="float-card group">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <h2 className="mt-8 text-lg font-black tracking-tight">{pillar.title}</h2>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border/40 bg-surface/50">
        <div className="container grid gap-8 lg:grid-cols-3">
          {[
            { title: "Industry identity", description: "AI-PVC Groups strengthens the community and creates broader visibility for the trade.", icon: Globe2 },
            { title: "Digital media", description: "Dexaz Groups supports branding, websites, and technology for long-term growth.", icon: MonitorSmartphone },
            { title: "Execution", description: "TN-PVC Interiors keeps the platform grounded in field realities and project delivery.", icon: Handshake },
          ].map((item) => {
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
        <div className="container mt-12 flex flex-wrap gap-4">
          <a href="https://www.dexaz.in" target="_blank" rel="noreferrer" className="primary-btn h-12 px-8">
            Visit Dexaz Groups
            <ExternalLink className="ml-2 size-4" />
          </a>
          <a href="https://www.tnpvc.co.in" target="_blank" rel="noreferrer" className="secondary-btn h-12 px-8">
            Visit TNPVC reference
            <ExternalLink className="ml-2 size-4" />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
};

export default AiPvcGroups;
