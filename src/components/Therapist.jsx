
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Flower2,
  Sparkles,
} from "lucide-react";

import "../style/therapist.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Therapist({ data, whatsapp }) {
  const whatsappNumber = (whatsapp || "").replace(/\D/g, "");

  return (
    <section
      className="therapist-section"
      aria-labelledby="therapist-heading"
    >
      <div className="therapist-container">

        {/* SECTION HEADING */}
        <div className="therapist-heading">
          <div className="therapist-eyebrow">
            <span className="therapist-line" />
            <Flower2 size={20} />
            <span>{data.eyebrow}</span>
            <span className="therapist-line" />
          </div>

          <h2 id="therapist-heading">
            {data.title}
          </h2>

          <p>{data.description}</p>
        </div>

        {/* THERAPIST CARDS */}
        <div className="therapist-grid">
          {data.therapists.map((person) => {
            const message = encodeURIComponent(
              `Hello Royal Prime Spa, I would like to enquire about an appointment with ${person.name} for ${person.specialty}.`
            );

            const bookingUrl = whatsappNumber
              ? `https://wa.me/${whatsappNumber}?text=${message}`
              : "/contact";

            return (
              <article
                className="therapist-card"
                key={person.id}
              >
                {/* IMAGE */}
                <div className="therapist-image-wrap">
                  <Image
                    src={person.image}
                    alt={`${person.name} - ${person.role}`}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 950px) 50vw, 33vw"
                    className="therapist-image"
                  />

                  <div className="therapist-image-overlay" />

                  <div className="therapist-image-badge">
                    <Sparkles size={13} />
                    {person.role}
                  </div>

                  <a
                    href={bookingUrl}
                    target={whatsappNumber ? "_blank" : undefined}
                    rel={whatsappNumber ? "noopener noreferrer" : undefined}
                    className="therapist-image-arrow"
                    aria-label={`Enquire about ${person.name}`}
                  >
                    <ArrowUpRight size={22} />
                  </a>
                </div>

                {/* CARD CONTENT */}
                <div className="therapist-card-content">
                  <span className="therapist-specialty">
                    {person.specialty}
                  </span>

                  <h3>{person.name}</h3>

                  <div className="therapist-experience">
                    <CalendarDays size={15} />
                    <span>{person.experience}</span>
                  </div>

                  <p className="therapist-description">
                    {person.description}
                  </p>

                  <div className="therapist-card-bottom">
                    <a
                      href={bookingUrl}
                      target={whatsappNumber ? "_blank" : undefined}
                      rel={whatsappNumber ? "noopener noreferrer" : undefined}
                      className="therapist-book-btn"
                    >
                      <FaWhatsapp size={16} />
                      Book Appointment
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="therapist-bottom">
          <p>
            Looking for a personalized wellness experience?
          </p>

          <Link href="/contact" className="therapist-contact-btn">
            Contact Our Team
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
