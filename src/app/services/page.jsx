
import Image from "next/image";
import { Flower2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import ServiceCard from "../../components/ServiceCard";
import serviceData from "../../data/service";
import seoData, { pageMetadata } from "../../data/seo";
import "../../style/services.css";

export const metadata = pageMetadata(seoData.pages.services);

export default function ServicesPage() {
  const { heading, services, contact } = serviceData;

  return (
    <main className="royal-services-page">

      {/* HERO */}
      <section className="royal-services-hero">
        <Image
          src={heading.background}
          alt=""
          fill
          preload
          sizes="100vw"
          className="royal-services-bg"
        />

        <div className="royal-services-overlay" />

        <div className="royal-services-hero-content">
          <span className="royal-services-eyebrow">
            {heading.label}
          </span>

          <h1>{heading.title}</h1>

          <p>{heading.description}</p>

          <div className="royal-services-breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={15} />
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="royal-services-section">
        <div className="royal-services-container">

          <div className="royal-services-heading">
            <span>RELAX • REFRESH • REJUVENATE</span>

            <Flower2 size={28} strokeWidth={1.3} />

            <h2>Compare Our Spa Treatments</h2>

            <p>
              Explore the techniques, pressure and pace of each treatment before
              choosing a massage or hammam appointment in Deira.
            </p>
          </div>

          <div className="royal-services-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                contact={contact}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="royal-services-cta">
        <Flower2 size={30} strokeWidth={1.4} />

        <h2>Give Yourself the Gift of Relaxation</h2>

        <p>
          Contact Royal Prime Spa Dubai and discover your next
          wellness experience.
        </p>

        <a
          href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello Royal Prime Spa Dubai, I would like to enquire about your spa services.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="royal-services-cta-button"
        >
          <FaWhatsapp size={17} aria-hidden="true" />
          Book Your Experience
        </a>
      </section>
    </main>
  );
}
