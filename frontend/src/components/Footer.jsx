import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img 
                src={`${process.env.PUBLIC_URL}/images/logo-main.png`}
                alt="Mindwerk Logo" 
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Dynamic IT consulting and digital transformation partner helping organizations achieve technological excellence through AI, RPA, and cloud solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group">
                <Facebook size={20} className="text-white/70 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group">
                <Twitter size={20} className="text-white/70 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group">
                <Linkedin size={20} className="text-white/70 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group">
                <Instagram size={20} className="text-white/70 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-white/70 hover:text-red-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#services" className="text-white/70 hover:text-red-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#industries" className="text-white/70 hover:text-red-600 transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-white/70 hover:text-red-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/careers" className="text-white/70 hover:text-red-600 transition-colors">
                  Join Us
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-white/70 hover:text-red-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-red-600 mt-1" />
                <span className="text-white/70">nilanjan@mindwerk.in</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-red-600 mt-1" />
                <span className="text-white/70">+91 9830429608</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Location</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">India Office</p>
                  <p className="text-white/70 text-sm">Calcutta, India</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Uzbekistan Office</p>
                  <p className="text-white/70 text-sm">Ferghana, Uzbekistan</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 Mindwerk. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-red-600 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-red-600 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-red-600 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;