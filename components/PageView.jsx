import Link from 'next/link';
import { site } from '@/data/site';

function Figure({ v, eager }) {
  if (!v) return null;
  return (
    <figure className="fig">
      <img src={v.src} alt={v.alt} title={v.title} width="1536" height="1024" loading={eager ? 'eager' : 'lazy'} decoding="async" fetchPriority={eager ? 'high' : 'auto'} />
      <figcaption>{v.caption}</figcaption>
    </figure>
  );
}

export default function PageView({ page }) {
  const url = `${site.url}${page.slug ? `/${page.slug}/` : '/'}`;
  const schema = [
    { '@context': 'https://schema.org', '@type': page.type === 'guide' ? 'Article' : 'Service', name: page.h1, headline: page.h1, description: page.description, url, provider: { '@type': 'Organization', name: site.name, url: site.url }, author: { '@type': 'Person', name: 'Syed Mohsin Ali Shah' }, dateModified: '2026-10-30', image: page.images.map((v) => `${site.url}${v.src}`) },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ...page.images.map((v) => ({ '@context': 'https://schema.org', '@type': 'ImageObject', contentUrl: `${site.url}${v.src}`, name: v.title, caption: v.caption, description: v.description })),
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.h1}</h1>
            <p className="lead">{page.intro}</p>
            <div className="cta-row">
              <a className="btn" href={site.whatsapp} target="_blank" rel="noopener">WhatsApp {site.phone}</a>
              <a className="btn btn-ghost" href={site.phoneHref}>Call {site.phone}</a>
            </div>
          </div>
          <Figure v={page.images[0]} eager />
        </div>
      </section>
      <div className="wrap content-grid">
        <article className="content">
          <div dangerouslySetInnerHTML={{ __html: page.body }} />
          <Figure v={page.images[1]} />
          {page.after && <div dangerouslySetInnerHTML={{ __html: page.after }} />}
          <section className="faq">
            <h2>{page.faqTitle || 'Frequently Asked Questions'}</h2>
            {page.faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </section>
          {page.related?.length > 0 && <section><h3>Related Google Peak Pages</h3><ul>{page.related.map(([h, l]) => <li key={h}><Link href={h}>{l}</Link></li>)}</ul></section>}
          {page.sources && <p className="sources">{page.sources}</p>}
          <p className="credit"><strong>Reviewed by:</strong> {site.reviewer}<br /><strong>Published by:</strong> {site.publisher}<br /><strong>Last updated:</strong> {site.updated}</p>
        </article>
        <aside className="side">
          <div className="side-box">
            <h3>Talk to Google Peak</h3>
            <p>Tell us your website and goal. We reply with a plain plan and a quote.</p>
            <a className="btn" href={site.whatsapp} target="_blank" rel="noopener">WhatsApp {site.phone}</a>
            <a className="btn btn-ghost" href={site.phoneHref}>Call {site.phone}</a>
            <p className="small">{site.address}</p>
          </div>
        </aside>
      </div>
    </>
  );
}
