import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ProcessAutomation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Process Audit & <span className="text-red-600">Automation</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            End-to-end process analysis, automation implementation, and continuous improvement to maximize operational efficiency.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Optimize Your <span className="text-red-600">Operations</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Inefficient processes cost time, money, and resources. Our process audit and automation services identify bottlenecks, eliminate waste, and implement intelligent automation to streamline your operations from end to end.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We take a holistic approach, analyzing your current processes, designing optimal workflows, and implementing automation solutions that deliver measurable results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {[
                  '60% improvement in efficiency',
                  'Reduced operational costs',
                  'Improved process visibility',
                  'Enhanced compliance and control',
                  'Faster turnaround times',
                  'Higher employee satisfaction'
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
            Our <span className="text-red-600">Methodology</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Process Audit',
                description: 'Comprehensive analysis of existing workflows and pain points'
              },
              {
                step: '2',
                title: 'Design',
                description: 'Create optimized process flows and automation blueprints'
              },
              {
                step: '3',
                title: 'Implementation',
                description: 'Deploy automation solutions with minimal disruption'
              },
              {
                step: '4',
                title: 'COE Development',
                description: 'Establish Center of Excellence for ongoing improvement'
              }
            ].map((phase) => (
              <div key={phase.step} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's audit your processes and identify automation opportunities.
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

export default ProcessAutomation;