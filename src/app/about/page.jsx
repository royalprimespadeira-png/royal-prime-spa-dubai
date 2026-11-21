
import Aboutsection from "../../components/Aboutsection";
import aboutData from "../../data/about";
import seoData, { pageMetadata } from "../../data/seo";

export const metadata = pageMetadata(seoData.pages.about);

export default function AboutPage() {
  return <Aboutsection data={aboutData} />;
}
