import seoData from "../data/seo";
import siteData from "../data/site";

export default function SeoSchema() {
  const { siteUrl, image, pages } = seoData;
  const schema = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "@id": siteUrl && `${siteUrl}/#spa`,
    name: siteData.name,
    url: siteUrl,
    logo: siteUrl && new URL("/images/logo/1.png", siteUrl).href,
    image: siteUrl && new URL(image.path, siteUrl).href,
    description: pages.home.description,
    email: siteData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteData.streetAddress}, ${siteData.neighborhood}, ${siteData.district}`,
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
