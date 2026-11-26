import "./globals.css";
import localFont from "next/font/local";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoSchema from "../components/SeoSchema";
import FloatingButton from "@/components/floatingbutton";
import OfferPopup from "@/components/offerpopup";

// Data
import footerData from "../data/footer";
import seoData from "../data/seo";
import siteData from "../data/site";

// ==========================================
// LOCAL FONTS
// ==========================================

const headingFont = localFont({
  src: "./fonts/cormorant-garamond.woff2",
  weight: "400 700",
  variable: "--font-royal-heading",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const bodyFont = localFont({
  src: "./fonts/manrope.woff2",
  weight: "200 800",
  variable: "--font-royal-body",
  display: "swap",
});

// ==========================================
// WEBSITE SEO CONFIGURATION
// ==========================================

const { siteUrl, metadataBase, image } = seoData;
const socialImages = siteUrl ? [{ url: image.path, alt: image.alt }] : undefined;

const seoTitle =
  "Spa & Massage Center in Deira Dubai | Royal Prime Spa";

const seoDescription =
  "Discover Royal Prime Spa in Al Muraqqabat, Deira, Dubai. Experience relaxing full body massage, professional spa treatments, wellness services and exclusive massage offers. Book your appointment today.";

// ==========================================
// ADVANCED SEO METADATA
// ==========================================

export const metadata = {
  metadataBase,

  title: {
    default: seoTitle,
    template: `%s | ${siteData.shortName || "Royal Prime Spa Dubai"}`,
  },

  description: seoDescription,

  applicationName: "Royal Prime Spa Dubai",

  // ========================================
  // DUBAI SPA & MASSAGE SEO KEYWORDS
  // ========================================

  keywords: [
    // Primary Keywords
    "spa dubai",
    "massage dubai",
    "spa near me",
    "massage near me",
    "best spa in dubai",
    "best massage in dubai",
    "massage center dubai",
    "dubai massage center",
    "spa and massage dubai",
    "luxury spa dubai",
    "premium spa dubai",
    "luxury massage dubai",

    // Local SEO Keywords
    "spa in deira dubai",
    "massage in deira dubai",
    "spa deira",
    "massage deira",
    "deira spa dubai",
    "deira massage center",
    "best spa in deira",
    "best massage in deira",
    "luxury spa in deira",
    "massage center in deira dubai",
    "spa al muraqqabat",
    "massage al muraqqabat",
    "spa in al muraqqabat dubai",
    "massage center al muraqqabat",
    "spa near al rigga",
    "massage near al rigga",
    "al rigga spa dubai",
    "al rigga massage dubai",
    "spa near deira city centre",
    "massage near deira city centre",
    "spa near me dubai",
    "massage near me dubai",

    // Massage Services
    "full body massage dubai",
    "full body massage deira",
    "thai massage dubai",
    "swedish massage dubai",
    "deep tissue massage dubai",
    "balinese massage dubai",
    "aromatherapy massage dubai",
    "hot stone massage dubai",
    "couples massage dubai",
    "relaxation massage dubai",
    "oil massage dubai",
    "foot massage dubai",
    "sports massage dubai",
    "body massage dubai",
    "professional massage dubai",
    "massage therapy dubai",
    "moroccan bath dubai",

    // Wellness Keywords
    "wellness spa dubai",
    "wellness center dubai",
    "spa treatment dubai",
    "relaxation spa dubai",
    "luxury wellness dubai",
    "luxury spa and wellness dubai",
    "wellness center in deira",
    "body relaxation massage dubai",

    // Offers and Booking Keywords
    "spa offers dubai",
    "massage offers dubai",
    "spa deals dubai",
    "massage deals dubai",
    "spa packages dubai",
    "massage packages dubai",
    "affordable spa dubai",
    "affordable massage dubai",
    "massage price dubai",
    "book massage dubai",
    "spa booking dubai",
    "massage appointment dubai",
    "spa offers deira dubai",
    "massage offers deira dubai",

    // Brand Keywords
    "royal prime spa",
    "royal prime spa dubai",
    "royal prime spa deira",
    "royal prime massage dubai",
    "royal prime spa al muraqqabat",
    "royal prime wellness spa",
    "royal prime spa uae",

    // Arabic SEO Keywords
    "سبا دبي",
    "مساج دبي",
    "أفضل سبا في دبي",
    "أفضل مساج في دبي",
    "مساج بالقرب مني",
    "مساج ديرة دبي",
    "سبا ديرة دبي",
    "مركز مساج دبي",
    "مساج الجسم كامل دبي",
    "مساج تايلندي دبي",
    "حمام مغربي دبي",
    "عروض مساج دبي",
    "مركز سبا دبي",

    // Additional Keywords from SEO Data
    ...(seoData.keywords || []),
  ],

  // ========================================
  // WEBSITE AUTHOR & PUBLISHER
  // ========================================

  authors: [
    {
      name: "Royal Prime Spa Dubai",
      url: siteUrl,
    },
  ],

  creator: "Royal Prime Spa Dubai",
  publisher: "Royal Prime Spa Dubai",

  category: "Spa, Massage, Beauty and Wellness",

  // ========================================
  // FAVICON & WEBSITE ICONS
  // ========================================

  icons: {
    icon: [
      {
        url: "/images/logo/2.png",
        sizes: "any",
      },
      {
        url: "/images/logo/2.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/logo/2.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/logo/2.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    shortcut: "/images/logo/2.png",

    apple: [
      {
        url: "/images/logo/2.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  // ========================================
  // GOOGLE & SEARCH ENGINE ROBOTS
  // ========================================

  robots: {
    index: true,
    follow: true,
    nocache: false,

    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  // ========================================
  // OPEN GRAPH - FACEBOOK & WHATSAPP
  // ========================================

  openGraph: {
    type: "website",

    locale: "en_AE",

    url: siteUrl,

    siteName: "Royal Prime Spa Dubai",

    title: seoTitle,

    description: seoDescription,

    images: socialImages,
  },

  // ========================================
  // TWITTER / X SEO
  // ========================================

  twitter: {
    card: socialImages ? "summary_large_image" : "summary",

    title: seoTitle,

    description: seoDescription,

    images: socialImages,
  },

  // ========================================
  // SEARCH CONSOLE VERIFICATION
  // ========================================

  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,

    other: {
      "msvalidate.01":
        process.env.BING_SITE_VERIFICATION || "",
    },
  },

  // ========================================
  // LOCAL BUSINESS & LOCATION META TAGS
  // ========================================

  other: {
    "geo.region": "AE-DU",

    "geo.placename": "Al Muraqqabat, Deira, Dubai",

    "business:contact_data:street_address":
      "55 26B St, Al Muraqqabat",

    "business:contact_data:locality": "Deira",

    "business:contact_data:region": "Dubai",

    "business:contact_data:country_name":
      "United Arab Emirates",

    "business:contact_data:website": siteUrl,

    "business:contact_data:phone_number":
      siteData.phone || "",

    "apple-mobile-web-app-capable": "yes",

    "apple-mobile-web-app-status-bar-style":
      "black-translucent",
  },

  // ========================================
  // MOBILE FORMAT CONFIGURATION
  // ========================================

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  referrer: "strict-origin-when-cross-origin",
};

// ==========================================
// VIEWPORT & MOBILE RESPONSIVE SETTINGS
// ==========================================

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C6A56B",
  colorScheme: "light",
};

// ==========================================
// ROOT LAYOUT
// ==========================================

export default function RootLayout({ children }) {
  return (
    <html lang="en-AE">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        {/* Google JSON-LD Structured Data */}
        <SeoSchema />

        {/* Main Navigation */}
        <Navbar data={siteData} />

        {/* Website Page Content */}
        {children}

        {/* Website Footer */}
        <Footer data={footerData} />

        {/* Floating WhatsApp & Call Buttons */}
        <FloatingButton data={siteData} />

        {/* Special Spa Offer Popup */}
        <OfferPopup data={siteData} />


        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-5SMHXKVX">   </script>
       <script>{` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); `}
         </script>
{/* 
        <!-- Event snippet for Call Now conversion page --> */}
<script>
  {`
  gtag('event', 'conversion', {
      'send_to': 'AW-18593654747/yTUmCJCSlb8dENvPkqJF',
      'value': 1.0,
      'currency': 'INR'
  });
  `}
</script>
{/* 
<!-- Event snippet for WA Now conversion page --> */}
<script>
  {`
  gtag('event', 'conversion', {
      'send_to': 'AW-18593654747/cxprCPiglb8dENvPkqJF',
      'value': 1.0,
      'currency': 'INR'
  });`}
</script>
      </body>
    </html>
  );
}
