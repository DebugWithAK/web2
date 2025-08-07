import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SkeletonLoader from './SkeletonLoader';

const TestimonialsSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: "Victoria Garment",
      rating: 5,
      text: "Calicolo has transformed our farm with their organic methods. The quality of our produce has never been better!",
      image: "https://images.pexels.com/photos/1300512/pexels-photo-1300512.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Ethan Walker",
      rating: 5,
      text: "Professional service and incredible results. Our soil health improved dramatically after their consultation.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Anakee Elhira",
      rating: 5,
      text: "The team's expertise in sustainable farming is unmatched. Highly recommend their services to any farmer.",
      image: "https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Outstanding results with their organic certification process. Made everything so much easier for our farm.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Their innovative farming techniques have increased our yield by 40%. Truly exceptional service!",
      image: "https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [testimonials.length, isLoading]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SkeletonLoader type="text" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkeletonLoader type="testimonial" count={3} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Trusted by 1000+ Customers
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} />
          </motion.button>
          
          <motion.button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} />
          </motion.button>

          {/* Testimonial Cards Carousel */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.originalIndex}-${currentIndex}`}
                    className={`group transition-all duration-500 ${
                      index === 1 ? 'md:scale-105 z-10' : 'md:scale-95 md:opacity-80'
                    }`}
                    whileHover={{ scale: index === 1 ? 1.08 : 1.02 }}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 relative h-full">
                      <div className="absolute -top-4 left-8 bg-yellow-400 rounded-full p-3">
                        <Quote size={20} className="text-gray-800" />
                      </div>
                      
                      <div className="pt-6">
                        {/* Rating */}
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Star size={20} className="text-yellow-400 fill-current" />
                            </motion.div>
                          ))}
                          <span className="ml-2 text-gray-600 font-medium">5.0</span>
                        </div>
                        
                        {/* Testimonial Text */}
                        <p className="text-gray-600 leading-relaxed mb-6 italic">
                          "{testimonial.text}"
                        </p>
                        
                        {/* Customer Info */}
                        <div className="flex items-center space-x-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                            <p className="text-green-600 text-sm">Verified Customer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;