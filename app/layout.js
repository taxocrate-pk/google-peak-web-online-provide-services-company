import "./globals.css";

export const metadata = {
  title: "PixelCraft Agency — Digital Excellence",
  description:
    "Premium digital agency offering Website Development, Digital Marketing, and Graphic Design services across the USA.",
  keywords:
    "web development, digital marketing, graphic design, Next.js, SEO, USA agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-charcoal-light font-dm">
        {children}
      </body>
    </html>
  );
}