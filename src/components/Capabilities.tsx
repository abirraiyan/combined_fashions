import { motion, useInView } from "framer-motion";
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

const capabilities: any[] = [
  {
    id: 1,
    title: "Embroidery",
    subtitle: "Artisanal Precision",
    image: embroideryImage,
    description:
      "From delicate monograms to elaborate designs, our embroidery division combines traditional craftsmanship with state-of-the-art machinery.",
    details: [
      "Multi-head computerized embroidery machines",
      "Sequin & 3D puff embroidery capabilities",
      "Gold & silver metallic thread specialization",
      "Up to 15 colors per design",
      "Capacity: 500,000+ pieces monthly",
    ],
  },
  {
    id: 2,
    title: "Screen Printing",
    subtitle: "Vibrant Excellence",
    image: printingImage,
    description:
      "High-definition screen printing that brings designs to life with exceptional color accuracy and durability.",
    details: [
      "Automatic & manual printing lines",
      "Water-based & plastisol inks",
      "CMYK & spot color printing",
      "Discharge & foil printing options",
      "Capacity: 300,000+ pieces monthly",
    ],
  },
  {
    id: 3,
    title: "Elastic Manufacturing",
    subtitle: "Engineered Comfort",
    image: elasticImage,
    description:
      "Custom elastic solutions including woven, knitted, and jacquard elastics for global apparel brands.",
    details: [
      "Woven & knitted elastic production",
      "Custom width: 8mm to 80mm",
      "Jacquard patterns & branding",
      "Multiple color combinations",
      "Capacity: 1M+ meters monthly",
    ],
  },
  {
    id: 4,
    title: "Heat Transfer",
    subtitle: "Flawless Application",
    image: heatTransferImage,
    description:
      "Premium heat transfer labels and prints that maintain integrity through countless washes.",
    details: [
      "Vinyl & sublimation transfers",
      "Photo-realistic reproduction",
      "Care labels & branding solutions",
      "Reflective & glow-in-dark options",
      "Capacity: 500,000+ pieces monthly",
    ],
  },
  {
    id: 5,
    title: "Fusing",
    subtitle: "Flawless Structure",
    image: fusingImage,
    description:
      "Precision fusing for durable bonding and superior garment structure.",
    details: [
      "Precision heat & pressure controlled fusing",
      "Suitable for shirts, jackets & tailored garments",
      "Wrinkle-free and shape-retaining finish",
      "Strict quality control for consistent results",
      "Capacity: 500,000+ pieces monthly",
    ],
  },
  {
    id: 6,
    title: "Drawcord",
    subtitle: "Secure & Adjustable Fit",
    image: drawcordImage,
    description:
      "High-quality drawcord insertion solutions that provide comfort and durability.",
    details: [
      "Cotton, polyester & elastic drawcord",
      "Waistband, hood & hem insertion",
      "Secure end locking",
      "Consistent tension alignment",
      "Capacity: 500,000+ pieces monthly",
    ],
  },
  {
    id: 7,
    title: "Labeling Unit",
    subtitle: "Clear Brand Identity",
    image: labelUnitImage,
    description:
      "Dedicated label unit ensuring accurate placement of brand, size, and care labels.",
    details: [
      "Brand, size & care label attachment",
      "Woven, printed & satin labels",
      "Neck & waistband placement",
      "Secure stitching with QC",
      "Capacity: 500,000+ pieces monthly",
    ],
  },
  {
    id: 8,
    title: "Accessories",
    subtitle: "Complete Garment Detailing",
    image: accessoriesImage,
    description:
      "Comprehensive garment accessories & trims solutions covering labeling, packaging, fastening systems and structural components.",
    subCategories: [
      {
        title: "Labels",
        icon: "🏷️",
        items: [
          "Woven Label – Damask / Satin / Taffeta",
          "Printed Label – Care / Size",
          "Heat Transfer Label",
          "High-density weaving",
        ],
      },
      {
        title: "Hang Tag & Packaging",
        icon: "📦",
        items: [
          "Art Card / Kraft Paper",
          "Foil Print / Emboss / UV",
          "Barcode & QR Code",
          "Poly Bag – Printed / Biodegradable",
        ],
      },
      {
        title: "Elastic & Drawstring",
        icon: "🧵",
        items: [
          "Jacquard Elastic",
          "Waistband Elastic",
          "Hoodie Drawcord",
          "Custom Logo Print",
        ],
      },
      {
        title: "Buttons & Zippers",
        icon: "🔘",
        items: [
          "Metal / Plastic Buttons",
          "Snap & Jeans Buttons",
          "Nylon / Metal Zipper",
          "Custom Puller Branding",
        ],
      },
      {
        title: "Tapes & Fusing",
        icon: "📏",
        items: [
          "Twill Tape / Neck Tape",
          "Cotton / Polyester",
          "Interlining / Fusing",
          "100% Recycle Polyester",
        ],
      },
    ],
  },
];

const Capabilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCapability, setSelectedCapability] = useState<number | null>(null);

  return (
    <section id="capabilities" className="section-dark section-padding" ref={ref}>
      <div className="container mx-auto">

        {/* Grid */}
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

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-gold text-xs uppercase tracking-widest mb-2">
                    {cap.subtitle}
                  </span>
                  <h3 className="text-cream text-2xl font-serif mb-3">
                    {cap.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-4 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* MODAL */}
      {selectedCapability && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90"
          onClick={() => setSelectedCapability(null)}
        >
          <div
            className="bg-charcoal max-w-3xl w-full rounded-lg p-8 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const cap = capabilities.find((c) => c.id === selectedCapability);
              if (!cap) return null;

              return (
                <>
                  <h3 className="text-cream text-3xl font-serif mb-6">
                    {cap.title}
                  </h3>

                  {cap.subCategories ? (
                    <div className="space-y-6">
                      {cap.subCategories.map((category: any, idx: number) => (
                        <div
                          key={idx}
                          className="border border-charcoal-light/40 rounded-lg p-5 bg-charcoal-light/20"
                        >
                          <h4 className="flex items-center gap-3 text-gold font-serif text-lg mb-4">
                            <span className="text-xl">{category.icon}</span>
                            {category.title}
                          </h4>

                          <ul className="grid sm:grid-cols-2 gap-3">
                            {category.items.map((item: string, i: number) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-cream/70 text-sm"
                              >
                                <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {cap.details.map((detail: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-cream/70 text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
};

export default Capabilities;
