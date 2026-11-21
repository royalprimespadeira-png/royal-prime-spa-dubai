
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Flower2,
} from "lucide-react";

import "../style/Gallery.css";

export default function GalleryCard({ data, preview = false }) {
  const [activeImage, setActiveImage] = useState(null);

  const { heading, images, cta } = data;
  const Container = preview ? "div" : "main";
  const Heading = preview ? "h2" : "h1";
  const imageSizes = preview
    ? "(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1616px) 33vw, 500px"
    : "(max-width: 600px) 100vw, (max-width: 900px) 50vw, 400px";

  const openImage = (index) => setActiveImage(index);
  const closeImage = () => setActiveImage(null);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (activeImage === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeImage();

      if (event.key === "ArrowRight") {
        setActiveImage((prev) => (prev + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveImage(
          (prev) => (prev - 1 + images.length) % images.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, images.length]);

  return (
    <Container className="royal-gallery-page">

      <section className="royal-gallery-section">
        <div className="royal-gallery-container">

          {/* HEADING */}
          <div className="royal-gallery-intro">
            <span className="royal-gallery-eyebrow">
              {preview ? "THE SPA GALLERY" : heading.label}
            </span>

            <Heading>{preview ? "Inside the spa experience" : heading.title}</Heading>

            {!preview && <p>{heading.description}</p>}

            <Link
              href={preview ? "/gallery" : "#gallery-collection"}
              className="royal-gallery-explore"
            >
              {preview ? "View Full Gallery" : heading.buttonText}
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* GALLERY */}
          <div
            id="gallery-collection"
            className="royal-gallery-grid"
          >
            {images.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className="royal-gallery-item"
                onClick={() => openImage(index)}
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={imageSizes}
                  className="royal-gallery-image"
                />

                <span className="royal-gallery-image-overlay">
                  <ZoomIn size={25} />
               
                  <small>{item.category}</small>
                </span>
              </button>
            ))}
          </div>

          {/* BOTTOM TEXT */}
          {!preview && (
            <div className="royal-gallery-bottom">
              <Flower2 size={26} strokeWidth={1.3} />

              <h2>{cta.title}</h2>

              <p>{cta.description}</p>

              <Link
                href={cta.buttonLink}
                className="royal-gallery-cta"
              >
                {cta.buttonText}
                <ArrowRight size={17} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* IMAGE LIGHTBOX */}
      {activeImage !== null && (
        <div
          className="royal-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onClick={closeImage}
        >
          <button
            className="royal-gallery-close"
            onClick={closeImage}
            aria-label="Close image"
            type="button"
          >
            <X size={26} />
          </button>

          <button
            className="royal-gallery-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
            type="button"
          >
            <ChevronLeft size={26} />
          </button>

          <div
            className="royal-gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="royal-gallery-lightbox-image">
              <Image
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                fill
                sizes="90vw"
                style={{ objectFit: "contain" }}
              />
            </div>

            <h3>{images[activeImage].title}</h3>

            <span>
              {activeImage + 1} / {images.length}
            </span>
          </div>

          <button
            className="royal-gallery-lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
            type="button"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </Container>
  );
}
