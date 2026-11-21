
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, Phone, Home,
  Images, Info, Flower2, Contact, Sparkles,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { getBookingLinks } from "../data/site";
import SpaLogo from "./SpaLogo";
import "../style/navbar.css";

const icons = {
  home: Home,
  spa: Flower2,
  gallery: Images,
  about: Info,
  contact: Contact,
};

export default function Navbar({ data }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const { phoneHref, whatsappHref, hasWhatsappNumber } = getBookingLinks(data);
  const whatsappTarget = hasWhatsappNumber ? "_blank" : undefined;
  const whatsappRel = hasWhatsappNumber ? "noopener noreferrer" : undefined;
  const socialLinks = [
    { label: "Facebook", href: data.socialLinks?.facebook?.trim(), Icon: FaFacebookF },
    { label: "Instagram", href: data.socialLinks?.instagram?.trim(), Icon: FaInstagram },
    { label: "WhatsApp", href: hasWhatsappNumber ? whatsappHref : undefined, Icon: FaWhatsapp },
  ].filter(({ href }) => /^https?:\/\//i.test(href || ""));

  return (
    <header className="spa-header" data-layout={pathname === "/" ? "home" : undefined}>
      <div className="spa-topbar">
        <div className="spa-top-inner">
          <div className="spa-socials">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>

          <SpaLogo className="spa-brand" sizes="(max-width: 640px) 216px, 270px" preload />

          <a className="spa-top-phone" href={phoneHref} aria-label={data.phone ? `Call ${data.phone}` : "Contact Royal Prime Spa"}>
            <Phone size={15} />
            <span>{data.phone ? `Call Us: ${data.phone}` : "Contact Us"}</span>
          </a>
        </div>
      </div>

      <div className="spa-goldbar">
        <div className="spa-nav-inner">
          <Link href="/contact" className="spa-mobile-appointment" onClick={() => setMenuOpen(false)}>
            Book a Visit
          </Link>

          <nav className={`spa-navlinks ${menuOpen ? "open" : ""}`}
            id="primary-navigation" aria-label="Main navigation">
            {data.navLinks.map((item) => {
              const Icon = icons[item.icon] || Sparkles;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`spa-navlink ${active ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon size={15} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <a
              href={whatsappHref}
              className="spa-mobile-book"
              target={whatsappTarget}
              rel={whatsappRel}
              onClick={() => setMenuOpen(false)}
            >
              <FaWhatsapp size={16} aria-hidden="true" /> Book Now
            </a>
          </nav>

          <a href={whatsappHref}
            className="spa-book-btn"
            target={whatsappTarget}
            rel={whatsappRel}>
            <FaWhatsapp size={15} aria-hidden="true" /> Book Now
          </a>

          <button
            className="spa-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>
    </header>
  );
}
