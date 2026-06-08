const projects = [
  {
    emoji: "🛒",
    title: "LuxuryMart E-Commerce",
    category: "Web Development · UI/UX Design",
    gradient: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    large: true,
  },
  {
    emoji: "📊",
    title: "TechFlow SaaS Dashboard",
    category: "Web App · Digital Marketing",
    gradient: "from-[#2d1b69] via-[#11998e] to-[#38ef7d]",
    large: false,
  },
  {
    emoji: "✦",
    title: "Aurelia Brand Identity",
    category: "Branding · Graphic Design",
    gradient: "from-[#8b0000] via-[#c9a84c] to-[#ffd700]",
    large: false,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-8 lg:px-16 bg-charcoal">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-14 gap-6 reveal">
          <div>
            <p className="section-label-line text-xs font-semibold tracking-[0.14em] uppercase text-gold mb-4">
              Our Work
            </p>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Selected Projects
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-white/50 max-w-[400px]">
            A glimpse into the work we&apos;re proud of — built with passion,
            purpose, and precision.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5">
          {/* Large card */}
          <div className="row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer reveal">
            <div
              className={`bg-gradient-to-br ${projects[0].gradient} min-h-[500px] flex items-center justify-center text-6xl transition-transform duration-500 group-hover:scale-[1.03]`}
            >
              {projects[0].emoji}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <h4 className="font-playfair text-xl text-white mb-1">
                  {projects[0].title}
                </h4>
                <span className="text-xs text-gold uppercase tracking-widest">
                  {projects[0].category}
                </span>
              </div>
            </div>
          </div>

          {/* Two small cards */}
          {projects.slice(1).map(({ emoji, title, category, gradient }) => (
            <div
              key={title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer reveal"
            >
              <div
                className={`bg-gradient-to-br ${gradient} min-h-[230px] flex items-center justify-center text-5xl transition-transform duration-500 group-hover:scale-[1.03]`}
              >
                {emoji}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h4 className="font-playfair text-lg text-white mb-1">
                    {title}
                  </h4>
                  <span className="text-xs text-gold uppercase tracking-widest">
                    {category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
