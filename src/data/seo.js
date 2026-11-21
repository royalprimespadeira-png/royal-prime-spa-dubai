import siteData from "./site";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.royalprimespa.com";
const metadataBase = new URL(configuredUrl);

if (
  !["https:", "http:"].includes(metadataBase.protocol) ||
  metadataBase.username || metadataBase.password ||
  metadataBase.pathname !== "/" || metadataBase.search || metadataBase.hash
) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be an absolute website origin, such as https://example.com.");
}

const seoData = {
  siteUrl: metadataBase.origin,
  metadataBase,
  locale: "en_AE",
  image: {
    path: "/images/spa/spa-suite.webp",
    alt: "Two prepared massage tables in a softly lit treatment suite",
  },
  pages: {
    home: {
      title: "Luxury Spa & Massage in Dubai",
      description:
        "Visit Royal Prime Spa in Al Muraqqabat, Deira, Dubai. Explore Moroccan hammam, Swedish massage, Thai massage and book a spa appointment.",
      path: "/",
    },
    about: {
      title: "About Our Spa in Deira, Dubai",
      description:
        "Get to know Royal Prime Spa in Al Muraqqabat, Deira, and explore our approach to massage, relaxation and traditional spa treatments.",
      path: "/about",
    },
    services: {
      title: "Massage & Spa Treatments in Dubai",
      description:
        "Compare nine treatments at our Deira spa, including Moroccan hammam, Swedish massage, Thai stretching, deep tissue and hot stone massage.",
      path: "/services",
    },
    gallery: {
      title: "Dubai Spa Gallery",
      description:
        "Explore the treatment rooms, relaxation spaces and massage details featured in the Royal Prime Spa Dubai gallery.",
      path: "/gallery",
    },
    contact: {
      title: "Contact & Book a Massage in Deira, Dubai",
      description:
        "Contact Royal Prime Spa to enquire about massage appointments or get directions to 55 26B Street in Al Muraqqabat, Deira, Dubai.",
      path: "/contact",
    },
    blog: {
      title: "Dubai Spa & Massage Guides",
      description:
        "Plan your first Dubai spa visit and compare massage styles, from Swedish and deep tissue to Thai stretching and Balinese aromatherapy.",
      path: "/blog",
    },
  },
};

export function pageMetadata({ title, description, path, image = seoData.image, type = "website" }) {
  const url = seoData.siteUrl && new URL(path, seoData.siteUrl).href;
  const images = seoData.siteUrl
    ? [{ url: new URL(image.path, seoData.siteUrl).href, alt: image.alt }]
    : undefined;
  const socialTitle = `${title} | ${siteData.shortName}`;

  return {
    title: path === "/" ? { absolute: socialTitle } : title,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: socialTitle,
      description,
      type,
      locale: seoData.locale,
      siteName: siteData.name,
      url,
      images,
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: socialTitle,
      description,
      images,
    },
  };
}

export default seoData;
