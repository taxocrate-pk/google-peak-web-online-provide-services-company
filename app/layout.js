import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/data/site';
export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Digital Marketing Agency in Pakistan | Google Peak', template: '%s' },
  description: 'Google Peak is a digital marketing agency in Pakistan offering SEO services, Google Ads, social media marketing, web development and content writing.',
  icons: { icon: '/favicon.svg' },
};
const org = {
  '@context': 'https://schema.org', '@type': 'ProfessionalService', name: site.name, url: site.url,
  telephone: site.phone, address: { '@type': 'PostalAddress', streetAddress: 'Mezzanine Floor, Munir Mobile Mall, Block 17, Gulistan-e-Jauhar', addressLocality: 'Karachi', addressCountry: 'PK' },
  areaServed: 'Pakistan', foundingDate: site.founded,
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
