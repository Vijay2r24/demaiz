import React from 'react';
import { ArrowRight } from 'lucide-react';
import { designIdeas } from '../mockData';

const DesignInspiration = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Inspiration for home interior designs
            </h2>
            <p className="text-gray-600">
              Give your home a new look with these interior design ideas curated for you
            </p>
          </div>
          <button className="flex items-center gap-2 text-[#ff6b6b] hover:text-[#ff5252] font-semibold transition-colors">
            View All <ArrowRight size={20} />
          </button>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designIdeas.map((idea) => (
            <div
              key={idea.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer h-80 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={idea.image}
                alt={idea.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-md font-semibold text-sm">
                  {idea.category}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                  <ArrowRight size={24} className="text-gray-900" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignInspiration;
