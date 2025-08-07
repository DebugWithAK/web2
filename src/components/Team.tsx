import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "James Albert",
      designation: "Agricultural Director",
      image: "https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      name: "David P. Mower",
      designation: "Soil Specialist",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      name: "Queenie Patrico",
      designation: "Organic Consultant",
      image: "https://images.pexels.com/photos/1300512/pexels-photo-1300512.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      name: "Hugo Elhite",
      designation: "Harvest Manager",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            We Have Lots of Experience Team Members
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="group"
              variants={itemVariants}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Social Media Overlay */}
                  <div className="absolute inset-0 bg-green-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      {[Linkedin, Twitter, Facebook].map((Icon, iconIndex) => (
                        <button key={iconIndex} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-600 hover:bg-yellow-400 hover:text-gray-800 transition-colors">
                          <Icon size={18} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium">
                    {member.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;