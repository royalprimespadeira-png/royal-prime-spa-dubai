import seoData from "../data/seo";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: seoData.siteUrl && `${seoData.siteUrl}/sitemap.xml`,
  };
}
