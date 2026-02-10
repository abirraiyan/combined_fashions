import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, BadgeCheck, FileCheck, Star, Globe } from "lucide-react";
import bizzAwardImage from "@/assets/bizz-award.jpg";

const certifications = [
  {
    icon: Shield,
    title: "OEKO-TEX® Standard 100",
    description: "Certified for textiles tested for harmful substances"
  },
  {
    icon: BadgeCheck,
    title: "ISO 9001:2015",
    description: "Quality Management System Certification"
  },
  {
    icon: FileCheck,
    title: "BSCI Compliant",
    description: "Business Social Compliance Initiative Member"
  },
  {
    icon: Star,
    title: "SEDEX Member",
    description: "Supplier Ethical Data Exchange Registered"
  },
  {
    icon: Globe,
    title: "WRAP Certified",
    description: "Worldwide Responsible Accredited Production"
  },
  {
    icon: Award,
    title: "Gold Member Status",
    description: "Excellence in Manufacturing Standards"
  }
];

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="section-dark section-padding" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="subheading mb-4 block">Recognition & Compliance</span>
          <h2 className="heading-section text-cream mb-6">
            Awards & Certifications
          </h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        {/* Featured Award */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={bizzAwardImage}
                alt="THE BIZZ Business Excellence Award"
                className="w-full max-w-md mx-auto rounded-sm shadow-elevated"
              />
              <div className="absolute -top-4 -right-4 lg:-right-8 bg-gold px-6 py-3 rounded-sm">
                <span className="text-charcoal-dark font-serif font-bold text-lg">2024</span>
              </div>
            </div>
            <div>
              <span className="text-gold text-sm font-sans uppercase tracking-widest mb-4 block">Featured Recognition</span>
              <h3 className="text-cream text-3xl lg:text-4xl font-serif mb-6">THE BIZZ Business Excellence Award</h3>
              <p className="text-cream/70 font-sans text-lg leading-relaxed mb-6">
                Combined Fashions has been honored with THE BIZZ Award, a prestigious recognition 
                bestowed by the World Confederation of Businesses (WORLDCOB). This award celebrates 
                our commitment to business excellence, innovation, and leadership in the global 
                textile manufacturing industry.
              </p>
              <div className="gold-line mb-6" />
              <div className="flex flex-wrap gap-4">
                <div className="bg-charcoal-light px-6 py-4 rounded-sm">
                  <p className="text-gold font-serif text-2xl">WORLDCOB</p>
                  <p className="text-cream/60 text-sm font-sans">Certified Member</p>
                </div>
                <div className="bg-charcoal-light px-6 py-4 rounded-sm">
                  <p className="text-gold font-serif text-2xl">85-036-7016</p>
                  <p className="text-cream/60 text-sm font-sans">DUNS Number</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 text-center"
        >
          <h3 className="text-cream text-2xl font-serif mb-2">Global Certifications</h3>
          <p className="text-cream/60 font-sans">Trusted compliance standards that reflect our commitment to quality</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-charcoal-light/50 border border-charcoal-light p-8 rounded-sm hover:border-gold/30 transition-colors duration-300 group"
              >
                <Icon className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-cream font-serif text-lg mb-2">{cert.title}</h4>
                <p className="text-cream/60 font-sans text-sm">{cert.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 overflow-hidden"
        >
          <div className="bg-charcoal-light/30 py-6">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-12 mx-6">
                  <span className="text-gold/60 font-sans text-sm uppercase tracking-widest">OEKO-TEX® Certified</span>
                  <span className="text-cream/30">•</span>
                  <span className="text-gold/60 font-sans text-sm uppercase tracking-widest">ISO 9001:2015</span>
                  <span className="text-cream/30">•</span>
                  <span className="text-gold/60 font-sans text-sm uppercase tracking-widest">BSCI Compliant</span>
                  <span className="text-cream/30">•</span>
                  <span className="text-gold/60 font-sans text-sm uppercase tracking-widest">SEDEX Member</span>
                  <span className="text-cream/30">•</span>
                  <span className="text-gold/60 font-sans text-sm uppercase tracking-widest">WRAP Certified</span>
                  <span className="text-cream/30">•</span>
                  <span className="text-gold/60 font-sans text-sm uppercase tracking-widest">Gold Member</span>
                  <span className="text-cream/30">•</span>
                  <span className="text-gold/60 font-sans text-sm uppercase tracking-widest">THE BIZZ Award Winner</span>
                  <span className="text-cream/30">•</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
