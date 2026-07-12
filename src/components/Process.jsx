import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaFileInvoiceDollar, FaCheckCircle, FaBoxOpen, FaShip, FaHandshake } from 'react-icons/fa';

const steps = [
  {
    num: '01',
    icon: <FaClipboardList />,
    title: 'Inquiry',
    desc: 'Submit your specification requirements, target MOQ, packaging preferences, and destination port.'
  },
  {
    num: '02',
    icon: <FaFileInvoiceDollar />,
    title: 'Quotation',
    desc: 'We draft a competitive quotation (FOB/CIF) including commodity lab specs and current freight schedules.'
  },
  {
    num: '03',
    icon: <FaCheckCircle />,
    title: 'Confirmation',
    desc: 'Settle contract parameters, sign the Proforma Invoice, and arrange secure financial instruments (LC/TT).'
  },
  {
    num: '04',
    icon: <FaBoxOpen />,
    title: 'Packaging',
    desc: 'Commodities are cleaned, sorted, custom-packaged, and inspected in food-safe facilities.'
  },
  {
    num: '05',
    icon: <FaShip />,
    title: 'Shipping',
    desc: 'We manage customs filings, certificate audits, container stuffings, and handoff to premium shipping lines.'
  },
  {
    num: '06',
    icon: <FaHandshake />,
    title: 'Delivery',
    desc: 'Cargo arrives at your destination port. All documentation is handed over for clean custom clearance.'
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold font-sans tracking-widest text-secondary uppercase block mb-2">Our Workflow</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">The Export Journey</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-655 font-sans text-sm md:text-base leading-relaxed">
            Our systematic trade process ensures that every agricultural shipment is fully compliant, securely packed, and delivered on schedule.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[68px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-primary/10 via-secondary to-primary/10 z-0"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Node Number & Icon Bubble */}
                <div className="relative mb-6">
                  {/* Step Num badge - Gold */}
                  <span className="absolute -top-3 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-secondary to-[#E2C08A] text-primary font-sans text-[10px] font-bold shadow-md">
                    {step.num}
                  </span>
                  
                  {/* Icon Circle - Charcoal background with gold borders, switches to gold/charcoal on hover */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-secondary border-2 border-secondary group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-[#E2C08A] group-hover:text-primary group-hover:border-primary transition-all duration-500 shadow-lg cursor-pointer">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                </div>

                {/* Step Metadata */}
                <h3 className="text-lg font-serif font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 font-sans text-xs leading-relaxed max-w-[200px] md:max-w-none">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
