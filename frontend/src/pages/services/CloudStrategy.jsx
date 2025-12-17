import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const CloudStrategy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cloud Strategy & <span className="text-red-600">Migration</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Comprehensive cloud enablement services including strategy development, migration planning, and infrastructure optimization.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Scale with <span className="text-red-600">Confidence</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Cloud technology offers unparalleled scalability, flexibility, and cost-efficiency. Our cloud strategy and migration services help you navigate the complexities of cloud adoption, ensuring a smooth transition that aligns with your business objectives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're moving to AWS, Azure, or Google Cloud, we provide end-to-end support from planning to post-migration optimization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {[
                  'Reduced infrastructure costs',
                  'Enhanced scalability and flexibility',
                  'Improved disaster recovery',
                  'Global accessibility',
                  'Automatic updates and maintenance',
                  'Pay-as-you-go pricing model'
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
            Cloud <span className="text-red-600">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cloud Strategy',
                items: ['Cloud Readiness Assessment', 'Multi-Cloud Strategy', 'Cost-Benefit Analysis', 'Roadmap Development']
              },
              {
                title: 'Migration Services',
                items: ['Application Migration', 'Data Migration', 'Infrastructure Migration', 'Testing & Validation']
              },
              {
                title: 'Cloud Optimization',
                items: ['Performance Tuning', 'Cost Optimization', 'Security Enhancement', 'Monitoring & Management']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      {item}
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
            Ready for the Cloud?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's build your cloud migration strategy together.
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

export default CloudStrategy;