import React from 'react';
import { CheckCircle } from 'lucide-react';

const Expertise = () => {
  const expertiseItems = [
    'IT Consulting & Due Diligence',
    'AI Modeling & Anomaly Detection',
    'RPA Implementation',
    'Process Audit & Automation',
    'Cloud Strategy & Migration',
    'COE Development',
    'ERP & System Advisory',
    'Industry 4.0 Solutions'
  ];

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100 hover:border-red-600 hover:shadow-xl transition-all duration-300 group"
            >
              <CheckCircle className="text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
              <span className="text-gray-800 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
