import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';

const WardrobeCalculatorPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    wardrobeType: '',
    length: '',
    height: '',
    packageType: '',
    name: '',
    phone: '',
    email: '',
    city: ''
  });

  const steps = [
    { number: 1, title: 'WARDROBE TYPE' },
    { number: 2, title: 'MEASUREMENTS' },
    { number: 3, title: 'PACKAGE' },
    { number: 4, title: 'GET QUOTE' }
  ];

  const wardrobeTypes = [
    { value: 'sliding', label: 'Sliding Door Wardrobe', description: 'Space-saving design with smooth sliding doors' },
    { value: 'hinged', label: 'Hinged Door Wardrobe', description: 'Classic design with full access to interiors' },
    { value: 'walk-in', label: 'Walk-in Wardrobe', description: 'Luxurious space for your entire collection' },
    { value: 'open', label: 'Open Wardrobe', description: 'Modern minimalist design without doors' }
  ];

  const packageOptions = [
    {
      value: 'essential',
      label: 'Essential',
      price: 'Starting ₹45K',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80',
      features: ['Basic Design', 'Standard Materials', 'Basic Accessories']
    },
    {
      value: 'premium',
      label: 'Premium',
      price: 'Starting ₹75K',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      features: ['3D Design', 'Premium Materials', 'Soft-Close Hinges', 'LED Lighting']
    },
    {
      value: 'luxury',
      label: 'Luxury',
      price: 'Starting ₹1.2L',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80',
      features: ['Luxury Design', 'Designer Materials', 'Smart Features', 'Premium Accessories', 'Custom Interiors']
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
        return formData.wardrobeType !== '';
      case 2:
        return formData.length && formData.height;
      case 3:
        return formData.packageType !== '';
      case 4:
        return formData.name && formData.phone;
      default:
        return false;
    }
  };

  const getEstimatedPrice = () => {
    const area = (parseFloat(formData.length) || 0) * (parseFloat(formData.height) || 0);
    const basePrice = area * 8000;
    const packageMultiplier = {
      'essential': 1,
      'premium': 1.6,
      'luxury': 2.5
    }[formData.packageType] || 1;
    return Math.round(basePrice * packageMultiplier);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Select your wardrobe type</h2>
              <p className="text-sm text-gray-500">Choose the style that best fits your space and needs</p>
            </div>
            <div className="max-w-lg mx-auto space-y-2">
              {wardrobeTypes.map((type) => (
                <div
                  key={type.value}
                  className={`flex items-center gap-3 px-4 py-3 border rounded-lg cursor-pointer transition-all ${
                    formData.wardrobeType === type.value
                      ? 'border-[#c9a84c] bg-[#fdf8ee]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setFormData({ ...formData, wardrobeType: type.value })}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    formData.wardrobeType === type.value ? 'border-[#c9a84c]' : 'border-gray-300'
                  }`}>
                    {formData.wardrobeType === type.value && (
                      <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900">{type.label}</h3>
                    <p className="text-xs text-gray-500">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Enter your wardrobe measurements</h2>
              <p className="text-sm text-gray-500">Provide accurate dimensions for precise pricing</p>
            </div>
            <div className="max-w-sm mx-auto space-y-3">
              <div>
                <Label htmlFor="length" className="text-xs font-semibold mb-1 block text-gray-700">Length (in feet) *</Label>
                <input id="length" type="number"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a84c] outline-none"
                  placeholder="Enter length" value={formData.length}
                  onChange={(e) => setFormData({ ...formData, length: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="height" className="text-xs font-semibold mb-1 block text-gray-700">Height (in feet) *</Label>
                <input id="height" type="number"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a84c] outline-none"
                  placeholder="Enter height" value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })} />
              </div>
              {formData.length && formData.height && (
                <div className="bg-[#fdf8ee] rounded-lg p-3 text-center border border-[#c9a84c]/20">
                  <p className="text-xs text-gray-500 mb-1">Total Area</p>
                  <p className="text-xl font-bold text-[#c9a84c]">
                    {(parseFloat(formData.length) * parseFloat(formData.height)).toFixed(1)} sq ft
                  </p>
                </div>
              )}
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
                      <div className="flex items-center justify-between mb-3">
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
      <header className="bg-white border-b flex-shrink-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center">
              <img src="/demaiz.jpg" alt="De Maizon" className="h-10 w-auto" />
            </button>
            <span className="text-sm font-medium text-gray-500">{currentStep}/4</span>
          </div>
        </div>

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

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-6 h-full flex items-center justify-center">
          <div className="w-full">
            {renderStepContent()}
          </div>
        </div>
      </main>

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

export default WardrobeCalculatorPage;








