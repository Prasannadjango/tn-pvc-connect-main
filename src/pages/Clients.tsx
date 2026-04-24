import { BadgeCheck, CheckCircle2, Home, Shield, Sparkles } from "lucide-react";

import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/site/PageHero";
import { SiteLayout } from "@/components/site/SiteLayout";
import { audienceBenefits, seoByPath, brandAssets } from "@/data/siteData";

const clientFocus = [
  { title: "Verified connections", description: "Clients can approach a more visible professional network instead of scattered word-of-mouth referrals.", icon: BadgeCheck },
  { title: "Home interior solutions", description: "The platform supports modern PVC and UPVC applications like cupboards and wall finishes.", icon: Home },
  { title: "Project transparency", description: "Better communication across the supply chain makes planning easier for the customer.", icon: Shield },
  { title: "Quality expectations", description: "The network promotes professional execution so clients get a cleaner overall experience.", icon: Sparkles },
];

const Clients = () => {
  const seo = seoByPath["/clients"];

  return (
    <SiteLayout>
      <Seo {...seo} path="/clients" />
      <PageHero
        eyebrow="For clients"
        title="Find PVC interior professionals with confidence."
        description="TN-PVC Interiors is built so families and businesses can connect with a stronger ecosystem for dependable project delivery."
        bentoItems={[
          { image: brandAssets.heroInterior, title: "Dream Spaces", description: "Modern design." },
          { image: brandAssets.bentoUpvcWindow, title: "Durability", description: "Long-lasting." },
          { image: brandAssets.bentoPvcWall, title: "Finishes", description: "Premium textures." },
          { image: brandAssets.bentoShowroom, title: "Inspiration", description: "Explore ideas." }
        ]}
      />

      <section className="section-padding">
        <div className="container grid gap-8 lg:grid-cols-2">
          {clientFocus.map((item) => {
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
          <h2 className="text-2xl font-black tracking-tight">Why clients benefit from our approach</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {audienceBenefits.clients.map((point) => (
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

export default Clients;
