import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { openWhatsAppGeneral } from '../utils/whatsapp';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [bgError, setBgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background Parallax Composition */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Parallax Container Ship at Sunset Image */}
        {!bgError && (
          <div
            className="w-full h-full"
            style={{
              transform: `translateY(${scrollY * 0.35}px) scale(${1 + scrollY * 0.0005})`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80"
              alt="International Cargo Port stacked containers at golden hour"
              onError={() => setBgError(true)}
              className="w-full h-full object-cover object-center opacity-70"
            />
          </div>
        )}

        {/* Gradient dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-primary/45 to-primary/85 z-1"></div>

        {/* Luxurious Vignette & Blur overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(17,19,21,0.65)_80%)] backdrop-blur-[1px] z-2"></div>

        {/* Glowing Gold and Teal Light Flares (Patina + Bronze) */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-teal-accent/5 blur-[140px] pointer-events-none animate-pulse-slow z-2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[140px] pointer-events-none animate-pulse-slow delay-1000 z-2"></div>

        {/* Faint SVG World Map overlay directly in background layer */}
        <svg
          className="absolute inset-0 w-full h-full text-white/5 pointer-events-none z-2"
          viewBox="0 0 1000 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 80 L 120 70 L 250 80 L 270 140 L 240 220 L 150 200 L 100 250 L 70 200 Z"
            fill="currentColor"
            className="opacity-40"
          />
          <path
            d="M220 280 L 290 280 L 340 330 L 300 450 L 270 470 L 240 370 Z"
            fill="currentColor"
            className="opacity-40"
          />
          <path
            d="M430 80 L 600 50 L 800 60 L 920 120 L 900 200 L 800 220 L 700 260 L 610 230 L 530 200 L 460 170 Z"
            fill="currentColor"
            className="opacity-40"
          />
          <path
            d="M480 220 L 580 230 L 620 280 L 580 430 L 520 400 L 470 300 Z"
            fill="currentColor"
            className="opacity-40"
          />
          <path
            d="M780 370 L 880 350 L 900 420 L 820 440 Z"
            fill="currentColor"
            className="opacity-40"
          />
        </svg>
      </div>

      {/* Floating Trade Routes Overlay Lines */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1000 1000" fill="none">
          <path d="M-100 300 C200 400, 400 200, 1100 500" stroke="#B88A44" strokeWidth="1.5" strokeDasharray="10 15" />
          <path d="M-50 800 C400 600, 600 900, 1200 700" stroke="#3FA7A3" strokeWidth="1.5" strokeDasharray="8 12" />
        </svg>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/35 text-secondary text-xs md:text-sm font-sans tracking-widest uppercase mb-6 font-bold"
        >
          <span className="h-2 w-2 rounded-full bg-secondary animate-ping"></span>
          MAAWORLD EXIM • CULTIVATING GLOBAL HARVESTS
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-black tracking-tight text-white mb-6 leading-tight"
        >
          Connecting Indian Agriculture to <span className="gold-gradient-text">Global Markets</span>
        </motion.h1>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-accent/90 max-w-3xl mb-10 leading-relaxed font-sans font-light"
        >
          A premium international Import & Export corporation specializing in high-grade spices, aromatic grains, fresh produce, and organic agricultural commodities with certified global clearance.
        </motion.p>

        {/* Action Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <a
            href="#products"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-[#E2C08A] text-primary font-bold hover:scale-105 hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300 cursor-pointer text-base uppercase tracking-wider shadow-lg"
          >
            <span>Explore Products</span>
            <FaArrowRight size={14} />
          </a>
          
          <button
            onClick={openWhatsAppGeneral}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 hover:border-secondary hover:scale-105 transition-all duration-300 cursor-pointer text-base uppercase tracking-wider"
          >
            <FaWhatsapp size={18} className="text-teal-accent" />
            <span>Consult Exporter</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="text-[10px] uppercase font-sans tracking-widest text-accent/50">Scroll Down</span>
          <FaChevronDown className="text-secondary text-lg mt-1" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
