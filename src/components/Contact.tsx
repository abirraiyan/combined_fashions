import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, ArrowRight, CheckCircle } from "lucide-react";

const projectTypes = [
  "Embroidery Services",
  "Screen Printing",
  "Elastic Manufacturing",
  "Heat Transfer",
  "Full Package Production",
  "Other"
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedType, setSelectedType] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-cream section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="subheading text-gold-dark mb-4 block">Start Your Project</span>
            <h2 className="heading-section text-charcoal mb-6">
              Let's Create Together
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-charcoal-light font-sans text-lg leading-relaxed mb-10">
              Whether you're launching a new collection or scaling production, our team 
              is ready to bring your vision to life. Share your requirements and we'll 
              craft a tailored solution.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-charcoal rounded-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-charcoal font-serif text-lg">Call Us</h4>
                  <a href="tel:+8801927920980" className="text-charcoal-light font-sans hover:text-gold transition-colors">
                    +880 1927 920980
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-charcoal rounded-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-charcoal font-serif text-lg">Email Us</h4>
                  <a href="mailto:ismail@combinedfashions.com" className="text-charcoal-light font-sans hover:text-gold transition-colors block">
                    ismail@combinedfashions.com
                  </a>
                  <a href="mailto:combinedfashions@gmail.com" className="text-charcoal-light font-sans hover:text-gold transition-colors block">
                    combinedfashions@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-charcoal rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-charcoal font-serif text-lg">Visit Us</h4>
                  <p className="text-charcoal-light font-sans">
                    House # 19/7 & House # 1, Bordon Bari,<br />
                    Mazar Road, Mirpur-1, Dhaka-1216, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-charcoal p-8 md:p-12 rounded-sm shadow-elevated">
              <h3 className="text-cream text-2xl font-serif mb-2">Start a Project</h3>
              <p className="text-cream/60 font-sans text-sm mb-8">Fill in your details and we'll get back to you within 24 hours.</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16"
                >
                  <CheckCircle className="w-16 h-16 text-gold mb-4" />
                  <h4 className="text-cream text-xl font-serif mb-2">Message Sent!</h4>
                  <p className="text-cream/60 font-sans text-center">
                    Thank you for reaching out. Our team will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="input-luxury text-cream"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="input-luxury text-cream"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="input-luxury text-cream"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="input-luxury text-cream"
                    />
                  </div>

                  {/* Project Type Selection */}
                  <div>
                    <p className="text-cream/60 font-sans text-sm mb-3">Project Type</p>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`px-4 py-2 text-sm font-sans rounded-sm transition-all duration-300 ${
                            selectedType === type
                              ? "bg-gold text-charcoal-dark"
                              : "bg-charcoal-light text-cream/70 hover:text-cream"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <textarea
                      placeholder="Tell us about your project requirements..."
                      rows={4}
                      className="input-luxury text-cream resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-hero-primary w-full flex items-center justify-center gap-3"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
