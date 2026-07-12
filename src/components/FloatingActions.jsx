import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { openWhatsAppGeneral } from '../utils/whatsapp';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            key="back-to-top"
            onClick={scrollToTop}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary shadow-xl hover:bg-secondary-hover cursor-pointer border border-primary/10 transition-all duration-300"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            title="Scroll to Top"
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={openWhatsAppGeneral}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl cursor-pointer transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        title="Chat on WhatsApp"
      >
        {/* Pulsing Outer Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75"></span>
        <FaWhatsapp className="relative z-10 text-3xl" />
      </motion.button>
    </div>
  );
};

export default FloatingActions;
