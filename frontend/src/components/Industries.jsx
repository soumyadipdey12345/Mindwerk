import React from 'react';
import { Building2, Factory, Heart, DollarSign, ShoppingBag, GraduationCap } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      id: 1,
      title: 'Enterprise & Corporate',
      description: 'Large-scale digital transformation and enterprise system optimization',
      icon: Building2
    },
    {
      id: 2,
      title: 'Manufacturing',
      description: 'Industry 4.0 solutions, IoT integration, and smart factory implementations',
      icon: Factory
    },
    {
      id: 3,
      title: 'Healthcare',
      description: 'Healthcare IT solutions, compliance management, and patient data systems',
      icon: Heart
    },
    {
      id: 4,
      title: 'Financial Services',
      description: 'Fintech solutions, regulatory compliance, and automated trading systems',
      icon: DollarSign
    },
    {
      id: 5,
      title: 'Retail & E-commerce',
      description: 'Customer experience optimization and supply chain automation',
      icon: ShoppingBag
    },
    {
      id: 6,
      title: 'Education',
      description: 'EdTech solutions, learning management systems, and digital campus transformation',
      icon: GraduationCap
    }
  ];

  return (
    <section id="industries" className="relative min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 drop-shadow-2xl">
            <span className="text-white">Industries We </span>
            <span className="text-red-600">Serve</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-white/90 text-xl leading-relaxed drop-shadow-lg">
              Delivering specialized technology solutions across diverse industry verticals
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/10 hover:border-red-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:to-red-800/20 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    {Icon && <Icon className="text-white" size={32} />}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-600 transition-colors">
                    {industry.title}
                  </h3>
                  
                  <p className="text-white/80 text-base leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
