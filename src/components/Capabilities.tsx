import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import embroideryImage from "@/assets/embroidery-detail.jpg";
import printingImage from "@/assets/printing-service.jpg";
import elasticImage from "@/assets/elastic-service.jpg";
import heatTransferImage from "@/assets/heat-transfer.jpg";
import fusingImage from "@/assets/fusing.png";
import drawcordImage from "@/assets/drawcord.png";
import accessoriesImage from "@/assets/accessories.png";
import labelUnitImage from "@/assets/labing.png";

const capabilities = [
  {
    id: 1,
    title: "Embroidery",
    subtitle: "Artisanal Precision",
    image: embroideryImage,
    description: "From delicate monograms to elaborate designs, our embroidery division combines traditional craftsmanship with state-of-the-art machinery.",
    details: [
      "Multi-head computerized embroidery machines",
      "Sequin & 3D puff embroidery capabilities",
      "Gold & silver metallic thread specialization",
      "Up to 15 colors per design",
      "Capacity: 500,000+ pieces monthly"
    ]
  },
  {
    id: 2,
    title: "Screen Printing",
    subtitle: "Vibrant Excellence",
    image: printingImage,
    description: "High-definition screen printing that brings designs to life with exceptional color accuracy and durability.",
    details: [
      "Automatic & manual printing lines",
      "Water-based & plastisol inks",
      "CMYK & spot color printing",
      "Discharge & foil printing options",
      "Capacity: 300,000+ pieces monthly"
    ]
  },
  {
    id: 3,
    title: "Elastic Manufacturing",
    subtitle: "Engineered Comfort",
    image: elasticImage,
    description: "Custom elastic solutions including woven, knitted, and jacquard elastics for global apparel brands.",
    details: [
      "Woven & knitted elastic production",
      "Custom width: 8mm to 80mm",
      "Jacquard patterns & branding",
      "Multiple color combinations",
      "Capacity: 1M+ meters monthly"
    ]
  },
  {
    id: 4,
    title: "Heat Transfer",
    subtitle: "Flawless Application",
    image: heatTransferImage,
    description: "Premium heat transfer labels and prints that maintain integrity through countless washes.",
    details: [
      "Vinyl & sublimation transfers",
      "Photo-realistic reproduction",
      "Care labels & branding solutions",
      "Reflective & glow-in-dark options",
      "Capacity: 500,000+ pieces monthly"
    ]
  },
  {
    id: 5,
    title: "Fusing",
    subtitle: "Flawless Structure",
    image: fusingImage,
    description: "Precision fusing for durable bonding and superior garment structure.",
    details: [
      "Precision heat & pressure controlled fusing",
      "Suitable for shirts, jackets & tailored garments",
      "Wrinkle-free and shape-retaining finish",
      "Strict quality control for consistent results",
      "Capacity: 500,000+ pieces monthly"
    ]
  },
  {
  id: 6,
  title: "Drawcord",
  subtitle: "Secure & Adjustable Fit",
  image: drawcordImage,
  description: "High-quality drawcord insertion solutions that provide comfort, durability, and precise adjustability in garments.",
  details: [
    "Cotton, polyester & elastic drawcord application",
    "Waistband, hood & hem drawcord insertion",
    "Smooth finishing with secure end locking",
    "Consistent tension and alignment",
    "Capacity: 500,000+ pieces monthly"
  ]
},
{
  id: 7,
  title: "Labeling Unit",
  subtitle: "Clear Brand Identity",
  image: labelUnitImage,
  description: "Dedicated label unit ensuring accurate placement of brand, size, and care labels for compliance and professional garment finishing.",
  details: [
    "Brand, size & care label attachment",
    "Woven, printed & satin labels handling",
    "Neck, side seam & waistband placement",
    "Secure stitching with quality inspection",
    "Capacity: 500,000+ pieces monthly"
  ]
},
{
  id: 8,
  title: "Accessories",
  subtitle: "Complete Garment Detailing",
  image: accessoriesImage,
  description: "Comprehensive garment accessories solutions that enhance functionality, durability, and overall product appeal.",
  details: [
    "Buttons, snaps, zippers & rivets application",
    "Labels, tags & trims attachment",
    "Metal & plastic accessories handling",
    "Secure fixing with quality inspection",
    "Capacity: 500,000+ pieces monthly"
  ]
}




  
];

const Capabilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCapability, setSelectedCapability] = useState<number | null>(null);

  return (
    <section id="capabilities" className="section-dark section-padding" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="subheading mb-4 block">What We Do</span>
          <h2 className="heading-section text-cream mb-6">
            Our Capabilities
          </h2>
          <p className="text-cream/60 font-sans max-w-2xl mx-auto">
            A comprehensive suite of textile services, each delivered with 
            uncompromising quality and precision.
          </p>
          <div className="gold-line mx-auto mt-8" />
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-luxury group cursor-pointer"
              onClick={() => setSelectedCapability(cap.id)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-gold text-xs font-sans uppercase tracking-widest mb-2">
                    {cap.subtitle}
                  </span>
                  <h3 className="text-cream text-2xl font-serif mb-3">{cap.title}</h3>
                  <p className="text-cream/70 text-sm font-sans mb-4 line-clamp-2">
                    {cap.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold text-sm font-sans font-medium group-hover:gap-4 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCapability && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-charcoal-dark/95 backdrop-blur-lg"
          onClick={() => setSelectedCapability(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-charcoal max-w-2xl w-full rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const cap = capabilities.find(c => c.id === selectedCapability);
              if (!cap) return null;
              return (
                <>
                  <div className="relative h-64">
                    <img src={cap.image} alt={cap.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                    <button
                      onClick={() => setSelectedCapability(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-charcoal/80 rounded-full flex items-center justify-center text-cream hover:text-gold transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-8">
                    <span className="text-gold text-xs font-sans uppercase tracking-widest mb-2 block">
                      {cap.subtitle}
                    </span>
                    <h3 className="text-cream text-3xl font-serif mb-4">{cap.title}</h3>
                    <p className="text-cream/70 font-sans mb-6">{cap.description}</p>
                    <div className="gold-line mb-6" />
                    <h4 className="text-cream text-sm font-sans uppercase tracking-wider mb-4">Technical Specifications</h4>
                    <ul className="space-y-3">
                      {cap.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-cream/70 font-sans text-sm">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Capabilities;
