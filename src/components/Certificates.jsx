import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaFileSignature, FaStamp, FaRegFileAlt, FaGlobe, FaBalanceScale } from 'react-icons/fa';

const certificates = [
  {
    icon: <FaCertificate />,
    title: 'APEDA Member',
    authority: 'Agricultural & Processed Food Products Export Development Authority',
    desc: 'Authorized exporter of agricultural and processed food products, ensuring quality compliance with target country specifications.'
  },
  {
    icon: <FaStamp />,
    title: 'FSSAI License',
    authority: 'Food Safety and Standards Authority of India',
    desc: 'Certified food-safety management system ensuring all consumable exports are processed, packed, and stored under strict hygiene standards.'
  },
  {
    icon: <FaFileSignature />,
    title: 'IEC (Import Export Code)',
    authority: 'Directorate General of Foreign Trade (DGFT)',
    desc: 'Official code issued by the Ministry of Commerce & Industry, Government of India, certifying valid global trading operations.'
  },
  {
    icon: <FaRegFileAlt />,
    title: 'GST Registration',
    authority: 'Department of Revenue, Govt. of India',
    desc: 'Fully registered and tax-compliant business operation facilitating smooth financial billing and customs transactions.'
  },
  {
    icon: <FaGlobe />,
    title: 'ISO 9001:2015',
    authority: 'International Organization for Standardization',
    desc: 'Certified Quality Management System (QMS) ensuring systematic sourcing, quality inspection, and buyer servicing workflows.'
  },
  {
    icon: <FaBalanceScale />,
    title: 'Export License',
    authority: 'Ministry of Commerce & Customs India',
    desc: 'Accredited global trade license allowing clearance of agricultural commodities and bulk ingredients through domestic shipping ports.'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 bg-bg-dark-section text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold font-sans tracking-widest text-secondary uppercase block mb-2">Accreditations</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Our Certifications</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
            Maaworld Exim is fully accredited with major food safety, tax, and trading authorities. We guarantee smooth documentation handovers for every shipment.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-primary/45 p-6 md:p-8 rounded-2xl border border-white/5 hover:border-secondary/25 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stamp Icon - Premium Teal Accent */}
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-teal-accent/15 text-teal-accent text-xl mb-5 border border-teal-accent/20">
                  {cert.icon}
                </div>
                
                {/* Meta details */}
                <h3 className="text-lg font-serif font-bold text-white mb-1">
                  {cert.title}
                </h3>
                <h5 className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary mb-4 leading-normal">
                  {cert.authority}
                </h5>
                <p className="text-gray-400 font-sans text-xs leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="text-right text-[10px] font-sans font-black tracking-widest text-secondary/35 uppercase pt-4 border-t border-white/5 mt-6">
                Verified Exporter
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
