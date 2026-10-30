// Google Peak — service and company pages (SEO DNA rewrite, 30 October 2026).
import { v, cards, priceTable } from './helpers';

const intl = (svc) => `<h2>${svc} for the UK, USA, Canada, UAE and Australia — at About Half the Price</h2>
<p>Businesses in London, Manchester, New York, Los Angeles, Toronto, Dubai, Sydney and Melbourne hire Google Peak because they get senior-level ${svc.toLowerCase()} at roughly half what a comparable local agency charges. The work is done by our team in Karachi, Pakistan, and delivered online — the same strategy, the same reporting, a much lower monthly cost.</p>
<table>
<thead><tr><th>Market</th><th>How we work with you</th></tr></thead>
<tbody>
<tr><td>United Kingdom</td><td>British English, GBP quotes, calls in UK working hours</td></tr>
<tr><td>United States and Canada</td><td>American English, USD/CAD quotes, overlap with Eastern Time mornings</td></tr>
<tr><td>UAE and Gulf</td><td>Same-day replies — Pakistan is one hour ahead of Dubai</td></tr>
<tr><td>Australia</td><td>Reports and calls scheduled for Australian business hours</td></tr>
</tbody>
</table>
<p>We have one office, in Karachi; all international work is handled online by email (info@googlepeak.com), video call and WhatsApp. Send us your website and a competitor you want to beat, and we will show you what we would do and what it would cost.</p>`;

/* ------------------------------------------------------------------ HOME */
const home = {
  slug: '',
  type: 'service',
  keyword: 'Website Design and Development',
  title: 'Website Design and Development Company | Built for Google Top 3 | Google Peak',
  description: 'Google Peak is a website design and development company that builds fast, SEO-ready websites designed to reach the peak of Google — the top 3 results.',
  eyebrow: 'Google Peak · Websites Built to Reach Google’s Top 3',
  h1: 'Website Design and Development Company — Websites Built to Reach the Peak of Google',
  intro: 'Website design and development at Google Peak starts with one question: can this website reach Google’s top 3 for the searches that bring you customers? We design and build fast, SEO-ready websites in Next.js and WordPress for clients in the UK, USA, Canada, the UAE, Australia and Pakistan — at about half the price of a local agency.',
  body: `
<h2>Why Website Design and Development Decides Whether You Reach Google’s Top 3</h2>
<p>Website design and development is where most rankings are won or lost. A slow page builder, one page trying to rank for ten services, missing headings, or a mobile layout that breaks will hold a site back no matter how much SEO is done later. Google Peak builds the foundation right the first time, so the site can climb to the peak of Google instead of fighting its own code.</p>
<p>We run a network of our own websites in law, tax and marriage services, many of them in Google’s top 3 for competitive searches. Every build method we sell has been tested there first.</p>

<h2>What Our Website Design and Development Includes</h2>
${cards([
  ['Speed-First Build', 'Next.js or lean WordPress; WebP images; Lighthouse scores near 100.', '/web-development/'],
  ['Ranking Architecture', 'One page per service and city, so each can rank for its own search.', '/search-engine-optimization/'],
  ['Mobile-First Design', 'Designed for phones first, where most searches happen.', '/web-development/'],
  ['E-commerce Stores', 'Shopify and WooCommerce stores with product pages built to rank.', '/e-commerce/'],
  ['Launch Content', 'Page copy written around the keywords each page must win.', '/content-writing/'],
  ['Safe Redesigns', 'Old URLs kept or redirected so existing rankings are not lost.', '/web-development/'],
])}

<h2>How Google Peak Builds Websites That Can Reach the Top 3</h2>
<table>
<thead><tr><th>Step</th><th>What we do</th></tr></thead>
<tbody>
<tr><td>1. Keyword map</td><td>Every service and city matched to the search it should win</td></tr>
<tr><td>2. Page plan</td><td>One page per keyword; no two pages competing</td></tr>
<tr><td>3. Design</td><td>Mobile-first layout with call and WhatsApp buttons on every page</td></tr>
<tr><td>4. Build</td><td>Next.js or WordPress, schema, sitemap, fast hosting</td></tr>
<tr><td>5. Launch</td><td>Redirects from old URLs, Search Console submission, indexing checks</td></tr>
</tbody>
</table>

<h3>Website Design and Development Is Not the Same as Ongoing SEO</h3>
<p>We build the site so it is ready to rank. Monthly link building and content campaigns after launch are a separate service; we can introduce you to our sister teams for that, or hand the site over to your own SEO provider with a clean foundation.</p>

<h2>Website Design and Development Packages</h2>
${priceTable([
  ['Business website', 'Up to 10 pages, Next.js or WordPress, SEO-ready structure'],
  ['Multi-city or multi-service website', 'Service and city pages, schema, launch content'],
  ['Redesign or migration', 'New build with existing URLs and rankings protected'],
  ['E-commerce store', 'Shopify or WooCommerce with product SEO'],
])}

<h2>Who Uses Our Website Design and Development</h2>
<p>Law firms, tax consultants, clinics, schools, real estate agents, manufacturers and online stores in London, New York, Toronto, Dubai, Sydney, Karachi, Lahore and Islamabad. Our team works from Karachi, Pakistan, which is why we can offer senior-level website design and development at roughly half the cost of a Western agency.</p>
`,
  after: `${intl('Website Design and Development')}`,
  faq: [
    ['Why is your company called Google Peak?', 'Because our websites are built to reach the peak of Google — the top 3 results for the searches that matter to you.'],
    ['Do you guarantee a top 3 ranking?', 'No honest company can. We guarantee a website with the speed, structure and content Google rewards, and we show you the before-and-after.'],
    ['Next.js or WordPress?', 'Next.js for speed and security; WordPress when your team needs to edit often. We advise based on how you will use the site.'],
    ['Can you redesign my site without losing rankings?', 'Yes. We keep or 301-redirect every indexed URL and resubmit the sitemap.'],
    ['Do you work with clients outside Pakistan?', 'Yes — the UK, USA, Canada, the UAE and Australia, online.'],
    ['How do I get a quote?', 'Email info@googlepeak.com or WhatsApp +92 302 6644789 with your current site or requirements.'],
  ],
  related: [['/web-development/', 'Website Development'], ['/e-commerce/', 'E-commerce Website Development'], ['/search-engine-optimization/', 'SEO-Ready Website Development']],
  images: [
    v('website-design-and-development-company-google-peak-chart', 'Website design and development company Google Peak: speed-first build, ranking architecture, mobile-first design, e-commerce stores, launch content and safe redesigns', 'Website Design and Development Built for Google’s Top 3', 'Six parts of Google Peak website design and development, Karachi, Pakistan. Illustrative summary.', 'Google Peak chart of website design and development built to reach Google’s top 3: speed-first Next.js and WordPress builds, ranking architecture with one page per keyword, mobile-first design, e-commerce stores, launch content and safe redesigns that protect rankings.'),
    v('website-design-and-development-top-3-process-chart', 'Website design and development process to reach Google top 3: keyword map, page plan, mobile-first design, build with schema, launch with redirects and Search Console', 'Five Steps to a Website That Can Reach the Top 3', 'How Google Peak plans and builds websites to rank. Illustrative process.', 'Google Peak process chart for website design and development: keyword map, one page per keyword, mobile-first design, Next.js or WordPress build with schema and sitemap, launch with 301 redirects and Search Console submission.'),
  ],
};

/* ------------------------------------------------------------------ SEO-READY WEBSITES (URL kept) */
const seoPage = {
  slug: 'search-engine-optimization',
  type: 'service',
  keyword: 'SEO-Ready Website',
  title: 'SEO-Ready Website Development | Search Engine Optimization Built In | Google Peak',
  description: 'An SEO-ready website from Google Peak: technical SEO, site structure, schema, speed and on-page SEO built into the design so pages can reach Google’s top 3.',
  eyebrow: 'Search Engine Optimization Built Into the Build',
  h1: 'SEO-Ready Website Development — Search Engine Optimization Built In From Day One',
  intro: 'SEO-ready website development means building a site Google can crawl, understand and trust from the day it launches. Google Peak builds search engine optimization into the design and code — structure, speed, headings, schema and internal links — so your pages start with every technical advantage.',
  body: `
<h2>What Makes an SEO-Ready Website</h2>
${cards([
  ['Site Structure', 'One page per service and city; clean URLs; no competing pages.'],
  ['Technical SEO', 'Sitemap, canonicals, robots, redirects and indexing checks.'],
  ['Speed', 'Core Web Vitals passed; WebP images; no heavy builders.'],
  ['On-Page Templates', 'Title, H1, keyword headings, FAQs and review line on every page.'],
  ['Schema', 'Organisation, Service, FAQ and Breadcrumb markup.'],
  ['Internal Links', 'Every page linked from related pages; nothing orphaned.'],
])}

<h2>Why an SEO-Ready Website Ranks Faster</h2>
<p>Most sites we audit lose rankings to problems introduced when they were built: duplicate pages created by themes, slow sliders, missing headings or one page targeting many keywords. An SEO-ready website removes those problems before launch, so content and links work harder afterwards.</p>

<h2>SEO-Ready Website Checklist We Deliver</h2>
<table>
<thead><tr><th>Area</th><th>What you get at launch</th></tr></thead>
<tbody>
<tr><td>Keywords</td><td>A keyword map with one target phrase per page</td></tr>
<tr><td>Headings</td><td>Target phrase in the H1, opening line and several H2/H3s</td></tr>
<tr><td>Speed</td><td>Lighthouse performance close to 100 on mobile</td></tr>
<tr><td>Indexing</td><td>Sitemap submitted, pages inspected in Search Console</td></tr>
<tr><td>Local</td><td>Google Business Profile details matched on the site</td></tr>
</tbody>
</table>

<h3>Redesigning an Existing Site Into an SEO-Ready Website</h3>
<p>If your current site already ranks for something, we protect it: every indexed URL is kept or redirected, and content that ranks is improved rather than replaced.</p>

<h2>SEO-Ready Website Packages</h2>
${priceTable([
  ['SEO-ready business website', 'New build with keyword map and technical SEO'],
  ['SEO-ready rebuild', 'Existing site rebuilt with URLs protected'],
  ['Technical SEO fix', 'Speed, indexing and structure fixes on your current site'],
])}
`,
  after: `${intl('SEO-Ready Website Development')}`,
  faq: [
    ['What is an SEO-ready website?', 'A website built so Google can crawl, understand and rank it from launch: structure, speed, headings, schema and internal links.'],
    ['Do you provide monthly SEO campaigns?', 'Our focus is building the site right. Ongoing link building and content campaigns are a separate service.'],
    ['Will an SEO-ready website rank on its own?', 'It gives every page the best start; competitive keywords still need content and links over time.'],
    ['Can you fix my existing site instead?', 'Yes — a technical SEO fix covers speed, indexing and structure without a full rebuild.'],
  ],
  related: [['/', 'Website Design and Development'], ['/web-development/', 'Website Development'], ['/what-is-seo-is-seo-important-how-does-seo-work-learn-seo/', 'What is SEO?']],
  images: [
    v('seo-ready-website-six-parts-chart', 'SEO-ready website: site structure, technical SEO, speed, on-page templates, schema and internal links built into website development', 'What Makes an SEO-Ready Website', 'Six parts of an SEO-ready website from Google Peak, Karachi. Illustrative summary.', 'Google Peak chart of an SEO-ready website: site structure with one page per keyword, technical SEO, Core Web Vitals speed, on-page templates, schema markup and internal links.'),
    v('seo-ready-website-launch-checklist-chart', 'SEO-ready website launch checklist: keyword map, headings, Lighthouse speed, Search Console indexing and Google Business Profile', 'SEO-Ready Website: Launch Checklist', 'What Google Peak delivers at launch of an SEO-ready website. Illustrative checklist.', 'Google Peak launch checklist for an SEO-ready website: keyword map, target phrase in headings, mobile Lighthouse near 100, sitemap and Search Console indexing, Google Business Profile details matched.'),
  ],
};

/* ------------------------------------------------------------------ WEBSITES THAT CONVERT (URL kept) */
const dmPage = {
  slug: 'digital-marketing-services',
  type: 'service',
  keyword: 'Conversion-Focused Website Design',
  title: 'Conversion-Focused Website Design | Landing Pages for Ads and Search | Google Peak',
  description: 'Conversion-focused website design and landing pages from Google Peak: pages built to turn search and ad visitors into calls, WhatsApp messages and sales.',
  eyebrow: 'Websites and Landing Pages That Convert',
  h1: 'Conversion-Focused Website Design — Landing Pages That Turn Visitors Into Enquiries',
  intro: 'Conversion-focused website design makes sure the visitors your rankings and ads bring actually call, message or buy. Google Peak designs landing pages and service pages around one offer and one action, with tracking built in.',
  body: `
<h2>Conversion-Focused Website Design Elements</h2>
${cards([
  ['One Clear Offer', 'Each page sells one service to one audience.'],
  ['Contact Above the Fold', 'Call, WhatsApp and form visible without scrolling.'],
  ['Trust Signals', 'Reviews, credentials, fees and real photos.'],
  ['Fast Mobile Pages', 'Pages that load in under two seconds on a phone.'],
  ['Ad Landing Pages', 'Pages matched to Google Ads and Meta ad keywords.'],
  ['Tracking', 'Calls, WhatsApp clicks and forms recorded in GA4.'],
])}

<h2>Why Conversion-Focused Website Design Matters After You Reach the Top</h2>
<p>Reaching Google’s top 3 only pays if visitors act. A page with no visible phone number, no prices and a slow form loses most of them. Conversion-focused website design closes that gap.</p>

<h2>Landing Pages Built by Our Conversion-Focused Website Design Team</h2>
<table>
<thead><tr><th>Page type</th><th>Used for</th></tr></thead>
<tbody>
<tr><td>Service landing page</td><td>Search visitors looking for one service</td></tr>
<tr><td>Ad landing page</td><td>Google Ads or Meta campaign traffic</td></tr>
<tr><td>City landing page</td><td>Local searches in a specific city</td></tr>
<tr><td>Offer page</td><td>A promotion or fixed-price package</td></tr>
</tbody>
</table>

<h3>Conversion-Focused Website Design and Tracking</h3>
<p>We install Google Analytics 4 and track calls, WhatsApp clicks and forms, so you can see which pages bring enquiries. Ad campaign management itself is handled by a separate digital marketing team; we build the pages they send traffic to.</p>
`,
  after: `${intl('Conversion-Focused Website Design')}`,
  faq: [
    ['What is conversion-focused website design?', 'Designing pages so visitors take an action — call, message, buy — not just read.'],
    ['Do you run Google Ads?', 'We build the landing pages and tracking; ad management is a separate service.'],
    ['How fast should a landing page load?', 'Under two seconds on a mobile connection.'],
    ['Can you improve my existing pages?', 'Yes, we can redesign individual pages without rebuilding the whole site.'],
  ],
  related: [['/', 'Website Design and Development'], ['/web-development/', 'Website Development'], ['/search-engine-optimization/', 'SEO-Ready Website Development']],
  images: [
    v('conversion-focused-website-design-elements-chart', 'Conversion-focused website design elements: one clear offer, contact above the fold, trust signals, fast mobile pages, ad landing pages and tracking', 'Conversion-Focused Website Design: Six Elements', 'What turns visitors into enquiries on a Google Peak website. Illustrative summary.', 'Google Peak chart of conversion-focused website design elements: one clear offer, call and WhatsApp above the fold, trust signals, fast mobile pages, ad landing pages and GA4 tracking.'),
    v('conversion-focused-website-design-landing-page-types-chart', 'Conversion-focused website design landing page types: service landing page, ad landing page, city landing page and offer page', 'Landing Page Types We Build', 'Four landing page types from Google Peak conversion-focused website design. Illustrative summary.', 'Google Peak chart of landing page types: service landing pages for search visitors, ad landing pages for Google Ads and Meta, city landing pages for local searches, and offer pages for promotions.'),
  ],
};

/* ------------------------------------------------------------------ WEB DEVELOPMENT */
const wd = 'website development';
const webPage = {
  slug: 'web-development',
  type: 'service',
  keyword: 'Website Development',
  title: 'Website Development | Website Design Company | Google Peak',
  description: 'Website development: fast Next.js and WordPress business websites with SEO-ready pages, WhatsApp buttons and Lighthouse scores near 100.',
  eyebrow: 'Web Development · Google Peak',
  h1: 'Website Development — Website Design and Fast, SEO-Ready Business Websites',
  intro: 'Website development often stops at a nice-looking homepage. Google Peak builds websites that load in under two seconds on a mobile connection, rank for your services and turn visitors into WhatsApp enquiries.',
  body: `
<h2>What Makes Our Website Development Different</h2>
${cards([
  ['Speed First', 'Lightweight code and WebP images; Lighthouse scores near 100.'],
  ['SEO Built In', 'One page per service and city, schema and clean URLs.'],
  ['Mobile Layout', 'Designed for phones first, where most traffic now comes from.'],
  ['WhatsApp & Call Buttons', 'One-tap contact on every page.'],
  ['Easy Updates', 'Content kept in simple files or WordPress for your team.'],
  ['Secure Hosting', 'Vercel or managed hosting with HTTPS and backups.'],
])}

<h2>Website Development With Next.js or WordPress</h2>
<p>Good website design and solid development go together. For most business websites we now recommend Next.js hosted on Vercel: pages are pre-built, load almost instantly and cannot be broken by plugin updates. WordPress remains the right choice when your team needs to publish often through a familiar editor. Either way, our website development keeps the build light — no heavy page builders above the fold, no oversized images.</p>

<h2>Website Design: Pages Every Business Website Needs</h2>
<ul>
<li>A homepage targeting your main national keyword.</li>
<li>One page for each service, written for its own keyword.</li>
<li>City pages where you serve several cities.</li>
<li>About, contact and genuine reviews.</li>
<li>Guides that answer common questions and earn links.</li>
</ul>

<h2>Our Website Development Process</h2>
<table>
<thead><tr><th>Stage</th><th>What happens</th></tr></thead>
<tbody>
<tr><td>Plan</td><td>Keyword map and page list agreed</td></tr>
<tr><td>Design</td><td>Mobile-first layout in your brand colours</td></tr>
<tr><td>Content</td><td>Pages written or edited for SEO</td></tr>
<tr><td>Build</td><td>Next.js or WordPress development, schema, tracking</td></tr>
<tr><td>Launch</td><td>Redirects from old URLs, Search Console submission</td></tr>
</tbody>
</table>

<h3>Website Redesign Without Losing Rankings</h3>
<p>When we rebuild a site, every indexed URL is kept or redirected with a 301, titles and content are improved rather than thrown away, and the new sitemap is submitted to Google Search Console. This is how we migrated googlepeak.com itself from WordPress to Next.js.</p>

<h2>Website Development: Pricing</h2>
${priceTable([
  ['Business website', 'Up to 10 pages, Next.js or WordPress, SEO setup'],
  ['Multi-city website', 'Service and city pages, schema, content'],
  ['Website redesign / migration', 'New build with URLs preserved and redirects'],
  ['Landing page', 'Single conversion-focused page'],
])}

<h2>A Web Design Company and Website Development for Professional Firms</h2>
<p>We build and run a large network of law and tax websites, so we understand what professional firms need: credentials, review and update lines, fee tables, office details and fast WhatsApp contact. The same standards apply to every website development project we take on.</p>
`,
  after: `${intl('Website Development')}<h2>Plan Your Website Development Project</h2><p>Send your current website (if any) and a list of services. We will reply with a page plan and a quote.</p>`,
  faq: [
    ['How long does a business website take?', 'Usually two to four weeks, depending on content and the number of pages.'],
    ['Next.js or WordPress — which is better?', 'Next.js is faster and more secure; WordPress is easier for frequent editing. We advise based on how you will use the site.'],
    ['Will my new website be SEO friendly?', 'Yes. Pages, headings, schema, speed and sitemaps are built for SEO from the start.'],
    ['Can you move my old website without losing rankings?', 'Yes. We keep or redirect every indexed URL and resubmit the sitemap.'],
    ['Do you provide hosting?', 'We set up Vercel or managed hosting in your name.'],
    ['How do I get a quote?', 'WhatsApp +92 302 6644789 with your requirements.'],
  ],
  related: [['/e-commerce/', 'E-commerce Website Development'], ['/search-engine-optimization/', 'SEO-Ready Website Development'], ['/content-writing/', 'Content Writing Services']],
  images: [
    v('website-development-in-pakistan-features-chart', 'Website development features: speed first, SEO built in, mobile layout, WhatsApp and call buttons, easy updates and secure hosting', 'Website Development: Six Essentials', 'What every Google Peak website development project includes. Illustrative summary.', 'Google Peak chart of website development essentials for businesses in Karachi, Lahore and Islamabad: speed first with WebP images, SEO built in, mobile-first layout, WhatsApp and call buttons, easy updates, and secure hosting on Vercel or managed servers.'),
    v('website-development-in-pakistan-process-chart', 'Website development process: plan, design, content, build and launch with redirects and Search Console submission', 'Website Development: Five-Stage Process', 'The five stages of website development at Google Peak. Illustrative process.', 'Google Peak process chart for website development: plan the keyword map, design mobile-first, write SEO content, build in Next.js or WordPress, and launch with 301 redirects and Google Search Console submission.'),
  ],
};

/* ------------------------------------------------------------------ E-COMMERCE */
const ec = 'e-commerce website development';
const ecomPage = {
  slug: 'e-commerce',
  type: 'service',
  keyword: 'E-commerce Website Development',
  title: 'E-commerce Website Development | Shopify Website | Google Peak',
  description: 'E-commerce website development: Shopify and WooCommerce stores with JazzCash, Easypaisa and card payments, courier integration and product SEO.',
  eyebrow: 'E-commerce · Google Peak',
  h1: 'E-commerce Website Development — Shopify and WooCommerce Stores That Sell',
  intro: 'E-commerce website development has to handle cash on delivery, local wallets and courier booking as well as good product pages. Google Peak builds Shopify and WooCommerce stores that rank for product searches and make ordering simple.',
  body: `
<h2>What Our E-commerce Website Development Covers</h2>
${cards([
  ['Store Setup', 'Shopify or WooCommerce with your brand theme.'],
  ['Payments', 'Stripe, PayPal and cards, plus cash on delivery and local wallets where needed.'],
  ['Shipping Integration', 'Courier and shipping integration for local and international delivery.'],
  ['Product SEO', 'Category and product pages written for search.'],
  ['Speed', 'Compressed images and lean themes for mobile shoppers.'],
  ['Marketing', 'Google Shopping, Meta catalogue ads and WhatsApp orders.'],
])}

<h2>Shopify or WooCommerce for E-commerce Website Development</h2>
<p>A Shopify website is quick to launch and easy to manage, with a monthly subscription. WooCommerce runs on WordPress, has no platform fee and offers more control, but needs good hosting and maintenance. Our e-commerce website development starts by matching the platform to your product count, budget and team.</p>

<h2>Payments and Delivery in E-commerce Website Development</h2>
<p>Payment habits differ by market: cards, PayPal and Stripe dominate in the UK, US and Canada, while cash on delivery and local wallets such as JazzCash and Easypaisa remain popular in Pakistan. We set up all the options your customers expect, add order confirmation by WhatsApp or SMS to reduce fake orders, and connect courier booking so dispatch takes minutes.</p>

<h3>Ecommerce Website Product Pages That Rank</h3>
<p>Each category page targets a search such as "buy linen shirts online" or "solar inverter price". Product pages carry unique descriptions, specifications, prices, delivery times and reviews, with product schema so Google can show price and stock in results.</p>

<h2>E-commerce Website Development: Pricing</h2>
${priceTable([
  ['Starter store', 'Theme setup, up to 50 products, payments and courier'],
  ['Growth store', 'Custom design, product SEO, Google Shopping feed'],
  ['Store migration', 'Move products, customers and URLs without losing rankings'],
  ['Store SEO and ads', 'Ongoing product SEO, Shopping and Meta catalogue ads'],
])}

<h2>Marketing After E-commerce Website Development</h2>
<p>A store needs traffic from day one. We connect Google Merchant Center for Shopping ads, Meta catalogues for Facebook and Instagram ads, and a content plan for category SEO, so your e-commerce website development investment starts earning quickly.</p>
`,
  after: `${intl('E-commerce Website Development')}<h2>Plan Your E-commerce Website Development</h2><p>Tell us what you sell and how many products. We will recommend a platform and send a quote.</p>`,
  faq: [
    ['Shopify or WooCommerce — which is better?', 'Shopify for quick launch and simple management; WooCommerce for lower running cost and more control.'],
    ['Can customers pay with JazzCash or Easypaisa?', 'Yes, through supported payment gateways, alongside cash on delivery and cards.'],
    ['Do you connect couriers?', 'Yes, local and international courier and shipping integrations.'],
    ['Will my products show on Google?', 'Yes, through product SEO and Google Merchant Center.'],
    ['Can you move my existing store?', 'Yes, with products, customers and URLs preserved.'],
    ['How do I start?', 'WhatsApp +92 302 6644789.'],
  ],
  related: [['/web-development/', 'Website Development'], ['/digital-marketing-services/', 'Conversion-Focused Website Design'], ['/content-writing/', 'Content Writing Services']],
  images: [
    v('e-commerce-website-development-in-pakistan-features-chart', 'E-commerce website development: store setup, cash on delivery, JazzCash and Easypaisa payments, courier integration, product SEO and marketing', 'E-commerce Website Development: Six Parts', 'What Google Peak includes in e-commerce website development. Illustrative summary.', 'Google Peak chart of e-commerce website development for stores in Karachi, Lahore and Islamabad: Shopify or WooCommerce setup, local payments including cash on delivery, JazzCash and Easypaisa, courier integration, product SEO, mobile speed and marketing.'),
    v('e-commerce-website-development-in-pakistan-shopify-vs-woocommerce-chart', 'E-commerce website development: Shopify quick launch and monthly fee versus WooCommerce on WordPress with more control and hosting needs', 'Shopify vs WooCommerce for Pakistani Stores', 'Choosing a platform for e-commerce website development. Illustrative comparison.', 'Google Peak comparison chart for e-commerce website development: Shopify — quick launch, monthly subscription, easy management; WooCommerce — no platform fee, more control, needs good hosting and maintenance.'),
  ],
};

/* ------------------------------------------------------------------ CONTENT WRITING */
const cw = 'website content writing';
const contentPage = {
  slug: 'content-writing',
  type: 'service',
  keyword: 'Website Content Writing',
  title: 'Website Content Writing | Copy for New Websites | Google Peak',
  description: 'Content writing services: SEO service pages, blogs, product descriptions and website copy in British or American English, written for search intent.',
  eyebrow: 'Content Writing · Google Peak',
  h1: 'Website Content Writing — SEO Pages, Blogs and Website Copy',
  intro: 'Website content writing is only worth paying for if the pages rank and persuade. Google Peak writes the launch copy for the websites we build: service pages, city pages and product copy around the exact phrases your customers search, with the facts, tables and FAQs that make readers call.',
  body: `
<h2>Website Content Writing We Provide</h2>
${cards([
  ['Service Pages', 'Money pages targeting one keyword each, with fees and FAQs.'],
  ['City Pages', 'Unique pages for each city — no name-swapping.'],
  ['Blog Articles', 'Guides that answer questions and attract links.'],
  ['Product Descriptions', 'Unique copy for e-commerce categories and products.'],
  ['Website Copy', 'Homepage, about and contact pages.'],
  ['Content Refresh', 'Old pages updated for current facts and keywords.'],
])}

<h2>How Our Website Content Writing Follow SEO Rules</h2>
<ul>
<li>The first paragraph opens with the focus keyword.</li>
<li>The key phrase appears naturally in several H2 and H3 headings.</li>
<li>Keyword density stays healthy without stuffing.</li>
<li>Every page has tables, FAQs and a reviewed-by and updated line.</li>
<li>Official sources are cited near the bottom, not mid-page.</li>
<li>Internal links connect related pages so none is left orphaned.</li>
</ul>

<h2>Website Content Writing for Professional Firms</h2>
<p>Legal, tax, medical and financial pages need accuracy. Our writers research the current law, fees and procedures from official sources, and a subject expert reviews the page before publication. We have written and ranked hundreds of such pages across our own network.</p>

<h3>British or American English</h3>
<p>We write in the spelling and tone your audience expects — British English for UK, Commonwealth and South Asian readers, American English where your market is the US.</p>

<h2>Website Content Writing: Pricing</h2>
${priceTable([
  ['Service or city page', '800–1,200 words with tables and FAQs'],
  ['Blog guide', '1,000–2,000 words, researched and referenced'],
  ['Product descriptions', 'Per batch of products'],
  ['Content audit and refresh', 'Existing pages reviewed and rewritten'],
])}

<h2>Why Unique Content Matters</h2>
<p>Copying a page and changing only the city name produces near-duplicate content that Google filters out. Our website content writing write each page from scratch around what that city or service actually involves.</p>
`,
  after: `${intl('Website Content Writing')}<h2>Order Website Content Writing</h2><p>Send your topic list or website on WhatsApp and we will suggest keywords and a writing plan.</p>`,
  faq: [
    ['Is your content written by people?', 'Yes. Writers research and draft; an editor and subject reviewer check every page.'],
    ['Do you guarantee unique content?', 'Yes. Every page is written for its own keyword and checked for duplication.'],
    ['Can you write legal and tax content?', 'Yes, researched from official sources and reviewed by a subject expert.'],
    ['Do you upload the content too?', 'We can publish directly to WordPress or your Next.js site.'],
    ['British or American English?', 'Whichever your audience expects.'],
    ['How do I order?', 'WhatsApp +92 302 6644789.'],
  ],
  related: [['/content-writing-seo-content-writing-why-is-seo-content-writing-important/', 'SEO Content Writing Guide'], ['/content-writing-definition-importance-and-applications/', 'Content Writing: Definition and Uses'], ['/article-rewriting-what-is-article-rewriting-article-rewriting-ai-tools/', 'Article Rewriting']],
  images: [
    v('content-writing-services-in-pakistan-types-chart', 'Content writing services: service pages, city pages, blog articles, product descriptions, website copy and content refresh', 'Website Content Writing: Six Types', 'Content types in Google Peak website content writing. Illustrative summary.', 'Google Peak chart of website content writing for businesses in Karachi, Lahore and Islamabad: SEO service pages, unique city pages, blog articles, e-commerce product descriptions, website copy, and content refresh of old pages.'),
    v('content-writing-services-in-pakistan-seo-rules-chart', 'Content writing services SEO rules: keyword in first paragraph, key phrase in headings, healthy density, tables and FAQs, sources at the bottom, internal links', 'SEO Rules in Every Page We Write', 'The checklist behind Google Peak website content writing. Illustrative checklist.', 'Google Peak checklist for website content writing: focus keyword opens the first paragraph, key phrase in H2 and H3 headings, healthy keyword density, tables and FAQs, reviewed-by and updated line, official sources placed low, internal links.'),
  ],
};

/* ------------------------------------------------------------------ ABOUT */
const aboutPage = {
  slug: 'about-us',
  type: 'service',
  keyword: 'Google Peak',
  title: 'About Google Peak | Website Design and Development Company, Karachi',
  description: 'About Google Peak, a Karachi-based website design and development company since 2016, building websites designed to reach Google’s top 3.',
  eyebrow: 'About Google Peak',
  h1: 'About Google Peak — Website Design and Development Built to Reach Google’s Top 3',
  intro: 'Google Peak is a website design and development company in Karachi, Pakistan, working since 2016. Our name says what we do: build websites that can reach the peak of Google — the top 3 results.',
  body: `
<h2>Who We Are at Google Peak</h2>
<p>Google Peak is part of a group that runs and ranks a large network of its own websites in law, tax, company registration and family services. Everything we recommend to clients we test first on our own sites — page structure, keyword density, speed, schema and linking.</p>
<p>Our SEO work is led by Syed Mohsin Ali Shah, who has more than 28 years of experience in search. The team includes SEO specialists, writers, designers and Next.js and WordPress developers.</p>

<h2>What Google Peak Does</h2>
${cards([
  ['SEO-Ready Websites', 'Built to reach Google’s top 3.', '/search-engine-optimization/'],
  ['Converting Pages', 'Landing pages that turn visitors into enquiries.', '/digital-marketing-services/'],
  ['Web Development', 'Fast SEO-ready websites.', '/web-development/'],
])}

<h2>How Google Peak Works</h2>
<ul>
<li>Plain reporting: rankings, traffic, enquiries and cost per enquiry.</li>
<li>No spam links or shortcuts that put your site at risk.</li>
<li>Unique content for every page.</li>
<li>Fast replies on WhatsApp.</li>
</ul>

<h2>Where Google Peak Is Based</h2>
<p>Our office is at ${'M-51, Mezzanine Floor, Muneer Mobile Mall, Block 17, Gulistan-e-Jauhar, Karachi'}. We work with clients in the UK, US, Canada, the UAE, Australia and Pakistan, mostly online.</p>
`,
  faq: [
    ['When was Google Peak founded?', 'Google Peak has been working since 2016.'],
    ['Where is Google Peak located?', 'In Gulistan-e-Jauhar, Karachi, Pakistan.'],
    ['Who leads SEO at Google Peak?', 'Syed Mohsin Ali Shah, with more than 28 years of search experience.'],
    ['Do you work with overseas clients?', 'Yes, online.'],
  ],
  related: [['/what-is-google-peak/', 'What is Google Peak?'], ['/contact-us/', 'Contact Google Peak'], ['/', 'Website Design and Development']],
  images: [
    v('google-peak-about-us-karachi-team-chart', 'About Google Peak website design and development company in Karachi, Pakistan: working since 2016, SEO-led team, own website network, plain reporting', 'About Google Peak: Karachi Digital Marketing Agency', 'Google Peak at a glance — a Karachi website design and development company since 2016. Illustrative summary.', 'Google Peak summary chart: website design and development company in Karachi, Pakistan, working since 2016; SEO led by Syed Mohsin Ali Shah with 28+ years of search experience; tests methods on its own website network; plain monthly reporting.'),
    v('google-peak-about-us-how-we-work-chart', 'How Google Peak works: plain reporting, no spam links, unique content for every page and fast replies on WhatsApp', 'How Google Peak Works With Clients', 'Four working principles at Google Peak, Karachi. Illustrative summary.', 'Google Peak chart of working principles for clients in Pakistan: plain reporting of rankings and enquiries, no spam links, unique content on every page, and fast WhatsApp replies from the Karachi team.'),
  ],
};

/* ------------------------------------------------------------------ CONTACT */
const contactPage = {
  slug: 'contact-us',
  type: 'service',
  keyword: 'Contact Google Peak',
  title: 'Contact Google Peak | Website Design and Development | WhatsApp',
  description: 'Contact Google Peak, website design and development company in Karachi, Pakistan: email info@googlepeak.com or WhatsApp +92 302 6644789 for a website quote.',
  eyebrow: 'Contact Google Peak',
  h1: 'Contact Google Peak — Website Design and Development, Karachi',
  intro: 'Contact Google Peak on WhatsApp or by phone at +92 302 6644789, or email info@googlepeak.com. Send your website link and what you want more customers for, and we will reply with a short plan.',
  body: `
<h2>How to Contact Google Peak</h2>
<table>
<thead><tr><th>Method</th><th>Details</th></tr></thead>
<tbody>
<tr><td>WhatsApp</td><td><a href="https://wa.me/923026644789">+92 302 6644789</a></td></tr>
<tr><td>Email</td><td><a href="mailto:info@googlepeak.com">info@googlepeak.com</a></td></tr>
<tr><td>Phone</td><td><a href="tel:+923026644789">+92 302 6644789</a></td></tr>
<tr><td>Office</td><td>M-51, Mezzanine Floor, Muneer Mobile Mall, Block 17, Gulistan-e-Jauhar, Karachi</td></tr>
<tr><td>Meetings</td><td>Online, or at the Karachi office by appointment</td></tr>
</tbody>
</table>

<h2>What to Send When You Contact Google Peak</h2>
<ul>
<li>Your website link (or say you need a new one).</li>
<li>The services and cities you want customers for.</li>
<li>Any current ads budget.</li>
</ul>

<h2>Our Services</h2>
${cards([
  ['SEO-Ready Websites', 'Built to reach Google’s top 3.', '/search-engine-optimization/'],
  ['Converting Pages', 'Landing pages that bring enquiries.', '/digital-marketing-services/'],
  ['Web Development', 'Fast SEO-ready websites.', '/web-development/'],
])}
`,
  faq: [
    ['What is the fastest way to contact Google Peak?', 'WhatsApp +92 302 6644789.'],
    ['What is Google Peak\'s email address?', 'info@googlepeak.com — international clients often prefer email.'],
    ['Can I visit your office?', 'Yes, in Gulistan-e-Jauhar, Karachi, by appointment.'],
    ['Do you offer a free audit?', 'Yes, a short audit of your website and keywords.'],
    ['Do you have offices outside Pakistan?', 'No. Our only office is in Karachi; we serve clients in the UK, US, Canada, the UAE and Australia online.'],
  ],
  related: [['/about-us/', 'About Google Peak'], ['/', 'Website Design and Development']],
  images: [
    v('contact-google-peak-karachi-whatsapp-chart', 'Contact Google Peak website design and development company in Karachi: WhatsApp and phone +92 302 6644789, office in Gulistan-e-Jauhar, online meetings', 'Contact Google Peak, Karachi', 'Ways to contact Google Peak in Karachi, Pakistan. Illustrative summary.', 'Google Peak contact chart: WhatsApp and phone +92 302 6644789; office at M-51, Mezzanine Floor, Muneer Mobile Mall, Block 17, Gulistan-e-Jauhar, Karachi; online meetings for clients across Pakistan.'),
    v('contact-google-peak-what-to-send-chart', 'What to send when you contact Google Peak: website link, services and cities you want customers for, and current ads budget', 'What to Send Google Peak for a Quick Plan', 'Three things to send Google Peak in Karachi for a fast reply. Illustrative checklist.', 'Google Peak checklist for new enquiries from Pakistan: website link, services and cities you want customers for, and current Google or Meta ads budget.'),
  ],
};

/* ------------------------------------------------------------------ WHAT IS GOOGLE PEAK */
const gpPage = {
  slug: 'what-is-google-peak',
  type: 'guide',
  keyword: 'Google Peak',
  title: 'What is Google Peak? | Website Design and Development Company',
  description: 'What is Google Peak? A Karachi-based website design and development company — not a Google product — building websites made to reach Google’s top 3.',
  eyebrow: 'What is Google Peak?',
  h1: 'What is Google Peak? The Karachi SEO Agency Explained',
  intro: 'Google Peak is a Karachi-based website design and development company, working since 2016. It is an independent company and is not owned by or affiliated with Google LLC; the name reflects our aim of getting clients to the peak of Google results.',
  body: `
<h2>Google Peak Is an Agency, Not a Google Product</h2>
<p>People sometimes search "Google Peak" expecting a Google tool or a term for peak search traffic. Google Peak is neither — it is a website design and development company whose websites are built to reach the peak of Google: the top 3 results. Google, Google Ads and Google Maps are trademarks of Google LLC.</p>

<h2>What Google Peak Does</h2>
${cards([
  ['SEO', 'Ranking websites for buying keywords.', '/search-engine-optimization/'],
  ['Ads & Social', 'Google Ads and Meta campaigns.', '/digital-marketing-services/'],
  ['Websites', 'Fast Next.js and WordPress builds.', '/web-development/'],
])}

<h2>Who Google Peak Works With</h2>
<p>Google Peak works with law and tax firms, clinics, schools, real estate agents, manufacturers and online stores in the UK, US, Canada, the UAE, Australia and Pakistan.</p>

<h2>Is "Google Peak" Also a Search Term?</h2>
<p>In analytics, "peak" can describe the busiest hours or days of search traffic. Google Trends shows when interest in a term peaks. If you were looking for that meaning, Google Trends is the official tool; if you were looking for help ranking your website, you are in the right place.</p>
`,
  faq: [
    ['Is Google Peak owned by Google?', 'No. Google Peak is an independent agency in Karachi and is not affiliated with Google LLC.'],
    ['What does Google Peak do?', 'SEO, Google Ads and social media management, website development and content writing.'],
    ['Where is Google Peak based?', 'Gulistan-e-Jauhar, Karachi, Pakistan.'],
    ['How do I contact Google Peak?', 'WhatsApp +92 302 6644789.'],
  ],
  related: [['/about-us/', 'About Google Peak'], ['/', 'Website Design and Development']],
  sources: 'Google, Google Ads, Google Maps and Google Trends are trademarks of Google LLC. Official source: Google Trends — https://trends.google.com/',
  images: [
    v('what-is-google-peak-karachi-agency-chart', 'What is Google Peak: an independent website design and development company in Karachi, Pakistan since 2016, not a Google product', 'What is Google Peak?', 'Google Peak explained — a Karachi agency, not a Google product. Illustrative summary.', 'Google Peak explainer chart: independent website design and development company in Karachi, Pakistan, working since 2016; not owned by or affiliated with Google LLC; offers SEO, Google Ads, websites and content.'),
    v('what-is-google-peak-services-chart', 'Google Peak services in Pakistan: SEO, Google Ads and social media, and website development for businesses in Karachi, Lahore and Islamabad', 'Google Peak: Three Core Services', 'The three core services of Google Peak in Pakistan. Illustrative summary.', 'Google Peak services chart for businesses in Karachi, Lahore and Islamabad: SEO for buying keywords, Google Ads and Meta campaigns, and fast Next.js and WordPress websites.'),
  ],
};

export const servicePages = [home, seoPage, dmPage, webPage, ecomPage, contentPage, aboutPage, contactPage, gpPage];
