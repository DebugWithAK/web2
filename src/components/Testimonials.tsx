import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Victoria Garment",
      rating: 5,
      text: "Calicolo has transformed our farm with their organic methods. The quality of our produce has never been better!",
      image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/woman-1846574_150.jpg"
    },
    {
      name: "Ethan Walker",
      rating: 5,
      text: "Professional service and incredible results. Our soil health improved dramatically after their consultation.",
      image: "https://cdn.pixabay.com/photo/2017/08/01/11/48/man-2564660_150.jpg"
    },
    {
      name: "Anakee Elhira",
      rating: 5,
      text: "The team's expertise in sustainable farming is unmatched. Highly recommend their services to any farmer.",
      image: "https://cdn.pixabay.com/photo/2016/11/21/16/21/agriculture-1846597_150.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-[1440px] mx-auto px-4">
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

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonial Cards */}
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
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`group transition-all duration-500 ${
                      index === currentIndex ? 'scale-105 z-10' : 'scale-95 opacity-70'
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 relative">
                      <div className="absolute -top-4 left-8 bg-yellow-400 rounded-full p-3">
                        <Quote size={20} className="text-gray-800" />
                      </div>
                      
                      <div className="pt-6">
                        {/* Rating */}
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={20} className="text-yellow-400 fill-current" />
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
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;