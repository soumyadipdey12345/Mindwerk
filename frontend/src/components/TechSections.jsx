import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const TechSections = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    {
      id: 0,
      title: 'Navigate Complex Technology Landscapes with Confidence',
      description: 'Dynamic IT consulting and digital transformation partner helping organizations achieve technological excellence through AI, RPA, and cloud solutions.',
      highlights: [
        '5+ Years of Excellence (Since 2020)',
        'Fortune 500 Experience',
        'Cutting-edge AI & RPA Solutions'
      ],
      image: `${process.env.PUBLIC_URL}/images/hero-slide-1.jpeg`,
      darkOverlay: true
    },
    {
      id: 1,
      title: 'AI & Agentic AI',
      description: 'Harness the power of artificial intelligence and autonomous agents to transform your business operations. Our AI solutions enable intelligent decision-making, automation, and predictive analytics that drive innovation and efficiency.',
      image: `${process.env.PUBLIC_URL}/images/hero-slide-2.jpeg`,
      darkOverlay: true
    },
    {
      id: 2,
      title: 'IoT & Industry 4.0',
      description: 'Connect, monitor, and optimize your industrial operations with cutting-edge IoT solutions and Industry 4.0 technologies. Transform your manufacturing and production processes with smart sensors, real-time analytics, and automated systems.',
      image: `${process.env.PUBLIC_URL}/images/hero-slide-3.jpeg`,
      darkOverlay: true
    },
    {
      id: 3,
      title: 'Business Consulting & Digital Transformation',
      description: 'Navigate the digital landscape with confidence through our strategic consulting services. We help businesses reimagine their operations, implement digital solutions, and achieve sustainable growth in the modern economy.',
      image: `${process.env.PUBLIC_URL}/images/hero-slide-4.jpeg`,
      darkOverlay: true
    },
    {
      id: 4,
      title: 'Cloud Computing & DevOps',
      description: 'Scale your infrastructure seamlessly with our cloud computing and DevOps expertise. From cloud migration to continuous integration and deployment, we build robust, scalable solutions that keep your business running at peak performance.',
      image: `${process.env.PUBLIC_URL}/images/hero-slide-5.jpeg`,
      darkOverlay: false
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const currentSection = sections[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-[10vh]">
      {/* Logo at Top Left on Desktop, Center on Mobile */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 md:left-8 md:transform-none z-30">
        <img 
          src={`${process.env.PUBLIC_URL}/images/logo-main.png`}
          alt="Mindwerk Logo" 
          className="h-32 md:h-40 w-auto"
        />
      </div>

      {/* Background Image with Transition */}
      <div className="absolute inset-0 transition-opacity duration-700">
        <img
          src={currentSection.image}
          alt={currentSection.title}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        {currentSection.darkOverlay ? (
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-red-900/30"></div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-red-50/30"></div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className={`text-center transition-all duration-500 ${
          currentSection.darkOverlay ? 'text-white' : 'text-black'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-2xl">
            {currentSection.title.split('&').map((part, i) => (
              <span key={i}>
                {i > 0 && <span className="text-red-600"> & </span>}
                {part}
              </span>
            ))}
          </h2>

          <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto drop-shadow-lg">
            {currentSection.description}
          </p>

          {/* Highlights Section */}
          {currentSection.highlights && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {currentSection.highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20 hover:border-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  <p className="text-white font-semibold text-center">{highlight}</p>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => window.location.href = '#services'}
              className={`px-8 py-6 text-lg shadow-2xl ${
                currentSection.darkOverlay
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              Learn More
            </Button>
            <Button
              onClick={() => window.location.href = '#contact'}
              className={`px-8 py-6 text-lg shadow-2xl ${
                currentSection.darkOverlay
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              Get Started
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              onClick={prevSlide}
              variant="outline"
              className={`rounded-full w-12 h-12 p-0 shadow-2xl ${
                currentSection.darkOverlay
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              <ChevronLeft size={24} />
            </Button>
            
            <div className="flex space-x-2">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-red-600 w-8 h-3' 
                      : currentSection.darkOverlay 
                        ? 'bg-white/50 w-3 h-3' 
                        : 'bg-black/50 w-3 h-3'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              className={`rounded-full w-12 h-12 p-0 shadow-2xl ${
                currentSection.darkOverlay
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSections;
