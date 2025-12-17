import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-red-600">Enterprise</span> & Corporate
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Enterprise-grade solutions for large organizations and corporate environments.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Empowering <span className="text-red-600">Enterprises</span></h2>
          <p className="text-lg text-gray-700 mb-6">We help large enterprises implement ERP systems, enterprise architecture, digital workplace solutions, and business intelligence platforms that streamline operations across global teams.</p>
          <Button onClick={() => window.location.href = '/#contact'} className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">Contact Us</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Enterprise;