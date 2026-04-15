import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader } from './ui/dialog';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';

const PriceCalculatorModal = ({ isOpen, onClose, calculatorType }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    bhkType: '',
    rooms: [],
    packageType: '',
    city: '',
    name: '',
    phone: '',
    email: ''
  });
  const [expandedBhk, setExpandedBhk] = useState(null);

  const steps = [
    { number: 1, title: 'BHK TYPE' },
    { number: 2, title: 'ROOMS TO DESIGN' },
    { number: 3, title: 'PACKAGE' },
    { number: 4, title: 'GET QUOTE' }
  ];

  const bhkOptions = [
    { value: '1bhk', label: '1 BHK', rooms: ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom'] },
    { value: '2bhk', label: '2 BHK', rooms: ['Living Room', 'Master Bedroom', 'Bedroom 2', 'Kitchen', 'Bathroom 1', 'Bathroom 2'] },
    { value: '3bhk', label: '3 BHK', rooms: ['Living Room', 'Master Bedroom', 'Bedroom 2', 'Bedroom 3', 'Kitchen', 'Dining', 'Bathroom 1', 'Bathroom 2'] },
    { value: '4bhk', label: '4 BHK', rooms: ['Living Room', 'Master Bedroom', 'Bedroom 2', 'Bedroom 3', 'Bedroom 4', 'Kitchen', 'Dining', 'Bathroom 1', 'Bathroom 2', 'Bathroom 3'] }
  ];

  const packageOptions = [
    { value: 'essential', label: 'Essential', price: 'Starting ₹4.5L', features: ['Basic Design', 'Standard Materials', '90 Days Completion'] },
    { value: 'premium', label: 'Premium', price: 'Starting ₹7.5L', features: ['3D Design', 'Premium Materials', '60 Days Completion', 'Smart Home Features'] },
    { value: 'luxury', label: 'Luxury', price: 'Starting ₹12L', features: ['Luxury Design', 'Designer Materials', '45 Days Completion', 'Full Smart Home', 'Dedicated Designer'] }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form
      console.log('Form submitted:', formData);
      onClose();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleRoom = (room) => {
    setFormData(prev => ({
      ...prev,
      rooms: prev.rooms.includes(room)
        ? prev.rooms.filter(r => r !== room)
        : [...prev.rooms, room]
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.bhkType !== '';
      case 2:
        return formData.rooms.length > 0;
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
      '4bhk': 950000
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
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Select your BHK type</h2>
              <p className="text-gray-600">
                To know more about this,{' '}
                <a href="#" className="text-[#ff6b6b] hover:underline">click here</a>
              </p>
            </div>

            <RadioGroup value={formData.bhkType} onValueChange={(value) => setFormData({ ...formData, bhkType: value })}>
              <div className="space-y-4">
                {bhkOptions.map((option) => (
                  <div key={option.value} className="border rounded-lg overflow-hidden bg-white">
                    <div
                      className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => setExpandedBhk(expandedBhk === option.value ? null : option.value)}
                    >
                      <div className="flex items-center gap-4">
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value} className="text-xl font-medium cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                      {expandedBhk === option.value ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    {expandedBhk === option.value && (
                      <div className="px-6 pb-6 pt-2 border-t bg-gray-50">
                        <p className="text-sm text-gray-600 mb-3">Typical rooms in {option.label}:</p>
                        <div className="flex flex-wrap gap-2">
                          {option.rooms.map((room) => (
                            <span key={room} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border">
                              {room}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        );

      case 2:
        const selectedBhk = bhkOptions.find(b => b.value === formData.bhkType);
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Select rooms to design</h2>
              <p className="text-gray-600">Choose which rooms you want to include in your interior design</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedBhk?.rooms.map((room) => (
                <div
                  key={room}
                  className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.rooms.includes(room)
                      ? 'border-[#ff6b6b] bg-[#fff5f5]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => toggleRoom(room)}
                >
                  <Checkbox
                    checked={formData.rooms.includes(room)}
                    onCheckedChange={() => toggleRoom(room)}
                  />
                  <Label className="cursor-pointer font-medium flex-1">{room}</Label>
                  {formData.rooms.includes(room) && <Check className="text-[#ff6b6b]" size={20} />}
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose your package</h2>
              <p className="text-gray-600">Select the package that best fits your needs</p>
            </div>

            <RadioGroup value={formData.packageType} onValueChange={(value) => setFormData({ ...formData, packageType: value })}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {packageOptions.map((pkg) => (
                  <div
                    key={pkg.value}
                    className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                      formData.packageType === pkg.value
                        ? 'border-[#ff6b6b] shadow-lg scale-105'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                    onClick={() => setFormData({ ...formData, packageType: pkg.value })}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.label}</h3>
                        <p className="text-[#ff6b6b] font-semibold">{pkg.price}</p>
                      </div>
                      <RadioGroupItem value={pkg.value} id={pkg.value} />
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Get your quote</h2>
              <p className="text-gray-600">Fill in your details to receive your personalized quote</p>
            </div>

            <div className="bg-gradient-to-br from-[#fff5f5] to-white rounded-xl p-8 mb-6">
              <div className="text-center">
                <p className="text-gray-600 mb-2">Your estimated price</p>
                <div className="text-5xl font-bold text-[#ff6b6b] mb-2">
                  ₹{(getEstimatedPrice() / 100000).toFixed(2)}L
                </div>
                <p className="text-sm text-gray-500">*Prices may vary based on final specifications</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium mb-2 block">Full Name *</Label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent outline-none"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium mb-2 block">Phone Number *</Label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent outline-none"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium mb-2 block">Email Address</Label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent outline-none"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="city" className="text-sm font-medium mb-2 block">City</Label>
                <input
                  id="city"
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent outline-none"
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="border-b sticky top-0 bg-white z-10 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#ff8e8e] flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-3 border-white"></div>
              </div>
              <span className="text-xl font-bold">LIVSPACE</span>
            </div>
            <button onClick={onClose} className="hover:bg-gray-100 rounded-full p-2 transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 -z-10">
                <div
                  className="h-full bg-[#ff6b6b] transition-all duration-300"
                  style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                />
              </div>

              {/* Steps */}
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                      currentStep >= step.number
                        ? 'bg-[#ff6b6b] text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {currentStep > step.number ? <Check size={24} /> : step.number}
                  </div>
                  <span className={`text-xs font-medium whitespace-nowrap ${
                    currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-right mt-2">
              <span className="text-sm font-medium text-gray-500">{currentStep}/4</span>
            </div>
          </div>
        </DialogHeader>

        {/* Step Content */}
        <div className="p-8">
          {renderStepContent()}
        </div>

        {/* Footer Actions */}
        <div className="border-t p-6 flex items-center justify-between sticky bottom-0 bg-white">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="text-gray-500 hover:text-gray-700"
          >
            BACK
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`px-8 py-6 rounded-full font-bold text-lg ${
              canProceed()
                ? 'bg-[#ff6b6b] hover:bg-[#ff5252] text-white'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentStep === 4 ? 'GET QUOTE' : 'NEXT'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PriceCalculatorModal;