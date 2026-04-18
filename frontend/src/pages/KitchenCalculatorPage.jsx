import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { RadioGroup } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';

const KitchenCalculatorPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    kitchenLayout: '',
    length: '',
    width: '',
    packageType: '',
    name: '',
    phone: '',
    email: '',
    city: ''
  });

  const steps = [
    { number: 1, title: 'KITCHEN LAYOUT' },
    { number: 2, title: 'MEASUREMENTS' },
    { number: 3, title: 'PACKAGE' },
    { number: 4, title: 'GET QUOTE' }
  ];

  const kitchenLayouts = [
    { 
      value: 'l-shaped', 
      label: 'L-shaped',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="20" y="20" width="160" height="160" fill="#f8f4f0" stroke="#e0e0e0" strokeWidth="2"/>
          <rect x="35" y="95" width="15" height="75" fill="#d4b5b5"/>
          <rect x="35" y="95" width="75" height="15" fill="#d4b5b5"/>
          <circle cx="80" cy="135" r="6" fill="#5a4a4a"/>
          <circle cx="80" cy="150" r="6" fill="#5a4a4a"/>
          <rect x="55" y="98" width="18" height="10" fill="#e8e8e8" stroke="#999" strokeWidth="1"/>
          <rect x="130" y="105" width="12" height="18" fill="#c9a84c"/>
          <rect x="130" y="128" width="12" height="18" fill="#c9a84c"/>
        </svg>
      )
    },
    { 
      value: 'straight', 
      label: 'Straight',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="20" y="20" width="160" height="160" fill="#f8f4f0" stroke="#e0e0e0" strokeWidth="2"/>
          <rect x="65" y="95" width="70" height="15" fill="#d4b5b5"/>
          <circle cx="85" cy="135" r="6" fill="#5a4a4a"/>
          <circle cx="100" cy="135" r="6" fill="#5a4a4a"/>
          <rect x="105" y="98" width="18" height="10" fill="#e8e8e8" stroke="#999" strokeWidth="1"/>
          <rect x="125" y="115" width="12" height="18" fill="#c9a84c"/>
          <rect x="125" y="138" width="12" height="18" fill="#c9a84c"/>
        </svg>
      )
    },
    { 
      value: 'u-shaped', 
      label: 'U-shaped',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="20" y="20" width="160" height="160" fill="#f8f4f0" stroke="#e0e0e0" strokeWidth="2"/>
          <rect x="35" y="95" width="15" height="75" fill="#d4b5b5"/>
          <rect x="35" y="155" width="115" height="15" fill="#d4b5b5"/>
          <rect x="135" y="95" width="15" height="75" fill="#d4b5b5"/>
          <circle cx="40" cy="135" r="6" fill="#5a4a4a"/>
          <rect x="115" y="158" width="18" height="10" fill="#e8e8e8" stroke="#999" strokeWidth="1"/>
          <rect x="138" y="115" width="10" height="18" fill="#c9a84c"/>
        </svg>
      )
    },
    { 
      value: 'parallel', 
      label: 'Parallel',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="20" y="20" width="160" height="160" fill="#f8f4f0" stroke="#e0e0e0" strokeWidth="2"/>
          <rect x="65" y="75" width="70" height="15" fill="#d4b5b5"/>
          <rect x="65" y="120" width="70" height="15" fill="#d4b5b5"/>
          <circle cx="85" cy="127" r="6" fill="#5a4a4a"/>
          <rect x="105" y="78" width="18" height="10" fill="#e8e8e8" stroke="#999" strokeWidth="1"/>
          <rect x="120" y="95" width="10" height="18" fill="#c9a84c"/>
        </svg>
      )
    },
    { 
      value: 'island', 
      label: 'Island',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="20" y="20" width="160" height="160" fill="#f8f4f0" stroke="#e0e0e0" strokeWidth="2"/>
          <rect x="65" y="75" width="70" height="15" fill="#d4b5b5"/>
          <rect x="75" y="110" width="50" height="30" fill="#d4b5b5"/>
          <circle cx="95" cy="120" r="6" fill="#5a4a4a"/>
          <rect x="105" y="78" width="18" height="10" fill="#e8e8e8" stroke="#999" strokeWidth="1"/>
          <rect x="120" y="95" width="10" height="18" fill="#c9a84c"/>
        </svg>
      )
    },
    { 
      value: 'g-shaped', 
      label: 'G-shaped',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="20" y="20" width="160" height="160" fill="#f8f4f0" stroke="#e0e0e0" strokeWidth="2"/>
          <rect x="35" y="95" width="15" height="75" fill="#d4b5b5"/>
          <rect x="35" y="155" width="115" height="15" fill="#d4b5b5"/>
          <rect x="135" y="95" width="15" height="75" fill="#d4b5b5"/>
          <rect x="95" y="95" width="40" height="15" fill="#d4b5b5"/>
          <circle cx="40" cy="135" r="6" fill="#5a4a4a"/>
          <rect x="115" y="158" width="18" height="10" fill="#e8e8e8" stroke="#999" strokeWidth="1"/>
          <rect x="138" y="115" width="10" height="18" fill="#c9a84c"/>
        </svg>
      )
    }
  ];

  const packageOptions = [
    {
      value: 'essential',
      label: 'Essential',
      price: 'Starting ₹1.7L',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
      features: ['Basic Design', 'Standard Materials', '90 Days Completion']
    },
    {
      value: 'premium',
      label: 'Premium',
      price: 'Starting ₹2.5L',
      image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80',
      features: ['3D Design', 'Premium Materials', '60 Days Completion', 'Modular Cabinets']
    },
    {
      value: 'luxury',
      label: 'Luxury',
      price: 'Starting ₹4L',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80',
      features: ['Luxury Design', 'Designer Materials', '45 Days Completion', 'Premium Appliances', 'Smart Features']
    }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Form submitted:', formData);
      alert('Quote request submitted successfully!');
      navigate('/');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.kitchenLayout !== '';
      case 2:
        return formData.length && formData.width;
      case 3:
        return formData.packageType !== '';
      case 4:
        return formData.name && formData.phone;
      default:
        return false;
    }
  };

  const getEstimatedPrice = () => {
    const area = (parseFloat(formData.length) || 0) * (parseFloat(formData.width) || 0);
    const basePrice = area * 15000;
    const packageMultiplier = {
      'essential': 1,
      'premium': 1.5,
      'luxury': 2.3
    }[formData.packageType] || 1;
    return Math.round(basePrice * packageMultiplier);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Select the layout of your kitchen</h2>
              <p className="text-sm text-gray-500">
                Want to know more.{' '}
                <a href="#" className="text-[#c9a84c] hover:underline">Check here</a>
              </p>
            </div>
            <RadioGroup value={formData.kitchenLayout} onValueChange={(value) => setFormData({ ...formData, kitchenLayout: value })}>
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
                {kitchenLayouts.map((layout) => (
                  <div key={layout.value}
                    className={`relative rounded-lg overflow-hidden cursor-pointer transition-all group ${
                      formData.kitchenLayout === layout.value ? 'ring-2 ring-[#c9a84c] shadow-md' : 'hover:shadow-md'
                    }`}
                    onClick={() => setFormData({ ...formData, kitchenLayout: layout.value })}>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center bg-white ${
                        formData.kitchenLayout === layout.value ? 'border-[#c9a84c]' : 'border-gray-300'
                      }`}>
                        {formData.kitchenLayout === layout.value && <div className="w-2.5 h-2.5 rounded-full bg-[#c9a84c]"></div>}
                      </div>
                    </div>
                    <div className="bg-[#f8f4f0] p-3 pt-9">
                      <div className="w-full h-20">{layout.svg}</div>
                    </div>
                    <div className="bg-white py-2 text-center border-t">
                      <p className="text-xs font-semibold text-gray-900">{layout.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        );

      case 2:
        return (
          <div>
            <div className="text-center mb-3">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Now review the measurements for accuracy</h2>
              <p className="text-sm text-gray-500">Standard size has been set for your convenience</p>
            </div>

            <div className="max-w-xl mx-auto">
              {/* Layout diagram */}
              <div className="bg-[#fdf0f0] rounded-xl p-6 mb-3 flex items-center justify-center">
                {formData.kitchenLayout === 'straight' && (
                  <svg viewBox="0 0 300 120" className="w-64 h-28">
                    <rect x="40" y="40" width="220" height="40" fill="#e8c8c8" stroke="#c9a84c" strokeWidth="1.5" rx="2"/>
                    <text x="150" y="65" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#555">A</text>
                    <line x1="40" y1="90" x2="260" y2="90" stroke="#999" strokeWidth="1" strokeDasharray="4"/>
                    <text x="150" y="105" textAnchor="middle" fontSize="10" fill="#888">length</text>
                  </svg>
                )}
                {formData.kitchenLayout === 'parallel' && (
                  <svg viewBox="0 0 300 160" className="w-64 h-36">
                    <rect x="40" y="30" width="220" height="30" fill="#e8c8c8" stroke="#c9a84c" strokeWidth="1.5" rx="2"/>
                    <text x="150" y="50" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#555">A</text>
                    <rect x="40" y="100" width="220" height="30" fill="#e8c8c8" stroke="#c9a84c" strokeWidth="1.5" rx="2"/>
                    <text x="150" y="120" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#555">B</text>
                  </svg>
                )}
                {(formData.kitchenLayout === 'l-shaped' || !formData.kitchenLayout) && (
                  <svg viewBox="0 0 300 200" className="w-56 h-44">
                    <rect x="80" y="30" width="140" height="40" fill="#e8c8c8" stroke="#c9a84c" strokeWidth="1.5" rx="2"/>
                    <text x="150" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#555">B</text>
                    <rect x="80" y="70" width="40" height="90" fill="#e8c8c8" stroke="#c9a84c" strokeWidth="1.5" rx="2"/>
                    <text x="100" y="120" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#555">A</text>
                  </svg>
                )}
                {formData.kitchenLayout === 'u-shaped' && (
                  <svg viewBox="0 0 300 200" className="w-56 h-44">
                    <rect x="50" y="50" width="30" height="100" fill="#e8c8c8" stroke="#c9a84c" strokeWidth="1.5" rx="2"/>
                    <text x="65" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#555">A</text>
                    <rect x="80" y="120" width="140" height="30" fill="#e8c8c8" stroke="#c9a84c" strokeWidth="1.5" rx="2"/>
                    <text x="150" y="140" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#555">C</text>
                    <rect x="220" y="50" width="30" height="100" fill="#e8c8c8" stroke="#c9a84c" strokeWidth="1.5" rx="2"/>
                    <text x="235" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#555">B</text>
                  </svg>
                )}
                {(formData.kitchenLayout === 'island' || formData.kitchenLayout === 'g-shaped') && (
                  <svg viewBox="0 0 300 200" className="w-56 h-44">
                    <rect x="40" y="30" width="220" height="30" fill="#e8c8c8" stroke="#c9a84c" strokeWidth="1.5" rx="2"/>
                    <text x="150" y="50" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#555">A</text>
                    <rect x="90" y="110" width="120" height="30" fill="#e8c8c8" stroke="#c9a84c" strokeWidth="1.5" rx="2"/>
                    <text x="150" y="130" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#555">B</text>
                  </svg>
                )}
              </div>

              {/* Standard size notice */}
              <div className="bg-[#fdf8ee] border border-[#c9a84c]/30 rounded-lg px-4 py-2 text-center mb-4">
                <p className="text-xs text-[#b8943d]">Standard size has been set for your convenience</p>
              </div>

              {/* Dimension dropdowns */}
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="w-6 text-sm font-bold text-gray-700">A</span>
                  <select
                    value={formData.length}
                    onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a84c] outline-none bg-white"
                  >
                    <option value="">Select length</option>
                    {[3,4,5,6,7,8,9,10,11,12].map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                  <span className="text-sm text-gray-500 w-6">ft.</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-6 text-sm font-bold text-gray-700">B</span>
                  <select
                    value={formData.width}
                    onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a84c] outline-none bg-white"
                  >
                    <option value="">Select width</option>
                    {[3,4,5,6,7,8,9,10,11,12].map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                  <span className="text-sm text-gray-500 w-6">ft.</span>
                </div>

                {formData.length && formData.width && (
                  <div className="bg-[#fdf8ee] rounded-lg p-3 text-center border border-[#c9a84c]/20 mt-2">
                    <p className="text-xs text-gray-500">Total Area</p>
                    <p className="text-lg font-bold text-[#c9a84c]">
                      {(parseFloat(formData.length) * parseFloat(formData.width)).toFixed(1)} sq ft
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Choose your package</h2>
              <p className="text-sm text-gray-500">Select the package that best fits your needs and budget</p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
              {packageOptions.map((pkg) => {
                const isSelected = formData.packageType === pkg.value;
                return (
                  <div
                    key={pkg.value}
                    className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${
                      isSelected
                        ? 'border-[#c9a84c] shadow-lg'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                    onClick={() => setFormData({ ...formData, packageType: pkg.value })}
                  >
                    <div className="relative h-24 overflow-hidden">
                      <img src={pkg.image} alt={pkg.label} className="w-full h-full object-cover" />
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#c9a84c] flex items-center justify-center shadow">
                          <Check size={14} className="text-white" />
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className={`p-2 ${isSelected ? 'bg-[#fdf8ee]' : 'bg-white'}`}>
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-bold text-gray-900">{pkg.label}</h3>
                        <span className="text-xs font-semibold text-[#c9a84c]">{pkg.price}</span>
                      </div>
                      <ul className="space-y-1">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                            <Check size={11} className="text-[#c9a84c] flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Get your personalized quote</h2>
              <p className="text-sm text-gray-500">We'll contact you with detailed pricing and next steps</p>
            </div>
            <div className="max-w-2xl mx-auto flex gap-6">
              <div className="bg-gradient-to-br from-[#fdf8ee] to-white rounded-xl p-5 border border-[#c9a84c]/20 flex flex-col items-center justify-center flex-shrink-0 w-44">
                <p className="text-xs text-gray-500 mb-1">Estimated price</p>
                <div className="text-3xl font-bold text-[#c9a84c]">₹{(getEstimatedPrice() / 100000).toFixed(2)}L</div>
                <p className="text-xs text-gray-400 mt-1 text-center">*May vary based on specs</p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="name" className="text-xs font-semibold mb-1 block text-gray-700">Full Name *</Label>
                  <input id="name" type="text" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a84c] outline-none" placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs font-semibold mb-1 block text-gray-700">Phone Number *</Label>
                  <input id="phone" type="tel" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a84c] outline-none" placeholder="Your phone number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs font-semibold mb-1 block text-gray-700">Email Address</Label>
                  <input id="email" type="email" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a84c] outline-none" placeholder="Your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="city" className="text-xs font-semibold mb-1 block text-gray-700">City</Label>
                  <input id="city" type="text" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a84c] outline-none" placeholder="Your city" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b flex-shrink-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center">
              <img src="/demaiz.jpg" alt="De Maizon" className="h-10 w-auto" />
            </button>
            <span className="text-sm font-medium text-gray-500">{currentStep}/4</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto px-6 pb-5">
          <div className="flex items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm ${
                      currentStep > step.number
                        ? 'bg-[#c9a84c] text-white'
                        : currentStep === step.number
                        ? 'bg-[#1a1a2e] text-white ring-4 ring-[#1a1a2e]/10'
                        : 'bg-white text-gray-400 border-2 border-gray-200'
                    }`}
                  >
                    {currentStep > step.number ? <Check size={16} /> : step.number}
                  </div>
                  <span className={`text-[10px] font-semibold whitespace-nowrap tracking-wide ${
                    currentStep >= step.number ? 'text-gray-800' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 mx-2 mb-5 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full bg-[#c9a84c] transition-all duration-500"
                      style={{ width: currentStep > step.number ? '100%' : '0%' }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-6 h-full flex items-center justify-center">
          <div className="w-full">
            {renderStepContent()}
          </div>
        </div>
      </main>

      {/* Footer Actions */}
      <div className="bg-white border-t px-6 py-4 shadow-lg flex-shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="text-gray-400 hover:text-gray-600 font-medium text-lg disabled:opacity-30"
          >
            BACK
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`px-12 py-6 rounded-full font-bold text-lg transition-all ${
              canProceed()
                ? 'bg-[#c9a84c] hover:bg-[#b8943d] text-white shadow-md hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentStep === 4 ? 'GET QUOTE' : 'NEXT'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KitchenCalculatorPage;








