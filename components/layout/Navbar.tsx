"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#process", label: "Process" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#testimonials", label: "Reviews" },
];

const serviceLinks = [
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/digital-marketing", label: "Digital Marketing" },
  { href: "/services/graphic-design", label: "Graphic Design" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5 bg-white/92 backdrop-blur-lg border-b transition-all duration-300 ${
        scrolled ? "border-black/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.07)]" : "border-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-playfair text-2xl font-bold text-charcoal tracking-tight"
      >
        Pixel<span className="text-gold">Craft</span>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-10 list-none">
        
        {/* Services Dropdown */}
        <li 
          className="relative group"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button className="nav-link-hover text-xs font-medium tracking-widest uppercase text-mid hover:text-charcoal transition-colors duration-300 flex items-center gap-1 cursor-pointer">
            Services
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dropdown Box */}
          <div className={`absolute top-full -left-4 pt-6 transition-all duration-300 ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
            <div className="bg-white border border-black/[0.06] shadow-card rounded-xl p-3 w-56 flex flex-col gap-1">
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm font-medium text-mid hover:text-charcoal hover:bg-cream-light px-4 py-2.5 rounded-lg transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </li>

        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="nav-link-hover text-xs font-medium tracking-widest uppercase text-mid hover:text-charcoal transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/#contact"
            className="bg-charcoal text-white text-xs font-semibold tracking-widest uppercase px-7 py-[10px] rounded-sm hover:bg-gold transition-colors duration-300"
          >
            Get Started
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
        <span className={`w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-black/[0.06] shadow-card md:hidden overflow-hidden">
          <ul className="flex flex-col py-4 px-8 gap-4 list-none max-h-[80vh] overflow-y-auto">
            {/* Mobile Services Links */}
            <li className="pt-2 pb-1 border-b border-black/[0.04]">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold mb-3 block">Services</span>
              <div className="flex flex-col gap-3 pl-2">
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm font-medium text-mid hover:text-charcoal transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </li>

            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-mid hover:text-charcoal tracking-wider uppercase transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <Link
                href="/#contact"
                className="inline-block bg-charcoal text-white text-xs font-semibold tracking-widest uppercase px-7 py-3 rounded-sm hover:bg-gold transition-colors duration-300 w-full text-center"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}