import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/data/site';
export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Website Design and Development | Google Peak', template: '%s' },
  description: 'Google Peak designs and builds fast, SEO-ready websites made to reach Google’s top 3.',
  icons: { icon: [{ url: '/favicon.ico', sizes: '48x48' }, { url: '/favicon.svg', type: 'image/svg+xml' }], apple: '/apple-touch-icon.png' },
};
const org = {
  '@context': 'https://schema.org', '@type': 'ProfessionalService', name: site.name, url: site.url,
  telephone: site.phone, email: site.email, address: { '@type': 'PostalAddress', streetAddress: 'M-51, Mezzanine Floor, Muneer Mobile Mall, Block 17, Gulistan-e-Jauhar', addressLocality: 'Karachi', addressCountry: 'PK' },
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
