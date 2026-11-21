import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "../../../data/seo";
import serviceData from "../../../data/service";
import siteData from "../../../data/site";
import "../../../style/content.css";

export function generateStaticParams() {
  return serviceData.services.map(({ id }) => ({ slug: id }));
}

function getService(slug) {
  const service = serviceData.services.find(({ id }) => id === slug);
  if (!service) notFound();
  return service;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  return pageMetadata({
    title: service.seoTitle,
    description: `${service.description} Enquire at Royal Prime Spa in Deira, Dubai.`,
    path: `/services/${slug}`,
    image: { path: service.image, alt: service.imageAlt },
  });
}

export default function TreatmentPage({ params }) {
  return (
    <main className="spa-content-page">
      <div className="spa-content-container">
        <Link href="/services" className="spa-content-link">All spa treatments</Link>
        <Suspense fallback={<p className="spa-content-loading" role="status">Loading treatment details…</p>}>
          <TreatmentDetails params={params} />
        </Suspense>
      </div>
    </main>
  );
}

async function TreatmentDetails({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  return (
    <>
      <header className="spa-content-heading">
        <p className="spa-content-location">
          <MapPin size={15} aria-hidden="true" /> Al Muraqqabat, Deira, Dubai
        </p>
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </header>

      <div className="spa-content-columns">
        <div className="spa-content-prose">
          <h2>What to expect</h2>
          {service.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

          <h2>Book in Deira</h2>
          <p>
            Visit us at {siteData.streetAddress} in {siteData.neighborhood}, {siteData.district}.
            Ask our team about session lengths, prices and available appointments.
          </p>
          <Link href="/contact#book" className="spa-content-button">
            Enquire about this treatment <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="spa-content-image">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 760px) 100vw, (max-width: 1200px) 40vw, 480px"
          />
        </div>
      </div>
    </>
  );
}
