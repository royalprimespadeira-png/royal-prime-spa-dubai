import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { getBookingLinks } from "../data/site";
import "../style/floatingbutton.css";

export default function FloatingButton({ data }) {
  const { phoneHref, whatsappHref, hasWhatsappNumber } = getBookingLinks(data);

  return (
    <aside className="royal-floating-buttons" aria-label="Quick booking options">
      <a
        href={phoneHref}
        className="royal-float-btn royal-float-call"
        aria-label="Call Royal Prime Spa"
      >
        <PhoneCall size={21} aria-hidden="true" />
        <span className="royal-float-label">Call Now</span>
      </a>

      <a
        href={whatsappHref}
        target={hasWhatsappNumber ? "_blank" : undefined}
        rel={hasWhatsappNumber ? "noopener noreferrer" : undefined}
        className="royal-float-btn royal-float-whatsapp"
        aria-label="Book appointment on WhatsApp"
      >
        <FaWhatsapp size={23} aria-hidden="true" />
        <span className="royal-float-label">WhatsApp</span>
      </a>
    </aside>
  );
}
