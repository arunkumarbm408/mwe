import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is the Minimum Order Quantity (MOQ) for export shipments?',
    answer: 'MOQ depends on the commodity. For grains (rice, wheat) and animal feed, the standard MOQ is 1 FCL (Full Container Load, approx. 19-24 Metric Tons). For premium spices, tea, and coffee, we accommodate smaller LCL cargo loads starting from 1 to 5 Metric Tons depending on the grade.'
  },
  {
    question: 'How do you guarantee quality standards and crop purity?',
    answer: 'We coordinate strict quality checks. All goods are Sortex-cleaned and graded. Before container stuffing, we issue testing reports from independent certified lab testing bureaus (e.g., SGS, Geo-Chem) checking moisture levels, pesticide residues, and crop purity specifications as per destination guidelines.'
  },
  {
    question: 'What trade incoterms and payment parameters do you support?',
    answer: 'We support standard global Incoterms including FOB (Free On Board), CFR (Cost and Freight), and CIF (Cost, Insurance & Freight). Our standard payment terms are Confirmed Irrevocable Letter of Credit (L/C at Sight) issued by tier-1 international banks, or Telegraphic Transfer (T/T) with 30% advance deposit and 70% against scan of shipping documents.'
  },
  {
    question: 'Can you coordinate private label branding and customized packaging bags?',
    answer: 'Yes! We offer complete custom packaging solutions. We print buyer designs and branding on BOPP laminated bags, multi-wall craft paper pouches, vacuum packs, or traditional gunny sacks in sizes ranging from 500g, 1kg, 5kg, up to 50kg wholesale bags.'
  },
  {
    question: 'How do you ship temperature-sensitive produce like fresh fruits?',
    answer: 'Perishables are shipped via cold chain. We utilize temperature-monitored refrigerated container ships (Reefers) and air freight. Fruits undergo mandatory hot water or vapor-heat treatments where required, maintaining strict humidity levels to preserve shelf life and texture.'
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-150 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left font-serif font-bold text-primary text-base md:text-lg focus:outline-none cursor-pointer hover:bg-bg-light transition-colors"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-secondary flex-shrink-0 ml-4"
        >
          <FaChevronDown />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-6 pt-0 font-sans text-xs md:text-sm text-gray-500 leading-relaxed border-t border-gray-100 bg-[#FAF9F6]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 bg-bg-light relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold font-sans tracking-widest text-secondary uppercase block mb-2">Help Desk</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Frequently Asked Questions</h2>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
