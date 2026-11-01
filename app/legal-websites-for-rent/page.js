import { legalSites, offerPhone } from '@/data/legal-sites';
import { site } from '@/data/site';

export const metadata = {
  title: 'Legal Websites for Rent, Partnership or Sale | Google Peak',
  description: 'Ranking legal websites for lawyers in Pakistan — city, family, tax and court marriage domains for monthly rent, partnership or sale, with Google promotion. WhatsApp 0333 2316871.',
  alternates: { canonical: '/legal-websites-for-rent/' },
}

const wa = (domain, mode) => `https://wa.me/${offerPhone}?text=${encodeURIComponent(`Assalam-o-Alaikum. I am interested in ${domain} for ${mode}.`)}`
const ur = { fontFamily: "'Noto Nastaliq Urdu','Jameel Noori Nastaleeq',serif", lineHeight: 2.2 }

export default function Page() {
  const total = Object.values(legalSites).flat().length
  return <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@500;700&display=swap" rel="stylesheet" />
    <section className="hero"><div className="wrap">
      <p className="eyebrow">For lawyers · Rent · Partnership · Sale</p>
      <h1>Legal Websites for Rent, Partnership or Sale — with Google Promotion</h1>
      <p dir="rtl" lang="ur" style={{ ...ur, fontSize: 24, color: 'var(--navy)', margin: '0 0 10px' }}>وکلاء کے لیے: قانون سے متعلق بہترین ناموں کی ویب سائٹس — گوگل پروموشن کے ساتھ</p>
      <p className="lead">{total} ready legal websites with strong names — city lawyer sites, national family, tax and court marriage domains. Take a site on monthly rent first; partnership or outright purchase is also possible. Your name, office address and WhatsApp go on the site, and every enquiry comes straight to you.</p>
      <div className="cta-row"><a className="btn" href={wa('a legal website', 'rent')}>WhatsApp 0333 2316871</a><a className="btn btn-ghost" href="#list">See the websites</a></div>
    </div></section>

    <section className="wrap" style={{ padding: '8px 16px 0' }}>
      <h2>Our Top 10 Promise</h2>
      <div className="cards">
        <div className="card"><h3>Already in the top 10</h3><p>Many of these sites already rank on Google. You take them over as they are, with promotion continuing every month.</p></div>
        <div className="card"><h3>Not yet in the top 10</h3><p>Choose the site and pay a booking deposit. We take one to two months to bring its main pages into Google's top 10.</p></div>
        <div className="card"><h3>Deposit back</h3><p>If the main pages are not in the top 10 at the end of the agreed period, the booking deposit is returned. The terms are written into the agreement.</p></div>
      </div>
      <p dir="rtl" lang="ur" style={{ ...ur, fontSize: 18 }}>جو سائٹس پہلے سے ٹاپ 10 میں ہیں وہ اسی حالت میں ملیں گی۔ باقی سائٹس کے لیے بیعانہ دیں، ہم ایک سے دو ماہ میں ٹاپ 10 میں لائیں گے — نہ آئیں تو بیعانہ واپس۔</p>
    </section>

    <section className="wrap" id="list" style={{ padding: '0 16px 30px' }}>
      {Object.entries(legalSites).map(([group, list]) => <div key={group}>
        <h2>{group}</h2>
        <div className="cards">{list.map(([d, note]) => <div className="card" key={d}>
          <h3 style={{ wordBreak: 'break-all' }}>{d}</h3><p>{note}</p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>
            <a className="btn btn-sm" href={wa(d, 'monthly rent')}>Rent</a>
            <a className="btn btn-sm btn-ghost" href={wa(d, 'partnership')}>Partnership</a>
            <a className="btn btn-sm btn-ghost" href={wa(d, 'purchase')}>Buy</a>
          </div></div>)}</div>
      </div>)}
    </section>

    <section className="wrap" style={{ padding: '0 16px 50px' }}>
      <h2>How Renting a Legal Website Works</h2>
      <ol>
        <li>Choose a site and send its name on WhatsApp.</li>
        <li>We share its Google Search Console clicks, impressions and keyword positions.</li>
        <li>Agree the monthly rent, partnership share or sale price in writing.</li>
        <li>Your name, photo, office address and WhatsApp are placed on the site within a few days.</li>
        <li>Google Peak keeps the site fast, secure and promoted every month.</li>
      </ol>
      <h2>SEO and Digital Marketing by Google Peak</h2>
      <p>The same team that ranks these legal websites builds and promotes websites for law firms and businesses: SEO-ready websites, landing pages, content writing and monthly SEO. See <a href="/search-engine-optimization/">SEO-ready websites</a> and <a href="/digital-marketing-services/">digital marketing services</a>.</p>
      <p className="small">Published by {site.publisher}. Last updated 1 November 2026. Rankings change with Google's algorithm; the top 10 promise applies only on the written terms above.</p>
    </section>
  </>
}
