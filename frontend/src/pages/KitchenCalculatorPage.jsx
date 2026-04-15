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
          <rect x="130" y="105" width="12" height="18" fill="#ff6b6b"/>
          <rect x="130" y="128" width="12" height="18" fill="#ff6b6b"/>
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
          <rect x="125" y="115" width="12" height="18" fill="#ff6b6b"/>
          <rect x="125" y="138" width="12" height="18" fill="#ff6b6b"/>
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
          <rect x="138" y="115" width="10" height="18" fill="#ff6b6b"/>
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
          <rect x="120" y="95" width="10" height="18" fill="#ff6b6b"/>
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
          <rect x="120" y="95" width="10" height="18" fill="#ff6b6b"/>
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
          <rect x="138" y="115" width="10" height="18" fill="#ff6b6b"/>
        </svg>
      )
    }
  ];

  const packageOptions = [
    { value: 'essential', label: 'Essential', price: 'Starting ₹1.7L', features: ['Basic Design', 'Standard Materials', '90 Days Completion'] },
    { value: 'premium', label: 'Premium', price: 'Starting ₹2.5L', features: ['3D Design', 'Premium Materials', '60 Days Completion', 'Modular Cabinets'] },
    { value: 'luxury', label: 'Luxury', price: 'Starting ₹4L', features: ['Luxury Design', 'Designer Materials', '45 Days Completion', 'Premium Appliances', 'Smart Features'] }
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
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Select the layout of your kitchen</h2>
              <p className="text-gray-600">
                Want to know more.{' '}
                <a href="#" className="text-[#ff6b6b] hover:underline">Check here</a>
              </p>
            </div>

            <RadioGroup 
              value={formData.kitchenLayout} 
              onValueChange={(value) => setFormData({ ...formData, kitchenLayout: value })}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {kitchenLayouts.map((layout) => (
                  <div
                    key={layout.value}
                    className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group ${
                      formData.kitchenLayout === layout.value
                        ? 'ring-2 ring-[#ff6b6b] shadow-xl scale-105'
                        : 'hover:shadow-lg'
                    }`}
                    onClick={() => setFormData({ ...formData, kitchenLayout: layout.value })}
                  >
                    {/* Radio button at top */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white transition-all ${
                        formData.kitchenLayout === layout.value
                          ? 'border-[#ff6b6b]'
                          : 'border-gray-300 group-hover:border-gray-400'
                      }`}>
                        {formData.kitchenLayout === layout.value && (
                          <div className="w-4 h-4 rounded-full bg-[#ff6b6b]"></div>
                        )}
                      </div>
                    </div>

                    {/* Kitchen layout illustration */}
                    <div className="bg-[#f8f4f0] p-8 pt-16 pb-6">
                      <div className="w-full h-48">
                        {layout.svg}
                      </div>
                    </div>

                    {/* Label */}
                    <div className="bg-white p-4 text-center border-t">
                      <p className="font-semibold text-gray-900">{layout.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Enter your kitchen measurements</h2>
              <p className="text-gray-600">Provide accurate dimensions for precise pricing</p>
            </div>

            <div className="max-w-md mx-auto space-y-6">
              <div>
                <Label htmlFor="length" className="text-sm font-semibold mb-2 block text-gray-700">Length (in feet) *</Label>
                <input
                  id="length"
                  type="number"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent outline-none transition-all text-lg"
                  placeholder="Enter length"
                  value={formData.length}
                  onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="width" className="text-sm font-semibold mb-2 block text-gray-700">Width (in feet) *</Label>
                <input
                  id="width"
                  type="number"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent outline-none transition-all text-lg"
                  placeholder="Enter width"
                  value={formData.width}
                  onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                />
              </div>
              {formData.length && formData.width && (
                <div className="bg-[#fff5f5] rounded-lg p-4 text-center border border-[#ff6b6b]/20">
                  <p className="text-sm text-gray-600 mb-1">Total Area</p>
                  <p className="text-2xl font-bold text-[#ff6b6b]">
                    {(parseFloat(formData.length) * parseFloat(formData.width)).toFixed(1)} sq ft
                  </p>
                </div>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose your package</h2>
              <p className="text-gray-600">Select the package that best fits your needs and budget</p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {packageOptions.map((pkg) => (
                <div
                  key={pkg.value}
                  className={`border-2 rounded-xl p-8 cursor-pointer transition-all ${
                    formData.packageType === pkg.value
                      ? 'border-[#ff6b6b] shadow-xl scale-105 bg-[#fff5f5]'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                  onClick={() => setFormData({ ...formData, packageType: pkg.value })}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.label}</h3>
                    <p className="text-[#ff6b6b] font-semibold text-lg">{pkg.price}</p>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Get your personalized quote</h2>
              <p className="text-gray-600">We'll contact you with detailed pricing and next steps</p>
            </div>

            <div className="max-w-md mx-auto mb-8 bg-gradient-to-br from-[#fff5f5] to-white rounded-2xl p-8 border border-[#ff6b6b]/20">
              <div className="text-center">
                <p className="text-gray-600 mb-2 text-sm">Your estimated price</p>
                <div className="text-5xl font-bold text-[#ff6b6b] mb-2">
                  ₹{(getEstimatedPrice() / 100000).toFixed(2)}L
                </div>
                <p className="text-xs text-gray-500">*Final price may vary based on specifications</p>
              </div>
            </div>

            <div className="max-w-md mx-auto space-y-5">
              <div>
                <Label htmlFor="name" className="text-sm font-semibold mb-2 block text-gray-700">Full Name *</Label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-semibold mb-2 block text-gray-700">Phone Number *</Label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-semibold mb-2 block text-gray-700">Email Address</Label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="city" className="text-sm font-semibold mb-2 block text-gray-700">City</Label>
                <input
                  id="city"
                  type="text"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#ff8e8e] flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-3 border-white"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900 tracking-tight">LIVSPACE</span>
            </button>
            <span className="text-sm font-medium text-gray-500">{currentStep}/4</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-7xl mx-auto px-6 pb-4">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-6 left-0 right-0 h-px bg-gray-200 -z-10">
              <div
                className="h-full bg-gray-900 transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              />
            </div>
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center gap-2 bg-gray-50">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                    currentStep >= step.number
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-400 border-2 border-gray-200'
                  }`}
                >
                  {currentStep > step.number ? <Check size={20} /> : step.number - 1}
                </div>
                <span className={`text-xs font-medium whitespace-nowrap ${
                  currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-12 min-h-[600px]">
          {renderStepContent()}
        </div>
      </main>

      {/* Footer Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-6 shadow-lg">
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
                ? 'bg-[#ff8e9e] hover:bg-[#ff7a8c] text-white shadow-md hover:shadow-lg'
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