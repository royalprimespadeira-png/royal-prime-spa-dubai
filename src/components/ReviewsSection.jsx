"use client";

import { useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
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
  const [paused, setPaused] = useState(false);
  const { reviews, title, subtitle, description, googleReviewsUrl } = data;
  const canScroll = reviews.length >= 3;
  const moving = canScroll && !paused;
  const midpoint = reviews.length >= 6 ? Math.ceil(reviews.length / 2) : reviews.length;

  if (reviews.length === 0 && !googleReviewsUrl) return null;

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

        <div id="review-cards" className={`reviews-marquee-container${moving ? " is-moving" : ""}`}>
          <ReviewRow reviews={reviews.slice(0, midpoint)} direction="left" moving={moving} />
          <ReviewRow reviews={reviews.slice(midpoint)} direction="right" moving={moving} />
        </div>
      </div>
    </section>
  );
}
