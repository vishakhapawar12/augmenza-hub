// HPI 1.7-V
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Globe, Target, Mail, Phone, MapPin, Linkedin, Instagram, ChevronRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Canonical Data Sources ---
// Preserving and structuring data from user request and existing code.

const COMPANY_INFO = {
  name: "Augmenza Tech Pvt. Ltd.",
  tagline: "Your Trusted IT Staffing Partner",
  description: "Augmenza Tech delivers exceptional IT talent solutions with precision and reliability. We connect businesses with the right professionals to drive innovation and growth.",
  logoUrl: "https://static.wixstatic.com/media/4551fe_7f475815060345ef96c4fff45e0f0143~mv2.png",
  careerLink: "https://forms.gle/FBZq5uwPG9LcVrJ4A",
  socials: {
    linkedin: "https://www.linkedin.com/company/110598904/admin/page-posts/published/",
    instagram: "https://www.instagram.com/augmenzatech/"
  },
  contact: {
    phone: "+91-9220758400",
    address: "HB 43, Abhiruchi Parisar, Old Subhash Nagar Colony, Old Subhash Nagar, Bhopal, Madhya Pradesh 462023",
    emails: [
      { label: "General Inquiries", email: "info@augmenzatech.com" },
      { label: "Vendor Empanelment", email: "Sales@augmenzatech.com" },
      { label: "HR Department", email: "hr@augmenzatech.com" }
    ]
  }
};

const SERVICES_DATA = [
  {
    id: "01",
    title: "Onshore & Offshore Delivery",
    description: "Flexible delivery models tailored to your operational needs. Whether you require local expertise or global scalability, we bridge the gap with precision.",
    features: ["24/7 Operational Support", "Cost-Effective Scaling", "Seamless Integration"]
  },
  {
    id: "02",
    title: "Bench Resource Support",
    description: "Immediate access to a pre-vetted pool of skilled professionals ready to deploy. Minimize downtime and accelerate project timelines.",
    features: ["Rapid Deployment", "Skill-Gap Analysis", "Short & Long-term Engagement"]
  },
  {
    id: "03",
    title: "Customized Hiring Solutions",
    description: "Bespoke recruitment strategies designed to align with your unique corporate culture and technical requirements.",
    features: ["Executive Search", "Technical Screening", "Cultural Fit Assessment"]
  }
];

const VALUE_PROPS = [
  {
    icon: Users,
    title: 'Expert Talent Pool',
    description: 'Access to highly skilled IT professionals vetted for excellence and reliability.'
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    description: 'Flexible onshore and offshore delivery models to suit your business requirements.'
  },
  {
    icon: Target,
    title: 'Customized Solutions',
    description: 'Tailored hiring strategies designed to match your specific project needs.'
  }
];

const KEYWORDS = ["Precision", "Reliability", "Innovation", "Growth", "Excellence", "Integrity", "Partnership"];

// --- Components ---

const SectionDivider = () => (
  <div className="w-full flex justify-center items-center py-12 opacity-20">
    <div className="h-[1px] w-24 bg-accent-gold" />
    <div className="mx-4 text-accent-gold text-xs tracking-[0.2em]">AUGMENZA</div>
    <div className="h-[1px] w-24 bg-accent-gold" />
  </div>
);

const AnimatedText = ({ text, className = "" }: { text: string, className?: string }) => {
  const words = text.split(" ");
  return (
    <div className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-deep-navy text-soft-white selection:bg-accent-gold selection:text-white overflow-x-clip">
      <Header />

      {/* --- Hero Section --- */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(160,140,112,0.08),transparent_70%)]" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1a1a2e] via-transparent to-transparent opacity-50" />
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        </div>

        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-accent-gold" />
              <span className="text-accent-gold font-paragraph tracking-[0.2em] text-sm uppercase">Est. 2024</span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-soft-white">
              <span className="block">Your Trusted</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                IT Staffing Partner
              </span>
            </h1>

            <p className="font-paragraph text-lg md:text-xl text-muted-grey max-w-2xl mb-12 leading-relaxed border-l-2 border-accent-gold/30 pl-6">
              {COMPANY_INFO.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/services">
                <button className="group relative px-8 py-4 bg-accent-gold text-white font-paragraph font-semibold rounded overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(160,140,112,0.3)]">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="group px-8 py-4 bg-transparent border border-white/20 text-soft-white font-paragraph font-semibold rounded hover:bg-white/5 transition-all">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual / Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              {/* Decorative Circles */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-white/5 rounded-full border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-white/5 rounded-full"
              />
              
              {/* Logo Container */}
              <div className="relative z-10 p-12 bg-deep-navy/50 backdrop-blur-sm rounded-[50%_45%] border border-white/10 shadow-2xl">
                <Image 
                  src={COMPANY_INFO.logoUrl}
                  alt="Augmenza Tech Logo"
                  width={400}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-grey">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent-gold to-transparent" />
        </motion.div>
      </section>

      {/* --- Infinite Ticker --- */}
      <div className="w-full bg-white/5 border-y border-white/5 py-6 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center"
          >
            {[...KEYWORDS, ...KEYWORDS, ...KEYWORDS, ...KEYWORDS].map((word, i) => (
              <div key={i} className="flex items-center gap-16">
                <span className="text-2xl md:text-4xl font-heading text-white/20 uppercase tracking-widest">{word}</span>
                <div className="w-2 h-2 rounded-full bg-accent-gold/40" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- Value Propositions (Parallax Cards) --- */}
      <section className="py-32 w-full max-w-[120rem] mx-auto px-6 lg:px-20 relative">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold font-paragraph text-sm tracking-[0.2em] uppercase block mb-4"
          >
            Why Choose Us
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-soft-white mb-6">
            <AnimatedText text="Excellence in Every Placement" />
          </h2>
          <p className="font-paragraph text-muted-grey text-lg">
            We bring expertise, reliability, and tailored solutions to meet your IT staffing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {VALUE_PROPS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative p-8 lg:p-10 bg-[#232340]/30 border border-white/5 rounded-2xl overflow-hidden hover:bg-[#232340]/50 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                <item.icon className="w-32 h-32 text-accent-gold" />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-accent-gold/10 flex items-center justify-center mb-8 group-hover:bg-accent-gold/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent-gold" />
                </div>
                <h3 className="font-heading text-2xl text-soft-white mb-4 group-hover:text-accent-gold transition-colors">
                  {item.title}
                </h3>
                <p className="font-paragraph text-muted-grey leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* --- Services Section (Sticky Layout) --- */}
      <section className="py-24 w-full max-w-[120rem] mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="font-heading text-4xl md:text-6xl text-soft-white mb-8">
                Our Core <br />
                <span className="text-accent-gold">Services</span>
              </h2>
              <p className="font-paragraph text-muted-grey text-lg mb-12 leading-relaxed">
                Comprehensive staffing solutions designed to empower your business with the right talent, at the right time.
              </p>
              <Link to="/services">
                <button className="hidden lg:flex items-center gap-3 text-soft-white hover:text-accent-gold transition-colors group">
                  <span className="font-paragraph font-semibold uppercase tracking-wider text-sm">View All Services</span>
                  <div className="w-8 h-[1px] bg-current group-hover:w-12 transition-all" />
                </button>
              </Link>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="lg:w-2/3 flex flex-col gap-12">
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group relative bg-gradient-to-br from-[#232340]/40 to-transparent border border-white/5 p-8 md:p-12 rounded-3xl hover:border-accent-gold/30 transition-colors duration-500"
              >
                <div className="absolute top-8 right-8 text-6xl font-heading text-white/5 font-bold select-none">
                  {service.id}
                </div>
                
                <h3 className="font-heading text-3xl text-soft-white mb-4 group-hover:text-accent-gold transition-colors">
                  {service.title}
                </h3>
                <p className="font-paragraph text-muted-grey mb-8 max-w-xl">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-soft-white/80">
                      <CheckCircle2 className="w-4 h-4 text-accent-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-accent-gold text-sm font-semibold uppercase tracking-wider group-hover:gap-4 transition-all cursor-pointer">
                  Learn More <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
            
            <div className="lg:hidden mt-8">
              <Link to="/services">
                <button className="w-full py-4 border border-white/20 rounded text-soft-white font-semibold hover:bg-white/5 transition-colors">
                  View All Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA / Career Section --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-gold/5" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
        
        <div className="w-full max-w-[100rem] mx-auto px-6 lg:px-20 relative z-10">
          <div className="bg-deep-navy border border-white/10 rounded-[2rem] p-12 lg:p-24 text-center relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-accent-gold/10 blur-[100px] rounded-full pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-soft-white mb-8">
                Ready to Transform Your Team?
              </h2>
              <p className="font-paragraph text-lg md:text-xl text-muted-grey max-w-2xl mx-auto mb-12">
                Partner with Augmenza Tech to access top-tier IT talent and drive your business forward. Or join our team of experts.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact">
                  <button className="w-full sm:w-auto px-10 py-4 bg-accent-gold text-white font-paragraph font-semibold rounded hover:bg-[#8c7a60] transition-colors shadow-lg shadow-accent-gold/20">
                    Start Hiring
                  </button>
                </Link>
                <a 
                  href={COMPANY_INFO.careerLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full px-10 py-4 bg-transparent border border-white/20 text-soft-white font-paragraph font-semibold rounded hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                    Join Our Team <ExternalLink className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Contact Info Block --- */}
      <section className="py-24 bg-[#151525] border-t border-white/5">
        <div className="w-full max-w-[120rem] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Address */}
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent-gold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-xl text-soft-white mb-4">Visit Us</h4>
                <p className="font-paragraph text-muted-grey text-sm leading-relaxed">
                  {COMPANY_INFO.contact.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent-gold">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-xl text-soft-white mb-4">Call Us</h4>
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="font-paragraph text-muted-grey hover:text-accent-gold transition-colors">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
            </div>

            {/* Emails */}
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent-gold">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-xl text-soft-white mb-4">Email Us</h4>
                <div className="flex flex-col gap-2">
                  {COMPANY_INFO.contact.emails.map((item, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-xs text-white/40 uppercase tracking-wider">{item.label}</span>
                      <a href={`mailto:${item.email}`} className="font-paragraph text-muted-grey hover:text-accent-gold transition-colors">
                        {item.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent-gold">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-xl text-soft-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a 
                    href={COMPANY_INFO.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-muted-grey hover:bg-accent-gold hover:text-white transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={COMPANY_INFO.socials.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-muted-grey hover:bg-accent-gold hover:text-white transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}