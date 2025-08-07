import React, { useState, useEffect } from 'react';
import { Users, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import SkeletonLoader from './SkeletonLoader';

const TrustBadges: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const badges = [
    {
      icon: <Users size={48} />,
      text: "1000+ Clients With Positive Reviews",
      color: "text-green-700"
    },
    {
      icon: <Award size={48} />,
      text: "Quality Organic Certified",
      color: "text-green-700"
    },
    {
      icon: <Heart size={48} />,
      text: "Healthy Life With Fresh Products",
      color: "text-green-700"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (isLoading) {
    return (
      <section className="bg-yellow-400 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkeletonLoader type="text" count={3} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {badges.map((badge, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center space-y-4 group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className={`${badge.color} group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                {badge.icon}
              </motion.div>
              <p className="text-gray-800 font-semibold text-lg max-w-xs leading-relaxed">
                {badge.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;