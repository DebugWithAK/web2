import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import SkeletonLoader from './SkeletonLoader';
import { useLocation } from "react-router-dom";

const BlogSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

 const location = useLocation();
  const isBlog = location.pathname === "/blog";


  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    {
      title: "Benefits of Eating Seasonal Produce",
      excerpt: "Discover why seasonal fruits and vegetables are better for your health and the environment. Learn about the nutritional advantages and environmental impact.",
      image: "https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      tags: ["Organic", "Health", "Tips"],
      readTime: "5 min read"
    },
    {
      title: "How to Start Your Own Organic Garden",
      excerpt: "A comprehensive guide for beginners looking to grow their own organic vegetables at home. From soil preparation to harvest tips.",
      image: "https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "March 12, 2024",
      author: "Mike Davis",
      tags: ["Garden", "DIY", "Beginner"],
      readTime: "8 min read"
    },
    {
      title: "Why Organic Farming is the Future",
      excerpt: "Exploring the environmental and health benefits of sustainable agricultural practices. The impact on climate change and biodiversity.",
      image: "https://images.pexels.com/photos/2132240/pexels-photo-2132240.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "March 10, 2024",
      author: "Emily Chen",
      tags: ["Organic", "Future", "Environment"],
      readTime: "6 min read"
    },
    {
      title: "Smart Technology in Agriculture",
      excerpt: "How modern technology is revolutionizing farming practices and increasing efficiency. IoT sensors, drones, and AI in farming.",
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "March 8, 2024",
      author: "James Wilson",
      tags: ["Technology", "Innovation", "Smart Farming"],
      readTime: "7 min read"
    },
    {
      title: "Sustainable Soil Management Practices",
      excerpt: "Learn about effective methods to maintain healthy soil for long-term farming success. Composting, crop rotation, and natural fertilizers.",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "March 5, 2024",
      author: "Lisa Thompson",
      tags: ["Soil", "Sustainable", "Management"],
      readTime: "9 min read"
    },
    {
      title: "The Economics of Organic Farming",
      excerpt: "Understanding the financial aspects of transitioning to organic farming. Cost analysis, market opportunities, and profitability insights.",
      image: "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "March 3, 2024",
      author: "Robert Martinez",
      tags: ["Economics", "Business", "Organic"],
      readTime: "10 min read"
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
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Blog & Articles
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
            {blogPosts.map((post, index) => (
              <motion.article 
                key={index} 
                className="group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                          <Tag size={10} />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <span className="text-xs font-medium text-gray-700">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* All Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span>Read More</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

       {isBlog&& <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
          </motion.button>
        </motion.div>}
      </div>
    </section>
  );
};

export default BlogSection;