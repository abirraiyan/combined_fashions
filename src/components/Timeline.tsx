import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Building2, Globe, Truck, Star, Users } from "lucide-react";

const milestones = [
  {
    year: "2003",
    title: "Foundation",
    description:
      "Combined Fashions established in Dhaka with a vision to deliver premium textile solutions.",
    icon: Building2,
  },
  {
    year: "2008",
    title: "First Export",
    description:
      "Expanded operations to serve international markets across Europe and North America.",
    icon: Globe,
  },
  {
    year: "2012",
    title: "Factory Expansion",
    description:
      "Opened second manufacturing facility in Savar to increase production capacity.",
    icon: Truck,
  },
  {
    year: "2018",
    title: "50+ Brand Partners",
    description:
      "Milestone partnership with over 50 global fashion brands and retailers.",
    icon: Users,
  },
  {
    year: "2023",
    title: "Gold Membership",
    description:
      "Achieved Gold Member status for excellence in manufacturing standards.",
    icon: Star,
  },
  {
    year: "2024",
    title: "THE BIZZ Award",
    description:
      "Recognized with THE BIZZ Business Excellence Award for outstanding achievement.",
    icon: Award,
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="milestones"
      ref={ref}
      className="section-cream section-padding overflow-hidden"
    >
      <div className="container mx-auto relative">

        {/* ===== SECTION HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="subheading text-gold-dark mb-4 block">
            Our Journey
          </span>
          <h2 className="heading-section text-charcoal mb-6">
            Two Decades of Excellence
          </h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        {/* ===== DESKTOP TIMELINE ===== */}
        <div className="hidden lg:block relative">

          {/* Animated Center Line */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={isInView ? { height: "100%", opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-gold via-gold to-gold/20"
          />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`relative flex items-center mb-16 ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* CONTENT CARD */}
                <div
                  className={`w-5/12 ${
                    isLeft ? "pr-14 text-right" : "pl-14 text-left"
                  }`}
                >
                  <div className="bg-charcoal p-8 rounded-sm shadow-elevated hover:shadow-gold transition-shadow duration-500">
                    <span className="text-gold font-serif text-3xl font-medium">
                      {milestone.year}
                    </span>
                    <h3 className="text-cream text-xl font-serif mt-2 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-cream/70 font-sans text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* ICON */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    delay: index * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-gold ring-4 ring-gold/40 z-10"
                >
                  <Icon className="w-6 h-6 text-charcoal-dark" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* ===== MOBILE TIMELINE ===== */}
        <div className="lg:hidden relative pl-10">

          {/* Left Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1 }}
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-gold via-gold to-gold/20"
          />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;

            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative mb-10"
              >
                {/* ICON */}
                <div className="absolute left-4 -translate-x-1/2 w-10 h-10 bg-gold rounded-full flex items-center justify-center z-10 ring-4 ring-gold/40">
                  <Icon className="w-5 h-5 text-charcoal-dark" />
                </div>

                {/* CONTENT */}
                <div className="ml-10 bg-charcoal p-6 rounded-sm shadow-elevated">
                  <span className="text-gold font-serif text-2xl font-medium">
                    {milestone.year}
                  </span>
                  <h3 className="text-cream text-lg font-serif mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-cream/70 font-sans text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
