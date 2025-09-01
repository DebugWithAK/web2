import React, { useState, useEffect } from 'react';
import { Users, Scaling as Seedling, Sprout, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import SkeletonLoader from './SkeletonLoader';

const HowItWorksSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      number: "01",
      icon: <Users size={32} />,
      title: "Specialized Team",
      description: "Expert agricultural professionals with decades of experience"
    },
    {
      number: "02",
      icon: <Seedling size={32} />,
      title: "Organic Growth Plan",
      description: "Customized sustainable farming strategies for optimal results"
    },
    {
      number: "03",
      icon: <Sprout size={32} />,
      title: "Healthy Farming Method",
      description: "Eco-friendly practices that nurture both crops and environment"
    },
    {
      number: "04",
      icon: <Clock size={32} />,
      title: "Timely Yield and Harvest",
      description: "Efficient scheduling ensures fresh produce at peak quality"
    }
  ];

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SkeletonLoader type="image" />
            <div className="space-y-8">
              {Array.from({ length: 4 }, (_, index) => (
                <SkeletonLoader key={index} type="text" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How We Do Agricultural Work
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://cdn.pixabay.com/photo/2016/11/21/16/05/woman-1846574_1280.jpg"
                alt="Smiling Woman with Vegetables"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute top-6 right-6 bg-yellow-400 rounded-full p-3"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Sprout size={24} className="text-green-800" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Process Steps */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-6 group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:from-green-700 group-hover:to-green-800 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.number}
                  </motion.div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <motion.div 
                      className="text-green-600 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 5 }}
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;