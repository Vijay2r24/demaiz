import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { value: '700+', label: 'Residential Projects' },
    { value: '140+', label: 'Commercial Interiors' },
    { value: '13+', label: 'Years of Experience' },
    { value: '100%', label: 'Positive Feedback' }
  ];

  const features = [
    'Free 3D Design Consultation',
    'Premium Material Selection',
    'Dedicated Project Manager',
    'On-Time Delivery Promise',
    'Post-Installation Support',
    'Transparent Pricing'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c9a84c] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2c2c4e] rounded-2xl p-12 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Why Choose De Maizon?
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Your Vision, Our Passion — Designed to Perfection
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <CheckCircle2 size={24} className="text-[#c9a84c] flex-shrink-0" />
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
