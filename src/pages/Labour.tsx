import { BadgeIndianRupee, CheckCircle2, Fingerprint, HardHat, ShieldCheck } from "lucide-react";

import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/site/PageHero";
import { SiteLayout } from "@/components/site/SiteLayout";
import { audienceBenefits, seoByPath, brandAssets } from "@/data/siteData";

const labourFeatures = [
  { title: "Payment visibility", description: "The platform vision supports clearer communication so labour teams are not left uncertain about rates.", icon: BadgeIndianRupee },
  { title: "Professional identity", description: "Planned ID systems help labour teams carry stronger recognition and placement value across projects.", icon: Fingerprint },
  { title: "Site discipline", description: "The community is built with a goal of improving accountability and respect on the ground.", icon: ShieldCheck },
  { title: "Project connection", description: "Better contractor access helps labour professionals stay connected to genuine projects.", icon: HardHat },
];

const Labour = () => {
  const seo = seoByPath["/labour"];

  return (
    <SiteLayout>
      <Seo {...seo} path="/labour" />
      <PageHero
        eyebrow="For labour"
        title="Respect, visibility, and structured work for labour teams."
        description="We aim to build a better environment for the workers who execute PVC and UPVC interiors on the ground."
        bentoItems={[
          { image: brandAssets.bentoInstallation, title: "On-site", description: "Clear execution." },
          { image: brandAssets.bentoShowroom, title: "Teamwork", description: "Strong support." },
          { image: brandAssets.bentoPvcWall, title: "Craftsmanship", description: "Expert builds." },
          { image: brandAssets.heroInterior, title: "Results", description: "Quality finishes." }
        ]}
      />

      <section className="section-padding">
        <div className="container grid gap-8 lg:grid-cols-2">
          {labourFeatures.map((item) => {
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

      <section className="section-padding border-y border-border/40 bg-surface/50">
        <div className="container float-card">
          <h2 className="text-2xl font-black tracking-tight">How we support labour professionals</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {audienceBenefits.labour.map((point) => (
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

export default Labour;
