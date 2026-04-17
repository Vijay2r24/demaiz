import React from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '../mockData';
import { Card, CardContent } from './ui/card';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            One-stop shop for all things interiors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Be it end-to-end interiors, renovation or modular solutions, we have it all for your home
            or office. With a wide range of furniture & decor, we have your back from start to finish.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#c9a84c] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-gray-900 group-hover:text-[#c9a84c] font-medium transition-colors">
                  <span>Explore</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
