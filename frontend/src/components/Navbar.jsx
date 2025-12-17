import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const servicesMenu = [
    { name: 'Digital Transformation', href: '/services/digital-transformation' },
    { name: 'AI & RPA Implementation', href: '/services/ai-rpa' },
    { name: 'Cloud Strategy & Migration', href: '/services/cloud-strategy' },
    { name: 'Process Audit & Automation', href: '/services/process-automation' }
  ];

  const industriesMenu = [
    { name: 'Enterprise & Corporate', href: '/industries/enterprise' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Financial Services', href: '/industries/financial-services' },
    { name: 'Retail & E-commerce', href: '/industries/retail' },
    { name: 'Education', href: '/industries/education' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Horizontal Logo - Only show after scroll */}
          {isScrolled && (
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-2">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/logo-horizontal.jpg`}
                  alt="Mindwerk Logo" 
                  className="h-12 w-auto"
                />
              </a>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 ${!isScrolled ? 'ml-auto' : ''}`}>
            <a href="/" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-red-600 transition-colors duration-300 font-medium`}>
              Home
            </a>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-red-600 transition-colors duration-300 font-medium flex items-center gap-1`}>
                Services
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {servicesMenu.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-red-600 transition-colors duration-300 font-medium flex items-center gap-1`}>
                Industries
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {industriesMenu.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="/about-us" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-red-600 transition-colors duration-300 font-medium`}>
              About
            </a>
            <a href="/careers" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-red-600 transition-colors duration-300 font-medium`}>
              Join Us
            </a>
            <a href="/#contact" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-red-600 transition-colors duration-300 font-medium`}>
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-red-600 transition-colors`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a href="/" className="block text-gray-700 hover:text-red-600 py-2">Home</a>
            
            {/* Mobile Services */}
            <div>
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-red-600 py-2"
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'services' && (
                <div className="pl-4 space-y-2 mt-2">
                  {servicesMenu.map((item) => (
                    <a key={item.name} href={item.href} className="block text-gray-600 hover:text-red-600 py-1.5 text-sm">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries */}
            <div>
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'industries' ? null : 'industries')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-red-600 py-2"
              >
                Industries
                <ChevronDown size={16} className={`transition-transform ${openDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'industries' && (
                <div className="pl-4 space-y-2 mt-2">
                  {industriesMenu.map((item) => (
                    <a key={item.name} href={item.href} className="block text-gray-600 hover:text-red-600 py-1.5 text-sm">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/about-us" className="block text-gray-700 hover:text-red-600 py-2">About</a>
            <a href="/careers" className="block text-gray-700 hover:text-red-600 py-2">Join Us</a>
            <a href="/#contact" className="block text-gray-700 hover:text-red-600 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;