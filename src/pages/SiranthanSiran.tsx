import { ExternalLink, Mail, Phone } from "lucide-react";

import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/site/PageHero";
import { SiteLayout } from "@/components/site/SiteLayout";
import { founders, seoByPath, brandAssets } from "@/data/siteData";

const founder = founders.find((item) => item.slug === "siranthan-siran")!;

const SiranthanSiran = () => {
  const seo = seoByPath["/siranthan-siran"];

  return (
    <SiteLayout>
      <Seo {...seo} path="/siranthan-siran" image={founder.image} />
      <PageHero
        eyebrow="Founder story"
        title="Siranthan Siran"
        description={founder.intro}
        bentoItems={[
          { image: brandAssets.bentoShowroom, title: "Dexaz Studio", description: "Digital growth." },
          { image: brandAssets.heroInterior, title: "Vision", description: "Tech ecosystem." },
          { image: brandAssets.bentoUpvcWindow, title: "AI-PVC", description: "Strategic partner." },
          { image: brandAssets.bentoPvcWall, title: "TN-PVC", description: "State leader." }
        ]}
        aside={
          <div className="float-card p-0 overflow-hidden">
            <img src={founder.image} alt={founder.name} className="aspect-[4/4.5] w-full object-cover" loading="eager" />
          </div>
        }
      />

      <section className="section-padding">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="float-card space-y-8">
            <p className="text-[10px] font-black text-primary">Operations profile</p>
            <h2 className="text-2xl font-black tracking-tight">{founder.role}</h2>
            <div className="space-y-4">
              {founder.highlights.map((highlight) => (
                <p key={highlight} className="border-l-4 border-primary/20 pl-6 text-sm font-semibold text-muted-foreground">{highlight}</p>
              ))}
            </div>
            <div className="flex flex-col gap-4 pt-4">
              <a href="tel:+918489143405" className="primary-btn h-12">
                <Phone className="mr-2 size-4" />
                {founder.phone}
              </a>
              <a href="mailto:siranthan.siran.sk.1@gmail.com" className="secondary-btn h-12">
                <Mail className="mr-2 size-4" />
                {founder.email}
              </a>
              <a href={founder.link} target="_blank" rel="noreferrer" className="secondary-btn h-12">
                Instagram profile
                <ExternalLink className="ml-2 size-4" />
              </a>
            </div>
          </div>

          <div className="float-card bg-surface/50">
            <h2 className="text-2xl font-black tracking-tight">Life story & journey</h2>
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

export default SiranthanSiran;
