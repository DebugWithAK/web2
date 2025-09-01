import React from 'react';
import { CheckCircle, Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
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
                src="https://cdn.pixabay.com/photo/2016/11/21/16/21/agriculture-1846597_1280.jpg"
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
              >
                <img 
                  src="https://cdn.pixabay.com/photo/2016/08/11/23/48/agriculture-1589561_640.jpg"
                  alt="Tractor in Field"
                  className="w-32 h-20 object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content Card */}
          <motion.div 
            className="bg-green-800 rounded-2xl p-8 lg:p-12 text-white shadow-2xl"
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
                >
                  <div className="text-yellow-400 group-hover:scale-110 transition-transform">
                    {highlight.icon}
                  </div>
                  <span className="text-lg font-medium">{highlight.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.button 
              className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;