const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We deep-dive into your business goals, target audience, and competitive landscape to craft a winning strategy.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We design a comprehensive roadmap with clear milestones, timelines, deliverables, and KPIs.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Our expert team builds and launches with pixel-perfect precision, technical excellence, and zero compromise.",
  },
  {
    num: "04",
    title: "Growth",
    desc: "We continuously track, optimize, and scale your results for long-term, sustainable success.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-8 lg:px-16 bg-white">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="section-label-line text-xs font-semibold tracking-[0.14em] uppercase text-gold mb-4 inline-flex items-center justify-center">
            Our Approach
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal leading-tight tracking-tight mb-4">
            How We Work
          </h2>
          <p className="text-[15px] leading-relaxed text-mid max-w-[480px] mx-auto">
            A proven 4-step process that ensures quality, transparency, and
            results every single time.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connector line on desktop */}
          <div className="absolute top-10 left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent hidden lg:block" />

          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              className="flex flex-col items-center text-center group relative z-10 reveal"
            >
              {/* Circle */}
              <div className="w-20 h-20 rounded-full bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex items-center justify-center font-playfair text-2xl font-bold text-charcoal mb-7 transition-all duration-300 group-hover:bg-charcoal group-hover:text-gold group-hover:border-charcoal group-hover:scale-105 group-hover:shadow-card">
                {num}
              </div>
              <h4 className="font-playfair text-xl font-semibold text-charcoal mb-3">
                {title}
              </h4>
              <p className="text-sm leading-relaxed text-mid">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
