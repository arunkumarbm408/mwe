import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaFileContract, FaShippingFast, FaGlobe, FaHandHoldingUsd, FaBoxOpen, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaAward />,
    title: 'Premium Quality',
    description: 'We source only A-Grade export quality grains, spices, and fresh produce directly from qualified farming belts.'
  },
  {
    icon: <FaFileContract />,
    title: 'International Standards',
    description: '100% compliant with globally recognized certifications, custom clearances, and phytosanitary requirements.'
  },
  {
    icon: <FaShippingFast />,
    title: 'Fast Delivery',
    description: 'Optimized transit lines and pre-arranged shipping slots ensure timely cargo loading and minimal delays.'
  },
  {
    icon: <FaGlobe />,
    title: 'Global Logistics',
    description: 'Complete multi-modal container transport from farms to global ports, including temperature cold chains.'
  },
  {
    icon: <FaHandHoldingUsd />,
    title: 'Competitive Pricing',
    description: 'Our strong local network eliminates middle-men, giving you direct wholesale rates and sustainable contracts.'
  },
  {
    icon: <FaBoxOpen />,
    title: 'Reliable Packaging',
    description: 'Custom food-safe packaging (Vacuum packs, PP bags, Jute sacks) preserving nutrition, aroma, and shelf-life.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Trusted Exporter',
    description: 'A credit-worthy and contract-compliant entity providing transparent documentation and trade security.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none -ml-40 -mb-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold font-sans tracking-widest text-secondary uppercase block mb-2">Our Strengths</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Why Exporters Choose Us</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-650 font-sans text-sm md:text-base leading-relaxed">
            We hold a strong reputation as a premium trading partner by prioritizing transparency, strict quality benchmarks, and secure shipment operations.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feat, index) => {
            const isLast = index === features.length - 1;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`bg-white p-8 rounded-2xl border border-gray-100 hover:border-secondary/20 hover:shadow-xl transition-all duration-300 ${
                  isLast ? 'lg:col-span-3 xl:col-span-1 border-secondary/20' : ''
                }`}
              >
                {/* Feature Icon Shield - Accent premium teal */}
                <div className="inline-flex items-center justify-center p-4 rounded-xl bg-primary text-teal-accent text-2xl mb-6 shadow-md shadow-primary/5">
                  {feat.icon}
                </div>
                
                {/* Feature Info */}
                <h3 className="text-lg font-serif font-bold text-primary mb-3">
                  {feat.title}
                </h3>
                
                <p className="text-gray-600 font-sans text-xs md:text-sm leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
