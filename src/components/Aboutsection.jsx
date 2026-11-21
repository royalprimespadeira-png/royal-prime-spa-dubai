
import Image from "next/image";
import Link from "next/link";
import {
  Flower2,
  Sparkles,
  Heart,
  ShieldCheck,
  Check,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import "../style/about.css";

const featureIcons = {
  flower: Flower2,
  sparkles: Sparkles,
  heart: Heart,
  shield: ShieldCheck,
};

export function AboutIntro({ introduction, preview = false }) {
  return (
    <section className="about-intro">
      <div className="about-container about-intro-grid">

        <div className="about-image-wrap">
          <div className="about-image-frame">
            <Image
              src={introduction.image}
              alt="A lounge chair in a warmly lit relaxation alcove"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="about-cover-image"
            />
          </div>
        </div>

        <div className="about-intro-content">
          <span className="about-section-label">
            {introduction.label}
          </span>

          <h2>{introduction.title}</h2>

          <div className="about-gold-line" />

          <p>{introduction.description}</p>
          <p>{introduction.description2}</p>

          <div className="about-highlights">
            {introduction.highlights.map((item, index) => (
              <div className="about-highlight" key={index}>
                <span className="about-check">
                  <Check size={15} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link href={preview ? "/about" : "/services"} className="about-primary-btn">
            {preview ? "More About Royal Prime Spa" : "Discover Our Services"}
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Aboutsection({ data }) {
  const {
    banner,
    introduction,
    philosophy,
    experience,
    cta,
  } = data;

  return (
    <main className="about-page">

      {/* HERO BANNER */}
      <section className="about-hero">
        <Image
          src={banner.image}
          alt="A prepared massage table in a softly lit treatment room"
          fill
          preload
          sizes="100vw"
          className="about-hero-image"
        />

        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          <span className="about-eyebrow">
            {banner.eyebrow}
          </span>

          <h1>{banner.title}</h1>

          <p>{banner.subtitle}</p>

          <div className="about-breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={15} />
            <span>About Us</span>
          </div>
        </div>
      </section>

      <AboutIntro introduction={introduction} />

      {/* PHILOSOPHY */}
      <section className="about-philosophy">
        <div className="about-container">

          <div className="about-section-heading">
            <span className="about-section-label">
              {philosophy.label}
            </span>

            <Flower2 className="about-heading-icon" size={26} />

            <h2>{philosophy.title}</h2>

            <p>{philosophy.description}</p>
          </div>

          <div className="about-features-grid">
            {philosophy.features.map((feature) => {
              const Icon =
                featureIcons[feature.icon] || Flower2;

              return (
                <article
                  className="about-feature-card"
                  key={feature.id}
                >
                  <div className="about-feature-icon">
                    <Icon size={29} strokeWidth={1.5} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                  <span className="about-card-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>


  

    </main>
  );
}
