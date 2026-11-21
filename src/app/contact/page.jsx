
import ContactSection from "../../components/ContactSection";
import seoData, { pageMetadata } from "../../data/seo";
import siteData from "../../data/site";

export const metadata = pageMetadata(seoData.pages.contact);

export default function ContactPage() {
  return <ContactSection data={siteData} />;
}
