import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowRight } from "lucide-react";
import articles from "../../../data/blog";
import { pageMetadata } from "../../../data/seo";
import serviceData from "../../../data/service";
import "../../../style/content.css";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

function getArticle(slug) {
  const article = articles.find((entry) => entry.slug === slug);
  if (!article) notFound();
  return article;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { title, description } = getArticle(slug);
  return pageMetadata({ title, description, path: `/blog/${slug}`, type: "article" });
}

export default function GuidePage({ params }) {
  return (
    <main className="spa-content-page">
      <article className="spa-content-container">
        <Link href="/blog" className="spa-content-link">All spa guides</Link>
        <Suspense fallback={<p className="spa-content-loading" role="status">Loading spa guide…</p>}>
          <GuideDetails params={params} />
        </Suspense>
      </article>
    </main>
  );
}

async function GuideDetails({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  const treatments = serviceData.services.filter(({ id }) => article.services.includes(id));

  return (
    <>
      <header className="spa-content-heading">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </header>
      <div className="spa-content-prose">
        {article.sections.map(({ heading, text }) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{text}</p>
          </section>
        ))}
        <section>
          <h2>Explore related treatments</h2>
          <ul className="spa-guide-treatment-list">
            {treatments.map(({ id, title }) => (
              <li key={id}><Link href={`/services/${id}`}>{title}</Link></li>
            ))}
          </ul>
        </section>
        <Link href="/contact#book" className="spa-content-button">
          Enquire about an appointment <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
