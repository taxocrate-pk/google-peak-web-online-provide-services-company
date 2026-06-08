import Link from "next/link";

const services = [
  "Website Development",
  "Digital Marketing",
  "Graphic Designing",
  "SEO & PPC",
  "UI/UX Design",
];

const company = ["About Us", "Portfolio", "Blog", "Careers", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/50 pt-20 pb-10 px-8 lg:px-16">
      <div className="max-w-[1300px] mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16 border-b border-white/[0.08] mb-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-playfair text-2xl font-bold text-white block mb-4 tracking-tight"
            >
              Pixel<span className="text-gold">Craft</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-[260px]">
              We craft digital experiences that grow businesses. Based in the
              USA, serving clients worldwide.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {["in", "tw", "ig", "fb"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-white/10 rounded flex items-center justify-center text-xs font-bold text-white/30 hover:border-gold hover:text-gold transition-colors duration-300 uppercase"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-xs font-semibold tracking-[0.12em] uppercase text-white mb-5">
              Services
            </h5>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="#services"
                    className="text-sm hover:text-gold transition-colors duration-300"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-xs font-semibold tracking-[0.12em] uppercase text-white mb-5">
              Company
            </h5>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c}>
                  <Link
                    href="#"
                    className="text-sm hover:text-gold transition-colors duration-300"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs font-semibold tracking-[0.12em] uppercase text-white mb-5">
              Contact Us
            </h5>
            <ul className="space-y-3">
              {[
                { icon: "📍", text: "New York, USA" },
                { icon: "📞", text: "+1 800 555 1234" },
                { icon: "✉", text: "hello@pixelcraft.agency" },
              ].map(({ icon, text }) => (
                <li key={text}>
                  <a
                    href="#"
                    className="text-sm flex items-center gap-2 hover:text-gold transition-colors duration-300"
                  >
                    <span>{icon}</span> {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <span>© 2025 PixelCraft Agency. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
