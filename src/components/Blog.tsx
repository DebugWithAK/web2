import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Benefits of Eating Seasonal Produce",
      excerpt: "Discover why seasonal fruits and vegetables are better for your health and the environment.",
      image: "https://cdn.pixabay.com/photo/2017/05/12/11/28/organic-2306662_640.jpg",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      tags: ["Organic", "Tips"]
    },
    {
      title: "How to Start Your Own Organic Garden",
      excerpt: "A comprehensive guide for beginners looking to grow their own organic vegetables at home.",
      image: "https://cdn.pixabay.com/photo/2016/08/09/21/54/vegetables-1581679_640.jpg",
      date: "March 12, 2024",
      author: "Mike Davis",
      tags: ["Garden", "Tips"]
    },
    {
      title: "Why Organic Farming is the Future",
      excerpt: "Exploring the environmental and health benefits of sustainable agricultural practices.",
      image: "https://cdn.pixabay.com/photo/2016/08/12/17/19/agriculture-1589850_640.jpg",
      date: "March 10, 2024",
      author: "Emily Chen",
      tags: ["Organic", "Future"]
    },
    {
      title: "Smart Technology in Agriculture",
      excerpt: "How modern technology is revolutionizing farming practices and increasing efficiency.",
      image: "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_640.png",
      date: "March 8, 2024",
      author: "James Wilson",
      tags: ["Technology", "Innovation"]
    },
    {
      title: "Sustainable Soil Management Practices",
      excerpt: "Learn about effective methods to maintain healthy soil for long-term farming success.",
      image: "https://cdn.pixabay.com/photo/2017/09/12/13/21/photosynthesis-2743948_640.jpg",
      date: "March 5, 2024",
      author: "Lisa Thompson",
      tags: ["Soil", "Sustainable"]
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
      <div className="max-w-[1440px] mx-auto px-4">
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
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
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
                  
                  <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                    <span>Read More</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;