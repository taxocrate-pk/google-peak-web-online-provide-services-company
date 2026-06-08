"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { 
  CheckCircle2, ArrowRight, Palette, Layers, PenTool, 
  Image, Briefcase, Globe, Instagram, Facebook, 
  Linkedin, Zap, Award, Rocket, Sparkles, Eye,
  Target, Layout, FileText, Share2, Star
} from "lucide-react";

const pricingPlans = [
  {
    name: "Brand Identity",
    oldPrice: "1,499",
    price: "799",
    desc: "Perfect for startups & small businesses.",
    features: [
      "Custom Logo Design (2 concepts)",
      "Brand Color Palette (5-6 colors)",
      "Basic Typography System",
      "Brand Guidelines Document",
      "Business Card Design",
      "Social Media Profile Kit (2 platforms)",
      "Source Files Included",
      "1 Round of Revisions",
    ],
    buttonText: "Start at $799",
    popular: false,
  },
  {
    name: "UI/UX Design",
    oldPrice: "2,499",
    price: "1,299",
    desc: "For businesses ready to scale.",
    features: [
      "UI/UX Audit & Strategy",
      "User Flow Planning",
      "High-Fidelity Wireframes",
      "Custom UI Design (Up to 6 Screens)",
      "Interactive Prototype (Figma)",
      "Mobile & Desktop Responsive",
      "Developer Handoff Kit",
      "2 Rounds of Revisions",
    ],
    buttonText: "Start at $1,299",
    popular: true,
  },
  {
    name: "Design Bundle",
    oldPrice: "3,999",
    price: "2,299",
    desc: "Complete design solution.",
    features: [
      "Full Brand Identity System",
      "UI/UX Design (Up to 12 Screens)",
      "Marketing Collateral (3 items)",
      "Social Media Kit (5 platforms)",
      "Email Templates (2 designs)",
      "Presentation Deck Design",
      "Custom Illustrations (5)",
      "Unlimited Revisions (30 days)",
    ],
    buttonText: "Start at $2,299",
    popular: false,
  },
];

const services = [
  { 
    title: "Brand Identity", 
    desc: "Logo, colors, fonts, and guidelines that make your brand memorable.",
    icon: Palette,
  },
  { 
    title: "UI/UX Design", 
    desc: "User-friendly interfaces that convert visitors into customers.",
    icon: Layers,
  },
  { 
    title: "Marketing Collateral", 
    desc: "Brochures, flyers, and digital assets that tell your story.",
    icon: Briefcase,
  },
  { 
    title: "Social Media Kits", 
    desc: "Platform-optimized visuals that stop the scroll.",
    icon: Share2,
  },
  { 
    title: "Custom Illustrations", 
    desc: "Unique artwork that sets your brand apart.",
    icon: PenTool,
  },
  { 
    title: "Packaging Design", 
    desc: "Shelf-ready designs that grab attention.",
    icon: Image,
  },
];

const portfolioItems = [
  {
    title: "Luxury Beauty Brand",
    category: "Brand Identity",
    description: "Complete brand identity including logo, packaging, and social media assets.",
    gradient: "from-[#1a1a2e] to-[#0f3460]"
  },
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    description: "Clean, intuitive dashboard for financial data management.",
    gradient: "from-[#2d1b69] to-[#38ef7d]"
  },
  {
    title: "Restaurant Chain",
    category: "Marketing Collateral",
    description: "Menu design, signage, and promotional materials.",
    gradient: "from-[#8b0000] to-[#c9a84c]"
  },
  {
    title: "Tech Conference",
    category: "Event Branding",
    description: "Full event identity including badges and stage graphics.",
    gradient: "from-[#134e5e] to-[#71b280]"
  },
  {
    title: "Fashion Ecommerce",
    category: "UI/UX + Social",
    description: "Mobile-first design with complete social media system.",
    gradient: "from-[#4facfe] to-[#00f2fe]"
  },
  {
    title: "Real Estate Agency",
    category: "Print + Digital",
    description: "Brochures, flyers, and digital ad templates.",
    gradient: "from-[#f12711] to-[#f5af19]"
  },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We learn about your brand and goals." },
  { step: "02", title: "Research", desc: "Market analysis and inspiration." },
  { step: "03", title: "Concepts", desc: "Multiple design directions presented." },
  { step: "04", title: "Refine", desc: "Iterate based on your feedback." },
  { step: "05", title: "Deliver", desc: "All assets + style guide included." },
];

const tools = [
  { name: "Figma", icon: Layers },
  { name: "Illustrator", icon: PenTool },
  { name: "Photoshop", icon: Image },
  { name: "InDesign", icon: Layout },
  { name: "Procreate", icon: Palette },
  { name: "After Effects", icon: Sparkles },
];

export default function GraphicDesign() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Navbar />

      <main className="bg-white selection:bg-gold selection:text-white">
        
        {/* HERO SECTION */}
        <section className="pt-40 pb-24 px-8 lg:px-16 max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{
              background: "radial-gradient(ellipse 60% 60% at 80% 30%, #fdf6e8 0%, transparent 60%)",
            }}
          />
          
          <div className="relative z-10 animate-fade-up">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gold mb-6 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" /> Visual Aesthetics
            </p>
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-charcoal leading-[1.05] tracking-tight mb-6">
              Premium <br />
              <em className="not-italic text-gold">Graphic Design</em> <br />
              That Commands Attention.
            </h1>
            <p className="text-lg leading-relaxed text-mid max-w-[500px] mb-8">
              We craft iconic visual identities and interface systems. Your brand deserves design that stands out.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm text-mid">Trusted by 80+ US Brands</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-charcoal text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-gold transition-colors">
                Start Your Project
              </a>
              <a href="#portfolio" className="border border-gold text-gold px-8 py-3 rounded-full text-sm font-semibold hover:bg-gold hover:text-white transition-colors">
                View Portfolio
              </a>
            </div>
          </div>

          {/* Design Preview Card */}
          <div className="bg-white p-8 rounded-3xl shadow-card border border-black/[0.05] relative z-10 animate-fade-up [animation-delay:200ms]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-playfair text-2xl font-bold text-charcoal">Design Preview</h3>
              <div className="flex items-center gap-1 text-gold">
                <Sparkles size={14} />
                <span className="text-xs font-semibold">Creative Studio</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-mid mb-3">Color Palette</p>
                <div className="flex gap-2">
                  <div className="w-12 h-12 rounded-lg bg-[#1a1a2e]"></div>
                  <div className="w-12 h-12 rounded-lg bg-gold"></div>
                  <div className="w-12 h-12 rounded-lg bg-[#f5f5f5] border border-black/10"></div>
                  <div className="w-12 h-12 rounded-lg bg-[#2d1b69]"></div>
                  <div className="w-12 h-12 rounded-lg bg-[#c9a84c]"></div>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-mid mb-3">Typography</p>
                <div className="space-y-2">
                  <div className="font-playfair text-2xl font-bold text-charcoal">Playfair Display</div>
                  <div className="text-sm text-mid">Inter / Helvetica Neue</div>
                </div>
              </div>
              
              <div className="border-t border-black/5 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-mid">Logo Concepts</span>
                  <span className="text-xs text-gold">2-3 variations</span>
                </div>
                <div className="flex gap-4 mt-3">
                  <div className="w-16 h-16 rounded-xl bg-cream-light flex items-center justify-center text-2xl font-playfair font-bold text-gold">A</div>
                  <div className="w-16 h-16 rounded-xl bg-cream-light flex items-center justify-center text-2xl font-playfair font-bold text-charcoal">A</div>
                  <div className="w-16 h-16 rounded-xl bg-cream-light flex items-center justify-center text-2xl font-playfair font-bold text-gold">⟡</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-cream-light rounded-xl">
              <p className="text-xs text-mid text-center">
                Most projects completed in 2 weeks
              </p>
            </div>
          </div>
        </section>

        {/* TOOLS SECTION */}
        <section className="py-12 border-y border-black/5">
          <div className="max-w-[1300px] mx-auto px-8 lg:px-16">
            <p className="text-center text-mid text-sm uppercase tracking-wider mb-8">Design Tools We Master</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {tools.map((tool, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream-light">
                  <tool.icon size={18} className="text-gold" />
                  <span className="text-sm font-semibold text-charcoal">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO SHOWCASE SECTION */}
        <section className="py-24 bg-charcoal text-white px-8 lg:px-16">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-16 reveal">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gold mb-4 inline-flex items-center">
                Our Creative Portfolio
              </p>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold leading-tight">
                Visual Stories <em className="not-italic text-gold">We've Told</em>
              </h2>
              <p className="text-mid-light max-w-2xl mx-auto mt-4">
                Real design projects that transformed brands
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item, i) => (
                <div key={i} className="group relative rounded-3xl overflow-hidden cursor-pointer reveal hover:-translate-y-2 transition-transform duration-500">
                  <div className={`bg-gradient-to-br ${item.gradient} h-[320px] w-full flex flex-col items-center justify-center p-6 text-center`}>
                    <Eye size={48} className="text-white/30 mb-4" />
                    <p className="text-gold text-sm font-semibold mb-2">{item.category}</p>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/80 text-sm hidden group-hover:block transition-all duration-300">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal to-transparent">
                    <span className="text-gold text-[10px] tracking-widest uppercase font-semibold mb-2 block">{item.category}</span>
                    <h3 className="font-playfair text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES / FEATURE GRID */}
        <section className="py-24 px-8 lg:px-16 max-w-[1300px] mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
              Our <em className="not-italic text-gold">Design Expertise</em>
            </h2>
            <p className="text-mid max-w-2xl mx-auto">
              Comprehensive design solutions for every aspect of your brand
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-black/[0.05] rounded-2xl p-6 hover:shadow-card hover:-translate-y-1 transition-all duration-300 group reveal">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                  <service.icon className="text-gold group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-mid">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING TABLE - REDUCED PRICES */}
        <section className="py-24 bg-cream-light px-8 lg:px-16">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                Affordable <em className="not-italic text-gold">Design Packages</em>
              </h2>
              <p className="text-mid max-w-2xl mx-auto">
                Professional design at prices that make sense for your budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, i) => (
                <div key={i} className={`reveal bg-white rounded-2xl p-6 border transition-all duration-500 hover:-translate-y-1 ${plan.popular ? 'border-gold shadow-card relative' : 'border-black/[0.05] hover:shadow-card'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-white text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded-full inline-block">
                        Best Value
                      </span>
                    </div>
                  )}
                  <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">{plan.name}</h3>
                  <p className="text-xs text-mid mb-4 h-10">{plan.desc}</p>
                  
                  <div className="mb-4">
                    <span className="text-mid line-through text-xs mr-2">${plan.oldPrice}</span>
                    <span className="font-playfair text-3xl font-bold text-charcoal">${plan.price}</span>
                    <span className="text-mid text-xs ml-1">/ project</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-charcoal">
                        <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={12} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-2.5 rounded-lg text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${plan.popular ? 'bg-charcoal text-white hover:bg-gold' : 'bg-cream-light text-charcoal hover:bg-charcoal hover:text-white'}`}>
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
            
            <p className="text-center text-mid text-xs mt-6">
              Need something custom? Contact us for a personalized quote.
            </p>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-24 px-8 lg:px-16 max-w-[1300px] mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
              Simple <em className="not-italic text-gold">5-Step Process</em>
            </h2>
            <p className="text-mid max-w-2xl mx-auto">
              A straightforward approach to creating exceptional design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center reveal">
                <div className="text-gold text-3xl font-playfair font-bold mb-2">{step.step}</div>
                <div className="w-10 h-0.5 bg-gold mx-auto my-3"></div>
                <h3 className="text-base font-bold text-charcoal mb-1">{step.title}</h3>
                <p className="text-xs text-mid">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 bg-charcoal text-white px-8 lg:px-16">
          <div className="max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold leading-tight mb-5">
                  Why <em className="not-italic text-gold">Brands</em> Choose Us
                </h2>
                <p className="text-mid-light leading-relaxed mb-6">
                  Strategic design that communicates value, builds trust, and drives results — without breaking the bank.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Fast turnaround (2 weeks)",
                    "Affordable pricing",
                    "Source files included",
                    "Dedicated designer",
                    "Satisfaction guaranteed",
                    "Post-delivery support",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-gold shrink-0" />
                      <span className="text-xs text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 rounded-2xl p-8 reveal border border-white/10 text-center">
                <Award size={40} className="text-gold mx-auto mb-3" />
                <h3 className="text-xl font-playfair font-bold text-white mb-3">Ready to Elevate Your Brand?</h3>
                <p className="text-mid-light text-sm mb-5">
                  Let's create design that sets you apart.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="bg-gold text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-gold transition-colors">
                    Start Your Project
                  </button>
                  <button className="border border-gold text-gold px-5 py-2 rounded-full text-sm font-semibold hover:bg-gold hover:text-white transition-colors">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 bg-gold text-white text-center px-8">
          <div className="max-w-[700px] mx-auto">
            <Sparkles size={40} className="mx-auto mb-4 opacity-80" />
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-3">
              Let's Create Something Beautiful
            </h2>
            <p className="text-base mb-6 opacity-90">
              Free consultation. Quick turnaround. Premium quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white text-gold px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-charcoal hover:text-white transition-colors">
                Schedule Free Call
              </button>
              <button className="border-2 border-white text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white hover:text-gold transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}