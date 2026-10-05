import { pages } from "../site-data.mjs";
import { getPublicSiteUrl, isIndexingEnabled } from "../lib/site-config.mjs";

export default function sitemap() {
  if (!isIndexingEnabled()) return [];
  const siteUrl = getPublicSiteUrl();
  return pages.map((page) => ({ url: new URL(page.path, siteUrl).href }));
}
