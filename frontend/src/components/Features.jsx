import React, { useState } from 'react';
import { features } from '../data/mock';
import { Users, Zap, UsersRound, Headphones, Database, Award, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const iconMap = {
  Users,
  Zap,
  UsersRound,
  Headphones,
  Database,
  Award,
  Shield
};

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = Math.ceil(features.length / itemsPerPage) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const displayedFeatures = features.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-2xl">
            Partnering with us means being part of <span className="text-red-600">impactful</span> and <span className="text-red-600">transformative</span> work.
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedFeatures.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={feature.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/10 hover:border-red-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mb-6 shadow-xl">
                    {Icon && <Icon className="text-white" size={32} />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              onClick={prevSlide}
              variant="outline"
              className="border-white/20 text-white hover:bg-red-600 hover:border-red-600 rounded-full w-12 h-12 p-0 shadow-2xl"
            >
              <ChevronLeft size={24} />
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-red-600 w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              className="border-white/20 text-white hover:bg-red-600 hover:border-red-600 rounded-full w-12 h-12 p-0 shadow-2xl"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;