import React, { useState } from 'react';
import { portfolioItems } from '../data/mock';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const maxIndex = Math.ceil(portfolioItems.length / itemsPerPage) - 1;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const displayedItems = portfolioItems.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section id="success-stories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-black">Success </span>
            <span className="text-red-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real-world results from our digital transformation and technology implementation projects
          </p>
        </div>

        <div className="relative">
          {/* Two Cards Side by Side */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-6 hover:border-red-600 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-xl font-bold text-red-600 mb-1">
                  {item.title}
                </h3>
                
                {item.subtitle && (
                  <h4 className="text-base font-semibold text-gray-800 mb-3">
                    {item.subtitle}
                  </h4>
                )}
                
                {item.challenge && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Challenge:</p>
                    <p className="text-sm text-gray-700">{item.challenge}</p>
                  </div>
                )}

                {item.solution && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Solution:</p>
                    <p className="text-sm text-gray-700">{item.solution}</p>
                  </div>
                )}

                {/* Key Results */}
                {item.keyResults && (
                  <div className="bg-red-50 border-l-4 border-red-600 p-3 mb-3">
                    <p className="text-xs font-semibold text-red-600 mb-2">Key Results:</p>
                    <ul className="space-y-1">
                      {item.keyResults.map((result, index) => (
                        <li key={index} className="text-xs text-gray-800 flex items-center">
                          <span className="text-red-600 mr-2">•</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-3">
                  <p className="text-xs font-semibold text-gray-600 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-red-600 text-red-600 px-2 py-0.5 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="bg-red-600 hover:bg-red-700 text-white group w-full py-2 text-sm mt-auto">
                  Know More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </div>
            ))}
          </div>

          {/* Navigation */}
          {portfolioItems.length > 2 && (
            <div className="flex justify-center items-center space-x-4">
              <Button
                onClick={prevProject}
                variant="outline"
                className="border-gray-300 text-black hover:bg-red-600 hover:text-white hover:border-red-600 rounded-full w-12 h-12 p-0"
              >
                <ChevronLeft size={24} />
              </Button>
              
              <div className="flex space-x-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-red-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextProject}
                variant="outline"
                className="border-gray-300 text-black hover:bg-red-600 hover:text-white hover:border-red-600 rounded-full w-12 h-12 p-0"
              >
                <ChevronRight size={24} />
              </Button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;