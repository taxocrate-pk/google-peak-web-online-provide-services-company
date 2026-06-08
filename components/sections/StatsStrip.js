const stats = [
  { big: "340+", desc: "Projects Delivered" },
  { big: "200+", desc: "Happy Clients" },
  { big: "8yrs", desc: "Industry Experience" },
  { big: "98%", desc: "Client Retention Rate" },
];

export default function StatsStrip() {
  return (
    <div className="bg-charcoal py-16 px-8 lg:px-16">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map(({ big, desc }, i) => (
          <div
            key={desc}
            className={`reveal px-6 ${
              i > 0 ? "lg:border-l lg:border-white/10" : ""
            }`}
          >
            <span className="font-playfair text-4xl lg:text-5xl font-bold text-gold block leading-none">
              {big}
            </span>
            <span className="text-[11px] text-white/50 uppercase tracking-widest mt-3 block">
              {desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
