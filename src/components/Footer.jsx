import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SpaLogo from "./SpaLogo";
import "../style/footer.css";

export default function Footer({ data }) {
  const { brand, quickLinks, services, contact, socialLinks, bottom } = data;
  const navigation = [
    { heading: "Quick Links", links: quickLinks },
    { heading: "Treatments", links: services },
  ];
  const socials = [
    { label: "Facebook", href: socialLinks.facebook },
    { label: "Instagram", href: socialLinks.instagram },
    { label: "X", href: socialLinks.twitter },
  ].filter(({ href }) => href && href !== "#");

  const phone = contact.phone?.replace(/[^\d+]/g, "");
  const whatsapp = contact.whatsapp?.replace(/\D/g, "");
  const mapQuery = contact.googleMapsQuery || contact.address;
  const contactLinks = [
    {
      label: contact.address,
      href: mapQuery && "https://www.google.com/maps?q=" + encodeURIComponent(mapQuery),
      icon: MapPin,
      external: true,
    },
    { label: contact.phone, href: phone && "tel:" + phone, icon: Phone },
    { label: contact.email, href: contact.email && "mailto:" + contact.email, icon: Mail },
    {
      label: "Chat on WhatsApp",
      href: whatsapp && "https://wa.me/" + whatsapp,
      icon: FaWhatsapp,
      external: true,
    },
  ].filter(({ label, href }) => label && href);

  return (
    <footer className="royal-footer">
      <div className="royal-footer-container">
        <div className="royal-footer-grid">
          <div className="royal-footer-brand">
            <SpaLogo className="royal-footer-logo" sizes="250px" />
            <span className="royal-footer-tagline">{brand.tagline}</span>
            <p>{brand.description}</p>
            {socials.length > 0 && (
              <nav className="royal-footer-socials" aria-label="Social links">
                {socials.map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                ))}
              </nav>
            )}
          </div>

          {navigation.map(({ heading, links }) => (
            <nav key={heading} className="royal-footer-column" aria-label={heading}>
              <h2>{heading}</h2>
              <ul>
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="royal-footer-column royal-footer-contact">
            <h2>Contact</h2>
            <address>
              {contactLinks.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={href}
                  className="royal-footer-contact-item"
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  <Icon size={16} aria-hidden="true" />
                  <span>{label}</span>
                </a>
              ))}
            </address>
            <Link href="/contact" className="royal-footer-book-btn">
              Book a Visit <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="royal-footer-bottom">
          <p>&copy; {brand.name}. {bottom.copyright}</p>
          <span>{bottom.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
