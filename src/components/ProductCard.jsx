import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { openWhatsApp } from '../utils/whatsapp';

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [modalImgError, setModalImgError] = useState(false);

  const handleInquiry = () => {
    openWhatsApp(product.name);
  };

  return (
    <>
      {/* Product Grid Card - Rendered on dark charcoal bg */}
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -8 }}
        className="bg-primary/45 rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-secondary/20 transition-all duration-300 flex flex-col h-full group"
      >
        {/* Product Image Frame (Hides gracefully if broken) */}
        {!imgError ? (
          <div className="relative h-56 overflow-hidden bg-primary/20">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Category/Quality Badge */}
            <span className="absolute top-4 left-4 bg-gradient-to-r from-secondary to-[#E2C08A] text-primary text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md">
              {product.badge}
            </span>
          </div>
        ) : (
          /* Small top spacer if image is removed */
          <div className="h-4 bg-transparent w-full"></div>
        )}

        {/* Product Meta details */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Quality Badge renders inside body as a tag if image was broken & removed */}
          {imgError && (
            <span className="inline-block self-start mb-3 bg-gradient-to-r from-secondary to-[#E2C08A] text-primary text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
          
          <h3 className="text-xl font-serif font-bold text-white mb-2 line-clamp-1 group-hover:text-secondary transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-400 font-sans text-sm line-clamp-3 mb-6 leading-relaxed flex-grow">
            {product.description}
          </p>

          {/* Action Triggers */}
          <div className="grid grid-cols-2 gap-3 mt-auto">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full border border-white/10 text-white font-semibold hover:bg-white/5 text-xs tracking-wider uppercase font-sans cursor-pointer transition-all duration-300"
            >
              <FaInfoCircle size={13} className="text-teal-accent" />
              <span>Details</span>
            </button>
            <button
              onClick={handleInquiry}
              className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-gradient-to-r from-secondary to-[#E2C08A] text-primary font-bold hover:scale-105 text-xs tracking-wider uppercase font-sans cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <FaWhatsapp size={14} className="text-primary" />
              <span>Inquiry</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Product Detail Modal Backdrop */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Dialog Body (Luxurious Dark Charcoal Theme) */}
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-2xl bg-bg-dark-section text-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-secondary/20 flex flex-col md:flex-row max-h-[90vh] md:max-h-none"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 z-20 flex items-center justify-center h-9 w-9 rounded-full bg-black/50 text-white hover:bg-secondary hover:text-primary transition-colors cursor-pointer border border-white/5"
              >
                <FaTimes size={16} />
              </button>

              {/* Modal Image Half (Hides gracefully if broken) */}
              {!modalImgError && (
                <div className="md:w-5/12 h-48 md:h-auto relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={() => setModalImgError(true)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary via-primary/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-gradient-to-r from-secondary to-[#E2C08A] text-primary text-[9px] font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase">
                      {product.badge}
                    </span>
                  </div>
                </div>
              )}

              {/* Modal Text Specs Half - Expands to full width if image is removed */}
              <div className={`${modalImgError ? 'w-full' : 'md:w-7/12'} p-6 md:p-8 overflow-y-auto flex flex-col justify-between`}>
                <div>
                  {modalImgError && (
                    <span className="inline-block mb-3 bg-gradient-to-r from-secondary to-[#E2C08A] text-primary text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-teal-accent block mb-1">
                    Maaworld Exim Catalog
                  </span>
                  <h4 className="text-2xl font-serif font-bold text-white mb-3">
                    {product.name}
                  </h4>
                  <p className="text-gray-400 font-sans text-xs mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <h5 className="text-xs font-sans font-bold uppercase tracking-widest text-secondary border-b border-white/10 pb-2 mb-3">
                    Export Specifications
                  </h5>

                  {/* Specifications Matrix */}
                  <div className="space-y-2 mb-6">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between items-center text-xs font-sans border-b border-white/5 py-1">
                        <span className="text-gray-500 capitalize font-medium">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-white font-bold text-right pl-4">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instant Checkout Link */}
                <button
                  onClick={handleInquiry}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-secondary to-[#E2C08A] text-primary hover:scale-105 transition-all duration-300 font-bold text-sm uppercase tracking-wider cursor-pointer border border-secondary/20 shadow-lg shadow-secondary/10"
                >
                  <FaWhatsapp size={16} />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductCard;
