import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

const Loader = ({ finishLoading }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 400);
    const finishTimer = setTimeout(() => {
      if (finishLoading) finishLoading();
    }, 1800);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(finishTimer);
    };
  }, [finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div className="relative flex flex-col items-center">
        {/* Actual Bronze/Patina 3D Logo Image in Loader */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: [0.6, 1.05, 1], opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-6 flex items-center justify-center rounded-2xl bg-black border-2 border-secondary/30 p-2 shadow-2xl shadow-black"
        >
          <img
            src={logoImg}
            alt="Maaworld Exim Logo"
            className="h-24 w-auto object-contain rounded-lg"
          />
        </motion.div>

        {/* Loading Spinner Ring */}
        <motion.div
          className="absolute -inset-4 rounded-3xl border-2 border-transparent border-t-secondary border-b-secondary"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
          style={{ width: 'calc(100% + 32px)', height: 'calc(100% + 32px)' }}
        />

        <AnimatePresence>
          {showText && (
            <div className="text-center mt-6">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-serif font-black tracking-widest uppercase gold-gradient-text"
              >
                MAAWORLD <span className="text-white">EXIM</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xs md:text-sm tracking-widest uppercase font-sans font-light mt-1 text-teal-accent"
              >
                Cultivating Global Harvests
              </motion.p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Loader;
