
"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowUpRight,
  Flower2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import serviceData from "../data/service";

import "../style/contact.css";

export default function ContactSection({ data, embedded = false }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const contact = data.contactPage;
  const Container = embedded ? "div" : "main";

  const phone = data.phone.replace(/[^\d+]/g, "");
  const whatsapp = data.whatsapp.replace(/\D/g, "");

  const mapQuery = encodeURIComponent(
    data.googleMapsQuery || data.address
  );

  const mapUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  const directionsUrl =
    `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      `Hello ${data.name},`,
      "",
      "I would like to make an enquiry.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service || "General Enquiry"}`,
      `Message: ${form.message || "Please contact me."}`,
    ].join("\n");

    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Container className="contact-page">

      {/* HERO SECTION */}
      {!embedded && (
        <section className="contact-hero">
          <div className="contact-hero-content">
            <span className="contact-eyebrow">
              {contact.eyebrow}
            </span>

            <Flower2 size={27} strokeWidth={1.3} />

            <h1>{contact.title}</h1>
            <p>{contact.subtitle}</p>
          </div>
        </section>
      )}

      {/* CONTACT DETAILS + FORM */}
      <section className="contact-main-section">
        <div className="contact-container">

          <div className="contact-section-heading">
            <span>WE WOULD LOVE TO HEAR FROM YOU</span>
            {embedded ? <h2>Book a Massage in Deira</h2> : <h2>Contact &amp; Booking</h2>}
            <p>
              Ask about treatment options, current rates and appointment times.
            </p>
          </div>

          <div className="contact-layout">

            {/* LEFT: CONTACT INFORMATION */}
            <div className="contact-details">

              <div className="contact-detail-card">
                <div className="contact-icon">
                  <Phone size={23} />
                </div>

                <div>
                  <h3>Call Us</h3>
                  <p>{data.phone}</p>

                  <a href={`tel:${phone}`}>
                    Call Now <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-icon">
                  <FaWhatsapp size={23} aria-hidden="true" />
                </div>

                <div>
                  <h3>WhatsApp Booking</h3>
                  <p>
                    Chat with us for enquiries and bookings.
                  </p>

                  <a
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp size={15} aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-icon">
                  <Mail size={23} />
                </div>

                <div>
                  <h3>Email Address</h3>
                  <p>{data.email}</p>

                  <a href={`mailto:${data.email}`}>
                    Send Email
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-icon">
                  <MapPin size={23} />
                </div>

                <div>
                  <h3>Our Location</h3>
                  <p>{data.address}</p>

                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <div className="contact-hours">
                <Clock3 size={22} />

                <div>
                  <h3>Opening Hours</h3>
                  <p>
                    Monday - Friday:{" "}
                    {data.openingHours.weekdays}
                  </p>
                  <p>
                    Saturday - Sunday:{" "}
                    {data.openingHours.weekends}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: CONTACT FORM */}
            <div className="contact-form-box" id="book">

              <span className="contact-form-label">
                SEND A MESSAGE
              </span>

              <h2>{contact.formTitle}</h2>
              <p>{contact.formDescription}</p>

              <form onSubmit={handleSubmit}>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">
                      Your Name *
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-phone">
                      Phone Number *
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+971 ..."
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-service">
                    Select Service
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">
                      Choose a service
                    </option>

                    {serviceData.services.map(({ id, title }) => (
                      <option key={id} value={title}>{title}</option>
                    ))}

                    <option value="Other Enquiry">
                      Other Enquiry
                    </option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your enquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  <FaWhatsapp size={17} aria-hidden="true" />
                  Send via WhatsApp
                </button>

                <small className="contact-form-note">
                  Your message will open in WhatsApp
                  for you to send.
                </small>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="contact-map-section">
        <div className="contact-container">

          <div className="contact-section-heading">
            <span>VISIT OUR SPA</span>

            <h2>{contact.mapTitle}</h2>
            <p>{contact.mapDescription}</p>
          </div>

          <div className="contact-map-wrapper">
            <iframe
              src={mapUrl}
              title={`${data.name} Location`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="contact-map-footer">
            <div>
              <MapPin size={22} />
              <span>{data.address}</span>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>
      </section>
    </Container>
  );
}
