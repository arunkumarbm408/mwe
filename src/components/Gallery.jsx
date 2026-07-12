import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const galleryCategories = [
  { id: 'all', name: 'All Media' },
  { id: 'warehouse', name: 'Warehouse' },
  { id: 'packaging', name: 'Packaging' },
  { id: 'logistics', name: 'Logistics & Ports' },
  { id: 'products', name: 'Raw Commodities' }
];

const galleryItems = [
  {
    id: 1,
    category: 'warehouse',
    title: 'Silo Storage Facilities',
    desc: 'Modern climate-controlled grains silos preserving product freshness.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    category: 'packaging',
    title: 'Automated Spice Sorting',
    desc: 'Sortex state-of-the-art systems extracting impurity-free spice grains.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    category: 'logistics',
    title: 'Container Stuffing Port',
    desc: 'Stuffing bags inside 20ft ocean containers with phytosanitary seals.',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    category: 'products',
    title: 'Export Quality Grains',
    desc: 'Harvested premium rice and wheat crops ready for bulk wholesale packaging.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    category: 'packaging',
    title: 'Vacuum Packaging Lines',
    desc: 'Industrial vacuum-sealing safeguarding dry fruits and cashews from air.',
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    category: 'logistics',
    title: 'Vessel Loading Operations',
    desc: 'Loading international grain freighters departing Mumbai ports.',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80'
  }
];

const Gallery = () => {
  const [selectedCat, setSelectedCat] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [brokenImageIds, setBrokenImageIds] = useState([]);

  const handleImageError = (id) => {
    setBrokenImageIds((prev) => [...prev, id]);
  };

  const filteredItems = (selectedCat === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCat)
  ).filter(item => !brokenImageIds.includes(item.id));

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold font-sans tracking-widest text-secondary uppercase block mb-2">Media Gallery</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Facility Operations</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-655 font-sans text-sm md:text-base leading-relaxed">
            Take a look at our logistics hubs, modern vacuum packaging units, sorting lines, and shipping operations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold font-sans tracking-wider uppercase cursor-pointer border transition-all duration-300 ${
                selectedCat === cat.id
                  ? 'bg-primary text-secondary border-secondary shadow-md'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-primary/20 hover:text-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                onClick={() => setLightboxIndex(idx)}
                className="relative h-64 rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-primary/5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={() => handleImageError(item.id)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Dark Hover Mask overlay - Gold detailing */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white border-2 border-secondary/0 group-hover:border-secondary/40 rounded-2xl">
                  <div className="flex justify-end">
                    <div className="p-3 bg-secondary/15 rounded-full border border-secondary/35 text-secondary">
                      <FaEye size={16} />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-teal-accent">
                      {item.category}
                    </span>
                    <h4 className="text-lg font-serif font-bold mt-1">
                      {item.title}
                    </h4>
                    <p className="text-accent/70 font-sans text-xs mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative max-w-4xl w-full z-10 flex flex-col items-center"
              >
                {/* Top Controls Row */}
                <div className="w-full flex justify-between items-center text-white mb-4">
                  <div className="font-sans text-xs font-bold tracking-widest uppercase text-teal-accent">
                    {filteredItems[lightboxIndex].category} ({lightboxIndex + 1} / {filteredItems.length})
                  </div>
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-secondary hover:text-primary transition-colors cursor-pointer"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>

                {/* Main Media Carousel Frame */}
                <div className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                  <img
                    src={filteredItems[lightboxIndex].image}
                    alt={filteredItems[lightboxIndex].title}
                    className="max-w-full max-h-full object-contain"
                  />

                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-secondary hover:text-primary transition-all cursor-pointer"
                  >
                    <FaChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-secondary hover:text-primary transition-all cursor-pointer"
                  >
                    <FaChevronRight size={16} />
                  </button>
                </div>

                {/* Details Footer */}
                <div className="w-full text-center text-white mt-4 max-w-xl">
                  <h4 className="font-serif font-bold text-lg md:text-xl text-secondary">
                    {filteredItems[lightboxIndex].title}
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-accent/70 mt-1">
                    {filteredItems[lightboxIndex].desc}
                  </p>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Gallery;
