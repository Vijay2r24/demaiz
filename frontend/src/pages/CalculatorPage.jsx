import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';

const CalculatorPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    bhkType: '',
    bhkSize: '',
    roomCounts: {},
    packageType: '',
    name: '',
    phone: '',
    email: '',
    city: ''
  });

  const steps = [
    { number: 1, title: 'BHK TYPE' },
    { number: 2, title: 'ROOMS TO DESIGN' },
    { number: 3, title: 'PACKAGE' },
    { number: 4, title: 'GET QUOTE' }
  ];

  const bhkOptions = [
    { value: '1bhk', label: '1 BHK', sizes: [{ value: 'small', label: 'Small', desc: 'Below 500 sq ft' }, { value: 'large', label: 'Large', desc: 'Above 500 sq ft' }], rooms: ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom'] },
    { value: '2bhk', label: '2 BHK', sizes: [{ value: 'small', label: 'Small', desc: 'Below 800 sq ft' }, { value: 'large', label: 'Large', desc: 'Above 800 sq ft' }], rooms: ['Living Room', 'Master Bedroom', 'Bedroom 2', 'Kitchen', 'Bathroom 1', 'Bathroom 2'] },
    { value: '3bhk', label: '3 BHK', sizes: [{ value: 'small', label: 'Small', desc: 'Below 1200 sq ft' }, { value: 'large', label: 'Large', desc: 'Above 1200 sq ft' }], rooms: ['Living Room', 'Master Bedroom', 'Bedroom 2', 'Bedroom 3', 'Kitchen', 'Dining', 'Bathroom 1', 'Bathroom 2'] },
    { value: '4bhk', label: '4 BHK', sizes: [{ value: 'small', label: 'Small', desc: 'Below 1800 sq ft' }, { value: 'large', label: 'Large', desc: 'Above 1800 sq ft' }], rooms: ['Living Room', 'Master Bedroom', 'Bedroom 2', 'Bedroom 3', 'Bedroom 4', 'Kitchen', 'Dining', 'Bathroom 1', 'Bathroom 2', 'Bathroom 3'] },
    { value: '5bhk', label: '5 BHK+', sizes: [{ value: 'small', label: 'Small', desc: 'Below 2500 sq ft' }, { value: 'large', label: 'Large', desc: 'Above 2500 sq ft' }], rooms: ['Living Room', 'Master Bedroom', 'Bedroom 2', 'Bedroom 3', 'Bedroom 4', 'Bedroom 5', 'Kitchen', 'Dining', 'Bathroom 1', 'Bathroom 2', 'Bathroom 3', 'Study Room'] }
  ];

  const packageOptions = [
    {
      value: 'essential',
      label: 'Essential',
      price: 'Starting ₹4.5L',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
      features: ['Basic Design', 'Standard Materials', '90 Days Completion']
    },
    {
      value: 'premium',
      label: 'Premium',
      price: 'Starting ₹7.5L',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
      features: ['3D Design', 'Premium Materials', '60 Days Completion', 'Smart Home Features']
    },
    {
      value: 'luxury',
      label: 'Luxury',
      price: 'Starting ₹12L',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
      features: ['Luxury Design', 'Designer Materials', '45 Days Completion', 'Full Smart Home', 'Dedicated Designer']
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

  const updateRoomCount = (room, delta) => {
    setFormData(prev => {
      const current = prev.roomCounts[room] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, roomCounts: { ...prev.roomCounts, [room]: next } };
    });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.bhkType !== '' && formData.bhkSize !== '';
      case 2:
        return Object.values(formData.roomCounts).some(v => v > 0);
      case 3:
        return formData.packageType !== '';
      case 4:
        return formData.name && formData.phone;
      default:
        return false;
    }
  };

  const getEstimatedPrice = () => {
    const basePrice = {
      '1bhk': 350000,
      '2bhk': 550000,
      '3bhk': 750000,
      '4bhk': 950000,
      '5bhk': 1200000
    }[formData.bhkType] || 0;

    const packageMultiplier = {
      'essential': 1,
      'premium': 1.5,
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
              <h2 className="text-xl font-bold text-gray-900 mb-1">Select your BHK type</h2>
              <p className="text-sm text-gray-500">
                To know more about this,{' '}
                <a href="#" className="text-[#c9a84c] hover:underline">click here</a>
              </p>
            </div>
            <div className="max-w-md mx-auto space-y-2">
              {bhkOptions.map((option) => {
                const isSelected = formData.bhkType === option.value;
                return (
                  <div key={option.value} className="border rounded-lg overflow-hidden">
                    <div
                      className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all ${
                        isSelected ? 'bg-gray-50 border-b border-gray-200' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setFormData({ ...formData, bhkType: option.value, bhkSize: '' })}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'border-[#c9a84c]' : 'border-gray-300'
                        }`}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>}
                        </div>
                        <span className="text-sm font-medium text-gray-800">{option.label}</span>
                      </div>
                      {isSelected ? <ChevronUp size={15} className="text-gray-400" /> : <ChevronDown size={15} className="text-gray-400" />}
                    </div>
                    {isSelected && (
                      <div className="px-4 py-3 flex gap-2">
                        {option.sizes.map((size) => {
                          const isSizeSelected = formData.bhkSize === size.value;
                          return (
                            <div
                              key={size.value}
                              onClick={() => setFormData({ ...formData, bhkSize: size.value })}
                              className={`flex-1 flex items-center gap-2 px-3 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                isSizeSelected ? 'border-[#c9a84c] bg-[#fdf8ee]' : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className={`w-3 h-3 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                isSizeSelected ? 'border-[#c9a84c]' : 'border-gray-300'
                              }`}>
                                {isSizeSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></div>}
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-gray-900">{size.label}</p>
                                <p className="text-xs text-gray-400">{size.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 2:
        const selectedBhk = bhkOptions.find(b => b.value === formData.bhkType);
        return (
          <div>
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Select the rooms you'd like us to design</h2>
              <p className="text-sm text-gray-500">
                To know more about this,{' '}
                <a href="#" className="text-[#c9a84c] hover:underline">click here</a>
              </p>
            </div>
            <div className="max-w-lg mx-auto divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
              {selectedBhk?.rooms.map((room) => {
                const count = formData.roomCounts[room] || 0;
                return (
                  <div key={room} className="flex items-center justify-between px-5 py-3 bg-white">
                    <span className="text-sm font-medium text-gray-800">{room}</span>
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateRoomCount(room, -1)} disabled={count === 0}
                        className="w-7 h-7 rounded-full bg-[#c9a84c] text-white flex items-center justify-center text-base font-bold disabled:opacity-30 hover:bg-[#b8943d] transition-colors">−</button>
                      <span className="w-4 text-center text-sm font-semibold text-gray-900">{count}</span>
                      <button onClick={() => updateRoomCount(room, 1)}
                        className="w-7 h-7 rounded-full bg-[#c9a84c] text-white flex items-center justify-center text-base font-bold hover:bg-[#b8943d] transition-colors">+</button>
                    </div>
                  </div>
                );
              })}
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
                  <div key={pkg.value}
                    className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${isSelected ? 'border-[#c9a84c] shadow-lg' : 'border-gray-200 hover:border-gray-300 hover:shadow-md'}`}
                    onClick={() => setFormData({ ...formData, packageType: pkg.value })}>
                    <div className="relative h-24 overflow-hidden">
                      <img src={pkg.image} alt={pkg.label} className="w-full h-full object-cover" />
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#c9a84c] flex items-center justify-center shadow">
                          <Check size={12} className="text-white" />
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
              {/* Price box */}
              <div className="bg-gradient-to-br from-[#fdf8ee] to-white rounded-xl p-5 border border-[#c9a84c]/20 flex flex-col items-center justify-center flex-shrink-0 w-44">
                <p className="text-xs text-gray-500 mb-1">Estimated price</p>
                <div className="text-3xl font-bold text-[#c9a84c]">₹{(getEstimatedPrice() / 100000).toFixed(2)}L</div>
                <p className="text-xs text-gray-400 mt-1 text-center">*May vary based on specs</p>
              </div>
              {/* Form */}
              <div className="flex-1 grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="name" className="text-xs font-semibold mb-1 block text-gray-700">Full Name *</Label>
                  <input id="name" type="text"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent outline-none"
                    placeholder="Your full name" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs font-semibold mb-1 block text-gray-700">Phone Number *</Label>
                  <input id="phone" type="tel"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent outline-none"
                    placeholder="Your phone number" value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs font-semibold mb-1 block text-gray-700">Email Address</Label>
                  <input id="email" type="email"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent outline-none"
                    placeholder="Your email" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="city" className="text-xs font-semibold mb-1 block text-gray-700">City</Label>
                  <input id="city" type="text"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent outline-none"
                    placeholder="Your city" value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
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
            {/* Logo */}
            <button onClick={() => navigate('/')} className="flex items-center">
              <img src="/demaiz.jpg" alt="De Maizon" className="h-10 w-auto" />
            </button>

            {/* Step Counter */}
            <span className="text-sm font-medium text-gray-500">{currentStep}/4</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto px-6 pb-5">
          <div className="flex items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                {/* Step */}
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

                {/* Connector line */}
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

export default CalculatorPage;





