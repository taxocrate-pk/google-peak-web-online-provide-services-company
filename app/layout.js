import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/data/site';
export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Digital Marketing Agency & SEO Company | Google Peak', template: '%s' },
  description: 'Google Peak is a digital marketing agency offering SEO services, Google Ads, social media marketing, web development and content writing.',
  icons: { icon: [{ url: '/favicon.ico', sizes: '48x48' }, { url: '/favicon.svg', type: 'image/svg+xml' }], apple: '/apple-touch-icon.png' },
};
const org = {
  '@context': 'https://schema.org', '@type': 'ProfessionalService', name: site.name, url: site.url,
  telephone: site.phone, email: site.email, address: { '@type': 'PostalAddress', streetAddress: 'Mezzanine Floor, Munir Mobile Mall, Block 17, Gulistan-e-Jauhar', addressLocality: 'Karachi', addressCountry: 'PK' },
  areaServed: ['GB','US','CA','AE','AU','PK'], foundingDate: site.founded,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
