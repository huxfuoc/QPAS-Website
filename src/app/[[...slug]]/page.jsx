import { notFound } from "next/navigation";
import { business, pages } from "../../site-data.mjs";
import { renderSiteContent } from "../../lib/site-renderer.mjs";
import { getCanonicalUrl, getPublicSiteUrl, isIndexingEnabled } from "../../lib/site-config.mjs";

export const dynamicParams = false;

const pageByPath = new Map(pages.map((page) => [page.path, page]));

function pathFromSlug(slug = []) {
  return slug.length ? `/${slug.join("/")}/` : "/";
}

function pageFromSlug(slug) {
  return pageByPath.get(pathFromSlug(slug));
}

export function generateStaticParams() {
  return pages.map((page) => ({
    slug: page.path === "/" ? [] : page.path.split("/").filter(Boolean),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = pageFromSlug(slug ?? []);
  if (!page) return { title: `Không tìm thấy trang | ${business.brandName}`, robots: { index: false, follow: false } };

  const title = page.seoTitle.toLowerCase().includes("quỳnh phát") || page.seoTitle.toLowerCase().includes("qpas")
    ? page.seoTitle
    : `${page.seoTitle} | ${business.brandName}`;
  const canonical = getCanonicalUrl(page.path);
  const siteUrl = getPublicSiteUrl();
  const openGraph = {
    type: "website",
    locale: "vi_VN",
    siteName: business.brandName,
    title,
    description: page.description,
    ...(canonical ? { url: canonical } : {}),
  };

  return {
    ...(canonical && siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical } } : {}),
    title,
    description: page.description,
    robots: { index: isIndexingEnabled(), follow: isIndexingEnabled() },
    openGraph,
  };
}

function organizationJsonLd(canonical) {
  const origin = new URL(canonical).origin;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${origin}/#organization`,
        name: business.brandName,
        legalName: business.legalName,
        url: origin,
        email: business.email,
        telephone: business.phoneHref,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: business.phoneHref,
          email: business.email,
          availableLanguage: "Vietnamese",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: business.brandName,
        inLanguage: business.language,
        publisher: { "@id": `${origin}/#organization` },
      },
    ],
  };
  return JSON.stringify(graph).replaceAll("<", "\\u003c");
}

export default async function SitePage({ params }) {
  const { slug } = await params;
  const page = pageFromSlug(slug ?? []);
  if (!page) notFound();

  const canonical = getCanonicalUrl(page.path);
  return (
    <>
      {canonical ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJsonLd(canonical) }} />
      ) : null}
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: renderSiteContent(page) }} />
    </>
  );
}
