import React from 'react';
import { services } from '../data/mock';
import { TrendingUp, Brain, Cloud, Settings, ArrowRight, Check } from 'lucide-react';
import { Button } from './ui/button';

const iconMap = {
  TrendingUp,
  Brain,
  Cloud,
  Settings
};

const Services = () => {
  return (
    <section id="services" className="relative min-h-screen py-20 bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`${process.env.PUBLIC_URL}/images/services-background.jpeg`}
          alt="Digital Services Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-red-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 drop-shadow-2xl">
            <span className="text-white">Our Core </span>
            <span className="text-red-600">Services</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-white/90 text-xl leading-relaxed drop-shadow-lg">
              Comprehensive IT consulting and digital transformation services designed to accelerate your business growth
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/10 hover:border-red-600 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:to-red-800/20 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      {Icon && <Icon className="text-white" size={32} />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/90">
                        <Check className="text-red-600 mr-3 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;