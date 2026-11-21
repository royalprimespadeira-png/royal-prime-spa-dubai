
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import { AboutIntro } from "../components/Aboutsection";
import ServiceCard from "../components/ServiceCard";
import GalleryCard from "../components/GalleryCard";
import ReviewsSection from "../components/ReviewsSection";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";

import siteData, { getBookingLinks } from "../data/site";
import aboutData from "../data/about";
import serviceData from "../data/service";
import galleryData from "../data/Gallery";
import reviewsData from "../data/reviews";
import seoData, { pageMetadata } from "../data/seo";
import Therapist from "../components/Therapist";
import therapistData from "../data/therapist";

export const metadata = pageMetadata(seoData.pages.home);

export default function HomePage() {
  return (
    <main className="home-page">
      <Hero slides={siteData.heroSlides} bookingLinks={getBookingLinks(siteData)} />

      <section className="home-services" aria-labelledby="home-services-title">
        <div className="home-container">
          <div className="home-section-heading">
            <div>
              <span>THE TREATMENT MENU</span>
              <h2 id="home-services-title">Massage &amp; Spa Treatments in Deira</h2>
              <p>Compare full-body massage, Moroccan hammam and traditional Thai stretching.</p>
            </div>
            <Link href="/services" className="home-section-link">
              View All Treatments <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="royal-services-grid">
            {serviceData.services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                contact={serviceData.contact}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1616px) 33vw, 500px"
              />
            ))}
          </div>
        </div>
      </section>

      <div className="about-page home-about">
        <AboutIntro introduction={aboutData.introduction} preview />
      </div>
      <Therapist
  data={therapistData}
  whatsapp={siteData.whatsapp}
/>

      <GalleryCard data={galleryData} preview />

      <ReviewsSection data={reviewsData} />

      <FAQ />

      <ContactSection data={siteData} embedded />
    </main>
  );
}
