import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 bg-bg-dark-section text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold font-sans tracking-widest text-secondary uppercase block mb-2">Export Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Our Premium Products</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
            All commodities comply strictly with international food-grade standards and undergo rigorous laboratory clearances before shipping.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold font-sans tracking-wider uppercase cursor-pointer border transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-secondary text-primary border-secondary shadow-md'
                    : 'bg-primary text-gray-400 border-gray-800 hover:border-secondary/35 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 order-1 md:order-2">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-primary border border-gray-800 rounded-full px-5 py-2.5 pl-11 text-sm font-sans focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-white transition-all"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
          </div>

        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result Fallback */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-primary/40 rounded-3xl border border-dashed border-gray-800 shadow-sm"
          >
            <div className="text-4xl mb-4">🔎</div>
            <h4 className="text-lg font-bold font-serif text-white mb-1">No products found</h4>
            <p className="text-gray-500 text-xs font-sans">Try refining your search keyword or selecting another category.</p>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Products;
