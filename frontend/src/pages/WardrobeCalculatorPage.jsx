import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';

const WardrobeCalculatorPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    length: '',
    wardrobeType: '',
    finish: '',
    material: '',
    accessories: [],
    name: '',
    phone: '',
    email: '',
    city: ''
  });

  const steps = [
    { number: 1, title: 'LENGTH' },
    { number: 2, title: 'TYPE' },
    { number: 3, title: 'FINISH' },
    { number: 4, title: 'MATERIAL' },
    { number: 5, title: 'ACCESSORIES' },
    { number: 6, title: 'GET QUOTE' }
  ];

  const lengthOptions = [
    { value: '4', label: '4 feet', desc: 'Compact wardrobe', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
    { value: '6', label: '6 feet', desc: 'Standard wardrobe', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80' },
    { value: '8', label: '8 feet', desc: 'Large wardrobe', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=80' },
    { value: '10', label: '10 feet+', desc: 'Walk-in wardrobe', image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&q=80' },
  ];

  const wardrobeTypes = [
    { value: 'sliding', label: 'Sliding', desc: 'Movable doors that slide horizontally along a metal rail and save floor space.', tagline: 'Make a style statement even in a compact space.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80' },
    { value: 'hinged', label: 'Hinged', desc: 'Classic doors that swing open for full access to the wardrobe interior.', tagline: 'Timeless design with complete accessibility.', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80' },
    { value: 'walk-in', label: 'Walk-in', desc: 'A dedicated room-like space with open shelving and hanging areas.', tagline: 'Luxurious space for your entire collection.', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&q=80' },
    { value: 'open', label: 'Open', desc: 'Minimalist design with no doors, showcasing your wardrobe contents.', tagline: 'Modern and accessible storage solution.', image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&q=80' },
  ];

  const finishOptions = [
    { value: 'matte', label: 'Matte', desc: 'Smooth non-reflective surface', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80' },
    { value: 'gloss', label: 'High Gloss', desc: 'Shiny reflective premium finish', image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&q=80' },
    { value: 'wood', label: 'Wood Grain', desc: 'Natural wood texture look', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80' },
    { value: 'lacquer', label: 'Lacquer', desc: 'Durable hard-wearing finish', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80' },
  ];

  const materialOptions = [
    { value: 'plywood', label: 'Plywood', desc: 'Strong & durable, best for longevity', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
    { value: 'mdf', label: 'MDF', desc: 'Smooth finish, great for painted looks', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80' },
    { value: 'particle', label: 'Particle Board', desc: 'Budget-friendly option', image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&q=80' },
    { value: 'solid', label: 'Solid Wood', desc: 'Premium natural wood construction', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=80' },
  ];

  const accessoryOptions = [
    { value: 'led', label: 'LED Lighting', desc: 'Interior wardrobe lighting', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
    { value: 'mirror', label: 'Mirror Panel', desc: 'Full-length mirror on door', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80' },
    { value: 'drawer', label: 'Soft-Close Drawers', desc: 'Smooth silent closing drawers', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=80' },
    { value: 'trouser', label: 'Trouser Rack', desc: 'Dedicated trouser storage', image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&q=80' },
  ];

  const handleNext = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
    else { alert('Quote request submitted!'); navigate('/'); }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const toggleAccessory = (val) => {
    setFormData(prev => ({
      ...prev,
      accessories: prev.accessories.includes(val)
        ? prev.accessories.filter(a => a !== val)
        : [...prev.accessories, val]
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.length !== '';
      case 2: return formData.wardrobeType !== '';
      case 3: return formData.finish !== '';
      case 4: return formData.material !== '';
      case 5: return true; // accessories optional
      case 6: return formData.name && formData.phone;
      default: return false;
    }
  };

  const getEstimatedPrice = () => {
    const base = { '4': 45000, '6': 70000, '8': 95000, '10': 130000 }[formData.length] || 60000;
    const typeM = { sliding: 1, hinged: 0.9, 'walk-in': 1.8, open: 0.7 }[formData.wardrobeType] || 1;
    const matM = { plywood: 1.2, mdf: 1, particle: 0.8, solid: 1.8 }[formData.material] || 1;
    return Math.round(base * typeM * matM);
  };

  // Reusable image card grid
  const ImageCardGrid = ({ options, selected, onSelect, multi = false }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
      {options.map((opt) => {
        const isSelected = multi ? selected.includes(opt.value) : selected === opt.value;
        return (
          <div key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${
              isSelected ? 'border-[#c9a84c] shadow-md' : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
            }`}>
            <div className="relative h-24 overflow-hidden">
              <img src={opt.image} alt={opt.label} className="w-full h-full object-cover" />
              {isSelected && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#c9a84c] flex items-center justify-center">
                  <Check size={11} className="text-white" />
                </div>
              )}
            </div>
            <div className={`p-2 ${isSelected ? 'bg-[#fdf8ee]' : 'bg-white'}`}>
              <p className="text-xs font-bold text-gray-900">{opt.label}</p>
              <p className="text-[10px] text-gray-500 leading-tight">{opt.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Select the length of your wardrobe</h2>
              <p className="text-sm text-gray-500">Choose the size that fits your space</p>
            </div>
            <ImageCardGrid options={lengthOptions} selected={formData.length} onSelect={(v) => setFormData({ ...formData, length: v })} />
          </div>
        );

      case 2:
        return (
          <div>
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Select the type of wardrobe</h2>
              <p className="text-sm text-gray-500">Choose the style that best fits your space and needs</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {wardrobeTypes.map((type) => {
                const isSelected = formData.wardrobeType === type.value;
                return (
                  <div key={type.value}
                    onClick={() => setFormData({ ...formData, wardrobeType: type.value })}
                    className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${
                      isSelected ? 'border-[#c9a84c] shadow-md' : 'border-gray-200 hover:border-gray-300'
                    }`}>
                    <div className={`flex items-center gap-2 px-3 py-2 ${isSelected ? 'bg-[#fdf8ee]' : 'bg-white'}`}>
                      <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${isSelected ? 'border-[#c9a84c]' : 'border-gray-300'}`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />}
                      </div>
                      <span className="text-xs font-bold text-gray-900">{type.label}</span>
                    </div>
                    <p className="text-[10px] text-gray-500 px-3 pb-1 leading-tight">{type.desc}</p>
                    <div className="h-24 overflow-hidden">
                      <img src={type.image} alt={type.label} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[10px] text-gray-500 px-3 py-2 italic leading-tight">{type.tagline}</p>
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
              <h2 className="text-xl font-bold text-gray-900 mb-1">Select the finish</h2>
              <p className="text-sm text-gray-500">Choose the surface finish for your wardrobe</p>
            </div>
            <ImageCardGrid options={finishOptions} selected={formData.finish} onSelect={(v) => setFormData({ ...formData, finish: v })} />
          </div>
        );

      case 4:
        return (
          <div>
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Select the material</h2>
              <p className="text-sm text-gray-500">Choose the core material for your wardrobe</p>
            </div>
            <ImageCardGrid options={materialOptions} selected={formData.material} onSelect={(v) => setFormData({ ...formData, material: v })} />
          </div>
        );

      case 5:
        return (
          <div>
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Add accessories</h2>
              <p className="text-sm text-gray-500">Optional — select any accessories you'd like</p>
            </div>
            <ImageCardGrid options={accessoryOptions} selected={formData.accessories} onSelect={toggleAccessory} multi={true} />
          </div>
        );

      case 6:
        return (
          <div>
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Get your personalized quote</h2>
              <p className="text-sm text-gray-500">We'll contact you with detailed pricing</p>
            </div>
            <div className="max-w-2xl mx-auto flex gap-6">
              <div className="bg-gradient-to-br from-[#fdf8ee] to-white rounded-xl p-5 border border-[#c9a84c]/20 flex flex-col items-center justify-center flex-shrink-0 w-44">
                <p className="text-xs text-gray-500 mb-1">Estimated price</p>
                <div className="text-3xl font-bold text-[#c9a84c]">₹{(getEstimatedPrice() / 100000).toFixed(2)}L</div>
                <p className="text-xs text-gray-400 mt-1 text-center">*May vary based on specs</p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-3">
                {[
                  { id: 'name', label: 'Full Name *', type: 'text', key: 'name', placeholder: 'Your full name' },
                  { id: 'phone', label: 'Phone Number *', type: 'tel', key: 'phone', placeholder: 'Your phone number' },
                  { id: 'email', label: 'Email Address', type: 'email', key: 'email', placeholder: 'Your email' },
                  { id: 'city', label: 'City', type: 'text', key: 'city', placeholder: 'Your city' },
                ].map(f => (
                  <div key={f.id}>
                    <Label htmlFor={f.id} className="text-xs font-semibold mb-1 block text-gray-700">{f.label}</Label>
                    <input id={f.id} type={f.type}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a84c] outline-none"
                      placeholder={f.placeholder} value={formData[f.key]}
                      onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default: return null;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b flex-shrink-0">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center">
            <img src="/demaiz.jpg" alt="De Maizon" className="h-10 w-auto" />
          </button>
          <span className="text-sm font-medium text-gray-500">{currentStep}/6</span>
        </div>
        <div className="max-w-4xl mx-auto px-6 pb-4">
          <div className="flex items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                    currentStep > step.number ? 'bg-[#c9a84c] text-white'
                    : currentStep === step.number ? 'bg-[#1a1a2e] text-white ring-4 ring-[#1a1a2e]/10'
                    : 'bg-white text-gray-400 border-2 border-gray-200'
                  }`}>
                    {currentStep > step.number ? <Check size={13} /> : step.number}
                  </div>
                  <span className={`text-[9px] font-semibold whitespace-nowrap tracking-wide ${currentStep >= step.number ? 'text-gray-800' : 'text-gray-400'}`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 mx-1 mb-4 rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full bg-[#c9a84c] transition-all duration-500" style={{ width: currentStep > step.number ? '100%' : '0%' }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-6 h-full flex items-center justify-center">
          <div className="w-full">{renderStepContent()}</div>
        </div>
      </main>

      <div className="bg-white border-t px-6 py-4 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button variant="ghost" onClick={handleBack} disabled={currentStep === 1}
            className="text-gray-400 hover:text-gray-600 font-medium text-sm disabled:opacity-30">
            BACK
          </Button>
          <Button onClick={handleNext} disabled={!canProceed()}
            className={`px-10 py-5 rounded-full font-bold text-sm transition-all ${
              canProceed() ? 'bg-[#c9a84c] hover:bg-[#b8943d] text-white shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}>
            {currentStep === 6 ? 'GET QUOTE' : 'NEXT'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WardrobeCalculatorPage;
