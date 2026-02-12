import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import ThemeSwitcher from "./ThemeSwitcher";



const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Leadership", href: "#leadership" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Milestones", href: "#milestones" },
  { name: "Awards", href: "#awards" },
  { name: "Contact", href: "#contact" },
 { name: "Gallery", href: "/gallery" }


];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-charcoal-dark text-cream py-2 px-6">
        <div className="container mx-auto flex justify-between items-center text-xs font-sans tracking-wide">
          <div className="flex items-center gap-6">
            <a href="tel:+8801927920980" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-3 h-3" />
              +880 1927 920980
            </a>
            <a href="mailto:ismail@combinedfashions.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-3 h-3" />
              combinedfashions@gmail.com
            </a>
          </div>
          <div className="text-gold-muted">
            DUNS: 85-036-7016
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-charcoal/95 backdrop-blur-md py-4 shadow-elevated"
            : "bg-transparent py-6"
        }`}
        style={{ top: isScrolled ? 0 : "auto" }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Combined Fashions Logo"
                className="w-14 h-14 object-contain"
              />

              <div className="hidden sm:block">
                <h1 className="font-serif text-cream text-lg leading-tight">Combined</h1>
                <p className="text-green-600 text-xs tracking-[0.2em] uppercase">Fashions</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-cream/80 text-sm font-sans font-medium tracking-wide hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden lg:block btn-hero-primary text-xs px-6 py-3"
            >
              Start a Project
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-cream hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-charcoal-dark/98 backdrop-blur-lg">
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-cream text-2xl font-serif hover:text-gold transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-hero-primary mt-6"
                >
                  Start a Project
                </motion.a>
                
                {/* Mobile Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-8 text-center text-cream/60 text-sm"
                >
                  <p className="text-gold mb-2">DUNS: 85-036-7016</p>
                  <p>+880 1927 920980</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
