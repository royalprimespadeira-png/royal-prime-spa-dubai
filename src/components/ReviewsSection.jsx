"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import ReviewCard from "./ReviewCard";
import "../style/reviews.css";

function ReviewRow({ reviews, direction, moving }) {
  if (reviews.length === 0) return null;

  return (
    <div className={`reviews-marquee reviews-${direction}`}>
      <div className="reviews-track">
        {(moving ? [0, 1] : [0]).map((copy) => (
          <div
            key={copy}
            className={copy ? "reviews-group reviews-group-copy" : "reviews-group"}
            aria-hidden={copy ? true : undefined}
          >
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ReviewsSection({ data }) {
  const cardsRef = useRef(null);
  const [activeReview, setActiveReview] = useState(0);
  const [paused, setPaused] = useState(false);
  const { reviews, title, subtitle, description, googleReviewsUrl } = data;
  const canScroll = reviews.length >= 3;
  const moving = canScroll && !paused;
  const midpoint = reviews.length >= 6 ? Math.ceil(reviews.length / 2) : reviews.length;

  if (reviews.length === 0 && !googleReviewsUrl) return null;

  function trackReview({ currentTarget }) {
    const { clientWidth, scrollLeft, scrollWidth } = currentTarget;
    if (scrollWidth <= clientWidth) return;

    const gap = Number.parseFloat(getComputedStyle(currentTarget).columnGap);
    const index = Math.round(scrollLeft / (clientWidth + gap));
    setActiveReview(Math.max(0, Math.min(index, reviews.length - 1)));
  }

  function moveReview(offset) {
    const container = cardsRef.current;
    const cards = container.querySelectorAll(".reviews-group:not(.reviews-group-copy) .review-card");
    const nextCard = cards[activeReview + offset];

    if (nextCard) container.scrollTo({ left: nextCard.offsetLeft });
  }

  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="home-container">
        <div className="reviews-heading">
          <div>
            {subtitle && <span className="reviews-eyebrow">{subtitle}</span>}
            <h2 id="reviews-title">{title}</h2>
            {description && <p>{description}</p>}
          </div>
          {(canScroll || googleReviewsUrl) && (
            <div className="reviews-actions">
              {canScroll && (
                <button
                  type="button"
                  className="reviews-motion-btn"
                  aria-controls="review-cards"
                  onClick={() => setPaused((previous) => !previous)}
                >
                  {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
                  {paused ? "Resume scrolling" : "Pause scrolling"}
                </button>
              )}
              {googleReviewsUrl && (
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reviews-google-btn"
                >
                  <FcGoogle size={20} aria-hidden="true" />
                  View reviews on Google
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>

        <div
          id="review-cards"
          ref={cardsRef}
          className={`reviews-marquee-container${moving ? " is-moving" : ""}`}
          onScroll={trackReview}
        >
          <ReviewRow reviews={reviews.slice(0, midpoint)} direction="left" moving={moving} />
          <ReviewRow reviews={reviews.slice(midpoint)} direction="right" moving={moving} />
        </div>

        {reviews.length > 1 && (
          <div className="reviews-mobile-controls" role="group" aria-label="Browse reviews">
            <button
              type="button"
              aria-label="Previous review"
              aria-controls="review-cards"
              disabled={activeReview === 0}
              onClick={() => moveReview(-1)}
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <span aria-live="polite" aria-atomic="true">{activeReview + 1} of {reviews.length}</span>
            <button
              type="button"
              aria-label="Next review"
              aria-controls="review-cards"
              disabled={activeReview === reviews.length - 1}
              onClick={() => moveReview(1)}
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
