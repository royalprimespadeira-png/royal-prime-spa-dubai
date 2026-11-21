import Image from "next/image";
import { Star } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function ReviewCard({ review }) {
  const initials = review.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <article className="review-card">
      <header className="review-card-header">
        <div className="review-person">
          <div className="review-avatar" aria-hidden="true">
            {review.avatar ? (
              <Image
                src={review.avatar}
                alt=""
                fill
              sizes="(max-width: 640px) 48px, 42px"
                className="review-avatar-img"
              />
            ) : (
              initials
            )}
          </div>
          <h3>{review.name}</h3>
        </div>
        <FcGoogle className="review-google-logo" size={26} aria-hidden="true" />
      </header>

      <div className="review-meta">
        <div className="review-stars" role="img" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={16}
              strokeWidth={1.5}
              fill={index < review.rating ? "currentColor" : "none"}
              className={index >= review.rating ? "review-star-empty" : undefined}
              aria-hidden="true"
            />
          ))}
        </div>
        {review.date && <span className="review-date">{review.date}</span>}
      </div>

      <blockquote className="review-card-text">
        <p>{review.text}</p>
      </blockquote>
    </article>
  );
}
