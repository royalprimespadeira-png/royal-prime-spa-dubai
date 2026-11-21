
"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "../style/hero.css";

export default function Hero({ slides = [], bookingLinks }) {
  const [{ current, previous }, setSlide] = useState({ current: 0, previous: 0 });
  const [playing, setPlaying] = useState(true);

  const moveSlide = useCallback((offset) => {
    setSlide(({ current }) => ({
      current: (current + offset + slides.length) % slides.length,
      previous: current,
    }));
  }, [slides.length]);

  useEffect(() => {
    if (!playing || slides.length <= 1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => moveSlide(1), 7500);

    return () => clearInterval(timer);
  }, [moveSlide, playing, slides.length]);

  if (!slides.length) return null;

  const { phoneHref, whatsappHref, hasWhatsappNumber } = bookingLinks;

  return (
    <section className="royal-hero" aria-label="Spa welcome">
      <div className="royal-hero-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`royal-hero-slide ${
              index === current ? "is-active" : ""
            }`}
            aria-hidden={index !== current}
          >
            {(index === current || index === previous) && (
              <Image
                src={slide.image}
                alt=""
                fill
                preload={index === 0}
                loading={index === 0 ? undefined : "eager"}
                sizes="100vw"
                className="royal-hero-image"
              />
            )}
          </div>
        ))}
      </div>


      <div className="royal-hero-content">
        <span className="royal-hero-eyebrow">
          ROYAL PRIME SPA · DEIRA
        </span>

        <h1>{slides[current].title}</h1>
        <p>{slides[current].subtitle}</p>

        <div className="royal-hero-actions">
          <a href={phoneHref} className="royal-hero-button">
            <span className="royal-hero-button-icon">
              <PhoneCall size={17} aria-hidden="true" />
            </span>
            Call Now
          </a>
          <a
            href={whatsappHref}
            className="royal-hero-button royal-hero-whatsapp"
            target={hasWhatsappNumber ? "_blank" : undefined}
            rel={hasWhatsappNumber ? "noopener noreferrer" : undefined}
          >
            <span className="royal-hero-button-icon">
              <FaWhatsapp size={19} aria-hidden="true" />
            </span>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
