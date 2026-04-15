import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { value: '75,000+', label: 'Homes Delivered' },
    { value: '146', label: 'Quality Checks' },
    { value: '90 Days', label: 'Completion Guarantee' },
    { value: '10 Years', label: 'Warranty' }
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
              <div className="text-4xl md:text-5xl font-bold text-[#ff6b6b] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Why Choose Livspace?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            India's most trusted home interior brand with end-to-end solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle2 size={24} className="text-[#4ade80] flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
