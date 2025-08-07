import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  type?: 'card' | 'text' | 'image' | 'hero' | 'testimonial';
  count?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ type = 'card', count = 1 }) => {
  const shimmer = {
    animate: {
      backgroundPosition: ['200% 0', '-200% 0'],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  };

  const CardSkeleton = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <motion.div 
        className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"
        {...shimmer}
      />
      <div className="p-6 space-y-3">
        <motion.div 
          className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-3/4"
          {...shimmer}
        />
        <motion.div 
          className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-full"
          {...shimmer}
        />
        <motion.div 
          className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-2/3"
          {...shimmer}
        />
      </div>
    </div>
  );

  const TextSkeleton = () => (
    <div className="space-y-3">
      <motion.div 
        className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-full"
        {...shimmer}
      />
      <motion.div 
        className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-3/4"
        {...shimmer}
      />
      <motion.div 
        className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-1/2"
        {...shimmer}
      />
    </div>
  );

  const ImageSkeleton = () => (
    <motion.div 
      className="w-full h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-lg"
      {...shimmer}
    />
  );

  const HeroSkeleton = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center space-y-6 max-w-4xl mx-auto px-4">
        <motion.div 
          className="h-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-3/4 mx-auto"
          {...shimmer}
        />
        <motion.div 
          className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-2/3 mx-auto"
          {...shimmer}
        />
        <div className="flex justify-center space-x-4">
          <motion.div 
            className="h-12 w-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-lg"
            {...shimmer}
          />
          <motion.div 
            className="h-12 w-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-lg"
            {...shimmer}
          />
        </div>
      </div>
    </div>
  );

  const TestimonialSkeleton = () => (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center space-x-4 mb-4">
        <motion.div 
          className="w-12 h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-full"
          {...shimmer}
        />
        <div className="space-y-2">
          <motion.div 
            className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-24"
            {...shimmer}
          />
          <motion.div 
            className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-16"
            {...shimmer}
          />
        </div>
      </div>
      <div className="space-y-3">
        <motion.div 
          className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-full"
          {...shimmer}
        />
        <motion.div 
          className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-3/4"
          {...shimmer}
        />
      </div>
    </div>
  );

  const renderSkeleton = () => {
    switch (type) {
      case 'text':
        return <TextSkeleton />;
      case 'image':
        return <ImageSkeleton />;
      case 'hero':
        return <HeroSkeleton />;
      case 'testimonial':
        return <TestimonialSkeleton />;
      default:
        return <CardSkeleton />;
    }
  };

  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;