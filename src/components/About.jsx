import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe, FaBullseye, FaEye, FaHandshake, FaAward } from 'react-icons/fa';

// Reusable Counter Animation Component
const AnimatedCounter = ({ value, duration = 1.5, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) return;
    if (start === end) {
      setCount(end);
      return;
    }

    const totalSteps = 40;
    const stepTime = Math.floor(duration * 1000 / totalSteps);
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      const currentVal = Math.floor(end * (progress * (2 - progress)));
      setCount(currentVal);
      
      if (step >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, value, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [imgError, setImgError] = useState(false);

  const tabsContent = {
    profile: {
      title: 'Who We Are',
      icon: <FaGlobe className="text-teal-accent text-2xl" />,
      content: 'MAAWORLD EXIM is a globally recognized agricultural commodity trading house based in India. Rooted in integrity and excellence, we bridge the gap between hard-working Indian farmers and international markets. We handle sourcing, strict quality processing, compliant certifications, custom packaging, and complex shipping logistics. Our operations bring spices, seeds, grains, and perishables from harvest directly to global destinations.',
      points: [
        'Direct farm-to-port supply chain integrations',
        'State-of-the-art sorting and cleaning facilities',
        'Transparent operations & real-time shipment updates',
        'Customized bulk packaging as per buyer demand'
      ]
    },
    mission: {
      title: 'Our Mission',
      icon: <FaBullseye className="text-teal-accent text-2xl" />,
      content: 'To deliver superior quality Indian agricultural products to global buyers at competitive prices while ensuring fair, sustainable practices for our network of farmers. We strive to be the most trusted global supply partner by upholding strict international quality standards (ISO, APEDA) and providing flawless end-to-end logistics solutions.',
      points: [
        'Empower Indian farmers via global export channels',
        'Maintain zero-defect shipping and delivery schedules',
        'Integrate eco-friendly and food-safe packaging standards',
        'Exceed customer expectations in transparency and purity'
      ]
    },
    vision: {
      title: 'Our Vision',
      icon: <FaEye className="text-teal-accent text-2xl" />,
      content: 'To establish Maaworld Exim as a world-leading name in agricultural commodity export, synonymous with premium quality, reliability, and innovation. We visualize expanding our presence to over 100 countries by 2030, establishing deep-seated connections across retail, industrial, and bulk wholesale sectors globally.',
      points: [
        'Innovate logistics with real-time temperature cold chains',
        'Introduce extensive certified organic production lines',
        'Set benchmarks for cleanliness and grade certifications',
        'Become a carbon-neutral exporter of farm commodities'
      ]
    }
  };

  const statistics = [
    { label: 'Export Countries', value: '25', suffix: '+', icon: '🌐' },
    { label: 'Commodity Products', value: '17', suffix: '+', icon: '🌾' },
    { label: 'Years Experience', value: '10', suffix: '+', icon: '⏳' },
    { label: 'Verified Buyers', value: '150', suffix: '+', icon: '🤝' }
  ];

  return (
    <section id="about" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -mr-48 -mt-24"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold font-sans tracking-widest text-secondary uppercase block mb-2">Company Profile</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Cultivating Trust, Exporting Excellence</h2>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Column 1: Image Showcase */}
          {!imgError && (
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80"
                  alt="Agricultural processing and quality inspection"
                  onError={() => setImgError(true)}
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-xl border border-secondary/20 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary rounded-lg text-secondary">
                      <FaAward size={20} />
                    </div>
                    <div>
                      <h5 className="font-serif font-bold text-primary text-sm">Certified Exporter</h5>
                      <p className="font-sans text-xs text-text-dark/80">100% Quality Audited Shipments</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background design dots */}
              <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[radial-gradient(#B88A44_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40 z-[-1]"></div>
            </div>
          )}

          {/* Column 2: Details & Tabs */}
          <div className={`${imgError ? 'lg:col-span-12' : 'lg:col-span-7'} flex flex-col justify-center`}>
            {/* Tab Swappers */}
            <div className="flex border-b border-gray-200 mb-8 w-full">
              {Object.keys(tabsContent).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`flex-1 pb-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 border-b-2 cursor-pointer font-sans text-center ${
                    activeTab === tabKey
                      ? 'border-secondary text-primary font-extrabold'
                      : 'border-transparent text-gray-400 hover:text-primary'
                  }`}
                >
                  {tabsContent[tabKey].title}
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 min-h-[280px]"
              >
                <div className="flex items-center gap-3">
                  {tabsContent[activeTab].icon}
                  <h3 className="text-2xl font-serif font-bold text-primary">
                    {tabsContent[activeTab].title}
                  </h3>
                </div>
                
                <p className="text-gray-650 font-sans text-base leading-relaxed">
                  {tabsContent[activeTab].content}
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {tabsContent[activeTab].points.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-text-dark font-sans font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-accent flex-shrink-0"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Statistics Banner Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-gray-200">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-secondary/20 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-serif font-black text-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-text-dark/70 font-sans">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
