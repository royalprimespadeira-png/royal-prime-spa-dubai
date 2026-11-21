import Link from "next/link";
import { ChevronDown } from "lucide-react";
import siteData from "../data/site";
import "../style/content.css";

export default function FAQ() {
  return (
    <section className="home-faq" aria-labelledby="home-faq-title">
      <div className="spa-content-container">
        <header className="spa-content-heading">
          <h2 id="home-faq-title">Frequently Asked Questions</h2>
        </header>

        <div className="home-faq-list">
          <details>
            <summary>Where is Royal Prime Spa in Dubai?<ChevronDown size={18} aria-hidden="true" /></summary>
            <p>
              Our spa is at {siteData.address}. Find the map and directions on our{" "}
              <Link href="/contact">contact page</Link>.
            </p>
          </details>
          <details>
            <summary>What massage and spa treatments can I book?<ChevronDown size={18} aria-hidden="true" /></summary>
            <p>
              Explore <Link href="/services">our nine treatments</Link>, including Moroccan
              hammam, Swedish massage, Thai stretching, hot stone massage and Balinese aromatherapy.
            </p>
          </details>
          <details>
            <summary>How do I book a massage in Deira?<ChevronDown size={18} aria-hidden="true" /></summary>
            <p>
              Choose a treatment and <Link href="/contact#book">send a booking enquiry</Link>.
              Include your preferred date and time so the team can confirm availability.
            </p>
          </details>
          <details>
            <summary>How much does a massage cost?<ChevronDown size={18} aria-hidden="true" /></summary>
            <p>
              Rates can vary by treatment and session length. <Link href="/contact#book">Ask our team</Link>{" "}
              for the current price when you enquire.
            </p>
          </details>
          <details>
            <summary>Can I book a spa appointment while visiting Dubai?<ChevronDown size={18} aria-hidden="true" /></summary>
            <p>
              Yes. Share your Dubai travel dates and preferred treatment when you{" "}
              <Link href="/contact#book">contact us</Link>. Our{" "}
              <Link href="/blog/first-spa-visit-dubai">first-visit guide</Link> explains what to ask before booking.
            </p>
          </details>
          <details>
            <summary>Are any spa packages or offers available?<ChevronDown size={18} aria-hidden="true" /></summary>
            <p>
              <Link href="/contact#book">Ask our team</Link> about current packages and
              whether you can combine treatments in one visit.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
