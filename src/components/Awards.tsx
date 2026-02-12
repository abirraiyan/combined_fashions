import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bizzAwardImage from "@/assets/bizz-award.jpg";

const certifications = [
  {
    logo: "/certifications/oeko-tex.png",
    title: "OEKO-TEX® Standard 100",
    description: "Certified for textiles tested for harmful substances",
  },
  {
    logo: "/certifications/iso-9001.png",
    title: "ISO 9001:2015",
    description: "Quality Management System Certification",
  },
  {
    logo: "/certifications/bsci.png",
    title: "BSCI Compliant",
    description: "Business Social Compliance Initiative Member",
  },
  {
    logo: "/certifications/sedex.png",
    title: "SEDEX Member",
    description: "Supplier Ethical Data Exchange Registered",
  },
  {
    logo: "/certifications/wrap.png",
    title: "WRAP Certified",
    description: "Worldwide Responsible Accredited Production",
  },
  {
    logo: "/certifications/bizz.png",
    title: "THE BIZZ Award",
    description: "World Confederation of Businesses Recognition",
  },
  {
    logo: "/certifications/intertek.png",
    title: "Intertek Certified",
    description: "Independent Quality & Compliance Verification",
  },
  {
    logo: "/certifications/ifc.png",
    title: "IFC Partnership",
    description: "International Finance Corporation Affiliation",
  },
];

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="section-dark section-padding" ref={ref}>
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="subheading mb-4 block">
            Recognition & Compliance
          </span>
          <h2 className="heading-section text-cream mb-6">
            Awards & Certifications
          </h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        {/* Featured Award */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 flex justify-center"
        >
          <div className="relative">
            <img
              src={bizzAwardImage}
              alt="THE BIZZ Business Excellence Award"
              className="w-full max-w-md rounded-sm shadow-elevated"
            />
            <div className="absolute -top-4 -right-4 bg-gold px-6 py-2 rounded-sm">
              <span className="text-charcoal-dark font-serif font-bold text-lg">
                2024
              </span>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        {/* FIXED RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.07 }}
              className="bg-charcoal-light/40 border border-white/5 
                         hover:border-gold/30 
                         p-5 sm:p-6 rounded-sm 
                         transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">

                {/* Small Icon */}
                <div className="w-9 h-9 flex items-center justify-center 
                                bg-white/5 border border-white/10 
                                rounded-sm p-2 shrink-0 
                                group-hover:border-gold/40 transition-all">
                  <img
                    src={cert.logo}
                    alt={cert.title}
                    className="max-h-5 object-contain opacity-90"
                  />
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-cream font-serif text-sm tracking-wide mb-1 group-hover:text-gold transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-cream/50 font-sans text-xs leading-relaxed">
                    {cert.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Awards;
