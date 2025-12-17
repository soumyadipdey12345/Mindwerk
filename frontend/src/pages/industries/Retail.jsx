import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const Retail = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-red-600">Retail & E-commerce</span> Solutions
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Omnichannel experiences and digital commerce platforms for modern retail.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Modern <span className="text-red-600">Retail</span></h2>
          <p className="text-lg text-gray-700 mb-6">We build e-commerce platforms, inventory management systems, customer analytics, and personalization engines that drive sales and enhance customer experiences across all channels.</p>
          <Button onClick={() => window.location.href = '/#contact'} className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">Contact Us</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Retail;