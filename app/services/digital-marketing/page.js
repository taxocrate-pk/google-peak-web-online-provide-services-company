"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { 
  CheckCircle2, ArrowRight, TrendingUp, Target, Users, 
  BarChart3, Search, Facebook, Instagram, Linkedin, 
  Mail, Zap, Award, Globe, Clock, CreditCard, Headphones,
  Rocket, PieChart, LineChart, Megaphone
} from "lucide-react";

const marketingPackages = [
  {
    name: "Growth Starter",
    oldPrice: "2,499",
    price: "1,299",
    desc: "Perfect for startups & small businesses ready to scale online.",
    features: [
      "Google Ads Management (Up to $2,000 ad spend)",
      "Meta Ads (Facebook & Instagram) Management",
      "Monthly Keyword Research & Targeting",
      "Campaign Setup & Optimization",
      "Bi-Weekly Performance Reports",
      "Dedicated Account Manager",
      "Monthly Strategy Call",
    ],
    buttonText: "Start Growing",
    popular: false,
  },
  {
    name: "Performance Pro",
    oldPrice: "4,999",
    price: "2,499",
    desc: "Built for established businesses seeking aggressive growth.",
    features: [
      "Google Ads Management (Up to $5,000 ad spend)",
      "Meta Ads (Facebook & Instagram) Management",
      "LinkedIn Ads Management",
      "Full Conversion Funnel Optimization",
      "A/B Split Testing & Experimentation",
      "Advanced Audience Targeting & Retargeting",
      "Weekly Performance Reports & Insights",
      "Dedicated Senior Account Manager",
      "Bi-Weekly Strategy & Optimization Call",
      "Landing Page Optimization Recommendations",
    ],
    buttonText: "Scale My Business",
    popular: true,
  },
  {
    name: "Enterprise Elite",
    oldPrice: "9,999",
    price: "5,999",
    desc: "Full-service marketing for established brands & enterprises.",
    features: [
      "Unlimited Ad Spend Management (Google, Meta, LinkedIn, TikTok)",
      "Full-Funnel Strategy & Execution",
      "B2B Lead Generation & LinkedIn Integration",
      "Advanced Analytics & Custom Dashboards",
      "Data Analytics & Attribution Modeling",
      "Creative Ad Production (Copy & Visuals)",
      "Conversion Rate Optimization (CRO)",
      "Email Marketing & Automation Setup",
      "Daily Performance Monitoring",
      "Dedicated Marketing Team (Strategist + Analyst + Creative)",
      "Weekly Executive Strategy Session",
    ],
    buttonText: "Go Enterprise",
    popular: false,
  },
];

const services = [
  { 
    title: "Meta & Google Ads", 
    desc: "Precision-targeted paid acquisition loops designed to minimize cost-per-lead and maximize ROAS.",
    icon: TrendingUp,
  },
  { 
    title: "Conversion Funnel Optimization", 
    desc: "We analyze user behavior and deploy A/B split tests to turn high-intent traffic into qualified, paying clients.",
    icon: Target,
  },
  { 
    title: "B2B Lead Generation", 
    desc: "Strategic outreach and LinkedIn integration tailored specifically for enterprise growth and professional services.",
    icon: Users,
  },
  { 
    title: "Data Analytics & Tracking", 
    desc: "Transparent, real-time performance reporting to ensure every marketing dollar is accounted for and scaled properly.",
    icon: BarChart3,
  },
  { 
    title: "SEO & Content Strategy", 
    desc: "Data-driven content that ranks, converts, and establishes your brand as an industry authority.",
    icon: Search,
  },
  { 
    title: "Social Media Management", 
    desc: "Strategic organic growth across platforms with engaging content that builds community and drives action.",
    icon: Instagram,
  },
];

const platforms = [
  { name: "Google Ads", icon: Search, color: "bg-blue-500/10 text-blue-500" },
  { name: "Meta Ads", icon: Facebook, color: "bg-blue-600/10 text-blue-600" },
  { name: "Instagram", icon: Instagram, color: "bg-pink-500/10 text-pink-500" },
  { name: "LinkedIn", icon: Linkedin, color: "bg-blue-700/10 text-blue-700" },
  { name: "Email Marketing", icon: Mail, color: "bg-red-500/10 text-red-500" },
  { name: "Analytics", icon: PieChart, color: "bg-green-500/10 text-green-500" },
];

const processSteps = [
  { 
    step: "01", 
    title: "Discovery & Audit", 
    desc: "We analyze your current marketing, competition, and target audience to identify opportunities."
  },
  { 
    step: "02", 
    title: "Strategy Development", 
    desc: "Custom marketing strategy built around your specific goals, budget, and timeline."
  },
  { 
    step: "03", 
    title: "Campaign Setup", 
    desc: "Professional setup of ad accounts, tracking pixels, conversion goals, and landing pages."
  },
  { 
    step: "04", 
    title: "Launch & Optimize", 
    desc: "Initial campaign launch followed by continuous A/B testing and performance optimization."
  },
  { 
    step: "05", 
    title: "Scale & Grow", 
    desc: "Scale winning campaigns while exploring new channels and growth opportunities."
  },
];

const caseStudies = [
  {
    title: "SaaS Company",
    result: "312% Increase in Demo Requests",
    metric: "3.2x ROAS",
    description: "Full-funnel Google & LinkedIn campaign for B2B software company.",
  },
  {
    title: "Ecommerce Brand",
    result: "189% Revenue Growth",
    metric: "4.5x ROAS",
    description: "Meta & Google Shopping optimization for fashion retailer.",
  },
  {
    title: "Professional Services",
    result: "450+ Qualified Leads",
    metric: "56% Conversion Rate",
    description: "LinkedIn lead generation for corporate law firm.",
  },
];

export default function DigitalMarketing() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Navbar />

      <main className="bg-white selection:bg-gold selection:text-white">
        
        {/* HERO SECTION */}
        <section className="pt-40 pb-24 px-8 lg:px-16 max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cream-light rounded-full blur-[100px] pointer-events-none opacity-50" />
          
          <div className="relative z-10 animate-fade-up">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gold mb-6 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" /> Growth Engineering
            </p>
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-charcoal leading-[1.05] tracking-tight mb-6">
              Results-Driven <br />
              <em className="not-italic text-gold">Marketing</em> That <br />
              Scales Revenue.
            </h1>
            <p className="text-lg leading-relaxed text-mid max-w-[500px] mb-8">
              From granular SEO content strategies to aggressive paid acquisition funnels, 
              our marketing matrix is strictly focused on measurable revenue growth.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm text-mid">Trusted by 100+ US Businesses</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-charcoal text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-gold transition-colors">
                Scale My Funnel
              </a>
              <a href="#packages" className="border border-gold text-gold px-8 py-3 rounded-full text-sm font-semibold hover:bg-gold hover:text-white transition-colors">
                View Packages
              </a>
            </div>
          </div>

          {/* Results Dashboard Preview */}
          <div className="bg-white p-8 rounded-3xl shadow-card border border-black/[0.05] relative z-10 animate-fade-up [animation-delay:200ms]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-playfair text-2xl font-bold text-charcoal">Performance Dashboard</h3>
              <div className="flex items-center gap-1 text-green-500">
                <Zap size={14} />
                <span className="text-xs font-semibold">Live Data</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm text-mid mb-2">
                  <span>ROAS</span>
                  <span className="text-gold font-bold">4.8x</span>
                </div>
                <div className="w-full bg-cream-light rounded-full h-2">
                  <div className="bg-gold h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-mid mb-2">
                  <span>Conversion Rate</span>
                  <span className="text-gold font-bold">3.2%</span>
                </div>
                <div className="w-full bg-cream-light rounded-full h-2">
                  <div className="bg-gold h-2 rounded-full w-[64%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-mid mb-2">
                  <span>CTR</span>
                  <span className="text-gold font-bold">2.9%</span>
                </div>
                <div className="w-full bg-cream-light rounded-full h-2">
                  <div className="bg-gold h-2 rounded-full w-[58%]"></div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-black/5">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-mid">Monthly Leads Generated</span>
                  <span className="text-2xl font-bold text-charcoal">247+</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-cream-light rounded-xl">
              <p className="text-xs text-mid text-center">
                Average client results after 90 days of partnership
              </p>
            </div>
          </div>
        </section>

        {/* PLATFORMS SECTION */}
        <section className="py-12 border-y border-black/5">
          <div className="max-w-[1300px] mx-auto px-8 lg:px-16">
            <p className="text-center text-mid text-sm uppercase tracking-wider mb-8">We Master All Major Platforms</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {platforms.map((platform, i) => (
                <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full ${platform.color}`}>
                  <platform.icon size={18} />
                  <span className="text-sm font-semibold">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES / RESULTS SECTION */}
        <section className="py-24 bg-charcoal text-white px-8 lg:px-16">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-16 reveal">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gold mb-4 inline-flex items-center">
                Real Results
              </p>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold leading-tight">
                Data That <em className="not-italic text-gold">Speaks</em>
              </h2>
              <p className="text-mid-light max-w-2xl mx-auto mt-4">
                Real campaigns. Real numbers. Real growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((study, i) => (
                <div key={i} className="group relative rounded-3xl overflow-hidden cursor-pointer reveal hover:-translate-y-2 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-charcoal to-gray-800 h-[350px] w-full flex flex-col items-center justify-center p-8 text-center">
                    <PieChart size={48} className="text-white/30 mb-4" />
                    <p className="text-gold text-sm font-semibold mb-2">{study.title}</p>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.result}</h3>
                    <p className="text-3xl font-playfair font-bold text-gold mb-3">{study.metric}</p>
                    <p className="text-white/80 text-sm">{study.description}</p>
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
              Comprehensive <em className="not-italic text-gold">Marketing Services</em>
            </h2>
            <p className="text-mid max-w-2xl mx-auto">
              Everything you need to dominate your market and scale revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-black/[0.05] rounded-2xl p-8 hover:shadow-card hover:-translate-y-1 transition-all duration-300 group reveal">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
                  <service.icon className="text-gold group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-mid">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING TABLE */}
        <section className="py-24 bg-cream-light px-8 lg:px-16">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-20 reveal">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                Transparent <em className="not-italic text-gold">Marketing Packages</em>
              </h2>
              <p className="text-mid max-w-2xl mx-auto">
                Performance-driven pricing designed for scalability. No long-term contracts required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {marketingPackages.map((plan, i) => (
                <div key={i} className={`reveal bg-white rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-1 ${plan.popular ? 'border-gold shadow-card relative' : 'border-black/[0.05] hover:shadow-card'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-white text-[10px] tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full inline-block">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">{plan.name}</h3>
                  <p className="text-sm text-mid mb-6 h-12">{plan.desc}</p>
                  
                  <div className="mb-6">
                    <span className="text-mid line-through text-sm mr-3">${plan.oldPrice}</span>
                    <span className="font-playfair text-4xl font-bold text-charcoal">${plan.price}</span>
                    <span className="text-mid text-sm ml-1">/ month</span>
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
                  
                  <p className="text-center text-mid text-xs mt-4">
                    * Ad spend not included
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-24 px-8 lg:px-16 max-w-[1300px] mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
              Our <em className="not-italic text-gold">Proven Process</em>
            </h2>
            <p className="text-mid max-w-2xl mx-auto">
              A systematic approach to predictable, scalable growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center reveal">
                <div className="text-gold text-4xl font-playfair font-bold mb-3">{step.step}</div>
                <div className="w-12 h-0.5 bg-gold mx-auto my-4"></div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{step.title}</h3>
                <p className="text-xs text-mid">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 bg-charcoal text-white px-8 lg:px-16">
          <div className="max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <h2 className="font-playfair text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Why <em className="not-italic text-gold">Smart Marketers</em> Choose Us
                </h2>
                <p className="text-mid-light leading-relaxed mb-8">
                  We don't just manage campaigns — we engineer growth. Every decision is backed by data, 
                  every dollar is tracked, and every strategy is designed for maximum ROI.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Data-driven decision making",
                    "Transparent real-time reporting",
                    "Dedicated account team",
                    "No long-term contracts",
                    "Performance guarantee",
                    "Weekly strategy calls",
                    "Multi-channel expertise",
                    "Proven track record",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-gold shrink-0" />
                      <span className="text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 rounded-3xl p-10 reveal border border-white/10">
                <div className="text-center">
                  <Award size={48} className="text-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-playfair font-bold text-white mb-4">Ready to Scale Your Revenue?</h3>
                  <p className="text-mid-light mb-6">
                    Join 100+ businesses that have achieved measurable growth with our marketing solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-gold text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-gold transition-colors">
                      Get Free Consultation
                    </button>
                    <button className="border border-gold text-gold px-6 py-3 rounded-full text-sm font-semibold hover:bg-gold hover:text-white transition-colors">
                      View Case Studies
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 bg-gold text-white text-center px-8">
          <div className="max-w-[800px] mx-auto">
            <Megaphone size={48} className="mx-auto mb-6 opacity-80" />
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
              Let's Scale Your Business Together
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Book a free strategy call and discover how we can help you achieve predictable, scalable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gold px-8 py-3 rounded-full text-sm font-semibold hover:bg-charcoal hover:text-white transition-colors">
                Schedule Strategy Call
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-gold transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

// Helper Star component for ratings
function Star({ size, className }) {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
    </svg>
  );
}