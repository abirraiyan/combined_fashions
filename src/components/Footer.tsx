import { motion } from "framer-motion";
import { ArrowUp, Facebook, Linkedin, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.png";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal-dark">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12  rounded-sm flex items-center justify-center">
                <img
                  src={logo}
                  alt="Combined Fashions Logo"
                  className="w-24 h-24 object-contain"
                />

              </div>
              <div>
                <h3 className="font-serif text-cream text-lg leading-tight">Combined Fashions</h3>
                <p className="text-gold text-xs tracking-[0.2em] uppercase">Premium Fashion Partner</p>
              </div>
            </div>
            <p className="text-cream/60 font-sans text-sm leading-relaxed max-w-md mb-6">
              Two decades of excellence in textile craftsmanship. Precision. Artistry. Scale.
              Your trusted partner for premium garment manufacturing solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-charcoal-light rounded-sm flex items-center justify-center text-cream/60 hover:text-gold hover:bg-charcoal transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-charcoal-light rounded-sm flex items-center justify-center text-cream/60 hover:text-gold hover:bg-charcoal transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-charcoal-light rounded-sm flex items-center justify-center text-cream/60 hover:text-gold hover:bg-charcoal transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:combinedfashions@gmail.com" className="w-10 h-10 bg-charcoal-light rounded-sm flex items-center justify-center text-cream/60 hover:text-gold hover:bg-charcoal transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us","Leadershi", "Capabilities", "Milestones", "Awards", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-cream/60 font-sans text-sm hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-cream font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {["Embroidery", "Screen Printing", "Elastic Manufacturing", "Heat Transfer", "Full Package Production"].map((service) => (
                <li key={service}>
                  <a
                    href="#capabilities"
                    className="text-cream/60 font-sans text-sm hover:text-gold transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-light">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/40 font-sans text-xs">
              © Combined Fashions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-gold/60 font-sans text-xs">DUNS: 85-036-7016</span>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center text-charcoal-dark hover:bg-gold-light transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
