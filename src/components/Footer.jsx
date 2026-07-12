import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from './Logo';
import { openWhatsAppGeneral } from '../utils/whatsapp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-white border-t-2 border-secondary overflow-hidden">
      {/* Decorative Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(184,138,68,0.04)_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Brief & Logo */}
          <div className="space-y-4">
            <Logo dark={true} className="h-14 w-auto" />
            <p className="text-sm text-accent/70 font-sans leading-relaxed pt-2">
              Maaworld Exim is a premier international export trading company, linking the richness of Indian agriculture to global kitchens and industries.
            </p>
            <div className="flex space-x-3 pt-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-hover border border-secondary/35 text-secondary hover:bg-secondary hover:text-primary transition-all duration-300">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-hover border border-secondary/35 text-secondary hover:bg-secondary hover:text-primary transition-all duration-300">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-hover border border-secondary/35 text-secondary hover:bg-secondary hover:text-primary transition-all duration-300">
                <FaLinkedinIn size={14} />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-hover border border-secondary/35 text-secondary hover:bg-secondary hover:text-primary transition-all duration-300">
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-lg font-serif font-bold text-secondary mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-secondary">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-accent/70 font-sans">
              <li>
                <a href="#home" className="hover:text-secondary transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-secondary transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-secondary transition-colors duration-300">Why Choose Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-secondary transition-colors duration-300">Media Gallery</a>
              </li>
              <li>
                <a href="#certificates" className="hover:text-secondary transition-colors duration-300">Certificates</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition-colors duration-300">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Top Exporter Products */}
          <div>
            <h4 className="text-lg font-serif font-bold text-secondary mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-secondary">
              Our Products
            </h4>
            <ul className="space-y-3 text-sm text-accent/70 font-sans">
              <li>
                <a href="#products" className="hover:text-secondary transition-colors duration-300">Premium Grains & Rice</a>
              </li>
              <li>
                <a href="#products" className="hover:text-secondary transition-colors duration-300">Organic Spice Blends</a>
              </li>
              <li>
                <a href="#products" className="hover:text-secondary transition-colors duration-300">Fresh Fruits & Vegetables</a>
              </li>
              <li>
                <a href="#products" className="hover:text-secondary transition-colors duration-300">Tea & Coffee Beans</a>
              </li>
              <li>
                <a href="#products" className="hover:text-secondary transition-colors duration-300">Nutritious Oil Seeds</a>
              </li>
              <li>
                <a href="#products" className="hover:text-secondary transition-colors duration-300">De-oiled Animal Feed</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-serif font-bold text-secondary mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-secondary">
              Contact Details
            </h4>
            <ul className="space-y-4 text-sm text-accent/70 font-sans">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                <span>104, Trade Tower, Bandra East, Mumbai, Maharashtra 400051, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-secondary flex-shrink-0" />
                <a href="tel:+916360859627" className="hover:text-secondary transition-colors text-white font-semibold">+91 6360859627</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-secondary flex-shrink-0" />
                <a href="mailto:info@maaworldexim.com" className="hover:text-secondary transition-colors">info@maaworldexim.com</a>
              </li>
              <li className="pt-2">
                <button
                  onClick={openWhatsAppGeneral}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary to-[#E2C08A] text-primary font-bold hover:scale-105 transition-all duration-300 text-xs shadow-md shadow-secondary/15 cursor-pointer border border-secondary/20"
                >
                  <FaWhatsapp size={16} />
                  <span>Instant WhatsApp Query</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Rights */}
        <div className="pt-8 border-t border-accent/15 flex flex-col md:flex-row items-center justify-between text-xs text-accent/50 font-sans gap-4">
          <p>© {currentYear} Maaworld Exim. All Rights Reserved. Designed for Excellence.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-secondary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
