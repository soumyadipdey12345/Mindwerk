import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AIRPAImplementation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI & RPA <span className="text-red-600">Implementation</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Custom AI modeling, anomaly detection, and robotic process automation to streamline operations and enhance decision-making.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Intelligent <span className="text-red-600">Automation</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Harness the power of Artificial Intelligence and Robotic Process Automation to transform your business operations. Our AI and RPA solutions automate repetitive tasks, enable intelligent decision-making, and unlock new insights from your data.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From custom AI models to enterprise-wide RPA deployments, we deliver solutions that drive efficiency, accuracy, and innovation across your organization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {[
                  '80% reduction in manual tasks',
                  'Real-time anomaly detection',
                  '99.9% accuracy in automated processes',
                  'Predictive analytics and insights',
                  'Scalable automation infrastructure',
                  '24/7 automated operations'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-red-600 flex-shrink-0" size={24} />
                    <span className="text-gray-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our <span className="text-red-600">Solutions</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom AI Models',
                description: 'Tailored machine learning models for your specific business needs',
                features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning']
              },
              {
                title: 'RPA Solutions',
                description: 'Automated workflows that eliminate manual, repetitive tasks',
                features: ['Process Automation', 'Data Entry Automation', 'Report Generation', 'System Integration']
              },
              {
                title: 'Anomaly Detection',
                description: 'AI-powered systems to identify patterns and detect anomalies',
                features: ['Fraud Detection', 'Quality Control', 'Security Monitoring', 'Performance Tracking']
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate with AI?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Discover how AI and RPA can transform your operations.
          </p>
          <Button
            onClick={() => window.location.href = '/#contact'}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIRPAImplementation;