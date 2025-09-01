import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const quickLinks = [
    "About Us", "Our Services", "Projects", "Team", "Blog", "Contact"
  ];

  const services = [
    "Agricultural Consulting", "Soil Fertilization", "Dairy Production", 
    "Organic Farming", "Crop Management", "Harvest Solutions"
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white">
      {/* Contact Info Strip */}
      <div className="bg-yellow-400 py-6">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <motion.div 
              className="flex items-center justify-center md:justify-start space-x-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Phone size={20} className="text-green-800" />
              <span className="text-gray-800 font-semibold">+91 111111111</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center md:justify-start space-x-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Mail size={20} className="text-green-800" />
              <span className="text-gray-800 font-semibold">info@Calicolo.com</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center md:justify-start space-x-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MapPin size={20} className="text-green-800" />
              <span className="text-gray-800 font-semibold">123 Farm Street, Green Valley</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-green-800 py-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-green-800 font-bold text-lg">E</span>
                </div>
                <span className="text-2xl font-bold">Calicolo</span>
              </div>
              <p className="text-green-100 leading-relaxed mb-6">
                Leading the way in sustainable agriculture and organic farming practices. 
                Committed to healthy food production and environmental protection.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <button key={index} className="w-10 h-10 bg-green-700 hover:bg-yellow-400 rounded-full flex items-center justify-center text-white hover:text-green-800 transition-all duration-300 hover:scale-110">
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-green-100 hover:text-yellow-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-green-100 hover:text-yellow-400 transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6">Newsletter</h3>
              <p className="text-green-100 mb-4">
                Subscribe to get latest updates about organic farming and agriculture.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-green-700 text-white placeholder-green-200 border border-green-600 focus:border-yellow-400 focus:outline-none transition-colors"
                />
                <button 
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-green-800 px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>Subscribe</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-green-900 py-6">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-center md:text-left">
© 2024 Calicolo. All rights reserved. Created by DebugWithAK for sustainable farming.

            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-green-200 hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-green-200 hover:text-yellow-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;