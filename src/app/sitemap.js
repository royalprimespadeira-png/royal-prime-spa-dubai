import articles from "../data/blog";
import seoData from "../data/seo";
import serviceData from "../data/service";

export const dynamic = "force-static";

export default function sitemap() {
  const { siteUrl, pages } = seoData;
  if (!siteUrl) return [];

  const paths = [
    ...Object.values(pages).map(({ path }) => path),
    ...serviceData.services.map(({ id }) => `/services/${id}`),
    ...articles.map(({ slug }) => `/blog/${slug}`),
  ];

  return paths.map((path) => ({ url: new URL(path, siteUrl).href }));
}
