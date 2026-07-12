import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import Logo from './Logo';
import { openWhatsAppGeneral } from '../utils/whatsapp';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg border-b border-secondary/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-8 xl:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo medallion */}
          <a href="#home" className="flex-shrink-0">
            <Logo className="h-16 md:h-18 w-auto" dark={isScrolled} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold tracking-wide transition-all duration-300 rounded-md uppercase font-sans hover:text-secondary whitespace-nowrap ${
                    isActive ? 'text-secondary font-bold' : isScrolled ? 'text-white/80' : 'text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-secondary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Premium Gold Gradient WhatsApp Action Button */}
          <div className="hidden xl:flex items-center">
            <button
              onClick={openWhatsAppGeneral}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-secondary to-[#E2C08A] text-primary hover:scale-105 hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 font-bold text-sm cursor-pointer"
            >
              <FaWhatsapp className="text-lg text-primary" />
              <span>WhatsApp Us</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none cursor-pointer text-white"
            >
              {isOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-primary border-t border-secondary/15 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 text-center flex flex-col gap-2">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-3 rounded-md text-base font-bold uppercase tracking-wider transition-colors ${
                      isActive ? 'bg-secondary text-primary' : 'text-white/80 hover:bg-primary-hover hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              
              <div className="pt-4 px-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openWhatsAppGeneral();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-secondary to-[#E2C08A] text-primary font-bold transition-all cursor-pointer shadow-md"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
