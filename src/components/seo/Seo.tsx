import { useEffect } from "react";

import { siteName, type SeoConfig } from "@/data/siteData";

type SeoProps = SeoConfig & {
  image?: string;
  path?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const ensureMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const ensureLink = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const scriptId = "tnpvc-structured-data";

export const Seo = ({ title, description, keywords, image, path = "/", structuredData }: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${path}`;
    const pageTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
    const socialImage = image ?? `${window.location.origin}/opengraph-default.png`;

    document.title = pageTitle;

    ensureMeta('meta[name="description"]', { name: "description", content: description });
    ensureMeta('meta[name="keywords"]', { name: "keywords", content: keywords.join(", ") });
    ensureMeta('meta[name="author"]', { name: "author", content: siteName });
    ensureMeta('meta[property="og:title"]', { property: "og:title", content: pageTitle });
    ensureMeta('meta[property="og:description"]', { property: "og:description", content: description });
    ensureMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    ensureMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    ensureMeta('meta[property="og:image"]', { property: "og:image", content: socialImage });
    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: pageTitle });
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    ensureMeta('meta[name="twitter:image"]', { name: "twitter:image", content: socialImage });
    ensureLink('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });

    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteName,
      description,
      url: canonicalUrl,
    };

    const payload = structuredData
      ? Array.isArray(structuredData)
        ? structuredData
        : [structuredData]
      : [baseStructuredData];

    script.textContent = JSON.stringify(payload);
  }, [description, image, keywords, path, structuredData, title]);

  return null;
};
