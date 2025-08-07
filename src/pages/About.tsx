import React from 'react';
import { motion } from 'framer-motion';
import AboutOrganicSection from '../components/AboutOrganicSection';
import TeamSection from '../components/TeamSection';
import HowItWorksSection from '../components/HowItWorksSection';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About <span className="text-green-600">Calicolo</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Leading the way in sustainable agriculture and organic farming practices for over 25 years
          </motion.p>
        </div>
      </section>

      <AboutOrganicSection />
      <HowItWorksSection />
      <TeamSection />
    </motion.div>
  );
};

export default About;