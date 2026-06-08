import Link from "next/link";

const stats = [
  { num: "340+", label: "Projects" },
  { num: "98%", label: "Retention" },
  { num: "8yr", label: "Experience" },
];

const skills = [
  { name: "Web Development", pct: 96 },
  { name: "Digital Marketing", pct: 92 },
  { name: "Graphic Design", pct: 98 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 pb-20 px-8 lg:px-16 relative overflow-hidden bg-white"
    >
      {/* Background radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, #fdf6e8 0%, transparent 65%), radial-gradient(ellipse 40% 60% at 10% 80%, #f0ede8 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left Content */}
        <div>
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-cream border border-black/[0.07] px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase text-mid mb-8 animate-fade-up opacity-0 [animation-delay:200ms]">
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
            Digital Agency — USA
          </div>

          {/* Heading */}
          <h1
            className="font-playfair text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-charcoal mb-7 animate-fade-up opacity-0 [animation-delay:350ms]"
          >
            We Build
            <br />
            <em className="not-italic text-gold">Digital</em>
            <br />
            Experiences
          </h1>

          {/* Sub */}
          <p className="text-base lg:text-lg leading-relaxed text-mid max-w-[480px] mb-12 animate-fade-up opacity-0 [animation-delay:500ms]">
            From stunning websites to powerful digital marketing and creative
            graphic design — we craft solutions that grow your business in the
            American market.
          </p>

          {/* Actions */}
          <div className="flex items-center gap-6 animate-fade-up opacity-0 [animation-delay:650ms]">
            <Link
              href="#services"
              className="btn-sweep bg-charcoal text-white text-xs font-semibold tracking-widest uppercase px-10 py-4 rounded-sm hover:text-white transition-colors"
            >
              <span>Explore Services</span>
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium text-charcoal flex items-center gap-2 hover:gap-4 transition-all duration-300 group"
            >
              View Our Work
              <span className="text-base">→</span>
            </Link>
          </div>
        </div>

        {/* Right — Dashboard Card */}
        <div className="hidden lg:block relative animate-fade-in opacity-0 [animation-delay:700ms]">
          {/* Float badge */}
          <div className="float-badge absolute -top-5 -right-5 z-10 bg-gold text-white px-5 py-3 rounded-xl text-xs font-semibold text-center shadow-gold">
            ⭐ 5.0
            <br />
            <span className="font-normal">200+ Reviews</span>
          </div>

          {/* Card */}
          <div className="bg-white border border-black/[0.07] rounded-2xl overflow-hidden shadow-card">
            {/* Card header */}
            <div className="bg-charcoal px-5 py-4 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>

            {/* Card body */}
            <div className="p-8">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-7">
                {stats.map(({ num, label }) => (
                  <div
                    key={label}
                    className="bg-cream-light rounded-xl py-4 px-3 text-center"
                  >
                    <span className="font-playfair text-3xl font-bold text-charcoal block leading-none">
                      {num}
                    </span>
                    <span className="text-[10px] text-mid uppercase tracking-widest mt-1.5 block">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress bars */}
              <div className="space-y-4">
                {skills.map(({ name, pct }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs font-medium text-charcoal-light">
                        {name}
                      </span>
                      <span className="text-xs font-semibold text-gold">
                        {pct}%
                      </span>
                    </div>
                    <div className="h-[5px] bg-cream rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full prog-fill"
                        style={{
                          width: `${pct}%`,
                          background:
                            "linear-gradient(90deg, #1a1a1a, #c9a84c)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
