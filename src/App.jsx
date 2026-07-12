import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Imports of Custom Components
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Certificates from './components/Certificates';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor page scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        const scrolled = (window.scrollY / totalScrollHeight) * 100;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Premium Loading Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Loader finishLoading={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-bg-light text-text-dark flex flex-col scroll-smooth">
          {/* Scroll Progress Bar */}
          <div
            className="fixed top-0 left-0 h-1 bg-secondary z-50 transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />

          {/* Sticky Header Nav */}
          <Navbar />

          {/* Main Layout Sections */}
          <main className="flex-grow">
            {/* Hero Splash Banner */}
            <Hero />
            
            {/* About Profile & Animated Stats */}
            <About />
            
            {/* Products catalog with filters & details modal */}
            <Products />
            
            {/* Why Choose Us feature grid */}
            <WhyChooseUs />
            
            {/* Process workflow timeline */}
            <Process />
            
            {/* Accreditations & Certificates */}
            <Certificates />
            
            {/* Operations Media Gallery with Lightbox */}
            <Gallery />
            
            {/* Client Testimonials slider */}
            <Testimonials />
            
            {/* Frequently Asked Questions */}
            <FAQ />
            
            {/* Office Coordinates & Trade Form */}
            <Contact />
          </main>

          {/* Footer Multi-column site links */}
          <Footer />

          {/* Floating Actions: back-to-top & WhatsApp pulse buttons */}
          <FloatingActions />
        </div>
      )}
    </>
  );
}

export default App;
