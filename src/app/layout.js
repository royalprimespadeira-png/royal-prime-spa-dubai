
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoSchema from "../components/SeoSchema";
import footerData from "../data/footer";
import seoData from "../data/seo";
import siteData from "../data/site";
import FloatingButton from "@/components/floatingbutton";
import OfferPopup from "@/components/offerpopup";

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

export const metadata = {
  metadataBase: seoData.metadataBase,
  title: {
    default: `${seoData.pages.home.title} | ${siteData.shortName}`,
    template: `%s | ${siteData.shortName}`,
  },
  description: seoData.pages.home.description,
  applicationName: siteData.name,
  robots: { "max-image-preview": "large" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AE">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <SeoSchema />
        <Navbar data={siteData} />
        {children}
        <Footer data={footerData} />
        <FloatingButton data={siteData} />
        <OfferPopup data={siteData} />
      </body>
    </html>
  );
}
