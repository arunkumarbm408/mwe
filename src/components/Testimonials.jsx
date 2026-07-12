import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Johnathan Vance',
    role: 'Procurement Director',
    company: 'Vance Spices & Herbs Ltd.',
    location: 'Chicago, USA',
    rating: 5,
    quote: 'Maaworld Exim has consistently delivered top-tier cumin and turmeric fingers. Their custom nitrogen vacuum packing preserves natural oils, and phytosanitary certificates are always cleared without delays.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 2,
    name: 'Farhan Al-Mansoori',
    role: 'Operations Head',
    company: 'Al-Khaleej Produce Trading',
    location: 'Dubai, UAE',
    rating: 5,
    quote: 'We import Nashik red onions and fresh grapes from Maaworld Exim. Sourced direct from farms, they arrive at Jebel Ali port in temperature-controlled reefer containers in pristine quality.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'Global Sourcing Broker',
    company: 'Anglo-Indian Foods Co.',
    location: 'London, UK',
    rating: 5,
    quote: 'Their golden basmati rice quality is exceptional, featuring long grain specifications and zero foreign matter. Direct query channels via WhatsApp speed up order negotiations significantly.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 4,
    name: 'Tan Wei Kiat',
    role: 'Supply Chain Lead',
    company: 'Apex Import-Export Ltd.',
    location: 'Singapore',
    rating: 5,
    quote: 'Impeccable execution in agricultural trade. From SGS inspection coordination to custom packaging and container sealing, the Maaworld team behaves with absolute transparency and speed.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    setAvatarError(false);
  }, [activeIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-bg-dark-section text-white relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none -ml-36 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold font-sans tracking-widest text-secondary uppercase block mb-2">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Voice of International Buyers</h2>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </div>

        {/* Testimonial slider view */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-primary/45 rounded-3xl p-8 md:p-12 border border-white/5 relative shadow-lg"
            >
              {/* Quote bubble decor */}
              <FaQuoteLeft className="text-secondary/10 text-7xl absolute top-6 left-6" />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                {/* Avatar Frame */}
                {!avatarError && (
                  <div className="flex-shrink-0 relative">
                    <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-secondary shadow-md">
                      <img
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].name}
                        onError={() => setAvatarError(true)}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="absolute -bottom-2 right-2 bg-gradient-to-r from-secondary to-[#E2C08A] text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Buyer
                    </span>
                  </div>
                )}

                {/* Testimonial Info */}
                <div className="flex-grow text-center md:text-left">
                  {/* Stars Rating */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-secondary text-base" />
                    ))}
                  </div>
                  
                  {/* Quote Paragraph */}
                  <p className="text-gray-300 font-sans italic text-sm md:text-base leading-relaxed mb-6">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  {/* Buyer details */}
                  <div>
                    <h4 className="font-serif font-bold text-white text-lg">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="font-sans text-xs text-gray-400 font-semibold">
                      {testimonials[activeIndex].role} • <span className="text-secondary">{testimonials[activeIndex].company}</span>
                    </p>
                    <p className="font-sans text-[10px] text-teal-accent uppercase tracking-widest mt-1">
                      📍 {testimonials[activeIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Controls */}
          <div className="flex justify-center md:justify-between items-center gap-6 mt-8 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 md:right-0 md:px-0">
            <button
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white border border-white/10 shadow-md hover:bg-secondary hover:text-primary transition-all cursor-pointer md:-translate-x-1/2"
              title="Previous Testimonial"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white border border-white/10 shadow-md hover:bg-secondary hover:text-primary transition-all cursor-pointer md:translate-x-1/2"
              title="Next Testimonial"
            >
              <FaChevronRight size={14} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? 'w-8 bg-secondary' : 'w-2.5 bg-gray-700'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
