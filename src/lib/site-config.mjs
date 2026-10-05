import { pages } from "../site-data.mjs";

export function getPublicSiteUrl() {
  const value = process.env.PUBLIC_SITE_URL ?? "";
  if (!value) return "";

  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname.endsWith(".invalid") || url.hostname === "example.com") return "";
    return url.origin;
  } catch {
    return "";
  }
}

export function isIndexingEnabled() {
  return process.env.PUBLIC_ALLOW_INDEXING === "true"
    && Boolean(getPublicSiteUrl())
    && pages.every((page) => page.contentStatus === "ready");
}

export function getCanonicalUrl(path) {
  const siteUrl = getPublicSiteUrl();
  if (!isIndexingEnabled() || !siteUrl) return "";
  return new URL(path, siteUrl).href;
}

