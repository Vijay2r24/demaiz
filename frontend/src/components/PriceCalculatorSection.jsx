import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const PriceCalculatorSection = () => {
  const navigate = useNavigate();

  const calculators = [
    {
      id: 1,
      title: 'Full Home Interior',
      description: 'Know the estimate price for your full home interiors',
      type: 'full-home',
      icon: (
        <svg viewBox="0 0 120 120" className="w-32 h-32">
          {/* Sofa illustration */}
          <rect x="20" y="50" width="80" height="50" rx="8" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="2"/>
          <rect x="30" y="60" width="60" height="30" rx="4" fill="#ffffff" stroke="#e0e0e0" strokeWidth="2"/>
          {/* Red balloon accent */}
          <circle cx="45" cy="40" r="15" fill="#ff6b6b"/>
          <line x1="45" y1="55" x2="45" y2="70" stroke="#ff6b6b" strokeWidth="2"/>
          {/* Side circle */}
          <circle cx="95" cy="65" r="20" fill="#e8e8e8"/>
          <text x="95" y="72" fontSize="24" fill="#c0c0c0" textAnchor="middle" fontWeight="bold">₹</text>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Kitchen',
      description: 'Get an approximate costing for your kitchen interior.',
      type: 'kitchen',
      icon: (
        <svg viewBox="0 0 120 120" className="w-32 h-32">
          {/* Kitchen cabinet */}
          <rect x="30" y="40" width="60" height="60" rx="4" fill="#ffffff" stroke="#e0e0e0" strokeWidth="2"/>
          <line x1="60" y1="40" x2="60" y2="100" stroke="#e0e0e0" strokeWidth="2"/>
          <line x1="30" y1="70" x2="90" y2="70" stroke="#e0e0e0" strokeWidth="2"/>
          {/* Red accent door */}
          <rect x="62" y="42" width="26" height="26" rx="2" fill="#ff6b6b"/>
          {/* Hanging lamp */}
          <line x1="50" y1="10" x2="50" y2="30" stroke="#e0e0e0" strokeWidth="2"/>
          <path d="M 40 30 L 60 30 L 55 38 L 45 38 Z" fill="#ff6b6b"/>
          {/* Side circle */}
          <circle cx="95" cy="65" r="20" fill="#e8e8e8"/>
          <text x="95" y="72" fontSize="24" fill="#c0c0c0" textAnchor="middle" fontWeight="bold">₹</text>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Wardrobe',
      description: 'Our estimate for your dream wardrobe',
      type: 'wardrobe',
      icon: (
        <svg viewBox="0 0 120 120" className="w-32 h-32">
          {/* Wardrobe */}
          <rect x="30" y="30" width="60" height="70" rx="4" fill="#ffffff" stroke="#e0e0e0" strokeWidth="2"/>
          <line x1="60" y1="30" x2="60" y2="100" stroke="#e0e0e0" strokeWidth="2"/>
          {/* Red accent sections */}
          <rect x="48" y="50" width="10" height="20" fill="#ff6b6b"/>
          <rect x="62" y="50" width="10" height="20" fill="#ff6b6b"/>
          {/* Handles */}
          <circle cx="48" cy="60" r="2" fill="#666"/>
          <circle cx="72" cy="60" r="2" fill="#666"/>
          {/* Top lamp */}
          <ellipse cx="60" cy="20" rx="25" ry="8" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="2"/>
          {/* Side circle */}
          <circle cx="95" cy="65" r="20" fill="#e8e8e8"/>
          <text x="95" y="72" fontSize="24" fill="#c0c0c0" textAnchor="middle" fontWeight="bold">₹</text>
        </svg>
      )
    }
  ];

  const handleCalculateClick = (calculator) => {
    // Navigate to respective calculator pages
    if (calculator.type === 'full-home') {
      navigate('/calculator');
    } else if (calculator.type === 'kitchen') {
      navigate('/calculator/kitchen');
    } else if (calculator.type === 'wardrobe') {
      navigate('/calculator/wardrobe');
    }
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get the estimate for your{' '}
              <span className="text-[#ff6b6b]">Wardrobe</span>
            </h2>
            <p className="text-lg text-gray-600">
              Calculate the approximate cost of doing up your home interiors
            </p>
          </div>

          {/* Calculator Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {calculators.map((calculator) => (
              <Card
                key={calculator.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-md bg-white overflow-hidden"
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                    {calculator.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {calculator.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-8 leading-relaxed min-h-[48px]">
                    {calculator.description}
                  </p>

                  {/* Calculate Button */}
                  <Button
                    onClick={() => handleCalculateClick(calculator)}
                    className="w-full bg-[#ff6b6b] hover:bg-[#ff5252] text-white font-bold text-lg py-6 rounded-full group-hover:shadow-lg transition-all duration-300"
                  >
                    CALCULATE
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              Get instant estimates for your dream home interiors • No hidden costs • Free consultation
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceCalculatorSection;