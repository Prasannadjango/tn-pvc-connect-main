import { ExternalLink, Phone } from "lucide-react";

import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/site/PageHero";
import { SiteLayout } from "@/components/site/SiteLayout";
import { founders, seoByPath, brandAssets } from "@/data/siteData";

const founder = founders.find((item) => item.slug === "srinivasan")!;

const Srinivasan = () => {
  const seo = seoByPath["/srinivasan"];

  return (
    <SiteLayout>
      <Seo {...seo} path="/srinivasan" image={founder.image} />
      <PageHero
        eyebrow="Co-founder story"
        title="Srinivasan"
        description={founder.intro}
        bentoItems={[
          { image: brandAssets.bentoPvcWall, title: "Carpentry", description: "30 years experience." },
          { image: brandAssets.heroInterior, title: "Transition", description: "Wood to PVC." },
          { image: brandAssets.bentoInstallation, title: "Expertise", description: "Hands-on execution." },
          { image: brandAssets.bentoUpvcWindow, title: "Leadership", description: "Network growth." }
        ]}
        aside={
          <div className="float-card p-0 overflow-hidden">
            <img src={founder.image} alt={founder.name} className="aspect-[4/4.2] w-full object-cover" loading="eager" />
          </div>
        }
      />

      <section className="section-padding">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="float-card space-y-8">
            <p className="text-[10px] font-black tracking-wide text-primary">Leadership profile</p>
            <h2 className="text-2xl font-black tracking-tight">{founder.role}</h2>
            <div className="space-y-4">
              {founder.highlights.map((highlight) => (
                <p key={highlight} className="border-l-4 border-primary/20 pl-6 text-sm font-semibold text-muted-foreground">{highlight}</p>
              ))}
            </div>
            <div className="flex flex-col gap-4 pt-4">
              <a href="tel:+918870826404" className="primary-btn h-12">
                <Phone className="mr-2 size-4" />{founder.phone}
              </a>
              <a href={founder.link} target="_blank" rel="noreferrer" className="secondary-btn h-12">
                Facebook profile <ExternalLink className="ml-2 size-4" />
              </a>
            </div>
          </div>

          <div className="float-card bg-surface/50">
            <h2 className="text-2xl font-black tracking-tight">Life story & mission</h2>
            <div className="mt-8 space-y-6">
              {founder.story.map((paragraph) => (
                <p key={paragraph} className="text-sm font-medium leading-relaxed text-muted-foreground">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Srinivasan;
