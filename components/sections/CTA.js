import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-36 px-8 lg:px-16 bg-white text-center">
      <div className="max-w-[680px] mx-auto reveal">
        <p className="section-label-line text-xs font-semibold tracking-[0.14em] uppercase text-gold mb-4 inline-flex items-center justify-center">
          Let&apos;s Work Together
        </p>

        <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight mb-6">
          Ready to{" "}
          <em className="not-italic text-gold">Elevate</em>
          <br />
          Your Digital Brand?
        </h2>

        <p className="text-[15px] leading-relaxed text-mid max-w-[500px] mx-auto mb-12">
          Let&apos;s talk about your project. Free consultation, zero
          commitments — just honest advice on how we can help you grow.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="mailto:hello@pixelcraft.agency"
            className="btn-sweep bg-charcoal text-white text-xs font-semibold tracking-widest uppercase px-12 py-4 rounded-sm hover:text-white transition-colors"
          >
            <span>Start a Project</span>
          </Link>
          <Link
            href="tel:+18005551234"
            className="text-sm font-medium text-charcoal flex items-center gap-2 hover:gap-4 transition-all duration-300"
          >
            Call Us Free →
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-12 border-t border-black/[0.06]">
          {[
            "✓ Free Consultation",
            "✓ No Long-Term Contracts",
            "✓ Results Guaranteed",
          ].map((badge) => (
            <span key={badge} className="text-xs text-mid font-medium tracking-wide">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
