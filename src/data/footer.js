
import siteData from "./site";
import serviceData from "./service";

const footerData = {
  brand: {
    name: siteData.name,
    tagline: siteData.tagline,
    description:
      "Book massage and wellness treatments at Royal Prime Spa in Al Muraqqabat, Deira, Dubai.",
  },

  quickLinks: [...siteData.navLinks, { label: "Spa & Massage Guides", href: "/blog" }],

  services: serviceData.services.map(({ id, title }) => ({
    label: title,
    href: `/services/${id}`,
  })),

  contact: {
    phone: siteData.phone,
    whatsapp: siteData.whatsapp,
    email: siteData.email,
    address: siteData.address,
    googleMapsQuery: siteData.googleMapsQuery,
  },

  socialLinks: siteData.socialLinks,

  bottom: {
    copyright: "All Rights Reserved.",
    tagline: "Relax • Refresh • Rejuvenate",
  },
};

export default footerData;
