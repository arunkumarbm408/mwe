import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { openWhatsAppGeneral, WHATSAPP_NUMBER } from '../utils/whatsapp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    inquiryType: 'Import',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          product: '',
          inquiryType: 'Import',
          message: ''
        });
      }, 5000);
    }, 1200);
  };

  const sendToWhatsApp = () => {
    const msg = `Hello Maaworld Exim,

I have submitted an inquiry via your website form:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Inquiry Type: ${formData.inquiryType}
Product/Commodity: ${formData.product || 'General Sourcing'}
Message: ${formData.message}

Thank you.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-bg-dark-section text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold font-sans tracking-widest text-secondary uppercase block mb-2">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Contact Our Trading Desk</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
            Contact us for specifications, freight logs, pricing, or custom packaging solutions.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Info & Map */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white">Office Details</h3>
              
              <div className="space-y-4 font-sans text-sm text-gray-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-xl text-secondary mt-1 border border-white/5">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Registered Address</h5>
                    <p className="text-gray-400">104, Trade Tower, Bandra East, Mumbai, Maharashtra 400051, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-xl text-secondary mt-1 border border-white/5">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Phone Number</h5>
                    <a href="tel:+916360859627" className="hover:text-secondary block font-semibold text-white">+91 6360859627</a>
                    <a href="tel:+91221234567" className="hover:text-secondary block text-gray-400">+91 (22) 1234-567</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-xl text-secondary mt-1 border border-white/5">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Email Coordinates</h5>
                    <a href="mailto:info@maaworldexim.com" className="hover:text-secondary block font-semibold text-white">info@maaworldexim.com</a>
                    <a href="mailto:sales@maaworldexim.com" className="hover:text-secondary block text-gray-400">sales@maaworldexim.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-xl text-secondary mt-1 border border-white/5">
                    <FaClock size={16} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Trading Hours</h5>
                    <p className="text-gray-400">Monday - Saturday: 09:30 AM - 06:30 PM (IST)</p>
                    <p className="text-secondary font-semibold text-xs">Sunday Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embedded Frame */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-800 h-56 relative bg-gray-900 mt-6 lg:mt-0">
              <iframe
                title="Maaworld Exim Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8038580796335!2d72.8427771746637!3d19.028345753460838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced092ffc929%3A0xe54ef0fc9c6ba79e!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Column 2: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-primary/45 border border-white/5 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Trade Inquiry Form</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <FaCheckCircle className="text-secondary text-6xl mb-4 animate-bounce" />
                  <h4 className="text-xl font-bold font-serif text-white mb-2">Inquiry Logged Successfully!</h4>
                  <p className="text-gray-400 font-sans text-xs md:text-sm max-w-sm mb-6">
                    Thank you for contacting Maaworld Exim. Our representative will email or call you back within 24 business hours.
                  </p>
                  
                  {/* Option to push details to WhatsApp */}
                  <div className="border-t border-white/10 pt-6 w-full max-w-sm">
                    <p className="text-xs text-secondary font-bold mb-3 font-sans">Need instant service? Send details to WhatsApp:</p>
                    <button
                      onClick={sendToWhatsApp}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors font-bold text-sm uppercase tracking-wider cursor-pointer"
                    >
                      <FaWhatsapp size={18} />
                      <span>Send to WhatsApp</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-sans text-sm">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 font-bold mb-1.5 uppercase text-xs">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-[#16181D] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary text-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 font-bold mb-1.5 uppercase text-xs">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-[#16181D] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary text-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 font-bold mb-1.5 uppercase text-xs">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#16181D] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary text-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 font-bold mb-1.5 uppercase text-xs">Inquiry Type</label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full bg-[#16181D] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary text-white transition-all"
                      >
                        <option value="Import">Import Sourcing (from India)</option>
                        <option value="Export">Export Supply (to India)</option>
                        <option value="Brokerage">Brokerage/Agency</option>
                        <option value="Others">Others / General</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 font-bold mb-1.5 uppercase text-xs">Target Commodity</label>
                    <input
                      type="text"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      placeholder="e.g. Basmati Rice, Red Chilli, Spices..."
                      className="w-full bg-[#16181D] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary text-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 font-bold mb-1.5 uppercase text-xs">Your Inquiry Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify packaging needs, quantity, or shipping port destination..."
                      className="w-full bg-[#16181D] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary text-white transition-all"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col md:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-secondary to-[#E2C08A] text-primary hover:scale-105 transition-all duration-300 font-bold text-sm uppercase tracking-wider cursor-pointer shadow-lg hover:shadow-secondary/15"
                    >
                      {loading ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <FaPaperPlane size={14} />
                          <span>Submit Trade Inquiry</span>
                        </>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={openWhatsAppGeneral}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all duration-300 font-bold text-sm uppercase tracking-wider cursor-pointer shadow-lg"
                    >
                      <FaWhatsapp size={16} />
                      <span>Chat Exporter Direct</span>
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
