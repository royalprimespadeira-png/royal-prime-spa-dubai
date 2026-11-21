
import GalleryCard from "../../components/GalleryCard";
import galleryData from "../../data/Gallery";
import seoData, { pageMetadata } from "../../data/seo";

export const metadata = pageMetadata(seoData.pages.gallery);

export default function GalleryPage() {
  return <GalleryCard data={galleryData} />;
}
