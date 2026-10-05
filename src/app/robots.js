import { getPublicSiteUrl, isIndexingEnabled } from "../lib/site-config.mjs";

export default function robots() {
  const canIndex = isIndexingEnabled();
  return {
    rules: {
      userAgent: "*",
      ...(canIndex ? { allow: "/" } : { disallow: "/" }),
    },
    ...(canIndex ? { sitemap: `${getPublicSiteUrl()}/sitemap.xml` } : {}),
  };
}
