import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import TrustBadges from '../components/TrustBadges';
import ServicesSection from '../components/ServicesSection';
import AboutOrganicSection from '../components/AboutOrganicSection';
import ProjectsSection from '../components/ProjectsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';
import BlogSection from '../components/BlogSection';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <TrustBadges />
      <ServicesSection />
      <AboutOrganicSection />
      <ProjectsSection />
      <HowItWorksSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactForm />
      <BlogSection />
    </motion.div>
  );
};

export default Home;