import React, { useState, useEffect } from 'react';
import { Users, Droplets, Milk, Leaf, Tractor, Wheat } from 'lucide-react';
import { motion } from 'framer-motion';
import SkeletonLoader from './SkeletonLoader';

const ServicesSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: <Users size={48} />,
      title: "Agricultural Consulting",
      description: "Expert guidance for sustainable farming practices and crop optimization strategies.",
      image: "https://cdn.pixabay.com/photo/2015/07/02/20/57/meeting-829983_640.jpg"
    },
    {
      icon: <Droplets size={48} />,
      title: "Soil Fertilization",
      description: "Organic soil enhancement and nutrient management for healthier crops.",
      image: "https://cdn.pixabay.com/photo/2016/11/21/16/21/agriculture-1846597_640.jpg"
    },
    {
      icon: <Milk size={48} />,
      title: "Dairy Production",
      description: "Sustainable dairy farming practices ensuring fresh, quality milk products.",
      image: "https://cdn.pixabay.com/photo/2016/11/29/05/45/agriculture-1867431_640.jpg"
    },
    {
      icon: <Leaf size={48} />,
      title: "Organic Certification",
      description: "Complete certification process guidance for organic farming standards.",
      image: "https://cdn.pixabay.com/photo/2017/05/12/11/28/organic-2306662_640.jpg"
    },
    {
      icon: <Tractor size={48} />,
      title: "Farm Equipment",
      description: "Modern agricultural equipment and machinery for efficient farming operations.",
      image: "https://cdn.pixabay.com/photo/2016/08/11/23/48/agriculture-1589561_640.jpg"
    },
    {
      icon: <Wheat size={48} />,
      title: "Crop Management",
      description: "Comprehensive crop planning, monitoring, and harvest optimization services.",
      image: "https://cdn.pixabay.com/photo/2016/08/12/17/19/agriculture-1589850_640.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            We Offer Eco & Agriculture Services
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkeletonLoader type="card" count={6} />
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-green-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div 
                        className="text-white transform scale-75 group-hover:scale-100 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;