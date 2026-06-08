const testimonials = [
  {
    stars: 5,
    quote:
      "PixelCraft completely transformed our online presence. Our website traffic increased by 340% in just 4 months, and our conversion rate doubled. Absolutely incredible team!",
    name: "James Mitchell",
    role: "CEO, TechVenture NYC",
    initials: "JM",
    avatarClass: "from-[#667eea] to-[#764ba2]",
  },
  {
    stars: 5,
    quote:
      "The branding and graphic design work they delivered was beyond our expectations. Our new brand identity feels premium, modern, and exactly what we needed to stand out.",
    name: "Sarah Rodriguez",
    role: "Founder, Bloom Wellness Co.",
    initials: "SR",
    avatarClass: "from-[#f093fb] to-[#f5576c]",
  },
  {
    stars: 5,
    quote:
      "Their digital marketing campaigns generated a 5x return on ad spend within 60 days. The team is professional, data-driven, and genuinely cares about your success.",
    name: "David Kim",
    role: "Director, Apex Retail Group",
    initials: "DK",
    avatarClass: "from-[#4facfe] to-[#00f2fe]",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-8 lg:px-16 bg-cream-light">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label-line text-xs font-semibold tracking-[0.14em] uppercase text-gold mb-4 inline-flex items-center justify-center">
            Client Reviews
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal leading-tight tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[15px] leading-relaxed text-mid max-w-[420px] mx-auto">
            Don&apos;t take our word for it — hear from businesses we&apos;ve
            helped grow across the USA.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(
            ({ stars, quote, name, role, initials, avatarClass }) => (
              <div
                key={name}
                className="bg-white border border-black/[0.07] rounded-2xl p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] reveal"
              >
                {/* Stars */}
                <div className="text-gold text-lg tracking-[3px] mb-5">
                  {"★".repeat(stars)}
                </div>

                {/* Quote */}
                <blockquote className="text-sm leading-relaxed text-charcoal-light italic border-l-[3px] border-gold pl-4 mb-7">
                  &ldquo;{quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarClass} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                  >
                    {initials}
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-charcoal">
                      {name}
                    </strong>
                    <span className="text-xs text-mid">{role}</span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
