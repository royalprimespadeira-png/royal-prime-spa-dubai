
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  PhoneCall,
  MessageCircle,
  Clock3,
  Sparkles,
} from "lucide-react";

import "../style/offerpopup.css";
import { FaWhatsapp } from "react-icons/fa";

const OFFER_DURATION = 180;
const POPUP_DELAY = 15000;

export default function OfferPopup({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(OFFER_DURATION);
  const [deadline, setDeadline] = useState(null);

  const phone = (data?.phone || "").replace(/[^\d+]/g, "");
  const whatsapp = (data?.whatsapp || "").replace(/\D/g, "");

  const message = encodeURIComponent(
    `Hello ${data?.name || "Royal Prime Spa Dubai"}, I am interested in your 99 AED spa offer. Please share the treatment details and available appointment timings.`
  );

  // OPEN POPUP AFTER 15 SECONDS
  useEffect(() => {
    if (sessionStorage.getItem("royalOfferShown")) return;

    const popupTimer = setTimeout(() => {
      sessionStorage.setItem("royalOfferShown", "true");

      setDeadline(Date.now() + OFFER_DURATION * 1000);
      setIsOpen(true);
    }, POPUP_DELAY);

    return () => clearTimeout(popupTimer);
  }, []);

  // THREE MINUTE COUNTDOWN
  useEffect(() => {
    if (!isOpen || !deadline) return;

    const updateCountdown = () => {
      const remaining = Math.max(
        0,
        Math.ceil((deadline - Date.now()) / 1000)
      );

      setTimeLeft(remaining);
    };

    updateCountdown();

    const countdown = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdown);
  }, [isOpen, deadline]);

  // CLOSE USING ESCAPE KEY
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const minutes = String(
    Math.floor(timeLeft / 60)
  ).padStart(2, "0");

  const seconds = String(
    timeLeft % 60
  ).padStart(2, "0");

  if (!isOpen) return null;

  return (
    <div
      className="royal-offer-overlay"
      onClick={() => setIsOpen(false)}
    >
      <section
        className="royal-offer-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="royal-offer-title"
        onClick={(event) => event.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          className="royal-offer-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close offer popup"
          autoFocus
        >
          <X size={21} />
        </button>

        {/* TOP IMAGE */}
        <div className="royal-offer-image">
          <Image
            src="/images/therapist/3.png"
            alt="Luxury massage and spa treatment room"
            fill
            sizes="(max-width: 600px) 94vw, 440px"
            className="royal-offer-photo"
          />

          <div className="royal-offer-image-overlay" />

          <div className="royal-offer-image-text">
            <Sparkles size={17} />
            Royal Prime Spa Dubai
          </div>
        </div>

        {/* OFFER CONTENT */}
        <div className="royal-offer-content">
          <div className="royal-offer-tag">
            <Sparkles size={14} />
            EXCLUSIVE SPA OFFER
            <Sparkles size={14} />
          </div>


          <p className="royal-offer-subtitle">
            Luxury Spa & Relaxation Experience
          </p>

          {/* OFFER PRICE */}
          <div className="royal-offer-price">
            <span className="royal-offer-only">ONLY</span>
            <strong>99</strong>
            <span className="royal-offer-currency">AED</span>
          </div>


          {/* COUNTDOWN */}
          <div className="royal-offer-countdown">
            <div className="royal-countdown-heading">
              <Clock3 size={15} />

              {timeLeft > 0
                ? "QUICK BOOKING WINDOW"
                : "CHECK OFFER AVAILABILITY"}
            </div>

            <div className="royal-countdown-timer">
              <div className="royal-time-box">
                <strong>{minutes}</strong>
                <small>MINUTES</small>
              </div>

              <span className="royal-time-colon">:</span>

              <div className="royal-time-box">
                <strong>{seconds}</strong>
                <small>SECONDS</small>
              </div>
            </div>

            <div className="royal-timer-progress">
              <div
                style={{
                  width: `${(timeLeft / OFFER_DURATION) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* BOOKING BUTTONS */}
          <div className="royal-offer-buttons">

            <a
              href={phone ? `tel:${phone}` : "/contact"}
              className="royal-offer-call"
            >
              <PhoneCall size={19} />
              Call Now
            </a>

            <a
              href={
                whatsapp
                  ? `https://wa.me/${whatsapp}?text=${message}`
                  : "/contact"
              }
              target={whatsapp ? "_blank" : undefined}
              rel={whatsapp ? "noopener noreferrer" : undefined}
              className="royal-offer-whatsapp"
            >
              <FaWhatsapp size={21} />
              WhatsApp
            </a>

          </div>

          <p className="royal-offer-terms">
            Terms and appointment availability apply.
          </p>

          <button
            type="button"
            className="royal-offer-dismiss"
            onClick={() => setIsOpen(false)}
          >
            Continue Exploring
          </button>
        </div>
      </section>
    </div>
  );
}
