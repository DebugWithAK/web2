import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import SkeletonLoader from './SkeletonLoader';
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SkeletonLoader type="hero" />;
  }

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="text-center text-white">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Organic Farming
              <br />
              <span className="text-green-400">& Agriculture</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sustainable farming solutions that enrich the soil and provide fresh, 
              healthy produce to communities worldwide
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 flex items-center space-x-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                                    onClick={()=>navigate("/services")}

              >
                <span>Discover More</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 flex items-center space-x-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                                                    onClick={()=>navigate("/contact")}

              >
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                <span>Join Us Now</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="flex flex-col items-center space-y-2 cursor-pointer group">
          <span className="text-white text-sm font-medium group-hover:text-green-400 transition-colors">Scroll Down</span>
          <ChevronDown size={24} className="text-white group-hover:text-green-400 transition-colors animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;