import { ArrowRight, Building2, Factory, MapPin, Truck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

import { Seo } from "@/components/seo/Seo";
import { PageHero, SectionIntro } from "@/components/site/PageHero";
import { SiteLayout } from "@/components/site/SiteLayout";
import { seoByPath, geoCoverage, networkFlow, brandAssets } from "@/data/siteData";

const icons = [Factory, Truck, Building2, MapPin, Wrench];

const Network = () => {
  const seo = seoByPath["/network"];

  return (
    <SiteLayout>
      <Seo {...seo} path="/network" />
      <PageHero
        eyebrow="Network"
        title="A connected PVC ecosystem built for the way Tamil Nadu works."
        description="TN-PVC Interiors mirrors the full journey from manufacturing to on-site installation so every stakeholder knows their place."
        bentoItems={[
          { image: brandAssets.bentoPvcWall, title: "PVC Expertise", description: "Premium materials." },
          { image: brandAssets.heroInterior, title: "Modern Interiors", description: "Transforming spaces." },
          { image: brandAssets.bentoUpvcWindow, title: "UPVC Windows", description: "Durable design." },
          { image: brandAssets.bentoInstallation, title: "Execution", description: "Professional work." }
        ]}
        actions={[
          { label: "See benefits", to: "/benefits" },
          { label: "Contact leadership", to: "/anubrindha", secondary: true },
        ]}
        aside={
          <div className="float-card">
            <p className="text-[10px] font-black tracking-wide text-primary">Coverage</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {geoCoverage.map((place) => (
                <span key={place} className="inline-flex rounded-lg bg-surface px-3 py-1.5 text-[11px] font-bold text-muted-foreground border border-border/40">{place}</span>
              ))}
            </div>
          </div>
        }
      />

      <section className="section-padding">
        <div className="container space-y-16 lg:space-y-24">
          <SectionIntro
            eyebrow="Flow model"
            title="Five layers, one platform."
            description="Every successful project depends on timing, communication, and trust across multiple levels of the chain."
          />
          <div className="grid gap-8 lg:grid-cols-5">
            {networkFlow.map((step, index) => {
              const Icon = icons[index];
              return (
                <div key={step.title} className="float-card group">
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-[10px] font-black text-muted-foreground/40">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="mt-8 text-lg font-black tracking-tight">{step.title}</h2>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border/40 bg-surface/50">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div className="float-card">
            <p className="text-[10px] font-black tracking-wide text-primary">Clarity</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight">Why the network structure matters.</h2>
            <div className="mt-8 space-y-4">
              {[
                "Manufacturers gain a clearer path to market demand.",
                "Distributors reduce friction in regional supply movement.",
                "Contractors coordinate labour more precisely.",
                "Clients get access to visible, organised teams.",
              ].map((item) => (
                <p key={item} className="border-l-4 border-primary/20 pl-6 text-sm font-semibold text-muted-foreground">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="float-card flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-black tracking-wide text-primary">Reach</p>
              <h2 className="mt-4 text-2xl font-black tracking-tight">A WhatsApp-first hub designed for action.</h2>
              <p className="mt-6 text-sm font-medium leading-relaxed text-muted-foreground">
                The network is shaped around tools people already use. WhatsApp helps groups coordinate quickly, while the website adds credibility and structured information for discovery.
              </p>
            </div>
            <Link
              to="/ai-pvc-groups"
              className="primary-btn mt-10 h-12"
            >
              Explore partnership
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Network;
