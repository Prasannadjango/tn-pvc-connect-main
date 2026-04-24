import { Calculator, CheckCircle2, ClipboardCheck, Route, Users } from "lucide-react";

import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/site/PageHero";
import { SiteLayout } from "@/components/site/SiteLayout";
import { audienceBenefits, seoByPath, brandAssets } from "@/data/siteData";

const pillars = [
  { title: "Lead generation", description: "Gain visibility with customers and district-level opportunities through a central brand presence.", icon: Users },
  { title: "Square-foot planning", description: "Collect measurements, share quotes, and prepare project planning with stronger clarity.", icon: Calculator },
  { title: "Material coordination", description: "Stay closer to distributors so site delays are reduced and execution improves.", icon: Route },
  { title: "Execution control", description: "Coordinate labour teams with better communication and clearer payment responsibility.", icon: ClipboardCheck },
];

const Contractors = () => {
  const seo = seoByPath["/contractors"];

  return (
    <SiteLayout>
      <Seo {...seo} path="/contractors" />
      <PageHero
        eyebrow="For contractors"
        title="A stronger operating system for PVC contractors."
        description="Contractors sit at the center of customer trust, labour coordination, and project execution."
        bentoItems={[
          { image: brandAssets.bentoUpvcWindow, title: "Partnerships", description: "Stronger network." },
          { image: brandAssets.bentoInstallation, title: "Execution", description: "Professional teams." },
          { image: brandAssets.bentoPvcWall, title: "Materials", description: "Quality PVC." },
          { image: brandAssets.bentoShowroom, title: "Growth", description: "More leads." }
        ]}
      />

      <section className="section-padding">
        <div className="container grid gap-8 lg:grid-cols-2">
          {pillars.map((pillar) => {
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
      </section>

      <section className="section-padding border-y border-border/40 bg-surface/50">
        <div className="container float-card">
          <h2 className="text-2xl font-black tracking-tight">Contractor advantages in the community</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {audienceBenefits.contractors.map((point) => (
              <div key={point} className="flex items-start gap-4 rounded-2xl bg-background p-6 border border-border/40 shadow-sm">
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                <p className="text-sm font-semibold text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contractors;
