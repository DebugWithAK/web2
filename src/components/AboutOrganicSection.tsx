import React, { useState, useEffect } from 'react';
import { CheckCircle, Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import SkeletonLoader from './SkeletonLoader';

const AboutOrganicSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const highlights = [
    {
      icon: <CheckCircle size={24} />,
      text: "100% Guaranteed Organic Products"
    },
    {
      icon: <Award size={24} />,
      text: "Top Quality Healthy Foods Production"
    },
    {
      icon: <Calendar size={24} />,
      text: "25+ Years of Experience in Organic Farming"
    }
  ];

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SkeletonLoader type="image" />
            <div className="space-y-6">
              <SkeletonLoader type="text" />
              <SkeletonLoader type="text" />
              <SkeletonLoader type="text" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Farmer Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Experienced Farmer"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Floating Tractor Image */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
                  alt="Tractor in Field"
                  className="w-32 h-20 object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content Card */}
          <motion.div 
            className="bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-8 lg:p-12 text-white shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              We're Best Agriculture & Organic Products
            </h2>
            
            <p className="text-green-100 mb-8 text-lg leading-relaxed">
              With over two decades of experience in sustainable farming, we're committed to 
              delivering the highest quality organic products while protecting our environment.
            </p>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="text-yellow-400 group-hover:scale-110 transition-transform">
                    {highlight.icon}
                  </div>
                  <span className="text-lg font-medium">{highlight.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.button 
              className="mt-8 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutOrganicSection;