const services = [
  {
    num: "01",
    icon: "🌐",
    title: "Website Development",
    desc: "We build fast, scalable, and beautiful websites using Next.js, React, and Tailwind CSS that convert visitors into paying customers.",
    tags: ["Next.js", "React", "E-Commerce", "CMS", "WordPress"],
  },
  {
    num: "02",
    icon: "📈",
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies across SEO, PPC, social media, and email campaigns that drive real traffic and measurable ROI.",
    tags: ["SEO", "Google Ads", "Meta Ads", "Email", "Analytics"],
  },
  {
    num: "03",
    icon: "🎨",
    title: "Graphic Designing",
    desc: "Stunning visual identities, brand systems, UI/UX design, and marketing collateral that make your brand unforgettable.",
    tags: ["Branding", "UI/UX", "Logo Design", "Print", "Social Media"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-8 lg:px-16 bg-cream-light">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16 gap-6 reveal">
          <div>
            <p className="section-label-line text-xs font-semibold tracking-[0.14em] uppercase text-gold mb-4">
              What We Do
            </p>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal leading-tight tracking-tight">
              Services Built for
              <br />
              Growth &amp; Impact
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-mid max-w-[420px]">
            Every service is crafted with precision, strategy, and measurable
            results in mind — tailored for the US market.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ num, icon, title, desc, tags }) => (
            <div
              key={num}
              className="service-card-border group relative bg-white border border-black/[0.07] rounded-2xl p-10 overflow-hidden cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:shadow-card-hover hover:border-transparent reveal"
            >
              {/* Big number */}
              <span className="absolute top-9 right-9 font-playfair text-6xl font-bold text-cream leading-none select-none group-hover:text-[#ede5d0] transition-colors">
                {num}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center text-2xl mb-7 transition-colors duration-300 group-hover:bg-gold">
                {icon}
              </div>

              <h3 className="font-playfair text-xl lg:text-2xl font-semibold text-charcoal mb-3 leading-snug">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-mid mb-7">{desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-cream-light border border-black/[0.07] text-[11px] font-medium text-mid tracking-wide px-3 py-1.5 rounded-full transition-all duration-300 group-hover:bg-charcoal group-hover:text-white group-hover:border-charcoal"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
