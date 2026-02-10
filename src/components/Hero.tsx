import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import heroImage from "@/assets/hero-embroidery.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] md:h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury embroidery craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="image-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 pt-24 pb-36 md:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl"
        >
          {/* Tagline */}
          <span className="subheading mb-4 block text-gold-light">
            Your Premium Fashion Partner
          </span>

          {/* Headline */}
          <h1 className="heading-display text-cream mb-5">
            Precision. <span className="text-gold">Artistry.</span> Scale.
          </h1>

          {/* Subtitle */}
          <p className="text-cream/70 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Two decades of excellence in textile craftsmanship. From intricate
            embroidery to large-scale production, we transform fashion visions
            into reality.
          </p>

          {/* Divider */}
          <div className="gold-line-long mx-auto mb-8" />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.a
              href="#capabilities"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-hero-primary w-full sm:w-auto text-center px-6 py-4"
            >
              Explore Capabilities
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-hero-secondary w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4"
            >
              <Play className="w-4 h-4" />
              Our Story
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden md:block absolute bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-cream/50 hover:text-gold transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-charcoal/90 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-gold text-2xl sm:text-3xl font-serif">20+</p>
              <p className="text-cream/60 text-[10px] uppercase tracking-wider mt-1">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-gold text-2xl sm:text-3xl font-serif">50+</p>
              <p className="text-cream/60 text-[10px] uppercase tracking-wider mt-1">
                Global Brands
              </p>
            </div>
            <div>
              <p className="text-gold text-2xl sm:text-3xl font-serif">2</p>
              <p className="text-cream/60 text-[10px] uppercase tracking-wider mt-1">
                Factories
              </p>
            </div>
            <div>
              <p className="text-gold text-2xl sm:text-3xl font-serif">1M+</p>
              <p className="text-cream/60 text-[10px] uppercase tracking-wider mt-1">
                Pieces / Month
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
