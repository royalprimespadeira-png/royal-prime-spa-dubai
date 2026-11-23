
const streetAddress = "55 26B Street";
const neighborhood = "Al Muraqqabat";
const district = "Deira";
const address = `${streetAddress}, ${neighborhood}, ${district}, Dubai, United Arab Emirates`;

const siteData = {
  name: "Royal Prime Spa Dubai",
  shortName: "Royal Prime Spa",
  tagline: "Luxury Wellness & Relaxation",
  phone: "+971561276273", // Replace with your number
  email: "royalprimespa.deira@gmail.com", // Replace with your email
  whatsapp: "971561276273", // Replace with your WhatsApp number

  streetAddress,
  neighborhood,
  district,
  address,
  googleMapsQuery: address,

  openingHours: {
    weekdays: "Contact us for opening hours",
    weekends: "Contact us for opening hours",
  },

  contactPage: {
    eyebrow: "GET IN TOUCH",
    title: "Book a Spa Appointment in Deira",
    subtitle:
      "Ask about treatments, appointment times and prices at Royal Prime Spa Dubai.",

    formTitle: "Send Us an Enquiry",
    formDescription:
      "Have a question or want to arrange a spa appointment? Send us a message on WhatsApp.",

    mapTitle: "Find Our Spa in Al Muraqqabat, Deira",
    mapDescription:
      `Find Royal Prime Spa at ${streetAddress} in ${neighborhood}, ${district}. Use the map to plan your visit.`,
  },


  socialLinks: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },

  navLinks: [
    { label: "Home", href: "/", icon: "home" },
    { label: "Services", href: "/services", icon: "spa" },
    { label: "Gallery", href: "/gallery", icon: "gallery" },
    { label: "About", href: "/about", icon: "about" },
    { label: "Contact", href: "/contact", icon: "contact" },
  ],

  heroSlides: [
    {
      id: 1,
      image: "/images/heroimages/10.webp",
      title: "Best Spa in Deira  ",
      subtitle:
        "Unwind in Al Muraqqabat, Deira, with a Moroccan hammam, a full-body Swedish massage or a treatment chosen for your preferred pressure and pace.",
    },
    {
      id: 2,
      image: "/images/heroimages/11.webp",
      title: "New Staff Available ",
      subtitle:
        "Compare deep tissue massage, traditional Thai stretching and Balinese aromatherapy before you book.",
    },
    {
      id: 3,
      image: "/images/heroimages/9.webp",
      title: "No 1 Spa in Deira",
      subtitle:
        "Explore our gallery of treatment suites, relaxation spaces and spa details.",
    },
  ],
};

export function getBookingLinks({ name, phone, whatsapp }) {
  const phoneNumber = (phone || "").replace(/[^\d+]/g, "");
  const whatsappNumber = (whatsapp || "").replace(/\D/g, "");
  const message = encodeURIComponent(
    `Hello ${name}, I would like to book a massage appointment. Please share your available services and prices.`
  );

  return {
    phoneHref: phoneNumber ? `tel:${phoneNumber}` : "/contact",
    whatsappHref: whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${message}` : "/contact",
    hasWhatsappNumber: Boolean(whatsappNumber),
  };
}

export default siteData;
