import siteData from "./site";

const aboutData = {
  banner: {
    eyebrow: "WELCOME TO ROYAL PRIME SPA",
    title: "About Royal Prime Spa Dubai",
    subtitle:
      "Get to know our spa in Al Muraqqabat, Deira, and the treatments you can book during your visit.",
    image: "/images/services/spa-hero.webp",
  },

  introduction: {
    label: "ROYAL PRIME SPA",
    title: "Massage & Spa Treatments in Deira",
    description:
      `Royal Prime Spa welcomes Dubai residents and visitors at ${siteData.streetAddress} in ${siteData.neighborhood}, ${siteData.district}. Come in for quiet time after work, between appointments or during a stay in Dubai.`,
    description2:
      "Choose flowing strokes with a Swedish massage, guided stretches with traditional Thai massage or steam and exfoliation with a Moroccan hammam. Tell us the style and pressure you prefer when you enquire.",
    image: "/images/heroimages/9.webp",
    highlights: [
      "Full-body relaxation massage",
      "Traditional Moroccan hammam",
      "Guided Thai stretching",
      "Appointments in Deira",
    ],
  },

  philosophy: {
    label: "OUR PHILOSOPHY",
    title: "Relax Your Body, Refresh Your Mind",
    description:
      "Our approach to wellness combines peaceful surroundings, attentive service and thoughtfully selected spa experiences to create moments of complete relaxation.",
    features: [
      {
        id: 1,
        icon: "flower",
        title: "Complete Relaxation",
        description:
          "A calming environment designed to help you escape everyday stress.",
      },
      {
        id: 2,
        icon: "sparkles",
        title: "Luxury Experience",
        description:
          "Enjoy elegant surroundings and thoughtful attention to detail.",
      },
      {
        id: 3,
        icon: "heart",
        title: "Personalized Care",
        description:
          "Spa experiences designed around your comfort and preferences.",
      },
      {
        id: 4,
        icon: "shield",
        title: "Comfort & Privacy",
        description:
          "A welcoming atmosphere that prioritizes your peace of mind.",
      },
    ],
  },

  experience: {
    label: "THE ROYAL EXPERIENCE",
    title: "Choose How You’d Like to Unwind",
    description:
      "Try hot stone massage if you enjoy gentle warmth, or ask about Balinese aromatherapy if you prefer rhythmic massage with scented oil. Our treatment menu explains what to expect before you book.",
    image: "/images/spa/spa-suite.webp",
    buttonText: "Explore Our Services",
    buttonLink: "/services",
  },

  cta: {
    title: "Plan Your Visit to Royal Prime Spa",
    description:
      "Contact our team for current prices, appointment times and directions to Al Muraqqabat.",
    buttonText: "Book Your Experience",
    buttonLink: "/contact",
  },
};

export default aboutData;
