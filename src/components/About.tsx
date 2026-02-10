import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Building, Landmark } from "lucide-react";
import factoryImage from "@/assets/factory-interior.jpg";
import Leadership from "./Leadership";


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-cream section-padding" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="subheading text-gold-dark mb-4 block">Our Legacy</span>
          <h2 className="heading-section text-charcoal mb-6">
            Crafting Excellence Since 2003
          </h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={factoryImage}
                alt="Combined Fashions modern factory interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-sm shadow-elevated">
              <p className="text-charcoal-dark font-serif text-4xl font-bold">20+</p>
              <p className="text-charcoal text-sm font-sans uppercase tracking-wider">Years</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal-light text-lg leading-relaxed mb-6 font-sans">
                For over two decades, <strong className="text-charcoal font-semibold">Combined Fashions</strong> has 
                stood at the intersection of traditional craftsmanship and industrial precision. What began as a 
                vision in Dhaka has evolved into a globally recognized name in premium textile manufacturing.
              </p>
              <p className="text-charcoal-light text-lg leading-relaxed mb-6 font-sans">
                Our journey is defined by an unwavering commitment to quality. From the intricate artistry of 
                hand-guided embroidery to the cutting-edge technology of our screen printing facilities, every 
                thread we stitch and every design we print carries the hallmark of excellence.
              </p>
              <p className="text-charcoal-light text-lg leading-relaxed mb-6 font-sans">
                Today, we partner with brands across <strong className="text-charcoal font-semibold">Europe, North America, 
                and Asia</strong>—transforming creative visions into tangible reality. Our state-of-the-art facilities, 
                staffed by skilled artisans and supported by advanced machinery, enable us to deliver at scale without 
                compromising the bespoke quality our clients expect.
              </p>
              <p className="text-charcoal-light text-lg leading-relaxed font-sans">
                At Combined Fashions, we don't just manufacture garments; we forge lasting partnerships. We are 
                your <strong className="text-gold-dark font-semibold">Premium Fashion Partner</strong>—committed to 
                precision, driven by artistry, built for scale.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Office Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Head Office */}
          <div className="bg-charcoal p-8 rounded-sm">
            <Building className="w-8 h-8 text-gold mb-4" />
            <h4 className="font-serif text-cream text-lg mb-3">Head Office</h4>
            <p className="text-cream/70 text-sm font-sans leading-relaxed">
              House # 1, Bordon Bari, Mazar Road, Mirpur-1, Dhaka-1216, Bangladesh
            </p>
          </div>

          {/* Factory 1 */}
          <div className="bg-charcoal p-8 rounded-sm">
            <MapPin className="w-8 h-8 text-gold mb-4" />
            <h4 className="font-serif text-cream text-lg mb-3">Factory I</h4>
            <p className="text-cream/70 text-sm font-sans leading-relaxed">
              Mugrakanda, Vakurta, Hemayetpur, Savar, Dhaka-1339
            </p>
          </div>

          {/* Factory 2 */}
          <div className="bg-charcoal p-8 rounded-sm">
            <MapPin className="w-8 h-8 text-gold mb-4" />
            <h4 className="font-serif text-cream text-lg mb-3">Factory II</h4>
            <p className="text-cream/70 text-sm font-sans leading-relaxed">
              Road # 4, House # 82, South Raja Bari, Turag, Dhaka
            </p>
          </div>

          {/* Bank Details */}
          <div className="bg-charcoal p-8 rounded-sm">
            <Landmark className="w-8 h-8 text-gold mb-4" />
            <h4 className="font-serif text-cream text-lg mb-3">Banking Partners</h4>
            <div className="text-cream/70 text-sm font-sans space-y-2">
              <p><span className="text-gold">Mercantile Bank Ltd.</span><br/>Swift: MBLBBDDHO015</p>
              <p><span className="text-gold">Jamuna Bank Ltd.</span><br/>Swift: JAMUBDDHTFP</p>
            </div>
          </div>
        </motion.div>
      </div>
      <>
    <section id="about" className="section-cream section-padding" ref={ref}>
      <div className="container mx-auto">
        {/* ALL your existing About content */}
      </div>
    </section>

    {/* Leadership Section */}
    <Leadership />
  </>

</section>
    
    
  );
};


export default About;
