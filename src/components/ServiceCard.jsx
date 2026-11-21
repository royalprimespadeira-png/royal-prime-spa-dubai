
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Clock3, Flower2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "../style/services.css";

export default function ServiceCard({
  service,
  contact,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px",
}) {
  const phone = contact.phone.replace(/[^\d+]/g, "");
  const whatsapp = contact.whatsapp.replace(/\D/g, "");

  const message = encodeURIComponent(
    `Hello Royal Prime Spa Dubai, I would like to book ${service.title}. Please share the availability and price.`
  );

  const whatsappLink = `https://wa.me/${whatsapp}?text=${message}`;

  return (
    <article className="royal-service-card" id={service.id}>
      <div className="royal-service-image-wrap">
        <Image
          src={service.image}
          alt=""
          fill
          sizes={sizes}
          className="royal-service-image"
        />

      </div>

      <div className="royal-service-content">
        <div className="royal-service-ornament">
          <span />
          <Flower2 size={18} />
          <span />
        </div>

        <h3>{service.title}</h3>

        {service.duration && (
          <div className="royal-service-duration">
            <Clock3 size={15} aria-hidden="true" />
            <span>{service.duration}</span>
          </div>
        )}

        <p>{service.description}</p>

        <Link
          href={`/services/${service.id}`}
          className="royal-service-details-link"
          aria-label={`Treatment details for ${service.title}`}
        >
          Treatment details <ArrowRight size={15} aria-hidden="true" />
        </Link>

        <div className="royal-service-actions">
          <a
            href={`tel:${phone}`}
            className="royal-service-call"
            aria-label={`Call to book ${service.title}`}
          >
            <Phone size={16} />
            Call Now
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="royal-service-whatsapp"
            aria-label={`Book ${service.title} on WhatsApp`}
          >
            <FaWhatsapp size={17} aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
