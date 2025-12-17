import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const DigitalTransformation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Digital <span className="text-red-600">Transformation</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Strategic planning, enterprise modernization, and process optimization to drive organizational growth and efficiency.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transform Your <span className="text-red-600">Business</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In today's rapidly evolving digital landscape, transformation is not just an option—it's a necessity. Our digital transformation services help organizations reimagine their business models, optimize operations, and create new value for customers through technology-driven innovation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work closely with your leadership team to develop and execute comprehensive digital strategies that align with your business objectives and drive sustainable growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {[
                  'Accelerated time-to-market',
                  'Enhanced customer experience',
                  'Improved operational efficiency',
                  'Data-driven decision making',
                  'Increased competitive advantage',
                  'Scalable technology infrastructure'
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

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our <span className="text-red-600">Approach</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Comprehensive analysis of current state, identifying gaps and opportunities'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop tailored digital transformation roadmap aligned with business goals'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute transformation initiatives with agile methodology and best practices'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous improvement and scaling of digital capabilities'
              }
            ].map((phase) => (
              <div key={phase.step} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-5xl font-bold text-red-600 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Services <span className="text-red-600">Included</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Strategic Planning & Roadmap Development',
              'Enterprise Architecture Design',
              'Legacy System Modernization',
              'Process Optimization & Reengineering',
              'Change Management & Training',
              'Digital Maturity Assessment',
              'Technology Stack Evaluation',
              'Innovation Workshops & Ideation'
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors">
                <ArrowRight className="text-red-600 flex-shrink-0" size={20} />
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how our digital transformation services can help you achieve your goals.
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

export default DigitalTransformation;
