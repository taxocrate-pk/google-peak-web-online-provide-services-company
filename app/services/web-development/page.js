"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2, ArrowRight, Phone, MessageCircle, Star, Globe, ShoppingCart, Layout, Zap, Shield, Award, Code, Rocket, Clock, CreditCard, Headphones } from "lucide-react";

const pricingPlans = [
  {
    name: "Professional",
    oldPrice: "2,499",
    price: "1,299",
    desc: "Perfect for startups & small businesses needing a modern digital footprint.",
    features: [
      "5 Professionally Designed Pages",
      "Modern, Mobile-Responsive UI",
      "5 High-Quality Stock Images",
      "Interactive Homepage Banner",
      "Contact Form with Email Notifications",
      "Fast-Loading Website Structure",
      "Complete Website Deployment",
      "30 Days Free Technical Support",
    ],
    buttonText: "Start Project",
    popular: false,
  },
  {
    name: "Corporate",
    oldPrice: "4,999",
    price: "2,499",
    desc: "Built for established businesses seeking authority and leads.",
    features: [
      "10 Professionally Designed Pages",
      "Fully Mobile-Responsive & User-Friendly Layout",
      "10 High-Quality Stock Images Included",
      "5 Custom Banner Designs",
      "Advanced Contact Forms with CRM Integration",
      "Fast-Loading Website Structure",
      "Google-Friendly Sitemap & XML",
      "Comprehensive On-Page SEO Setup",
      "Complete Deployment & Launch Support",
      "90 Days Free Technical Support",
    ],
    buttonText: "Choose Corporate",
    popular: true,
  },
  {
    name: "Ecommerce Store",
    oldPrice: "7,999",
    price: "3,999",
    desc: "High-conversion online stores ready to generate revenue.",
    features: [
      "Unlimited Product Listings",
      "Full Ecommerce Store with CMS Admin Panel",
      "Advanced Product Management System",
      "Fully Mobile-Responsive Modern UI",
      "Unlimited Stock Images",
      "Custom Banner Designs & Interactive Slider",
      "Secure Payment Gateway Integration (Stripe/PayPal)",
      "Shopping Cart & Checkout System",
      "Google-Friendly Sitemap & SEO Structure",
      "Professional On-Page SEO Setup",
      "Complete Deployment, Testing & Go-Live Support",
      "180 Days Free Technical Support",
    ],
    buttonText: "Launch Store",
    popular: false,
  },
];

// Sample projects - replace with your actual US client portfolio
const projects = [
  { 
    title: "Manhattan Luxury Real Estate", 
    category: "Corporate Website", 
    gradient: "from-[#1a1a2e] to-[#0f3460]",
    description: "Premium property listing platform for NYC's top real estate agency with advanced MLS integration."
  },
  { 
    title: "MediHealth Systems", 
    category: "Bespoke Web App", 
    gradient: "from-[#2d1b69] to-[#38ef7d]",
    description: "Complete HIPAA-compliant clinic management system with patient portal and appointment scheduling."
  },
  { 
    title: "Urban Fashion Hub", 
    category: "Ecommerce Platform", 
    gradient: "from-[#8b0000] to-[#c9a84c]",
    description: "High-volume fashion ecommerce store handling 50K+ monthly visitors with seamless checkout."
  },
  { 
    title: "TechStart Solutions", 
    category: "SaaS Platform", 
    gradient: "from-[#134e5e] to-[#71b280]",
    description: "Subscription-based B2B software platform with user dashboards and analytics."
  },
  { 
    title: "Boston Legal Group", 
    category: "Professional Services", 
    gradient: "from-[#4facfe] to-[#00f2fe]",
    description: "Corporate law firm website with client portal and document management system."
  },
  { 
    title: "Golden Plate Restaurant Chain", 
    category: "Ecommerce Solution", 
    gradient: "from-[#f12711] to-[#f5af19]",
    description: "Multi-location online ordering system with real-time order tracking and loyalty program."
  },
];

const services = [
  { title: "Custom Web Development", desc: "Tailored websites that build absolute brand authority.", icon: Globe },
  { title: "E-commerce Solutions", desc: "High-conversion stores with secure payment gateways.", icon: ShoppingCart },
  { title: "Bespoke Web Applications", desc: "Scalable portals designed for complex business logic.", icon: Code },
  { title: "Website Redesign", desc: "Transform outdated sites into high-performing assets.", icon: Rocket },
  { title: "WordPress Development", desc: "Custom WordPress solutions with easy-to-manage CMS.", icon: Layout },
  { title: "SEO-Optimized Structure", desc: "Websites built with clean code and SEO best practices.", icon: Zap },
];

const allInOneFeatures = {
  webDesign: [
    "Custom website design concept",
    "Logo design support",
    "Homepage layout planning",
    "Dynamic blog layout design",
    "Mobile-first responsive interface",
    "Professional color & typography selection",
  ],
  development: [
    "Full website development",
    "CMS admin panel integration",
    "Clean, maintainable code structure",
    "Performance & speed optimization",
    "Contact form setup",
    "WhatsApp & call button integration",
  ],
  launchSupport: [
    "Complete website deployment",
    "Smooth go-live support",
    "Admin panel training session",
    "Post-launch technical support",
    "30-180 days free support (package dependent)",
    "Guidance for future updates",
  ],
};

const benefits = [
  { icon: Clock, title: "Fast Turnaround", desc: "Most projects completed within 2-4 weeks" },
  { icon: CreditCard, title: "Flexible Payment", desc: "50% upfront, 50% on completion" },
  { icon: Headphones, title: "US-Based Support", desc: "Dedicated support during US business hours" },
  { icon: Shield, title: "Money-Back Guarantee", desc: "100% satisfaction or full refund" },
];

export default function WebDevelopment() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Navbar />

      <main className="bg-white selection:bg-gold selection:text-white">
        
        {/* HERO & LEAD CAPTURE SECTION */}
        <section className="pt-40 pb-24 px-8 lg:px-16 max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cream-light rounded-full blur-[100px] pointer-events-none opacity-50" />
          
          <div className="relative z-10 animate-fade-up">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gold mb-6 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" /> Top Rated Web Agency
            </p>
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-charcoal leading-[1.05] tracking-tight mb-6">
              Premium Web <br />
              Development <br />
              <em className="not-italic text-gold">for US Businesses.</em>
            </h1>
            <p className="text-lg leading-relaxed text-mid max-w-[500px] mb-8">
              We build modern, fast, secure, and conversion-focused websites for American businesses. 
              From startups to enterprises, we deliver custom solutions that drive real results.
            </p>
            
            {/* Trust Signals */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm text-mid">150+ Happy US Clients</span>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-sm font-semibold tracking-widest uppercase text-charcoal flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" /> Available for New Projects
              </span>
            </div>
          </div>

          {/* Consultation Form Box */}
          <div className="bg-white p-10 rounded-3xl shadow-card border border-black/[0.05] relative z-10 animate-fade-up [animation-delay:200ms]">
            <h3 className="font-playfair text-3xl font-bold text-charcoal mb-2">Get a Free Quote</h3>
            <p className="text-mid text-sm mb-6">Schedule your website consultation today.</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Full Name *" required className="w-full bg-cream-light border border-black/[0.05] rounded-xl px-5 py-4 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="email" placeholder="Email Address *" required className="w-full bg-cream-light border border-black/[0.05] rounded-xl px-5 py-4 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-cream-light border border-black/[0.05] rounded-xl px-5 py-4 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div>
                <textarea placeholder="Tell us about your project..." rows={3} className="w-full bg-cream-light border border-black/[0.05] rounded-xl px-5 py-4 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full bg-charcoal text-white text-xs font-semibold tracking-widest uppercase py-4 rounded-xl hover:bg-gold transition-colors duration-300">
                Get Started
              </button>
            </form>
            
            <p className="text-center text-mid text-xs mt-4">No spam. We'll respond within 24 hours.</p>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-12 border-y border-black/5">
          <div className="max-w-[1300px] mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="text-center">
                  <benefit.icon className="text-gold mx-auto mb-3" size={28} />
                  <h4 className="font-bold text-charcoal mb-1">{benefit.title}</h4>
                  <p className="text-xs text-mid">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT SHOWCASE SECTION */}
        <section className="py-24 bg-charcoal text-white px-8 lg:px-16">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-16 reveal">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gold mb-4 inline-flex items-center">
                Our Work
              </p>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold leading-tight">
                Trusted by <em className="not-italic text-gold">US Businesses</em>
              </h2>
              <p className="text-mid-light max-w-2xl mx-auto mt-4">
                Real projects delivered for American companies across industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((proj, i) => (
                <div key={i} className="group relative rounded-3xl overflow-hidden cursor-pointer reveal hover:-translate-y-2 transition-transform duration-500">
                  <div className={`bg-gradient-to-br ${proj.gradient} h-[400px] w-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center`}>
                    <Globe size={48} className="text-white/30 mb-4" />
                    <p className="text-white/60 text-sm uppercase tracking-wider">{proj.category}</p>
                    <h3 className="text-2xl font-bold text-white mt-2">{proj.title}</h3>
                    <p className="text-white/80 text-sm mt-4 hidden group-hover:block transition-all duration-300">
                      {proj.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-charcoal to-transparent">
                    <span className="text-gold text-[10px] tracking-widest uppercase font-semibold mb-2 block">{proj.category}</span>
                    <h3 className="font-playfair text-2xl font-bold text-white">{proj.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="border border-white/20 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-gold hover:border-gold transition-colors">
                View All Projects <ArrowRight size={16} className="inline ml-2" />
              </button>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION & SERVICES */}
        <section className="py-24 px-8 lg:px-16 max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                Custom Web Development <br /> That <em className="not-italic text-gold">Drives Growth</em>
              </h2>
              <p className="text-mid leading-relaxed mb-6">
                Off-the-shelf templates limit your potential. Our custom web development team creates 
                unique, SEO-friendly architectures tailored to your specific business goals and audience.
              </p>
              <p className="text-mid leading-relaxed">
                Whether you're a startup in Silicon Valley, a corporate HQ in NYC, or an ecommerce brand 
                selling nationwide, we build websites that convert visitors into customers.
              </p>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gold/20 border-2 border-white flex items-center justify-center text-gold font-bold text-xs">
                      ✓
                    </div>
                  ))}
                </div>
                <p className="text-sm text-mid">Trusted by <span className="font-bold text-charcoal">150+ businesses</span> across the United States</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal">
              {services.map((srv, i) => (
                <div key={i} className="bg-cream-light p-8 rounded-3xl border border-black/[0.04] hover:shadow-md transition-shadow">
                  <srv.icon className="text-gold mb-4" size={32} />
                  <h4 className="font-playfair text-xl font-bold text-charcoal mb-3">{srv.title}</h4>
                  <p className="text-sm text-mid">{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ALL-IN-ONE PACKAGE SECTION */}
        <section className="py-24 bg-cream-light px-8 lg:px-16">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                Complete <em className="not-italic text-gold">Web Development Package</em>
              </h2>
              <p className="text-mid max-w-2xl mx-auto">
                Everything you need to launch your professional website — design, development, and launch support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 reveal">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <Layout size={28} className="text-gold" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">Design</h3>
                <ul className="space-y-3">
                  {allInOneFeatures.webDesign.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-mid">
                      <CheckCircle2 size={14} className="text-gold mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 reveal">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <Code size={28} className="text-gold" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">Development</h3>
                <ul className="space-y-3">
                  {allInOneFeatures.development.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-mid">
                      <CheckCircle2 size={14} className="text-gold mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 reveal">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <Rocket size={28} className="text-gold" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">Launch & Support</h3>
                <ul className="space-y-3">
                  {allInOneFeatures.launchSupport.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-mid">
                      <CheckCircle2 size={14} className="text-gold mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING TABLE */}
        <section className="py-24 px-8 lg:px-16">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-20 reveal">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                Transparent <em className="not-italic text-gold">Pricing</em>
              </h2>
              <p className="text-mid max-w-2xl mx-auto">
                No hidden fees. No surprises. Just quality web development at fair prices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, i) => (
                <div key={i} className={`reveal bg-white rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-1 ${plan.popular ? 'border-gold shadow-card relative' : 'border-black/[0.05] hover:shadow-card'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-white text-[10px] tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full inline-block">
                        Best Value
                      </span>
                    </div>
                  )}
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">{plan.name}</h3>
                  <p className="text-sm text-mid mb-6 h-12">{plan.desc}</p>
                  
                  <div className="mb-6">
                    <span className="text-mid line-through text-sm mr-3">${plan.oldPrice}</span>
                    <span className="font-playfair text-4xl font-bold text-charcoal">${plan.price}</span>
                    <span className="text-mid text-sm ml-1">/ one-time</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-charcoal">
                        <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-xl text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${plan.popular ? 'bg-charcoal text-white hover:bg-gold' : 'bg-cream-light text-charcoal hover:bg-charcoal hover:text-white'}`}>
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
            
            <p className="text-center text-mid text-xs mt-8">
              * Need a custom solution? Contact us for a tailored quote.
            </p>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-24 bg-charcoal text-white px-8 lg:px-16">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold leading-tight">
                Our <em className="not-italic text-gold">Development Process</em>
              </h2>
              <p className="text-mid-light max-w-2xl mx-auto mt-4">
                A proven workflow that delivers results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "We learn about your business, goals, and target audience." },
                { step: "02", title: "Planning", desc: "Strategic planning of pages, features, and user journey." },
                { step: "03", title: "Design", desc: "Modern, conversion-focused design tailored to your brand." },
                { step: "04", title: "Development", desc: "Clean coding with mobile-first approach and best practices." },
                { step: "05", title: "Testing", desc: "Rigorous testing across all devices and browsers." },
                { step: "06", title: "Launch", desc: "Smooth deployment with post-launch support." },
              ].map((step, i) => (
                <div key={i} className="reveal text-center">
                  <div className="text-gold text-5xl font-playfair font-bold mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-mid-light text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 px-8 lg:px-16 max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                Why <em className="not-italic text-gold">US Businesses</em> Choose Us
              </h2>
              <p className="text-mid leading-relaxed mb-8">
                We combine technical excellence with business understanding. Your website isn't just a 
                design project — it's a critical business asset that drives revenue and growth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Custom websites, not templates",
                  "Mobile-first responsive design",
                  "SEO-optimized from day one",
                  "Fast loading times guaranteed",
                  "US business hours support",
                  "Money-back satisfaction guarantee",
                  "Transparent communication",
                  "Post-launch training included",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-gold shrink-0" />
                    <span className="text-sm text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gold/10 rounded-3xl p-10 reveal text-center">
              <Award size={48} className="text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">Ready to Grow Your Business Online?</h3>
              <p className="text-mid mb-6">
                Get a professional website that looks credible, works smoothly, and drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-charcoal text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gold transition-colors">
                  Get Free Consultation
                </button>
                <button className="border border-gold text-gold px-6 py-3 rounded-full text-sm font-semibold hover:bg-gold hover:text-white transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 bg-gold text-white text-center px-8">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Ready to take your online presence to the next level? Let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gold px-8 py-3 rounded-full text-sm font-semibold hover:bg-charcoal hover:text-white transition-colors">
                Schedule a Call
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-gold transition-colors">
                Send a Message
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}