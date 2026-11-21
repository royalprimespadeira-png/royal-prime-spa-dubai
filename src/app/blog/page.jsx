import Link from "next/link";
import { ArrowRight } from "lucide-react";
import articles from "../../data/blog";
import seoData, { pageMetadata } from "../../data/seo";
import "../../style/content.css";

export const metadata = pageMetadata(seoData.pages.blog);

export default function BlogPage() {
  return (
    <main className="spa-content-page">
      <div className="spa-content-container">
        <header className="spa-content-heading">
          <h1>Dubai Spa &amp; Massage Guides</h1>
          <p>Compare treatments and plan your visit to Royal Prime Spa in Deira.</p>
        </header>
        <div className="spa-guide-list">
          {articles.map((article) => (
            <article key={article.slug} className="spa-guide-card">
              <h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2>
              <p>{article.description}</p>
              <Link
                className="spa-content-link"
                href={`/blog/${article.slug}`}
                aria-label={`Read ${article.title}`}
              >
                Read the guide <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
