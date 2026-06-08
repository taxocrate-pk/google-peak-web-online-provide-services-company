# PixelCraft Agency Website

Premium digital agency website built with **Next.js 14** + **Tailwind CSS**.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Folder Structure

```
pixelcraft/
├── app/
│   ├── globals.css          # Global styles + Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page (assembles all sections)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky nav with scroll effect
│   │   └── Footer.tsx       # Footer with links
│   │
│   ├── sections/
│   │   ├── Hero.tsx         # Hero with animated headline
│   │   ├── StatsStrip.tsx   # Dark stats bar
│   │   ├── Services.tsx     # 3 service cards
│   │   ├── Process.tsx      # 4-step process
│   │   ├── Portfolio.tsx    # Project showcase
│   │   ├── Testimonials.tsx # Client reviews
│   │   └── CTA.tsx          # Call to action
│   │
│   └── ui/
│       ├── CustomCursor.tsx # Gold custom cursor
│       └── ScrollReveal.tsx # Intersection observer reveal
│
├── lib/
│   └── utils.ts             # cn() helper function
│
├── tailwind.config.js       # Custom colors, fonts, animations
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Tech Stack

- **Next.js 14** — App Router
- **Tailwind CSS v3** — Utility-first styling
- **TypeScript** — Type safety
- **Lucide React** — Icons (optional)
- **Google Fonts** — Playfair Display + DM Sans

## 🎯 Services Covered

1. **Website Development** — Next.js, React, E-Commerce, CMS
2. **Digital Marketing** — SEO, Google Ads, Meta Ads, Email
3. **Graphic Designing** — Branding, UI/UX, Logo, Print

## ✏️ Customization

- Edit agency name → search `PixelCraft` and replace
- Edit services → `components/sections/Services.tsx`
- Edit colors → `tailwind.config.js` → `colors`
- Edit contact info → `components/layout/Footer.tsx`
"# google-peak-web-online-provide-services-company" 
