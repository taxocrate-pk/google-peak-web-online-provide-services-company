import Link from 'next/link';
import { site, nav } from '@/data/site';
const guides = [
  ['/what-is-seo-is-seo-important-how-does-seo-work-learn-seo/', 'What is SEO?'],
  ['/what-is-backlinking-and-how-to-do-it/', 'How to Build Backlinks'],
  ['/content-writing-seo-content-writing-why-is-seo-content-writing-important/', 'SEO Content Writing'],
  ['/article-rewriting-what-is-article-rewriting-article-rewriting-ai-tools/', 'Article Rewriting'],
  ['/what-is-google-peak/', 'What is Google Peak?'],
];
export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-grid">
        <div><p className="logo"><span className="logo-mark">GP</span><span>Google <b>Peak</b></span></p><p>{site.tagline} — SEO, digital marketing, web development and content for businesses in Pakistan and abroad.</p></div>
        <div><h4>Services</h4>{nav.slice(0, 5).map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}</div>
        <div><h4>Guides</h4>{guides.map(([h, l]) => <Link key={h} href={h}>{l}</Link>)}</div>
        <div><h4>Contact</h4><p>{site.address}</p><a href={site.phoneHref}>Call {site.phone}</a><a href={site.whatsapp} target="_blank" rel="noopener">WhatsApp {site.phone}</a></div>
      </div>
      <p className="wrap copy">© {site.founded}–2026 Google Peak. All rights reserved.</p>
    </footer>
  );
}
